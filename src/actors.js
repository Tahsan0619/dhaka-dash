import * as THREE from 'three';
import {
  FOES, MOVES, PLAYER, CIVILIAN_LOOKS, STREET, WEAPONS, NICKNAMES, CITIZEN_NAMES, KAN_LINES, BOSS_ORDER,
  rand, pick, clamp, angleLerp, taka,
} from './config.js';
import { buildPerson, animate, setHeld } from './people.js';
import { groundY, resolveStatic } from './world.js';
import { signTexture } from './textures.js';
import { RIDE } from './traffic.js';

let uid = 1;
const MAX_FOLLOWERS = 4;

function makeActor(G, look) {
  const model = buildPerson(look);
  G.scene.add(model.group);
  return {
    id: uid++, model, x: 0, z: 0, y: 0, face: 0, kx: 0, kz: 0,
    state: 'idle', st: 0, anim: { mode: 'idle', t: 0, move: 0, phase: 0, guard: false },
    radius: 0.42, inv: 0, carImmune: 0,
  };
}

function setState(a, s) {
  a.state = s;
  a.st = 0;
}

const fwdX = (a) => Math.sin(a.face);
const fwdZ = (a) => Math.cos(a.face);
const faceTo = (a, x, z) => Math.atan2(x - a.x, z - a.z);

export function logEv(G, k, data = {}) {
  G.log.push({ t: G.stats.time, wave: G.wave, k, ...data });
}

export function placeOf(G, x, z) {
  let best = null, bd = 16;
  for (const s of G.world.shops) {
    const d = Math.hypot(s.x - x, s.z - z);
    if (d < bd) { bd = d; best = s.name; }
  }
  return best;
}

function integrate(G, a, dt) {
  a.x += a.kx * dt;
  a.z += a.kz * dt;
  const k = Math.exp(-6 * dt);
  a.kx *= k;
  a.kz *= k;
  resolveStatic(G.world, a, a.radius);
  a.y += (groundY(a.x) - a.y) * Math.min(1, dt * 20);
  const g = a.model.group;
  g.position.set(a.x, a.y, a.z);
  g.rotation.y = a.face;
}

function separate(list) {
  for (let i = 0; i < list.length; i++) {
    const a = list[i];
    if (a.ghost) continue;
    for (let j = i + 1; j < list.length; j++) {
      const b = list[j];
      if (b.ghost) continue;
      const dx = b.x - a.x, dz = b.z - a.z;
      const min = a.radius + b.radius;
      const d2 = dx * dx + dz * dz;
      if (d2 < min * min && d2 > 1e-6) {
        const d = Math.sqrt(d2);
        const push = (min - d) * 0.5;
        const wa = a.heavy ? 0.25 : b.heavy ? 0.75 : 0.5;
        a.x -= (dx / d) * push * 2 * wa;
        a.z -= (dz / d) * push * 2 * wa;
        b.x += (dx / d) * push * 2 * (1 - wa);
        b.z += (dz / d) * push * 2 * (1 - wa);
      }
    }
  }
}

export function createPlayer(G, hero) {
  const p = makeActor(G, hero.look);
  Object.assign(p, {
    isPlayer: true, hero, hp: hero.hp, maxHp: hero.hp, sandals: PLAYER.sandals, special: 0,
    move: null, queued: false, hitSet: new Set(), dodgeX: 0, dodgeZ: 0, sipping: false,
    weapon: null, riding: null, useCd: 0, swingUsed: false, spinTick: 0,
  });
  p.x = -14.5;
  p.z = -6;
  p.face = Math.PI;
  setState(p, 'free');
  return p;
}

export function setHero(G, p, hero) {
  if (p.hero === hero) return;
  const vis = p.model.group.visible;
  G.scene.remove(p.model.group);
  p.model = buildPerson(hero.look);
  p.model.group.visible = vis;
  G.scene.add(p.model.group);
  p.hero = hero;
  p.maxHp = hero.hp;
}

function nearestFoe(G, a, maxD, cone = Math.PI) {
  let best = null, bd = maxD;
  for (const f of G.foes) {
    if (f.state === 'ko' || f.state === 'down') continue;
    const dx = f.x - a.x, dz = f.z - a.z;
    const d = Math.hypot(dx, dz);
    if (d > bd) continue;
    const ang = Math.abs(angleDiff(Math.atan2(dx, dz), a.face));
    if (ang > cone) continue;
    bd = d;
    best = f;
  }
  return best;
}

function angleDiff(a, b) {
  let d = a - b;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

function startAttack(G, p, move) {
  G.stats.swings++;
  const target = nearestFoe(G, p, 3.4, 1.9);
  if (target) p.face = faceTo(p, target.x, target.z);
  p.move = move;
  p.queued = false;
  p.swingUsed = false;
  p.hitSet.clear();
  setState(p, 'attack');
  G.audio.swing();
}

function nearestParked(G, p, maxD) {
  let best = null, bd = maxD;
  for (const v of G.traffic.list) {
    if (!v.parked || v.rider) continue;
    const d = Math.hypot(v.x - p.x, v.z - p.z);
    if (d < bd) { bd = d; best = v; }
  }
  return best;
}

const boardText = (type) => (type === 'rickshaw' ? 'রিকশায় উঠুন' : 'সিএনজিতে উঠুন');

export function updatePlayer(G, p, dt, axis, actions) {
  p.st += dt;
  p.inv -= dt;
  p.carImmune -= dt;
  p.useCd -= dt;
  const A = p.anim;
  A.t += dt;
  const want = (a) => actions.includes(a);
  if (p.riding) { updateRide(G, p, dt, axis, actions); return; }

  let mode = 'idle';
  let moving = 0;
  const near = nearestFoe(G, p, 7);
  A.guard = !!near;
  const H = p.hero;
  const wet = G.weather.waterAt(p.x, p.z);
  if (wet > 0 && p.state !== 'dead') {
    G.stats.wade += dt;
    if ((axis.x || axis.y) && Math.random() < dt * 3) G.audio.splash();
  }
  const slow = 1 - wet * 0.45;

  if (p.state === 'dead') {
    mode = 'ko';
  } else if (p.state === 'free') {
    const sp = H.speed * slow;
    if (axis.x || axis.y) {
      const vx = axis.x * sp, vz = axis.y * sp;
      p.x += vx * dt;
      p.z += vz * dt;
      p.face = angleLerp(p.face, Math.atan2(vx, vz), 1 - Math.exp(-16 * dt));
      moving = Math.hypot(axis.x, axis.y);
      A.phase += sp * moving * dt * 2.1;
      mode = 'walk';
    } else mode = p.sipping ? 'sip' : 'idle';
    if (want('punch')) startAttack(G, p, 'punch1');
    else if (want('kick')) startAttack(G, p, 'kick');
    else if (want('dodge')) startDodge(G, p, axis);
    else if (want('use')) {
      const v = nearestParked(G, p, 3.0);
      if (v) mount(G, p, v);
      else G.hud.toast('কাছে কোনো রিকশা বা সিএনজি নেই', 'warn');
    } else if (want('throw')) {
      if (p.sandals > 0) { setState(p, 'throw'); p.thrown = false; }
      else G.hud.toast('স্যান্ডেল শেষ! নীল দাগের জুতার দোকানে যান', 'warn');
    } else if (want('special')) {
      if (p.special >= 1) startSpecial(G, p);
      else G.hud.toast(`${H.special.name} এখনো ভরেনি`, 'warn');
    }
    if (p.state === 'free' && !near) {
      const v = nearestParked(G, p, 3.0);
      if (v) G.hud.hint(`G চাপুন: ${boardText(v.type)}`);
    }
  } else if (p.state === 'attack') {
    const mv = MOVES[p.move];
    const t = p.st;
    mode = p.move === 'kick' ? 'kick' : p.move === 'punch3' ? 'uppercut' : mv.arm === 'R' ? 'punchR' : 'punchL';
    if (t > mv.from - 0.06 && t < mv.to) {
      const tgt = nearestFoe(G, p, 1.0, 0.8);
      if (!tgt) { p.x += fwdX(p) * 2.6 * dt; p.z += fwdZ(p) * 2.6 * dt; }
    }
    if (t >= mv.from && t <= mv.to) resolvePlayerHit(G, p, mv);
    if (want('punch') && p.move !== 'kick' && p.move !== 'punch3' && t > 0.06) p.queued = true;
    if (want('dodge') && t > mv.to) startDodge(G, p, axis);
    else if (t >= mv.dur) {
      if (p.queued && p.move === 'punch1') startAttack(G, p, 'punch2');
      else if (p.queued && p.move === 'punch2') startAttack(G, p, 'punch3');
      else setState(p, 'free');
    }
  } else if (p.state === 'dodge') {
    mode = 'dodge';
    const k = 1 - (p.st / 0.42) * 0.55;
    p.x += p.dodgeX * PLAYER.dodgeSpeed * k * slow * dt;
    p.z += p.dodgeZ * PLAYER.dodgeSpeed * k * slow * dt;
    if (p.st >= 0.42) setState(p, 'free');
  } else if (p.state === 'hit') {
    mode = 'hit';
    if (p.st >= 0.3) setState(p, 'free');
  } else if (p.state === 'down') {
    mode = 'down';
    if (p.st >= 1.0) { setState(p, 'getup'); p.inv = 1.0; }
  } else if (p.state === 'getup') {
    mode = 'getup';
    if (p.st >= 0.55) setState(p, 'free');
  } else if (p.state === 'throw') {
    mode = p.st < 0.13 ? 'throwUp' : 'throw';
    if (!p.thrown && p.st >= 0.13) {
      p.thrown = true;
      const tgt = nearestFoe(G, p, 22, 1.2);
      if (tgt) p.face = faceTo(p, tgt.x, tgt.z);
      throwSandal(G, p, tgt);
    }
    if (p.st >= 0.34) setState(p, 'free');
  } else if (p.state === 'special') {
    mode = 'fist';
    if (!p.blasted && p.st >= 0.3) {
      p.blasted = true;
      if (H.special.id === 'kan') kanPower(G, p);
      else peoplePower(G, p);
    }
    if (p.st >= 0.95) setState(p, 'free');
  } else if (p.state === 'bell') {
    mode = 'walk';
    moving = 1.6;
    A.phase += dt * 26;
    if (axis.x || axis.y) p.face = angleLerp(p.face, Math.atan2(axis.x, axis.y), 1 - Math.exp(-3 * dt));
    const sp = 15 * (1 - p.st * 0.4);
    p.x += fwdX(p) * sp * dt;
    p.z += fwdZ(p) * sp * dt;
    for (const f of G.foes) {
      if (f.state === 'ko' || p.hitSet.has(f.id)) continue;
      const dx = f.x - p.x, dz = f.z - p.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.8) {
        p.hitSet.add(f.id);
        const side = Math.sign(dx * fwdZ(p) - dz * fwdX(p)) || 1;
        damageFoe(G, f, (f.boss ? 30 : 34) * H.dmg, {
          knock: true, special: true, dirX: fwdX(p) * 0.6 + fwdZ(p) * side * 0.8, dirZ: fwdZ(p) * 0.6 - fwdX(p) * side * 0.8, word: 'ক্রিং-ধাম!',
        });
      }
    }
    if (p.st >= 0.95) setState(p, 'free');
  } else if (p.state === 'spin') {
    mode = 'spin';
    p.face += dt * 17;
    const sp = H.speed * 0.6 * slow;
    p.x += axis.x * sp * dt;
    p.z += axis.y * sp * dt;
    p.spinTick -= dt;
    if (p.spinTick <= 0) {
      p.spinTick = 0.2;
      G.audio.swing();
      const last = p.st > 2.75;
      for (const f of G.foes) {
        if (f.state === 'ko' || f.state === 'down') continue;
        const dx = f.x - p.x, dz = f.z - p.z;
        const d = Math.hypot(dx, dz);
        if (d < 2.6) damageFoe(G, f, 6 * H.dmg, { knock: last, special: last, dirX: dx / (d || 1), dirZ: dz / (d || 1), word: pick(['ছাতাপেটা!', 'ঘুরে ঘুরে ঠাস!', 'খালাম্মা স্টাইল!']), stun: 0.25 });
      }
    }
    if (p.st >= 3.0) setState(p, 'free');
  }

  p.sipping = false;
  if (p.state !== 'dead') {
    for (const st of G.world.teaStalls) {
      if (Math.hypot(p.x - st.x, p.z - st.z) < 2.6) {
        if (p.hp < p.maxHp) {
          p.hp = Math.min(p.maxHp, p.hp + 20 * dt);
          p.sipping = !moving && p.state === 'free';
          G.teaT = (G.teaT || 0) - dt;
          if (G.teaT <= 0) { G.audio.sip(); G.teaT = 0.8; }
          G.stats.tea += dt;
          G.hud.hint(G.weather.rain > 0.3 ? 'বৃষ্টিতে গরম চা... দম ফিরছে ☕' : 'চা খাচ্ছেন... দম ফিরছে ☕');
        } else G.hud.hint('দম পুরো! এবার মাঠে নামেন');
      }
    }
    for (const st of G.world.sandalStalls) {
      st.cooldown -= dt;
      if (st.cooldown <= 0 && p.sandals < PLAYER.maxSandals && Math.hypot(p.x - st.x, p.z - st.z) < 2.6) {
        p.sandals = PLAYER.maxSandals;
        st.cooldown = 25;
        G.audio.pickup();
        G.hud.toast('স্যান্ডেল ভরা হলো! F চেপে ছুড়ুন 🩴', 'good');
      }
    }
  }

  A.mode = mode;
  A.move = moving;
  animate(p.model, A, dt);
  integrate(G, p, dt);
}

