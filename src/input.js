const HELD = {
  KeyW: 'up', ArrowUp: 'up', KeyS: 'down', ArrowDown: 'down',
  KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right',
};
const ACTIONS = {
  KeyJ: 'punch', Space: 'punch', KeyK: 'kick', KeyF: 'throw',
  KeyL: 'dodge', ShiftLeft: 'dodge', ShiftRight: 'dodge',
  KeyE: 'special', KeyG: 'use', KeyP: 'pause', Escape: 'pause', KeyM: 'mute', Enter: 'confirm',
};

export class Input {
  constructor() {
    this.held = new Set();
    this.queue = [];
    this.stick = { x: 0, y: 0, active: false };
    window.addEventListener('keydown', (e) => {
      if (e.target instanceof HTMLInputElement) return;
      const h = HELD[e.code];
      const a = ACTIONS[e.code];
      if (h || a) e.preventDefault();
      if (h) this.held.add(h);
      if (a && !e.repeat) this.queue.push(a);
    });
    window.addEventListener('keyup', (e) => {
      const h = HELD[e.code];
      if (h) this.held.delete(h);
    });
    window.addEventListener('blur', () => this.held.clear());
    this.bindTouch();
  }

  bindTouch() {
    const pad = document.getElementById('stickPad');
    const knob = document.getElementById('stickKnob');
    if (pad) {
      let id = null;
      let cx = 0, cy = 0;
      const R = 52;
      const move = (e) => {
        const dx = e.clientX - cx, dy = e.clientY - cy;
        const d = Math.hypot(dx, dy) || 1;
        const k = Math.min(1, d / R);
        this.stick.x = (dx / d) * k;
        this.stick.y = (dy / d) * k;
        knob.style.transform = `translate(${this.stick.x * R}px, ${this.stick.y * R}px)`;
      };
      pad.addEventListener('pointerdown', (e) => {
        id = e.pointerId;
        pad.setPointerCapture(id);
        const r = pad.getBoundingClientRect();
        cx = r.left + r.width / 2;
        cy = r.top + r.height / 2;
        this.stick.active = true;
        move(e);
      });
      pad.addEventListener('pointermove', (e) => { if (e.pointerId === id) move(e); });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        this.stick.x = this.stick.y = 0;
        this.stick.active = false;
        knob.style.transform = '';
      };
      pad.addEventListener('pointerup', end);
      pad.addEventListener('pointercancel', end);
    }
    document.querySelectorAll('[data-act]').forEach((b) => {
      b.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.queue.push(b.dataset.act);
        b.classList.add('down');
      });
      const up = () => b.classList.remove('down');
      b.addEventListener('pointerup', up);
      b.addEventListener('pointerleave', up);
    });
  }

  axis() {
    let x = (this.held.has('right') ? 1 : 0) - (this.held.has('left') ? 1 : 0);
    let y = (this.held.has('down') ? 1 : 0) - (this.held.has('up') ? 1 : 0);
    if (this.stick.active) { x = this.stick.x; y = this.stick.y; }
    const d = Math.hypot(x, y);
    if (d > 1) { x /= d; y /= d; }
    return { x, y };
  }

  take() {
    const q = this.queue;
    this.queue = [];
    return q;
  }
}
