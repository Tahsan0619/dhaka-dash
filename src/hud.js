import * as THREE from 'three';
import { HEADLINES, STREET, FOES, WEAPONS, bn, taka } from './config.js';

const $ = (id) => document.getElementById(id);
const v3 = new THREE.Vector3();

export class Hud {
  constructor(camera) {
    this.camera = camera;
    this.layer = $('labels');
    this.labels = new Map();
    this.bubbles = new Map();
    this.pops = [];
    this.moneyShown = 0;
    this.hintText = '';
    this.mini = $('minimap');
    this.mg = this.mini.getContext('2d');
    this.track = $('tickerTrack');
    this.tickerX = 0;
    this.queue = [];
    this.pool = HEADLINES.slice().sort(() => Math.random() - 0.5);
    this.poolIdx = 0;
    for (let i = 0; i < 4; i++) this.addHeadline(this.nextHeadline());
    this.toastT = 0;
    this.bannerT = 0;
  }

  show(on) {
    $('hud').classList.toggle('hidden', !on);
    $('touch').classList.toggle('hidden', !on);
    if (!on) {
      for (const l of this.labels.values()) l.el.remove();
      this.labels.clear();
      for (const b of this.bubbles.values()) b.el.remove();
      this.bubbles.clear();
      for (const p of this.pops) p.el.remove();
      this.pops.length = 0;
      this.blindT = 0;
      $('blind').classList.remove('on');
    }
  }

  project(x, y, z) {
    v3.set(x, y, z).project(this.camera);
    const w = window.innerWidth, h = window.innerHeight;
    return { x: (v3.x * 0.5 + 0.5) * w, y: (-v3.y * 0.5 + 0.5) * h, ok: v3.z < 1 && v3.z > -1 };
  }

  addLabel(f) {
    const el = document.createElement('div');
    el.className = 'tag' + (f.boss ? ' boss' : '');
    el.innerHTML = `<b>${f.nick}</b><small>${f.key === 'copy' ? FOES.prosno.name : f.type.name}</small><i><s></s></i>`;
    this.layer.appendChild(el);
    this.labels.set(f.id, { el, bar: el.querySelector('s'), f });
  }

  removeLabel(f) {
    const l = this.labels.get(f.id);
    if (l) { l.el.remove(); this.labels.delete(f.id); }
  }

  bubble(a, text) {
    let b = this.bubbles.get(a.id);
    if (!b) {
      const el = document.createElement('div');
      el.className = 'bubble';
      this.layer.appendChild(el);
      b = { el, a };
      this.bubbles.set(a.id, b);
    }
    b.el.textContent = text;
    b.el.classList.toggle('foe', !!a.isFoe);
    b.t = 2.4;
  }

  removeBubble(a) {
    const b = this.bubbles.get(a.id);
    if (b) { b.el.remove(); this.bubbles.delete(a.id); }
  }

  pop(text, x, y, z, kind = '') {
    const el = document.createElement('div');
    el.className = 'pop ' + kind;
    el.textContent = text;
    this.layer.appendChild(el);
    this.pops.push({ el, x, y, z, t: 0, dx: (Math.random() - 0.5) * 30 });
  }

  toast(text, kind = '') {
    const el = $('toast');
    el.textContent = text;
    el.className = 'toast show ' + kind;
    this.toastT = 2.2;
  }

  banner(title, sub, kind = '') {
    const el = $('banner');
    $('bannerTitle').textContent = title;
    $('bannerSub').textContent = sub;
    el.className = 'banner show ' + kind;
    this.bannerT = 2.6;
  }

  hint(text) { this.hintText = text; }

  blind(t) {
    this.blindT = Math.max(this.blindT || 0, t);
    const el = $('blind');
    if (!el.children.length) {
      const words = ['প্রশ্নপত্র', '১০০% কমন', 'সাজেশন', 'ফাঁস!', 'MCQ', 'উত্তরমালা', 'গোপনীয়'];
      for (let i = 0; i < 14; i++) {
        const s = document.createElement('span');
        s.textContent = words[i % words.length];
        s.style.left = (i * 37) % 92 + '%';
        s.style.top = (i * 53) % 86 + '%';
        s.style.transform = `rotate(${(i * 47) % 50 - 25}deg)`;
        el.appendChild(s);
      }
    }
    el.classList.add('on');
  }

  flash() {
    const el = $('flash');
    el.classList.remove('on');
    void el.offsetWidth;
    el.classList.add('on');
  }

  nextHeadline() {
    if (this.queue.length) return this.queue.shift();
    const h = this.pool[this.poolIdx++ % this.pool.length];
    return h;
  }

