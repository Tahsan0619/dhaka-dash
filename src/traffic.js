import * as THREE from 'three';
import { LANES, STREET, rand, pick } from './config.js';
import { FONT } from './textures.js';
import { buildPerson, animate } from './people.js';

const TYPES = {
  bus: { len: 10.5, w: 2.5, speed: [10, 13.5], dmg: 34, brakes: false, danger: true, weight: 3, lanes: [1, 2, 0, 3] },
  truck: { len: 8, w: 2.4, speed: [9, 12], dmg: 30, brakes: false, danger: true, weight: 1.5, lanes: [1, 2] },
  cng: { len: 2.8, w: 1.45, speed: [8, 11], dmg: 12, brakes: true, weight: 3, lanes: [0, 1, 2, 3] },
  rickshaw: { len: 2.3, w: 1.15, speed: [3, 4.2], dmg: 6, brakes: true, weight: 2.5, lanes: [0, 3] },
  car: { len: 4.4, w: 1.85, speed: [10, 14], dmg: 18, brakes: true, weight: 2, lanes: [1, 2] },
  dozer: { len: 6.2, w: 3.2, speed: [12, 12], dmg: 38, brakes: false, danger: true, weight: 0, lanes: [] },
};

export const RIDE = {
  rickshaw: { max: 8, accel: 6, turn: 2.3, name: 'রিকশা', horn: 'ক্রিং ক্রিং!' },
  cng: { max: 14, accel: 9, turn: 1.8, name: 'সিএনজি', horn: 'পিপ পিপ!' },
};

const lam = (c) => new THREE.MeshLambertMaterial({ color: c });
const darkGlass = lam('#1d2a33');
const tyre = lam('#151515');
const wheelGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 12).rotateZ(Math.PI / 2);
const smallWheel = new THREE.CylinderGeometry(0.28, 0.28, 0.16, 10).rotateZ(Math.PI / 2);
const rickWheel = new THREE.CylinderGeometry(0.5, 0.5, 0.06, 14).rotateZ(Math.PI / 2);

