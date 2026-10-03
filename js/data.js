import { UNITS } from '../data/curriculum.js';

export { UNITS };
export const unitById = id => UNITS.find(u => u.id === id);
export const topicMeta = (() => {
  const m = {};
  UNITS.forEach((u, ui) => u.topics.forEach(([id, title], i) => { m[id] = { id, title, unit: u, unitIndex: ui, index: i }; }));
  return m;
})();
export const ALL_TOPIC_IDS = Object.keys(topicMeta);

const unitCache = {};
export function loadUnit(id) {
  return unitCache[id] ||= import(`../data/units/${id}.js`).then(m => m.default).catch(() => ({}));
}
export async function loadTopic(id) {
  const meta = topicMeta[id]; if (!meta) return null;
  const data = (await loadUnit(meta.unit.id))[id];
  return data ? { ...meta, ...data } : { ...meta, missing: true };
}

let videoDb;
export async function loadVideos() {
  if (!videoDb) videoDb = fetch('data/videos.json').then(r => r.json()).catch(() => ({}));
  return videoDb;
}

let searchIdx;
export async function loadIndex() {
  if (!searchIdx) searchIdx = fetch('data/index.json').then(r => r.json()).catch(() => []);
  return searchIdx;
}

// Flatten MCQs / cards across units (loads data lazily)
export async function collect(unitIds) {
  const units = await Promise.all(unitIds.map(async id => [id, await loadUnit(id)]));
  const qs = [], cards = [];
  for (const [uid, data] of units) {
    const u = unitById(uid);
    for (const [tid, title] of u.topics) {
      const t = data[tid]; if (!t) continue;
      (t.quiz || []).forEach((q, i) => qs.push({ ...q, key: `${tid}#${i}`, topicId: tid, topic: title, unit: u.title }));
      (t.cards || []).forEach((c, i) => cards.push({ ...c, id: `${tid}#${i}`, topicId: tid, topic: title, unit: u.title }));
    }
  }
  return { qs, cards };
}

export const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
