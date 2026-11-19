import * as THREE from 'three';
import { lungiTexture, blobShadowTexture } from './textures.js';

const matCache = new Map();
function mat(color, map) {
  const key = color + (map ? 'm' : '');
  if (!matCache.has(key)) {
    const m = new THREE.MeshLambertMaterial({ color });
    if (map) {
      m.map = lungiTexture(color);
      m.color.set('#ffffff');
    }
    matCache.set(key, m);
  }
  return matCache.get(key);
}

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const geo = {
  leg: box(0.17, 0.9, 0.2),
  foot: box(0.17, 0.09, 0.28),
  torso: box(0.48, 0.6, 0.28),
  arm: box(0.13, 0.58, 0.15),
  hand: box(0.12, 0.12, 0.13),
  head: box(0.3, 0.32, 0.3),
  hair: box(0.32, 0.1, 0.32),
  hairBack: box(0.32, 0.22, 0.08),
  eye: box(0.05, 0.05, 0.02),
  skirt: new THREE.CylinderGeometry(0.24, 0.3, 0.8, 10),
  sareeSkirt: new THREE.CylinderGeometry(0.25, 0.33, 0.86, 10),
  stick: new THREE.CylinderGeometry(0.035, 0.035, 1.05, 6),
};
let shadowGeo, shadowMat;

