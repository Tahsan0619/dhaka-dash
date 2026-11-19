import * as THREE from 'three';

export const FONT = "'Baloo Da 2', 'Hind Siliguri', 'Nirmala UI', 'Vrinda', sans-serif";

let aniso = 4;
export const setAnisotropy = (n) => { aniso = n; };

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

function tex(c, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function noise(g, w, h, n, alpha, colors) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[(Math.random() * colors.length) | 0];
    g.globalAlpha = Math.random() * alpha;
    const s = Math.random() * 3 + 1;
    g.fillRect(Math.random() * w, Math.random() * h, s, s);
  }
  g.globalAlpha = 1;
}

export function roadTexture() {
  const [c, g] = canvas(512, 512);
  g.fillStyle = '#5b5d61';
  g.fillRect(0, 0, 512, 512);
  noise(g, 512, 512, 9000, 0.35, ['#3d3f43', '#74777c', '#4a4c50', '#85878a']);
  for (let i = 0; i < 7; i++) {
    g.fillStyle = Math.random() < 0.5 ? 'rgba(40,42,46,0.45)' : 'rgba(120,122,126,0.3)';
    const w = 30 + Math.random() * 90;
    g.fillRect(Math.random() * 512, Math.random() * 512, w, w * (0.4 + Math.random()));
  }
  g.strokeStyle = 'rgba(30,30,32,0.6)';
  g.lineWidth = 1.5;
  for (let i = 0; i < 10; i++) {
    g.beginPath();
    let x = Math.random() * 512, y = Math.random() * 512;
    g.moveTo(x, y);
    for (let k = 0; k < 6; k++) { x += (Math.random() - 0.5) * 30; y += Math.random() * 18; g.lineTo(x, y); }
    g.stroke();
  }
  const u = (x) => ((x + 12) / 24) * 512;
  g.fillStyle = '#f2c232';
  for (const x of [-11.5, 11.5]) g.fillRect(u(x) - 3, 0, 6, 512);
  g.fillStyle = 'rgba(240,240,236,0.85)';
  for (const x of [-6.5, 6.5]) {
    g.fillRect(u(x) - 3, 40, 6, 130);
    g.fillRect(u(x) - 3, 296, 6, 130);
  }
  return tex(c);
}

export function tileTexture() {
  const [c, g] = canvas(256, 256);
  const cols = ['#b5654a', '#a85a42', '#c27258', '#9e5a46'];
  g.fillStyle = '#8f8a80';
  g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 8; y++) {
    const off = y % 2 ? 32 : 0;
    const band = Math.floor(y / 2) % 2;
    for (let x = -1; x < 4; x++) {
      g.fillStyle = band ? ['#c9c2b4', '#bdb6a8', '#d3ccbe'][(Math.random() * 3) | 0] : cols[(Math.random() * 4) | 0];
      g.fillRect(x * 64 + off + 2, y * 32 + 2, 60, 28);
    }
  }
  noise(g, 256, 256, 2500, 0.25, ['#000', '#fff']);
  return tex(c);
}

export function stripeTexture(a = '#f5c518', b = '#1d1d1d') {
  const [c, g] = canvas(128, 32);
  g.fillStyle = a;
  g.fillRect(0, 0, 128, 32);
  g.fillStyle = b;
  for (let x = 0; x < 128; x += 64) g.fillRect(x, 0, 32, 32);
  return tex(c);
}

export function brickTexture() {
  const [c, g] = canvas(256, 256);
  g.fillStyle = '#c9bfae';
  g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 16; y++) {
    for (let x = -1; x < 9; x++) {
      const off = y % 2 ? 16 : 0;
      g.fillStyle = ['#a8432f', '#b64d36', '#9c3f2c', '#bf5a3f'][(Math.random() * 4) | 0];
      g.fillRect(x * 32 + off + 1, y * 16 + 1, 30, 14);
    }
  }
  noise(g, 256, 256, 1800, 0.2, ['#000', '#fff']);
  return tex(c);
}

const facadeCache = new Map();
export function facadeTexture(wall, kind = 0) {
  const key = wall + kind;
  if (facadeCache.has(key)) return facadeCache.get(key);
  const [c, g] = canvas(128, 128);
  g.fillStyle = wall;
  g.fillRect(0, 0, 128, 128);
  noise(g, 128, 128, 900, 0.18, ['#000', '#fff']);
  g.fillStyle = 'rgba(0,0,0,0.25)';
  for (let x = 0; x < 128; x += 6) g.fillRect(x + Math.random() * 4, 100 + Math.random() * 20, 2, 28);
  if (kind === 2) {
    g.fillStyle = '#2c3e50';
    g.fillRect(14, 22, 100, 62);
    g.fillStyle = 'rgba(160,200,230,0.5)';
    g.fillRect(18, 26, 44, 54);
    g.fillRect(66, 26, 44, 54);
  } else {
    g.fillStyle = '#1f2a33';
    g.fillRect(28, 22, 72, 64);
    g.fillStyle = kind === 1 ? '#f1d9a6' : '#6d8a9c';
    g.fillRect(32, 26, 64, 56);
    g.strokeStyle = '#2b2b2b';
    g.lineWidth = 3;
    for (let x = 36; x < 96; x += 10) { g.beginPath(); g.moveTo(x, 24); g.lineTo(x, 84); g.stroke(); }
    g.beginPath(); g.moveTo(30, 54); g.lineTo(98, 54); g.stroke();
    g.fillStyle = 'rgba(0,0,0,0.3)';
    g.fillRect(22, 86, 84, 8);
    if (Math.random() < 0.5) {
      g.fillStyle = '#e9ecef';
      g.fillRect(84, 92, 30, 18);
      g.fillStyle = '#adb5bd';
      g.fillRect(88, 96, 22, 2);
      g.fillRect(88, 101, 22, 2);
    }
  }
  const t = tex(c);
  facadeCache.set(key, t);
  return t;
}