function startDodge(G, p, axis) {
  let dx = axis.x, dz = axis.y;
  if (!dx && !dz) { dx = fwdX(p); dz = fwdZ(p); }
  const d = Math.hypot(dx, dz);
  p.dodgeX = dx / d;
  p.dodgeZ = dz / d;
  p.face = Math.atan2(dx, dz);
  p.inv = 0.36;
  setState(p, 'dodge');
  G.stats.dodges++;
  G.audio.swing();
}

function startSpecial(G, p) {
  const id = p.hero.special.id;
  p.special = 0;
  G.stats.powers++;
  logEv(G, 'special', { id });
  if (id === 'bell') {
    const t = nearestFoe(G, p, 14, 1.6);
    if (t) p.face = faceTo(p, t.x, t.z);
    setState(p, 'bell');
    p.hitSet.clear();
    p.inv = 1.1;
    G.audio.bell();
    G.shake = 0.3;
    G.hud.banner('ক্রিং-ক্রিং তুফান!', 'পথ ছাড়েন, রিকশাওয়ালা আসছে!', 'power');
    G.hud.pop('ক্রিং ক্রিং!', p.x, p.y + 2.2, p.z, 'big');
  } else if (id === 'spin') {
    setState(p, 'spin');
    p.spinTick = 0;
    p.inv = 3.1;
    G.audio.roar();
    G.hud.banner('ছাতা ঘূর্ণি!', 'খালাম্মার ছাতার সামনে কেউ টিকে না', 'power');
  } else {
    setState(p, 'special');
    p.blasted = false;
    p.inv = 1.0;
  }
}

function resolvePlayerHit(G, p, mv) {
  const H = p.hero;
  const W = p.weapon ? WEAPONS[p.weapon.kind] : null;
  const range = mv.range * (1 + (H.range - 1) * 0.6) + (W ? W.range : 0);
  const dmg = mv.dmg * H.dmg * (W ? W.dmg : 1);
  let hitAny = false;
  for (const f of G.foes) {
    if (p.hitSet.has(f.id) || f.state === 'ko' || f.state === 'down' || f.state === 'getup') continue;
    const dx = f.x - p.x, dz = f.z - p.z;
    const d = Math.hypot(dx, dz);
    if (d > range + f.radius * 0.5) continue;
    const dot = (dx * fwdX(p) + dz * fwdZ(p)) / (d || 1);
    if (d > 0.9 && dot < 0.35) continue;
    p.hitSet.add(f.id);
    hitAny = true;
    const word = W && (mv.knock || Math.random() < 0.45) ? W.word : mv.word;
    damageFoe(G, f, dmg, { knock: mv.knock, dirX: dx / (d || 1), dirZ: dz / (d || 1), word, weapon: W ? p.weapon.kind : null });
  }
  if (hitAny && W && !p.swingUsed) {
    p.swingUsed = true;
    p.weapon.uses--;
    if (p.weapon.uses <= 0) {
      G.hud.toast(`${W.name} ভেঙে গেল! আবার খালি হাতে`, 'warn');
      G.hud.pop('মট!', p.x, p.y + 2, p.z, 'hurt');
      logEv(G, 'weaponBreak', { kind: p.weapon.kind });
      p.weapon = null;
      setHeld(p.model, p.model.defaultHeld);
    }
  }
}

function koMethod(o) {
  if (o.ride) return 'ride';
  if (o.vehicle) return o.dozer ? 'dozer' : 'traffic';
  if (o.sandal) return 'sandal';
  if (o.follower) return 'follower';
  if (o.special) return 'special';
  if (o.weapon) return o.weapon;
  return 'fist';
}

export function damageFoe(G, f, dmg, o) {
  if (f.state === 'ko') return;
  if (f.kanT > 0) dmg *= 2;
  f.hp -= dmg;
  f.hurtFlash = 0.12;
  const charge = G.player.hero.charge;
  G.player.special = Math.min(1, G.player.special + (o.follower ? 0.015 : 0.05) * charge);
  if (!o.follower) {
    G.combo++;
    G.stats.maxCombo = Math.max(G.stats.maxCombo, G.combo);
    G.comboT = 2.2;
    G.hitstop = Math.max(G.hitstop, o.knock ? 0.085 : 0.045);
    G.shake = Math.max(G.shake, o.knock ? 0.28 : 0.14);
  }
  G.audio.punch(o.knock);
  if (o.word) G.hud.pop(o.word, f.x, f.y + f.model.height * 0.85, f.z, o.knock ? 'big' : '');
  alertNearby(G, f.x, f.z, 14);
  releaseToken(G, f);
  if (f.hp <= 0) return koFoe(G, f, o);
  if (f.state === 'kan' && !o.knock) {
    f.kx += (o.dirX || 0) * 1.5;
    f.kz += (o.dirZ || 0) * 1.5;
    return;
  }
  if (f.state === 'tonic') { f.say = 'টনিক পড়ে গেল!'; G.stats.tonicsBroken++; }
  const kb = o.knock ? 7.5 : 2.6;
  if (f.boss) {
    f.poise -= dmg;
    f.kx += o.dirX * kb * 0.4;
    f.kz += o.dirZ * kb * 0.4;
    if (f.poise <= 0 || o.special) {
      f.poise = 45;
      f.kx = o.dirX * 6; f.kz = o.dirZ * 6;
      setState(f, 'down');
      G.audio.thud();
    } else if (f.state !== 'windup' && f.state !== 'slamWind') setState(f, 'hit');
    return;
  }
  f.kx = o.dirX * kb;
  f.kz = o.dirZ * kb;
  if (o.knock) { setState(f, 'down'); G.audio.thud(); }
  else { setState(f, 'hit'); f.stun = o.stun || 0.34; }
}

function cheerAround(G, x, z) {
  for (const c of G.civilians) {
    if (c.follower || c.mode === 'escortee' || c.mode === 'down') continue;
    if (Math.hypot(c.x - x, c.z - z) < 20 && c.mode !== 'cower') {
      c.mode = 'cheer';
      c.st = rand(-0.4, 0);
    }
  }
}

