import * as THREE from 'three';
import { STREET, PILLAR_GAP, PILLAR_R, SHOP_NAMES, BANNERS, rand, pick } from './config.js';
import {
  roadTexture, tileTexture, stripeTexture, brickTexture, facadeTexture, shutterTexture,
  shopInteriorTexture, signTexture, bannerTexture, groundRingTexture,
} from './textures.js';

const WALLS = ['#e9d8a6', '#d8e2dc', '#e8b38a', '#9fd3c7', '#e5e5e5', '#ffd6a5', '#cdb4db', '#bcd4e6', '#f1c0b9', '#c7d59f'];
const SIGN_COLORS = [
  ['#c92a2a', '#fff'], ['#1864ab', '#fff'], ['#2b8a3e', '#fff'], ['#f59f00', '#1a1a1a'],
  ['#5f3dc4', '#fff'], ['#e8590c', '#fff'], ['#0b7285', '#fff'], ['#fff3bf', '#c92a2a'],
];
const BANNER_COLORS = [
  ['#2b8a3e', '#fff', '#c92a2a'], ['#c92a2a', '#fff', '#f8f9fa'], ['#f8f9fa', '#1b4332', '#2b8a3e'],
  ['#1864ab', '#fff', '#ffd43b'], ['#ffd43b', '#1a1a1a', '#c92a2a'],
];

export function groundY(x) {
  const ax = Math.abs(x);
  if (ax <= STREET.medianHalf) return 0.3;
  if (ax >= STREET.roadHalf) return STREET.curbY;
  return 0;
}

