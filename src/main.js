import * as THREE from 'three';
import { toPng } from 'html-to-image';
import { STREET, PLAYER, STORE, HEROES, HERO_STAT_LABELS, bn, taka, rand, clamp } from './config.js';
import { setAnisotropy } from './textures.js';
import { buildWorld } from './world.js';
import { createTraffic } from './traffic.js';
import { createWeather } from './weather.js';
import { createMissions } from './missions.js';
import { GameAudio } from './audio.js';
import { Input } from './input.js';
import { Hud } from './hud.js';
import { buildPaper, newStats } from './newspaper.js';
import { setHeld } from './people.js';
import {
  createPlayer, setHero, updatePlayer, updateFoe, createCivilian, updateCivilian, updateProjectiles, updateLoot,
  updatePickups, updateHazards, damagePlayer, damageFoe, removeActor, spawnWave, summonGoons, separate,
  resetFollowers, dismount, logEv,
} from './actors.js';

const $ = (id) => document.getElementById(id);

async function boot() {
  try {
    await Promise.race([
      Promise.all([
        document.fonts.load("800 40px 'Baloo Da 2'", 'বাংলা'),
        document.fonts.load("600 20px 'Hind Siliguri'", 'বাংলা'),
      ]),
      new Promise((r) => setTimeout(r, 2500)),
    ]);
  } catch (e) { /* system Bangla font fallback */ }
  start();
}

function chosenHero() {
  const id = localStorage.getItem(STORE.hero);
  return HEROES.find((h) => h.id === id) || HEROES[0];
}

