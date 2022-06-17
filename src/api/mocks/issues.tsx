export type Issue = {
  id: number
  title: string
  text: string
}

const issues = [
  {
    id: 1,
    title: 'Abandonment',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 2,
    title: 'Academic Stress ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 3,
    title: 'Addictions',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 4,
    title: 'ADHD/ADD ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 5,
    title: 'Alcohol Dependence ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 6,
    title: 'Anger Management ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },

  {
    id: 7,
    title: 'Anorexia nervosa',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 8,
    title: 'Anxiety ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 9,
    title: 'Apathy ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 10,
    title: 'Autism Spectrum\nDisorder(ASD)  ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 11,
    title: 'Bacterial Vaginosis (BV) ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 12,
    title: ' Bereavement  ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },

  {
    id: 13,
    title: 'Binge Eating Disorder ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 14,
    title: 'Bipolar Disorder  ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 15,
    title: 'Boarding school\nsyndrome  ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 16,
    title: 'Body Dysmorphic\nDisorder   ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 17,
    title: 'Borderline Personality\nDisorder ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 18,
    title: ' Bulimia nervosa   ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 19,
    title: 'bullying  ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 20,
    title: 'Career development/\ncoaching?   ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 21,
    title: 'Childhood\ntrauma   ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 22,
    title: 'Chronic Fatigue\nSyndrome   ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 23,
    title: 'Codependency ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 24,
    title: ' Covid issues ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },

  {
    id: 25,
    title: 'Culture clash\nissues   ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 26,
    title: 'Death anxiety',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 27,
    title: 'Dementia    ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 28,
    title: 'Depersonalisation and\nDerealisation   ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 29,
    title: 'Depression  ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 30,
    title: ' Developmental\ndisorders ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 31,
    title: 'Discontent    ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 32,
    title: 'discrimination   ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 33,
    title: 'Dissociation     ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 34,
    title: 'Dissociative Identity\nDisorder (DID)    ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 35,
    title: 'Emotional difficulties   ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 36,
    title: ' Family breakdown',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 37,
    title: 'Fear of driving     ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 38,
    title: 'Fear of Public Speaking    ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 39,
    title: 'Feeling disconnected       ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 40,
    title: 'GAD   ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 41,
    title: 'Gambling Addiction  ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 42,
    title: ' Grief & loss ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 43,
    title: 'Grief & loss     ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 44,
    title: 'Health anxiety     ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 45,
    title: 'Identiy issues       ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 46,
    title: 'Impulse control\ndisorders    ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 47,
    title: 'Infidelity   ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 48,
    title: ' Insecurities  ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 43,
    title: 'Isolation and loneliness    ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 44,
    title: 'injury/trauma/\nconditions      ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 45,
    title: 'Jealousy        ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 46,
    title: 'LGBT    ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 47,
    title: 'Lgbtq+    ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 48,
    title: ' Life dysphoria   ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 49,
    title: 'Limiting beilefs     ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 50,
    title: 'Loss of a pet     ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 51,
    title: 'Major life transitions          ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 52,
    title: 'Managing physical\nhealth problems     ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 53,
    title: 'Mediation services    ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 54,
    title: ' Midlife issues/crisis    ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 55,
    title: 'Mood Related\nDifficulties      ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 56,
    title: 'Munchausens syndrome      ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 57,
    title: 'Narcissistic Personality\nDisorder           ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 58,
    title: 'Near death experience      ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 59,
    title: 'Negative thoughts    ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 60,
    title: ' Neurobehavioral\nDisorders Treatment    ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 61,
    title: 'Obsessive Compulsive\nDisorders       ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 62,
    title: 'Occupational Psychology      ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 63,
    title: 'Pain Management          ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 64,
    title: 'Panic Attacks      ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 65,
    title: 'Pathological lying    ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 66,
    title: ' Perfectionism    ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },

  {
    id: 67,
    title: 'Personality Disorders (PD)       ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 68,
    title: 'Phobias     ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 69,
    title: 'PMS          ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 70,
    title: 'POCD       ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 71,
    title: 'Post Natal\nDepression (PND)     ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 72,
    title: ' Post Traumatic Stress\nDisorder (PTSD)     ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 73,
    title: 'Premature\nEjaculation (PE)        ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 74,
    title: 'Premenstrual dysphoric\ndisorder (PMDD)     ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 75,
    title: 'Presentation anxiety /\nPublic  speaking          ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 76,
    title: 'Psychological abuse        ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 77,
    title: 'psychological support\nfor physical       ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 78,
    title: ' Psychosexual Disorders\n(e.g., erectile dysfunction)      ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },

  {
    id: 79,
    title: 'Psychosomatic Symptoms       ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 80,
    title: 'Seasonal Affective\nDisorder (SAD)    ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 81,
    title: 'Selective Mutism           ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 82,
    title: 'Self Harm       ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 83,
    title: 'Self-esteem\nrelated issues        ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 84,
    title: ' Sexual Abuse / Rape      ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },

  {
    id: 85,
    title: 'Shame      ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 86,
    title: 'sleep Disorders     ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 87,
    title: 'Smoking Cessation            ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 88,
    title: 'Social Anxiety       ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 89,
    title: 'Substance issues         ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 90,
    title: ' Stress & worry       ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 91,
    title: 'Tics And Tourette’s\nSyndrome      ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 92,
    title: 'Toxic relationships      ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 93,
    title: 'Trichotillomania\nTreatment             ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 94,
    title: 'Trust issues       ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
  {
    id: 95,
    title: 'Unhealthy Relationship\nto Food & fitness           ',
    text: `It can feel like nothing will change, your future will be the same as your past.`,
  },
  {
    id: 96,
    title: 'Vaginismus Treatment       ',
    text: `Can help with a medical diagnosis of any mental health issue.`,
  },
  {
    id: 97,
    title: 'Victimisation    ',
    text: `If you and your partner are constantly arguing, having trust issues, couples therapy can help.`,
  },
  {
    id: 98,
    title: 'Weight loss       ',
    text: `Connselling deals with issues through discussion and exploration.`,
  },
]

export default issues