function koFoe(G, f, o) {
  setState(f, 'ko');
  f.kx = (o.dirX || 0) * 8;
  f.kz = (o.dirZ || 0) * 8;
  f.ghost = true;
  if (f.key === 'copy') {
    G.stats.copiesTorn++;
    G.audio.throwS();
    G.hud.pop('ছেঁড়া ফটোকপি!', f.x, f.y + 2, f.z, 'ko');
    f.st = 3.1;
    return;
  }
  const method = koMethod(o);
  G.kos++;
  G.stats.kosBy[f.key] = (G.stats.kosBy[f.key] || 0) + 1;
  G.stats.method[method] = (G.stats.method[method] || 0) + 1;
  if (o.vehicle) G.stats.busKOs++;
  if (o.sandal) G.stats.sandalKOs++;
  if (f.kanT > 0) G.stats.kanKOs++;
  logEv(G, 'ko', { key: f.key, nick: f.nick, method, boss: f.boss, loot: f.loot, place: placeOf(G, f.x, f.z), hour: G.weather.hour, rain: G.weather.rain > 0.3 });
  G.player.special = Math.min(1, G.player.special + 0.14 * G.player.hero.charge);
  G.audio.thud();
  G.audio.cheer(f.boss);
  G.hitstop = Math.max(G.hitstop, f.boss ? 0.25 : 0.1);
  G.shake = Math.max(G.shake, f.boss ? 0.6 : 0.3);
  G.hud.pop(f.boss ? `${f.nick} ধরাশায়ী!` : 'ধরাশায়ী!', f.x, f.y + 2.2, f.z, 'ko');
  G.hud.event(f, 'ko');
  if (f.loot > 0) dropLoot(G, f);
  if (f.key === 'mastan' && f.model.heldKind === 'stick' && Math.random() < 0.5) {
    setHeld(f.model, null);
    spawnPickup(G, 'stick', f.x + (o.dirX || 0) * 0.8, f.z + (o.dirZ || 0) * 0.8);
  }
  if (f.victim) {
    const v = f.victim;
    f.victim = null;
    v.bubble = pick(['ধন্যবাদ ভাই!', 'বাঁচালেন!', 'জনতার জয়!']);
    recruit(G, v, 'shop', f);
  }
  if (f.payers) {
    f.payers.forEach((c, i) => {
      c.fixed = false;
      c.payer = false;
      if (i === 0) recruit(G, c, 'ghush', f);
      else { c.mode = 'cheer'; c.st = 0; c.lane = Math.sign(c.x) * rand(14, 17.5); }
    });
    f.payers[0].bubble = 'আর ঘুষ দিতে হবে না!';
  }
  if (G.onFoeKo) G.onFoeKo(f, method);
  cheerAround(G, f.x, f.z);
}

export function recruit(G, c, reason, from) {
  if (c.follower) return;
  c.follower = true;
  c.fixed = false;
  c.payer = false;
  c.mode = 'follow';
  c.st = 0;
  c.atk = rand(0.4, 1);
  if (!c.name) {
    const used = new Set(G.civilians.map((x) => x.name));
    c.name = pick(CITIZEN_NAMES.filter((n) => !used.has(n))) || pick(CITIZEN_NAMES);
  }
  G.followers.push(c);
  G.stats.followers++;
  logEv(G, 'recruit', { name: c.name, reason, from: from ? from.nick : null });
  G.hud.toast(`${c.name} আপনার দলে যোগ দিলেন! (${G.followers.length}/${MAX_FOLLOWERS})`, 'good');
  if (G.followers.length > MAX_FOLLOWERS) {
    const old = G.followers.shift();
    old.follower = false;
    old.mode = 'walk';
    old.lane = Math.sign(old.x || 1) * rand(14, 17.5);
    old.bubble = 'ভাই, আমি এবার বাসায় যাই!';
  }
}

export function resetFollowers(G) {
  for (const c of G.followers) {
    c.follower = false;
    c.mode = 'walk';
    c.lane = (Math.random() < 0.5 ? -1 : 1) * rand(14.2, 17.6);
    c.x = c.lane;
  }
  G.followers.length = 0;
}

function alertNearby(G, x, z, r) {
  for (const f of G.foes) {
    if (f.state === 'busy' || f.state === 'goto' || f.state === 'escort') {
      if (Math.hypot(f.x - x, f.z - z) < r) { setState(f, 'alert'); f.say = pick(f.type.lines); }
    }
  }
}

function releaseToken(G, f) {
  if (f.token) { f.token = false; G.tokens--; }
}

function killPlayer(G, dirX, dirZ, src, who) {
  const p = G.player;
  if (p.riding) dismount(G, p, false);
  p.hp = 0;
  setState(p, 'dead');
  p.kx = dirX * 6; p.kz = dirZ * 6;
  G.stats.cause = src;
  G.stats.killer = who;
  G.stats.deathHour = G.weather.hour;
  G.stats.deathRain = G.weather.rain > 0.3;
  G.stats.deathPlace = placeOf(G, p.x, p.z);
  G.onPlayerDown();
}

export function damagePlayer(G, dmg, dirX, dirZ, knockdown, word, src = 'mastan', who = null) {
  const p = G.player;
  if (p.state === 'dead' || p.inv > 0) return false;
  p.hp -= dmg;
  G.stats.hitsTaken++;
  G.audio.hurt();
  G.shake = Math.max(G.shake, knockdown ? 0.55 : 0.32);
  G.hud.flash();
  G.combo = 0;
  if (word) G.hud.pop(word, p.x, p.y + 1.9, p.z, 'hurt');
  if (p.hp <= 0) { killPlayer(G, dirX, dirZ, src, who); return true; }
  if (p.riding) {
    if (!knockdown && dmg < 14) { p.inv = 0.3; return true; }
    dismount(G, p, true);
  }
  if (knockdown) {
    setState(p, 'down');
    p.kx = dirX * 7; p.kz = dirZ * 7;
    p.inv = 1.6;
  } else {
    setState(p, 'hit');
    p.kx = dirX * 3.5; p.kz = dirZ * 3.5;
    p.inv = 0.3;
  }
  return true;
}

function drainPlayer(G, amt, src, who) {
  const p = G.player;
  if (p.state === 'dead') return;
  p.hp -= amt;
  if (p.hp <= 0) killPlayer(G, 0, 0, src, who);
}

function mount(G, p, v) {
  p.riding = v;
  v.rider = p;
  v.parked = false;
  v.speed = 0;
  v.hp = 100;
  v.heading = v.group.rotation.y;
  v.hornCd = 0;
  setHeld(p.model, null);
  setState(p, 'ride');
  G.stats.rides++;
  logEv(G, 'ride', { type: v.type });
  G.audio.pickup();
  const pro = p.hero.id === 'rickshaw' && v.type === 'rickshaw';
  G.hud.toast(pro ? 'নিজের রিকশা পেয়ে গেলেন! পেশাদার গতি 🛺' : `${RIDE[v.type].name} চালাচ্ছেন! J: হর্ন · G: নামুন`, 'good');
}

export function dismount(G, p, eject) {
  const v = p.riding;
  if (!v) return;
  v.rider = null;
  v.parked = true;
  v.speed = 0;
  p.riding = null;
  const h = v.heading;
  const side = v.x > 0 ? -1 : 1;
  p.x = v.x + Math.cos(h) * 1.6 * side;
  p.z = v.z - Math.sin(h) * 1.6 * side;
  p.y = groundY(p.x);
  p.face = h;
  setHeld(p.model, p.weapon ? p.weapon.kind : p.model.defaultHeld);
  if (eject) { setState(p, 'down'); p.inv = 1.6; p.kx = Math.cos(h) * side * 6; p.kz = -Math.sin(h) * side * 6; }
  else setState(p, 'free');
  if (v.hp <= 0) {
    G.scene.remove(v.group);
    const i = G.traffic.list.indexOf(v);
    if (i >= 0) G.traffic.list.splice(i, 1);
  }
}