function add(parent, g, m, x, y, z) {
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

export function buildPerson(look) {
  const group = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = 0.95;
  group.add(body);

  const skin = mat(look.skin);
  const shirt = mat(look.shirt);
  const pants = mat(look.pants);
  const hairM = mat(look.hair);
  const dark = mat('#141414');

  const legs = [];
  for (const side of [1, -1]) {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.12, 0, 0);
    body.add(pivot);
    add(pivot, geo.leg, look.lungi || look.saree ? skin : pants, 0, -0.45, 0);
    add(pivot, geo.foot, dark, 0, -0.9, 0.04);
    legs.push(pivot);
  }
  if (look.lungi) add(body, geo.skirt, mat(look.lungi, true), 0, -0.42, 0);
  if (look.saree) add(body, geo.sareeSkirt, mat(look.pants), 0, -0.47, 0);

  const torso = new THREE.Group();
  body.add(torso);
  const chest = add(torso, geo.torso, shirt, 0, 0.32, 0);
  const belly = look.belly || 1;
  chest.scale.set(1 + (belly - 1) * 0.35, 1, belly);
  if (look.panjabi) add(torso, box(0.5, 0.5, 0.3 * belly), shirt, 0, -0.2, 0);
  if (look.vest) add(torso, box(0.5, 0.5, 0.29 * belly + 0.02), mat(look.vest), 0, 0.36, 0);
  if (look.saree) {
    const drape = add(torso, box(0.18, 0.78, 0.3), mat(shadeOf(look.shirt)), 0.06, 0.32, 0.005);
    drape.rotation.z = 0.55;
    drape.scale.z = 1.05;
  }
  if (look.backpack) add(torso, box(0.38, 0.46, 0.18), mat(look.backpack), 0, 0.34, -0.22);
  if (look.gamchha) {
    add(torso, box(0.42, 0.08, 0.32), mat(look.gamchha), 0, 0.6, 0);
    add(torso, box(0.1, 0.4, 0.04), mat(look.gamchha), 0.12, 0.4, 0.16);
  }

  const head = new THREE.Group();
  head.position.y = 0.66;
  torso.add(head);
  add(head, geo.head, skin, 0, 0.16, 0);
  add(head, geo.hair, hairM, 0, 0.34, 0);
  add(head, geo.hairBack, hairM, 0, 0.22, -0.13);
  if (look.saree) add(head, box(0.16, 0.16, 0.14), hairM, 0, 0.18, -0.2);
  add(head, geo.eye, dark, 0.07, 0.19, 0.155);
  add(head, geo.eye, dark, -0.07, 0.19, 0.155);
  if (look.mustache) add(head, box(0.16, 0.035, 0.03), hairM, 0, 0.09, 0.16);
  if (look.beard) add(head, box(0.26, 0.12, 0.06), mat('#ced4da'), 0, 0.02, 0.14);
  if (look.glasses) {
    const fr = mat('#222');
    add(head, box(0.1, 0.07, 0.02), fr, 0.07, 0.19, 0.165);
    add(head, box(0.1, 0.07, 0.02), fr, -0.07, 0.19, 0.165);
  }
  if (look.shades) add(head, box(0.27, 0.07, 0.02), dark, 0, 0.19, 0.165);
  if (look.cap) {
    add(head, new THREE.CylinderGeometry(0.19, 0.19, 0.1, 10), mat(look.cap), 0, 0.37, 0);
    add(head, box(0.28, 0.025, 0.14), mat(look.cap), 0, 0.33, 0.17);
  }
  if (look.bandana) add(head, box(0.33, 0.07, 0.33), mat(look.bandana), 0, 0.28, 0);
  if (look.topi) add(head, new THREE.SphereGeometry(0.165, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(look.topi), 0, 0.31, 0);

  const arms = [];
  for (const side of [1, -1]) {
    const pivot = new THREE.Group();
    pivot.position.set(side * (0.31 + (belly - 1) * 0.08), 0.58, 0);
    torso.add(pivot);
    add(pivot, geo.arm, look.saree || look.panjabi || side < 0 ? shirt : shirt, 0, -0.27, 0);
    add(pivot, geo.hand, skin, 0, -0.6, 0);
    arms.push(pivot);
  }

  if (look.chain) add(torso, box(0.3, 0.05, 0.31 * belly), mat('#fcc419'), 0, 0.5, 0.01);
  if (look.coat) {
    add(torso, box(0.52, 0.98, 0.3 * belly + 0.03), mat('#f8f9fa'), 0, 0.15, 0);
    add(torso, box(0.12, 0.5, 0.02), shirt, 0, 0.35, 0.16 * belly + 0.01);
  }
  if (look.papers) {
    const paper = mat('#ffffff');
    for (let i = 0; i < 3; i++) add(torso, box(0.12, 0.16, 0.02), paper, -0.12 + i * 0.03, 0.5 + i * 0.03, 0.16 * belly);
  }
  if (look.briefcase) add(arms[0], box(0.12, 0.32, 0.42), mat('#5c3b22'), 0, -0.78, 0);

  if (!shadowGeo) {
    shadowGeo = new THREE.PlaneGeometry(1.1, 1.1);
    shadowGeo.rotateX(-Math.PI / 2);
    shadowMat = new THREE.MeshBasicMaterial({ map: blobShadowTexture(), transparent: true, depthWrite: false });
  }
  const shadow = new THREE.Mesh(shadowGeo, shadowMat);
  shadow.position.y = 0.03;
  shadow.renderOrder = 1;
  group.add(shadow);

  const held = new THREE.Group();
  held.position.set(0, -0.62, 0);
  arms[1].add(held);
  const defaultHeld = look.stick ? 'stick' : look.umbrella ? 'umbrella' : look.cane ? 'cane' : null;
  const m = {
    group, body, torso, head, shadow, held, defaultHeld, stick: false,
    legL: legs[0], legR: legs[1], armL: arms[0], armR: arms[1],
    narrow: !!(look.lungi || look.saree),
    height: 1.95 * (look.scale || 1),
  };
  setHeld(m, defaultHeld);

  group.scale.setScalar(look.scale || 1);
  return m;
}

const heldGeo = {
  stick: new THREE.CylinderGeometry(0.035, 0.035, 1.05, 6),
  cane: new THREE.CylinderGeometry(0.022, 0.022, 0.95, 6),
  shaft: new THREE.CylinderGeometry(0.02, 0.02, 1.0, 6),
  canopy: new THREE.ConeGeometry(0.11, 0.62, 8),
  bristle: new THREE.CylinderGeometry(0.05, 0.16, 0.45, 8),
};

export function setHeld(m, kind) {
  while (m.held.children.length) m.held.remove(m.held.children[0]);
  m.heldKind = kind;
  m.stick = !!kind;
  if (!kind) return;
  const g = new THREE.Group();
  g.rotation.x = Math.PI / 2;
  if (kind === 'stick') g.add(new THREE.Mesh(heldGeo.stick, mat('#8a5a2b')));
  else if (kind === 'cane') {
    g.add(new THREE.Mesh(heldGeo.cane, mat('#6b3e1f')));
  } else if (kind === 'umbrella') {
    const shaft = new THREE.Mesh(heldGeo.shaft, mat('#222'));
    const canopy = new THREE.Mesh(heldGeo.canopy, mat('#1c1c1c'));
    canopy.position.y = 0.2;
    const handle = new THREE.Mesh(box(0.05, 0.05, 0.14), mat('#8a5a2b'));
    handle.position.set(0, -0.5, 0.05);
    g.add(shaft, canopy, handle);
  } else if (kind === 'broom') {
    const shaft = new THREE.Mesh(heldGeo.shaft, mat('#c9a46b'));
    const br = new THREE.Mesh(heldGeo.bristle, mat('#e0b85c'));
    br.position.y = 0.66;
    g.add(shaft, br);
  }
  g.position.z = 0.38;
  m.held.add(g);
}

function shadeOf(hex) {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, -0.1, 0.18);
  return '#' + c.getHexString();
}

