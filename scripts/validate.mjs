// Validates unit content against the curriculum and schema; also flags non-ASCII dashes.
import { UNITS } from '../data/curriculum.js';
let bad = 0, words = 0, topics = 0;
const err = (id, m) => { bad++; console.log('  !', id, m); };
for (const u of UNITS) {
  let data;
  try { data = (await import(`../data/units/${u.id}.js`)).default; } catch (e) { err(u.id, 'cannot load: ' + e.message); continue; }
  for (const [id] of u.topics) {
    const t = data[id]; if (!t) { err(id, 'missing topic'); continue; }
    topics++;
    if (!t.summary) err(id, 'no summary');
    if ((t.sections || []).length < 3) err(id, 'few sections');
    if ((t.quiz || []).length !== 5) err(id, 'quiz count ' + (t.quiz || []).length);
    if ((t.cards || []).length < 6) err(id, 'cards ' + (t.cards || []).length);
    (t.quiz || []).forEach((q, i) => { if (!q.options || q.options.length < 3 || !(q.answer >= 0 && q.answer < q.options.length)) err(id, 'bad quiz ' + i); });
    const json = JSON.stringify(t);
    if (/[–—]/.test(json)) err(id, 'contains en/em dash');
    words += json.split(/\s+/).length;
  }
  for (const k of Object.keys(data)) if (!u.topics.some(t => t[0] === k)) err(k, 'unknown topic id in ' + u.id);
}
console.log(`${topics} topics, ~${words} words, ${bad} problems`);