function updateRide(G, p, dt, axis, actions) {
  const v = p.riding;
  const R = RIDE[v.type];
  const pro = p.hero.id === 'rickshaw' && v.type === 'rickshaw';
  const want = (a) => actions.includes(a);
  const A = p.anim;
  v.hornCd -= dt;
  if (want('use') || want('dodge')) { dismount(G, p, false); return; }

  const wet = G.weather.waterAt(v.x, v.z);
  if (wet > 0.5 && v.type === 'cng' && v.speed > 2 && (v.stalled || 0) <= -3) {
    v.stalled = 2.2;
    G.hud.toast('সিএনজির ইঞ্জিনে পানি! বন্ধ হয়ে গেল 💦', 'warn');
    G.stats.stalls++;
    G.audio.splash();
  }
  v.stalled = (v.stalled ?? -3) - dt;
  const max = R.max * (pro ? 1.35 : 1) * (1 - wet * (v.type === 'cng' ? 0.6 : 0.25)) * (v.stalled > 0 ? 0 : 1);
  const mag = Math.hypot(axis.x, axis.y);
  let target = 0;
  if (mag > 0.15) {
    const aim = Math.atan2(axis.x, axis.y);
    const turn = R.turn * dt * (0.5 + Math.min(1, Math.abs(v.speed) / 4));
    const d = angleDiff(aim, v.heading);
    v.heading += clamp(d, -turn, turn);
    target = max * mag * (Math.abs(d) > 2.2 ? 0.3 : 1);
  }
  const acc = target > v.speed ? R.accel : R.accel * 1.8;
  v.speed += Math.sign(target - v.speed) * Math.min(Math.abs(target - v.speed), acc * dt);
  const hx = Math.sin(v.heading), hz = Math.cos(v.heading);
  v.x += hx * v.speed * dt;
  v.z += hz * v.speed * dt;
  const ox = v.x, oz = v.z;
  resolveStatic(G.world, v, 1.0);
  v.x = clamp(v.x, -17.4, 17.4);
  if (Math.hypot(v.x - ox, v.z - oz) > 0.02) v.speed *= 0.92;
  if (wet > 0 && v.speed > 2 && Math.random() < dt * 4) G.audio.splash();

  for (const o of G.traffic.list) {
    if (o === v) continue;
    const hw = o.T.w / 2 + 0.85, hl = o.T.len / 2 + 0.85;
    const dx = v.x - o.x, dz = v.z - o.z;
    if (Math.abs(dx) >= hw || Math.abs(dz) >= hl) continue;
    if (o.T.danger && !o.parked && o.speed > 3) {
      G.stats.wrecks++;
      logEv(G, 'wreck', { type: v.type, by: o.type });
      v.hp = 0;
      G.audio.crash();
      G.hud.toast(`${o.type === 'dozer' ? 'বুলডোজার' : o.type === 'bus' ? 'বাস' : 'ট্রাক'} ${R.name} চ্যাপ্টা করে দিল!`, 'warn');
      damagePlayer(G, 26 * G.dmgScale, Math.sign(dx) || 1, o.dir, true, o.type === 'bus' ? 'বাসের ধাক্কা!' : 'ধাক্কা!', o.type);
      if (p.riding) dismount(G, p, true);
      return;
    }
    const px = hw - Math.abs(dx), pz = hl - Math.abs(dz);
    if (px < pz) v.x = o.x + Math.sign(dx || 1) * hw;
    else v.z = o.z + Math.sign(dz || 1) * hl;
    if (Math.abs(v.speed) > 4) { G.audio.crash(); v.hp -= 8; G.shake = 0.3; }
    v.speed *= 0.3;
  }

  if (want('punch') && v.hornCd <= 0) {
    v.hornCd = 1.4;
    if (v.type === 'rickshaw') G.audio.bell(); else G.audio.horn('cng');
    G.hud.pop(R.horn, p.x, p.y + 2.4, p.z, 'big');
    for (const f of G.foes) {
      if (f.state === 'ko' || f.boss) continue;
      const dx = f.x - v.x, dz = f.z - v.z;
      const d = Math.hypot(dx, dz);
      if (d < 7.5 && (dx * hx + dz * hz) / (d || 1) > 0.2) {
        releaseToken(G, f);
        setState(f, 'hit');
        f.stun = 1.1;
        f.kx = dx / (d || 1) * 3; f.kz = dz / (d || 1) * 3;
        f.say = pick(['উফ, কান গেল!', 'হর্ন আস্তে!', 'সর সর!']);
      }
    }
    for (const c of G.civilians) {
      if (!c.follower && Math.hypot(c.x - v.x, c.z - v.z) < 6 && Math.random() < 0.4) c.bubble = pick(['হর্ন বাজান কেন!', 'আস্তে ভাই!', 'রাস্তা কি আপনার বাপের?']);
    }
  }

  if (Math.abs(v.speed) > 3.2) {
    for (const f of G.foes) {
      if (f.state === 'ko' || f.state === 'down') continue;
      f.rammedT = (f.rammedT || 0) - dt;
      const dx = f.x - v.x, dz = f.z - v.z;
      if (Math.hypot(dx, dz) > 1.55 || f.rammedT > 0) continue;
      f.rammedT = 0.9;
      G.stats.rams++;
      if (!pro) v.hp -= 5;
      damageFoe(G, f, (10 + Math.abs(v.speed) * 2) * (f.boss ? 0.6 : 1), {
        knock: Math.abs(v.speed) > 5.5, vehicle: true, ride: true, dirX: hx, dirZ: hz,
        word: pick(v.type === 'rickshaw' ? ['রিকশা-ধাক্কা!', 'ক্রিং-ধড়াম!', 'সাইড প্লিজ!'] : ['সিএনজি-ধাক্কা!', 'মিটারে যাবেন?', 'ভোঁ-ধাম!']),
      });
    }
    for (const c of G.civilians) {
      const dx = c.x - v.x, dz = c.z - v.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.4 && d > 0.01) { c.x = v.x + dx / d * 1.4; c.z = v.z + dz / d * 1.4; if (Math.random() < 0.05) c.bubble = 'চোখ কই রাখছেন!'; }
    }
  }

  if (v.hp <= 0) {
    G.hud.toast(`${R.name} ভেঙে গেল! হেঁটেই চলেন`, 'warn');
    logEv(G, 'wreck', { type: v.type, by: 'ram' });
    G.audio.crash();
    dismount(G, p, false);
    return;
  }

  v.group.position.set(v.x, 0, v.z);
  v.group.rotation.y = v.heading;
  for (const w of v.wheels) w.rotation.x += (v.speed * dt) / 0.45;
  const seat = v.type === 'rickshaw' ? 0.45 : 0.75;
  p.x = v.x + hx * seat;
  p.z = v.z + hz * seat;
  p.face = v.heading;
  p.y = groundY(v.x);
  A.mode = 'ride';
  animate(p.model, A, dt);
  const g = p.model.group;
  g.position.set(p.x, v.type === 'rickshaw' ? 0.32 : 0.22, p.z);
  g.rotation.y = p.face;
  G.hud.hint(`${R.name} · টেকসই ${Math.max(0, Math.round(v.hp))}% · J হর্ন · G নামুন`);
  G.stats.rideDist += Math.abs(v.speed) * dt;
}

const sandalGeo = new THREE.BoxGeometry(0.16, 0.06, 0.36);
const onionGeo = new THREE.IcosahedronGeometry(0.17, 1);
const onionMat = new THREE.MeshLambertMaterial({ color: '#9c3d6e', flatShading: true });
const pillGeo = new THREE.CapsuleGeometry(0.08, 0.16, 3, 8);
const pillMats = ['#ff6b6b', '#69db7c', '#ffd43b'].map((c) => new THREE.MeshLambertMaterial({ color: c }));
const paperGeo = new THREE.BoxGeometry(0.42, 0.05, 0.3);
const paperMat = new THREE.MeshLambertMaterial({ color: '#f8f9fa' });
const sandalMats = ['#e03131', '#1c7ed6', '#f59f00', '#2f9e44'].map((c) => new THREE.MeshLambertMaterial({ color: c }));

function throwSandal(G, p, target) {
  p.sandals--;
  G.stats.sandals++;
  G.audio.throwS();
  const mesh = new THREE.Mesh(sandalGeo, pick(sandalMats));
  G.scene.add(mesh);
  const x = p.x + fwdX(p) * 0.5, z = p.z + fwdZ(p) * 0.5;
  G.projectiles.push({ kind: 'sandal', mesh, x, y: p.y + 1.4, z, vx: fwdX(p) * 24, vy: 0, vz: fwdZ(p) * 24, life: 1.1, target });
}

function lob(G, f, kind) {
  const p = G.player;
  const mesh = new THREE.Mesh(kind === 'pill' ? pillGeo : kind === 'paper' ? paperGeo : onionGeo, kind === 'pill' ? pick(pillMats) : kind === 'paper' ? paperMat : onionMat);
  G.scene.add(mesh);
  const sx = f.x + fwdX(f) * 0.4, sz = f.z + fwdZ(f) * 0.4, sy = f.y + 2.1;
  const dx = p.x - sx, dz = p.z - sz;
  const d = Math.hypot(dx, dz) || 1;
  if (kind === 'paper') {
    G.projectiles.push({ kind, mesh, x: sx, y: f.y + 1.45, z: sz, vx: (dx / d) * 15, vy: 0, vz: (dz / d) * 15, life: 1.5, g: 0, who: f.nick });
  } else {
    const T = clamp(d / 13, 0.35, 1.3);
    const g = 16;
    const vy = (p.y + 1.0 - sy + 0.5 * g * T * T) / T;
    G.projectiles.push({ kind, mesh, x: sx, y: sy, z: sz, vx: dx / T, vy, vz: dz / T, life: 3, g, who: f.nick, src: f.key });
  }
  G.audio.throwS();
}

export function updateProjectiles(G, dt) {
  const p = G.player;
  for (let i = G.projectiles.length - 1; i >= 0; i--) {
    const s = G.projectiles[i];
    s.life -= dt;
    let dead = s.life <= 0;
    if (s.kind === 'sandal') {
      const t = s.target;
      if (t && t.state !== 'ko') {
        const dx = t.x - s.x, dz = t.z - s.z;
        const d = Math.hypot(dx, dz) || 1;
        const sp = Math.hypot(s.vx, s.vz);
        const k = Math.min(1, dt * 7);
        s.vx += ((dx / d) * sp - s.vx) * k;
        s.vz += ((dz / d) * sp - s.vz) * k;
      }
      s.mesh.rotation.y += dt * 22;
      s.mesh.rotation.x += dt * 9;
      for (const f of G.foes) {
        if (f.state === 'ko') continue;
        if (Math.hypot(f.x - s.x, f.z - s.z) < 0.75) {
          const d = Math.hypot(s.vx, s.vz) || 1;
          G.stats.sandalHits++;
          damageFoe(G, f, 14, { knock: f.state === 'windup', dirX: s.vx / d, dirZ: s.vz / d, word: 'চটাশ!', stun: 0.9, sandal: true });
          dead = true;
          break;
        }
      }
    } else {
      s.vy -= s.g * dt;
      s.mesh.rotation.x += dt * 8;
      if (s.kind === 'paper') s.mesh.rotation.y += dt * 14;
      const hitH = s.kind === 'paper' || (s.y < p.y + 2.1 && s.y > p.y + 0.2);
      if (p.state !== 'dead' && Math.hypot(p.x - s.x, p.z - s.z) < 0.8 && hitH) {
        const d = Math.hypot(s.vx, s.vz) || 1;
        if (s.kind === 'onion') {
          if (damagePlayer(G, 6 * G.dmgScale, s.vx / d, s.vz / d, false, 'পেঁয়াজ!', 'onion', s.who)) G.stats.onions++;
        } else if (s.kind === 'pill') {
          if (damagePlayer(G, 7 * G.dmgScale, s.vx / d, s.vz / d, false, 'ভেজাল বড়ি!', 'vejal', s.who)) G.stats.pills++;
        } else if (damagePlayer(G, 4 * G.dmgScale, s.vx / d, s.vz / d, false, 'প্রশ্নপত্র!', 'prosno', s.who)) {
          G.stats.blinded++;
          G.hud.blind(2.3);
        }
        dead = true;
      }
      if (s.y < groundY(s.x)) {
        dead = true;
        if (s.kind === 'pill') spawnHazard(G, s.x, s.z, s.who);
      }
    }
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.z += s.vz * dt;
    s.mesh.position.set(s.x, s.y, s.z);
    if (dead) {
      G.scene.remove(s.mesh);
      G.projectiles.splice(i, 1);
    }
  }
}