export function buildWorld(scene) {
  const { len, startZ, roadHalf, medianHalf } = STREET;
  const zEnd = -len;
  const L = startZ - zEnd;
  const zMid = (startZ + zEnd) / 2;
  const colliders = [];
  const shops = [];
  const teaStalls = [];
  const sandalStalls = [];
  const glow = [];
  const lamps = [];
  const lampMat = new THREE.MeshBasicMaterial({ color: '#3a3833' });
  const poolMat = new THREE.MeshBasicMaterial({ color: '#ffcf7a', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const poolGeo = new THREE.CircleGeometry(4.2, 28);
  poolGeo.rotateX(-Math.PI / 2);

  scene.background = new THREE.Color('#d8cfbf');
  scene.fog = new THREE.Fog('#d8cfbf', 70, 270);

  const hemi = new THREE.HemisphereLight('#fff4e0', '#6b6255', 1.55);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#ffe2b8', 2.1);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = -42; sc.right = 42; sc.top = 42; sc.bottom = -42; sc.near = 1; sc.far = 160;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.04;
  scene.add(sun, sun.target);
  const sunDir = new THREE.Vector3(-0.55, 1, 0.45).normalize();

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, L + 400), new THREE.MeshLambertMaterial({ color: '#8c8476' }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -0.02, zMid);
  ground.receiveShadow = true;
  scene.add(ground);

  const roadTex = roadTexture();
  roadTex.repeat.set(1, L / 24);
  const road = new THREE.Mesh(new THREE.PlaneGeometry(roadHalf * 2, L), new THREE.MeshLambertMaterial({ map: roadTex }));
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, 0, zMid);
  road.receiveShadow = true;
  scene.add(road);

  const stripe = (rx) => { const t = stripeTexture(); t.repeat.set(rx, 1); return new THREE.MeshLambertMaterial({ map: t }); };
  const medTop = new THREE.MeshLambertMaterial({ color: '#7a8a4f' });
  const medSide = stripe(L / 2);
  const median = new THREE.Mesh(new THREE.BoxGeometry(medianHalf * 2, 0.3, L), [medSide, medSide, medTop, medTop, medSide, medSide]);
  median.position.set(0, 0.15, zMid);
  median.receiveShadow = true;
  scene.add(median);

  const tiles = tileTexture();
  tiles.repeat.set((19.5 - roadHalf) / 2, L / 2);
  const walkTop = new THREE.MeshLambertMaterial({ map: tiles });
  const curbSide = stripe(L / 1.6);
  for (const s of [-1, 1]) {
    const w = 19.5 - roadHalf;
    const walk = new THREE.Mesh(new THREE.BoxGeometry(w, STREET.curbY, L), [curbSide, curbSide, walkTop, walkTop, curbSide, curbSide]);
    walk.position.set(s * (roadHalf + w / 2), STREET.curbY / 2, zMid);
    walk.receiveShadow = true;
    scene.add(walk);
  }

  const shrubGeo = new THREE.IcosahedronGeometry(0.55, 0);
  const shrubCount = Math.floor(L / 3.2);
  const shrubs = new THREE.InstancedMesh(shrubGeo, new THREE.MeshLambertMaterial({ color: '#3f7d3a', flatShading: true }), shrubCount);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const v = new THREE.Vector3();
  const sv = new THREE.Vector3();
  for (let i = 0; i < shrubCount; i++) {
    const z = startZ - 1 - i * 3.2;
    const s = rand(0.6, 1.05);
    m4.compose(v.set(rand(-0.3, 0.3), 0.45, z), q.setFromAxisAngle(sv.set(0, 1, 0), rand(0, 6)), sv.clone().set(s, s * 0.8, s));
    shrubs.setMatrixAt(i, m4);
  }
  scene.add(shrubs);

  const concrete = new THREE.MeshLambertMaterial({ color: '#c9c3b8' });
  const concreteDark = new THREE.MeshLambertMaterial({ color: '#a39d92' });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(10, 1.5, L + 60), concrete);
  deck.position.set(0, 9.9, zMid);
  deck.castShadow = true;
  deck.receiveShadow = true;
  scene.add(deck);
  for (const s of [-1, 1]) {
    const lip = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.0, L + 60), concreteDark);
    lip.position.set(s * 4.9, 11.1, zMid);
    scene.add(lip);
  }
  const pillarGeo = new THREE.BoxGeometry(1.8, 9.2, 1.8);
  const capGeo = new THREE.BoxGeometry(6.5, 1.3, 2.4);
  const bannerGeo = new THREE.PlaneGeometry(1.7, 3.4);
  let bi = 0;
  for (let z = startZ - 12; z > zEnd + 4; z -= PILLAR_GAP) {
    const p = new THREE.Mesh(pillarGeo, concrete);
    p.position.set(0, 4.6, z);
    p.castShadow = true;
    p.receiveShadow = true;
    scene.add(p);
    const cap = new THREE.Mesh(capGeo, concrete);
    cap.position.set(0, 8.6, z);
    cap.castShadow = true;
    scene.add(cap);
    for (const s of [-1, 1]) {
      const [bg, fg, ac] = BANNER_COLORS[bi % BANNER_COLORS.length];
      const b = new THREE.Mesh(bannerGeo, new THREE.MeshLambertMaterial({ map: bannerTexture(BANNERS[bi % BANNERS.length], bg, fg, ac) }));
      b.position.set(s * 0.92, 4.4, z);
      b.rotation.y = s * Math.PI / 2;
      scene.add(b);
      bi++;
    }
    colliders.push({ x: 0, z, r: PILLAR_R });
  }

  const shutter = shutterTexture();
  const brick = brickTexture();
  const plainMats = new Map();
  const plain = (c) => {
    if (!plainMats.has(c)) plainMats.set(c, new THREE.MeshLambertMaterial({ color: c }));
    return plainMats.get(c);
  };
  const tankGeo = new THREE.CylinderGeometry(0.8, 0.8, 1.4, 12);
  const tankMat = new THREE.MeshLambertMaterial({ color: '#1f1f1f' });
  const awnColors = ['#2b8a3e', '#1864ab', '#c92a2a', '#f59f00', '#0b7285'];

  const stallSpots = [];
  for (let z = startZ - 40, i = 0; z > zEnd + 30; z -= 78, i++) stallSpots.push({ z, side: i % 2 ? 1 : -1, kind: i % 3 === 2 ? 'sandal' : 'tea' });

  let shopIdx = 0;
  for (const s of [-1, 1]) {
    let z = startZ + 6;
    while (z > zEnd - 6) {
      const w = rand(8, 14.5);
      const zc = z - w / 2;
      const floors = 2 + Math.floor(Math.random() * 6);
      const h = floors * 3.2;
      const depth = 14;
      const xFront = s * 19.6;
      const xc = xFront + s * depth / 2;
      const isBrick = Math.random() < 0.18;
      const wall = pick(WALLS);
      const fTex = (isBrick ? brick : facadeTexture(wall, Math.random() < 0.2 ? 2 : Math.random() < 0.5 ? 1 : 0)).clone();
      fTex.needsUpdate = true;
      fTex.repeat.set(isBrick ? w / 3 : Math.max(1, Math.round(w / 3.4)), isBrick ? h / 3 : floors);
      const front = new THREE.MeshLambertMaterial({ map: fTex });
      const side = isBrick ? plain('#a8432f') : plain(wall);
      const mats = s < 0 ? [front, side, side, side, side, side] : [side, front, side, side, side, side];
      const bld = new THREE.Mesh(new THREE.BoxGeometry(depth, h, w - 0.3), mats);
      bld.position.set(xc, 3.6 + h / 2, zc);
      bld.castShadow = true;
      bld.receiveShadow = true;
      scene.add(bld);

      const shop = new THREE.Mesh(new THREE.BoxGeometry(depth, 3.6, w - 0.3), plain('#5c544a'));
      shop.position.set(xc, 1.8, zc);
      scene.add(shop);
      const open = Math.random() < 0.72;
      const faceTex = open ? shopInteriorTexture(shopIdx * 17) : shutter.clone();
      if (!open) { faceTex.needsUpdate = true; faceTex.wrapS = faceTex.wrapT = THREE.RepeatWrapping; faceTex.repeat.set(w / 3, 1); }
      const faceMat = new THREE.MeshLambertMaterial({ map: faceTex, emissive: '#000000', emissiveMap: open ? faceTex : null });
      if (open) glow.push(faceMat);
      const face = new THREE.Mesh(new THREE.PlaneGeometry(w - 1, 2.8), faceMat);
      face.position.set(xFront + s * -0.02, 1.58, zc);
      face.rotation.y = -s * Math.PI / 2;
      scene.add(face);

      const [bg, fg] = pick(SIGN_COLORS);
      const name = SHOP_NAMES[shopIdx % SHOP_NAMES.length];
      const signTex = signTexture(name, bg, fg);
      const signMat = new THREE.MeshLambertMaterial({ map: signTex, emissive: '#000000', emissiveMap: signTex });
      glow.push(signMat);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(w - 1.2, 1.15), signMat);
      sign.position.set(xFront - s * 0.32, 3.55, zc);
      sign.rotation.y = -s * Math.PI / 2;
      scene.add(sign);

      const awn = new THREE.Mesh(new THREE.PlaneGeometry(1.6, w - 1), new THREE.MeshLambertMaterial({ color: pick(awnColors), side: THREE.DoubleSide }));
      awn.rotation.x = -Math.PI / 2;
      awn.rotation.y = -s * 0.35;
      awn.position.set(xFront - s * 0.75, 2.95, zc);
      awn.castShadow = true;
      scene.add(awn);

      if (Math.random() < 0.6) {
        const tank = new THREE.Mesh(tankGeo, tankMat);
        tank.position.set(xc + rand(-3, 3), 3.6 + h + 0.7, zc + rand(-w / 4, w / 4));
        tank.castShadow = true;
        scene.add(tank);
      }
      if (Math.random() < 0.35) {
        const tolet = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.9), new THREE.MeshLambertMaterial({ map: signTexture('টু-লেট', '#fff', '#c92a2a', 192, 112) }));
        tolet.position.set(xFront - s * 0.03, 3.6 + Math.min(h - 1, 4.2), zc + rand(-w / 3, w / 3));
        tolet.rotation.y = -s * Math.PI / 2;
        scene.add(tolet);
      }

      if (open && zc < startZ - 8 && zc > zEnd + 8) {
        const blocked = stallSpots.some((st) => st.side === s && Math.abs(st.z - zc) < 9);
        if (!blocked) shops.push({ x: s * 17.9, z: zc, side: s, name });
      }
      shopIdx++;
      z -= w + (Math.random() < 0.12 ? 2.5 : 0);
    }
  }

  for (const zEndCap of [startZ + 24, zEnd - 24]) {
    for (let i = 0; i < 9; i++) {
      const h = rand(16, 42);
      const b = new THREE.Mesh(new THREE.BoxGeometry(rand(12, 22), h, 14), plain(pick(WALLS)));
      b.position.set(-48 + i * 12, h / 2, zEndCap + (zEndCap > 0 ? 14 : -14) + rand(-4, 4));
      scene.add(b);
    }
  }

  const barrierTex = stripeTexture('#f8f9fa', '#e03131');
  barrierTex.repeat.set(4, 1);
  const barrierMat = new THREE.MeshLambertMaterial({ map: barrierTex });
  const closed = signTexture('রাস্তা বন্ধ · উন্নয়ন কাজ চলছে', '#f59f00', '#1a1a1a', 1024, 140);
  for (const [zb, face] of [[startZ + 2, 0], [zEnd - 2, Math.PI]]) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(39, 0.9, 0.5), barrierMat);
    bar.position.set(0, 0.9, zb);
    scene.add(bar);
    for (let x = -19; x <= 19; x += 3.8) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.3, 0.6), plain('#343a40'));
      leg.position.set(x, 0.65, zb);
      scene.add(leg);
    }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(14, 1.9), new THREE.MeshLambertMaterial({ map: closed, side: THREE.DoubleSide }));
    sign.position.set(-9, 2.5, zb);
    sign.rotation.y = face;
    scene.add(sign);
    const sign2 = sign.clone();
    sign2.position.x = 9;
    scene.add(sign2);
    for (const x of [-15.5, -2.5, 2.5, 15.5]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.4, 0.15), plain('#343a40'));
      post.position.set(x, 1.6, zb);
      scene.add(post);
    }
  }

  const poleGeo = new THREE.BoxGeometry(0.28, 9.4, 0.28);
  const poleMat = new THREE.MeshLambertMaterial({ color: '#8f8a82' });
  const wirePts = [];
  const poles = { '-1': [], '1': [] };
  for (const s of [-1, 1]) {
    for (let z = startZ - 4 + (s > 0 ? 11 : 0); z > zEnd; z -= 22) {
      const p = new THREE.Mesh(poleGeo, poleMat);
      p.position.set(s * 12.5, 4.7, z);
      p.castShadow = true;
      scene.add(p);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.14, 0.14), poleMat);
      arm.position.set(s * 12.5, 8.6, z);
      scene.add(arm);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.18, 0.36), lampMat);
      head.position.set(s * 11.55, 8.48, z);
      scene.add(head);
      const pool = new THREE.Mesh(poolGeo, poolMat);
      pool.position.set(s * 11.2, 0.05, z);
      pool.renderOrder = 1;
      scene.add(pool);
      lamps.push({ x: s * 11.55, z });
      poles[s].push(z);
      colliders.push({ x: s * 12.5, z, r: 0.28 });
    }
  }
  const sag = (ax, ay, az, bx, by, bz, depth) => {
    const n = 10;
    for (let i = 0; i < n; i++) {
      const t0 = i / n, t1 = (i + 1) / n;
      wirePts.push(
        ax + (bx - ax) * t0, ay + (by - ay) * t0 - Math.sin(t0 * Math.PI) * depth, az + (bz - az) * t0,
        ax + (bx - ax) * t1, ay + (by - ay) * t1 - Math.sin(t1 * Math.PI) * depth, az + (bz - az) * t1,
      );
    }
  };
  for (const s of [-1, 1]) {
    const zs = poles[s];
    for (let i = 0; i + 1 < zs.length; i++) {
      const count = 4 + ((Math.random() * 4) | 0);
      for (let k = 0; k < count; k++) {
        const off = rand(-0.85, 0.85);
        sag(s * 12.5 + off, rand(7.4, 8.8), zs[i], s * 12.5 + off * rand(0.6, 1.2), rand(7.4, 8.8), zs[i + 1], rand(0.4, 1.6));
      }
      for (let k = 0; k < 2; k++) sag(s * 12.5, rand(6.5, 8), zs[i], s * 19.6, rand(5, 9), zs[i] - rand(3, 12), rand(0.3, 1));
    }
  }
  const buntingPos = [];
  const buntingCol = [];
  const flagColors = ['#e03131', '#2f9e44', '#f59f00', '#1c7ed6', '#e64980', '#f8f9fa'].map((c) => new THREE.Color(c));
  const zl = poles['-1'];
  for (let i = 1; i < zl.length; i += 2) {
    const z = zl[i];
    const ax = -12.5, bx = 12.5, y = 8.2, depth = 1.5;
    sag(ax, y, z, bx, y, z, depth);
    const flags = 28;
    for (let f = 0; f < flags; f++) {
      const t0 = (f + 0.1) / flags, t1 = (f + 0.9) / flags, tm = (f + 0.5) / flags;
      const P = (t) => [ax + (bx - ax) * t, y - Math.sin(t * Math.PI) * depth];
      const [x0, y0] = P(t0), [x1, y1] = P(t1), [xm, ym] = P(tm);
      buntingPos.push(x0, y0, z, x1, y1, z, xm, ym - 0.55, z);
      const c = flagColors[f % flagColors.length];
      for (let k = 0; k < 3; k++) buntingCol.push(c.r, c.g, c.b);
    }
  }
  const wireGeo = new THREE.BufferGeometry();
  wireGeo.setAttribute('position', new THREE.Float32BufferAttribute(wirePts, 3));
  scene.add(new THREE.LineSegments(wireGeo, new THREE.LineBasicMaterial({ color: '#1a1a1a' })));
  const bGeo = new THREE.BufferGeometry();
  bGeo.setAttribute('position', new THREE.Float32BufferAttribute(buntingPos, 3));
  bGeo.setAttribute('color', new THREE.Float32BufferAttribute(buntingCol, 3));
  bGeo.computeVertexNormals();
  scene.add(new THREE.Mesh(bGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })));

  const treeSpots = [];
  for (const s of [-1, 1]) {
    for (let z = startZ - 15 + (s > 0 ? 6 : 0); z > zEnd + 6; z -= rand(20, 30)) {
      if (stallSpots.some((st) => st.side === s && Math.abs(st.z - z) < 6)) continue;
      treeSpots.push({ x: s * rand(13.5, 13.9), z });
    }
  }
  const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.16, 0.24, 3.2, 6), new THREE.MeshLambertMaterial({ color: '#6b4f3a' }), treeSpots.length);
  const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1.5, 0), new THREE.MeshLambertMaterial({ color: '#4f8a3c', flatShading: true }), treeSpots.length * 2);
  treeSpots.forEach((t, i) => {
    m4.compose(v.set(t.x, 1.75, t.z), q.identity(), sv.set(1, 1, 1));
    trunk.setMatrixAt(i, m4);
    const s1 = rand(0.75, 1.05);
    m4.compose(v.set(t.x, 3.9, t.z), q.setFromAxisAngle(sv.set(0, 1, 0), rand(0, 6)), sv.set(s1, s1 * 0.85, s1));
    crown.setMatrixAt(i * 2, m4);
    const s2 = s1 * 0.7;
    m4.compose(v.set(t.x + rand(-0.6, 0.6), 4.9, t.z + rand(-0.6, 0.6)), q.setFromAxisAngle(sv.set(0, 1, 0), rand(0, 6)), sv.set(s2, s2, s2));
    crown.setMatrixAt(i * 2 + 1, m4);
    colliders.push({ x: t.x, z: t.z, r: 0.35 });
  });
  trunk.castShadow = true;
  crown.castShadow = true;
  scene.add(trunk, crown);

  const ringTex = groundRingTexture();
  const ringGeo = new THREE.PlaneGeometry(5.2, 5.2);
  ringGeo.rotateX(-Math.PI / 2);
  const wood = plain('#8a5a2b');
  const tin = new THREE.MeshLambertMaterial({ color: '#9aa5ad', side: THREE.DoubleSide });
  for (const st of stallSpots) {
    const s = st.side;
    const x = s * 15.6;
    const g = new THREE.Group();
    g.position.set(x, STREET.curbY, st.z);
    scene.add(g);
    for (const [px, pz] of [[-1.1, -1.3], [1.1, -1.3], [-1.1, 1.3], [1.1, 1.3]]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.5, 0.1), wood);
      post.position.set(px, 1.25, pz);
      g.add(post);
    }
    const roof = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 3.2), tin);
    roof.rotation.x = -Math.PI / 2;
    roof.rotation.y = s * 0.18;
    roof.position.y = 2.55;
    roof.castShadow = true;
    g.add(roof);
    const counter = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.95, 2.2), st.kind === 'tea' ? wood : plain('#1864ab'));
    counter.position.set(s * 0.6, 0.48, 0);
    g.add(counter);
    const label = st.kind === 'tea' ? signTexture('চা · বিস্কুট · পান', '#ffd43b', '#c92a2a', 384, 96) : signTexture('জুতা-স্যান্ডেল', '#1c7ed6', '#fff', 384, 96);
    const board = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshLambertMaterial({ map: label, side: THREE.DoubleSide }));
    board.position.set(-s * 1.15, 2.25, 0);
    board.rotation.y = -s * Math.PI / 2;
    g.add(board);
    if (st.kind === 'tea') {
      const kettle = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.3, 10), plain('#adb5bd'));
      kettle.position.set(s * 0.6, 1.1, -0.5);
      g.add(kettle);
      for (let j = 0; j < 4; j++) {
        const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.04, 0.09, 8), plain('#f8f9fa'));
        cup.position.set(s * 0.5, 1.0, 0.2 + j * 0.18);
        g.add(cup);
      }
      const bench = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 2.0), wood);
      bench.position.set(-s * 0.9, 0.23, 0);
      g.add(bench);
    } else {
      const cols = ['#e03131', '#f59f00', '#2f9e44', '#ae3ec9', '#1c7ed6', '#f8f9fa'];
      for (let j = 0; j < 10; j++) {
        const sandal = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.3), plain(cols[j % cols.length]));
        sandal.position.set(s * 0.6 + rand(-0.3, 0.3), 0.99, -0.9 + j * 0.2);
        sandal.rotation.y = rand(-0.4, 0.4);
        g.add(sandal);
      }
    }
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
      map: ringTex, color: st.kind === 'tea' ? '#ffb31a' : '#22b8cf', transparent: true, depthWrite: false,
    }));
    ring.position.set(-s * 2.0, 0.03, 0);
    ring.renderOrder = 2;
    g.add(ring);
    const spot = { x: x - s * 2.0, z: st.z, ring, cooldown: 0, kind: st.kind };
    (st.kind === 'tea' ? teaStalls : sandalStalls).push(spot);
    colliders.push({ x: x + s * 0.4, z: st.z, r: 1.35 });
  }

  colliders.sort((a, b) => a.z - b.z);

  return {
    colliders, shops, teaStalls, sandalStalls, zEnd, startZ, hemi, sun, sunDir, glow, lamps, lampMat, poolMat,
    update(focus, time) {
      sun.position.copy(focus).addScaledVector(sunDir, 80);
      sun.target.position.copy(focus);
      for (const st of teaStalls) st.ring.material.opacity = 0.6 + Math.sin(time * 3) * 0.3;
      for (const st of sandalStalls) st.ring.material.opacity = st.cooldown > 0 ? 0.15 : 0.6 + Math.sin(time * 3 + 1) * 0.3;
    },
  };
}

export function resolveStatic(world, p, r) {
  const cs = world.colliders;
  for (let i = 0; i < cs.length; i++) {
    const c = cs[i];
    const dz = p.z - c.z;
    if (dz > 3 || dz < -3) continue;
    const dx = p.x - c.x;
    const min = r + c.r;
    const d2 = dx * dx + dz * dz;
    if (d2 < min * min && d2 > 1e-6) {
      const d = Math.sqrt(d2);
      p.x = c.x + (dx / d) * min;
      p.z = c.z + (dz / d) * min;
    }
  }
  if (p.x > STREET.walkHalf) p.x = STREET.walkHalf;
  if (p.x < -STREET.walkHalf) p.x = -STREET.walkHalf;
  if (p.z > STREET.startZ - 1) p.z = STREET.startZ - 1;
  if (p.z < -STREET.len + 1) p.z = -STREET.len + 1;
}