  addHeadline(text) {
    const s = document.createElement('span');
    s.textContent = text;
    this.track.appendChild(s);
  }

  news(text) { this.queue.push('এইমাত্র: ' + text); }

  event(f, kind) {
    const n = f.nick;
    if (kind === 'ko') {
      const lines = {
        chanda: [`চাঁদাবাজ ${n} ধরাশায়ী, দোকানিরা ফেরত পেলেন ${taka(f.loot)}`, `"মাসের টাকা কই?" জিজ্ঞেস করে মাসের সেরা মার খেলেন ${n}`],
        ghush: [`${n}-এর টেবিল থেকে ${taka(f.loot)} উদ্ধার, ফাইল নড়ল নিয়মে`, `"কাল আসেন" বলতেন ${n}, আজ নিজেই আর উঠতে পারছেন না`],
        mastan: [`লাঠি হাতে ${n} এখন ফুটপাতে চিৎপটাং`, `"চিনস আমারে?" প্রশ্নের জবাবে ${n}-কে চিনে নিল জনতা`],
        syndicate: [`${n}-এর গুদাম খুলল জনতা, পেঁয়াজের দাম নামল`, `সিন্ডিকেট বলে কিছু নেই বলেছিলেন ${n}, এখন তিনিও নেই`],
        neta: [`"আমি কে জানিস?" ${n}-এর প্রশ্নের উত্তর দিল জনতা`, `ফিতা কাটতে এসে নিজেই কাটা পড়লেন ${n}`],
        bhumi: [`দখলদার ${n} এখন নিজেই ফুটপাতে "দখল" হয়ে শুয়ে আছেন`, `${n}-এর বুলডোজার জব্দ, নদী ফেরত পেল নদী`],
        vejal: [`${n}-এর টনিকে কাজ হলো না, জনতার ওষুধেই সেরে গেলেন`, `মেয়াদোত্তীর্ণ ওষুধ বিক্রেতা ${n}-এর মেয়াদও আজ শেষ`],
        prosno: [`প্রশ্নফাঁসকারী ${n} ধরা, আসল কপিটা চিনে নিল জনতা`, `${n}-এর সাজেশন ১০০% কমন পড়েনি, মার পড়েছে`],
        pocket: [`পকেটমার ${n} ধরা, মোবাইল ফিরল মালিকের পকেটে`],
        thikadar: [`টেন্ডারবাজ ${n}-এর ব্রিফকেস জব্দ, রাস্তা একবারই খোঁড়া হবে`],
      };
      const l = lines[f.key];
      this.news(l ? l[(Math.random() * l.length) | 0] : `${n} ধরাশায়ী`);
    } else if (kind === 'extorted') {
      this.news(`${n} দোকানির কাছ থেকে চাঁদা নিয়ে গেল; জনতা কোথায়?`);
      this.toast('চাঁদাবাজি হয়ে গেল! দ্রুত থামান', 'warn');
    }
  }

