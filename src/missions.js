import * as THREE from 'three';
import { STREET, rand, pick, clamp, bn } from './config.js';
import { spawnFoe, createCivilian, recruit, logEv, propGroup, placeOf } from './actors.js';
import { signTexture } from './textures.js';

const STUDENT_LOOKS = [
  { shirt: '#f8f9fa', pants: '#1c3d6e', skin: '#a0704c', hair: '#141414', backpack: '#e03131' },
  { shirt: '#f8f9fa', pants: '#1864ab', saree: true, skin: '#a8744f', hair: '#111', backpack: '#2f9e44' },
];
const STUDENT_NAMES = ['রাহাত', 'তানিয়া', 'মিম', 'সাকিব', 'নুসরাত', 'আরিফ'];

function marker(G, x, z, label) {
  const g = new THREE.Group();
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.9, 0.9, 14, 20, 1, true),
    new THREE.MeshBasicMaterial({ color: '#b197fc', transparent: true, opacity: 0.28, depthWrite: false, side: THREE.DoubleSide }),
  );
  beam.position.y = 7;
  g.add(beam);
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.4, 1.8, 40), new THREE.MeshBasicMaterial({ color: '#9775fa', transparent: true, opacity: 0.85, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.06;
  g.add(ring);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 0.8), new THREE.MeshBasicMaterial({ map: signTexture(label, '#5f3dc4', '#fff', 512, 112), side: THREE.DoubleSide }));
  sign.position.y = 3.4;
  g.add(sign);
  g.position.set(x, STREET.curbY, z);
  G.scene.add(g);
  return g;
}

