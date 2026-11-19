export class GameAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.hornT = 2;
  }

  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.7;
    this.master.connect(ctx.destination);
    const len = ctx.sampleRate * 2;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    const amb = ctx.createBufferSource();
    amb.buffer = this.noiseBuf;
    amb.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 380;
    this.ambGain = ctx.createGain();
    this.ambGain.gain.value = 0.14;
    amb.connect(lp).connect(this.ambGain).connect(this.master);
    amb.start();
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.7, this.ctx.currentTime, 0.05);
  }

  tone(type, f0, f1, dur, vol, delay = 0) {
    const ctx = this.ctx;
    if (!ctx) return;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  noise(dur, vol, freq, q = 1, type = 'bandpass', delay = 0, f1) {
    const ctx = this.ctx;
    if (!ctx) return;
    const t = ctx.currentTime + delay;
    const s = ctx.createBufferSource();
    s.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.02, dur / 4));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(this.master);
    s.start(t, Math.random());
    s.stop(t + dur + 0.05);
  }

  swing() { this.noise(0.14, 0.18, 900, 0.8, 'bandpass', 0, 2600); }
  punch(heavy) {
    this.tone('sine', heavy ? 140 : 190, 50, heavy ? 0.22 : 0.14, heavy ? 0.7 : 0.5);
    this.noise(heavy ? 0.12 : 0.08, heavy ? 0.6 : 0.4, heavy ? 700 : 1100, 0.7);
  }
  hurt() {
    this.tone('square', 220, 120, 0.18, 0.12);
    this.tone('sine', 110, 60, 0.25, 0.5);
  }
  thud() {
    this.tone('sine', 90, 35, 0.35, 0.8);
    this.noise(0.25, 0.35, 300, 0.6, 'lowpass');
  }
  crash() {
    this.noise(0.5, 0.9, 500, 0.5, 'lowpass');
    this.tone('sawtooth', 160, 40, 0.4, 0.25);
  }
  horn(kind) {
    if (!this.ctx) return;
    if (kind === 'bus') {
      this.tone('sawtooth', 311, 311, 0.55, 0.09);
      this.tone('sawtooth', 392, 392, 0.55, 0.07);
    } else if (kind === 'rickshaw') {
      for (let i = 0; i < 3; i++) this.tone('triangle', 2400, 2300, 0.06, 0.08, i * 0.09);
    } else {
      this.tone('square', 640, 640, 0.12, 0.06);
      this.tone('square', 640, 640, 0.14, 0.06, 0.17);
    }
  }
  cheer(big) {
    const n = big ? 6 : 3;
    for (let i = 0; i < n; i++) this.noise(big ? 1.4 : 0.9, big ? 0.22 : 0.12, 900 + Math.random() * 900, 1.2, 'bandpass', i * 0.05);
  }
  roar() {
    this.noise(1.6, 0.5, 400, 0.6, 'lowpass', 0, 1800);
    this.tone('sawtooth', 70, 140, 0.9, 0.18);
    this.cheer(true);
  }
  coin() {
    this.tone('square', 988, 988, 0.08, 0.1);
    this.tone('square', 1319, 1319, 0.16, 0.1, 0.08);
  }
  sip() {
    this.noise(0.12, 0.08, 2000, 2, 'bandpass');
  }
  throwS() { this.noise(0.18, 0.2, 1400, 1, 'bandpass', 0, 600); }
  pickup() {
    this.tone('triangle', 660, 660, 0.08, 0.15);
    this.tone('triangle', 880, 880, 0.12, 0.15, 0.07);
  }
  wave() {
    [523, 659, 784].forEach((f, i) => this.tone('triangle', f, f, 0.18, 0.18, i * 0.11));
  }
  alarm() {
    this.tone('square', 440, 440, 0.12, 0.08);
    this.tone('square', 330, 330, 0.18, 0.08, 0.14);
  }
  thunder() {
    this.noise(2.4, 0.7, 180, 0.5, 'lowpass', 0.15, 60);
    this.noise(0.4, 0.4, 900, 0.5, 'lowpass');
  }
  setRain(level) {
    if (!this.ctx) return;
    if (!this.rainGain) {
      const s = this.ctx.createBufferSource();
      s.buffer = this.noiseBuf;
      s.loop = true;
      const hp = this.ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 1400;
      this.rainGain = this.ctx.createGain();
      this.rainGain.gain.value = 0;
      s.connect(hp).connect(this.rainGain).connect(this.master);
      s.start();
    }
    this.rainGain.gain.setTargetAtTime(level * 0.22, this.ctx.currentTime, 0.4);
  }
  bell() {
    for (let i = 0; i < 6; i++) this.tone('triangle', 2600, 2500, 0.07, 0.1, i * 0.07);
  }
  splash() { this.noise(0.3, 0.25, 700, 0.8, 'bandpass', 0, 300); }
  lose() {
    [392, 330, 262, 196].forEach((f, i) => this.tone('triangle', f, f * 0.98, 0.3, 0.18, i * 0.22));
  }

  update(dt, active) {
    if (!this.ctx) return;
    this.hornT -= dt;
    if (this.hornT <= 0) {
      this.hornT = 1.5 + Math.random() * 4;
      const r = Math.random();
      const vol = this.master.gain.value;
      if (vol > 0) {
        const kind = r < 0.35 ? 'bus' : r < 0.65 ? 'rickshaw' : 'cng';
        const g = this.ctx.createGain();
        g.gain.value = 0.35;
        const old = this.master;
        this.master = g;
        g.connect(old);
        this.horn(kind);
        this.master = old;
      }
    }
    this.ambGain.gain.setTargetAtTime(active ? 0.14 : 0.09, this.ctx.currentTime, 0.3);
  }
}