const hazGeo = new THREE.CircleGeometry(1, 24);
hazGeo.rotateX(-Math.PI / 2);

function spawnHazard(G, x, z, who) {
  const mesh = new THREE.Mesh(hazGeo, new THREE.MeshBasicMaterial({ color: '#69db7c', transparent: true, opacity: 0.6, depthWrite: false }));
  mesh.position.set(x, groundY(x) + 0.06, z);
  mesh.scale.setScalar(1.7);
  mesh.renderOrder = 2;
  G.scene.add(mesh);
  G.hazards.push({ x, z, r: 1.7, t: 6, mesh, who });
}

export function updateHazards(G, dt) {
  const p = G.player;
  for (let i = G.hazards.length - 1; i >= 0; i--) {
    const h = G.hazards[i];
    h.t -= dt;
    h.mesh.material.opacity = Math.min(1, h.t) * (0.45 + Math.sin(G.time * 6 + i) * 0.12);
    if (!p.riding && p.state !== 'dead' && Math.hypot(p.x - h.x, p.z - h.z) < h.r) {
      drainPlayer(G, 9 * dt * G.dmgScale, 'vejal', h.who);
      G.stats.poisoned += dt;
      G.hud.hint('ভেজাল ওষুধের বিষ! সবুজ দাগ থেকে সরুন');
    }
    if (h.t <= 0) {
      G.scene.remove(h.mesh);
      h.mesh.material.dispose();
      G.hazards.splice(i, 1);
    }
  }
}

function peoplePower(G, p) {
  G.audio.roar();
  G.shake = 0.7;
  G.hitstop = 0.12;
  G.hud.banner('স্লোগান মিছিল!', 'জনতা জেগেছে, দুর্নীতিবাজরা ধরাশায়ী', 'power');
  G.spawnRing(p.x, p.z, 11, '#ffd43b', 0.7);
  for (const f of G.foes) {
    if (f.state === 'ko') continue;
    const dx = f.x - p.x, dz = f.z - p.z;
    const d = Math.hypot(dx, dz);
    if (d < 11) damageFoe(G, f, f.boss ? 45 : 30, { knock: true, special: true, dirX: dx / (d || 1), dirZ: dz / (d || 1), word: 'জনতার ধাক্কা!' });
  }
  for (const c of G.civilians) {
    if (c.follower) { c.bubble = pick(['দফা এক, দাবি এক!', 'জনতার জয়!', 'রাস্তা আমাদের!']); continue; }
    if (Math.hypot(c.x - p.x, c.z - p.z) < 25) { c.mode = 'rally'; c.st = 0; c.rx = p.x + rand(-4, 4); c.rz = p.z + rand(-4, 4); }
  }
}

function kanPower(G, p) {
  G.audio.roar();
  G.shake = 0.5;
  G.hitstop = 0.1;
  G.hud.banner('কান ধরো, উঠবস করো!', 'স্যারের সামনে সবাই আবার ক্লাস এইটে', 'power');
  G.hud.pop('কান ধর!', p.x, p.y + 2.3, p.z, 'big');
  G.spawnRing(p.x, p.z, 12, '#74c0fc', 0.7);
  let n = 0;
  for (const f of G.foes) {
    if (f.state === 'ko') continue;
    if (Math.hypot(f.x - p.x, f.z - p.z) > 12) continue;
    releaseToken(G, f);
    f.kanT = f.boss ? 3.5 : 5.5;
    setState(f, 'kan');
    f.say = pick(KAN_LINES);
    f.sayT = rand(1.2, 2.5);
    n++;
  }
  G.stats.kanned += n;
}

const lootGeo = new THREE.BoxGeometry(0.42, 0.2, 0.26);
const lootMat = new THREE.MeshLambertMaterial({ color: '#4c9a52' });
const bandMat = new THREE.MeshLambertMaterial({ color: '#f8f9fa' });
const bandGeo = new THREE.BoxGeometry(0.1, 0.21, 0.27);

function dropLoot(G, f) {
  const amount = Math.round(f.loot * rand(0.9, 1.1));
  const n = f.boss ? 6 : 3;
  for (let i = 0; i < n; i++) {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(lootGeo, lootMat));
    g.add(new THREE.Mesh(bandGeo, bandMat));
    G.scene.add(g);
    const a = rand(0, Math.PI * 2);
    G.loot.push({ mesh: g, x: f.x, y: f.y + 1.2, z: f.z, vx: Math.cos(a) * rand(1, 3), vy: rand(4, 6), vz: Math.sin(a) * rand(1, 3), amount: amount / n, t: 0 });
  }
}

export function updateLoot(G, dt) {
  const p = G.player;
  for (let i = G.loot.length - 1; i >= 0; i--) {
    const l = G.loot[i];
    l.t += dt;
    const dx = p.x - l.x, dz = p.z - l.z;
    const d = Math.hypot(dx, dz);
    if ((d < 5.5 || l.t > 5) && l.t > 0.6 && p.state !== 'dead') {
      const sp = 12 + l.t * 4;
      l.x += (dx / (d || 1)) * sp * dt;
      l.z += (dz / (d || 1)) * sp * dt;
      l.y += (p.y + 1 - l.y) * Math.min(1, dt * 8);
    } else {
      l.vy -= 18 * dt;
      l.x += l.vx * dt;
      l.z += l.vz * dt;
      l.y += l.vy * dt;
      const gy = groundY(l.x) + 0.1;
      if (l.y < gy) { l.y = gy; l.vy *= -0.35; l.vx *= 0.6; l.vz *= 0.6; }
    }
    l.mesh.position.set(l.x, l.y, l.z);
    l.mesh.rotation.y += dt * 4;
    if (d < 0.8 && l.t > 0.6) {
      G.money += l.amount;
      G.audio.coin();
      G.hud.pop('+' + taka(l.amount), p.x, p.y + 2.2, p.z, 'money');
      G.scene.remove(l.mesh);
      G.loot.splice(i, 1);
    }
  }
}

const pickRingGeo = new THREE.RingGeometry(0.55, 0.75, 32);
pickRingGeo.rotateX(-Math.PI / 2);
const pickRingMat = new THREE.MeshBasicMaterial({ color: '#ffd43b', transparent: true, opacity: 0.8, depthWrite: false });

export function spawnPickup(G, kind, x, z) {
  const g = new THREE.Group();
  const holder = { held: new THREE.Group() };
  setHeld(holder, kind);
  holder.held.position.y = 0.3;
  g.add(holder.held);
  const ring = new THREE.Mesh(pickRingGeo, pickRingMat);
  ring.position.y = 0.04;
  g.add(ring);
  x = clamp(x, -18, 18);
  g.position.set(x, groundY(x), z);
  G.scene.add(g);
  G.pickups.push({ kind, x, z, mesh: g, item: holder.held, t: 0 });
}

export function updatePickups(G, dt) {
  const p = G.player;
  for (let i = G.pickups.length - 1; i >= 0; i--) {
    const k = G.pickups[i];
    k.t += dt;
    k.item.rotation.y += dt * 2;
    k.item.position.y = 0.35 + Math.sin(k.t * 3) * 0.1;
    const d = Math.hypot(p.x - k.x, p.z - k.z);
    let gone = k.t > 60 || Math.abs(k.z - p.z) > 140;
    if (!gone && d < 1.3 && p.state !== 'dead' && !p.riding) {
      if (p.weapon) G.hud.hint(`হাতে আগে থেকেই ${WEAPONS[p.weapon.kind].name} আছে`);
      else {
        const W = WEAPONS[k.kind];
        p.weapon = { kind: k.kind, uses: W.uses };
        setHeld(p.model, k.kind);
        G.audio.pickup();
        G.stats.weapons++;
        logEv(G, 'weapon', { kind: k.kind });
        G.hud.toast(k.kind === 'broom' ? 'দোকানির ঝাড়ু হাতে নিলেন! মার এখন জোরালো 🧹' : 'মাস্তানের লাঠি এখন আপনার হাতে!', 'good');
        gone = true;
      }
    }
    if (gone) {
      G.scene.remove(k.mesh);
      G.pickups.splice(i, 1);
    }
  }
}

