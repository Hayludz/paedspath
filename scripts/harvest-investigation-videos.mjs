// Harvests verified embeddable YouTube videos for each Investigations category.
// Writes into data/videos.json under keys "inv-<categoryId>" (resumable; delete a key to refresh it).
import fs from 'node:fs';

const OUT = new URL('../data/videos.json', import.meta.url);
const db = JSON.parse(fs.readFileSync(OUT, 'utf8'));

const QUERIES = {
  fbc: ['full blood count interpretation paediatric', 'anaemia in children approach microcytic macrocytic', 'blood film interpretation red cell morphology'],
  inflam: ['CRP ESR procalcitonin interpretation', 'inflammatory markers fever children explained'],
  chem: ['paediatric electrolytes hyponatraemia hypernatraemia children', 'hyperkalaemia hypokalaemia causes children', 'calcium disorders hypocalcaemia hypercalcaemia children'],
  gas: ['blood gas interpretation acid base children', 'arterial blood gas interpretation paediatrics step by step'],
  liver: ['neonatal jaundice investigation pediatrics', 'liver function tests interpretation cholestasis children'],
  coag: ['coagulation tests PT APTT interpretation', 'bleeding disorders children investigations haemophilia von Willebrand'],
  urine: ['urinalysis interpretation pediatrics', 'urinary tract infection children urine dipstick diagnosis', 'haematuria proteinuria children approach'],
  csf: ['CSF interpretation meningitis children', 'lumbar puncture paediatrics indications findings'],
  stool: ['faecal calprotectin interpretation IBD children', 'coeliac disease serology diagnosis children', 'malabsorption investigations children'],
  endo: ['thyroid function tests interpretation children', 'hypoglycaemia children investigation critical sample', 'diabetes diagnosis children HbA1c ketones'],
  micro: ['tuberculosis diagnosis children Mantoux IGRA', 'septic screen paediatric sepsis investigations', 'malaria diagnosis blood film rapid test'],
  immuno: ['autoantibodies ANA interpretation rheumatology children', 'allergy testing skin prick specific IgE children', 'sweat test cystic fibrosis'],
  ecg: ['pediatric ECG interpretation in children cardiology', 'ECG in infants and children normal findings pediatric electrocardiogram', 'supraventricular tachycardia children ECG'],
  cxr: ['paediatric chest x-ray interpretation', 'neonatal chest x-ray interpretation'],
  abd: ['paediatric abdominal x-ray interpretation', 'paediatric renal imaging DMSA MCUG ultrasound', 'paediatric bone x-ray rickets non-accidental injury'],
  neo: ['newborn screening tests pulse oximetry hearing bloodspot', 'newborn examination hips red reflex'],
};

const TRUSTED = ['osmosis', 'armando', 'strong medicine', 'medical centric', 'najeeb', 'ninja nerd', 'khan academy', 'paediatrics', 'pediatrics', 'geeky medics', 'lecturio', 'zero to finals', 'medcram', 'rcpch', 'amboss', 'openpediatrics', 'radiopaedia', 'dirty medicine', 'dr matt', 'university', 'hospital', 'nhs', 'children', 'radiology'];
const BAD = ['reaction', 'shorts', 'prank', 'asmr', 'song', 'music video', 'trailer', 'tiktok', 'vlog'];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const UA = { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36', 'accept-language': 'en-GB,en;q=0.9' };
const secs = t => (t ? t.split(':').map(Number).reduce((a, n) => a * 60 + n, 0) : 0);

async function search(q) {
  const html = await (await fetch('https://www.youtube.com/results?hl=en&gl=GB&search_query=' + encodeURIComponent(q), { headers: UA })).text();
  const m = html.match(/var ytInitialData = (\{.*?\});<\/script>/s);
  if (!m) return [];
  const out = [];
  (function walk(o) {
    if (!o || typeof o !== 'object') return;
    if (o.videoRenderer) { const v = o.videoRenderer; out.push({ id: v.videoId, title: v.title?.runs?.[0]?.text || '', channel: v.ownerText?.runs?.[0]?.text || '', len: secs(v.lengthText?.simpleText), views: parseInt((v.viewCountText?.simpleText || '0').replace(/[^0-9]/g, '')) || 0 }); return; }
    for (const k in o) walk(o[k]);
  })(JSON.parse(m[1]));
  return out;
}
async function verify(id) {
  const r = await fetch('https://www.youtube.com/oembed?format=json&url=' + encodeURIComponent('https://www.youtube.com/watch?v=' + id));
  if (!r.ok) return null;
  const j = await r.json();
  return { title: j.title, channel: j.author_name };
}
const stop = new Set(['and', 'the', 'children', 'paediatric', 'pediatrics', 'paediatrics', 'child', 'interpretation', 'explained', 'approach', 'step']);
function score(v, words) {
  const t = (v.title + ' ' + v.channel).toLowerCase();
  let s = 0;
  if (v.len < 150 || v.len > 3300) s -= 100;
  if (BAD.some(b => t.includes(b))) s -= 50;
  if (TRUSTED.some(b => v.channel.toLowerCase().includes(b))) s += 4;
  for (const w of words) if (t.includes(w)) s += 2;
  return s + Math.min(4, Math.log10(v.views + 1) - 3);
}

for (const [cat, queries] of Object.entries(QUERIES)) {
  const key = 'inv-' + cat;
  if (db[key]?.length >= 4) continue;
  const picked = [], seen = new Set();
  for (const q of queries) {
    const words = q.toLowerCase().split(/\s+/).filter(w => w.length > 3 && !stop.has(w));
    let res = [];
    try { res = await search(q); } catch (e) { console.log('search fail', q, e.message); }
    await sleep(400);
    const ranked = res.map(v => ({ ...v, s: score(v, words) })).sort((a, b) => b.s - a.s);
    let got = 0;
    for (const v of ranked) {
      if (got >= 2 || v.s < -10) break;
      if (seen.has(v.id)) continue;
      const ok = await verify(v.id); await sleep(150);
      if (ok) { seen.add(v.id); picked.push({ id: v.id, title: ok.title, channel: ok.channel, mins: Math.round(v.len / 60) }); got++; }
    }
  }
  db[key] = picked.slice(0, 6);
  fs.writeFileSync(OUT, JSON.stringify(db, null, 1));
  console.log(cat.padEnd(8), db[key].length, db[key].map(p => p.channel.slice(0, 16)).join(' | '));
}
