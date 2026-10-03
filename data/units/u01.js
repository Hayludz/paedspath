export default {
  'history-exam': {
    summary: 'Paediatric history and examination differ from adult practice because the history is often given by a parent or carer, the child is examined according to age and cooperation, and growth, development and social context are part of every assessment. A structured, opportunistic and child-friendly approach yields most of the diagnosis.',
    objectives: [
      'Describe a structured paediatric history including birth, feeding, development, immunisation and social history',
      'Demonstrate an age-appropriate approach to examining infants, toddlers, school-age children and adolescents',
      'Identify normal age-related variation in vital signs',
      'Recognise features in the history and examination that should prompt safeguarding concern',
    ],
    sections: [
      {
        h: 'Principles of the paediatric consultation',
        p: [
          'The history is usually taken from a parent or carer, but the child should be included from the earliest age and older children and adolescents should be given the chance to speak alone. Start with an introduction, establish who is present and their relationship to the child, and use open questions before focused ones. Observation begins in the waiting room: interaction, alertness, activity, colour, work of breathing and parent-child dynamics tell you as much as formal examination.',
          'Examination is opportunistic. In an infant or toddler, observe first, auscultate while the child is quiet, leave the most upsetting parts (ears, throat, abdomen if tender) until last, and use toys, distraction and the parent lap. Never force a throat examination in a child with stridor or drooling because of the risk of complete airway obstruction.',
        ],
      },
      {
        h: 'Structure of the history',
        list: [
          'Presenting complaint and its history in the words of the parent and child, with duration, severity, associated features and what has been tried',
          'Past medical history: admissions, operations, chronic illness, allergies, medicines',
          'Perinatal history: antenatal problems, gestation, mode of delivery, birth weight, neonatal unit admission, jaundice, feeding problems',
          'Feeding and diet: breast or formula, weaning, current diet, appetite, vitamin supplements',
          'Growth and development: parental concerns, milestones, school progress, previous measurements in the Personal Child Health Record (red book)',
          'Immunisation status and travel history',
          'Family history: consanguinity, inherited conditions, early deaths, atopy, tuberculosis contacts, three-generation pedigree where relevant',
          'Social history: who lives at home, siblings, housing, smoking, school or nursery, finances, social worker involvement, child protection history',
          'Systems review and, in adolescents, a HEADSS screen (Home, Education, Activities, Drugs, Sexuality, Suicide/depression)',
        ],
      },
      {
        h: 'General examination and vital signs',
        p: [
          'Begin with general appearance: alert, interactive, playful, comfortable or ill, toxic, lethargic. Look for pallor, jaundice, cyanosis, clubbing, rash, dysmorphic features, hydration (fontanelle, mucous membranes, capillary refill, skin turgor, tears) and nutritional state. Measure weight, length or height and head circumference (to age 2 years, and at any age if concerned) and plot them on the correct chart.',
          'Normal vital signs fall with age, so each reading must be interpreted against age-specific ranges. Approximate resting values: respiratory rate 30-40 breaths/min at birth to 1 year falling to 12-20 in adolescents; heart rate 110-160 in newborns, 100-150 in infants, 60-100 by adolescence; systolic blood pressure about 70-90 mmHg in infancy rising to adult values by adolescence. Use an appropriately sized cuff covering two thirds of the upper arm.',
        ],
      },
      {
        h: 'Systems examination',
        list: [
          'Cardiovascular: precordial activity, heart sounds, murmurs (innocent murmurs are soft, systolic, variable with posture, with no thrills), femoral pulses, liver edge, capillary refill',
          'Respiratory: rate, recession, grunting, nasal flaring, stridor, wheeze, crackles, chest shape; count the rate over a full minute',
          'Abdomen: inspection, gentle palpation, liver and spleen, masses, hernial orifices, genitalia, anus; distraction and bent knees help',
          'Neurological: tone, posture, reflexes, primitive reflexes in infants, cranial nerves, gait, coordination, fundi when feasible',
          'ENT: examine the ears last; look for tonsillar exudate, cervical lymph nodes',
          'Hips: Barlow and Ortolani in neonates; examine the spine and skin for dimples and tufts',
          'Skin: bruising (note location, pattern and age consistency), rashes, birthmarks, signs of neglect',
        ],
      },
      {
        h: 'Safeguarding and communication',
        p: [
          'Bruising in a non-mobile infant, injuries inconsistent with the stated mechanism, delay in seeking help, changing accounts, repeated attendances and unexplained faltering growth should raise concern. Document verbatim what was said, draw body maps, and discuss with a senior and the local safeguarding team. Adolescents need confidentiality explained along with its limits, and consent follows competence rather than age (Gillick competence in UK practice).',
        ],
      },
    ],
    keyPoints: [
      'Observation before touch gives the most reliable findings in a young child',
      'Normal values for heart rate, respiratory rate and blood pressure change with age; always use age-specific charts',
      'A perinatal, feeding, developmental, immunisation and social history is part of every paediatric assessment',
      'Plot every measurement on the correct growth chart; a single point is less useful than the trajectory',
      'Do not examine the throat of a child with suspected epiglottitis or severe upper airway obstruction',
      'Include and examine the child, not just the parent; interview adolescents alone for part of the consultation',
      'Inconsistent history and injuries incompatible with developmental stage suggest non-accidental injury',
      'Innocent murmurs are asymptomatic, soft, systolic, and vary with position',
    ],
    redFlags: [
      'Altered consciousness, lethargy or poor response to stimulation',
      'Grunting, severe recession, apnoea or cyanosis',
      'Prolonged capillary refill, tachycardia out of proportion to fever, or hypotension (late sign)',
      'Non-blanching petechial or purpuric rash with fever',
      'Bruising or fractures in a non-mobile infant, or an injury pattern inconsistent with the history',
      'Bile-stained vomiting in an infant',
    ],
    mnemonics: [
      {
        name: 'HEADSS',
        text: 'Adolescent psychosocial screen: Home, Education/Employment, Activities, Drugs, Sexuality, Suicide/depression/safety',
      },
      {
        name: 'ABCDE',
        text: 'Airway, Breathing, Circulation, Disability, Exposure - structured assessment of the acutely unwell child',
      },
    ],
    table: {
      title: 'Approximate normal resting vital signs by age',
      headers: [
        'Age',
        'Heart rate (/min)',
        'Respiratory rate (/min)',
        'Systolic BP (mmHg)',
      ],
      rows: [
        [
          'Newborn to 1 year',
          '110-160',
          '30-40',
          '70-90',
        ],
        [
          '1-2 years',
          '100-150',
          '25-35',
          '80-95',
        ],
        [
          '2-5 years',
          '95-140',
          '25-30',
          '80-100',
        ],
        [
          '5-12 years',
          '80-120',
          '20-25',
          '90-110',
        ],
        [
          'Over 12 years',
          '60-100',
          '15-20',
          '100-120',
        ],
      ],
    },
    pearls: [
      'Ask what the parent is most worried about; parental concern is a strong predictor of serious illness',
      'Always check the red book: previous centiles and immunisation records are often more informative than the memory of a parent',
      'Count respiratory rate before disturbing the child and examine the chest early while the child is calm',
      'Document that you have asked adolescents about confidentiality, and screen privately for risk behaviour',
    ],
    quiz: [
      {
        q: 'A 2-year-old with a barking cough, stridor at rest and drooling is brought in. What is the most appropriate approach to examination?',
        options: [
          'Keep the child calm on the parent lap, avoid throat examination and call senior airway help',
          'Examine the throat with a tongue depressor to look for epiglottitis',
          'Lie the child flat for chest auscultation',
          'Take blood cultures first',
        ],
        answer: 0,
        why: 'Distress or instrumentation may precipitate complete airway obstruction in a child with severe upper airway compromise. Observation, minimal handling and early senior/anaesthetic input are required. Examining the throat or lying the child flat can worsen obstruction; investigations should not delay securing the airway.',
      },
      {
        q: 'Which finding is most consistent with an innocent flow murmur?',
        options: [
          'Pansystolic murmur radiating to the axilla with a thrill',
          'Soft ejection systolic murmur that changes with posture in a well, thriving child',
          'Diastolic murmur at the left sternal edge',
          'Murmur with absent femoral pulses',
        ],
        answer: 1,
        why: 'Innocent murmurs are soft, short, systolic, positional, without thrills, radiation or symptoms. A thrill, diastolic murmur or weak femoral pulses (coarctation) indicate pathology.',
      },
      {
        q: 'A 15-year-old attends alone with abdominal pain and tells you she is sexually active but does not wish her parents to know. What is the best response?',
        options: [
          'Tell the parents regardless because she is under 16',
          'Refuse to take a sexual history',
          'Refer immediately to social services without discussion',
          'Assess competence, provide confidential care and explain the limits of confidentiality',
        ],
        answer: 3,
        why: 'A competent adolescent can consent to treatment and expect confidentiality unless there is risk of serious harm. Safeguarding assessment is still needed (age of partner, coercion), but automatic disclosure is wrong.',
      },
      {
        q: 'Which of the following measurements is routinely plotted in a child under 2 years but not usually in older children?',
        options: [
          'Weight',
          'Height',
          'Blood pressure',
          'Head circumference',
        ],
        answer: 3,
        why: 'Head circumference reflects brain growth and is routinely measured up to 2 years; thereafter only when there is a concern. Weight and height are plotted at all ages.',
      },
      {
        q: 'A 4-month-old baby who cannot roll over has a bruise on the cheek. The parent says the baby fell off the sofa. What is the most appropriate next step?',
        options: [
          'Document carefully and arrange a child protection assessment with senior input',
          'Reassure and discharge',
          'Treat as accidental because the history is plausible',
          'Ask the parents to return in a week',
        ],
        answer: 0,
        why: 'Bruising in a non-mobile infant is highly concerning and requires safeguarding evaluation including skeletal survey and review by a senior. A baby who cannot roll cannot fall in this way.',
      },
    ],
    cards: [
      {
        q: 'What does HEADSS stand for?',
        a: 'Home, Education/Employment, Activities, Drugs, Sexuality, Suicide/depression/safety.',
      },
      {
        q: 'Which part of the examination should be left until last in a young child?',
        a: 'The ears and throat, and any painful areas.',
      },
      {
        q: 'Approximate normal respiratory rate of a 6-month-old?',
        a: 'About 30-40 breaths per minute.',
      },
      {
        q: 'Appropriate blood pressure cuff width?',
        a: 'Covering about two thirds of the upper arm length.',
      },
      {
        q: 'When is head circumference routinely measured?',
        a: 'In infancy up to 2 years, and at any age if there is concern.',
      },
      {
        q: 'Name the neonatal tests for hip dislocation.',
        a: 'Barlow (provocative) and Ortolani (reduction) manoeuvres.',
      },
      {
        q: 'What is the main reason not to examine the throat in suspected epiglottitis?',
        a: 'Risk of complete airway obstruction.',
      },
      {
        q: 'Where are previous growth and immunisation records kept in UK practice?',
        a: 'The Personal Child Health Record (red book).',
      },
    ],
  },
  'growth-charts': {
    summary: 'Growth is the most sensitive indicator of a child overall health. Accurate measurement and plotting on population reference charts allow detection of faltering growth, short or tall stature, obesity and abnormal head size, and the trajectory over time is more informative than a single value.',
    objectives: [
      'Describe normal patterns of growth in infancy, childhood and puberty',
      'Plot weight, length/height, head circumference and BMI correctly on centile charts',
      'Interpret centiles, z-scores and mid-parental height',
      'Differentiate the main causes of short stature and abnormal head size',
    ],
    sections: [
      {
        h: 'Normal growth',
        p: [
          'Growth is divided into infancy, childhood and puberty. Infancy is the fastest phase: babies lose up to 10 percent of birth weight in the first week, regain it by 2 weeks, double birth weight by about 5 months and triple it by 1 year. Length increases about 25 cm in the first year and 12 cm in the second. Childhood growth is steady at roughly 5-7 cm and 2-3 kg per year. The pubertal growth spurt occurs about 2 years earlier in girls, peaking early in puberty (breast stage 2-3), whereas in boys it peaks later (testicular volume about 12 ml).',
          'Growth in infancy is driven by nutrition and insulin; in childhood by growth hormone and thyroid hormone; in puberty by sex steroids acting with growth hormone. Genetic potential is estimated by mid-parental height.',
        ],
      },
      {
        h: 'Measurement and charts',
        list: [
          'Use a calibrated infantometer for length up to 2 years (lying) and a stadiometer for standing height; weigh infants naked and children in underwear',
          'Head circumference is the maximal occipitofrontal circumference, taking the largest of three readings',
          'UK practice uses UK-WHO growth charts from birth to 4 years and UK 1990 charts thereafter; WHO standards are used internationally (breastfed infants as the norm)',
          'Correct for gestation: until 1 year for babies born at 32-36 weeks and until 2 years for those born before 32 weeks',
          'Sex-specific charts; 9 centile lines are 0.4, 2, 9, 25, 50, 75, 91, 98 and 99.6; the 0.4th and 99.6th centiles correspond approximately to -2.67 and +2.67 SD',
          'Z-scores (standard deviation scores): weight-for-height below -2 is moderate and below -3 severe wasting; height-for-age below -2 is stunting; weight-for-age below -2 is underweight',
          'BMI is plotted from age 2 years; overweight is at or above the 91st centile and obese at or above the 98th in UK clinical practice',
        ],
      },
      {
        h: 'Interpreting growth',
        p: [
          'Children usually track along a centile after about 2 years. Crossing two major centile lines downwards is abnormal and warrants assessment. Young infants may show centile shifts as they settle onto their genetic channel (catch-up or catch-down growth). Height velocity is calculated over at least 6 months, and below the 25th centile for age is concerning.',
          'Mid-parental height (MPH) is the average of the two parents heights plus 7 cm for boys or minus 7 cm for girls (the formula: boys = (father + mother + 13)/2; girls = (father + mother - 13)/2). The target range is MPH +/- 8-10 cm. A child markedly below the target needs investigation.',
        ],
      },
      {
        h: 'Short stature',
        list: [
          'Familial short stature: short parents, normal growth velocity, normal bone age',
          'Constitutional delay of growth and puberty: delayed bone age, late puberty, family history of late developers, eventual normal adult height',
          'Pathological: growth hormone deficiency, hypothyroidism, Turner syndrome, Cushing syndrome or glucocorticoid excess, Prader-Willi, skeletal dysplasia (achondroplasia), chronic disease (coeliac disease, inflammatory bowel disease, chronic kidney disease, cystic fibrosis), malnutrition and psychosocial deprivation',
          'First-line tests: coeliac serology, thyroid function, full blood count, ESR/CRP, urea and electrolytes, bone age X-ray, karyotype in girls; second-line growth hormone stimulation tests',
        ],
      },
      {
        h: 'Abnormal head size',
        p: [
          'Microcephaly (below -2 SD) may be familial or follow congenital infection (TORCH, Zika), hypoxic injury, chromosomal disorders or craniosynostosis. Macrocephaly (above +2 SD) is most often familial or benign external hydrocephalus; pathological causes include hydrocephalus, subdural collections, tumour and storage disease. Always plot parental head sizes and look for developmental delay, bulging fontanelle, sunsetting eyes and splayed sutures.',
        ],
      },
    ],
    keyPoints: [
      'Measure accurately and plot on sex-specific charts; use gestation-corrected age in preterm infants',
      'Babies regain birth weight by 2 weeks and double it by about 5 months',
      'Crossing two major centile lines suggests a growth problem',
      'Mid-parental height gives a genetic target range of about 8-10 cm either side',
      'Bone age is delayed in constitutional delay and hypothyroidism/GH deficiency but normal in familial short stature',
      'Weight-for-height below -3 SD defines severe acute malnutrition',
      'Girls have the pubertal growth spurt earlier and at a lower peak than boys',
      'Head circumference up to 2 years reflects brain growth',
    ],
    redFlags: [
      'Weight falling across centiles with ill appearance or dehydration',
      'Height velocity below the 25th centile for age',
      'Short stature with disproportion, dysmorphic features or learning difficulty',
      'Rapid head growth with bulging fontanelle, vomiting or sunsetting eyes',
      'Obesity with short stature (consider Cushing syndrome, hypothyroidism, Prader-Willi)',
    ],
    mnemonics: [
      {
        name: 'Weight milestones',
        text: 'Birth weight doubles at about 5 months, triples at 1 year, quadruples at 2 years',
      },
    ],
    table: {
      title: 'Short stature: distinguishing features',
      headers: [
        'Cause',
        'Growth velocity',
        'Bone age',
        'Puberty',
      ],
      rows: [
        [
          'Familial short stature',
          'Normal',
          'Equal to chronological',
          'Normal timing',
        ],
        [
          'Constitutional delay',
          'Normal then slow in early teens',
          'Delayed',
          'Late, with late catch-up',
        ],
        [
          'Growth hormone deficiency',
          'Reduced',
          'Delayed',
          'May be delayed',
        ],
        [
          'Hypothyroidism',
          'Reduced',
          'Markedly delayed',
          'Delayed',
        ],
        [
          'Turner syndrome',
          'Reduced from childhood',
          'Variable',
          'Absent without oestrogen',
        ],
      ],
    },
    pearls: [
      'Plot the parents on the chart before making a diagnosis of short stature',
      'A tall child with early puberty may reach a short adult height because growth plates fuse early',
      'In a well infant, weight crossing centiles in the first 6 months often reflects settling onto the genetic channel',
    ],
    quiz: [
      {
        q: 'A 10-year-old boy has height on the 0.4th centile, growth velocity 6 cm/year, no signs of puberty, a bone age of 8 years and a father who reached adult height at 19. The most likely diagnosis is:',
        options: [
          'Growth hormone deficiency',
          'Familial short stature',
          'Constitutional delay of growth and puberty',
          'Turner syndrome',
        ],
        answer: 2,
        why: 'Normal velocity, delayed bone age, delayed puberty and a family history of late growth are typical of constitutional delay. GH deficiency has reduced velocity; familial short stature has normal bone age; Turner syndrome affects girls.',
      },
      {
        q: 'What is the target height for a girl whose mother is 160 cm and father is 175 cm?',
        options: [
          '166 cm',
          '171 cm',
          '161 cm',
          '175 cm',
        ],
        answer: 2,
        why: 'Girls: (father + mother - 13)/2 = (175 + 160 - 13)/2 = 161 cm. The target range is about +/- 8-10 cm.',
      },
      {
        q: 'Which z-score of weight-for-height defines severe wasting in the WHO classification?',
        options: [
          'Below -1',
          'Below -3',
          'Below -2',
          'Below -4',
        ],
        answer: 1,
        why: 'Below -2 SD is moderate wasting; below -3 SD is severe acute malnutrition.',
      },
      {
        q: 'At what age do healthy infants approximately double their birth weight?',
        options: [
          '5 months',
          '2 months',
          '9 months',
          '12 months',
        ],
        answer: 0,
        why: 'Birth weight doubles at about 5 months and triples at 12 months.',
      },
      {
        q: 'Which of these should prompt investigation for short stature?',
        options: [
          'Height on the 25th centile tracking with parents on the 10th',
          'A preterm infant corrected for gestation tracking the 9th centile',
          'Height velocity below the 25th centile for age',
          'Girl entering puberty at 10 years with a growth spurt',
        ],
        answer: 2,
        why: 'Poor height velocity indicates a pathological cause. The other options represent normal variation.',
      },
    ],
    cards: [
      {
        q: 'When do babies usually regain birth weight?',
        a: 'By about 2 weeks of age.',
      },
      {
        q: 'Formula for target height of a boy?',
        a: '(Father + mother + 13)/2 in cm.',
      },
      {
        q: 'Definition of stunting?',
        a: 'Height-for-age below -2 SD (chronic undernutrition).',
      },
      {
        q: 'Definition of wasting?',
        a: 'Weight-for-height below -2 SD; severe below -3 SD.',
      },
      {
        q: 'Which charts do UK clinicians use from birth to 4 years?',
        a: 'UK-WHO growth charts.',
      },
      {
        q: 'Typical childhood growth per year?',
        a: 'About 5-7 cm and 2-3 kg.',
      },
      {
        q: 'Bone age in familial short stature?',
        a: 'Normal, equal to chronological age.',
      },
      {
        q: 'BMI threshold for obesity in UK clinical practice?',
        a: 'At or above the 98th centile for age and sex.',
      },
    ],
  },
  'dev-milestones': {
    summary: 'Developmental milestones in four domains - gross motor, fine motor and vision, hearing speech and language, and social, emotional and behavioural - mark the expected skills of children at each age. Knowing the normal range allows early identification of delay, regression and conditions such as cerebral palsy, autism and hearing impairment.',
    objectives: [
      'List the key milestones in each developmental domain from birth to 5 years',
      'Distinguish normal variation from delay, deviance and regression',
      'Describe developmental surveillance and screening tools and when to refer',
      'Recognise red flag features that need urgent developmental assessment',
    ],
    sections: [
      {
        h: 'Principles of development',
        p: [
          'Development proceeds in a predictable sequence from head to toe (cephalocaudal) and from proximal to distal, with reflexes giving way to voluntary control. Rates differ between children, so milestones are described by a range with a limit age (the age by which 97 percent of children have achieved a skill). Failure to reach a limit age needs assessment. Preterm infants are assessed at corrected age until 2 years.',
          'Delay refers to a slower acquisition in one or more domains. Deviance is development out of sequence (for example, language that is abnormal rather than just slow). Regression is loss of previously acquired skills and always demands investigation. Global delay affects two or more domains.',
        ],
      },
      {
        h: 'Milestones by domain',
        list: [
          'Gross motor: head control at 3-4 months; sits unsupported 6-8 months (limit 9 months); crawls or bottom-shuffles 9-10 months; pulls to stand 9 months; walks independently about 12-13 months (limit 18 months); runs 18 months-2 years; climbs stairs, jumps and kicks a ball at 2-3 years; hops and rides a tricycle by 3-4 years',
          'Fine motor and vision: fixes and follows 6 weeks; reaches and grasps 4-5 months; transfers objects 6 months; pincer grip 9-12 months; tower of 2-3 bricks 15 months, 6 bricks 2 years, 9 bricks 3 years; scribbles 15-18 months; copies a circle 3 years, cross 4 years, triangle 5 years; draws a person with 6 parts by 5 years',
          'Hearing, speech and language: social smile 6 weeks; laughs 3-4 months; babbles 6-9 months; says mama/dada non-specifically 9 months and specifically by 12 months; 2-3 words by 12-15 months; 50 words and two-word phrases by 2 years; three-word sentences by 3 years; understandable speech to strangers by 3-4 years; tells stories by 5 years',
          'Social and emotional: smiles at 6 weeks; stranger awareness 6-9 months; waves bye-bye, plays peek-a-boo 9-12 months; drinks from cup 12 months; spoon use 18 months; dry by day 2-3 years; parallel play 2 years, cooperative play 3-4 years; dresses self by 4-5 years',
        ],
      },
      {
        h: 'Primitive reflexes and neurological development',
        p: [
          'Primitive reflexes such as Moro (startle), palmar and plantar grasp, rooting, sucking, stepping and asymmetrical tonic neck reflexes are present at birth and gradually disappear by about 4-6 months as voluntary control matures. Persistence beyond this time or asymmetry suggests central nervous system dysfunction, and early hand preference before 12 months suggests hemiplegia. Protective responses (parachute reflex) appear at 6-9 months.',
        ],
      },
      {
        h: 'Surveillance and screening',
        list: [
          'Developmental surveillance relies on parental concerns, observation, and structured checks at routine contacts (newborn exam, 6-8 week check, 1 year, 2-2.5 year review, school entry)',
          'Tools: Denver II, Ages and Stages Questionnaire (ASQ), Schedule of Growing Skills, Griffiths and Bayley scales (formal assessment); in resource-limited settings, WHO motor milestones and the Road to Health card',
          'Universal newborn hearing screening using otoacoustic emissions and auditory brainstem response',
          'Vision screening: red reflex at birth and at 6-8 weeks; squint and amblyopia screening by age 4-5 years',
          'Refer to a child development team or neurodevelopmental paediatrician when milestone limits are not reached, when there is regression, or when parents are worried',
        ],
      },
      {
        h: 'Red flags in development',
        p: [
          'Developmental red flags include no social smile by 8 weeks, no head control by 5 months, no sitting by 9 months, not walking by 18 months (check creatine kinase in boys), absent babble or single words by 12-18 months, no pointing or response to name, hand preference before 12 months, persisting primitive reflexes, abnormal tone, loss of any previously acquired skill, and any parental concern about vision or hearing.',
        ],
      },
    ],
    keyPoints: [
      'Four domains: gross motor, fine motor and vision, hearing speech and language, social/behavioural',
      'Limit age: independent sitting 9 months, walking 18 months, pincer grip 12 months, single words 18 months',
      'Regression is always abnormal and needs urgent investigation',
      'Correct for prematurity until 2 years',
      'Social smile appears at about 6 weeks and is a key early marker',
      'Primitive reflexes should disappear by 4-6 months; asymmetry or persistence is abnormal',
      'Hand preference before 12 months suggests a contralateral hemiplegia',
      'Any speech and language delay requires a hearing test',
    ],
    redFlags: [
      'Loss of previously acquired skills',
      'No social smile by 8 weeks or poor visual fixation',
      'Not sitting by 9 months or walking by 18 months',
      'No babble by 12 months, no words by 18 months, or no pointing',
      'Hand preference before 12 months or asymmetry of tone',
      'Walking delay in a boy with calf pseudohypertrophy or Gowers sign (check creatine kinase)',
    ],
    mnemonics: [
      {
        name: 'Limit ages',
        text: 'Sit by 9 months, walk by 18 months, words by 18 months, sentences by 3 years',
      },
    ],
    table: {
      title: 'Key milestones by age',
      headers: [
        'Age',
        'Gross motor',
        'Fine motor / vision',
        'Language / social',
      ],
      rows: [
        [
          '6 weeks',
          'Lifts head in prone',
          'Follows face',
          'Social smile',
        ],
        [
          '6 months',
          'Sits with support, rolls',
          'Palmar grasp, transfers',
          'Babbles, laughs',
        ],
        [
          '9 months',
          'Sits alone, crawls, pulls to stand',
          'Inferior pincer grip',
          'Mama/dada nonspecific, stranger awareness',
        ],
        [
          '12 months',
          'Cruises, may walk',
          'Pincer grip',
          'Specific words, waves',
        ],
        [
          '2 years',
          'Runs, kicks ball',
          'Tower of 6, scribbles',
          '50 words, two-word phrases',
        ],
        [
          '3 years',
          'Rides tricycle, jumps',
          'Copies circle, tower of 9',
          'Three-word sentences, parallel to cooperative play',
        ],
        [
          '5 years',
          'Hops, skips',
          'Copies triangle, draws person',
          'Fluent speech, dresses alone',
        ],
      ],
    },
    pearls: [
      'Ask the parent to demonstrate or show videos of the skills; the clinic environment can under-represent abilities',
      'Persistent toe walking can be idiopathic, but also consider cerebral palsy, Duchenne dystrophy and autism',
      'Always assess hearing in any child with speech delay, even if they respond to loud noises',
    ],
    quiz: [
      {
        q: 'An 11-month-old can sit unsupported, crawls, babbles and uses a pincer grip. He cannot yet pull to stand. This development is:',
        options: [
          'Significantly delayed',
          'Suggestive of cerebral palsy',
          'Regression',
          'Normal for age',
        ],
        answer: 3,
        why: 'Pulling to stand is typically 9-12 months; other skills are age-appropriate. This falls within the normal range.',
      },
      {
        q: 'At which age is a child expected to copy a circle?',
        options: [
          '3 years',
          '2 years',
          '4 years',
          '5 years',
        ],
        answer: 0,
        why: 'Circle at 3 years, cross at 4 years, triangle at 5 years.',
      },
      {
        q: 'A 14-month-old girl has clear hand preference for the right hand and a stiff left arm. The most likely explanation is:',
        options: [
          'Normal handedness',
          'Left hemiplegia',
          'Right hemiplegia',
          'Erb palsy',
        ],
        answer: 1,
        why: 'Hand preference before 12 months suggests weakness of the other (non-preferred) hand - left hemiplegic cerebral palsy from a right hemisphere insult.',
      },
      {
        q: 'Which is the latest age by which most children should be walking independently?',
        options: [
          '12 months',
          '15 months',
          '18 months',
          '24 months',
        ],
        answer: 2,
        why: 'The limit age for walking is 18 months; failure warrants assessment, including creatine kinase in boys.',
      },
      {
        q: 'A 2-year-old uses 5 words and has stopped using words they previously said. The most appropriate next step is:',
        options: [
          'Reassure and review in 6 months',
          'Prescribe speech therapy only',
          'Wait for school entry',
          'Arrange hearing test and urgent developmental assessment for regression',
        ],
        answer: 3,
        why: 'Regression in language mandates urgent evaluation (autism, hearing loss, epileptic encephalopathy such as Landau-Kleffner, neurometabolic disease) and hearing testing.',
      },
    ],
    cards: [
      {
        q: 'When does the social smile appear?',
        a: 'About 6 weeks.',
      },
      {
        q: 'Limit age for independent sitting?',
        a: '9 months.',
      },
      {
        q: 'Limit age for independent walking?',
        a: '18 months.',
      },
      {
        q: 'When should primitive reflexes disappear?',
        a: 'By about 4-6 months.',
      },
      {
        q: 'At what age does a child copy a cross?',
        a: '4 years.',
      },
      {
        q: 'Typical vocabulary at 2 years?',
        a: 'About 50 words with two-word phrases.',
      },
      {
        q: 'What is developmental regression?',
        a: 'Loss of previously acquired skills - always pathological.',
      },
      {
        q: 'What is deviance?',
        a: 'Development that is out of the usual sequence, not just slow.',
      },
    ],
  },
  'global-delay': {
    summary: 'Global developmental delay (GDD) is significant delay in two or more developmental domains in a child under 5 years, while intellectual disability (learning disability) is the diagnosis applied when intellectual and adaptive functioning are persistently impaired. Causes are varied, and a systematic search for a cause helps with prognosis, recurrence risk and management.',
    objectives: [
      'Define global developmental delay, intellectual disability and specific learning difficulty',
      'List the main genetic, environmental and acquired causes',
      'Outline a staged approach to investigating a child with GDD',
      'Describe multidisciplinary management and the support available',
    ],
    sections: [
      {
        h: 'Definitions and epidemiology',
        p: [
          'Global developmental delay is delay of at least 2 SD below the mean in two or more domains in a child under 5. After 5 years, standardised IQ testing allows the diagnosis of intellectual disability: IQ below 70 with impaired adaptive functioning, graded as mild (IQ 50-69), moderate (35-49), severe (20-34) and profound (below 20). Intellectual disability affects roughly 1-3 percent of children, with mild disability much more common than severe. Males are more frequently affected because of X-linked causes.',
          'Specific learning difficulties (dyslexia, dyscalculia, dyspraxia) involve isolated impairment with normal overall intelligence, and are distinct.',
        ],
      },
      {
        h: 'Causes',
        list: [
          'Prenatal genetic: chromosomal (Down syndrome, microdeletions, copy number variants), single gene (fragile X, Rett syndrome, tuberous sclerosis), inherited metabolic disease',
          'Prenatal environmental: congenital infection (CMV, toxoplasmosis, rubella, Zika), fetal alcohol spectrum disorder, maternal drugs (valproate), maternal diabetes, iodine deficiency',
          'Perinatal: prematurity, hypoxic-ischaemic encephalopathy, neonatal hypoglycaemia, kernicterus, intraventricular haemorrhage',
          'Postnatal: meningitis and encephalitis, head injury including non-accidental, epilepsy and epileptic encephalopathy, hypothyroidism, lead poisoning, severe malnutrition and deprivation',
          'Unknown in a large proportion, especially in mild cases; neurodevelopmental conditions often coexist (autism, ADHD, cerebral palsy)',
        ],
      },
      {
        h: 'Assessment',
        p: [
          'A detailed history should include family pedigree, consanguinity, antenatal exposures, perinatal events, developmental trajectory (regression is a flag for metabolic or neurodegenerative disease) and social context. Examination includes growth, head circumference, dysmorphic features, skin (neurocutaneous markers such as cafe-au-lait spots and ash-leaf macules), eyes and ears, neurological status, cardiovascular examination and hepatosplenomegaly. Formal developmental assessment (Griffiths, Bayley) and hearing and vision tests are essential, as sensory deficits mimic or worsen delay.',
        ],
      },
      {
        h: 'Investigations',
        list: [
          'First tier: hearing and vision assessment, thyroid function, full blood count and ferritin, lead where exposure possible, creatine kinase in boys with motor delay',
          'Genetic: chromosomal microarray (first-line genetic test, replacing routine karyotype), fragile X testing in boys and in girls with a suggestive picture, and increasingly whole exome or genome sequencing',
          'Metabolic: urea and electrolytes, amino acids, urine organic acids, lactate, ammonia, biotinidase, creatine metabolites when features suggest inborn errors',
          'Neuroimaging (MRI brain) when there is microcephaly, macrocephaly, focal signs, seizures, regression or dysmorphism',
          'EEG if epilepsy is suspected; Rett syndrome (MECP2) in girls with regression and hand wringing',
        ],
      },
      {
        h: 'Management',
        p: [
          'Care is multidisciplinary: community paediatrician, therapists (physiotherapy, occupational therapy, speech and language), educational psychology, nursery and school special educational needs support (an Education, Health and Care plan in England), social care and respite. Treat comorbidities - epilepsy, sleep disorder (melatonin), feeding problems, constipation, behavioural problems, vision and hearing impairment - and ensure routine health checks and immunisation. Provide genetic counselling and support to the family, and screen for abuse because children with disabilities are at higher risk.',
        ],
      },
    ],
    keyPoints: [
      'GDD means significant delay in 2 or more domains in a child under 5 years',
      'Intellectual disability is IQ below 70 with impaired adaptive function',
      'Chromosomal microarray is the first-line genetic test; test fragile X in boys',
      'Always check hearing and vision first',
      'Regression suggests metabolic, neurodegenerative or epileptic encephalopathy',
      'Fetal alcohol spectrum disorder and Down syndrome are leading preventable and common causes respectively',
      'Hypothyroidism and phenylketonuria are treatable causes found on newborn screening',
      'Management is multidisciplinary and involves education plans and family support',
    ],
    redFlags: [
      'Loss of acquired skills',
      'Seizures with developmental plateau',
      'Hepatosplenomegaly or coarse facies (storage disease)',
      'Acquired microcephaly or rapid head growth',
      'Suspicion of abuse or neglect',
      'Hearing or visual impairment not previously identified',
    ],
    mnemonics: [
      {
        name: 'Treatable causes',
        text: 'Think: thyroid, phenylketonuria, lead, sensory loss, epilepsy, iodine/iron deficiency',
      },
    ],
    table: {
      title: 'Severity of intellectual disability',
      headers: [
        'Level',
        'IQ range',
        'Typical function',
      ],
      rows: [
        [
          'Mild',
          '50-69',
          'Independent in most self-care; mainstream or special school; may live independently with support',
        ],
        [
          'Moderate',
          '35-49',
          'Basic self-care and communication; supported living',
        ],
        [
          'Severe',
          '20-34',
          'Limited speech; requires close supervision',
        ],
        [
          'Profound',
          'Below 20',
          'Needs continual support; often multiple disabilities',
        ],
      ],
    },
    pearls: [
      'A normal microarray does not exclude a genetic cause; consider exome sequencing in unexplained moderate to severe GDD',
      'Do not forget fragile X in a boy with large ears, long face and a family history of intellectual disability',
      'Parental understanding of the diagnosis and ongoing review are as important as the test results',
    ],
    quiz: [
      {
        q: 'Which is the recommended first-line genetic test for a child with unexplained global developmental delay?',
        options: [
          'G-banded karyotype only',
          'Chromosomal microarray',
          'Single gene sequencing of MECP2',
          'Whole body MRI',
        ],
        answer: 1,
        why: 'Microarray detects copy number variants and has higher diagnostic yield than routine karyotype. Single gene tests are targeted by phenotype.',
      },
      {
        q: 'Which of the following defines mild intellectual disability?',
        options: [
          'IQ 70-85',
          'IQ 35-49',
          'IQ 20-34',
          'IQ 50-69',
        ],
        answer: 3,
        why: 'Mild intellectual disability corresponds to an IQ of 50-69, with impaired adaptive function.',
      },
      {
        q: 'A 3-year-old boy with long face, large ears, macro-orchidism and autistic features should be tested for:',
        options: [
          'Down syndrome',
          'Williams syndrome',
          'Angelman syndrome',
          'Fragile X syndrome',
        ],
        answer: 3,
        why: 'This is the typical phenotype of fragile X (FMR1 CGG repeat expansion).',
      },
      {
        q: 'A girl of 18 months who previously said words and used her hands begins hand wringing, loses speech and slows head growth. The likely diagnosis is:',
        options: [
          'Rett syndrome',
          'Autism',
          'Cerebral palsy',
          'Cri du chat',
        ],
        answer: 0,
        why: 'Regression after a period of normal development with stereotypic hand movements and deceleration of head growth in a girl suggests Rett syndrome (MECP2).',
      },
      {
        q: 'Which should be performed in all children with global developmental delay?',
        options: [
          'Lumbar puncture',
          'Hearing and vision assessment',
          'Muscle biopsy',
          'Skeletal survey',
        ],
        answer: 1,
        why: 'Sensory impairment is common, treatable and may be mistaken for or contribute to delay. Other tests are only indicated by specific features.',
      },
    ],
    cards: [
      {
        q: 'Definition of GDD?',
        a: 'Significant delay (2 SD or more) in two or more developmental domains in a child under 5.',
      },
      {
        q: 'IQ range for mild intellectual disability?',
        a: '50-69.',
      },
      {
        q: 'First-line genetic test in GDD?',
        a: 'Chromosomal microarray.',
      },
      {
        q: 'Which syndrome is the commonest inherited cause of intellectual disability in boys?',
        a: 'Fragile X syndrome.',
      },
      {
        q: 'Gene involved in Rett syndrome?',
        a: 'MECP2 (X-linked).',
      },
      {
        q: 'Most common preventable cause of intellectual disability?',
        a: 'Fetal alcohol spectrum disorder (also iodine deficiency globally).',
      },
      {
        q: 'Name two treatable metabolic or endocrine causes.',
        a: 'Congenital hypothyroidism and phenylketonuria.',
      },
      {
        q: 'Which plan supports educational needs in England?',
        a: 'Education, Health and Care (EHC) plan.',
      },
    ],
  },
  immunisation: {
    summary: 'Immunisation is one of the most effective public health interventions, preventing millions of childhood deaths a year. Paediatricians must know the national schedule, the types of vaccine, contraindications and how to respond to adverse events and catch-up needs.',
    objectives: [
      'Describe the principles of active and passive immunisation',
      'Outline the UK routine childhood schedule and the WHO Expanded Programme on Immunization',
      'Identify true contraindications and precautions for vaccines',
      'Manage adverse events, missed vaccines and special groups',
    ],
    sections: [
      {
        h: 'Principles and vaccine types',
        p: [
          'Active immunisation stimulates the immune system to produce antibodies and memory cells. Passive immunisation provides ready-made antibodies (immunoglobulins) for rapid but short-lived protection, for example hepatitis B immunoglobulin to babies of infected mothers or varicella zoster immunoglobulin after exposure in susceptible groups. Herd immunity protects those who cannot be vaccinated when coverage is high enough (about 95 percent for measles).',
        ],
        list: [
          'Live attenuated: BCG, MMR, rotavirus, varicella, oral polio, yellow fever, nasal influenza',
          'Inactivated whole: injectable polio, hepatitis A',
          'Toxoid: diphtheria and tetanus',
          'Subunit/conjugate/recombinant: pertussis (acellular), Haemophilus influenzae b, pneumococcal conjugate, meningococcal ACWY and B, hepatitis B, human papillomavirus',
          'Live vaccines are contraindicated in significant immunosuppression and pregnancy; two live vaccines not given together should be separated by 4 weeks',
        ],
      },
      {
        h: 'UK routine schedule (summary; schedules change, check current national guidance)',
        list: [
          '8 weeks: 6-in-1 (diphtheria, tetanus, pertussis, polio, Hib, hepatitis B), rotavirus, MenB',
          '12 weeks: 6-in-1 (second), pneumococcal conjugate, rotavirus (second)',
          '16 weeks: 6-in-1 (third), MenB (second)',
          '1 year: Hib/MenC booster in some schedules, pneumococcal booster, MMR, MenB booster',
          '2-3 years onwards: annual influenza (nasal) vaccine for eligible children',
          'Around 3 years 4 months: 4-in-1 pre-school booster (diphtheria, tetanus, pertussis, polio) and second MMR',
          'Early adolescence (school year 8-9): HPV and 3-in-1 teenage booster (tetanus, diphtheria, polio); MenACWY',
          'BCG is offered selectively to infants at increased risk of tuberculosis; hepatitis B vaccine to infants of infected mothers at birth',
        ],
      },
      {
        h: 'WHO Expanded Programme on Immunization',
        p: [
          'In resource-limited settings the core schedule includes BCG and oral polio at birth, DTP-HepB-Hib (pentavalent) at 6, 10 and 14 weeks with pneumococcal and rotavirus vaccines, and measles (with rubella) at 9 months and again in the second year. Vitamin A supplementation is often delivered alongside. Strategies include routine clinic delivery, outreach, and supplementary immunisation campaigns. Measles remains a leading cause of vaccine-preventable death, and cold chain integrity is critical.',
        ],
      },
      {
        h: 'Contraindications, precautions and adverse events',
        list: [
          'True contraindications: anaphylaxis to a previous dose or component; live vaccines in severe immunodeficiency or pregnancy',
          'Not contraindications: mild illness without fever, prematurity (vaccinate by chronological age), family history of adverse reaction, allergy to egg in most cases (MMR is safe), breastfeeding, history of jaundice, stable neurological conditions',
          'Common reactions: fever, local redness and swelling, irritability; MMR can cause a mild measles-like illness 6-10 days later; BCG causes a local papule and scar',
          'Rare: anaphylaxis (about 1 per million), febrile convulsions after MMR, intussusception with the first rotavirus dose (very small risk); rotavirus first dose should be given before 15 weeks',
          'There is no link between MMR and autism: this claim has been conclusively refuted',
          'Report suspected reactions via the Yellow Card scheme; anaphylaxis treated with intramuscular adrenaline',
        ],
      },
      {
        h: 'Special groups and catch-up',
        p: [
          'Children with asplenia or hyposplenism need pneumococcal, Hib and meningococcal vaccines and penicillin prophylaxis. Immunocompromised children should receive inactivated vaccines and avoid live ones; household contacts should be fully immunised. Babies of hepatitis B-positive mothers get vaccine and immunoglobulin within 24 hours of birth. Missed doses should be given without restarting the course. Pregnant women are offered pertussis (from 16 weeks) and influenza vaccines to protect newborns.',
        ],
      },
    ],
    keyPoints: [
      'Live vaccines (BCG, MMR, varicella, rotavirus) are contraindicated in severe immunosuppression and pregnancy',
      'Preterm infants are immunised according to chronological age',
      'Minor illness is not a contraindication to vaccination',
      'MMR does not cause autism',
      'Rotavirus vaccine first dose must be given before 15 weeks because of intussusception risk',
      'Do not restart a vaccine course; just continue from where the child left off',
      'Hepatitis B vaccine plus immunoglobulin for babies of hepatitis B surface-antigen positive mothers',
      'Measles vaccine is given at 9 months in high-burden regions and at 12 months in low-burden countries',
    ],
    redFlags: [
      'Anaphylaxis after vaccination - give IM adrenaline 0.01 mg/kg (1:1000) and call for help',
      'Persistent inconsolable crying or hypotonic hyporesponsive episode (report and review)',
      'Fever above 39 C or signs of sepsis after vaccination - do not attribute to the vaccine without assessment',
      'Child on high-dose steroids or chemotherapy offered a live vaccine',
      'Severe local reaction extending beyond joint or lasting more than a few days',
    ],
    mnemonics: [
      {
        name: 'Live vaccines',
        text: 'Remember the list: BCG, MMR, varicella, rotavirus, yellow fever, oral polio and nasal influenza are live',
      },
    ],
    table: {
      title: 'Selected vaccine types',
      headers: [
        'Type',
        'Examples',
        'Key point',
      ],
      rows: [
        [
          'Live attenuated',
          'MMR, BCG, rotavirus, varicella',
          'Avoid in immunodeficiency and pregnancy',
        ],
        [
          'Inactivated',
          'Injectable polio, hepatitis A, rabies',
          'Safe in immunocompromised; may need boosters',
        ],
        [
          'Toxoid',
          'Tetanus, diphtheria',
          'Boosters for sustained protection',
        ],
        [
          'Conjugate polysaccharide',
          'Hib, pneumococcal, MenACWY',
          'Immunogenic in infants',
        ],
        [
          'Recombinant protein',
          'Hepatitis B, HPV, MenB',
          'No live organism',
        ],
      ],
    },
    pearls: [
      'Offer vaccination at every contact; missed opportunities drive outbreaks',
      'Egg allergy is rarely a reason to withhold MMR or flu vaccine; follow current guidance',
      'Preterm babies are at highest risk and should never have vaccines delayed',
    ],
    quiz: [
      {
        q: 'A 10-week-old preterm baby (born at 28 weeks) is due for the 8-week vaccines. What is the correct approach?',
        options: [
          'Delay until corrected term age',
          'Give half doses',
          'Give vaccines according to chronological age',
          'Give only live vaccines',
        ],
        answer: 2,
        why: 'Preterm infants are vaccinated by chronological age because delaying leaves them vulnerable; with very early infants cardiorespiratory monitoring after the first dose may be done.',
      },
      {
        q: 'Which vaccine is contraindicated in a child receiving high-dose chemotherapy?',
        options: [
          'Inactivated influenza',
          'MMR',
          'Pneumococcal conjugate',
          'Tetanus toxoid',
        ],
        answer: 1,
        why: 'MMR is live attenuated and contraindicated in severe immunosuppression. The others are inactivated or toxoid vaccines.',
      },
      {
        q: 'A mother is concerned that MMR may cause autism. What is the best response?',
        options: [
          'Explain that large studies show no link and the risks of measles outweigh any vaccine risks',
          'Agree to defer it until age 5',
          'Offer single vaccines instead',
          'Suggest she avoids vaccination',
        ],
        answer: 0,
        why: 'The link was based on discredited work and refuted by many large studies. Single vaccines leave the child unprotected and are not available.',
      },
      {
        q: 'A baby is born to a mother who is HBsAg and HBeAg positive. What should be given?',
        options: [
          'Hepatitis B vaccine only at 8 weeks',
          'Immunoglobulin only',
          'Hepatitis B vaccine and immunoglobulin within 24 hours',
          'No intervention',
        ],
        answer: 2,
        why: 'Combined active and passive immunisation reduces vertical transmission by about 90 percent.',
      },
      {
        q: 'Which of the following is a true contraindication to vaccination?',
        options: [
          'Mild cold',
          'Prematurity',
          'Previous anaphylaxis to the same vaccine',
          'Family history of febrile convulsions',
        ],
        answer: 2,
        why: 'Anaphylaxis to a previous dose or component is the true contraindication. The other options are not.',
      },
    ],
    cards: [
      {
        q: 'Which type of vaccine is MMR?',
        a: 'Live attenuated.',
      },
      {
        q: 'Cut-off age for the first rotavirus dose?',
        a: 'Before 15 weeks.',
      },
      {
        q: 'Herd immunity threshold for measles?',
        a: 'About 95 percent coverage.',
      },
      {
        q: 'Name the six diseases in the 6-in-1 vaccine.',
        a: 'Diphtheria, tetanus, pertussis, polio, Hib and hepatitis B.',
      },
      {
        q: 'First-line treatment for vaccine anaphylaxis?',
        a: 'Intramuscular adrenaline.',
      },
      {
        q: 'Which vaccine prevents cervical cancer?',
        a: 'HPV vaccine.',
      },
      {
        q: 'WHO schedule: when is measles first given in high-burden areas?',
        a: 'At 9 months.',
      },
      {
        q: 'Should a missed course be restarted?',
        a: 'No, continue from the last dose.',
      },
    ],
  },
  breastfeeding: {
    summary: 'Breast milk is the ideal food for infants, providing nutrition, immune protection and bonding. WHO recommends exclusive breastfeeding for about 6 months followed by complementary foods with continued breastfeeding to 2 years or beyond. Paediatricians need to support lactation, recognise problems and advise on safe alternatives.',
    objectives: [
      'Explain the composition and benefits of breast milk',
      'Describe the recommendations for exclusive breastfeeding and weaning',
      'Identify common breastfeeding problems and rare contraindications',
      'Advise on formula feeding and safe preparation, including in low-resource settings',
    ],
    sections: [
      {
        h: 'Composition and physiology',
        p: [
          'Colostrum (the first few days) is rich in protein, secretory IgA, lactoferrin and white cells, and low in volume. Transitional milk follows, and mature milk from about day 5 provides roughly 70 kcal/100 ml with whey-predominant protein, lactose, long-chain polyunsaturated fatty acids and bioavailable iron and zinc. Foremilk is thinner and hindmilk fattier. Suckling stimulates prolactin (milk production) and oxytocin (let-down), so frequent, effective milk removal drives supply.',
        ],
      },
      {
        h: 'Benefits',
        list: [
          'Infant: fewer gastrointestinal, respiratory and ear infections, lower risk of necrotising enterocolitis in preterm infants, sudden infant death syndrome, atopic disease, type 1 diabetes and later obesity; improved neurodevelopment',
          'Mother: faster uterine involution, lactational amenorrhoea (only reliable if exclusively breastfeeding, baby under 6 months and amenorrhoeic), lower risk of breast and ovarian cancer and type 2 diabetes',
          'Society: lower cost, no contamination risk, environmental benefit',
          'In low-resource settings, exclusive breastfeeding in the first six months reduces infant mortality substantially from diarrhoea and pneumonia',
        ],
      },
      {
        h: 'Establishing breastfeeding',
        p: [
          'Skin-to-skin contact immediately after birth and the first feed within the first hour (the baby friendly approach) improve success. Good attachment - wide gape, chin touching the breast, more areola visible above than below the mouth, rhythmic deep sucks with swallowing - prevents nipple pain. Feed on demand, usually 8-12 times in 24 hours. Adequate intake is shown by 6 or more heavy wet nappies per day by day 5-6, yellow stools by day 5, and weight loss no more than 10 percent with regain by 2 weeks. Vitamin K is given at birth and vitamin D supplementation (about 8.5-10 micrograms daily) is recommended for breastfed infants.',
        ],
      },
      {
        h: 'Problems and contraindications',
        list: [
          'Sore or cracked nipples: usually poor attachment; correct position, treat candida if present',
          'Engorgement and mastitis: continue feeding, express, simple analgesia, antibiotics (flucloxacillin) if mastitis not resolving; breast abscess needs drainage',
          'Perceived low supply: assess feeds, weight and output; increase frequency and skin contact',
          'Tongue-tie (ankyloglossia): consider frenotomy only if feeding is affected',
          'Breastmilk jaundice and breastfeeding jaundice: see neonatal jaundice',
          'Contraindications: infant galactosaemia; maternal HIV in settings with safe replacement feeding (in resource-limited settings WHO supports exclusive breastfeeding with maternal antiretroviral therapy), untreated active tuberculosis (until treated), HTLV-1, maternal chemotherapy or radioactive iodine; illicit drug use',
          'Most maternal drugs are compatible; check the BNF or LactMed; avoid amiodarone, lithium, cytotoxic agents and chloramphenicol',
        ],
      },
      {
        h: 'Formula feeding and weaning',
        p: [
          'Standard whey-dominant formula (about 67 kcal/100 ml) is a safe alternative; follow-on formula is not necessary. Use boiled water cooled to above 70 C, make up each feed fresh to kill organisms, and sterilise bottles. Infants need about 150 ml/kg/day. Cows milk should not be used as a main drink until 12 months. Complementary foods are introduced at around 6 months (not before 4 months) when the baby can sit with support, and should be iron rich, with allergenic foods including peanut and egg introduced early rather than avoided. Honey is avoided under 12 months (botulism risk) and added salt and sugar are avoided.',
        ],
      },
    ],
    keyPoints: [
      'Exclusive breastfeeding for about 6 months, then complementary foods plus breastfeeding to 2 years',
      'Colostrum is rich in IgA and is the first immunisation',
      'Good attachment prevents most nipple pain and low supply',
      'Breastfed infants need vitamin D supplements; babies receiving under 500 ml formula daily too',
      'Contraindicated in infant galactosaemia',
      'In low-resource settings HIV-positive mothers on ART should exclusively breastfeed for 6 months',
      'Cows milk is not a main drink before 12 months; honey is avoided because of botulism',
      'Early introduction of peanut and egg reduces allergy risk in infants',
    ],
    redFlags: [
      'Weight loss over 10 percent of birth weight, or no regain by 2 weeks',
      'Fewer than expected wet nappies, dark urine or persistent pale stools with jaundice',
      'Hypernatraemic dehydration with lethargy in a breastfed neonate',
      'Mastitis with systemic upset or abscess',
      'Maternal drugs incompatible with breastfeeding',
    ],
    mnemonics: [
      {
        name: 'Attachment signs',
        text: 'Wide gape, chin to breast, more areola above than below, deep rhythmic sucks with swallows',
      },
    ],
    table: {
      title: 'Breast milk versus standard infant formula',
      headers: [
        'Feature',
        'Breast milk',
        'Formula',
      ],
      rows: [
        [
          'Protein',
          'Whey-dominant, lower total',
          'Modified cows milk, whey-dominant',
        ],
        [
          'Immune factors',
          'IgA, lactoferrin, cells',
          'None',
        ],
        [
          'Iron',
          'Low content, high absorption',
          'Fortified, lower absorption',
        ],
        [
          'Infection risk',
          'Lower',
          'Contamination risk if made up incorrectly',
        ],
        [
          'Vitamin D',
          'Low; supplement',
          'Adequate if enough volume taken',
        ],
      ],
    },
    pearls: [
      'Observe a full feed before diagnosing low supply',
      'Most maternal medications are safe with breastfeeding; do not stop breastfeeding unnecessarily',
      'Frenotomy rarely needed; target problems with attachment first',
    ],
    quiz: [
      {
        q: 'A breastfeeding mother with HIV in a low-resource setting is on effective antiretroviral therapy. What is the recommended infant feeding?',
        options: [
          'Exclusive breastfeeding for 6 months with ART continued',
          'Avoid breastfeeding entirely',
          'Mixed feeding from birth',
          'Cows milk from birth',
        ],
        answer: 0,
        why: 'WHO recommends exclusive breastfeeding with maternal ART where safe replacement feeding is not available. Mixed feeding increases transmission risk.',
      },
      {
        q: 'Which infant condition is an absolute contraindication to breastfeeding?',
        options: [
          'Cleft lip',
          'Galactosaemia',
          'Prematurity',
          'Neonatal jaundice',
        ],
        answer: 1,
        why: 'Galactose accumulates in galactosaemia because of inability to metabolise lactose; a galactose-free formula is needed.',
      },
      {
        q: 'A 5-day-old exclusively breastfed baby has lost 12 percent of birth weight, is sleepy, jaundiced with sticky mouth and few wet nappies. The most appropriate next step is:',
        options: [
          'Reassure',
          'Stop breastfeeding',
          'Urgent clinical review with sodium, bilirubin and feeding assessment',
          'Add water supplements',
        ],
        answer: 2,
        why: 'This picture suggests inadequate intake with possible hypernatraemic dehydration and jaundice and requires assessment and supported feeding, not stopping breastfeeding.',
      },
      {
        q: 'At what age should complementary foods be introduced?',
        options: [
          '2 months',
          '9 months',
          '12 months',
          'About 6 months',
        ],
        answer: 3,
        why: 'Introduce at around 6 months and not before 4 months. Early introduction of allergenic foods is beneficial.',
      },
      {
        q: 'Which vitamin supplement is recommended for all breastfed infants in the UK?',
        options: [
          'Vitamin D',
          'Vitamin A',
          'Vitamin C',
          'Vitamin E',
        ],
        answer: 0,
        why: 'Breast milk is low in vitamin D; supplement from birth (8.5-10 micrograms daily) and for infants taking under 500 ml formula.',
      },
    ],
    cards: [
      {
        q: 'WHO duration of exclusive breastfeeding?',
        a: 'About 6 months.',
      },
      {
        q: 'Which hormone causes let-down?',
        a: 'Oxytocin.',
      },
      {
        q: 'Which hormone drives milk production?',
        a: 'Prolactin.',
      },
      {
        q: 'What is the commonest cause of nipple pain?',
        a: 'Poor attachment.',
      },
      {
        q: 'Why is honey avoided under 12 months?',
        a: 'Risk of infant botulism.',
      },
      {
        q: 'Maximum acceptable neonatal weight loss?',
        a: 'About 10 percent of birth weight.',
      },
      {
        q: 'Infant contraindication to breastfeeding?',
        a: 'Galactosaemia.',
      },
      {
        q: 'Milk feeding volume goal in infancy?',
        a: 'About 150 ml/kg/day.',
      },
    ],
  },
  sam: {
    summary: 'Severe acute malnutrition (SAM) is defined by severe wasting, nutritional oedema or very low mid-upper arm circumference in children 6-59 months. It remains a major cause of child death worldwide. Kwashiorkor and marasmus are the two classic forms, and modern management is community-based for uncomplicated cases and inpatient stabilisation for complicated cases.',
    objectives: [
      'Define SAM and distinguish marasmus, kwashiorkor and marasmic kwashiorkor',
      'Recognise complications including hypoglycaemia, hypothermia, infection and electrolyte disturbance',
      'Outline the WHO 10-step approach and ready-to-use therapeutic food',
      'Describe prevention of refeeding syndrome and follow-up',
    ],
    sections: [
      {
        h: 'Definition and classification',
        p: [
          'SAM is diagnosed by weight-for-height z-score below -3, mid-upper arm circumference (MUAC) below 11.5 cm, or bilateral pitting oedema in children 6-59 months. Moderate acute malnutrition is a z-score between -2 and -3, or MUAC 11.5-12.5 cm. Marasmus is severe wasting with loss of fat and muscle; kwashiorkor is oedematous malnutrition with relatively preserved fat; marasmic kwashiorkor combines both. Causes are inadequate intake, repeated infection (diarrhoea, measles, HIV, tuberculosis) and poverty, food insecurity and poor maternal education.',
        ],
      },
      {
        h: 'Clinical features',
        list: [
          'Marasmus: wizened old man face, severe muscle and fat wasting, baggy skin folds, alert and irritable, ravenous appetite',
          'Kwashiorkor: pitting oedema (feet, legs, face), apathy and misery, flaky-paint dermatosis, sparse depigmented hair (flag sign), hepatomegaly from fatty liver, anorexia',
          'Hypothermia, hypoglycaemia, dehydration (hard to assess), bradycardia and low blood pressure, signs of infection may be absent',
          'Micronutrient deficiencies: vitamin A (xerophthalmia), iron, zinc, folate, potassium, magnesium; features of cardiac impairment with fluid overload',
        ],
      },
      {
        h: 'Pathophysiology',
        p: [
          'Adaptation to starvation lowers metabolic rate, cardiac output, renal function and gut mucosal integrity, making the child vulnerable to sepsis and overhydration. Total body sodium rises with intracellular potassium and magnesium deficiency. In kwashiorkor oxidative stress, low albumin, and gut barrier loss are thought to contribute to oedema; protein deficiency alone does not explain the syndrome.',
        ],
      },
      {
        h: 'Assessment and management',
        p: [
          'Children with appetite and no complications (alert, good appetite, no medical complication) are treated at home with ready-to-use therapeutic food (RUTF) and weekly review. Children with anorexia, severe oedema, infections, or other danger signs are admitted for stabilisation then rehabilitation. The WHO ten steps are:',
        ],
        list: [
          'Treat or prevent hypoglycaemia: feed 10 percent glucose or sugar water; give IV 10 percent dextrose 5 ml/kg if unconscious',
          'Treat or prevent hypothermia: keep warm with kangaroo care; avoid bathing',
          'Treat or prevent dehydration: use ReSoMal (low sodium, high potassium) orally or by nasogastric tube; IV fluids only in shock, and cautiously (10 ml/kg/h over 2 hours with half-strength Darrow solution or Ringer lactate with 5 percent dextrose)',
          'Correct electrolyte imbalance: potassium and magnesium supplementation; do not give iron in the initial phase',
          'Treat infection: broad-spectrum antibiotics (amoxicillin routinely, gentamicin or ceftriaxone if complicated); measles vaccination; test for HIV and TB',
          'Correct micronutrient deficiencies: vitamin A, folic acid, zinc; iron only after appetite returns',
          'Start cautious feeding: F-75 (75 kcal/100 ml) 130 ml/kg/day divided into 8-12 feeds',
          'Achieve catch-up growth: transition to F-100 or RUTF at about 150-220 kcal/kg/day and protein 4-6 g/kg/day; weight gain over 10 g/kg/day is good',
          'Provide sensory stimulation and emotional support',
          'Prepare for follow-up: immunisation, nutrition education, home visits',
        ],
      },
      {
        h: 'Complications and outcome',
        p: [
          'Refeeding syndrome (hypophosphataemia, hypokalaemia, hypomagnesaemia) can follow rapid feeding and cause cardiac failure. Mortality can reach 10-30 percent in inpatients, mainly from sepsis, dehydration and hypoglycaemia. Long-term sequelae include stunting, cognitive and school performance deficits, and increased adult cardiometabolic risk. Prevention relies on breastfeeding, complementary feeding, vaccination, treatment of diarrhoea with ORS and zinc, vitamin A supplementation, and addressing food insecurity.',
        ],
      },
    ],
    keyPoints: [
      'SAM: weight-for-height below -3 SD, MUAC below 11.5 cm, or bilateral pitting oedema',
      'Kwashiorkor has oedema; marasmus has severe wasting without oedema',
      'Use ReSoMal rather than standard ORS for rehydration; avoid IV fluids unless in shock',
      'Always check for hypoglycaemia and hypothermia on admission',
      'Give antibiotics to all admitted children even when there is no clear infection',
      'Do not give iron in the initial stabilisation phase',
      'F-75 for stabilisation then F-100 or RUTF for catch-up growth',
      'Uncomplicated SAM with good appetite is managed in the community with RUTF',
    ],
    redFlags: [
      'Hypoglycaemia or lethargy, unconsciousness',
      'Hypothermia below 35 C',
      'Severe pallor, signs of shock or sepsis',
      'Heart failure with fluid overload (rapid pulse and respiratory rate, hepatomegaly)',
      'Corneal clouding or ulceration from vitamin A deficiency',
      'Refusal of feeds, persistent vomiting or severe diarrhoea',
    ],
    mnemonics: [
      {
        name: 'WHO key priorities',
        text: 'Hypoglycaemia, Hypothermia, Hydration, Electrolytes, Infection, Micronutrients, Feed: treat these in order of urgency',
      },
    ],
    table: {
      title: 'Kwashiorkor versus marasmus',
      headers: [
        'Feature',
        'Kwashiorkor',
        'Marasmus',
      ],
      rows: [
        [
          'Oedema',
          'Present, pitting',
          'Absent',
        ],
        [
          'Subcutaneous fat',
          'Relatively preserved',
          'Absent',
        ],
        [
          'Skin and hair',
          'Flaky-paint dermatosis, flag sign',
          'Dry, wrinkled',
        ],
        [
          'Mood',
          'Apathetic, miserable',
          'Alert, irritable',
        ],
        [
          'Liver',
          'Enlarged (fatty)',
          'Normal',
        ],
        [
          'Appetite',
          'Poor',
          'Often good',
        ],
      ],
    },
    drugs: [
      {
        name: 'Amoxicillin',
        dose: '25-30 mg/kg twice daily PO for 5-7 days (routine in uncomplicated SAM)',
        note: 'Add gentamicin or use ceftriaxone for complicated cases',
      },
      {
        name: 'Vitamin A',
        dose: '50,000 IU (under 6 months), 100,000 IU (6-11 months) or 200,000 IU (12 months and over) PO on day 1',
        note: 'Per WHO SAM protocol; check local guidance on repeating doses',
      },
      {
        name: 'Zinc',
        dose: '2 mg/kg/day',
        note: 'Part of the micronutrient mix',
      },
    ],
    pearls: [
      'Do not rely on clinical signs of dehydration in SAM; a history of watery diarrhoea is more reliable',
      'Oedema may mask weight loss; weight gain during treatment initially reflects oedema loss',
      'Check for HIV and TB in all children with SAM in endemic settings',
    ],
    quiz: [
      {
        q: 'A 2-year-old in a refugee camp has bilateral pitting pedal oedema, sparse hair and flaky skin lesions. Which diagnosis?',
        options: [
          'Marasmus',
          'Nephrotic syndrome only',
          'Rickets',
          'Kwashiorkor',
        ],
        answer: 3,
        why: 'Oedema with skin and hair changes and apathy is typical of kwashiorkor (although nephrotic syndrome should be considered where urine tests are available).',
      },
      {
        q: 'What is the preferred oral rehydration solution in a child with SAM and dehydration?',
        options: [
          'Standard WHO ORS',
          'Plain water',
          'Fruit juice',
          'ReSoMal',
        ],
        answer: 3,
        why: 'ReSoMal has lower sodium and higher potassium than standard ORS because of body sodium overload and potassium depletion.',
      },
      {
        q: 'Which MUAC value defines severe acute malnutrition in a child aged 6-59 months?',
        options: [
          'Below 11.5 cm',
          'Below 14.5 cm',
          'Below 13.5 cm',
          'Below 12.5 cm',
        ],
        answer: 0,
        why: 'MUAC below 11.5 cm indicates SAM; 11.5-12.5 cm is moderate acute malnutrition.',
      },
      {
        q: 'An unconscious child with SAM has blood glucose 1.8 mmol/L. What should be given?',
        options: [
          'Oral ReSoMal',
          'IV 10 percent dextrose 5 ml/kg',
          'Iron supplements',
          'F-100',
        ],
        answer: 1,
        why: 'Unconscious hypoglycaemic children need IV glucose and then frequent feeds. Iron is avoided initially; F-100 is for rehabilitation.',
      },
      {
        q: 'Which supplement is delayed until the rehabilitation phase of SAM management?',
        options: [
          'Vitamin A',
          'Zinc',
          'Folic acid',
          'Iron',
        ],
        answer: 3,
        why: 'Iron may promote bacterial growth and oxidative damage in the initial phase; give once appetite has returned and infection is controlled.',
      },
    ],
    cards: [
      {
        q: 'WFH z-score defining SAM?',
        a: 'Below -3 SD.',
      },
      {
        q: 'MUAC cut-off for SAM (6-59 months)?',
        a: 'Below 11.5 cm.',
      },
      {
        q: 'What is ReSoMal?',
        a: 'Rehydration solution for malnutrition: low sodium, high potassium.',
      },
      {
        q: 'Energy content of F-75?',
        a: '75 kcal/100 ml.',
      },
      {
        q: 'Signs of kwashiorkor?',
        a: 'Pitting oedema, flaky-paint dermatosis, sparse hair, hepatomegaly, apathy.',
      },
      {
        q: 'Most common cause of death in SAM inpatients?',
        a: 'Sepsis, dehydration and hypoglycaemia.',
      },
      {
        q: 'What does RUTF stand for?',
        a: 'Ready-to-use therapeutic food.',
      },
      {
        q: 'Refeeding syndrome electrolyte features?',
        a: 'Low phosphate, potassium and magnesium.',
      },
    ],
  },
  micronutrients: {
    summary: 'Micronutrient deficiencies cause a large burden of disease worldwide. Vitamin D deficiency produces rickets, vitamin A deficiency causes blindness and increases infectious mortality, and iron deficiency is the most common cause of anaemia in children. Prevention through diet, supplementation and fortification is highly effective.',
    objectives: [
      'Describe the causes, clinical features and biochemistry of rickets and its management',
      'Explain the effects of vitamin A deficiency and the supplementation schedule',
      'Recognise and manage iron deficiency anaemia in childhood',
      'Identify other important deficiencies (zinc, iodine, vitamin B12, folate, vitamin K, vitamin C)',
    ],
    sections: [
      {
        h: 'Rickets and vitamin D',
        p: [
          'Rickets is defective mineralisation of growing bone and cartilage at the growth plate, most commonly from vitamin D deficiency, which arises from low sun exposure, dark skin, covered clothing, prolonged exclusive breastfeeding without supplements, and maternal deficiency. Other causes are dietary calcium deficiency (Africa and Asia), malabsorption, chronic kidney disease, and hereditary hypophosphataemic rickets (X-linked dominant PHEX mutation, vitamin D resistant). Vitamin D is obtained from skin synthesis and diet, hydroxylated in liver (25-OH) and kidney (1,25-dihydroxy).',
          'Presentation is in infancy and toddlerhood with delayed walking, bone pain, bowed legs or knock knees, swelling of the wrists and knees, rachitic rosary (costochondral junction), Harrison sulcus, craniotabes, delayed fontanelle closure and tooth eruption, hypocalcaemic tetany or seizures in infants, and short stature. Investigations show low or normal calcium, low phosphate, raised alkaline phosphatase and parathyroid hormone, and low 25-hydroxyvitamin D. X-ray shows widening, cupping and fraying of metaphyses, usually at the wrist and knee.',
        ],
      },
      {
        h: 'Rickets treatment',
        list: [
          'Nutritional rickets: oral cholecalciferol (vitamin D3) 3,000-6,000 IU daily (or 150,000-300,000 IU single stat/Stoss doses in some protocols) for 8-12 weeks followed by maintenance 400-600 IU daily; ensure calcium intake',
          'Treat hypocalcaemia first if symptomatic: IV calcium gluconate 10 percent 0.3 ml/kg slowly with ECG monitoring',
          'Hypophosphataemic rickets: oral phosphate and alfacalcidol, or burosumab (anti-FGF23); vitamin D alone is ineffective',
          'Prevention: daily vitamin D supplement for infants and at-risk children; maternal supplementation in pregnancy; sun exposure and fortification',
        ],
      },
      {
        h: 'Vitamin A deficiency',
        p: [
          'Vitamin A deficiency causes xerophthalmia: night blindness, conjunctival xerosis with Bitot spots, corneal xerosis, ulceration and keratomalacia, a leading cause of preventable childhood blindness. It also impairs immunity and increases mortality from measles, diarrhoea and pneumonia. Risk groups are malnourished children, those with measles, fat malabsorption and poor diets. Treatment of clinical deficiency and measles is with high-dose vitamin A given on days 1 and 2, with a third dose 2-4 weeks later if clinical signs of deficiency (50,000 IU under 6 months, 100,000 IU 6-11 months, 200,000 IU 12 months and over). Preventive supplementation every 4-6 months for children aged 6-59 months in high-prevalence regions reduces all-cause mortality. Avoid high doses in pregnancy (teratogenic).',
        ],
      },
      {
        h: 'Iron deficiency anaemia',
        p: [
          'Iron deficiency is the commonest childhood nutritional deficiency, caused by low dietary intake (cows milk in excess, delayed weaning, vegetarian diet), prematurity, rapid growth, blood loss (hookworm, menstruation, gastrointestinal) and malabsorption (coeliac). Features include pallor, irritability, fatigue, poor appetite, pica, koilonychia, tachycardia, flow murmur and developmental effects. Blood tests show microcytic hypochromic anaemia with low ferritin and high TIBC; ferritin can be falsely normal in inflammation. Treat with oral ferrous sulphate 2-3 mg/kg/day of elemental iron in divided doses until Hb normal then for 3 months to replenish stores; expect Hb to rise by about 2 g/dl within 2-4 weeks. Failure to respond suggests non-compliance, ongoing loss, wrong diagnosis (thalassaemia trait) or malabsorption.',
        ],
      },
      {
        h: 'Other deficiencies',
        list: [
          'Zinc: acrodermatitis enteropathica, growth failure, diarrhoea; zinc 20 mg daily for 10-14 days reduces diarrhoea duration and recurrence',
          'Iodine: congenital hypothyroidism, goitre, cretinism; prevented by salt iodisation',
          'Vitamin B12 and folate: megaloblastic anaemia; B12 deficiency from vegan diet, pernicious anaemia, ileal disease; folic acid before pregnancy prevents neural tube defects',
          'Vitamin K: haemorrhagic disease of the newborn; prevented by intramuscular vitamin K at birth',
          'Vitamin C (scurvy): irritable child, gum bleeding, subperiosteal haemorrhages and pseudoparalysis; seen in restrictive diets and autism',
          'Thiamine (beriberi), niacin (pellagra), vitamin E and others seen in specific settings',
        ],
      },
    ],
    keyPoints: [
      'Rickets: low phosphate, raised ALP, wide cupped metaphyses; treat with vitamin D and calcium',
      'Hypophosphataemic rickets is vitamin D resistant and treated with phosphate plus active vitamin D',
      'Vitamin A deficiency causes night blindness, Bitot spots and keratomalacia',
      'Give vitamin A to children with measles',
      'Iron deficiency anaemia: microcytic, low ferritin; oral iron for 3 months after Hb normalises',
      'Excess cows milk (over 500 ml daily) in toddlers is a common cause of iron deficiency',
      'Scurvy presents with painful limbs and bleeding gums',
      'Vitamin K at birth prevents haemorrhagic disease of the newborn',
    ],
    redFlags: [
      'Hypocalcaemic seizures or tetany in an infant',
      'Corneal clouding or ulceration in a malnourished or measles child',
      'Severe anaemia with heart failure (Hb below 5 g/dl)',
      'Bone deformity, fractures or severe short stature in rickets',
      'Failure to respond to adequate oral iron',
    ],
    mnemonics: [
      {
        name: 'Rickets signs',
        text: 'Rosary (rachitic), wide wrists, bowed legs, Harrison sulcus, craniotabes, delayed teeth',
      },
    ],
    table: {
      title: 'Biochemistry in rickets',
      headers: [
        'Type',
        'Calcium',
        'Phosphate',
        'ALP',
        'PTH',
      ],
      rows: [
        [
          'Vitamin D deficiency',
          'Low or normal',
          'Low',
          'High',
          'High',
        ],
        [
          'Hypophosphataemic (X-linked)',
          'Normal',
          'Very low',
          'High',
          'Normal or mildly high',
        ],
        [
          'Calcium deficiency',
          'Low or normal',
          'Low/normal',
          'High',
          'High',
        ],
        [
          'Renal osteodystrophy',
          'Low',
          'High',
          'High',
          'High',
        ],
      ],
    },
    drugs: [
      {
        name: 'Ferrous sulphate (elemental iron)',
        dose: '2-3 mg/kg/day in divided doses',
        note: 'Continue 3 months after Hb normalises; warn about dark stools',
      },
      {
        name: 'Cholecalciferol',
        dose: 'Preventive 400 IU (10 micrograms) daily; treatment per local protocol as above',
        note: 'Check calcium and ensure dietary calcium',
      },
      {
        name: 'Vitamin A',
        dose: '200,000 IU PO over 12 months (100,000 IU for 6-11 months; 50,000 IU under 6 months) on days 1 and 2 (third dose 2-4 weeks later if eye signs) for xerophthalmia/measles',
        note: 'Avoid high doses in pregnancy',
      },
    ],
    pearls: [
      'Elevated alkaline phosphatase in an infant with wide wrists is rickets until proven otherwise',
      'Check ferritin together with CRP; a low ferritin is diagnostic, a normal one does not exclude deficiency in inflammation',
      'Toddlers drinking a litre of cows milk often have iron deficiency and constipation',
    ],
    quiz: [
      {
        q: 'A 14-month-old exclusively breastfed child of a veiled mother is bow-legged with widened wrists. Labs: Ca low-normal, phosphate low, ALP markedly raised. Best treatment?',
        options: [
          'Phosphate alone',
          'Vitamin D with calcium',
          'Iron',
          'Growth hormone',
        ],
        answer: 1,
        why: 'This is nutritional rickets. Treat with vitamin D and adequate calcium; phosphate is for hypophosphataemic forms.',
      },
      {
        q: 'Which is the first sign of vitamin A deficiency?',
        options: [
          'Night blindness',
          'Bitot spots',
          'Keratomalacia',
          'Corneal scarring',
        ],
        answer: 0,
        why: 'Night blindness (nyctalopia) is the earliest functional sign; Bitot spots and keratomalacia follow.',
      },
      {
        q: 'A 20-month-old drinks 1 litre of cows milk daily, is pale and irritable. Hb 7.5 g/dl, MCV 58 fl. Most likely cause?',
        options: [
          'Sickle cell disease',
          'Folate deficiency',
          'Iron deficiency',
          'Aplastic anaemia',
        ],
        answer: 2,
        why: 'Microcytic anaemia with excess cows milk is classic iron deficiency; cows milk is low in iron, causes occult gut loss and displaces iron-rich food.',
      },
      {
        q: 'A boy has persistent rickets despite vitamin D; phosphate is very low, calcium normal and his father has short stature and bowed legs. Likely diagnosis?',
        options: [
          'Nutritional rickets',
          'Hypoparathyroidism',
          'X-linked hypophosphataemic rickets',
          'Fanconi syndrome only',
        ],
        answer: 2,
        why: 'Vitamin D resistant rickets with low phosphate and X-linked dominant family pattern is XLH (PHEX).',
      },
      {
        q: 'Which treatment applies to a child with measles in a vitamin A deficient region?',
        options: [
          'Single dose vitamin C',
          'Vitamin A on 2 consecutive days',
          'Oral iron',
          'Zinc only',
        ],
        answer: 1,
        why: 'WHO recommends age-appropriate vitamin A on two consecutive days (and a third dose 2-4 weeks later if signs of deficiency) for children with measles.',
      },
    ],
    cards: [
      {
        q: 'Biochemical hallmark of rickets?',
        a: 'Raised alkaline phosphatase with low phosphate (and low or normal calcium).',
      },
      {
        q: 'Cause of X-linked hypophosphataemic rickets?',
        a: 'PHEX mutation causing raised FGF23.',
      },
      {
        q: 'Earliest feature of vitamin A deficiency?',
        a: 'Night blindness.',
      },
      {
        q: 'What is a Bitot spot?',
        a: 'Foamy white conjunctival patch from xerosis in vitamin A deficiency.',
      },
      {
        q: 'Typical oral iron dose?',
        a: '2-3 mg/kg/day elemental iron.',
      },
      {
        q: 'Which vitamin deficiency causes scurvy?',
        a: 'Vitamin C.',
      },
      {
        q: 'How long should iron be continued after Hb normalises?',
        a: 'About 3 months.',
      },
      {
        q: 'Which zinc regimen is used for diarrhoea?',
        a: '20 mg daily for 10-14 days (10 mg under 6 months).',
      },
    ],
  },
  'obesity-ftt': {
    summary: 'Obesity and faltering growth lie at opposite ends of the weight spectrum. Childhood obesity is rising worldwide and causes metabolic, orthopaedic, psychosocial and cardiovascular complications. Faltering growth (failure to thrive) describes inadequate weight gain in early life, most often from insufficient calories, and requires a structured search for organic and social causes.',
    objectives: [
      'Define obesity and identify organic and complication screening in obese children',
      'Outline lifestyle-based management of childhood obesity',
      'Define faltering growth and classify the causes',
      'Plan the assessment and management of an infant with faltering growth',
    ],
    sections: [
      {
        h: 'Obesity: definition and causes',
        p: [
          'In UK practice, overweight is BMI at or above the 91st centile and obesity at or above the 98th centile for age and sex; severe obesity is at or above 99.6th. WHO uses BMI z-scores (obese above +2 SD for age 5-19). Most obesity is simple (exogenous) from positive energy balance combined with genetic susceptibility, sedentary behaviour, large portion sizes and sugary drinks, parental obesity and low socioeconomic status.',
          'Pathological causes are rare but important: hypothyroidism, Cushing syndrome, growth hormone deficiency, hypothalamic damage, Prader-Willi syndrome, Bardet-Biedl syndrome, leptin or melanocortin-4 receptor defects. Clues are short stature or poor growth velocity (simple obesity usually has tall stature), early onset under 2-3 years, developmental delay, dysmorphic features, hyperphagia and visual or other organ problems.',
        ],
      },
      {
        h: 'Complications and assessment',
        list: [
          'Metabolic: insulin resistance, type 2 diabetes (acanthosis nigricans), dyslipidaemia, metabolic-associated fatty liver disease',
          'Cardiovascular: hypertension; later coronary disease',
          'Respiratory: obstructive sleep apnoea, asthma',
          'Orthopaedic: slipped upper femoral epiphysis, Blount disease, knee pain',
          'Endocrine: early puberty in girls, polycystic ovary syndrome; boys may appear to have a small penis because of a suprapubic fat pad',
          'Neurological: idiopathic intracranial hypertension',
          'Psychosocial: bullying, low self-esteem, depression, eating disorders',
          'Assess: BMI centile, blood pressure, waist circumference; fasting glucose or HbA1c, lipids and ALT in higher-risk children; sleep history',
        ],
      },
      {
        h: 'Obesity management',
        p: [
          'Management is family-based and multicomponent: dietary change (regular meals, avoiding sugar-sweetened drinks, portion control), increased activity (60 minutes daily) and reduced screen time, and behavioural support. Aim for weight maintenance in young children while they grow into their weight, and weight loss in older severe cases. Treat complications. Pharmacotherapy (orlistat, GLP-1 receptor agonists such as liraglutide or semaglutide in adolescents) and bariatric surgery are reserved for severe cases in specialist services. Prevention includes promoting breastfeeding and healthy school and community environments.',
        ],
      },
      {
        h: 'Faltering growth: definition and causes',
        p: [
          'Faltering growth means weight gain slower than expected for age, usually crossing two or more major centile lines downward or weight below the 2nd centile. The commonest cause worldwide is inadequate caloric intake from poor feeding practice, poverty or neglect (non-organic); organic disease is found in a minority. Causes are grouped as inadequate intake (breastfeeding problems, poor technique, restrictive feeding, cleft palate, neurological dysphagia), inadequate absorption (coeliac disease, cystic fibrosis, cows milk protein allergy, short gut), increased requirements or losses (congenital heart disease, chronic lung disease, chronic infection including HIV and tuberculosis, renal tubular acidosis, diabetes, hyperthyroidism, vomiting and reflux), and failure of utilisation (metabolic and genetic disease).',
        ],
      },
      {
        h: 'Assessment and management of faltering growth',
        list: [
          'History: pregnancy and birth, feeding (volume, type, mealtime behaviour), vomiting, stools, respiratory symptoms, developmental progress, family growth patterns, social and psychological situation',
          'Examination: plot weight, length, head circumference and weight-for-length; look for dysmorphism, pallor, clubbing, heart murmur, hepatosplenomegaly, signs of neglect',
          'Observe a feed and the parent-child interaction; a food diary is helpful',
          'First-line tests only if indicated by findings: urinalysis and culture, full blood count, ferritin, urea and electrolytes, coeliac serology, thyroid function; sweat test, HIV, stool studies by history',
          'Management: treat the underlying cause; dietitian-led energy fortification (e.g. 120-150 kcal/kg/day target); feeding advice and behavioural support; multidisciplinary involvement (health visitor, social work); admission for observation and supervised feeding if needed or if neglect suspected',
          'Monitor weight regularly; most children respond to adequate calories (catch-up growth)',
        ],
      },
    ],
    keyPoints: [
      'UK obesity definition: BMI at or above the 98th centile',
      'Simple obesity is usually accompanied by tall stature; short stature suggests an endocrine or genetic cause',
      'Slipped upper femoral epiphysis presents with hip or knee pain in obese adolescents',
      'Faltering growth is usually due to insufficient calories; organic causes are in the minority',
      'Observe a feed; many cases are diagnosed by watching mealtime interaction',
      'Coeliac disease, cystic fibrosis and cows milk protein allergy are leading organic causes',
      'Catch-up growth after an adequate diet confirms non-organic faltering growth',
      'Acanthosis nigricans signals insulin resistance',
    ],
    redFlags: [
      'Obesity with short stature or poor growth velocity',
      'Hip or knee pain with limp in an obese adolescent (SUFE)',
      'Headache with visual blurring (idiopathic intracranial hypertension)',
      'Faltering growth with vomiting, diarrhoea or respiratory symptoms suggesting organic disease',
      'Suspected neglect or signs of non-accidental injury',
      'Weight loss in an adolescent suggesting an eating disorder or serious illness',
    ],
    mnemonics: [
      {
        name: 'Causes of faltering growth',
        text: 'Intake, absorption, utilisation, losses/requirements - think "Not enough in, not absorbed, lost, or used up"',
      },
    ],
    table: {
      title: 'Simple versus pathological obesity',
      headers: [
        'Feature',
        'Simple',
        'Pathological',
      ],
      rows: [
        [
          'Height',
          'Normal or tall',
          'Short or falling centiles',
        ],
        [
          'Onset',
          'Gradual, school age',
          'Early, under 2-3 years',
        ],
        [
          'Development',
          'Normal',
          'Delayed or dysmorphic',
        ],
        [
          'Examples',
          'Positive energy balance',
          'Hypothyroidism, Cushing, Prader-Willi',
        ],
        [
          'Bone age',
          'Advanced',
          'Delayed',
        ],
      ],
    },
    pearls: [
      'Do not stigmatise: use neutral language and focus on family health',
      'Order thyroid tests only if short or slow growth; most obese children have normal thyroid function with a mildly raised TSH',
      'A child who gains rapidly after admission and a diet is unlikely to have an organic cause',
    ],
    quiz: [
      {
        q: 'A 12-year-old obese boy presents with 2 weeks of knee pain and limp, with restricted hip internal rotation. The diagnosis is:',
        options: [
          'Perthes disease',
          'Slipped upper femoral epiphysis',
          'Septic arthritis',
          'Osgood-Schlatter disease',
        ],
        answer: 1,
        why: 'Hip pathology refers pain to the knee; SUFE occurs in obese adolescents with restricted internal rotation, and a frog-leg lateral X-ray is diagnostic.',
      },
      {
        q: 'A 4-year-old obese girl is short (below 2nd centile) with a slow growth velocity. Which test is most appropriate?',
        options: [
          'Liver ultrasound',
          'No tests needed',
          'Thyroid function and cortisol assessment',
          'Fasting lipids only',
        ],
        answer: 2,
        why: 'Obesity with growth failure suggests hypothyroidism or Cushing syndrome, hence endocrine tests.',
      },
      {
        q: 'In faltering growth, the most common cause worldwide is:',
        options: [
          'Cystic fibrosis',
          'Congenital heart disease',
          'Coeliac disease',
          'Insufficient calorie intake',
        ],
        answer: 3,
        why: 'Inadequate intake from feeding practice, poverty or neglect accounts for most cases.',
      },
      {
        q: 'Which investigation is first-line in an infant with faltering growth and loose stools after weaning to wheat?',
        options: [
          'Tissue transglutaminase IgA with total IgA',
          'Sweat test',
          'Stool culture only',
          'Barium meal',
        ],
        answer: 0,
        why: 'Coeliac serology with total IgA is first-line. A sweat test is considered if respiratory features or steatorrhoea suggest cystic fibrosis.',
      },
      {
        q: 'Which is the cornerstone of childhood obesity management?',
        options: [
          'Orlistat',
          'Family-based lifestyle intervention',
          'Bariatric surgery',
          'Very-low-calorie diets',
        ],
        answer: 1,
        why: 'Drugs and surgery are reserved for severe, specialist cases; lifestyle change involving the family is first-line.',
      },
    ],
    cards: [
      {
        q: 'UK BMI centile for obesity?',
        a: 'At or above the 98th centile.',
      },
      {
        q: 'Which obese adolescent presents with knee pain and limp?',
        a: 'Slipped upper femoral epiphysis.',
      },
      {
        q: 'Skin sign of insulin resistance?',
        a: 'Acanthosis nigricans.',
      },
      {
        q: 'Commonest cause of faltering growth?',
        a: 'Inadequate caloric intake.',
      },
      {
        q: 'Name three organic causes of faltering growth.',
        a: 'Coeliac disease, cystic fibrosis, congenital heart disease (also cows milk protein allergy, HIV).',
      },
      {
        q: 'Growth pattern of simple obesity?',
        a: 'Tall or normal height with advanced bone age.',
      },
      {
        q: 'Which syndrome has hyperphagia and hypotonic infancy?',
        a: 'Prader-Willi syndrome.',
      },
      {
        q: 'Daily activity recommended for children?',
        a: 'At least 60 minutes of moderate to vigorous activity.',
      },
    ],
  },
  'adolescent-puberty': {
    summary: 'Puberty is the period of sexual maturation and growth acceleration that transforms child to adult, driven by activation of the hypothalamic-pituitary-gonadal axis. Paediatricians must know the normal sequence and timing, recognise early and delayed puberty, and provide confidential adolescent healthcare covering mental health, risk-taking and sexual health.',
    objectives: [
      'Describe Tanner staging and the normal sequence of pubertal events in boys and girls',
      'Distinguish precocious puberty (central vs peripheral) from normal variants',
      'Evaluate delayed puberty, including constitutional delay and pathological causes',
      'Outline principles of confidential adolescent consultation and common health issues',
    ],
    sections: [
      {
        h: 'Physiology and Tanner staging',
        p: [
          'Puberty begins with pulsatile gonadotropin-releasing hormone secretion, increasing LH and FSH, then gonadal sex steroids. Adrenarche (adrenal androgen rise, pubic and axillary hair, body odour) is a separate process from gonadarche. Tanner staging describes breast (girls), genital (boys) and pubic hair development in five stages. In girls, the first sign is breast budding (thelarche, Tanner 2) at a mean of about 10-11 years, followed by pubic hair, peak height velocity (early in puberty), and menarche about 2-2.5 years after thelarche (mean about 12.5-13 years). In boys, the first sign is testicular enlargement (volume 4 ml or more) at about 11.5-12 years, peak height velocity occurs later (Tanner 3-4), with voice breaking and spermarche.',
        ],
      },
      {
        h: 'Precocious puberty',
        p: [
          'Precocious puberty is secondary sexual development before 8 years in girls and 9 years in boys. Central (gonadotropin-dependent) puberty follows early HPG axis activation; it is idiopathic in most girls but more likely to have a CNS cause in boys (tumours such as hypothalamic hamartoma, hydrocephalus, cranial irradiation, neurofibromatosis). Peripheral (gonadotropin-independent) causes include congenital adrenal hyperplasia, adrenal or gonadal tumours, McCune-Albright syndrome (cafe-au-lait spots, fibrous dysplasia, ovarian cysts), testotoxicosis and exogenous sex steroids. Isolated premature thelarche and premature adrenarche are benign variants.',
          'Assessment includes growth velocity, bone age (advanced), pelvic ultrasound, LH and FSH (basal or GnRH stimulation), sex steroids and 17-hydroxyprogesterone, and MRI brain in boys and young girls. Central precocity is treated with GnRH analogues (e.g. leuprorelin, triptorelin) to preserve adult height; peripheral causes are treated by addressing the cause.',
        ],
      },
      {
        h: 'Delayed puberty',
        list: [
          'Definition: no breast development by 13 years in girls or no testicular enlargement by 14 years in boys, or more than 5 years between first signs and menarche/complete genital development',
          'Constitutional delay of growth and puberty (commonest, mainly boys): family history, delayed bone age, normal prepubertal growth then late catch-up; treat with reassurance or a short course of low-dose testosterone if distressed',
          'Hypogonadotropic hypogonadism: functional (chronic disease, coeliac, inflammatory bowel disease, anorexia nervosa, excessive exercise), hypopituitarism, craniopharyngioma, Kallmann syndrome (anosmia), Prader-Willi',
          'Hypergonadotropic hypogonadism: Turner syndrome (girls), Klinefelter syndrome (boys), gonadal damage from chemotherapy or radiation, autoimmune oophoritis',
          'Investigations: bone age, LH, FSH, oestradiol or testosterone, thyroid function, prolactin, coeliac screen, karyotype in girls, MRI as indicated',
        ],
      },
      {
        h: 'Adolescent health',
        p: [
          'Adolescents (10-19 years) face distinct health needs: mental health disorders (depression, anxiety, self-harm, eating disorders), substance use, sexual health (contraception, sexually transmitted infections, consent), chronic illness adherence, transition to adult services, and injury, which is the leading cause of death. Use the HEADSS approach, offer time alone, explain confidentiality and its limits, and assess competence (Gillick/Fraser). Adolescents should be given a safe and respectful environment and can consent to contraception when competent. Safeguarding concerns (sexual exploitation, abuse, exploitation) override confidentiality. Menstrual problems, acne, gynaecomastia (common and transient in pubertal boys), scoliosis and body image are frequent issues. Vaccines in this age range include HPV, tetanus-diphtheria-polio booster and meningococcal ACWY.',
        ],
      },
    ],
    keyPoints: [
      'Girls: breast bud is the first sign (Tanner 2), menarche about 2 years later',
      'Boys: testicular volume of 4 ml or more is the first sign of puberty',
      'Precocious puberty: before 8 years in girls and 9 years in boys',
      'Peak height velocity is early in girls and mid-late in boys',
      'Constitutional delay is the commonest cause of delayed puberty in boys',
      'Delayed puberty with anosmia suggests Kallmann syndrome',
      'Central precocious puberty is treated with GnRH analogues',
      'Gynaecomastia in pubertal boys is common and usually self-limiting',
    ],
    redFlags: [
      'Precocious puberty in a boy (high chance of CNS or testicular pathology)',
      'Headache, visual field defects or growth failure with pubertal delay',
      'Primary amenorrhoea with short stature (Turner syndrome) or absent breast development at 13 years',
      'Hard unilateral testicular mass with early virilisation',
      'Disclosure of self-harm, abuse, sexual exploitation or suicidal ideation',
      'Weight loss and amenorrhoea suggesting anorexia nervosa',
    ],
    mnemonics: [
      {
        name: 'HEADSS',
        text: 'Home, Education, Activities, Drugs, Sexuality, Suicide - screening tool for adolescent psychosocial history',
      },
    ],
    table: {
      title: 'Central versus peripheral precocious puberty',
      headers: [
        'Feature',
        'Central',
        'Peripheral',
      ],
      rows: [
        [
          'Mechanism',
          'Early HPG axis activation',
          'Sex steroids from outside axis',
        ],
        [
          'LH/FSH',
          'Raised (pubertal)',
          'Suppressed',
        ],
        [
          'Testicular size (boys)',
          'Enlarged',
          'Prepubertal (except testotoxicosis)',
        ],
        [
          'Common causes',
          'Idiopathic (girls), CNS lesion',
          'CAH, tumours, McCune-Albright',
        ],
        [
          'Treatment',
          'GnRH analogue',
          'Treat cause',
        ],
      ],
    },
    drugs: [
      {
        name: 'Triptorelin or leuprorelin (GnRH analogue)',
        dose: 'Depot injection every 1-3 months per specialist protocol',
        note: 'For central precocious puberty; endocrine-led',
      },
      {
        name: 'Testosterone (low dose)',
        dose: 'Short course for constitutional delay under specialist supervision',
        note: 'Monitor bone age and growth',
      },
    ],
    pearls: [
      'Plot bone age; advanced bone age with fast growth indicates precocious pubertal activity',
      'In boys with precocious puberty, always scan the brain; in most girls it is idiopathic',
      'Establish the order of events; abnormal sequence (e.g. no breast development but pubic hair) suggests pathology such as androgen insensitivity',
    ],
    quiz: [
      {
        q: 'What is normally the first sign of puberty in a girl?',
        options: [
          'Pubic hair',
          'Menarche',
          'Growth spurt',
          'Breast budding',
        ],
        answer: 3,
        why: 'Thelarche (Tanner 2 breast) is first; menarche is a late event about 2 years later.',
      },
      {
        q: 'A 15-year-old boy has no testicular enlargement, delayed bone age (12 years), and a father who had late puberty. The most likely diagnosis:',
        options: [
          'Constitutional delay',
          'Klinefelter syndrome',
          'Kallmann syndrome',
          'Hypopituitarism',
        ],
        answer: 0,
        why: 'Normal prepubertal growth, delayed bone age and positive family history point to constitutional delay.',
      },
      {
        q: 'A 6-year-old girl has breast development, pubic hair and a growth spurt; LH is elevated with advanced bone age. Management?',
        options: [
          'Reassure',
          'GnRH analogue after excluding CNS pathology',
          'Oestrogen',
          'Surgery',
        ],
        answer: 1,
        why: 'This is central precocious puberty, treated with a GnRH analogue to preserve adult height after imaging for CNS lesions.',
      },
      {
        q: 'McCune-Albright syndrome features include:',
        options: [
          'Anosmia and delayed puberty',
          'Webbed neck and short stature',
          'Hypotonia and hyperphagia',
          'Cafe-au-lait spots, polyostotic fibrous dysplasia, endocrine hyperfunction',
        ],
        answer: 3,
        why: 'The triad of cafe-au-lait macules, fibrous dysplasia and autonomous endocrine hyperfunction (precocious puberty) characterises McCune-Albright.',
      },
      {
        q: 'A 16-year-old girl has primary amenorrhoea, short stature and absent breast development. Which test is most appropriate?',
        options: [
          'MRI pituitary only',
          'Sweat test',
          'Thyroid antibodies only',
          'Karyotype',
        ],
        answer: 3,
        why: 'Hypergonadotropic hypogonadism with short stature suggests Turner syndrome; karyotype confirms.',
      },
    ],
    cards: [
      {
        q: 'First sign of puberty in boys?',
        a: 'Testicular volume of 4 ml or more.',
      },
      {
        q: 'Definition of precocious puberty?',
        a: 'Before 8 years in girls, before 9 years in boys.',
      },
      {
        q: 'Commonest cause of delayed puberty in boys?',
        a: 'Constitutional delay of growth and puberty.',
      },
      {
        q: 'Which syndrome combines delayed puberty and anosmia?',
        a: 'Kallmann syndrome.',
      },
      {
        q: 'Treatment of central precocious puberty?',
        a: 'GnRH analogue.',
      },
      {
        q: 'Typical interval between thelarche and menarche?',
        a: 'About 2 to 2.5 years.',
      },
      {
        q: 'What does HEADSS screen for?',
        a: 'Adolescent psychosocial risk.',
      },
      {
        q: 'Which vaccine is given to adolescents to prevent cervical cancer?',
        a: 'HPV vaccine.',
      },
    ],
  },
};