export function propGroup(G, x, z, kind, side) {
  const g = new THREE.Group();
  g.position.set(x, STREET.curbY, z);
  const lam = (c) => new THREE.MeshLambertMaterial({ color: c });
  if (kind === 'desk') {
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.06, 1.4), lam('#7a4e2d'));
    top.position.y = 0.78;
    g.add(top);
    for (const [px, pz] of [[-0.35, -0.6], [0.35, -0.6], [-0.35, 0.6], [0.35, 0.6]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.78, 0.06), lam('#5c3b22'));
      leg.position.set(px, 0.39, pz);
      g.add(leg);
    }
    for (let i = 0; i < 4; i++) {
      const file = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.4), lam(i % 2 ? '#f8f9fa' : '#ffd8a8'));
      file.position.set(0, 0.84 + i * 0.065, -0.3);
      file.rotation.y = rand(-0.2, 0.2);
      g.add(file);
    }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.34), new THREE.MeshBasicMaterial({ map: signTexture('ফাইল ছাড়ানো হয়', '#fff', '#1864ab', 384, 100), side: THREE.DoubleSide }));
    sign.position.set(-side * 0.42, 1.05, 0);
    sign.rotation.y = -side * Math.PI / 2;
    g.add(sign);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.3, 6), lam('#ddd'));
    pole.position.set(side * 0.3, 1.15, 0.5);
    g.add(pole);
    const umb = new THREE.Mesh(new THREE.ConeGeometry(1.3, 0.5, 8), lam('#e03131'));
    umb.position.set(side * 0.3, 2.35, 0.5);
    g.add(umb);
  } else if (kind === 'tender') {
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.9), lam('#ced4da'));
    top.position.y = 0.76;
    g.add(top);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.76, 6), lam('#495057'));
    leg.position.y = 0.38;
    g.add(leg);
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.36, 0.14), lam('#3b2a1a'));
    bag.position.set(0, 0.98, 0);
    g.add(bag);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.38), new THREE.MeshBasicMaterial({ map: signTexture('টেন্ডার মিটিং (গোপন)', '#fff3bf', '#5c3b22', 448, 112), side: THREE.DoubleSide }));
    sign.position.set(0, 1.75, 0);
    sign.rotation.y = -side * Math.PI / 2;
    g.add(sign);
  } else {
    const sack = lam('#c9a46b');
    for (let i = 0; i < 7; i++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), sack);
      s.scale.set(1, 0.85, 1);
      s.position.set((i % 3) * 0.55 - 0.55 + side * 0.4, 0.3 + Math.floor(i / 3) * 0.48, Math.floor(i / 3) * 0.2 - 0.2);
      g.add(s);
    }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.42), new THREE.MeshBasicMaterial({ map: signTexture('পেঁয়াজ ৳৩০০/কেজি', '#fff3bf', '#c92a2a', 448, 112), side: THREE.DoubleSide }));
    sign.position.set(-side * 0.2, 1.65, 0);
    sign.rotation.y = -side * Math.PI / 2;
    g.add(sign);
  }
  G.scene.add(g);
  return g;
}

function pickNick(G, key) {
  const pool = NICKNAMES[key] || [FOES[key].name];
  const free = pool.filter((n) => !G.nicks.has(n));
  const n = free.length ? pick(free) : pick(pool);
  G.nicks.add(n);
  return n;
}

export function spawnFoe(G, typeKey, x, z, extra = {}) {
  const type = FOES[typeKey];
  const f = makeActor(G, type.look);
  const hpScale = G.hpScale;
  Object.assign(f, {
    isFoe: true, key: typeKey, type, boss: !!type.boss, heavy: !!type.boss, nick: typeKey === 'copy' ? 'ফটোকপি' : pickNick(G, typeKey),
    hp: Math.round(type.hp * hpScale), maxHp: Math.round(type.hp * hpScale),
    loot: type.loot, cooldown: rand(0.5, 1.5), token: false, poise: 45, summoned: 0, fled: false,
    bubbleT: 0, sayT: rand(2, 5), ghost: false, kanT: 0, tonics: 0, dozerT: 5, runTime: 0,
  }, extra);
  if (typeKey === 'copy') { f.hp = f.maxHp = 1; }
  f.radius = type.boss ? 0.55 : 0.42;
  f.x = x;
  f.z = z;
  f.y = groundY(x);
  f.face = faceTo(f, G.player.x, G.player.z);
  setState(f, extra.state || 'busy');
  G.foes.push(f);
  G.hud.addLabel(f);
  return f;
}

function resume(f) {
  setState(f, f.key === 'pocket' ? 'run' : 'chase');
}

function makeCopies(G, f) {
  G.hud.banner('ফটোকপি বাহিনী!', 'কোনটা আসল? মার খেলেই বোঝা যাবে', 'boss');
  G.audio.alarm();
  const spots = [[f.x, f.z]];
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + rand(-0.4, 0.4);
    const x = clamp(f.x + Math.cos(a) * 3.2, -17, 17), z = f.z + Math.sin(a) * 3.2;
    spots.push([x, z]);
    spawnFoe(G, 'copy', x, z, { state: 'alert', nick: f.nick });
    G.spawnRing(x, z, 1.6, '#f8f9fa', 0.4);
  }
  const [sx, sz] = pick(spots);
  f.x = sx; f.z = sz;
  G.stats.copies += 3;
  logEv(G, 'copies', { nick: f.nick });
}