const T = {};
function reset() {
  T.lL = 0; T.lR = 0;
  T.aLx = 0; T.aLz = 0.08; T.aRx = 0; T.aRz = -0.08;
  T.tx = 0; T.ty = 0; T.hx = 0;
  T.bx = 0; T.by = 0.95; T.bz = 0;
}

const guard = () => { T.aLx = -1.25; T.aRx = -1.05; T.aLz = -0.25; T.aRz = 0.25; };

export function animate(m, a, dt) {
  reset();
  const t = a.t;
  const mv = a.move || 0;
  let k = 14;
  switch (a.mode) {
    case 'walk': {
      const amp = (m.narrow ? 0.38 : 0.62) * Math.min(1, mv * 1.2);
      const s = Math.sin(a.phase);
      T.lL = s * amp; T.lR = -s * amp;
      T.aLx = -s * amp * 0.9; T.aRx = s * amp * 0.9;
      T.tx = 0.14 * mv;
      T.by = 0.95 + Math.abs(Math.cos(a.phase)) * 0.06 * mv;
      if (a.guard) { T.aLx = -1.2 + s * 0.1; T.aRx = -1.0 - s * 0.1; T.aLz = -0.25; T.aRz = 0.25; }
      break;
    }
    case 'guard':
      guard();
      T.by = 0.93 + Math.sin(t * 6) * 0.015;
      T.lL = 0.25; T.lR = -0.2;
      break;
    case 'punchR': case 'punchL': {
      k = 34;
      guard();
      const R = a.mode === 'punchR';
      if (R) { T.aRx = -1.6; T.aRz = 0.05; T.ty = -0.4; } else { T.aLx = -1.6; T.aLz = -0.05; T.ty = 0.4; }
      T.tx = 0.18;
      T.lL = 0.35; T.lR = -0.25;
      break;
    }
    case 'uppercut':
      k = 30;
      guard();
      T.aRx = -2.7; T.ty = -0.25; T.tx = -0.12; T.by = 1.0;
      T.lL = 0.3; T.lR = -0.3;
      break;
    case 'kick':
      k = 28;
      T.lR = -1.5; T.lL = 0.15; T.tx = -0.3;
      T.aLz = 0.9; T.aRz = -0.9; T.aLx = -0.4; T.aRx = 0.3;
      break;
    case 'windup':
      k = 18;
      T.aRx = m.stick ? -2.95 : -2.4; T.aRz = -0.15;
      T.aLx = -0.9; T.tx = -0.16; T.ty = 0.25;
      T.lL = 0.3; T.lR = -0.25;
      break;
    case 'strike':
      k = 36;
      T.aRx = m.stick ? -0.8 : -1.6; T.ty = -0.3; T.tx = 0.3;
      T.aLx = -0.5; T.lL = 0.4; T.lR = -0.3;
      break;
    case 'slamUp':
      k = 12;
      T.aLx = -2.95; T.aRx = -2.95; T.tx = -0.2; T.by = 1.0;
      break;
    case 'slam':
      k = 40;
      T.aLx = -0.7; T.aRx = -0.7; T.tx = 0.55; T.by = 0.82;
      T.lL = 0.5; T.lR = -0.5;
      break;
    case 'hit':
      k = 30;
      T.tx = -0.5; T.hx = -0.35; T.aLz = 0.7; T.aRz = -0.7; T.aLx = -0.4; T.aRx = -0.4;
      T.lL = -0.2; T.lR = 0.25;
      break;
    case 'down': case 'ko':
      k = a.t < 0.4 ? 12 : 8;
      T.bx = -1.52; T.by = 0.24; T.aLz = 1.3; T.aRz = -1.3; T.aLx = -0.3; T.lL = -0.15; T.lR = 0.2;
      if (a.mode === 'ko') T.hx = -0.2;
      break;
    case 'getup': {
      k = 12;
      const p = Math.min(1, t / 0.55);
      T.bx = -1.52 * (1 - p); T.by = 0.24 + (0.95 - 0.24) * p; T.tx = 0.4 * (1 - p);
      T.lL = -0.6 * (1 - p); T.lR = -0.3 * (1 - p);
      break;
    }
    case 'dodge': {
      k = 60;
      const p = Math.min(1, t / 0.42);
      T.bx = p * Math.PI * 2;
      T.by = 0.95 - Math.sin(p * Math.PI) * 0.5;
      T.lL = -1.6; T.lR = -1.6; T.aLx = -2.2; T.aRx = -2.2;
      break;
    }
    case 'cheer': {
      const w = Math.sin(t * 9);
      T.aLx = -2.9; T.aRx = -2.9; T.aLz = 0.25 + w * 0.2; T.aRz = -0.25 + w * 0.2;
      T.by = 0.95 + Math.abs(Math.sin(t * 7)) * 0.16;
      break;
    }
    case 'fist':
      k = 20;
      T.aRx = -3.05; T.aRz = 0.1; T.aLx = -0.2; T.aLz = 0.3; T.tx = -0.12;
      T.by = 0.95 + Math.max(0, Math.sin(t * 6)) * 0.12;
      break;
    case 'throwUp':
      k = 20;
      T.aRx = -2.9; T.aRz = -0.2; T.ty = 0.45; T.aLx = -1.0; T.tx = -0.1;
      break;
    case 'throw':
      k = 40;
      T.aRx = -1.3; T.ty = -0.35; T.tx = 0.2; T.aLx = -0.3;
      break;
    case 'extort':
      T.aRx = -1.45 + Math.sin(t * 5) * 0.15; T.aRz = -0.05; T.aLz = 0.55; T.aLx = 0.2; T.tx = 0.1;
      break;
    case 'collect':
      T.aRx = -1.2 + Math.sin(t * 2) * 0.05; T.aLx = -0.2; T.tx = -0.05;
      break;
    case 'cower':
      T.tx = 0.35; T.hx = 0.3; T.aLx = -2.1; T.aRx = -2.1; T.aLz = -0.4; T.aRz = 0.4;
      T.by = 0.88 + Math.sin(t * 30) * 0.008;
      break;
    case 'pay':
      T.aRx = -1.3; T.tx = 0.15; T.hx = 0.2;
      break;
    case 'kan': {
      const sq = 0.5 + 0.5 * Math.sin(t * 6);
      T.aLx = -2.95; T.aRx = -2.95; T.aLz = -0.45; T.aRz = 0.45;
      T.by = 0.95 - sq * 0.38; T.lL = -0.7 * sq; T.lR = -0.7 * sq; T.tx = 0.25 * sq;
      k = 18;
      break;
    }
    case 'spin':
      k = 30;
      T.aLz = 1.5; T.aRz = -1.5; T.aRx = -0.3; T.lL = 0.2; T.lR = -0.2;
      break;
    case 'ride':
      T.lL = -1.45; T.lR = -1.45; T.aLx = -1.1; T.aRx = -1.1; T.by = 0.62;
      break;
    case 'sip':
      T.aRx = -2.2 + Math.sin(t * 1.3) * 0.25; T.aRz = 0.35; T.hx = -0.1;
      break;
    default:
      T.tx = Math.sin(t * 1.8) * 0.02;
      T.aLz = 0.08 + Math.sin(t * 1.8) * 0.02;
      T.aRz = -T.aLz;
      if (a.guard) { guard(); T.by = 0.93 + Math.sin(t * 6) * 0.015; T.lL = 0.25; T.lR = -0.2; }
  }
  const f = 1 - Math.exp(-k * dt);
  const L = (o, key, v) => { o[key] += (v - o[key]) * f; };
  L(m.legL.rotation, 'x', T.lL);
  L(m.legR.rotation, 'x', T.lR);
  L(m.armL.rotation, 'x', T.aLx);
  L(m.armL.rotation, 'z', T.aLz);
  L(m.armR.rotation, 'x', T.aRx);
  L(m.armR.rotation, 'z', T.aRz);
  L(m.torso.rotation, 'x', T.tx);
  L(m.torso.rotation, 'y', T.ty);
  L(m.head.rotation, 'x', T.hx);
  if (a.mode === 'dodge') m.body.rotation.x = T.bx;
  else {
    if (m.body.rotation.x > Math.PI) m.body.rotation.x -= Math.PI * 2;
    L(m.body.rotation, 'x', T.bx);
  }
  L(m.body.position, 'y', T.by);
}