function start() {
  const renderer = new THREE.WebGLRenderer({ canvas: $('game'), antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  setAnisotropy(Math.min(8, renderer.capabilities.getMaxAnisotropy()));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 330);
  camera.position.set(-10, 6, 6);

  const world = buildWorld(scene);
  const audio = new GameAudio();
  const hud = new Hud(camera);
  const input = new Input();
  const traffic = createTraffic(scene, audio);

  const ringGeo = new THREE.RingGeometry(0.86, 1, 56);
  ringGeo.rotateX(-Math.PI / 2);
  const discGeo = new THREE.CircleGeometry(1, 40);
  discGeo.rotateX(-Math.PI / 2);
  const rings = [];

  const G = {
    scene, world, audio, hud, traffic, camera,
    mode: 'title', player: null, foes: [], civilians: [], projectiles: [], loot: [], pickups: [], hazards: [], followers: [],
    log: [], nicks: new Set(),
    money: 0, kos: 0, wave: 0, combo: 0, comboT: 0, tokens: 0, time: 0,
    shake: 0, hitstop: 0, hpScale: 1, dmgScale: 1, waveClearT: 0, overT: 0, best: null,
    stats: newStats(), photo: null, photoT: 0,
    spawnRing(x, z, r, color, dur, telegraph = false) {
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, depthWrite: false, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(telegraph ? discGeo : ringGeo, mat);
      mesh.position.set(x, 0.32, z);
      mesh.renderOrder = 3;
      scene.add(mesh);
      rings.push({ mesh, r, dur, t: 0, telegraph });
    },
    summon(boss) { summonGoons(G, boss); },
    onPlayerDown() {
      G.overT = 2.4;
      G.photoT = 0.6;
      audio.lose();
      hud.banner('কাবু হয়ে গেলেন!', 'আজকের মতো রাস্তা দুর্নীতিবাজদের দখলে', 'boss');
    },
  };

  G.weather = createWeather(scene, world, audio, onWeather);
  G.missions = createMissions(G);
  G.player = createPlayer(G, chosenHero());
  G.player.model.group.visible = false;

  function onWeather(kind) {
    if (G.mode !== 'play') return;
    const W = G.weather;
    if (kind === 'rain') {
      hud.toast('ঝুম বৃষ্টি শুরু! একটু পরেই রাস্তায় হাঁটুপানি 🌧️', 'warn');
      hud.news('বৃষ্টি নামতেই ড্রেন উপচে রাস্তায়; সিটি কর্পোরেশন বলছে, "এটা নদী নয়, রাস্তা"');
      logEv(G, 'rain', { hour: W.hour });
    } else if (kind === 'flood') {
      hud.toast('জলাবদ্ধতা! পানিতে হাঁটা ধীর, সিএনজির ইঞ্জিন বন্ধ হতে পারে', 'warn');
      hud.news('রাস্তায় হাঁটুপানি; নৌকা নিয়ে অফিসে গেলেন এক কর্মকর্তা, বললেন "উন্নয়ন"');
      logEv(G, 'flood', { hour: W.hour });
    } else if (kind === 'rainStop') {
      hud.news('বৃষ্টি থামল, পানি নামবে আগামী বর্ষার আগে: সংশ্লিষ্ট দপ্তর');
    } else if (kind === 'shed') {
      hud.toast('লোডশেডিং! সব বাতি নিভে গেল 🕯️', 'warn');
      hud.news('লোডশেডিং নেই, শুধু বিদ্যুৎ নেই: বিদ্যুৎ বিভাগ');
      logEv(G, 'shed', { hour: W.hour });
    } else if (kind === 'power') {
      hud.toast('কারেন্ট আসছে! জনতার উল্লাস', 'good');
      audio.cheer(false);
    }
  }

  for (let i = 0; i < 24; i++) {
    const s = i % 2 ? 1 : -1;
    createCivilian(G, s * rand(14.2, 17.6), rand(-70, 10));
  }
  for (let i = 0; i < 14; i++) traffic.spawn(-20, true);

  let muted = localStorage.getItem(STORE.muted) === '1';
  audio.setMuted(muted);
  const syncMute = () => { $('muteBtn').classList.toggle('off', muted); };
  syncMute();
  const toggleMute = () => {
    muted = !muted;
    audio.setMuted(muted);
    localStorage.setItem(STORE.muted, muted ? '1' : '0');
    syncMute();
  };

  const coarse = window.matchMedia('(pointer: coarse)').matches;
  document.body.classList.toggle('touchy', coarse);

  function clearRound() {
    const p = G.player;
    if (p.riding) dismount(G, p, false);
    resetFollowers(G);
    G.missions.reset();
    for (const f of G.foes) removeActor(G, f);
    G.foes.length = 0;
    for (let i = G.civilians.length - 1; i >= 0; i--) {
      const c = G.civilians[i];
      if (c.fixed || c.mode === 'escortee') { removeActor(G, c); G.civilians.splice(i, 1); }
    }
    for (const s of G.projectiles) scene.remove(s.mesh);
    G.projectiles.length = 0;
    for (const l of G.loot) scene.remove(l.mesh);
    G.loot.length = 0;
    for (const k of G.pickups) scene.remove(k.mesh);
    G.pickups.length = 0;
    for (const h of G.hazards) scene.remove(h.mesh);
    G.hazards.length = 0;
    for (const r of rings) scene.remove(r.mesh);
    rings.length = 0;
    G.tokens = 0;
  }

  function startGame() {
    audio.unlock();
    clearRound();
    const p = G.player;
    const hero = chosenHero();
    setHero(G, p, hero);
    Object.assign(p, { hp: hero.hp, maxHp: hero.hp, sandals: PLAYER.sandals, special: 0, x: -14.5, z: -6, face: Math.PI, kx: 0, kz: 0, inv: 1, weapon: null });
    setHeld(p.model, p.model.defaultHeld);
    p.state = 'free';
    p.st = 0;
    p.model.group.visible = true;
    p.model.body.rotation.x = 0;
    for (const st of world.sandalStalls) st.cooldown = 0;
    Object.assign(G, { money: 0, kos: 0, wave: 0, combo: 0, comboT: 0, overT: 0, waveClearT: 2.2, shake: 0, hitstop: 0, mode: 'play', waveActive: false });
    G.stats = newStats();
    G.stats.hero = hero.id;
    G.log = [];
    G.nicks.clear();
    G.weather.reset();
    G.photo = null;
    G.photoT = 0;
    for (const c of G.civilians) c.z = clamp(p.z + rand(-60, 40), -STREET.len + 5, STREET.startZ - 5);
    hud.moneyShown = 0;
    hud.show(true);
    showScreen(null);
    hud.banner('দফা ১', `${hero.name} নামলেন রাস্তায় · ফুটপাতে চাঁদাবাজি চলছে, থামান!`);
    audio.wave();
  }

  function nextWave() {
    G.wave++;
    G.tokens = 0;
    spawnWave(G);
    if (G.wave > 1 && G.wave % 3 !== 0) {
      const subs = ['মাস্তান আর সিন্ডিকেট নেমেছে', 'ঘুষের টেবিল বসেছে ফুটপাতে', 'চাঁদাবাজরা ফিরে এসেছে', 'দুর্নীতির জাল আরো বড়', 'টেন্ডারবাজরাও এসে গেছে'];
      hud.banner('দফা ' + bn(G.wave), subs[G.wave % subs.length]);
      audio.wave();
    }
    G.waveActive = true;
  }

  function updateWaves(dt) {
    if (G.player.state === 'dead') return;
    if (G.waveClearT > 0) {
      G.waveClearT -= dt;
      if (G.waveClearT <= 0) nextWave();
      return;
    }
    if (G.waveActive && G.foes.every((f) => f.state === 'ko' || f.mission)) {
      G.waveActive = false;
      G.waveClearT = 4.5;
      const p = G.player;
      p.hp = Math.min(p.maxHp, p.hp + 25);
      p.sandals = Math.min(PLAYER.maxSandals, p.sandals + 1);
      hud.banner('দফা ' + bn(G.wave) + ' শেষ!', 'দম ফিরল +২৫ · স্যান্ডেল +১', 'good');
      audio.cheer(true);
    }
  }

  function gameOver() {
    G.mode = 'over';
    hud.show(false);
    $('paperBody').innerHTML = buildPaper(G, G.stats, G.photo);
    $('heroName').value = localStorage.getItem(STORE.name) || '';
    $('saveHero').disabled = false;
    $('saveHero').textContent = 'বোর্ডে নাম তুলুন';
    $('shareBtn').disabled = false;
    $('shareBtn').textContent = 'পত্রিকা শেয়ার করুন';
    showScreen('over');
    $('over').scrollTop = 0;
  }

  async function sharePaper() {
    const btn = $('shareBtn');
    btn.disabled = true;
    btn.textContent = 'ছাপা হচ্ছে...';
    try {
      const el = document.querySelector('#over .paper');
      el.classList.add('exporting');
      const url = await toPng(el, { pixelRatio: 2, backgroundColor: '#f3ead7', cacheBust: true, filter: (n) => !(n.classList && n.classList.contains('no-export')) });
      el.classList.remove('exporting');
      const blob = await (await fetch(url)).blob();
      const file = new File([blob], 'dainik-amjonota.png', { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'দৈনিক আমজনতা', text: 'ঢাকা ড্যাশে আমার কীর্তি! খেলুন আর রাস্তা বাঁচান' });
        btn.textContent = 'শেয়ার হয়েছে ✓';
      } else {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dainik-amjonota.png';
        a.click();
        btn.textContent = 'ছবি ডাউনলোড হয়েছে ✓';
      }
    } catch (e) {
      document.querySelector('#over .paper').classList.remove('exporting');
      btn.textContent = 'আবার চেষ্টা করুন';
    }
    btn.disabled = false;
  }

  function heroes() {
    try { return JSON.parse(localStorage.getItem(STORE.heroes)) || []; } catch { return []; }
  }

  function renderHeroes() {
    const list = heroes();
    $('heroList').innerHTML = list.length
      ? list.map((h, i) => `<li><span class="rank">${bn(i + 1)}</span><span class="nm">${escapeHtml(h.name)}${h.hero ? ` <em>${escapeHtml(HEROES.find((x) => x.id === h.hero)?.name || '')}</em>` : ''}</span><span class="mn">${taka(h.money)}</span><span class="ko">${bn(h.kos)} ধরাশায়ী</span></li>`).join('')
      : '<li class="empty">এখনো কেউ রুখে দাঁড়ায়নি। আপনিই প্রথম হোন!</li>';
    const top = list[0];
    $('titleBest').textContent = top ? `সেরা হিরো: ${top.name} · ${taka(top.money)}` : '';
  }

  const HERO_ICON = { student: '🎓', rickshaw: '🛺', aunty: '☂️', teacher: '👓' };
  function renderHeroPick() {
    const cur = chosenHero().id;
    $('heroPick').innerHTML = HEROES.map((h) => `
      <button class="hero-card${h.id === cur ? ' on' : ''}" data-action="pickHero" data-id="${h.id}" style="--c:${h.look.shirt}">
        <span class="hc-icon">${HERO_ICON[h.id]}</span>
        <span class="hc-name">${h.name}</span>
        <span class="hc-tag">${h.tag}</span>
        <span class="hc-stats">${h.stats.map((v, i) => `<span><i>${HERO_STAT_LABELS[i]}</i><b style="width:${v * 20}%"></b></span>`).join('')}</span>
        <span class="hc-special"><b>E · ${h.special.name}</b>${h.special.desc}</span>
      </button>`).join('');
  }

  function saveHero() {
    const name = ($('heroName').value || '').trim().slice(0, 18) || 'অচেনা পথচারী';
    localStorage.setItem(STORE.name, name);
    const list = heroes();
    list.push({ name, money: Math.round(G.money), kos: G.kos, wave: G.wave, hero: G.stats.hero, at: Date.now() });
    list.sort((a, b) => b.money - a.money);
    localStorage.setItem(STORE.heroes, JSON.stringify(list.slice(0, 10)));
    $('saveHero').disabled = true;
    $('saveHero').textContent = 'নাম উঠেছে ✓';
    renderHeroes();
  }

  function showScreen(id) {
    for (const s of ['title', 'pause', 'over']) $(s).classList.toggle('hidden', s !== id);
  }

  function toTitle() {
    clearRound();
    G.mode = 'title';
    G.player.model.group.visible = false;
    hud.show(false);
    renderHeroPick();
    showScreen('title');
  }

  function togglePause() {
    if (G.mode === 'play') { G.mode = 'paused'; showScreen('pause'); }
    else if (G.mode === 'paused') { G.mode = 'play'; showScreen(null); }
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-action]');
    if (!b) return;
    audio.unlock();
    const a = b.dataset.action;
    if (a === 'start' || a === 'again') startGame();
    else if (a === 'resume') togglePause();
    else if (a === 'menu') toTitle();
    else if (a === 'pause') togglePause();
    else if (a === 'mute') toggleMute();
    else if (a === 'save') saveHero();
    else if (a === 'share') sharePaper();
    else if (a === 'pickHero') { localStorage.setItem(STORE.hero, b.dataset.id); renderHeroPick(); audio.pickup(); }
    else if (a === 'heroes') { renderHeroes(); $('heroes').classList.remove('hidden'); }
    else if (a === 'disclaimer') $('disclaimer').classList.remove('hidden');
    else if (a === 'close') b.closest('.modal').classList.add('hidden');
    else if (a === 'howto') $('howto').classList.toggle('collapsed');
  });
  $('heroName').addEventListener('keydown', (e) => { if (e.key === 'Enter') saveHero(); });
  window.addEventListener('blur', () => { if (G.mode === 'play') togglePause(); });
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  function onVehicleHit(a, v) {
    const sx = Math.sign(a.x - v.x) || 1;
    const dirX = sx * 0.8, dirZ = v.dir * 0.6;
    const dozer = v.type === 'dozer';
    if (a.isFoe && dozer && a.key === 'bhumi') return;
    a.carImmune = 1.3;
    audio.crash();
    const word = dozer ? 'বুলডোজার!' : v.type === 'bus' ? 'বাসের ধাক্কা!' : 'ধাক্কা!';
    if (a.isPlayer) {
      if (damagePlayer(G, v.T.dmg * (v.T.danger ? 1 : 0.8), dirX, dirZ, v.T.dmg >= 12, word, v.type)) {
        G.stats.busHits++;
        if (dozer) G.stats.dozerHits++;
      }
      a.kx = dirX * 9; a.kz = dirZ * 9;
    } else if (a.isFoe) {
      damageFoe(G, a, v.T.danger ? 70 : 22, { knock: true, vehicle: true, dozer, dirX, dirZ, word });
      a.kx = dirX * 10; a.kz = dirZ * 10;
    } else if (a.isCivilian) {
      a.mode = 'down';
      a.st = 0;
      a.kx = dirX * 8; a.kz = dirZ * 8;
      a.bubble = pick2(['উফ! জেব্রা ক্রসিং কই?', 'আল্লাহ বাঁচাইছে!', 'হেলমেট ছিল না!']);
    }
  }

  const camPos = new THREE.Vector3(-14, 6, 4);
  const camLook = new THREE.Vector3(-14, 1, -6);
  const lookTmp = new THREE.Vector3();
  const lookTo = new THREE.Vector3();
  const focusV = new THREE.Vector3();
  let titleT = 0;

  function updateCamera(dt) {
    const p = G.player;
    if (G.mode === 'title') {
      titleT += dt;
      const z = STREET.startZ - 20 - ((titleT * 2.2) % (STREET.len - 100));
      camPos.set(Math.sin(titleT * 0.12) * 7 - 3, 5.5 + Math.sin(titleT * 0.2) * 0.8, z);
      camera.position.copy(camPos);
      camera.lookAt(lookTmp.set(Math.sin(titleT * 0.12) * 4, 2.5, z - 20));
      return z;
    }
    const far = p.riding ? 1.25 : 1;
    const target = lookTmp.set(p.x * 0.68, p.y + 6.2 * far, p.z + 9.4 * far);
    const k = 1 - Math.exp(-6 * dt);
    camPos.lerp(target, k);
    camLook.lerp(lookTo.set(p.x * 0.94, p.y + 1.2, p.z - 4), k);
    camera.position.copy(camPos);
    if (G.shake > 0) {
      const s = G.shake * 0.35;
      camera.position.x += (Math.random() - 0.5) * s;
      camera.position.y += (Math.random() - 0.5) * s;
    }
    camera.lookAt(camLook);
    return p.z;
  }

  function updateRings(dt) {
    for (let i = rings.length - 1; i >= 0; i--) {
      const r = rings[i];
      r.t += dt;
      const k = r.t / r.dur;
      if (k >= 1) { scene.remove(r.mesh); r.mesh.material.dispose(); rings.splice(i, 1); continue; }
      if (r.telegraph) {
        r.mesh.scale.setScalar(r.r * (0.3 + 0.7 * Math.min(1, k * 1.4)));
        r.mesh.material.opacity = 0.25 + Math.sin(r.t * 30) * 0.12;
      } else {
        r.mesh.scale.setScalar(0.3 + r.r * Math.sqrt(k));
        r.mesh.material.opacity = 1 - k;
      }
    }
  }

  function capturePhoto() {
    try {
      const src = renderer.domElement;
      const w = 720, h = Math.round((src.height / src.width) * 720);
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const g = c.getContext('2d');
      const nk = G.weather ? G.weather.nightK : 0;
      g.filter = `grayscale(1) contrast(${(1.15 + nk * 0.1).toFixed(2)}) brightness(${(1.05 + nk * 0.9).toFixed(2)})`;
      g.drawImage(src, 0, 0, w, h);
      G.photo = c.toDataURL('image/jpeg', 0.75);
    } catch { G.photo = null; }
  }

  let last = performance.now();
  function frame(now) {
    requestAnimationFrame(frame);
    let dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    G.time += dt;
    const actions = input.take();
    if (actions.includes('mute')) toggleMute();
    if (actions.includes('pause')) togglePause();
    if (G.mode === 'title' && actions.includes('confirm')) startGame();
    if (G.mode === 'over' && actions.includes('confirm') && document.activeElement !== $('heroName')) startGame();

    const live = G.mode === 'play' || G.mode === 'title' || G.mode === 'over';
    let simDt = dt;
    if (G.hitstop > 0) { G.hitstop -= dt; simDt = dt * 0.08; }
    if (live) {
      const p = G.player;
      if (G.mode === 'play') {
        updatePlayer(G, p, simDt, p.state === 'dead' ? { x: 0, y: 0 } : input.axis(), actions);
        for (const f of G.foes) updateFoe(G, f, simDt);
        for (let i = G.foes.length - 1; i >= 0; i--) {
          if (G.foes[i].remove) { removeActor(G, G.foes[i]); G.foes.splice(i, 1); }
        }
        separate([p, ...G.foes.filter((f) => f.state !== 'ko'), ...G.followers]);
        updateProjectiles(G, simDt);
        updateLoot(G, simDt);
        updatePickups(G, simDt);
        updateHazards(G, simDt);
        updateWaves(simDt);
        G.missions.update(simDt);
        traffic.keepParked(p.z);
        G.comboT -= simDt;
        if (G.comboT <= 0) G.combo = 0;
        if (G.overT > 0) { G.overT -= dt; if (G.overT <= 0) gameOver(); }
      }
      const focusZ = updateCamera(dt);
      if (G.mode === 'title') p.z = focusZ - 10;
      for (const c of G.civilians) updateCivilian(G, c, simDt);
      for (let i = G.civilians.length - 1; i >= 0; i--) {
        const c = G.civilians[i];
        if (c.fixed && !c.follower && Math.abs(c.z - p.z) > 110 && !G.foes.some((f) => f.victim === c || (f.payers && f.payers.includes(c)))) {
          removeActor(G, c);
          G.civilians.splice(i, 1);
        }
      }
      const people = G.mode === 'play'
        ? [p, ...G.foes.filter((f) => f.state !== 'ko'), ...G.civilians.filter((c) => c.follower || c.mode === 'escortee')]
        : [];
      traffic.update(simDt, G.mode === 'play' ? p.z : focusZ - 20, people, onVehicleHit, G.time);
      updateRings(simDt);
      if (G.mode === 'play') focusV.set(p.x, 0, p.z); else focusV.set(0, 0, focusZ - 25);
      G.weather.update(simDt, focusV, G.mode === 'play');
      world.update(focusV, G.time);
      if (G.mode === 'play') hud.update(G, dt);
      else hud.ticker(dt);
      G.shake = Math.max(0, G.shake - dt * 1.6);
    }
    audio.update(dt, G.mode === 'play');
    renderer.render(scene, camera);
    if (G.mode === 'play') {
      if (G.player.state !== 'dead') G.stats.time += dt;
      if (G.photoT > 0) {
        G.photoT -= dt;
        if (G.photoT <= 0) capturePhoto();
      }
    }
  }

  renderHeroes();
  renderHeroPick();
  showScreen('title');
  hud.show(false);
  requestAnimationFrame(frame);
}

function pick2(arr) { return arr[(Math.random() * arr.length) | 0]; }

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

boot();