function boxMesh(parent, w, h, d, m, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function sideArt(base, accent, text, w = 512, h = 160, windows = true) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = base;
  g.fillRect(0, 0, w, h);
  g.fillStyle = accent;
  g.beginPath();
  g.moveTo(0, h * 0.72);
  for (let x = 0; x <= w; x += 16) g.lineTo(x, h * 0.72 + Math.sin(x / 30) * 8);
  g.lineTo(w, h);
  g.lineTo(0, h);
  g.fill();
  g.fillStyle = '#ffd43b';
  g.fillRect(0, h * 0.62, w, 6);
  if (windows) {
    g.fillStyle = '#1d2a33';
    for (let x = 20; x < w - 40; x += 58) g.fillRect(x, 14, 48, h * 0.36);
  }
  g.fillStyle = '#fff';
  g.font = `800 ${h * 0.16}px ${FONT}`;
  g.textAlign = 'center';
  g.fillText(text, w / 2, h * 0.88);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const busArt = [
  ['#c92a2a', '#2b8a3e', 'সিটিং সার্ভিস (দাঁড়িয়েও যাওয়া যায়)'],
  ['#2b8a3e', '#f59f00', 'লোকাল · সব স্টপে থামে না'],
  ['#1864ab', '#e03131', 'গেটলক · গেট খোলাই থাকে'],
  ['#f59f00', '#c92a2a', 'দ্রুতগামী পরিবহন'],
].map(([b, a, t]) => new THREE.MeshLambertMaterial({ map: sideArt(b, a, t) }));
const truckArt = [
  ['#e8590c', '#1864ab', 'ধীরে চলুন · মায়ের দোয়া'],
  ['#2b8a3e', '#c92a2a', 'হর্ন দিন · সাইড দিন'],
].map(([b, a, t]) => new THREE.MeshLambertMaterial({ map: sideArt(b, a, t, 512, 160, false) }));

function buildVehicle(type) {
  const g = new THREE.Group();
  const T = TYPES[type];
  const wheels = [];
  const addWheels = (geo, pts) => {
    for (const [x, y, z] of pts) {
      const w = new THREE.Mesh(geo, tyre);
      w.position.set(x, y, z);
      g.add(w);
      wheels.push(w);
    }
  };
  let puller = null;
  if (type === 'bus') {
    const art = pick(busArt);
    const plain = lam(art.map.image ? '#d9d9d9' : '#ccc');
    const body = boxMesh(g, T.w, 2.7, T.len, [art, art, lam('#e9ecef'), tyre, darkGlass, plain], 0, 1.85, 0);
    body.castShadow = true;
    boxMesh(g, T.w + 0.04, 0.3, 0.2, lam('#f1f3f5'), 0, 0.65, T.len / 2);
    boxMesh(g, 0.5, 0.18, 0.06, lam('#fff5bf'), 0.85, 0.85, T.len / 2 + 0.11);
    boxMesh(g, 0.5, 0.18, 0.06, lam('#fff5bf'), -0.85, 0.85, T.len / 2 + 0.11);
    addWheels(wheelGeo, [[1.15, 0.5, 3.4], [-1.15, 0.5, 3.4], [1.15, 0.5, -3.2], [-1.15, 0.5, -3.2]]);
  } else if (type === 'truck') {
    const art = pick(truckArt);
    const cab = boxMesh(g, T.w, 2.2, 2.2, [lam('#e8590c'), lam('#e8590c'), lam('#e8590c'), tyre, darkGlass, lam('#e8590c')], 0, 1.7, T.len / 2 - 1.1);
    cab.castShadow = true;
    const cargo = boxMesh(g, T.w, 2.4, T.len - 2.4, [art, art, lam('#5c4a2e'), tyre, lam('#5c4a2e'), lam('#ffd43b')], 0, 1.9, -1.2);
    cargo.castShadow = true;
    addWheels(wheelGeo, [[1.1, 0.5, 2.8], [-1.1, 0.5, 2.8], [1.1, 0.5, -2.4], [-1.1, 0.5, -2.4]]);
  } else if (type === 'cng') {
    const green = lam('#2f9e44');
    const body = boxMesh(g, T.w, 1.0, T.len, green, 0, 0.75, 0);
    body.castShadow = true;
    boxMesh(g, T.w - 0.05, 0.12, T.len - 0.3, lam('#1f6f2e'), 0, 1.9, -0.1);
    boxMesh(g, T.w - 0.1, 0.65, 0.1, darkGlass, 0, 1.5, T.len / 2 - 0.4);
    for (const s of [-1, 1]) boxMesh(g, 0.05, 0.7, T.len - 0.6, lam('#2b2b2b'), s * (T.w / 2 - 0.02), 1.55, -0.1);
    boxMesh(g, 0.3, 0.2, 0.06, lam('#fff5bf'), 0, 0.95, T.len / 2 + 0.02);
    addWheels(smallWheel, [[0, 0.28, T.len / 2 - 0.35], [0.62, 0.28, -0.9], [-0.62, 0.28, -0.9]]);
  } else if (type === 'rickshaw') {
    const hoodCol = pick(['#e03131', '#ae3ec9', '#1c7ed6', '#f59f00', '#2f9e44']);
    boxMesh(g, 1.0, 0.25, 0.8, lam('#c92a2a'), 0, 0.95, -0.55);
    boxMesh(g, 1.0, 0.55, 0.12, lam('#e64980'), 0, 1.25, -0.92);
    const hood = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.9, 12, 1, true, 0, Math.PI), new THREE.MeshLambertMaterial({ color: hoodCol, side: THREE.DoubleSide }));
    hood.rotation.z = Math.PI / 2;
    hood.rotation.y = Math.PI / 2;
    hood.position.set(0, 1.45, -0.7);
    hood.castShadow = true;
    g.add(hood);
    boxMesh(g, 0.06, 0.06, 1.7, lam('#adb5bd'), 0, 0.6, 0.05);
    addWheels(rickWheel, [[0.55, 0.5, -0.6], [-0.55, 0.5, -0.6], [0, 0.5, 0.95]]);
    puller = buildPerson({ shirt: pick(['#f8f9fa', '#ffd43b', '#74c0fc']), pants: '#2b8a3e', lungi: '#2b8a3e', skin: '#7a4a2d', hair: '#111' });
    puller.group.position.set(0, 0.28, 0.45);
    puller.group.scale.setScalar(0.92);
    puller.shadow.visible = false;
    g.add(puller.group);
  } else if (type === 'dozer') {
    const yel = lam('#f5b700');
    const body = boxMesh(g, 2.4, 1.5, 3.6, yel, 0, 1.45, -0.6);
    body.castShadow = true;
    boxMesh(g, 1.6, 1.3, 1.5, [darkGlass, darkGlass, yel, yel, darkGlass, darkGlass], 0, 2.75, -1.0);
    for (const s of [-1, 1]) boxMesh(g, 0.7, 0.9, 4.4, lam('#2b2b2b'), s * 1.25, 0.45, -0.6);
    const blade = boxMesh(g, T.w, 1.3, 0.25, lam('#868e96'), 0, 0.85, 2.3);
    blade.rotation.x = -0.15;
    boxMesh(g, 0.2, 0.2, 1.4, yel, 0.8, 1.0, 1.6);
    boxMesh(g, 0.2, 0.2, 1.4, yel, -0.8, 1.0, 1.6);
    const tag = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.5), new THREE.MeshBasicMaterial({ map: sideArt('#f5b700', '#1a1a1a', 'দখল চলছে', 256, 64, false) }));
    tag.position.set(0, 2.3, 1.2);
    g.add(tag);
  } else {
    const col = pick(['#f1f3f5', '#adb5bd', '#212529', '#1864ab', '#c92a2a']);
    const body = boxMesh(g, T.w, 0.7, T.len, lam(col), 0, 0.7, 0);
    body.castShadow = true;
    boxMesh(g, T.w - 0.15, 0.6, T.len * 0.5, [darkGlass, darkGlass, lam(col), lam(col), darkGlass, darkGlass], 0, 1.33, -0.25);
    addWheels(smallWheel.clone().scale(1.3, 1.3, 1.3), [[0.85, 0.36, 1.4], [-0.85, 0.36, 1.4], [0.85, 0.36, -1.4], [-0.85, 0.36, -1.4]]);
  }
  let warn = null;
  if (T.danger) {
    const wg = new THREE.PlaneGeometry(T.w + 0.6, 8);
    wg.rotateX(-Math.PI / 2);
    wg.translate(0, 0.04, T.len / 2 + 4.2);
    const c = document.createElement('canvas');
    c.width = 32; c.height = 128;
    const cg = c.getContext('2d');
    const grd = cg.createLinearGradient(0, 0, 0, 128);
    grd.addColorStop(0, 'rgba(255,60,30,0)');
    grd.addColorStop(1, 'rgba(255,60,30,0.85)');
    cg.fillStyle = grd;
    cg.fillRect(0, 0, 32, 128);
    for (let y = 8; y < 128; y += 28) { cg.fillStyle = 'rgba(255,220,60,0.5)'; cg.fillRect(0, y, 32, 8); }
    const t = new THREE.CanvasTexture(c);
    warn = new THREE.Mesh(wg, new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false }));
    warn.renderOrder = 2;
    g.add(warn);
  }
  return { group: g, wheels, puller, warn };
}