export function updateFoe(G, f, dt) {
  const p = G.player;
  f.st += dt;
  f.cooldown -= dt;
  f.sayT -= dt;
  const A = f.anim;
  A.t += dt;
  const T = f.type;
  const dx = p.x - f.x, dz = p.z - f.z;
  const dist = Math.hypot(dx, dz);
  const toP = Math.atan2(dx, dz);
  let mode = 'idle';
  let moving = 0;
  A.guard = false;
  const pAlive = p.state !== 'dead';
  const slow = 1 - G.weather.waterAt(f.x, f.z) * 0.4;

  const walk = (tx, tz, speed, faceTarget = true) => {
    const ddx = tx - f.x, ddz = tz - f.z;
    const d = Math.hypot(ddx, ddz);
    if (d < 0.05) return d;
    const s = Math.min(speed * slow * dt, d);
    f.x += (ddx / d) * s;
    f.z += (ddz / d) * s;
    if (faceTarget) f.face = angleLerp(f.face, Math.atan2(ddx, ddz), 1 - Math.exp(-10 * dt));
    moving = speed / 4;
    A.phase += speed * dt * 2.1;
    mode = 'walk';
    return d;
  };

  switch (f.state) {
    case 'busy': {
      const aggro = f.key === 'mastan' ? 13 : f.key === 'syndicate' ? 15 : f.boss ? 12 : 7.5;
      if (f.key === 'chanda') {
        mode = 'extort';
        if (f.victim) f.face = faceTo(f, f.victim.x, f.victim.z);
        f.busyT -= dt;
        if (f.sayT <= 0) { f.say = pick(['চাঁদা দে!', 'মাসের টাকা কই?', 'দোকান চালাইতে চাস?', 'বড় ভাইয়ের জন্মদিন, চাঁদা দে']); f.sayT = rand(3, 5); }
        if (f.busyT <= 0) {
          f.loot += 20000;
          G.stats.extortions++;
          logEv(G, 'extort', { nick: f.nick, place: placeOf(G, f.x, f.z) });
          G.hud.event(f, 'extorted');
          if (f.victim) { f.victim.mode = 'pay'; f.victim.st = 0; f.victim.bubble = 'নিয়ে যান...'; }
          f.busyT = 22;
        }
      } else if (f.key === 'ghush' || f.key === 'thikadar') {
        mode = f.key === 'ghush' ? 'collect' : 'pay';
        if (f.sayT <= 0) { f.say = pick(T.lines); f.sayT = rand(4, 7); }
      } else if (f.boss) {
        if (dist > 6) walk(p.x, p.z, 1.3);
        if (f.sayT <= 0) { f.say = pick(T.lines); f.sayT = rand(3, 5); }
      } else if (f.key === 'syndicate') {
        f.face = angleLerp(f.face, toP, dt * 2);
        if (f.sayT <= 0) { f.say = pick(T.lines); f.sayT = rand(4, 7); }
      } else {
        f.face = angleLerp(f.face, toP, dt * 1.5);
      }
      if (pAlive && dist < aggro) { setState(f, 'alert'); f.say = pick(T.lines); }
      break;
    }
    case 'escort': {
      const lead = f.leader;
      if (!lead || lead.state === 'ko' || lead.state !== 'busy') { setState(f, 'alert'); break; }
      const fx = Math.sin(lead.face), fz = Math.cos(lead.face);
      const ox = lead.x - fz * f.slot * 1.6 - fx * 1.3, oz = lead.z + fx * f.slot * 1.6 - fz * 1.3;
      if (walk(ox, oz, 2.5) < 0.2) { mode = 'idle'; f.face = lead.face; }
      break;
    }
    case 'alert':
      A.guard = true;
      f.face = angleLerp(f.face, toP, 1 - Math.exp(-12 * dt));
      if (f.st > 0.45) resume(f);
      break;
    case 'chase': {
      A.guard = true;
      if (!pAlive) { mode = 'cheer'; break; }
      if (T.flees && !f.fled && f.hp < f.maxHp * 0.5) {
        f.fled = true;
        releaseToken(G, f);
        setState(f, 'flee');
        f.say = 'ফাইল নিয়ে পালাই!';
        break;
      }
      if (f.key === 'bhumi') {
        f.dozerT -= dt;
        if (f.dozerT <= 0 && dist < 35) {
          f.dozerT = rand(11, 15);
          f.say = 'বুলডোজার আন! রাস্তাও আমার!';
          G.traffic.callDozer(p.riding ? p.riding.x : p.x, p.z);
          G.stats.dozers++;
          logEv(G, 'dozer', { nick: f.nick });
          G.hud.toast('বুলডোজার আসছে! লাল দাগ থেকে সরুন 🚜', 'warn');
          G.audio.alarm();
        }
      }
      if (f.key === 'vejal' && f.tonics < 2 && f.hp < f.maxHp * (f.tonics ? 0.25 : 0.5) && dist > 3) {
        f.tonics++;
        releaseToken(G, f);
        setState(f, 'tonic');
        f.say = 'টনিক খাই, শক্তি পাই!';
        logEv(G, 'tonic', { nick: f.nick });
        break;
      }
      if (f.boss && f.summoned < 2 && f.hp < f.maxHp * (f.summoned ? 0.33 : 0.66)) {
        f.summoned++;
        if (f.key === 'prosno') makeCopies(G, f);
        else if (f.key !== 'vejal') { f.say = 'এই, তোরা কই!'; G.summon(f); }
      }
      if (T.ranged && dist > 4.5 && dist < 17 && f.cooldown <= 0) { setState(f, 'throwWind'); break; }
      const maxT = G.wave >= 5 ? 3 : 2;
      if (!f.token && dist < 5.5 && G.tokens < maxT) { f.token = true; G.tokens++; }
      if (f.token || f.boss) {
        if (dist > T.range - 0.1) walk(p.x, p.z, T.speed);
        else { mode = 'guard'; f.face = angleLerp(f.face, toP, 1 - Math.exp(-10 * dt)); }
        if (dist <= T.range + 0.15 && f.cooldown <= 0) {
          if ((f.key === 'neta' || f.key === 'bhumi') && Math.random() < 0.4) { setState(f, 'slamWind'); G.spawnRing(f.x, f.z, 3.4, '#ff4d2e', 0.8, true); }
          else setState(f, 'windup');
        }
      } else {
        const ring = T.ranged ? 7 : 3.8;
        const side = (f.id % 2 ? 1 : -1);
        const tx = p.x - Math.sin(toP + side * 0.5) * ring;
        const tz = p.z - Math.cos(toP + side * 0.5) * ring;
        if (walk(tx, tz, T.speed * 0.6, false) < 0.4) mode = 'guard';
        f.face = angleLerp(f.face, toP, 1 - Math.exp(-8 * dt));
      }
      if (f.sayT <= 0 && Math.random() < 0.5) { f.say = pick(T.lines); f.sayT = rand(4, 8); }
      break;
    }
    case 'windup':
      mode = 'windup';
      f.face = angleLerp(f.face, toP, 1 - Math.exp(-4 * dt));
      if (f.st >= T.windup) {
        setState(f, 'strike');
        G.audio.swing();
        const fx = fwdX(f), fz = fwdZ(f);
        const dot = (dx * fx + dz * fz) / (dist || 1);
        if (dist < T.range + 0.4 && dot > 0.3) {
          damagePlayer(G, T.dmg * G.dmgScale, dx / (dist || 1), dz / (dist || 1), false, f.model.heldKind === 'stick' ? 'ঠকাস!' : f.key === 'thikadar' ? 'ব্রিফকেস-বাড়ি!' : 'ঘুষি!', f.key, f.nick);
        }
      }
      break;
    case 'strike':
      mode = 'strike';
      if (f.st >= 0.3) { setState(f, 'chase'); f.cooldown = T.cooldown * rand(0.8, 1.3); releaseToken(G, f); }
      break;
    case 'slamWind':
      mode = 'slamUp';
      if (f.st >= 0.8) {
        setState(f, 'slam');
        G.shake = Math.max(G.shake, 0.5);
        G.audio.thud();
        G.spawnRing(f.x, f.z, 3.6, '#ffd8a8', 0.4);
        if (dist < 3.6) damagePlayer(G, 18 * G.dmgScale, dx / (dist || 1), dz / (dist || 1), true, 'ধড়াম!', f.key, f.nick);
        for (const c of G.followers) {
          if (Math.hypot(c.x - f.x, c.z - f.z) < 3.6) { c.mode = 'down'; c.st = 0; c.bubble = 'উফ!'; }
        }
      }
      break;
    case 'slam':
      mode = 'slam';
      if (f.st >= 0.5) { setState(f, 'chase'); f.cooldown = T.cooldown * rand(0.9, 1.4); }
      break;
    case 'throwWind':
      mode = 'throwUp';
      f.face = angleLerp(f.face, toP, 1 - Math.exp(-10 * dt));
      if (f.st >= 0.5) { lob(G, f, f.key === 'vejal' ? 'pill' : f.key === 'prosno' ? 'paper' : 'onion'); setState(f, 'throwRec'); }
      break;
    case 'throwRec':
      mode = 'throw';
      if (f.st >= 0.35) { setState(f, 'chase'); f.cooldown = T.cooldown * rand(0.8, 1.3); }
      break;
    case 'tonic':
      mode = 'sip';
      f.hp = Math.min(f.maxHp, f.hp + f.maxHp * 0.12 * dt);
      if (f.st > 2.4) { setState(f, 'chase'); f.say = 'আহ্! মেয়াদোত্তীর্ণ হলেও কাজ করে!'; }
      break;
    case 'kan':
      mode = 'kan';
      f.kanT -= dt;
      if (f.sayT <= 0) { f.say = pick(KAN_LINES); f.sayT = rand(2, 3.5); }
      if (f.kanT <= 0) resume(f);
      break;
    case 'run': {
      f.runTime += dt;
      if (!f.runDir) f.runDir = f.z > p.z ? 1 : -1;
      if ((f.z < -STREET.len + 15 && f.runDir < 0) || (f.z > STREET.startZ - 15 && f.runDir > 0)) f.runDir *= -1;
      const sp = Math.max(4.4, T.speed - f.runTime * 0.09);
      walk(Math.sign(f.x || 1) * 15.4, f.z + f.runDir * 8, sp);
      if (f.sayT <= 0) { f.say = pick(T.lines); f.sayT = rand(3, 5); }
      break;
    }
    case 'hit':
      mode = 'hit';
      if (f.st >= (f.boss ? 0.18 : f.stun || 0.34)) resume(f);
      break;
    case 'down':
      mode = 'down';
      if (f.st >= 1.1) setState(f, 'getup');
      break;
    case 'getup':
      mode = 'getup';
      if (f.st >= 0.55) resume(f);
      break;
    case 'flee': {
      walk(f.x - dx * 3, f.z - dz * 3, T.speed * 1.35);
      if (f.st > 3.2) setState(f, 'chase');
      break;
    }
    case 'ko':
      mode = 'ko';
      if (f.st > 3.2) {
        f.y -= dt * 0.6;
        if (f.st > 5) f.remove = true;
      }
      break;
  }

  if (f.say) {
    G.hud.bubble(f, f.say);
    f.say = null;
  }

  A.mode = mode;
  A.move = moving;
  animate(f.model, A, dt);
  if (f.state === 'ko' && f.st > 3.2) {
    f.model.group.position.y = f.y;
    f.x += f.kx * dt; f.z += f.kz * dt; f.kx *= 0.9; f.kz *= 0.9;
    f.model.group.position.x = f.x;
    f.model.group.position.z = f.z;
  } else integrate(G, f, dt);
}

export function createCivilian(G, x, z, opts = {}) {
  const c = makeActor(G, opts.look || pick(CIVILIAN_LOOKS));
  Object.assign(c, { isCivilian: true, mode: opts.mode || 'walk', dir: Math.random() < 0.5 ? 1 : -1, speed: rand(1.1, 1.7), st: 0, lane: x, name: opts.name || null });
  c.x = x;
  c.z = z;
  c.y = STREET.curbY;
  c.face = c.dir > 0 ? 0 : Math.PI;
  c.radius = 0.35;
  G.civilians.push(c);
  return c;
}

const FOLLOW_WORDS = ['ধাপ!', 'ঠুস!', 'চটাং!', 'নে এবার!', 'জনতার কিল!'];

