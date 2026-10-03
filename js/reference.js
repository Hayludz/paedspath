import { h, icon } from './dom.js';

const table = (caption, headers, rows, note) => h('section', { class: 'tool' },
  h('h2', null, caption),
  h('div', { class: 'tablewrap', tabindex: 0, role: 'region', 'aria-label': caption },
    h('table', null, h('thead', null, h('tr', null, headers.map(c => h('th', { scope: 'col' }, c)))),
      h('tbody', null, rows.map(r => h('tr', null, r.map((c, i) => i === 0 ? h('th', { scope: 'row' }, c) : h('td', null, c))))))),
  note ? h('p', { class: 'hint' }, note) : null);

export function referenceView(outlet, which = 'vitals') {
  const sets = {
    vitals: () => table('Normal vital signs by age (APLS)', ['Age', 'Heart rate (/min)', 'Resp. rate (/min)', 'Systolic BP (mmHg)'], [
      ['Under 1 year', '110 - 160', '30 - 40', '70 - 90'],
      ['1 - 2 years', '100 - 150', '25 - 35', '80 - 95'],
      ['2 - 5 years', '95 - 140', '25 - 30', '80 - 100'],
      ['5 - 12 years', '80 - 120', '20 - 25', '90 - 110'],
      ['Over 12 years', '60 - 100', '15 - 20', '100 - 120'],
    ], 'Sleeping rates are lower. Hypotension is a late sign of shock in children: look first at heart rate, capillary refill and mental state.'),
    milestones: () => table('Developmental milestones', ['Age', 'Gross motor', 'Fine motor & vision', 'Speech, language & hearing', 'Social & behaviour'], [
      ['6 weeks', 'Lifts chin briefly when prone', 'Fixes and follows a face', 'Startles to loud noise, quietens to voice', 'Social smile'],
      ['3 months', 'Holds head steady, no head lag on pull-to-sit', 'Follows past the midline, hands open, regards hands', 'Coos, turns to voice', 'Laughs, enjoys play'],
      ['6 months', 'Sits with support, rolls, bears weight on legs', 'Reaches and grasps, transfers hand to hand, mouths objects', 'Babbles (monosyllables), localises sound', 'Stranger awareness begins, feeds self biscuit'],
      ['9 months', 'Sits unsupported, crawls, pulls to stand', 'Inferior pincer, looks for dropped toy', 'Bi-syllabic babble (mama, dada non-specific)', 'Separation anxiety, plays peek-a-boo'],
      ['12 months', 'Cruises, walks with one hand held', 'Neat pincer grip, puts objects in container', '1 to 3 words with meaning, understands simple commands', 'Waves bye-bye, drinks from cup, points to want'],
      ['18 months', 'Walks alone, climbs stairs holding on', 'Tower of 3 to 4 cubes, scribbles, uses spoon', '6 to 10 words, points to body parts', 'Helps dress, plays alongside others'],
      ['2 years', 'Runs, kicks a ball, walks up stairs', 'Tower of 6 cubes, draws a line, turns book pages', '2-word phrases, 50+ words, uses "I"', 'Parallel play, dry by day often beginning'],
      ['3 years', 'Pedals tricycle, stands on one leg briefly', 'Tower of 9 cubes, copies circle, bridge of 3 cubes', '3-word sentences, asks questions, knows name and age', 'Takes turns, dresses with help, dry by day'],
      ['4 years', 'Hops on one foot, climbs well', 'Copies a cross, draws a person (3 parts), buttons', 'Fluent speech, tells stories, counts to 10', 'Cooperative play, imaginary friends'],
      ['5 years', 'Skips, balances on each foot', 'Copies a triangle, draws a person with 6+ parts', 'Clear speech, knows colours, counts to 20', 'Dresses and undresses alone, understands rules'],
    ], 'Red flags: no social smile by 8 weeks, not sitting by 9 months, not walking by 18 months, no single words by 18 months, no 2-word phrases by 2 years, any loss of skills at any age.'),
    vaccines: () => table('WHO Expanded Programme on Immunization (typical schedule)', ['Age', 'Vaccines', 'Protects against'], [
      ['Birth', 'BCG, hepatitis B (birth dose), OPV 0', 'TB, hepatitis B, polio'],
      ['6 weeks', 'DTwP-HepB-Hib (penta) 1, OPV 1, PCV 1, rotavirus 1', 'Diphtheria, tetanus, pertussis, hepatitis B, Hib, polio, pneumococcus, rotavirus'],
      ['10 weeks', 'Penta 2, OPV 2, PCV 2, rotavirus 2', 'As above'],
      ['14 weeks', 'Penta 3, OPV 3 or IPV, PCV 3, (rotavirus 3 where used)', 'As above'],
      ['9 months', 'Measles (or MR), yellow fever in endemic areas', 'Measles, rubella, yellow fever'],
      ['15 to 18 months', 'Measles / MMR second dose, DTP booster', 'Measles, mumps, rubella; boosting'],
      ['9 to 14 years', 'HPV (1 to 2 doses for girls, increasingly boys)', 'Cervical cancer and HPV disease'],
    ], 'Schedules vary by country. Always check your national programme (for example the UK Green Book). Live vaccines are contraindicated in severe immunodeficiency; BCG is not given to symptomatic HIV-infected infants.'),
    growth: () => table('Growth rules of thumb', ['Measure', 'Rule'], [
      ['Birth weight', '3.5 kg average; loses up to 10% in the first week; regained by day 10 to 14'],
      ['Weight gain', '~25 to 30 g/day in first 3 months; doubles by 5 months; triples by 1 year; quadruples by 2 years'],
      ['Length', '50 cm at birth; 75 cm at 1 year; 87 cm at 2 years (about half adult height at 2)'],
      ['Head circumference', '35 cm at birth; 47 cm at 1 year; 50 cm at 2 years; rapid growth in first year'],
      ['Weight after 2 years', 'Approximately 2 x age + 8 kg (up to 5 y), then 3 x age + 7 kg'],
      ['Height after 2 years', '~6 cm per year until puberty'],
      ['Fontanelles', 'Posterior closes by 2 months; anterior by 12 to 18 months'],
    ]),
    lab: () => table('Useful paediatric reference values', ['Test', 'Typical value'], [
      ['Haemoglobin (term newborn)', '14 to 20 g/dl; physiological nadir at ~8 to 12 weeks'],
      ['Haemoglobin (child 1 to 12 y)', '11.5 to 15.5 g/dl'],
      ['Blood glucose (hypoglycaemia)', '< 2.6 mmol/l in neonates and children needs treatment (WHO < 2.5)'],
      ['Sodium', '135 to 145 mmol/l'],
      ['Potassium', '3.5 to 5.5 mmol/l (higher in neonates)'],
      ['Urine output', '> 1 ml/kg/h (children), > 2 ml/kg/h (infants)'],
      ['Capillary refill time', '< 2 seconds'],
      ['Temperature', 'Fever is 38.0 C or higher'],
      ['Glasgow Coma Scale', '15 normal; 8 or less needs airway protection'],
    ], 'Reference ranges depend on the laboratory and the age of the child. Use your lab ranges when interpreting results.'),
  };
  const tabs = [['vitals', 'Vital signs'], ['milestones', 'Milestones'], ['growth', 'Growth'], ['vaccines', 'Vaccines'], ['lab', 'Values']];
  outlet.append(h('div', { class: 'page' },
    h('header', { class: 'phead' }, h('h1', null, 'Quick reference'), h('p', { class: 'lede' }, 'The tables you keep going back to.')),
    h('div', { class: 'tabs', role: 'tablist' }, tabs.map(([k, n]) => h('a', { role: 'tab', 'aria-selected': String(k === which), class: 'tab' + (k === which ? ' on' : ''), href: '#/reference/' + k }, n))),
    h('div', { class: 'toolwrap', role: 'tabpanel' }, (sets[which] || sets.vitals)())));
}
