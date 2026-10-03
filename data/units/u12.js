export default {
  inheritance: {
    summary: 'Genetic disease follows chromosomal, single-gene (Mendelian), mitochondrial and multifactorial patterns. Understanding the modes of inheritance allows accurate pedigree interpretation, recurrence risk estimation and counselling of families, and recognition of non-classical mechanisms such as imprinting, anticipation and mosaicism.',
    objectives: [
      'Describe autosomal dominant, autosomal recessive, X-linked and mitochondrial inheritance with examples',
      'Calculate recurrence risks from a pedigree',
      'Explain non-Mendelian mechanisms: imprinting, trinucleotide repeat expansion, mosaicism and uniparental disomy',
      'Draw and interpret a three-generation pedigree',
    ],
    sections: [
      {
        h: 'Autosomal dominant inheritance',
        p: [
          'A single mutated allele is sufficient to cause disease. Affected individuals usually have an affected parent, both sexes are affected equally, and male-to-male transmission occurs, with a 50 percent risk to each child of an affected person. Features include variable expressivity (severity differs between family members), reduced penetrance (a carrier may be unaffected), and new (de novo) mutations in conditions with severe effect on reproduction such as achondroplasia (FGFR3). Germline mosaicism explains recurrence in apparently unaffected parents (osteogenesis imperfecta, Duchenne).',
        ],
        list: [
          'Examples: neurofibromatosis type 1, tuberous sclerosis, Marfan syndrome, Noonan syndrome, achondroplasia, familial hypercholesterolaemia, Huntington disease, hereditary spherocytosis, osteogenesis imperfecta, polycystic kidney disease (adult type)',
        ],
      },
      {
        h: 'Autosomal recessive inheritance',
        p: [
          'Disease requires two mutated alleles. Parents are usually unaffected carriers; each pregnancy has a 25 percent risk of an affected child, 50 percent risk of a carrier and 25 percent of an unaffected non-carrier. Both sexes are affected equally, and consanguinity increases risk because related parents share ancestral alleles. Many inborn errors of metabolism follow this pattern. The risk that an unaffected sibling of an affected child is a carrier is 2/3.',
        ],
        list: [
          'Examples: cystic fibrosis, sickle cell disease, thalassaemia, phenylketonuria, spinal muscular atrophy, galactosaemia, congenital adrenal hyperplasia, Tay-Sachs disease, most inborn errors of metabolism',
          'Carrier screening and newborn bloodspot testing detect many conditions',
        ],
      },
      {
        h: 'X-linked and mitochondrial inheritance',
        p: [
          'X-linked recessive disease affects males (hemizygous) and carrier females are usually unaffected or mildly affected; there is no male-to-male transmission. A carrier mother has a 50 percent risk of an affected son and 50 percent risk of a carrier daughter; an affected father has all daughters as carriers and no affected sons. Examples are Duchenne and Becker muscular dystrophy, haemophilia A and B, G6PD deficiency, and fragile X (a special case). X-linked dominant disease (hypophosphataemic rickets, Rett syndrome, incontinentia pigmenti) affects females, and may be lethal in males.',
          'Mitochondrial DNA is inherited exclusively from the mother, so all children of an affected woman inherit it but affected men do not transmit it. Heteroplasmy (a mixture of normal and mutant mitochondrial DNA) produces variable severity. Examples: Leigh syndrome, MELAS, Leber hereditary optic neuropathy, Kearns-Sayre syndrome.',
        ],
      },
      {
        h: 'Non-classical mechanisms',
        list: [
          'Imprinting: gene expression depends on parental origin. Deletion of paternal 15q11-q13 causes Prader-Willi syndrome; deletion of the maternal copy causes Angelman syndrome. Uniparental disomy (both copies from one parent) causes the same syndromes',
          'Trinucleotide repeat expansion: unstable repeats expand across generations causing anticipation (earlier, more severe disease). Fragile X (CGG), Huntington disease (CAG, paternal expansion), myotonic dystrophy (CTG, maternal expansion causing congenital form), Friedreich ataxia (GAA)',
          'Mosaicism: two or more cell lines from one zygote; somatic mosaicism causes patchy disease (McCune-Albright), germline mosaicism explains recurrence of dominant disease in unaffected parents',
          'Multifactorial inheritance: interaction of genes and environment (neural tube defects, congenital heart disease, cleft lip and palate, pyloric stenosis, type 1 diabetes); recurrence risk is about 2-5 percent after one affected child and higher with more affected relatives or more severe disease',
          'Chromosomal: numerical (aneuploidy, polyploidy) and structural (translocation, deletion, duplication, inversion); balanced Robertsonian translocation carriers have normal phenotype but a risk of affected offspring',
        ],
      },
      {
        h: 'Pedigrees and counselling',
        p: [
          'Standard symbols: squares are males, circles females, filled symbols are affected, a dot within a symbol is a carrier, a diamond is unspecified sex, a double line is consanguinity, and an arrow marks the proband. Record at least three generations, ages, deaths, miscarriages and ethnicity. Recurrence risk depends on the mode of inheritance, penetrance, and the possibility of de novo mutations or mosaicism.',
        ],
      },
    ],
    keyPoints: [
      'Autosomal dominant: vertical transmission, male-to-male transmission possible, 50 percent risk',
      'Autosomal recessive: horizontal pattern, 25 percent risk, consanguinity common',
      'X-linked recessive: males affected, no male-to-male transmission, carrier mother has 50 percent risk to sons',
      'Mitochondrial inheritance is maternal; all children of an affected woman inherit the mutation',
      'Imprinting explains Prader-Willi (paternal deficiency) versus Angelman (maternal deficiency)',
      'Trinucleotide repeat disorders show anticipation',
      'Germline mosaicism can cause recurrence in unaffected parents',
      'Multifactorial conditions carry a recurrence risk of about 2-5 percent for a sibling',
    ],
    redFlags: [
      'Family history of unexplained early deaths or neonatal deaths suggesting a metabolic disorder',
      'Consanguinity with multiple affected children',
      'Unexplained developmental delay with dysmorphism',
      'Possible X-linked disease in a boy with a family history of affected maternal relatives',
      'Asymptomatic parent of a child with a new dominant condition (consider mosaicism or non-penetrance)',
    ],
    mnemonics: [
      {
        name: 'Dominant versus recessive enzyme/structure',
        text: 'Dominant disorders tend to affect structural proteins and receptors; recessive disorders tend to affect enzymes',
      },
      {
        name: 'Prader-Willi versus Angelman',
        text: 'Prader-Willi = paternal gene lost (Pa = P); Angelman = maternal gene lost (Ma = A)',
      },
    ],
    table: {
      title: 'Modes of inheritance compared',
      headers: [
        'Mode',
        'Risk to offspring',
        'Typical features',
        'Examples',
      ],
      rows: [
        [
          'Autosomal dominant',
          '50% from affected parent',
          'Vertical, male-to-male, variable expression',
          'NF1, Marfan, achondroplasia',
        ],
        [
          'Autosomal recessive',
          '25% if both carriers',
          'Horizontal, consanguinity',
          'CF, sickle cell, PKU',
        ],
        [
          'X-linked recessive',
          '50% sons affected from carrier mother',
          'Males, no male-to-male',
          'Duchenne, haemophilia A',
        ],
        [
          'Mitochondrial',
          'All children of affected mother',
          'Maternal only, heteroplasmy',
          'MELAS, Leigh',
        ],
        [
          'Multifactorial',
          'About 2-5% sibling risk',
          'Genes plus environment',
          'Neural tube defects, cleft lip',
        ],
      ],
    },
    pearls: [
      'When a dominant disorder appears in a child with unaffected parents, discuss new mutation, non-penetrance and germline mosaicism',
      'Carrier probability for an unaffected sibling of a child with a recessive disease is 2/3, not 1/2',
      'A pedigree with many affected males linked through females is X-linked recessive until proven otherwise',
    ],
    quiz: [
      {
        q: 'A couple who are both carriers of cystic fibrosis have a child with CF. What is the risk that their next child will be a carrier?',
        options: [
          '50 percent',
          '25 percent',
          '75 percent',
          '100 percent',
        ],
        answer: 0,
        why: 'Each pregnancy has a 25 percent risk of CF, 50 percent carrier and 25 percent unaffected non-carrier.',
      },
      {
        q: 'A man with haemophilia A has children with a woman who is not a carrier. What proportion of his daughters will be carriers?',
        options: [
          'None',
          'All',
          '50 percent',
          'Only if the mother is a carrier',
        ],
        answer: 1,
        why: 'He passes his single X to all daughters, who are obligate carriers; his sons receive his Y and are unaffected.',
      },
      {
        q: 'Which is an example of a trinucleotide repeat disorder with maternal anticipation causing a severe congenital form?',
        options: [
          'Huntington disease',
          'Marfan syndrome',
          'Cystic fibrosis',
          'Myotonic dystrophy type 1',
        ],
        answer: 3,
        why: 'CTG expansion in DMPK passes with expansion mainly through the mother, producing congenital myotonic dystrophy. Huntington expands via the father.',
      },
      {
        q: 'A girl has Angelman syndrome. Which genetic mechanism could be responsible?',
        options: [
          'Deletion of the paternal chromosome 15q11-q13',
          'Trisomy 21',
          'Fragile X expansion',
          'Deletion of the maternal chromosome 15q11-q13',
        ],
        answer: 3,
        why: 'Angelman results from loss of maternal UBE3A expression (maternal deletion, paternal uniparental disomy, imprinting defect or UBE3A mutation).',
      },
      {
        q: 'Two healthy parents have a second child with achondroplasia. Most likely explanation?',
        options: [
          'Germline mosaicism or a new mutation in each child',
          'Autosomal recessive inheritance',
          'X-linked inheritance',
          'Mitochondrial inheritance',
        ],
        answer: 0,
        why: 'Achondroplasia is autosomal dominant with most cases de novo (FGFR3); recurrence in siblings is rare but possible through germline mosaicism.',
      },
    ],
    cards: [
      {
        q: 'Recurrence risk when both parents are carriers of an autosomal recessive condition?',
        a: '25 percent per pregnancy.',
      },
      {
        q: 'Does X-linked recessive show male-to-male transmission?',
        a: 'No.',
      },
      {
        q: 'Which parent transmits mitochondrial DNA?',
        a: 'The mother.',
      },
      {
        q: 'What is anticipation?',
        a: 'Earlier onset and greater severity in successive generations (trinucleotide repeat expansion).',
      },
      {
        q: 'Imprinting defect causing hyperphagia and hypotonia?',
        a: 'Loss of paternal 15q11-q13 (Prader-Willi).',
      },
      {
        q: 'What is variable expressivity?',
        a: 'Different severity of a disease among individuals carrying the same mutation.',
      },
      {
        q: 'What is reduced penetrance?',
        a: 'A proportion of mutation carriers do not show the phenotype.',
      },
      {
        q: 'Carrier probability of unaffected sibling of child with AR disease?',
        a: '2/3.',
      },
    ],
  },
  'down-syndrome': {
    summary: 'Down syndrome (trisomy 21) is the most common chromosomal cause of intellectual disability, affecting about 1 in 700 births. It has recognisable facial features and a predictable pattern of associated medical problems including congenital heart disease, hypotonia, hearing and visual issues, thyroid disease and leukaemia. Proactive surveillance and multidisciplinary care substantially improve outcomes.',
    objectives: [
      'Describe the cytogenetic types and recurrence risks of Down syndrome',
      'Recognise the clinical features in the newborn and older child',
      'List associated medical complications and the recommended surveillance',
      'Outline antenatal screening, diagnosis and the approach to giving the diagnosis to parents',
    ],
    sections: [
      {
        h: 'Genetics and epidemiology',
        p: [
          'About 95 percent of cases are free trisomy 21 from meiotic non-disjunction, usually maternal, and the risk rises with maternal age (about 1 in 1,500 at age 20, 1 in 350 at 35 and 1 in 100 at 40). Around 4 percent are due to Robertsonian translocation (usually 14;21 or 21;21), which may be inherited from a balanced carrier parent and carries a high recurrence risk (about 10-15 percent if the mother is a carrier, lower if the father; nearly 100 percent for a 21;21 carrier). About 1-2 percent are mosaic with milder phenotype. Recurrence risk after free trisomy is about 1 percent (or age-related risk if higher). A karyotype is essential for recurrence counselling.',
        ],
      },
      {
        h: 'Clinical features',
        list: [
          'Face and head: brachycephaly, flat occiput, flat facial profile, upslanting palpebral fissures, epicanthic folds, Brushfield spots on the iris, small ears, protruding tongue, small mouth',
          'Neck and limbs: excess nuchal skin, short neck, short broad hands with single palmar crease (simian crease), clinodactyly of the fifth finger, wide sandal gap between first and second toes, hypotonia with joint laxity',
          'Neonatal: hypotonia (floppy infant), poor Moro reflex, poor feeding, duodenal atresia, hypotonia, jaundice and polycythaemia',
          'Development: moderate intellectual disability on average (IQ 35-70), delayed motor milestones (walking at about 2 years), language delay worse than comprehension, usually pleasant, sociable; autism spectrum and ADHD more common',
        ],
      },
      {
        h: 'Associated problems and surveillance',
        list: [
          'Cardiac (about 40-50 percent): atrioventricular septal defect (commonest), VSD, ASD, patent ductus, tetralogy of Fallot; echocardiogram in the first weeks of life for all babies; early surgery prevents pulmonary vascular disease',
          'Gastrointestinal: duodenal atresia (double bubble sign), Hirschsprung disease, anal atresia, coeliac disease, gastro-oesophageal reflux, constipation',
          'Hearing and vision: conductive and sensorineural hearing loss (glue ear), cataracts, strabismus, refractive errors, keratoconus, nystagmus; regular audiology and ophthalmology',
          'Endocrine: congenital and acquired hypothyroidism (annual TFTs), obesity, type 1 diabetes',
          'Haematological: transient abnormal myelopoiesis in neonates, polycythaemia, increased risk of acute leukaemia (ALL and AML-M7, 10-20 fold)',
          'Musculoskeletal and neurological: atlantoaxial instability (symptoms of cord compression: neck pain, gait change), epilepsy including infantile spasms, early-onset Alzheimer disease in adulthood',
          'Respiratory and sleep: recurrent chest infections, obstructive sleep apnoea, pulmonary hypertension',
          'Immune: increased susceptibility to infection; routine immunisations plus annual flu and pneumococcal vaccine',
        ],
      },
      {
        h: 'Antenatal screening and diagnosis',
        p: [
          'First-trimester combined screening uses nuchal translucency, free beta-hCG and PAPP-A with maternal age. Non-invasive prenatal testing (cell-free fetal DNA) has high sensitivity (above 99 percent) and is a screening test needing confirmation. Diagnostic tests are chorionic villus sampling (10-13 weeks) and amniocentesis (after 15 weeks). Postnatal diagnosis is clinical, confirmed by karyotype (also FISH for rapid result).',
        ],
      },
      {
        h: 'Management and giving the diagnosis',
        p: [
          'Tell both parents together, soon after birth, in private with a senior doctor, using the term Down syndrome with a positive but honest approach, describing the baby as a baby first and giving written information and parent support group contacts. Management is by a multidisciplinary team (paediatrician, cardiology, audiology, speech therapy, physiotherapy, occupational therapy, education), following a Down syndrome health surveillance programme. Early intervention, mainstream or special school support and attention to transition to adult care are important. Life expectancy is about 60 years, depending mainly on cardiac disease.',
        ],
      },
    ],
    keyPoints: [
      'Trisomy 21 accounts for 95 percent; Robertsonian translocation 4 percent; mosaicism 1-2 percent',
      'Most common cardiac lesion is atrioventricular septal defect (AVSD)',
      'Duodenal atresia (double bubble) is associated; Hirschsprung disease also occurs',
      'Screen thyroid function yearly and test hearing and vision regularly',
      'Increased risk of acute leukaemia and transient abnormal myelopoiesis',
      'Atlantoaxial instability: neck pain, gait change or new weakness needs urgent assessment',
      'Karyotype is needed to determine recurrence risk (translocation versus trisomy)',
      'Early-onset Alzheimer disease occurs due to the extra APP gene on chromosome 21',
    ],
    redFlags: [
      'Cyanosis, poor feeding and sweating suggesting heart failure in early infancy',
      'Bilious vomiting (duodenal atresia, malrotation) or delayed meconium passage (Hirschsprung)',
      'New neck pain, gait disturbance or incontinence (atlantoaxial subluxation)',
      'Pallor, bruising or fever with abnormal blood count (leukaemia)',
      'Regression in skills (hypothyroidism, depression, dementia, coeliac, sleep apnoea, epilepsy)',
      'Infantile spasms in a baby with developmental plateau',
    ],
    mnemonics: [
      {
        name: 'Features of Down syndrome',
        text: 'Flat face, upslanting eyes, Brushfield spots, single palmar crease, sandal gap, floppy tone',
      },
    ],
    table: {
      title: 'Genetic types of Down syndrome',
      headers: [
        'Type',
        'Frequency',
        'Cause',
        'Recurrence risk',
      ],
      rows: [
        [
          'Free trisomy 21',
          '95%',
          'Meiotic non-disjunction (maternal age)',
          'About 1% (or age-related)',
        ],
        [
          'Robertsonian translocation',
          '4%',
          'Often 14;21, may be inherited',
          'Up to 10-15% if maternal carrier; near 100% for 21;21 carrier',
        ],
        [
          'Mosaic',
          '1-2%',
          'Post-zygotic non-disjunction',
          'Low',
        ],
      ],
    },
    pearls: [
      'Do not forget a repeat echocardiogram even if the clinical examination is normal; murmurs can be absent with significant AVSD',
      'Think of hypothyroidism and coeliac disease when growth or mood changes in a child with Down syndrome',
      'Annual thyroid, hearing, vision checks are standard',
    ],
    quiz: [
      {
        q: 'A newborn with hypotonia, upslanting palpebral fissures and a single palmar crease has bilious vomiting and a double-bubble sign on X-ray. The associated condition is:',
        options: [
          'Pyloric stenosis',
          'Hirschsprung disease',
          'Duodenal atresia',
          'Necrotising enterocolitis',
        ],
        answer: 2,
        why: 'Duodenal atresia produces bilious vomiting with a double bubble on abdominal X-ray and is strongly associated with Down syndrome.',
      },
      {
        q: 'Which cardiac lesion is most characteristic of Down syndrome?',
        options: [
          'Tetralogy of Fallot',
          'Coarctation of the aorta',
          'Atrioventricular septal defect',
          'Transposition of the great arteries',
        ],
        answer: 2,
        why: 'AVSD is the classic lesion; VSD and ASD are also common.',
      },
      {
        q: 'A mother has a child with Down syndrome. Karyotype shows 46,XY,t(14;21). Parental testing shows the mother is a balanced translocation carrier. Recurrence risk is approximately:',
        options: [
          '1 percent',
          '10-15 percent',
          '50 percent',
          '100 percent',
        ],
        answer: 1,
        why: 'Maternal 14;21 carriers have approximately a 10-15 percent risk of an affected child. A 21;21 carrier has near 100 percent.',
      },
      {
        q: 'A 4-year-old with Down syndrome develops neck pain, unsteady gait and new urinary incontinence. Next step?',
        options: [
          'Urgent assessment for atlantoaxial instability with neck imaging and neurosurgical advice',
          'Reassure',
          'Increase physiotherapy',
          'Check thyroid function only',
        ],
        answer: 0,
        why: 'Cord compression from atlantoaxial subluxation needs urgent evaluation; immobilise the neck and avoid manipulation.',
      },
      {
        q: 'Which screening investigation is recommended annually in children with Down syndrome?',
        options: [
          'Chest X-ray',
          'Bone scan',
          'Thyroid function',
          'Lumbar puncture',
        ],
        answer: 2,
        why: 'Hypothyroidism is common; annual TFTs are recommended along with regular hearing, vision and coeliac screening.',
      },
    ],
    cards: [
      {
        q: 'Commonest cause of Down syndrome?',
        a: 'Meiotic non-disjunction giving free trisomy 21 (95%).',
      },
      {
        q: 'Characteristic heart defect?',
        a: 'Atrioventricular septal defect.',
      },
      {
        q: 'What are Brushfield spots?',
        a: 'White spots on the iris in Down syndrome.',
      },
      {
        q: 'GI abnormality with double bubble?',
        a: 'Duodenal atresia.',
      },
      {
        q: 'Haematological malignancy risk?',
        a: 'Acute leukaemia (ALL and AML, especially megakaryoblastic).',
      },
      {
        q: 'Which cervical spine problem should you watch for?',
        a: 'Atlantoaxial instability.',
      },
      {
        q: 'Which gene on chromosome 21 relates to early Alzheimer disease?',
        a: 'APP (amyloid precursor protein).',
      },
      {
        q: 'Confirmatory diagnostic prenatal tests?',
        a: 'Chorionic villus sampling or amniocentesis.',
      },
    ],
  },
  'turner-klinefelter': {
    summary: 'Turner syndrome (45,X) and Klinefelter syndrome (47,XXY) are the two most common sex chromosome disorders. Turner syndrome causes short stature and gonadal dysgenesis in girls with cardiac and renal anomalies, while Klinefelter syndrome causes hypogonadism, tall stature and learning difficulty in boys. Both need lifelong multidisciplinary follow-up and hormone replacement.',
    objectives: [
      'Describe the genetics and clinical features of Turner syndrome',
      'List associated conditions and surveillance in Turner syndrome',
      'Describe the genetics, clinical features and management of Klinefelter syndrome',
      'Outline the use of growth hormone and sex steroid replacement',
    ],
    sections: [
      {
        h: 'Turner syndrome: genetics',
        p: [
          'Turner syndrome occurs in about 1 in 2,000-2,500 female births and results from complete or partial absence of one X chromosome, most commonly 45,X (about 50 percent), with mosaicism (45,X/46,XX) or structural abnormalities (isochromosome Xq, ring X) in others. The loss of the SHOX gene accounts for short stature. Most 45,X conceptions miscarry. It is not related to maternal age and recurrence risk is low.',
        ],
      },
      {
        h: 'Turner syndrome: clinical features',
        p: [
          'Neonatal features include lymphoedema of the hands and feet, loose neck skin and webbed neck, low posterior hairline, wide-spaced nipples and coarctation of the aorta. Later features are short stature (average adult height about 143-147 cm without treatment), cubitus valgus, short fourth metacarpals, multiple pigmented naevi, nail dysplasia, high-arched palate, broad chest, and primary ovarian failure with streak gonads causing absent or incomplete puberty and primary or early secondary amenorrhoea. Intelligence is typically normal but visuospatial, mathematics and social cognition difficulties are common.',
        ],
      },
      {
        h: 'Turner syndrome: associations and management',
        list: [
          'Cardiac (about 30-50 percent): bicuspid aortic valve, coarctation of the aorta, aortic root dilatation with risk of dissection; echocardiogram and cardiac MRI and regular follow-up',
          'Renal: horseshoe kidney, duplex systems; renal ultrasound at diagnosis',
          'Endocrine and autoimmune: hypothyroidism (Hashimoto), coeliac disease, type 2 diabetes, hypertension, obesity, osteoporosis',
          'ENT: recurrent otitis media and sensorineural hearing loss; ophthalmology for strabismus',
          'Growth: recombinant growth hormone (higher doses than in GH deficiency) from around age 4-6 years improves final height by about 5-8 cm; oxandrolone sometimes added',
          'Puberty: low-dose oestrogen from 11-12 years, increased gradually, then cyclical oestrogen with progestogen; supports uterine growth and bone health; fertility is usually absent, though assisted reproduction (donor oocytes) may be possible with cardiac risk assessment',
          'Diagnosis: karyotype (at least 30 cells); look for Y material (risk of gonadoblastoma, prophylactic gonadectomy); also in any girl with unexplained short stature or delayed puberty',
        ],
      },
      {
        h: 'Klinefelter syndrome',
        p: [
          'Klinefelter syndrome (47,XXY) affects about 1 in 600-1,000 males and arises from non-disjunction with advanced maternal or paternal age slightly increasing risk. It is often diagnosed late, in adolescence or adulthood, or during infertility work-up. Features include tall stature with long legs (disproportionate), small firm testes (the hallmark), gynaecomastia, sparse body hair, reduced muscle bulk, delayed or incomplete puberty, azoospermia and infertility, learning difficulties and language delay, behavioural and social difficulties, and normal or low-normal IQ (average verbal IQ reduced by about 10-15 points).',
        ],
      },
      {
        h: 'Klinefelter syndrome: investigations and management',
        p: [
          'Hormones show hypergonadotropic hypogonadism: raised FSH and LH with low or low-normal testosterone. Diagnosis is by karyotype. Management is testosterone replacement from puberty (about age 11-12 years) to promote secondary sexual characteristics, bone density and wellbeing, speech and educational support, and fertility options such as testicular sperm extraction with ICSI. Associated risks include osteoporosis, metabolic syndrome, type 2 diabetes, thromboembolism, autoimmune disease, breast cancer (increased 20-fold relative to men) and extragonadal germ cell tumours.',
        ],
      },
    ],
    keyPoints: [
      'Turner syndrome is 45,X (or mosaic): short stature, webbed neck, widely spaced nipples, primary ovarian failure',
      'Neonatal lymphoedema of the hands and feet is a classic Turner sign',
      'Coarctation of the aorta and bicuspid aortic valve are the main cardiac lesions; check blood pressure in all four limbs',
      'Treat Turner syndrome with growth hormone and later oestrogen replacement',
      'Look for Y chromosome material in Turner mosaics (gonadoblastoma risk)',
      'Klinefelter syndrome is 47,XXY: tall, small firm testes, hypergonadotropic hypogonadism, infertility',
      'Klinefelter syndrome is treated with testosterone from puberty',
      'Both syndromes are diagnosed by karyotype',
    ],
    redFlags: [
      'Absent femoral pulses or hypertension in a girl with Turner features (coarctation)',
      'Chest or back pain with aortic root dilatation (dissection risk)',
      'Primary amenorrhoea with short stature or no breast development by 13 years',
      'Girl with Turner syndrome and virilisation (Y chromosome material)',
      'Boy with delayed puberty, tall stature and learning difficulty',
      'New breast lump in a male with Klinefelter syndrome',
    ],
    mnemonics: [
      {
        name: 'Turner features',
        text: 'Short, shield chest, webbed neck, widely spaced nipples, cubitus valgus, coarctation, streak ovaries',
      },
    ],
    table: {
      title: 'Turner versus Klinefelter syndrome',
      headers: [
        'Feature',
        'Turner (45,X)',
        'Klinefelter (47,XXY)',
      ],
      rows: [
        [
          'Sex',
          'Female',
          'Male',
        ],
        [
          'Stature',
          'Short',
          'Tall',
        ],
        [
          'Gonads',
          'Streak ovaries, ovarian failure',
          'Small firm testes, azoospermia',
        ],
        [
          'Gonadotropins',
          'High FSH and LH',
          'High FSH and LH, low testosterone',
        ],
        [
          'Intelligence',
          'Normal, visuospatial deficits',
          'Normal or low-normal, language problems',
        ],
        [
          'Treatment',
          'GH then oestrogen',
          'Testosterone',
        ],
      ],
    },
    drugs: [
      {
        name: 'Growth hormone (somatropin) in Turner syndrome',
        dose: 'About 45-50 micrograms/kg/day SC (higher than in GH deficiency), specialist dosing',
        note: 'Start around 4-6 years; monitor IGF-1',
      },
      {
        name: 'Testosterone in Klinefelter syndrome',
        dose: 'Low dose IM esters or transdermal from 11-12 years, titrated to adult doses by specialist',
        note: 'Monitor haematocrit and bone age',
      },
    ],
    pearls: [
      'Consider Turner syndrome in any girl with unexplained short stature, whether or not she has dysmorphic features',
      'Girls with Turner syndrome need cardiac MRI and lifelong blood pressure monitoring',
      'Klinefelter syndrome is under-diagnosed; think of it in tall boys with learning problems and small testes',
    ],
    quiz: [
      {
        q: 'A newborn girl has puffy hands and feet, a webbed neck and a systolic murmur with weak femoral pulses. Most likely diagnosis?',
        options: [
          'Noonan syndrome with pulmonary stenosis',
          'Down syndrome with AVSD',
          'Williams syndrome',
          'Turner syndrome with coarctation of the aorta',
        ],
        answer: 3,
        why: 'Lymphoedema, webbed neck and coarctation (weak femorals) are characteristic of Turner syndrome. Noonan syndrome typically has pulmonary stenosis and can occur in either sex with a normal karyotype.',
      },
      {
        q: 'Which investigation confirms Klinefelter syndrome?',
        options: [
          'Karyotype',
          'Serum testosterone alone',
          'Testicular ultrasound',
          'Semen analysis',
        ],
        answer: 0,
        why: 'Karyotype showing 47,XXY is diagnostic. Hormone and semen tests support the diagnosis but are not confirmatory.',
      },
      {
        q: 'A 15-year-old girl has short stature, no breast development, and high FSH and LH. The next test is:',
        options: [
          'Pelvic MRI only',
          'Karyotype',
          'Growth hormone stimulation test',
          'Sweat test',
        ],
        answer: 1,
        why: 'Hypergonadotropic hypogonadism with short stature suggests Turner syndrome; karyotype confirms and guides further assessment.',
      },
      {
        q: 'Which is a recognised cause of short stature in Turner syndrome?',
        options: [
          'Excess growth hormone',
          'FGFR3 gain of function',
          'SHOX haploinsufficiency',
          'Thyroid overactivity',
        ],
        answer: 2,
        why: 'Loss of one copy of SHOX (on the X and Y pseudoautosomal region) contributes to short stature.',
      },
      {
        q: 'A 17-year-old tall boy has small firm testes, gynaecomastia and learning difficulties. Hormones: high LH and FSH, low testosterone. Management includes:',
        options: [
          'Growth hormone',
          'Oestrogen',
          'Observation only with no hormone',
          'Testosterone replacement',
        ],
        answer: 3,
        why: 'This is Klinefelter syndrome with hypergonadotropic hypogonadism; testosterone replacement improves virilisation and bone health.',
      },
    ],
    cards: [
      {
        q: 'Karyotype of classic Turner syndrome?',
        a: '45,X.',
      },
      {
        q: 'Karyotype of Klinefelter syndrome?',
        a: '47,XXY.',
      },
      {
        q: 'Typical neonatal sign of Turner syndrome?',
        a: 'Lymphoedema of hands and feet with loose neck skin.',
      },
      {
        q: 'Commonest cardiac abnormalities in Turner syndrome?',
        a: 'Bicuspid aortic valve and coarctation of the aorta.',
      },
      {
        q: 'Renal abnormality in Turner syndrome?',
        a: 'Horseshoe kidney.',
      },
      {
        q: 'Treatment to improve height in Turner syndrome?',
        a: 'Growth hormone, then oestrogen for puberty.',
      },
      {
        q: 'Hallmark examination finding in Klinefelter syndrome?',
        a: 'Small, firm testes.',
      },
      {
        q: 'Why is Y material important in Turner mosaics?',
        a: 'Risk of gonadoblastoma; prophylactic gonadectomy.',
      },
    ],
  },
  'fragile-x-pws': {
    summary: 'Fragile X syndrome, Prader-Willi syndrome and Angelman syndrome are classic genetic disorders causing intellectual disability with recognisable behavioural and physical phenotypes. They illustrate trinucleotide repeat expansion and genomic imprinting. Cri du chat, Wolf-Hirschhorn, Rett and 22q11 or Smith-Magenis syndromes are other important examples.',
    objectives: [
      'Describe the genetics and clinical features of fragile X syndrome',
      'Explain imprinting in Prader-Willi and Angelman syndromes and compare the phenotypes',
      'Outline the management of each condition',
      'Recognise other classic syndromes: cri du chat, Rett, Wolf-Hirschhorn, Williams',
    ],
    sections: [
      {
        h: 'Fragile X syndrome',
        p: [
          'Fragile X is the commonest inherited cause of intellectual disability, affecting about 1 in 4,000 males and 1 in 6,000-8,000 females. It results from expansion of a CGG trinucleotide repeat in the 5 prime untranslated region of FMR1 on Xq27.3, leading to methylation and silencing and loss of FMRP protein. Normal alleles have fewer than 45 repeats, premutations 55-200, and full mutations above 200. Premutation carriers do not have intellectual disability but are at risk of fragile X-associated tremor-ataxia syndrome (FXTAS) and primary ovarian insufficiency (FXPOI). Expansion to a full mutation occurs only through maternal transmission; the larger the maternal premutation, the greater the risk.',
          'Boys have moderate intellectual disability, long narrow face, prominent forehead and chin, large protruding ears, macro-orchidism after puberty, joint hypermobility, flat feet, soft skin, mitral valve prolapse and hyperextensible fingers. Behaviour includes hyperactivity, poor attention, anxiety, gaze avoidance, hand flapping and autism spectrum features. Females are more mildly affected. Diagnosis is by DNA analysis (PCR and Southern blot or methylation-specific tests) rather than the old cytogenetic fragile site. Treatment is supportive: education, speech therapy, behavioural therapy and management of ADHD and anxiety.',
        ],
      },
      {
        h: 'Prader-Willi syndrome',
        p: [
          'Prader-Willi syndrome (PWS) occurs in about 1 in 15,000-25,000 births and results from lack of paternally expressed genes at 15q11-q13: paternal deletion (about 70 percent), maternal uniparental disomy (about 25 percent) or an imprinting centre defect (about 1-3 percent). Most cases are sporadic. Diagnosis is by methylation analysis, followed by testing to define the mechanism.',
        ],
        list: [
          'Neonatal and infant: severe hypotonia, poor suck and feeding difficulty requiring tube feeding, failure to thrive, weak cry, hypogonadism (cryptorchidism, small genitalia)',
          'Childhood: hyperphagia and food seeking from 2-4 years with progressive obesity if uncontrolled, short stature, small hands and feet, almond-shaped eyes, narrow bifrontal diameter, fair skin and hair, learning disability (mild to moderate), temper tantrums, skin picking, obsessive compulsive behaviours',
          'Endocrine: growth hormone deficiency, hypogonadism and delayed or incomplete puberty, central adrenal insufficiency, hypothyroidism, type 2 diabetes with obesity',
          'Other: sleep apnoea, scoliosis, osteoporosis, temperature instability',
          'Management: multidisciplinary; strict dietary supervision and environmental food control (locked kitchen), exercise, recombinant growth hormone (improves body composition and growth), sex steroid replacement, behaviour and psychiatric support, monitoring of sleep and endocrine function',
        ],
      },
      {
        h: 'Angelman syndrome',
        p: [
          'Angelman syndrome (about 1 in 12,000-20,000) results from loss of maternally expressed UBE3A on 15q11-q13: maternal deletion (about 70 percent), paternal uniparental disomy (3-7 percent), imprinting defect (3 percent) or UBE3A mutation (10 percent). Infants appear normal initially, then show developmental delay by 6-12 months, severe intellectual disability with absent or minimal speech, ataxia with a jerky, stiff-legged gait, a happy demeanour with frequent laughter and smiling, hand flapping, microcephaly, seizures (in most) with a characteristic EEG, sleep disturbance, wide mouth with prominent chin and widely spaced teeth. Treatment is symptomatic: antiepileptic drugs (avoid carbamazepine and vigabatrin), behavioural and sleep management, therapy services.',
        ],
      },
      {
        h: 'Other syndromes',
        list: [
          'Cri du chat (5p deletion): high-pitched cat-like cry in infancy, microcephaly, round face, hypertelorism, intellectual disability, hypotonia; cry usually disappears by 2 years',
          'Wolf-Hirschhorn syndrome (4p deletion): Greek warrior helmet facial appearance, growth restriction, seizures, cardiac and midline defects',
          'Rett syndrome (MECP2, X-linked dominant): girls with normal early development then regression at 6-18 months, loss of purposeful hand use, hand wringing, acquired microcephaly, seizures, breathing irregularities, autism features',
          'Smith-Magenis syndrome (17p11.2 deletion): sleep disturbance with inverted melatonin rhythm, self-injurious behaviour, intellectual disability',
          'Beckwith-Wiedemann syndrome (11p15 imprinting): macroglossia, omphalocele, hemihypertrophy, neonatal hypoglycaemia, risk of Wilms tumour and hepatoblastoma needing ultrasound surveillance',
        ],
      },
    ],
    keyPoints: [
      'Fragile X: FMR1 CGG repeat expansion (over 200), commonest inherited cause of intellectual disability, macro-orchidism',
      'Full mutation arises only through maternal transmission; anticipation occurs in female transmission',
      'Prader-Willi: loss of paternal 15q11-q13; hypotonia then hyperphagia and obesity',
      'Angelman: loss of maternal UBE3A; happy puppet affect, ataxia, seizures, absent speech',
      'Both PWS and Angelman can be due to deletion, uniparental disomy or an imprinting defect; diagnose by methylation analysis',
      'Rett syndrome: girls with regression, hand wringing and MECP2 mutation',
      'Cri du chat: 5p deletion with high-pitched cry',
      'Beckwith-Wiedemann syndrome requires tumour surveillance',
    ],
    redFlags: [
      'Floppy infant with feeding difficulty and hypogonadism (consider PWS)',
      'Hyperphagia with rapid weight gain in a child with learning difficulty',
      'Developmental regression in a girl at 6-18 months (Rett)',
      'Refractory seizures in a child with severe delay and ataxia (Angelman)',
      'Hypoglycaemia in a baby with macroglossia and omphalocele (Beckwith-Wiedemann)',
      'Respiratory or sleep problems with obesity in PWS (acute illness can be missed because of pain insensitivity and temperature instability)',
    ],
    mnemonics: [
      {
        name: 'Imprinting',
        text: 'Prader-Willi: Paternal gene missing. Angelman: Maternal gene missing (UBE3A)',
      },
      {
        name: 'Fragile X features',
        text: 'Big ears, long face, big testes, flat feet, hyperextensible joints, autistic traits',
      },
    ],
    table: {
      title: 'Prader-Willi versus Angelman syndrome',
      headers: [
        'Feature',
        'Prader-Willi',
        'Angelman',
      ],
      rows: [
        [
          'Gene lost',
          'Paternal 15q11-q13',
          'Maternal 15q11-q13 (UBE3A)',
        ],
        [
          'Infancy',
          'Marked hypotonia, poor feeding',
          'Often normal, delay from 6-12 months',
        ],
        [
          'Behaviour',
          'Hyperphagia, obsessions, tantrums',
          'Happy, laughing, hand flapping',
        ],
        [
          'Seizures',
          'Uncommon',
          'Common, severe',
        ],
        [
          'Speech',
          'Mild-moderate delay',
          'Absent or minimal',
        ],
        [
          'Growth',
          'Short, obese',
          'Microcephaly, normal weight',
        ],
      ],
    },
    pearls: [
      'Perform fragile X testing in every boy with unexplained developmental delay, autism or family history of intellectual disability',
      'A normal karyotype does not exclude Prader-Willi or Angelman; request DNA methylation analysis',
      'Do not delay evaluation of obesity in a floppy infant who later becomes hyperphagic',
    ],
    quiz: [
      {
        q: 'A 4-year-old boy has a long face, large ears, hyperactivity and autistic behaviour. His maternal uncle has learning difficulty. Which test is most appropriate?',
        options: [
          'Karyotype only',
          'FMR1 CGG repeat analysis',
          'MECP2 sequencing',
          'Methylation of 15q11',
        ],
        answer: 1,
        why: 'This is a classic fragile X presentation; FMR1 triplet repeat analysis is diagnostic.',
      },
      {
        q: 'A floppy infant feeds poorly and has undescended testes. At 3 years he is constantly seeking food. The cause is:',
        options: [
          'Maternal deletion at 15q11-q13',
          'Trisomy 21',
          'CGG expansion in FMR1',
          'Paternal deletion or maternal UPD at 15q11-q13',
        ],
        answer: 3,
        why: 'Prader-Willi results from loss of paternal 15q11-q13 expression through deletion, maternal uniparental disomy, or an imprinting defect.',
      },
      {
        q: 'A 2-year-old with severe delay, no speech, ataxic gait, frequent laughter and seizures most likely has:',
        options: [
          'Prader-Willi syndrome',
          'Rett syndrome',
          'Williams syndrome',
          'Angelman syndrome',
        ],
        answer: 3,
        why: 'Happy demeanour, ataxia, absent speech and seizures are typical for Angelman syndrome (maternal UBE3A deficiency).',
      },
      {
        q: 'Which first-line test diagnoses Prader-Willi syndrome?',
        options: [
          'DNA methylation analysis of 15q11-q13',
          'Karyotype',
          'Chromosomal breakage test',
          'Plasma amino acids',
        ],
        answer: 0,
        why: 'Methylation testing detects all causes (deletion, UPD, imprinting defect); further tests define the mechanism.',
      },
      {
        q: 'A girl developing normally until 12 months loses hand skills and speech, develops hand-wringing and head growth deceleration. Gene involved:',
        options: [
          'FMR1',
          'MECP2',
          'UBE3A',
          'FGFR3',
        ],
        answer: 1,
        why: 'Rett syndrome is caused by MECP2 mutation; most cases are de novo in girls (X-linked dominant, usually lethal in males).',
      },
    ],
    cards: [
      {
        q: 'Triplet repeat in fragile X?',
        a: 'CGG in FMR1.',
      },
      {
        q: 'Number of repeats for a full mutation?',
        a: 'Over 200.',
      },
      {
        q: 'Male feature of fragile X after puberty?',
        a: 'Macro-orchidism.',
      },
      {
        q: 'Main genetic cause of Prader-Willi syndrome?',
        a: 'Paternal 15q11-q13 deletion (70%).',
      },
      {
        q: 'Gene affected in Angelman syndrome?',
        a: 'UBE3A (maternal copy).',
      },
      {
        q: 'Syndrome with high-pitched cat-like cry?',
        a: 'Cri du chat (5p deletion).',
      },
      {
        q: 'Gene in Rett syndrome?',
        a: 'MECP2.',
      },
      {
        q: 'Tumours to screen for in Beckwith-Wiedemann?',
        a: 'Wilms tumour and hepatoblastoma.',
      },
    ],
  },
  'marfan-noonan': {
    summary: 'Marfan, Noonan, Williams and DiGeorge syndromes are important genetic syndromes that every paediatrician should recognise because of life-threatening cardiovascular and immunological consequences. Marfan syndrome is a connective tissue disorder, Noonan syndrome a RASopathy, Williams syndrome a contiguous gene deletion and DiGeorge syndrome the commonest microdeletion syndrome.',
    objectives: [
      'Describe the genetics, clinical features and diagnostic criteria of Marfan syndrome',
      'Identify the features and cardiac associations of Noonan syndrome',
      'Recognise Williams syndrome and its metabolic complications',
      'Explain the clinical spectrum, investigation and management of 22q11.2 deletion (DiGeorge) syndrome',
    ],
    sections: [
      {
        h: 'Marfan syndrome',
        p: [
          'Marfan syndrome is autosomal dominant (about 1 in 5,000) caused by FBN1 mutations on chromosome 15 affecting fibrillin-1, with about 25 percent new mutations. Abnormal fibrillin raises TGF-beta signalling. Diagnosis uses the revised Ghent nosology, combining aortic root dilatation or dissection, ectopia lentis, a systemic score and FBN1 mutation with family history.',
        ],
        list: [
          'Skeletal: tall with long limbs (arm span greater than height, reduced upper to lower segment ratio), arachnodactyly (thumb and wrist signs), pectus excavatum or carinatum, scoliosis, joint laxity, flat feet, high-arched palate, long narrow face',
          'Ocular: ectopia lentis (upward and temporal lens dislocation), myopia, retinal detachment',
          'Cardiovascular: aortic root dilatation and dissection (main cause of death), mitral valve prolapse and regurgitation, dilated pulmonary artery',
          'Other: striae, dural ectasia, spontaneous pneumothorax, hernias',
          'Management: annual echocardiography (more often if dilated), beta-blockers or angiotensin receptor blockers (losartan) to slow aortic growth, elective aortic root replacement when the root reaches about 45-50 mm (lower thresholds in children and with family history), avoiding contact sports and isometric exercise, ophthalmology review, pregnancy counselling with cardiology',
        ],
      },
      {
        h: 'Noonan syndrome',
        p: [
          'Noonan syndrome (about 1 in 1,000-2,500) is autosomal dominant, affecting both sexes with a normal karyotype, caused by mutations in the RAS-MAPK pathway (PTPN11 in about 50 percent, also SOS1, RAF1, RIT1). Features: short stature, webbed neck, low-set posteriorly rotated ears, hypertelorism, down-slanting palpebral fissures, ptosis, pectus carinatum above and excavatum below, cubitus valgus, cryptorchidism, bleeding diathesis (factor XI deficiency, platelet dysfunction) and mild to moderate learning difficulty. Cardiac disease occurs in most: pulmonary valve stenosis (commonest) and hypertrophic cardiomyopathy, and ASD. Differs from Turner syndrome by pulmonary (rather than aortic) lesions, normal ovarian function, and presence in boys. Treatment is supportive; growth hormone can help growth; screen for coagulopathy before surgery.',
        ],
      },
      {
        h: 'Williams syndrome',
        p: [
          'Williams syndrome (about 1 in 7,500-10,000) results from a 7q11.23 microdeletion including ELN (elastin), usually sporadic. Features: elfin facies with broad forehead, periorbital fullness, stellate (starburst) iris, long philtrum, full lips, wide mouth; supravalvular aortic stenosis (also pulmonary artery stenosis and hypertension), infantile hypercalcaemia, short stature, mild to moderate intellectual disability with relatively good verbal skills and strong musical interest but poor visuospatial skills, friendly cocktail-party personality, hyperacusis, anxiety, and renal anomalies. Diagnosis by FISH or microarray. Manage cardiac disease, monitor calcium, and provide developmental support.',
        ],
      },
      {
        h: 'DiGeorge (22q11.2 deletion) syndrome',
        p: [
          'The 22q11.2 deletion syndrome (1 in 4,000) is the commonest microdeletion, mostly de novo, though 10 percent are inherited autosomal dominantly. TBX1 haploinsufficiency leads to abnormal development of the third and fourth pharyngeal pouches and neural crest. The classic CATCH-22 features are:',
        ],
        list: [
          'Cardiac defects (conotruncal): tetralogy of Fallot, interrupted aortic arch, truncus arteriosus, VSD',
          'Abnormal facies: hooded eyelids, bulbous nasal tip, small ears, micrognathia',
          'Thymic hypoplasia: T cell deficiency and recurrent infections; complete DiGeorge (athymia) needs urgent immunology care, irradiated CMV-negative blood products, and thymic transplantation or stem cell transplant; live vaccines contraindicated if T cells are low',
          'Cleft palate and velopharyngeal insufficiency',
          'Hypocalcaemia from hypoparathyroidism (neonatal tetany or seizures)',
          'Additional: learning difficulties, speech delay, psychiatric illness (schizophrenia risk about 25 percent), autoimmune disease, renal anomalies',
          'Investigations: FISH or microarray for 22q11.2, calcium, PTH, lymphocyte subsets, chest X-ray (absent thymic shadow), echocardiogram',
        ],
      },
    ],
    keyPoints: [
      'Marfan: FBN1 mutation, aortic root dilatation, ectopia lentis (upward), arachnodactyly; give beta-blocker or losartan and monitor with echocardiography',
      'Noonan: normal karyotype, webbed neck, pulmonary stenosis, PTPN11 mutation, bleeding tendency',
      'Williams: 7q11.23 deletion (ELN), supravalvular aortic stenosis, hypercalcaemia, friendly personality',
      'DiGeorge: 22q11.2 deletion, CATCH-22 - cardiac, abnormal facies, thymic aplasia, cleft palate, hypocalcaemia',
      'Check calcium and lymphocyte subsets in any baby with a conotruncal heart defect',
      'Use irradiated CMV-negative blood in suspected DiGeorge syndrome until T cell function known',
      'Ectopia lentis in homocystinuria is downward; in Marfan it is upward',
      'Noonan syndrome affects boys and girls and has normal chromosomes, unlike Turner syndrome',
    ],
    redFlags: [
      'Chest or back pain in a patient with Marfan syndrome (aortic dissection)',
      'Hypocalcaemic seizures in a neonate with a heart murmur (DiGeorge)',
      'Cyanosis with cleft palate and dysmorphism (tetralogy of Fallot with 22q11 deletion)',
      'Unusual bleeding in a child with Noonan syndrome',
      'Syncope or exertional chest pain in Williams syndrome (supravalvular aortic stenosis, coronary compromise)',
      'Recurrent severe infections or candidiasis in a child with a conotruncal defect',
    ],
    mnemonics: [
      {
        name: 'CATCH-22',
        text: 'Cardiac, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcaemia - on chromosome 22',
      },
    ],
    table: {
      title: 'Features of four classic syndromes',
      headers: [
        'Syndrome',
        'Genetics',
        'Cardiac lesion',
        'Key features',
      ],
      rows: [
        [
          'Marfan',
          'FBN1 (AD)',
          'Aortic root dilatation, MVP',
          'Tall, arachnodactyly, ectopia lentis',
        ],
        [
          'Noonan',
          'PTPN11 and RAS-MAPK genes (AD)',
          'Pulmonary stenosis, HCM',
          'Webbed neck, short, bleeding, normal karyotype',
        ],
        [
          'Williams',
          '7q11.23 deletion (ELN)',
          'Supravalvular aortic stenosis',
          'Elfin face, hypercalcaemia, friendly',
        ],
        [
          'DiGeorge',
          '22q11.2 deletion',
          'Tetralogy of Fallot, interrupted arch',
          'Hypocalcaemia, immunodeficiency, cleft palate',
        ],
      ],
    },
    drugs: [
      {
        name: 'Losartan',
        dose: 'Specialist-led dosing titrated to tolerance in children with Marfan syndrome',
        note: 'Beta-blockers (e.g. atenolol or propranolol) are an alternative to slow aortic root growth',
      },
      {
        name: 'Calcium gluconate 10 percent',
        dose: '0.3 ml/kg slow IV with ECG monitoring for symptomatic hypocalcaemia',
        note: 'Follow with oral calcium and alfacalcidol in DiGeorge hypoparathyroidism',
      },
    ],
    pearls: [
      'Use the thumb sign and wrist sign for arachnodactyly; never rely on height alone for Marfan syndrome',
      'In Noonan syndrome check clotting (factor XI) before surgery',
      'Remember to check lymphocyte subsets and use irradiated blood in 22q11 deletion until immunology review',
      'In Williams syndrome avoid calcium and vitamin D supplements when hypercalcaemic and avoid sedation without cardiac assessment',
    ],
    quiz: [
      {
        q: 'A tall 14-year-old boy with arachnodactyly and pectus excavatum has upward lens dislocation. The most important complication to monitor is:',
        options: [
          'Pulmonary stenosis',
          'Hypocalcaemia',
          'Aortic root dilatation',
          'Cataracts',
        ],
        answer: 2,
        why: 'Aortic root dilatation and dissection are the main cause of death in Marfan syndrome and need echo surveillance.',
      },
      {
        q: 'A neonate with cleft palate, tetralogy of Fallot and seizures has calcium 1.5 mmol/L. Most likely diagnosis and test?',
        options: [
          'Williams syndrome - FISH 7q11.23',
          '22q11.2 deletion - FISH or microarray',
          'Noonan syndrome - karyotype',
          'Turner syndrome - karyotype',
        ],
        answer: 1,
        why: 'Conotruncal defect, cleft palate and hypocalcaemia indicate DiGeorge syndrome (22q11.2 deletion), diagnosed by FISH or microarray.',
      },
      {
        q: 'A boy with short stature, webbed neck, ptosis, hypertelorism and pulmonary stenosis. Karyotype is 46,XY. Gene most commonly mutated?',
        options: [
          'PTPN11',
          'FBN1',
          'ELN',
          'TBX1',
        ],
        answer: 0,
        why: 'This is Noonan syndrome; PTPN11 mutations account for about half.',
      },
      {
        q: 'A sociable child with elfin facies, a stellate iris, hypercalcaemia and supravalvular aortic stenosis has:',
        options: [
          'Noonan syndrome',
          'Marfan syndrome',
          'Williams syndrome',
          'Down syndrome',
        ],
        answer: 2,
        why: 'Williams syndrome results from 7q11.23 deletion including elastin (ELN).',
      },
      {
        q: 'In suspected complete DiGeorge syndrome, which precaution is essential?',
        options: [
          'Give live vaccines',
          'Give high-dose vitamin D',
          'Use irradiated, CMV-negative blood products',
          'Start growth hormone',
        ],
        answer: 2,
        why: 'Absent T cell function risks transfusion-associated graft-versus-host disease and CMV infection; live vaccines are contraindicated.',
      },
    ],
    cards: [
      {
        q: 'Gene mutated in Marfan syndrome?',
        a: 'FBN1 (fibrillin-1).',
      },
      {
        q: 'Direction of lens dislocation in Marfan syndrome?',
        a: 'Upward (superotemporal).',
      },
      {
        q: 'Commonest cardiac lesion in Noonan syndrome?',
        a: 'Pulmonary valve stenosis.',
      },
      {
        q: 'Cardiac lesion in Williams syndrome?',
        a: 'Supravalvular aortic stenosis.',
      },
      {
        q: 'What is CATCH-22?',
        a: 'Cardiac defects, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcaemia - 22q11.2 deletion.',
      },
      {
        q: 'Metabolic abnormality in infants with Williams syndrome?',
        a: 'Hypercalcaemia.',
      },
      {
        q: 'Test for 22q11.2 deletion?',
        a: 'FISH or chromosomal microarray.',
      },
      {
        q: 'Coagulation problem in Noonan syndrome?',
        a: 'Factor XI deficiency and platelet dysfunction.',
      },
    ],
  },
  'genetic-testing': {
    summary: 'Dysmorphology is the study of abnormal physical development, and genetic testing allows a specific diagnosis in a growing proportion of children with congenital anomalies, developmental delay or familial disease. Paediatricians should know how to describe dysmorphic features, choose appropriate tests and counsel families with sensitivity about uncertainty, recurrence and ethical issues.',
    objectives: [
      'Classify congenital anomalies as malformations, disruptions, deformations and dysplasias',
      'Describe a systematic approach to a dysmorphic child',
      'Compare cytogenetic and molecular tests and their indications',
      'Explain the principles of genetic counselling, prenatal diagnosis, newborn screening and ethical issues',
    ],
    sections: [
      {
        h: 'Terminology and approach to the dysmorphic child',
        p: [
          'A malformation is intrinsically abnormal development (cleft lip, congenital heart disease); a disruption is breakdown of normal tissue (amniotic bands); a deformation is abnormal mechanical force on normal tissue (positional talipes in oligohydramnios); a dysplasia is abnormal cell organisation (skeletal dysplasia). A syndrome is a recognisable pattern of anomalies with a single cause, an association is a non-random grouping without known cause (VACTERL, CHARGE), and a sequence is a cascade of events from a single initial defect (Potter sequence, Pierre Robin sequence). Major anomalies need medical or surgical care; minor anomalies (epicanthic folds, single palmar crease, preauricular pits) are common but 3 or more minor anomalies increase the chance of a major one.',
          'Approach: detailed pregnancy history (exposures to alcohol, anticonvulsants, warfarin, retinoids, infections, maternal diabetes), family history and three-generation pedigree, growth parameters including head circumference, careful measurement of facial features (interpupillary distance, ear length, philtrum), hands and feet, skin (neurocutaneous stigmata), genitalia, and developmental assessment. Photography with consent and comparison with parental features and databases helps.',
        ],
      },
      {
        h: 'Genetic testing',
        list: [
          'Karyotype (G-banded): detects aneuploidy and large structural rearrangements (above 5-10 Mb); used for Down, Turner and Klinefelter syndromes and for translocations and recurrent miscarriage',
          'Fluorescence in situ hybridisation (FISH): targeted probes for known microdeletions (22q11.2, 7q11.23), rapid aneuploidy detection',
          'Chromosomal microarray (array CGH or SNP array): detects copy number variants at 50-100 kb resolution; first-line for unexplained developmental delay, intellectual disability, autism and multiple congenital anomalies; yields a diagnosis in about 15-20 percent; cannot detect balanced rearrangements, point mutations or repeat expansions; variants of uncertain significance may be found',
          'Targeted molecular tests: PCR and Southern blot for repeat expansions (fragile X, Huntington), methylation analysis (Prader-Willi, Angelman, Beckwith-Wiedemann), single gene sequencing',
          'Next generation sequencing: gene panels, whole exome sequencing and whole genome sequencing (trio analysis improves diagnosis; yield about 25-40 percent in severe developmental disorders); the 100,000 Genomes Project and national genomic medicine services in the UK; incidental findings and consent issues',
          'Biochemical and enzymatic tests for metabolic disease; mitochondrial DNA analysis',
        ],
      },
      {
        h: 'Prenatal diagnosis and screening',
        p: [
          'Screening estimates risk (combined first-trimester test, quadruple test, NIPT, anomaly scan at 18-21 weeks), while diagnostic tests give a definitive answer: chorionic villus sampling at 11-13 weeks (about 1 percent miscarriage risk) and amniocentesis from 15 weeks (about 0.5 percent risk). Preimplantation genetic testing with IVF is available for known familial mutations. Newborn bloodspot screening (heel prick at day 5) in the UK covers sickle cell disease, cystic fibrosis, congenital hypothyroidism, phenylketonuria, MCADD and other inherited metabolic disorders, and in some places SMA and severe combined immunodeficiency.',
        ],
      },
      {
        h: 'Genetic counselling and ethics',
        p: [
          'Genetic counselling is a communication process that provides information on the diagnosis, natural history, inheritance and recurrence risk, testing options and reproductive choices in a non-directive way. Key principles are informed consent, confidentiality (including family members who may be at risk), autonomy, avoiding stigma and respecting cultural values. Predictive testing for adult-onset conditions (such as Huntington disease and BRCA mutations) is generally deferred in children until they can decide, unless the condition has onset in childhood or an intervention is available. Carrier testing of minors is also generally deferred. Cascade testing helps identify at-risk relatives. Results may be uncertain (variants of unknown significance), reveal non-paternity or incidental findings, and require careful pre-test counselling.',
        ],
      },
    ],
    keyPoints: [
      'Chromosomal microarray is first-line for unexplained intellectual disability, autism and multiple congenital anomalies',
      'Karyotype remains useful for known aneuploidy syndromes, balanced translocations and recurrent miscarriage',
      'Methylation testing is required for imprinting disorders (Prader-Willi, Angelman, Beckwith-Wiedemann)',
      'A malformation is intrinsic; a deformation is due to mechanical forces; a disruption is breakdown of normal tissue',
      'Association (VACTERL) is non-random but without a known single cause',
      'Genetic counselling is non-directive and includes recurrence risk and reproductive options',
      'Predictive testing for adult-onset disease is generally deferred in minors',
      'Trio whole-exome sequencing has the highest yield in severe developmental disorders',
    ],
    redFlags: [
      'Multiple major anomalies in a newborn',
      'Ambiguous genitalia (urgent assessment for congenital adrenal hyperplasia and salt loss)',
      'Dysmorphism with developmental regression or metabolic decompensation',
      'Suspected teratogen exposure in pregnancy (anticonvulsants, alcohol, isotretinoin)',
      'Consanguinity with multiple affected family members',
    ],
    mnemonics: [
      {
        name: 'VACTERL association',
        text: 'Vertebral anomalies, Anal atresia, Cardiac defects, Tracheo-oesophageal fistula, Renal anomalies, Limb anomalies',
      },
      {
        name: 'CHARGE',
        text: 'Coloboma, Heart defects, Atresia choanae, Retardation of growth/development, Genital anomalies, Ear anomalies (CHD7 mutation)',
      },
    ],
    table: {
      title: 'Choice of genetic test',
      headers: [
        'Test',
        'Detects',
        'Typical indication',
      ],
      rows: [
        [
          'Karyotype',
          'Aneuploidy, large rearrangements',
          'Suspected Down, Turner, Klinefelter; recurrent miscarriage',
        ],
        [
          'FISH',
          'Known microdeletions, rapid aneuploidy',
          '22q11.2 deletion, Williams syndrome',
        ],
        [
          'Chromosomal microarray',
          'Copy number variants (deletions, duplications)',
          'Unexplained developmental delay, autism, multiple anomalies',
        ],
        [
          'Methylation analysis',
          'Imprinting disorders',
          'Prader-Willi, Angelman, Beckwith-Wiedemann',
        ],
        [
          'Triplet repeat PCR/Southern',
          'Repeat expansions',
          'Fragile X, myotonic dystrophy, Huntington disease',
        ],
        [
          'Exome / genome sequencing',
          'Point mutations, small indels (and CNVs in genome)',
          'Undiagnosed severe developmental disorders',
        ],
      ],
    },
    pearls: [
      'Describe the phenotype in objective terms (HPO terms) when requesting genetic tests',
      'A normal microarray or karyotype does not exclude a monogenic disorder; consider sequencing',
      'Recurrence risk depends on the mechanism; counselling without a molecular diagnosis may be inaccurate',
      'Avoid saying that a variant of uncertain significance is the cause; reclassification occurs over time',
    ],
    quiz: [
      {
        q: 'Which test is the first-line genetic investigation for a child with unexplained developmental delay and no recognisable syndrome?',
        options: [
          'Chromosomal microarray',
          'G-banded karyotype only',
          'Whole body MRI',
          'Muscle biopsy',
        ],
        answer: 0,
        why: 'Microarray has a higher diagnostic yield than karyotype and is recommended first-line.',
      },
      {
        q: 'A baby born with oligohydramnios has bilateral talipes equinovarus and a flattened face from uterine compression. This is an example of:',
        options: [
          'Malformation',
          'Deformation',
          'Dysplasia',
          'Association',
        ],
        answer: 1,
        why: 'Deformations arise from abnormal mechanical forces on normally formed tissue; they often resolve postnatally.',
      },
      {
        q: 'Which test detects Prader-Willi syndrome regardless of mechanism?',
        options: [
          'Karyotype',
          'Microarray',
          'DNA methylation analysis',
          'Plasma amino acids',
        ],
        answer: 2,
        why: 'Methylation analysis of the 15q11-q13 region identifies deletion, UPD and imprinting defects.',
      },
      {
        q: 'A couple asks for predictive testing for Huntington disease in their healthy 8-year-old. Most appropriate advice?',
        options: [
          'Test immediately',
          'Test only the father',
          'Test with newborn bloodspot',
          'Defer testing until the child can make an informed decision as an adult',
        ],
        answer: 3,
        why: 'Predictive testing for adult-onset conditions without an available childhood intervention is deferred so the person can decide autonomously.',
      },
      {
        q: 'Which risk of miscarriage is associated with chorionic villus sampling?',
        options: [
          'About 0.5-1 percent',
          'About 0.01 percent',
          'About 10 percent',
          'About 25 percent',
        ],
        answer: 0,
        why: 'CVS carries a miscarriage risk of about 1 percent; amniocentesis about 0.5 percent.',
      },
    ],
    cards: [
      {
        q: 'Definition of a malformation?',
        a: 'Intrinsically abnormal development of an organ or tissue.',
      },
      {
        q: 'Definition of a deformation?',
        a: 'Abnormal mechanical force acting on normally formed tissue.',
      },
      {
        q: 'What does VACTERL stand for?',
        a: 'Vertebral, Anal, Cardiac, Tracheo-oesophageal fistula, Renal, Limb.',
      },
      {
        q: 'First-line genetic test for unexplained global delay?',
        a: 'Chromosomal microarray.',
      },
      {
        q: 'Which test detects imprinting disorders?',
        a: 'DNA methylation analysis.',
      },
      {
        q: 'Timing of chorionic villus sampling?',
        a: '11-13 weeks gestation.',
      },
      {
        q: 'Gene mutated in CHARGE syndrome?',
        a: 'CHD7.',
      },
      {
        q: 'Principle of genetic counselling?',
        a: 'Non-directive, informed, confidential communication of risk and options.',
      },
    ],
  },
};