export function shutterTexture() {
  const [c, g] = canvas(128, 128);
  g.fillStyle = '#8d949b';
  g.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 128; y += 6) {
    g.fillStyle = y % 12 ? '#9aa1a8' : '#7a8188';
    g.fillRect(0, y, 128, 4);
  }
  noise(g, 128, 128, 600, 0.3, ['#5a5f64', '#c9ced3']);
  return tex(c);
}

export function shopInteriorTexture(seed) {
  const [c, g] = canvas(256, 128);
  g.fillStyle = '#3b2f2a';
  g.fillRect(0, 0, 256, 128);
  g.fillStyle = '#fff3bf';
  g.fillRect(0, 0, 256, 8);
  const pal = ['#e03131', '#1c7ed6', '#f59f00', '#2f9e44', '#ae3ec9', '#f8f9fa', '#e8590c'];
  for (let row = 0; row < 3; row++) {
    g.fillStyle = '#6b4f3a';
    g.fillRect(0, 34 + row * 34, 256, 4);
    for (let x = 4; x < 252; x += 10 + ((seed * 7 + x) % 9)) {
      g.fillStyle = pal[(x * 13 + row * 5 + seed) % pal.length];
      const h = 14 + ((x + seed) % 12);
      g.fillRect(x, 34 + row * 34 - h, 8, h);
    }
  }
  return tex(c, false);
}

export function signTexture(text, bg, fg, w = 512, h = 112) {
  const [c, g] = canvas(w, h);
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(255,255,255,0.55)';
  g.lineWidth = 5;
  g.strokeRect(6, 6, w - 12, h - 12);
  g.fillStyle = fg;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  let size = h * 0.56;
  g.font = `800 ${size}px ${FONT}`;
  while (g.measureText(text).width > w - 40 && size > 12) {
    size -= 2;
    g.font = `800 ${size}px ${FONT}`;
  }
  g.fillText(text, w / 2, h / 2 + size * 0.08);
  return tex(c, false);
}

export function bannerTexture(lines, bg, fg, accent) {
  const [c, g] = canvas(256, 512);
  g.fillStyle = bg;
  g.fillRect(0, 0, 256, 512);
  g.fillStyle = accent;
  g.fillRect(0, 0, 256, 34);
  g.fillRect(0, 478, 256, 34);
  g.fillStyle = 'rgba(255,255,255,0.15)';
  g.beginPath();
  g.arc(128, 380, 70, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = fg;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  lines.forEach((line, i) => {
    let size = 52;
    g.font = `800 ${size}px ${FONT}`;
    while (g.measureText(line).width > 224 && size > 14) {
      size -= 2;
      g.font = `800 ${size}px ${FONT}`;
    }
    g.fillText(line, 128, 120 + i * 82);
  });
  g.font = `700 54px ${FONT}`;
  g.fillText('✊', 128, 384);
  return tex(c, false);
}

export function lungiTexture(color) {
  const [c, g] = canvas(64, 64);
  g.fillStyle = color;
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = 'rgba(255,255,255,0.28)';
  for (let i = 0; i < 64; i += 16) {
    g.fillRect(i, 0, 5, 64);
    g.fillRect(0, i, 64, 5);
  }
  g.fillStyle = 'rgba(0,0,0,0.2)';
  for (let i = 8; i < 64; i += 16) {
    g.fillRect(i, 0, 2, 64);
    g.fillRect(0, i, 64, 2);
  }
  return tex(c);
}

export function groundRingTexture() {
  const [c, g] = canvas(128, 128);
  const grd = g.createRadialGradient(64, 64, 20, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,0)');
  grd.addColorStop(0.7, 'rgba(255,255,255,0.15)');
  grd.addColorStop(0.86, 'rgba(255,255,255,0.95)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  return tex(c, false);
}

export function blobShadowTexture() {
  const [c, g] = canvas(64, 64);
  const grd = g.createRadialGradient(32, 32, 2, 32, 32, 32);
  grd.addColorStop(0, 'rgba(0,0,0,0.55)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  return tex(c, false);
}
