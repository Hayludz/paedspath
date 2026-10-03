import { h, icon, clear } from './dom.js';

// Bedside calculators and quick references. Educational use: verify against local protocols.
const num = (el) => { const v = parseFloat(el.value); return Number.isFinite(v) && v >= 0 ? v : NaN; };
const r1 = n => (Math.round(n * 10) / 10).toString();
const r0 = n => Math.round(n).toString();

function field(label, attrs = {}, hint) {
  const id = 'f' + Math.random().toString(36).slice(2, 8);
  const input = attrs.options
    ? h('select', { id }, attrs.options.map(([v, t]) => h('option', { value: v }, t)))
    : h('input', { id, type: 'number', inputmode: 'decimal', min: 0, step: 'any', ...attrs });
  return { input, el: h('div', { class: 'field' }, h('label', { for: id }, label), input, hint ? h('span', { class: 'hint' }, hint) : null) };
}
function rows(pairs) { return h('dl', { class: 'out' }, pairs.map(([k, v, sub]) => h('div', null, h('dt', null, k), h('dd', null, v, sub ? h('small', null, sub) : null)))); }

function card(title, ic, blurb, body) {
  return h('section', { class: 'tool' }, h('h2', null, icon(ic), title), blurb ? h('p', { class: 'muted' }, blurb) : null, body);
}

function weightTool() {
  const age = field('Age', { placeholder: 'e.g. 3', step: 'any' });
  const unit = field('Unit', { options: [['y', 'years'], ['m', 'months']] });
  const out = h('div', { 'aria-live': 'polite' });
  const calc = () => {
    let a = num(age.input); if (isNaN(a)) return clear(out);
    const months = unit.input.value === 'm' ? a : a * 12;
    const yrs = months / 12;
    let w;
    if (months < 12) w = 0.5 * months + 4;             // APLS infants
    else if (yrs <= 5) w = 2 * yrs + 8;                // APLS 1-5 y
    else w = 3 * yrs + 7;                              // APLS 6-12 y
    const ett = yrs < 1 ? (months < 1 ? 3.5 : 4) : yrs / 4 + 4;
    const sbp = yrs < 1 ? 70 : 70 + 2 * yrs;
    clear(out).append(rows([
      ['Estimated weight', r1(w) + ' kg', months < 12 ? '0.5 x months + 4' : yrs <= 5 ? '2 x age + 8' : '3 x age + 7'],
      ['Cuffed ETT size', r1(yrs < 1 ? ett - 0.5 : yrs / 4 + 3.5) + ' mm', 'uncuffed: ' + r1(ett) + ' mm'],
      ['ETT oral length', yrs < 1 ? '10 to 12 cm' : r1(yrs / 2 + 12) + ' cm'],
      ['Hypotension threshold (systolic)', '< ' + r0(sbp) + ' mmHg', 'under 70 + 2 x age in years (infants: under 70)'],
    ]));
  };
  [age.input, unit.input].forEach(i => i.addEventListener('input', calc));
  return card('Weight & airway estimates', 'ruler', 'APLS formulae when the child cannot be weighed.', h('div', null, h('div', { class: 'grid2' }, age.el, unit.el), out));
}

function fluidTool() {
  const w = field('Weight (kg)', { placeholder: 'e.g. 14' });
  const dh = field('Dehydration (%)', { placeholder: '0, 5 or 10', value: 0 });
  const out = h('div', { 'aria-live': 'polite' });
  const calc = () => {
    const kg = num(w.input); if (isNaN(kg) || kg === 0) return clear(out);
    const dehyd = num(dh.input) || 0;
    // Holliday-Segar: 100/50/20 ml/kg/day
    let day = kg <= 10 ? kg * 100 : kg <= 20 ? 1000 + (kg - 10) * 50 : 1500 + (kg - 20) * 20;
    day = Math.min(day, 2400);
    const hourly = kg <= 10 ? kg * 4 : kg <= 20 ? 40 + (kg - 10) * 2 : 60 + (kg - 20);
    const deficit = kg * dehyd * 10;
    clear(out).append(rows([
      ['Maintenance', r0(day) + ' ml/24 h', 'Holliday-Segar (capped 2400)'],
      ['Hourly rate', r0(Math.min(hourly, 100)) + ' ml/h', '4-2-1 rule'],
      ['Bolus (shock)', r0(kg * 10) + ' ml', '10 ml/kg 0.9% saline, reassess (20 ml/kg in some protocols)'],
      dehyd ? ['Fluid deficit', r0(deficit) + ' ml', dehyd + '% x weight x 10'] : ['Fluid deficit', '-', 'enter % dehydration'],
    ]));
  };
  [w.input, dh.input].forEach(i => i.addEventListener('input', calc));
  return card('Fluids', 'drop', 'Maintenance, bolus and deficit from weight.', h('div', null, h('div', { class: 'grid2' }, w.el, dh.el), out, h('p', { class: 'hint' }, 'Use isotonic fluid with glucose for maintenance in hospitalised children (NICE/RCPCH). Neonates differ.')));
}