  update(G, dt) {
    const p = G.player;
    this.moneyShown += (G.money - this.moneyShown) * Math.min(1, dt * 6);
    if (Math.abs(G.money - this.moneyShown) < 1) this.moneyShown = G.money;
    $('hMoney').textContent = taka(this.moneyShown);
    $('hKos').textContent = bn(G.kos);
    $('hWave').textContent = bn(G.wave);
    const hp = Math.max(0, p.hp / p.maxHp);
    $('hHpFill').style.width = hp * 100 + '%';
    $('hHpText').textContent = bn(Math.ceil(hp * 100)) + '%';
    $('hHp').classList.toggle('low', hp < 0.3);
    $('hPowerFill').style.width = p.special * 100 + '%';
    $('hPower').classList.toggle('ready', p.special >= 1);
    $('hSandals').textContent = '×' + bn(p.sandals);
    $('hSandalWrap').classList.toggle('empty', p.sandals === 0);
    $('hPowerName').textContent = p.hero.special.name;
    const wp = $('hWeapon');
    wp.classList.toggle('hidden', !p.weapon);
    if (p.weapon) wp.textContent = `${p.weapon.kind === 'broom' ? '🧹' : '🪵'} ${WEAPONS[p.weapon.kind].name} ×${bn(p.weapon.uses)}`;
    const fl = $('hFollowers');
    fl.classList.toggle('hidden', !G.followers.length);
    if (G.followers.length) fl.textContent = `👥 দলে ${bn(G.followers.length)} জন`;
    $('hClock').textContent = G.weather.label();
    $('hClock').classList.toggle('night', G.weather.nightK > 0.5);

    if (this.blindT > 0) {
      this.blindT -= dt;
      if (this.blindT <= 0) $('blind').classList.remove('on');
    }

    const mi = G.missions.info();
    const mp = $('mission');
    mp.classList.toggle('hidden', !mi);
    if (mi) {
      $('mTitle').textContent = mi.title;
      $('mDesc').textContent = mi.desc;
      const t = mi.target;
      const d = Math.hypot(t.x - p.x, t.z - p.z);
      const dir = Math.abs(t.z - p.z) > Math.abs(t.x - p.x) * 0.8 ? (t.z < p.z ? 'সামনে' : 'পেছনে') : t.x > p.x ? 'ডানে' : 'বাঁয়ে';
      $('mDist').textContent = d < 5 ? 'একদম কাছে' : `${bn(Math.round(d))} মি ${dir}`;
      $('mTime').textContent = mi.secs ? mi.secs + ' সে' : '';
      $('mFill').style.width = mi.frac * 100 + '%';
      mp.classList.toggle('urgent', mi.left !== null && mi.left < 8);
    }

    const combo = $('combo');
    if (G.combo >= 3 && G.comboT > 0) {
      combo.classList.add('show');
      combo.firstElementChild.textContent = bn(G.combo);
    } else combo.classList.remove('show');

    const hint = $('hint');
    hint.textContent = this.hintText;
    hint.classList.toggle('show', !!this.hintText);
    this.hintText = '';

    this.toastT -= dt;
    if (this.toastT <= 0) $('toast').classList.remove('show');
    this.bannerT -= dt;
    if (this.bannerT <= 0) $('banner').classList.remove('show');

    this.objective(G);
    this.drawMinimap(G);
    this.overlay(dt);
    this.ticker(dt);
  }

  objective(G) {
    const p = G.player;
    let target = null, best = Infinity, label = '';
    for (const f of G.foes) {
      if (f.state === 'ko') continue;
      let d = Math.hypot(f.x - p.x, f.z - p.z);
      if (f.key === 'chanda' && f.state === 'busy') d *= 0.6;
      if (d < best) { best = d; target = f; }
    }
    const el = $('objective');
    if (!target) {
      label = G.waveClearT > 0 ? 'পরের দফা আসছে...' : 'রাস্তা আপাতত পরিষ্কার';
      $('objText').textContent = label;
      el.classList.add('calm');
      return;
    }
    el.classList.remove('calm');
    const dx = target.x - p.x, dz = target.z - p.z;
    const dir = Math.abs(dz) > Math.abs(dx) * 0.8 ? (dz < 0 ? 'সামনে' : 'পেছনে') : dx > 0 ? 'ডানে' : 'বাঁয়ে';
    const what = target.key === 'chanda' && target.state === 'busy' ? 'চাঁদাবাজি চলছে!' : target.key === 'ghush' && target.state === 'busy' ? 'ঘুষ লেনদেন চলছে!' : target.nick;
    $('objText').textContent = best < 6 ? `${what} · একদম কাছে` : `${what} · ${bn(Math.round(best))} মি ${dir}`;
    $('objArrow').style.transform = `rotate(${Math.atan2(dx, -dz)}rad)`;
  }