export function updateCivilian(G, c, dt) {
  const p = G.player;
  c.st += dt;
  const A = c.anim;
  A.t += dt;
  let mode = 'idle';
  let moving = 0;
  const walkTo = (tx, tz, sp) => {
    const dx = tx - c.x, dz = tz - c.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.15) return d;
    const s = Math.min(sp * dt, d);
    c.x += (dx / d) * s;
    c.z += (dz / d) * s;
    c.face = angleLerp(c.face, Math.atan2(dx, dz), 1 - Math.exp(-8 * dt));
    moving = sp / 4;
    A.phase += sp * dt * 2.3;
    mode = 'walk';
    return d;
  };
  switch (c.mode) {
    case 'walk': {
      c.z += c.dir * c.speed * dt;
      c.x += (c.lane - c.x) * Math.min(1, dt * 2);
      c.face = angleLerp(c.face, c.dir > 0 ? 0 : Math.PI, 1 - Math.exp(-6 * dt));
      moving = c.speed / 4;
      A.phase += c.speed * dt * 2.3;
      mode = 'walk';
      if (Math.abs(c.z - p.z) > 75) {
        c.z = p.z + (c.z > p.z ? -1 : 1) * rand(55, 70);
        c.z = clamp(c.z, -STREET.len + 4, STREET.startZ - 4);
      }
      if (c.z < -STREET.len + 4 || c.z > STREET.startZ - 4) c.dir *= -1;
      let watch = null;
      for (const f of G.foes) {
        if (f.state === 'ko' || f.state === 'busy' || f.state === 'escort') continue;
        if (Math.hypot(f.x - c.x, f.z - c.z) < 11) { watch = f; break; }
      }
      if (watch) { c.mode = 'watch'; c.st = 0; }
      break;
    }
    case 'watch':
      c.face = angleLerp(c.face, Math.atan2(p.x - c.x, p.z - c.z), dt * 4);
      if (c.st > 4) { c.mode = 'walk'; c.st = 0; }
      break;
    case 'cheer':
      mode = c.st < 0 ? 'idle' : 'cheer';
      c.face = angleLerp(c.face, Math.atan2(p.x - c.x, p.z - c.z), dt * 6);
      if (c.st > 2.6) { c.mode = c.follower ? 'follow' : c.fixed ? 'stand' : 'walk'; c.st = 0; }
      break;
    case 'rally':
      if (walkTo(c.rx, c.rz, 4.2) < 0.4 || c.st > 2.5) { c.mode = 'cheer'; c.st = 0; }
      break;
    case 'cower':
      mode = 'cower';
      break;
    case 'pay':
      mode = c.st < 0 ? 'idle' : 'pay';
      if (c.st > 2) {
        c.mode = c.fixed ? (c.payer ? 'pay' : 'cower') : 'walk';
        c.st = c.payer && c.fixed ? -rand(1, 3) : 0;
      }
      break;
    case 'stand':
      break;
    case 'follow': {
      const i = G.followers.indexOf(c);
      const n = G.followers.length;
      const tx = p.x + (i - (n - 1) / 2) * 1.5;
      const tz = p.z + 2 + (i % 2) * 0.8;
      const d = Math.hypot(tx - c.x, tz - c.z);
      if (d > 45) { c.x = clamp(tx, -17, 17); c.z = tz + 6; }
      if (d > 0.7) walkTo(tx, tz, d > 7 ? 7 : 4.6);
      else c.face = angleLerp(c.face, p.face, dt * 4);
      let tgt = null, bd = 8;
      for (const f of G.foes) {
        if (f.state === 'ko' || f.state === 'busy' || f.state === 'escort' || f.state === 'down') continue;
        const fd = Math.hypot(f.x - c.x, f.z - c.z);
        if (fd < bd) { bd = fd; tgt = f; }
      }
      if (tgt && p.state !== 'dead') { c.mode = 'fight'; c.target = tgt; c.st = 0; }
      break;
    }
    case 'fight': {
      const t = c.target;
      if (!t || t.state === 'ko' || Math.hypot(t.x - c.x, t.z - c.z) > 14 || Math.hypot(p.x - c.x, p.z - c.z) > 22) { c.mode = 'follow'; break; }
      c.atk -= dt;
      c.punchT = (c.punchT || 0) - dt;
      const d = Math.hypot(t.x - c.x, t.z - c.z);
      if (d > 1.25) walkTo(t.x, t.z, 4.8);
      else {
        c.face = angleLerp(c.face, Math.atan2(t.x - c.x, t.z - c.z), 1 - Math.exp(-10 * dt));
        mode = 'guard';
        if (c.atk <= 0 && t.state !== 'down') {
          c.atk = rand(0.9, 1.4);
          c.punchT = 0.26;
          c.arm = !c.arm;
          damageFoe(G, t, 4 + G.wave * 0.4, { dirX: (t.x - c.x) / (d || 1), dirZ: (t.z - c.z) / (d || 1), word: pick(FOLLOW_WORDS), follower: true, stun: 0.22 });
          if (Math.random() < 0.15) c.bubble = pick(['আমাদের দোকানে চাঁদা!', 'নে, চা-পানির খরচ!', 'এটা জনতার পক্ষ থেকে!']);
        }
      }
      if (c.punchT > 0) mode = c.arm ? 'punchR' : 'punchL';
      break;
    }
    case 'down':
      mode = c.st < 1.2 ? 'down' : 'getup';
      if (c.st > 1.8) { c.mode = c.follower ? 'follow' : 'walk'; c.st = 0; }
      break;
    case 'escortee': {
      const d = Math.hypot(p.x - c.x, p.z - c.z);
      if (d < 7 && p.state !== 'dead') {
        if (d > 1.8) walkTo(p.x + 1.2, p.z + 1.4, Math.min(5.6, d * 1.4));
        else c.face = angleLerp(c.face, p.face, dt * 4);
      } else {
        mode = 'cheer';
        c.face = angleLerp(c.face, Math.atan2(p.x - c.x, p.z - c.z), dt * 5);
        if (c.st > 3) { c.st = 0; c.bubble = pick(['এই যে! আমাকে নিয়ে চলেন!', 'পরীক্ষা শুরু হয়ে যাবে!', 'একা যেতে ভয় লাগে!']); }
      }
      break;
    }
  }
  if (c.bubble) { G.hud.bubble(c, c.bubble); c.bubble = null; }
  const free = c.follower || c.mode === 'rally' || c.mode === 'escortee' || c.mode === 'down';
  if (!free && Math.abs(c.x) < STREET.roadHalf + 0.6) c.x = Math.sign(c.x || 1) * (STREET.roadHalf + 0.6);
  A.mode = mode;
  A.move = moving;
  animate(c.model, A, dt);
  integrate(G, c, dt);
}

export function removeActor(G, a) {
  G.scene.remove(a.model.group);
  if (a.props) for (const pr of a.props) G.scene.remove(pr);
  if (a.isFoe) G.hud.removeLabel(a);
  G.hud.removeBubble(a);
  const i = G.followers.indexOf(a);
  if (i >= 0) G.followers.splice(i, 1);
}

const BOSS_INTRO = {
  neta: ['নেতা আসছেন!', 'সাথে মাস্তান বাহিনী · সাবধান'],
  bhumi: ['ভূমিদস্যু হাজির!', 'ফুটপাতও দখল করতে চায় · বুলডোজার থেকে সাবধান'],
  vejal: ['ভেজাল ওষুধ বিক্রেতা!', 'বিষাক্ত বড়ি ছোড়ে · সবুজ দাগে দাঁড়াবেন না · টনিক খেতে দেবেন না'],
  prosno: ['প্রশ্নফাঁসকারী!', 'প্রশ্নপত্র ছুড়ে চোখ ঢাকে · ফটোকপি দিয়ে নিজের কপি বানায়'],
};

function spawnBoss(G, key, ahead) {
  const p = G.player;
  const w = G.wave;
  const z = clamp(p.z + ahead * 50, -STREET.len + 12, STREET.startZ - 12);
  const lead = spawnFoe(G, key, rand(-7, -3), z);
  const n = key === 'neta' ? 2 + Math.floor(w / 6) : key === 'bhumi' ? 2 : key === 'vejal' ? 1 : 0;
  for (let i = 0; i < n; i++) spawnFoe(G, 'mastan', lead.x + rand(-2, 2), z + rand(-2, 2), { state: 'escort', leader: lead, slot: (i % 2 ? 1 : -1) * (1 + Math.floor(i / 2) * 0.8) });
  const [title, sub] = BOSS_INTRO[key];
  G.hud.banner(title, `${lead.nick} · ${sub}`, 'boss');
  logEv(G, 'boss', { key, nick: lead.nick });
}

export function spawnWave(G) {
  const w = G.wave;
  G.hpScale = 1 + (w - 1) * 0.08;
  G.dmgScale = 1 + (w - 1) * 0.05;
  let list;
  if (w === 1) list = ['chanda', 'chanda', 'ghush'];
  else if (w === 2) list = ['chanda', 'mastan', 'mastan', 'syndicate'];
  else {
    const n = 3 + Math.floor(w / 2);
    const pool = ['chanda', 'ghush', 'mastan', 'mastan', 'syndicate'];
    if (w >= 4) pool.push('thikadar');
    list = [];
    for (let i = 0; i < n; i++) list.push(pick(pool));
    if (w % 3 === 0) list.unshift(BOSS_ORDER[(w / 3 - 1) % BOSS_ORDER.length]);
  }
  const p = G.player;
  const ahead = p.z > -STREET.len + 120 ? -1 : 1;
  const zFor = () => clamp(p.z + ahead * rand(24, 80), -STREET.len + 10, STREET.startZ - 10);
  const usedShops = new Set();
  for (const key of list) {
    if (key === 'chanda') {
      const cands = G.world.shops.filter((s) => !usedShops.has(s) && (s.z - p.z) * ahead > 18 && (s.z - p.z) * ahead < 95);
      const shop = cands.length ? pick(cands) : null;
      if (shop) {
        usedShops.add(shop);
        const keeper = createCivilian(G, shop.x, shop.z, { mode: 'cower' });
        keeper.fixed = true;
        keeper.face = -shop.side * Math.PI / 2;
        keeper.bubble = 'বাঁচান!';
        keeper.name = pick(CITIZEN_NAMES);
        const f = spawnFoe(G, 'chanda', shop.x - shop.side * 1.3, shop.z, { victim: keeper, busyT: 24 });
        f.face = shop.side * Math.PI / 2;
        f.keeper = keeper;
        continue;
      }
      spawnFoe(G, 'mastan', rand(-16, 16), zFor());
    } else if (key === 'ghush') {
      const s = Math.random() < 0.5 ? -1 : 1;
      const z = zFor();
      const f = spawnFoe(G, 'ghush', s * 16.6, z);
      f.face = -s * Math.PI / 2;
      f.props = [propGroup(G, s * 16.0, z, 'desk', s)];
      f.x = s * 17.2;
      f.payers = [];
      for (let i = 0; i < 2; i++) {
        const c = createCivilian(G, s * 15.0, z - 0.2 + i * 1.1, { mode: 'stand' });
        c.fixed = true;
        c.payer = true;
        c.face = s * Math.PI / 2;
        c.mode = 'pay';
        c.st = -rand(0, 1.5);
        f.payers.push(c);
      }
    } else if (key === 'syndicate') {
      const s = Math.random() < 0.5 ? -1 : 1;
      const z = zFor();
      const f = spawnFoe(G, 'syndicate', s * 15.8, z);
      f.props = [propGroup(G, s * 17.2, z, 'sacks', s)];
    } else if (key === 'thikadar') {
      const s = Math.random() < 0.5 ? -1 : 1;
      const z = zFor();
      const f = spawnFoe(G, 'thikadar', s * 15.6, z);
      f.face = -s * Math.PI / 2;
    } else if (FOES[key].boss) {
      spawnBoss(G, key, ahead);
    } else {
      spawnFoe(G, 'mastan', rand(-16, 16), zFor());
    }
  }
  const brooms = w === 1 ? 2 : Math.random() < 0.6 ? 1 : 0;
  for (let i = 0; i < brooms; i++) {
    const s = Math.random() < 0.5 ? -1 : 1;
    spawnPickup(G, 'broom', s * rand(13.4, 15.5), clamp(p.z + ahead * rand(8, 35), -STREET.len + 6, STREET.startZ - 6));
  }
}

export function summonGoons(G, boss) {
  for (let i = 0; i < 2; i++) {
    const side = i ? 1 : -1;
    const f = spawnFoe(G, 'mastan', clamp(boss.x + side * 6, -17, 17), boss.z + rand(-4, 4), { state: 'alert' });
    f.loot = 3000;
  }
}

export { separate };