function drugTool() {
  const w = field('Weight (kg)', { placeholder: 'e.g. 12' });
  const out = h('div', { 'aria-live': 'polite' });
  const calc = () => {
    const kg = num(w.input); if (isNaN(kg) || kg === 0) return clear(out);
    const rng = (a, b, u = 'mg') => `${r0(a * kg)}${a === b ? '' : ' to ' + r0(b * kg)} ${u}`;
    clear(out).append(rows([
      ['Paracetamol', rng(15, 15) + ' per dose', '15 mg/kg every 4-6 h, max 4 doses/day (60 mg/kg/day), max 1 g/dose'],
      ['Ibuprofen', rng(5, 10) + ' per dose', '5-10 mg/kg every 6-8 h, max 30 mg/kg/day (age > 3 months)'],
      ['Amoxicillin (mild-moderate)', rng(25, 30) + ' per dose', '25-30 mg/kg 8-hourly; high dose pneumonia 40-90 mg/kg/day divided'],
      ['Salbutamol (acute asthma)', '2.5 mg neb (under 5 y) or 5 mg neb (5 y and over)', 'age-based, not weight-based; or 10 puffs of 100 mcg via spacer; repeat as needed'],
      ['Oral prednisolone', rng(1, 2) + ' daily', '1-2 mg/kg, max 40 mg'],
      ['Adrenaline IM (anaphylaxis)', r1(kg * 0.01) + ' mg (' + r1(kg * 0.01) + ' ml of 1:1000)', '10 mcg/kg; usual: <6 y 150 mcg, 6-12 y 300 mcg, >12 y 500 mcg'],
      ['Glucose 10% for hypoglycaemia', r0(kg * 2) + ' ml', '2 ml/kg IV bolus'],
      ['Diazepam rectal', rng(0.5, 0.5) + ' (rectal)', '0.5 mg/kg; or midazolam buccal by age'],
    ]));
  };
  w.input.addEventListener('input', calc);
  return card('Common doses by weight', 'pill', 'Indicative doses from standard references.', h('div', null, w.el, out, h('p', { class: 'hint' }, 'Always verify against the current BNFc and local guideline. Never prescribe from this page alone.')));
}

function arrestTool() {
  const w = field('Weight (kg)', { placeholder: 'e.g. 20' });
  const out = h('div', { 'aria-live': 'polite' });
  const calc = () => {
    const kg = num(w.input); if (isNaN(kg) || kg === 0) return clear(out);
    clear(out).append(rows([
      ['Defibrillation', r0(kg * 4) + ' J', '4 J/kg (max adult dose), shockable rhythms'],
      ['Adrenaline IV/IO', r1(kg * 0.01) + ' mg (' + r1(kg * 0.1) + ' ml of 1:10,000)', '10 mcg/kg every 3-5 min'],
      ['Amiodarone', r0(kg * 5) + ' mg', '5 mg/kg after 3rd shock, repeat after 5th'],
      ['Fluid bolus', r0(kg * 10) + ' ml', '10 ml/kg crystalloid in arrest/shock'],
      ['Glucose 10%', r0(kg * 2) + ' ml', '2 ml/kg if hypoglycaemic'],
      ['Atropine (bradycardia)', r0(Math.max(kg * 20, 100)) + ' mcg', '20 mcg/kg, min 100 mcg'],
    ]));
  };
  w.input.addEventListener('input', calc);
  return card('Resuscitation drugs', 'siren', 'APLS-style paediatric arrest doses.', h('div', null, w.el, out, h('p', { class: 'hint' }, 'Check against your current resuscitation council algorithm. 15:2 CPR, 5 rescue breaths first.')));
}

