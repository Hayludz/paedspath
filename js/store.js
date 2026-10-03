// Tiny localStorage-backed store. Every access is guarded (private windows, blocked storage).
const PREFIX = 'paeds.v1.';
const mem = {};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw == null ? fallback : JSON.parse(raw);
  } catch { return key in mem ? mem[key] : fallback; }
}
function write(key, value) {
  mem[key] = value;
  try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch { /* memory only */ }
}

const listeners = new Set();
export const onChange = fn => { listeners.add(fn); return () => listeners.delete(fn); };
const emit = key => listeners.forEach(fn => fn(key));

export const store = {
  get: read,
  set(key, value) { write(key, value); emit(key); },
  update(key, fallback, fn) { const v = fn(read(key, fallback)); write(key, v); emit(key); return v; },
};

const today = () => new Date().toISOString().slice(0, 10);

/* ---- progress ---- */
export const progress = {
  all: () => read('done', {}),
  isDone: id => !!read('done', {})[id],
  toggle(id) {
    store.update('done', {}, d => { if (d[id]) delete d[id]; else d[id] = Date.now(); return d; });
    touchStreak();
  },
  count: ids => ids.filter(id => read('done', {})[id]).length,
};

/* ---- bookmarks ---- */
export const bookmarks = {
  all: () => read('bookmarks', []),
  has: id => read('bookmarks', []).includes(id),
  toggle(id) { store.update('bookmarks', [], b => b.includes(id) ? b.filter(x => x !== id) : [...b, id]); },
};

/* ---- notes (free text per topic) ---- */
export const notes = {
  get: id => read('notes', {})[id] || '',
  set(id, text) { store.update('notes', {}, n => { if (text.trim()) n[id] = text; else delete n[id]; return n; }); },
  all: () => read('notes', {}),
};

/* ---- quiz results ---- */
export const results = {
  all: () => read('results', {}),
  record(topicId, correct, total) {
    store.update('results', {}, r => {
      const prev = r[topicId] || { best: 0, attempts: 0 };
      r[topicId] = { best: Math.max(prev.best, Math.round(100 * correct / total)), last: Math.round(100 * correct / total), attempts: prev.attempts + 1 };
      return r;
    });
    touchStreak();
  },
  missed: () => read('missed', []),
  addMissed(key) { store.update('missed', [], m => m.includes(key) ? m : [...m, key].slice(-200)); },
  clearMissed(key) { store.update('missed', [], m => m.filter(x => x !== key)); },
};

/* ---- spaced repetition (Leitner) ---- */
const INTERVALS = [0, 1, 3, 7, 16, 35]; // days per box
export const srs = {
  all: () => read('srs', {}),
  grade(cardId, grade) { // grade: 0 again, 1 good, 2 easy
    store.update('srs', {}, s => {
      const c = s[cardId] || { box: 0 };
      c.box = grade === 0 ? 0 : Math.min(5, c.box + grade);
      const d = new Date(); d.setDate(d.getDate() + INTERVALS[c.box]);
      c.due = d.toISOString().slice(0, 10);
      s[cardId] = c; return s;
    });
    touchStreak();
  },
  isDue: (cardId, s = read('srs', {})) => !s[cardId] || s[cardId].due <= today(),
  mastered: () => Object.values(read('srs', {})).filter(c => c.box >= 4).length,
};

/* ---- streak ---- */
function touchStreak() {
  const s = read('streak', { last: '', days: 0, best: 0 });
  const t = today();
  if (s.last === t) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  s.days = s.last === y.toISOString().slice(0, 10) ? s.days + 1 : 1;
  s.best = Math.max(s.best, s.days); s.last = t;
  store.set('streak', s);
}
export const streak = () => {
  const s = read('streak', { last: '', days: 0, best: 0 });
  const y = new Date(); y.setDate(y.getDate() - 1);
  const alive = s.last === today() || s.last === y.toISOString().slice(0, 10);
  return { days: alive ? s.days : 0, best: s.best, today: s.last === today() };
};

/* ---- videos: custom additions, hidden, watched, resume, prefs ---- */
export const videos = {
  custom: topicId => read('vcustom', {})[topicId] || [],
  addCustom(topicId, v) { store.update('vcustom', {}, m => { (m[topicId] = m[topicId] || []).push(v); return m; }); },
  removeCustom(topicId, key) { store.update('vcustom', {}, m => { m[topicId] = (m[topicId] || []).filter(v => v.key !== key); return m; }); },
  hidden: () => read('vhidden', {}),
  toggleHidden(key) { store.update('vhidden', {}, h => { if (h[key]) delete h[key]; else h[key] = 1; return h; }); },
  watched: () => read('vwatched', {}),
  toggleWatched(key) { store.update('vwatched', {}, h => { if (h[key]) delete h[key]; else h[key] = 1; return h; }); },
  pos: key => read('vpos', {})[key] || 0,
  setPos(key, t) { const m = read('vpos', {}); m[key] = t; write('vpos', m); },
  stamps: key => read('vstamps', {})[key] || [],
  addStamp(key, s) { store.update('vstamps', {}, m => { (m[key] = m[key] || []).push(s); m[key].sort((a, b) => a.t - b.t); return m; }); },
  removeStamp(key, i) { store.update('vstamps', {}, m => { m[key].splice(i, 1); return m; }); },
  prefs: () => read('vprefs', { speed: 1, captions: false, loop: false, theatre: false, float: true }),
  setPrefs(p) { write('vprefs', { ...read('vprefs', { speed: 1, captions: false, loop: false, theatre: false, float: true }), ...p }); },
  clips: key => read('vclips', {})[key] || { start: 0, end: 0 },
  setClip(key, c) { const m = read('vclips', {}); m[key] = c; write('vclips', m); },
};

/* ---- backup / restore ---- */
export function exportAll() {
  const out = {};
  try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith(PREFIX)) out[k.slice(PREFIX.length)] = JSON.parse(localStorage.getItem(k)); } } catch { /* ignore */ }
  return out;
}
export function importAll(obj) {
  Object.entries(obj).forEach(([k, v]) => write(k, v));
  emit('*');
}
