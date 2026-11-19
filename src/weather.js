import * as THREE from 'three';
import { STREET, rand, clamp, bn } from './config.js';

const KEYS = [
  { h: 0, bg: '#151b2e', sky: '#5a6ca6', ground: '#2a2622', hemi: 0.55, sun: 0.22, sunCol: '#9fb4ff', night: 1 },
  { h: 4.5, bg: '#1a1f33', sky: '#5a6ca6', ground: '#2a2622', hemi: 0.58, sun: 0.22, sunCol: '#9fb4ff', night: 1 },
  { h: 6, bg: '#e2a985', sky: '#ffd2b0', ground: '#5c4a3e', hemi: 0.95, sun: 0.9, sunCol: '#ffb27a', night: 0.3 },
  { h: 8, bg: '#d8cfbf', sky: '#fff4e0', ground: '#6b6255', hemi: 1.55, sun: 2.1, sunCol: '#ffe2b8', night: 0 },
  { h: 16, bg: '#d8cfbf', sky: '#fff4e0', ground: '#6b6255', hemi: 1.55, sun: 2.1, sunCol: '#ffe2b8', night: 0 },
  { h: 17.6, bg: '#e8996a', sky: '#ffc49a', ground: '#6b5040', hemi: 1.05, sun: 1.3, sunCol: '#ff9a4d', night: 0.15 },
  { h: 19, bg: '#3b3c60', sky: '#7a7fb8', ground: '#2e2a28', hemi: 0.55, sun: 0.28, sunCol: '#8a95ff', night: 0.85 },
  { h: 20.5, bg: '#151b2e', sky: '#5a6ca6', ground: '#2a2622', hemi: 0.55, sun: 0.22, sunCol: '#9fb4ff', night: 1 },
  { h: 24, bg: '#151b2e', sky: '#5a6ca6', ground: '#2a2622', hemi: 0.55, sun: 0.22, sunCol: '#9fb4ff', night: 1 },
];
const RAIN_TINT = new THREE.Color('#7d848c');
const HOURS_PER_SEC = 1 / 8;

const cA = new THREE.Color(), cB = new THREE.Color();
function lerpColor(out, a, b, t) { return out.copy(cA.set(a)).lerp(cB.set(b), t); }