function dehydrationTool() {
  const items = [
    ['Appearance', 'Well, alert', 'Restless, irritable', 'Lethargic or unconscious'],
    ['Eyes', 'Normal', 'Sunken', 'Very sunken and dry'],
    ['Thirst', 'Drinks normally', 'Thirsty, drinks eagerly', 'Drinks poorly or unable'],
    ['Skin pinch', 'Goes back quickly', 'Goes back slowly', 'Goes back very slowly (> 2 s)'],
  ];
  const sel = items.map(() => 0);
  const out = h('div', { class: 'planout', 'aria-live': 'polite' });
  const grid = h('div', { class: 'dehyd' }, items.map((it, i) => h('fieldset', null, h('legend', null, it[0]),
    [1, 2, 3].map(n => h('label', { class: 'radio' }, h('input', { type: 'radio', name: 'dh' + i, checked: n === 1, onchange: () => { sel[i] = n - 1; render(); } }), h('span', null, it[n]))))));
  function render() {
    const sev = sel.filter(x => x === 2).length >= 2 ? 2 : sel.filter(x => x >= 1).length >= 2 ? 1 : 0;
    const plans = [
      ['No dehydration (Plan A)', 'Give extra fluids, continue feeding and breastfeeding, zinc 10-20 mg daily for 10-14 days, review if worse.'],
      ['Some dehydration (Plan B)', 'ORS 75 ml/kg over 4 hours, reassess. Continue breastfeeding. If vomiting, small frequent sips, consider ondansetron.'],
      ['Severe dehydration (Plan C)', 'IV Ringer lactate or 0.9% saline, 100 ml/kg: infants under 12 months 30 ml/kg in 1 h then 70 ml/kg over 5 h; older children 30 ml/kg in 30 min then 70 ml/kg over 2.5 h. If in shock give 20 ml/kg boluses and reassess. Urgent senior review.'],
    ];
    clear(out).append(h('div', { class: 'plan p' + sev }, h('strong', null, plans[sev][0]), h('p', null, plans[sev][1])));
  }
  render();
  return card('Dehydration assessment (WHO)', 'thermometer-hot', 'Pick the closest finding in each row.', h('div', null, grid, out));
}

function gcsTool() {
  const eye = [['4', 'Spontaneous'], ['3', 'To voice'], ['2', 'To pain'], ['1', 'None']];
  const verb = [['5', 'Orientated / coos, babbles (infant)'], ['4', 'Confused / irritable cry'], ['3', 'Inappropriate words / cries to pain'], ['2', 'Incomprehensible sounds / moans to pain'], ['1', 'None']];
  const motor = [['6', 'Obeys / spontaneous movement'], ['5', 'Localises pain / withdraws to touch'], ['4', 'Withdraws from pain'], ['3', 'Flexion (decorticate)'], ['2', 'Extension (decerebrate)'], ['1', 'None']];
  const mk = (label, opts) => field(label, { options: opts.map(([v, t]) => [v, `${v}  ${t}`]) });
  const e = mk('Eye opening', eye), v = mk('Verbal (paediatric)', verb), m = mk('Motor', motor);
  const out = h('div', { 'aria-live': 'polite' });
  const calc = () => {
    const t = +e.input.value + +v.input.value + +m.input.value;
    clear(out).append(rows([['GCS', t + ' / 15', `E${e.input.value} V${v.input.value} M${m.input.value}`], ['Severity', t <= 8 ? 'Severe (protect airway)' : t <= 12 ? 'Moderate' : 'Mild', t <= 8 ? 'GCS 8 or less: consider intubation, call senior/anaesthetist' : '']]));
  };
  [e, v, m].forEach(f => f.input.addEventListener('change', calc));
  [e, v, m].forEach(f => f.input.selectedIndex = 0);
  calc();
  return card('Glasgow Coma Scale (paediatric)', 'brain', 'Use the modified verbal scale for pre-verbal children.', h('div', null, h('div', { class: 'grid3' }, e.el, v.el, m.el), out));
}

function apgarTool() {
  const rowsDef = [
    ['Appearance (colour)', ['Blue or pale', 'Body pink, extremities blue', 'Completely pink']],
    ['Pulse (heart rate)', ['Absent', '< 100/min', '>= 100/min']],
    ['Grimace (reflex)', ['No response', 'Grimace / weak cry', 'Cry / cough / sneeze']],
    ['Activity (tone)', ['Floppy', 'Some flexion', 'Active movement']],
    ['Respiration', ['Absent', 'Slow, irregular', 'Good, crying']],
  ];
  const sel = rowsDef.map(() => 0);
  const out = h('div', { 'aria-live': 'polite' });
  const grid = h('div', { class: 'dehyd' }, rowsDef.map((r, i) => h('fieldset', null, h('legend', null, r[0]),
    r[1].map((t, n) => h('label', { class: 'radio' }, h('input', { type: 'radio', name: 'ap' + i, checked: n === 0, onchange: () => { sel[i] = n; render(); } }), h('span', null, `${n}  ${t}`))))));
  function render() {
    const s = sel.reduce((a, b) => a + b, 0);
    clear(out).append(rows([['Apgar', s + ' / 10', s >= 7 ? 'Reassuring' : s >= 4 ? 'Moderately depressed, stimulate and support' : 'Severely depressed, resuscitate'], ['Remember', 'Score at 1 and 5 min', 'Resuscitation starts before the score if the baby is not breathing']]));
  }
  render();
  return card('Apgar score', 'baby', null, h('div', null, grid, out));
}

