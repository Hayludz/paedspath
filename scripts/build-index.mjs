// Builds data/index.json (search index) from curriculum + unit content.
import { UNITS } from '../data/curriculum.js';
import fs from 'node:fs';
const out = [];
for (const u of UNITS) {
  let data = {};
  try { data = (await import(`../data/units/${u.id}.js`)).default; } catch { /* unit not written yet */ }
  for (const [id, title] of u.topics) {
    const t = data[id] || {};
    const text = [title, u.title, t.summary, ...(t.keyPoints || []), ...(t.redFlags || []), ...(t.mnemonics || []).map(m => m.name + ' ' + m.text), ...(t.sections || []).flatMap(s => [s.h, ...(s.list || [])]), ...(t.drugs || []).map(d => d.name)].filter(Boolean).join(' ').toLowerCase();
    out.push({ id, t: title, u: u.title, h: text });
  }
}
fs.writeFileSync(new URL('../data/index.json', import.meta.url), JSON.stringify(out));
console.log('indexed', out.length, 'topics,', Math.round(JSON.stringify(out).length / 1024), 'KB');