export function createWeather(scene, world, audio, emit) {
  const fogCol = new THREE.Color();
  const skyCol = new THREE.Color();
  const groundCol = new THREE.Color();
  const sunCol = new THREE.Color();
  const lampOff = new THREE.Color('#3a3833');
  const lampOn = new THREE.Color('#fff1b8');

  const lights = [];
  for (let i = 0; i < 4; i++) {
    const l = new THREE.PointLight('#ffc978', 0, 22, 1.2);
    l.position.set(0, -50, 0);
    scene.add(l);
    lights.push(l);
  }

  const N = 1500;
  const drops = new Float32Array(N * 3);
  const pos = new Float32Array(N * 6);
  for (let i = 0; i < N; i++) {
    drops[i * 3] = rand(-26, 26);
    drops[i * 3 + 1] = rand(0, 18);
    drops[i * 3 + 2] = rand(-45, 12);
  }
  const rainGeo = new THREE.BufferGeometry();
  rainGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const rainMat = new THREE.LineBasicMaterial({ color: '#cfdbe8', transparent: true, opacity: 0, depthWrite: false });
  const rain = new THREE.LineSegments(rainGeo, rainMat);
  rain.frustumCulled = false;
  rain.visible = false;
  scene.add(rain);

  const waterMat = new THREE.MeshPhongMaterial({ color: '#53606b', specular: '#c9d6e3', shininess: 80, transparent: true, opacity: 0, depthWrite: false });
  const puddleGeo = new THREE.CircleGeometry(1, 32);
  puddleGeo.rotateX(-Math.PI / 2);
  const puddles = [];
  for (let z = STREET.startZ - 30; z > -STREET.len + 20; z -= rand(38, 60)) {
    const onRoad = Math.random() < 0.75;
    const x = onRoad ? rand(-9.5, 9.5) : (Math.random() < 0.5 ? -1 : 1) * rand(13, 15.5);
    const sx = onRoad ? rand(3, 5.5) : rand(1.6, 2.6);
    const sz = rand(4, 9);
    const m = new THREE.Mesh(puddleGeo, waterMat);
    m.position.set(x, onRoad ? 0.04 : STREET.curbY + 0.03, z);
    m.scale.set(0.01, 1, 0.01);
    m.renderOrder = 1;
    m.visible = false;
    scene.add(m);
    puddles.push({ x, z, sx, sz, m });
  }

  const W = {
    hour: 15.5, rain: 0, rainOn: false, rainT: 55, water: 0, flash: 0, thunderT: 8,
    shedT: 0, shedCheck: 0, sheds: 0, rains: 0, maxWater: 0,
    reset() {
      W.hour = 14 + Math.random() * 3;
      W.rain = 0; W.rainOn = false; W.rainT = rand(45, 70); W.water = 0; W.shedT = 0; W.sheds = 0; W.rains = 0; W.maxWater = 0;
    },
    isNight() { return W.nightK > 0.5; },
    nightK: 0,
    clockText() {
      const h = Math.floor(W.hour), m = Math.floor((W.hour - h) * 60 / 10) * 10;
      const h12 = h % 12 === 0 ? 12 : h % 12;
      const part = h < 5 ? 'রাত' : h < 12 ? 'সকাল' : h < 15 ? 'দুপুর' : h < 18 ? 'বিকেল' : h < 20 ? 'সন্ধ্যা' : 'রাত';
      return `${part} ${bn(h12)}:${bn(String(m).padStart(2, '0'))}`;
    },
    label() {
      const icon = W.shedT > 0 ? '🕯️' : W.rain > 0.3 ? '🌧️' : W.nightK > 0.5 ? '🌙' : W.hour < 17.5 ? '☀️' : '🌇';
      let extra = '';
      if (W.shedT > 0) extra = ' · লোডশেডিং';
      else if (W.water > 0.55) extra = ' · হাঁটুপানি';
      else if (W.rain > 0.3) extra = ' · বৃষ্টি';
      return `${icon} ${W.clockText()}${extra}`;
    },
    waterAt(x, z) {
      if (W.water < 0.25) return 0;
      for (const p of puddles) {
        const dz = (z - p.z) / (p.sz * W.water);
        if (dz > 1 || dz < -1) continue;
        const dx = (x - p.x) / (p.sx * W.water);
        if (dx * dx + dz * dz < 1) return W.water;
      }
      return 0;
    },
    update(dt, focus, active) {
      W.hour = (W.hour + dt * HOURS_PER_SEC) % 24;
      let i = 0;
      while (KEYS[i + 1].h <= W.hour) i++;
      const a = KEYS[i], b = KEYS[i + 1];
      const t = (W.hour - a.h) / (b.h - a.h);
      const r = W.rain;
      lerpColor(fogCol, a.bg, b.bg, t).lerp(RAIN_TINT, r * 0.55 * (1 - W.nightK * 0.7));
      lerpColor(skyCol, a.sky, b.sky, t);
      lerpColor(groundCol, a.ground, b.ground, t);
      lerpColor(sunCol, a.sunCol, b.sunCol, t);
      const night = a.night + (b.night - a.night) * t;
      W.nightK = night;
      const hemiI = (a.hemi + (b.hemi - a.hemi) * t) * (1 - r * 0.25);
      const sunI = (a.sun + (b.sun - a.sun) * t) * (1 - r * 0.6);

      W.flash = Math.max(0, W.flash - dt * 3);
      scene.background.copy(fogCol);
      scene.fog.color.copy(fogCol);
      scene.fog.near = 70 - r * 40 - night * 25;
      scene.fog.far = 270 - r * 120 - night * 90;
      world.hemi.color.copy(skyCol);
      world.hemi.groundColor.copy(groundCol);
      world.hemi.intensity = hemiI + W.flash * 2.5;
      world.sun.color.copy(sunCol);
      world.sun.intensity = sunI;

      const ang = ((W.hour - 6) / 12) * Math.PI;
      const up = Math.sin(ang);
      if (up > 0.05) world.sunDir.set(-Math.cos(ang) * 0.8, Math.max(0.35, up), 0.45).normalize();
      else world.sunDir.set(0.4, 1, 0.3).normalize();

      if (W.shedT > 0) {
        W.shedT -= dt;
        if (W.shedT <= 0) emit('power');
      }
      const lit = W.shedT > 0 ? 0 : night;
      world.lampMat.color.copy(lampOff).lerp(lampOn, lit);
      world.poolMat.opacity = lit * 0.32;
      for (const m of world.glow) m.emissive.setScalar(lit * 0.75);

      const near = world.lamps
        .filter((l) => Math.abs(l.z - focus.z) < 45)
        .sort((p, q) => Math.abs(p.z - focus.z) - Math.abs(q.z - focus.z));
      for (let k = 0; k < lights.length; k++) {
        const l = lights[k];
        const lp = near[k];
        if (lp && lit > 0.02) { l.position.set(lp.x, 7.6, lp.z); l.intensity = lit * 7; }
        else l.intensity = 0;
      }

      if (active) {
        W.rainT -= dt;
        if (W.rainT <= 0) {
          if (W.rainOn) { W.rainOn = false; W.rainT = rand(45, 85); emit('rainStop'); }
          else if (Math.random() < 0.6) { W.rainOn = true; W.rainT = rand(35, 60); W.rains++; emit('rain'); }
          else W.rainT = rand(25, 45);
        }
        if (night > 0.8) {
          W.shedCheck -= dt;
          if (W.shedCheck <= 0) {
            W.shedCheck = 14;
            if (W.shedT <= 0 && Math.random() < 0.22) { W.shedT = 9; W.sheds++; emit('shed'); }
          }
        }
      }
      W.rain = clamp(W.rain + (W.rainOn ? 0.25 : -0.2) * dt, 0, 1);
      const prevWater = W.water;
      W.water = clamp(W.water + (W.rain > 0.5 ? 0.045 : -0.022) * dt, 0, 1);
      if (prevWater < 0.55 && W.water >= 0.55) emit('flood');
      W.maxWater = Math.max(W.maxWater, W.water);

      if (W.rain > 0.6 && active) {
        W.thunderT -= dt;
        if (W.thunderT <= 0) {
          W.thunderT = rand(7, 16);
          W.flash = 1;
          audio.thunder();
        }
      }
      audio.setRain(W.rain);

      rain.visible = W.rain > 0.02;
      rainMat.opacity = W.rain * 0.55;
      if (rain.visible) {
        const fall = dt * 24;
        for (let k = 0; k < N; k++) {
          let y = drops[k * 3 + 1] - fall;
          if (y < 0) y += 18;
          drops[k * 3 + 1] = y;
          const x = focus.x + drops[k * 3], z = focus.z + drops[k * 3 + 2];
          const o = k * 6;
          pos[o] = x; pos[o + 1] = y; pos[o + 2] = z;
          pos[o + 3] = x + 0.04; pos[o + 4] = y + 0.7; pos[o + 5] = z + 0.12;
        }
        rainGeo.attributes.position.needsUpdate = true;
      }

      waterMat.opacity = Math.min(0.85, W.water * 1.3);
      for (const p of puddles) {
        const vis = W.water > 0.02 && Math.abs(p.z - focus.z) < 120;
        p.m.visible = vis;
        if (vis) p.m.scale.set(p.sx * W.water, 1, p.sz * W.water);
      }
    },
  };
  return W;
}