function ageTool() {
  const dob = field('Date of birth', { type: 'date' });
  const ga = field('Gestation at birth (weeks)', { placeholder: 'e.g. 30', value: 40 });
  const out = h('div', { 'aria-live': 'polite' });
  const calc = () => {
    if (!dob.input.value) return clear(out);
    const d = new Date(dob.input.value), now = new Date();
    const g = num(ga.input) || 40;
    const days = Math.floor((now - d) / 864e5);
    const corr = days - Math.max(0, (40 - g)) * 7;
    const fmt = n => n < 0 ? 'not yet term' : n < 60 ? `${n} days` : n < 730 ? `${r1(n / 30.44)} months` : `${r1(n / 365.25)} years`;
    clear(out).append(rows([['Chronological age', fmt(days)], ['Corrected age', g >= 37 ? 'same (term)' : fmt(corr), g < 37 ? 'Correct until 2 years for development' : '']]));
  };
  [dob.input, ga.input].forEach(i => i.addEventListener('input', calc));
  return card('Corrected age', 'baby-carriage', 'For preterm infants (born before 37 weeks).', h('div', null, h('div', { class: 'grid2' }, dob.el, ga.el), out));
}

function bmiTool() {
  const w = field('Weight (kg)', { placeholder: '30' }), ht = field('Height (cm)', { placeholder: '130' });
  const out = h('div', { 'aria-live': 'polite' });
  const calc = () => {
    const kg = num(w.input), cm = num(ht.input); if (isNaN(kg) || isNaN(cm) || !cm) return clear(out);
    const bmi = kg / ((cm / 100) ** 2), bsa = Math.sqrt(kg * cm / 3600);
    clear(out).append(rows([['BMI', r1(bmi) + ' kg/m2', 'Plot on a BMI-for-age centile chart; do not use adult cut-offs'], ['BSA (Mosteller)', bsa.toFixed(2) + ' m2', 'Used for chemotherapy and some infusions']]));
  };
  [w.input, ht.input].forEach(i => i.addEventListener('input', calc));
  return card('BMI & body surface area', 'gauge', null, h('div', null, h('div', { class: 'grid2' }, w.el, ht.el), out));
}

function bilirubinNote() {
  return card('Quick jaundice rules', 'sun', null, h('ul', { class: 'bul' },
    h('li', null, 'Jaundice in the first 24 hours is pathological until proven otherwise: check bilirubin, group, Coombs, G6PD, culture.'),
    h('li', null, 'Use gestation- and age-specific treatment threshold charts (NICE NG98) for phototherapy and exchange.'),
    h('li', null, 'Prolonged jaundice (> 14 days term, > 21 days preterm): split bilirubin to exclude biliary atresia.'),
    h('li', null, 'Pale stools + dark urine = conjugated until proven otherwise.')));
}

export const TOOLS = [
  ['weight', 'Weight & airway', weightTool], ['fluids', 'Fluids', fluidTool], ['drugs', 'Drug doses', drugTool],
  ['arrest', 'Resuscitation', arrestTool], ['dehyd', 'Dehydration', dehydrationTool], ['gcs', 'GCS', gcsTool],
  ['apgar', 'Apgar', apgarTool], ['age', 'Corrected age', ageTool], ['bmi', 'BMI / BSA', bmiTool], ['jaundice', 'Jaundice rules', bilirubinNote],
];

export function toolsView(outlet, which) {
  const wrap = h('div', { class: 'page' },
    h('header', { class: 'phead' }, h('h1', null, 'Clinical tools'), h('p', { class: 'lede' }, 'Calculators and bedside references. Educational use only: always follow current local guidelines and the BNFc.')),
    h('div', { class: 'tabs', role: 'tablist', 'aria-label': 'Tools' }, TOOLS.map(([k, n]) => h('a', { role: 'tab', 'aria-selected': String(k === which), class: 'tab' + (k === which ? ' on' : ''), href: '#/tools/' + k }, n))));
  const t = TOOLS.find(x => x[0] === which) || TOOLS[0];
  wrap.append(h('div', { class: 'toolwrap', role: 'tabpanel' }, t[2]()));
  outlet.append(wrap);
}
