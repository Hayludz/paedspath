# Content spec for data/units/<unitId>.js

Each unit file is an ES module whose default export is an object keyed by topic id
(ids come from data/curriculum.js; write EVERY topic of the unit, no skipping).

```js
export default {
  'croup': {
    summary: 'Two to three sentence plain-language overview: what it is, who gets it, why it matters.',
    objectives: ['Learning objective 1', 'LO 2', 'LO 3', 'LO 4'],            // 3-5, start with a verb
    sections: [                                                              // 4-7 sections, in this order where relevant
      { h: 'Definition & epidemiology', p: ['paragraph', 'paragraph'] },
      { h: 'Aetiology & pathophysiology', p: ['...'] },
      { h: 'Clinical features', list: ['bullet', 'bullet'] },                // use list: for bullets, p: for prose, both allowed
      { h: 'Investigations', list: ['...'] },
      { h: 'Management', p: ['...'], list: ['...'] },
      { h: 'Complications & prognosis', list: ['...'] },
    ],
    keyPoints: ['6-9 crisp high-yield one-liners an examiner loves'],
    redFlags: ['3-6 danger signs / when to escalate or refer urgently'],
    mnemonics: [{ name: 'Short name', text: 'The mnemonic and what it stands for' }],   // 1-3, only genuine, well-known ones
    table: { title: 'Comparison or classification', headers: ['A', 'B', 'C'], rows: [['..','..','..']] },  // optional but include whenever a comparison helps
    drugs: [{ name: 'Dexamethasone', dose: '0.15 mg/kg PO single dose', note: 'comment' }],               // optional, only standard textbook/guideline doses (BNFc / WHO / APLS style)
    pearls: ['2-4 exam/ward pearls - things that distinguish a good candidate'],
    quiz: [                                                                  // exactly 5 single-best-answer MCQs, clinical-vignette style, answers spread across A-D
      { q: 'A 2-year-old presents with ...', options: ['A text','B text','C text','D text'], answer: 2, why: 'Explanation incl. why the distractors are wrong.' }
    ],
    cards: [{ q: 'Question', a: 'Answer' }],                                  // exactly 8 flashcards: recall-style, short answers
  },
};
```

Rules
- Medical accuracy is paramount. Standard UK/WHO/APLS/Nelson/Illustrated Textbook level. If unsure about a number, leave it out rather than guess.
- Depth: each topic should be rich - about 500-800 words of real teaching content across sections (not counting quiz/cards).
- Plain ASCII punctuation: use a normal hyphen (-) never em/en dashes. Use "mg/kg", "x" not unicode multiplication where possible, arrows as "->".
- Strings are plain text, no HTML, no markdown. Use single quotes in JS; escape apostrophes properly (or use double quotes / backticks for strings with apostrophes).
- Cover both high-income and resource-limited settings when relevant (WHO approach).
- The file must be valid JavaScript. Validate with: node --input-type=module -e "import('file:///ABSOLUTE/PATH/uXX.js').then(m=>console.log(Object.keys(m.default).length))"
- Write one topic at a time into the file via a few Write/Edit calls if needed; do not leave the file half-finished.