export function createMissions(G) {
  const M = { active: null, cooldown: 28, last: null };

  const finish = (m, ok, text) => {
    m.result = ok;
    if (ok) G.stats.missionsOk++; else G.stats.missionsFail++;
    G.hud.banner(ok ? 'মিশন সফল!' : 'মিশন ব্যর্থ', text, ok ? 'good' : 'boss');
    if (ok) G.audio.cheer(true); else G.audio.alarm();
    if (m.cleanup) m.cleanup();
    M.active = null;
    M.cooldown = rand(30, 45);
  };

  const MISSIONS = {
    pocket(ahead) {
      const p = G.player;
      const s = p.x < 0 ? -1 : 1;
      const z = clamp(p.z + ahead * rand(12, 20), -STREET.len + 30, STREET.startZ - 30);
      const victim = createCivilian(G, s * 15.2, z, { mode: 'stand', name: pick(['জরিনা বেগম', 'হাবিব মামা', 'নাসরিন ভাবি', 'বেলাল ড্রাইভার', 'আলেয়া নানি']) });
      victim.fixed = true;
      victim.bubble = 'চোর! চোর! মোবাইল নিয়ে গেল!';
      const thief = spawnFoe(G, 'pocket', s * 15.4, z + ahead * 4, { state: 'run', runDir: ahead, mission: true });
      return {
        id: 'pocket', title: 'পকেটমার ধরুন!', limit: 32, target: thief,
        desc: () => `${thief.nick} ${victim.name}-এর মোবাইল নিয়ে দৌড় দিয়েছে। স্যান্ডেল ছুড়লে থামবে!`,
        update() {
          if (thief.state === 'ko') {
            victim.fixed = false;
            recruit(G, victim, 'phone', thief);
            victim.bubble = 'আমার মোবাইল! ২০১৯ সালের, কিন্তু আমার!';
            logEv(G, 'mission', { id: 'pocket', ok: true, nick: thief.nick, name: victim.name });
            return [true, `${victim.name} মোবাইল ফেরত পেলেন, সাথে এক বছরের পুরনো মিসড কল`];
          }
          if (this.t > this.limit || Math.hypot(thief.x - p.x, thief.z - p.z) > 70) {
            thief.remove = true;
            victim.bubble = 'মোবাইলটা গেল... ইএমআই এখনো বাকি!';
            logEv(G, 'mission', { id: 'pocket', ok: false, nick: thief.nick, name: victim.name });
            return [false, `${thief.nick} মোবাইল নিয়ে গলিতে হারিয়ে গেল`];
          }
          return null;
        },
      };
    },
    escort(ahead) {
      const p = G.player;
      const s = p.x < 0 ? -1 : 1;
      const z = clamp(p.z + ahead * rand(6, 12), -STREET.len + 90, STREET.startZ - 90);
      const name = pick(STUDENT_NAMES);
      const student = createCivilian(G, s * 14.8, z, { look: pick(STUDENT_LOOKS), mode: 'escortee', name });
      student.bubble = 'ভাইয়া, পরীক্ষা কেন্দ্রে পৌঁছে দেবেন?';
      const gz = clamp(z + ahead * rand(55, 70), -STREET.len + 15, STREET.startZ - 15);
      const gx = s * 15.2;
      const mk = marker(G, gx, gz, 'পরীক্ষা কেন্দ্র');
      for (let i = 0; i < 2; i++) {
        const f = spawnFoe(G, 'mastan', s * rand(13, 16), z + ahead * rand(22, 40), { mission: true });
        f.say = 'প্রশ্ন লাগবে? মাত্র পাঁচশো!';
      }
      return {
        id: 'escort', title: 'ছাত্রকে পরীক্ষায় পৌঁছান', limit: 60, target: { x: gx, z: gz },
        desc: () => `${name}-কে সাথে নিয়ে পরীক্ষা কেন্দ্রে যান। কাছে থাকলে পেছন পেছন আসবে।`,
        update() {
          mk.rotation.y += 0.02;
          if (Math.hypot(student.x - gx, student.z - gz) < 3.2) {
            student.mode = 'cheer';
            student.fixed = true;
            student.bubble = 'সময়মতো পৌঁছালাম! প্রশ্ন ফাঁস হয়নি তো?';
            p.hp = Math.min(p.maxHp, p.hp + 30);
            p.special = Math.min(1, p.special + 0.5);
            logEv(G, 'mission', { id: 'escort', ok: true, name });
            return [true, `${name} সময়মতো পরীক্ষা দিল · দম +৩০ · বিশেষ শক্তি +৫০%`];
          }
          if (this.t > this.limit) {
            student.mode = 'walk';
            student.lane = s * 15;
            student.bubble = 'পরীক্ষা মিস... আগামী বছর আবার!';
            logEv(G, 'mission', { id: 'escort', ok: false, name });
            return [false, `${name} পরীক্ষায় দেরি করল, আম্মুর বকা নিশ্চিত`];
          }
          return null;
        },
        cleanup() { G.scene.remove(mk); },
      };
    },
    bribe(ahead) {
      const p = G.player;
      const s = Math.random() < 0.5 ? -1 : 1;
      const z = clamp(p.z + ahead * rand(28, 45), -STREET.len + 20, STREET.startZ - 20);
      const thik = spawnFoe(G, 'thikadar', s * 15.4, z, { mission: true });
      thik.face = s * Math.PI / 2;
      thik.props = [propGroup(G, s * 16.3, z + 0.7, 'tender', s)];
      const off = spawnFoe(G, 'ghush', s * 17.1, z + 0.4, { mission: true });
      off.face = -s * Math.PI / 2;
      const place = placeOf(G, s * 17.9, z);
      return {
        id: 'bribe', title: 'ঘুষ লেনদেন থামান!', limit: 30, target: thik,
        desc: () => thik.state === 'busy'
          ? `${thik.nick} টেন্ডারের ব্রিফকেস দিচ্ছে ${off.nick}-কে। লেনদেন শেষ হওয়ার আগে পৌঁছান!`
          : `লেনদেন ভেস্তে গেছে! এবার ${thik.nick}-কে ধরাশায়ী করুন`,
        update() {
          if (thik.state === 'ko') {
            logEv(G, 'mission', { id: 'bribe', ok: true, nick: thik.nick, officer: off.nick, place });
            return [true, 'টেন্ডারের ব্রিফকেস জব্দ! রাস্তা এবার মাত্র একবার খোঁড়া হবে'];
          }
          if (thik.state !== 'busy') this.limit = Infinity;
          if (this.t > this.limit) {
            thik.remove = true;
            if (off.state === 'busy') off.remove = true;
            G.stats.bribesDone++;
            logEv(G, 'mission', { id: 'bribe', ok: false, nick: thik.nick, officer: off.nick, place });
            return [false, `টেন্ডার পাস! ${place ? place + '-এর সামনের ' : ''}রাস্তা আগামী মাসে আবার খোঁড়া হবে`];
          }
          return null;
        },
      };
    },
  };

  M.reset = () => {
    if (M.active && M.active.cleanup) M.active.cleanup();
    M.active = null;
    M.cooldown = rand(22, 30);
    M.last = null;
  };

  M.update = (dt) => {
    const p = G.player;
    if (p.state === 'dead') return;
    if (!M.active) {
      if (!G.waveActive) return;
      M.cooldown -= dt;
      if (M.cooldown > 0) return;
      const ahead = p.z > -STREET.len + 140 ? -1 : 1;
      const id = pick(Object.keys(MISSIONS).filter((k) => k !== M.last));
      M.last = id;
      const m = MISSIONS[id](ahead);
      m.t = 0;
      M.active = m;
      G.hud.banner('নতুন মিশন', m.title, 'mission');
      G.audio.alarm();
      return;
    }
    const m = M.active;
    m.t += dt;
    const r = m.update();
    if (r) finish(m, r[0], r[1]);
  };

  M.info = () => {
    const m = M.active;
    if (!m) return null;
    const left = m.limit === Infinity ? null : Math.max(0, m.limit - m.t);
    return { title: m.title, desc: m.desc(), left, frac: left === null ? 1 : left / m.limit, target: m.target, secs: left === null ? '' : bn(Math.ceil(left)) };
  };

  return M;
}