  drawMinimap(G) {
    const g = this.mg;
    const W = this.mini.width, H = this.mini.height;
    const p = G.player;
    const s = 1.45;
    g.clearRect(0, 0, W, H);
    g.save();
    g.beginPath();
    g.arc(W / 2, H / 2, W / 2 - 2, 0, Math.PI * 2);
    g.clip();
    g.fillStyle = '#3b3a36';
    g.fillRect(0, 0, W, H);
    const X = (x) => W / 2 + (x - p.x) * s;
    const Z = (z) => H / 2 + (z - p.z) * s;
    g.fillStyle = '#6d6a62';
    g.fillRect(X(-19.5), 0, 39 * s, H);
    g.fillStyle = '#4a4a4f';
    g.fillRect(X(-12), 0, 24 * s, H);
    g.fillStyle = '#7a8a4f';
    g.fillRect(X(-1.1), 0, 2.2 * s, H);
    g.fillStyle = '#b8a98f';
    g.fillRect(0, 0, X(-19.5), H);
    g.fillRect(X(19.5), 0, W, H);
    g.fillStyle = '#e03131';
    for (const zb of [STREET.startZ, -STREET.len]) g.fillRect(X(-19.5), Z(zb) - 2, 39 * s, 4);
    for (const st of G.world.teaStalls) dot(g, X(st.x), Z(st.z), 5, '#ffb31a');
    for (const st of G.world.sandalStalls) dot(g, X(st.x), Z(st.z), 5, st.cooldown > 0 ? '#3b6b73' : '#22b8cf');
    for (const v of G.traffic.list) {
      g.fillStyle = v.parked ? '#69db7c' : v.T.danger ? '#ff6b4a' : '#adb5bd';
      g.fillRect(X(v.x) - (v.T.w * s) / 2, Z(v.z) - (v.T.len * s) / 2, v.T.w * s, v.T.len * s);
    }
    for (const k of G.pickups) dot(g, X(k.x), Z(k.z), 3.5, '#ffd43b');
    for (const c of G.followers) dot(g, X(c.x), Z(c.z), 3, '#74c0fc');
    const mi = G.missions.active;
    if (mi) {
      const t = mi.target;
      const mx = clampN(X(t.x), 8, W - 8), my = clampN(Z(t.z), 8, H - 8);
      dot(g, mx, my, 6, '#9775fa', '#fff');
    }
    for (const f of G.foes) {
      if (f.state === 'ko') continue;
      const busy = f.state === 'busy' || f.state === 'escort';
      dot(g, X(f.x), Z(f.z), f.boss ? 7 : 4.5, busy ? '#ff922b' : '#ff2d2d', '#fff');
    }
    g.translate(W / 2, H / 2);
    g.rotate(Math.PI - p.face);
    g.fillStyle = '#ffd43b';
    g.strokeStyle = '#1a1a1a';
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(0, -9);
    g.lineTo(6.5, 7);
    g.lineTo(0, 3.5);
    g.lineTo(-6.5, 7);
    g.closePath();
    g.fill();
    g.stroke();
    g.restore();
  }

  overlay(dt) {
    const off = (el) => { el.style.display = 'none'; };
    for (const l of this.labels.values()) {
      const f = l.f;
      if (f.state === 'ko' || f.state === 'busy' && Math.hypot(f.x - this.camera.position.x, f.z - this.camera.position.z) > 40) { off(l.el); continue; }
      const s = this.project(f.x, f.y + f.model.height + 0.35, f.z);
      const d = Math.hypot(f.x - this.camera.position.x, f.z - this.camera.position.z);
      if (!s.ok || d > 55) { off(l.el); continue; }
      l.el.style.display = '';
      l.el.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -100%)`;
      l.bar.style.width = Math.max(0, f.hp / f.maxHp) * 100 + '%';
      l.el.classList.toggle('busy', f.state === 'busy' || f.state === 'escort');
    }
    for (const [id, b] of this.bubbles) {
      b.t -= dt;
      const a = b.a;
      if (b.t <= 0) { b.el.remove(); this.bubbles.delete(id); continue; }
      const s = this.project(a.x, a.y + a.model.height + (a.isFoe ? 0.95 : 0.45), a.z);
      if (!s.ok) { off(b.el); continue; }
      b.el.style.display = '';
      b.el.style.opacity = Math.min(1, b.t * 3);
      b.el.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -100%)`;
    }
    for (let i = this.pops.length - 1; i >= 0; i--) {
      const p = this.pops[i];
      p.t += dt;
      if (p.t > 1.0) { p.el.remove(); this.pops.splice(i, 1); continue; }
      const s = this.project(p.x, p.y, p.z);
      if (!s.ok) { off(p.el); continue; }
      p.el.style.display = '';
      const k = p.t;
      p.el.style.opacity = k < 0.7 ? 1 : 1 - (k - 0.7) / 0.3;
      const sc = k < 0.12 ? 0.6 + k * 5 : 1.2 - Math.min(0.2, (k - 0.12));
      p.el.style.transform = `translate(${s.x + p.dx * k}px, ${s.y - k * 60}px) translate(-50%, -50%) scale(${sc})`;
    }
  }

  ticker(dt) {
    this.tickerX -= 70 * dt;
    const first = this.track.firstElementChild;
    if (first && -this.tickerX > first.offsetWidth) {
      this.tickerX += first.offsetWidth;
      first.remove();
      this.addHeadline(this.nextHeadline());
    }
    this.track.style.transform = `translateX(${this.tickerX}px)`;
  }
}

const clampN = (v, a, b) => (v < a ? a : v > b ? b : v);

function dot(g, x, y, r, fill, stroke) {
  g.beginPath();
  g.arc(x, y, r, 0, Math.PI * 2);
  g.fillStyle = fill;
  g.fill();
  if (stroke) { g.strokeStyle = stroke; g.lineWidth = 1.5; g.stroke(); }
}