export function createTraffic(scene, audio) {
  const list = [];
  let spawnT = 0;

  function spawn(focusZ, initial = false) {
    const laneIdx = (Math.random() * LANES.length) | 0;
    const lane = LANES[laneIdx];
    const pool = Object.entries(TYPES).filter(([, t]) => t.lanes.includes(laneIdx));
    let total = pool.reduce((s, [, t]) => s + t.weight, 0);
    let r = Math.random() * total;
    let type = pool[0][0];
    for (const [k, t] of pool) { r -= t.weight; if (r <= 0) { type = k; break; } }
    const T = TYPES[type];
    let z = initial ? focusZ + rand(-110, 110) : focusZ - lane.dir * rand(120, 150);
    z = Math.max(-STREET.len + 8, Math.min(STREET.startZ - 8, z));
    if (!initial && Math.abs(z - focusZ) < 70) return;
    for (const o of list) if (o.lane === lane && Math.abs(o.z - z) < (o.T.len + T.len) / 2 + 6) return;
    const v = buildVehicle(type);
    v.group.rotation.y = lane.dir < 0 ? Math.PI : 0;
    scene.add(v.group);
    const speed = rand(T.speed[0], T.speed[1]);
    list.push({ ...v, type, T, lane, x: lane.x + rand(-0.3, 0.3), z, speed, cruise: speed, dir: lane.dir, honkT: 0, phase: 0 });
  }

  function clear() {
    for (const v of list) scene.remove(v.group);
    list.length = 0;
  }

  function addParked(type, x, z, heading) {
    const v = buildVehicle(type);
    if (v.puller) v.puller.group.visible = false;
    scene.add(v.group);
    const item = { ...v, type, T: TYPES[type], lane: null, x, z, speed: 0, cruise: 0, dir: 1, honkT: 0, phase: 0, parked: true, heading };
    v.group.position.set(x, 0, z);
    v.group.rotation.y = heading;
    list.push(item);
    return item;
  }

  function keepParked(focusZ) {
    const parked = list.filter((v) => v.parked && !v.rider);
    for (const v of parked) {
      if (Math.abs(v.z - focusZ) > 110) { scene.remove(v.group); list.splice(list.indexOf(v), 1); }
    }
    const near = list.filter((v) => v.parked && Math.abs(v.z - focusZ) < 90).length;
    if (near < 3) {
      const s = Math.random() < 0.5 ? -1 : 1;
      let z = focusZ - rand(15, 70) * (Math.random() < 0.8 ? 1 : -1);
      z = Math.max(-STREET.len + 10, Math.min(STREET.startZ - 10, z));
      if (list.some((o) => o.parked && Math.abs(o.z - z) < 8)) return;
      addParked(Math.random() < 0.55 ? 'rickshaw' : 'cng', s * 10.9, z, s < 0 ? Math.PI : 0);
    }
  }

  function callDozer(focusX, focusZ) {
    const dir = Math.random() < 0.5 ? -1 : 1;
    const x = Math.max(-10, Math.min(10, focusX + rand(-1.5, 1.5)));
    const v = buildVehicle('dozer');
    v.group.rotation.y = dir < 0 ? Math.PI : 0;
    scene.add(v.group);
    const z = focusZ - dir * 55;
    list.push({ ...v, type: 'dozer', T: TYPES.dozer, lane: null, x, z, speed: 13, cruise: 13, dir, honkT: 0, phase: 0, special: true });
    audio.horn('bus');
    return { x, z, dir };
  }

  function update(dt, focusZ, people, onHit, time, onRideHit) {
    spawnT -= dt;
    if (spawnT <= 0 && list.filter((v) => !v.parked).length < 22) { spawn(focusZ); spawnT = rand(0.5, 1.3); }
    for (let i = list.length - 1; i >= 0; i--) {
      const v = list[i];
      const T = v.T;
      if (v.parked || v.rider) {
        for (const p of people) {
          if (p.dead || p === v.rider || p.riding) continue;
          const dx = p.x - v.x, dz = p.z - v.z;
          const hw = (v.rider ? T.len : T.w) / 2 + 0.3, hl = T.len / 2 + 0.3;
          if (Math.abs(dx) < hw && Math.abs(dz) < hl && !v.rider) {
            const px = hw - Math.abs(dx), pz = hl - Math.abs(dz);
            if (px < pz) p.x = v.x + Math.sign(dx || 1) * hw;
            else p.z = v.z + Math.sign(dz || 1) * hl;
          }
        }
        continue;
      }
      const ahead = (o) => (o.z - v.z) * v.dir;
      let target = v.cruise;
      for (const o of list) {
        if (o === v || Math.abs(o.x - v.x) > (o.T.w + T.w) / 2 + 0.2) continue;
        const d = ahead(o) - (o.T.len + T.len) / 2;
        if (o.rider && T.danger) {
          if (d < 0.6 && d > -o.T.len && v.speed > 3 && onRideHit) onRideHit(o, v);
          continue;
        }
        if (d > 0 && d < 10) target = Math.min(target, Math.max(0, o.speed) * Math.min(1, d / 8));
      }
      if (v.special) target = v.cruise;
      let personAhead = null;
      for (const p of people) {
        if (Math.abs(p.x - v.x) > T.w / 2 + 0.9) continue;
        const d = ahead(p) - T.len / 2;
        if (d > -0.5 && d < 4 + v.speed * 0.9) { personAhead = p; if (T.brakes) target = Math.min(target, Math.max(0, (d - 1.2) * 1.2)); }
      }
      v.honkT -= dt;
      if (personAhead && personAhead.isPlayer && v.honkT <= 0) {
        audio.horn(T.danger ? 'bus' : type(v));
        v.honkT = rand(1.4, 2.6);
      }
      const acc = target > v.speed ? 4 : 14;
      v.speed += Math.sign(target - v.speed) * Math.min(Math.abs(target - v.speed), acc * dt);
      v.z += v.dir * v.speed * dt;
      v.group.position.set(v.x, 0, v.z);
      for (const w of v.wheels) w.rotation.x += (v.speed * dt) / 0.45;
      if (v.puller) {
        v.phase += v.speed * dt * 2.2;
        animate(v.puller, { mode: 'walk', t: time, move: 0.6, phase: v.phase }, dt);
      }
      if (v.warn) v.warn.material.opacity = 0.55 + Math.sin(time * 10) * 0.35;

      for (const p of people) {
        if (p.dead || p.riding) continue;
        const dx = p.x - v.x, dz = p.z - v.z;
        const hw = T.w / 2 + 0.35, hl = T.len / 2 + 0.35;
        if (Math.abs(dx) < hw && Math.abs(dz) < hl) {
          if (v.speed > 2.2 && (p.carImmune || 0) <= 0) onHit(p, v);
          const px = hw - Math.abs(dx), pz = hl - Math.abs(dz);
          if (px < pz) p.x = v.x + Math.sign(dx || 1) * hw;
          else p.z = v.z + Math.sign(dz || 1) * hl;
        }
      }

      const far = v.special ? (v.z - focusZ) * v.dir > 70 : Math.abs(v.z - focusZ) > 170;
      if (far || v.z < -STREET.len - 4 || v.z > STREET.startZ + 4) {
        scene.remove(v.group);
        list.splice(i, 1);
      }
    }
  }

  const type = (v) => v.type;
  return { list, spawn, update, clear, keepParked, callDozer, addParked };
}
