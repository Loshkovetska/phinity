import im1 from '../../assets/services/Property 1=ACT.svg'
import im2 from '../../assets/services/Property 1=ADHD Adult.svg'
import im3 from '../../assets/services/Property 1=ADHD Children.svg'
import im4 from '../../assets/services/Property 1=Adult Pschiatry.svg'
import im5 from '../../assets/services/Property 1=ABA.svg'
import im6 from '../../assets/services/Property 1=Art.svg'
import im7 from '../../assets/services/Property 1=Autism Support.svg'
import im8 from '../../assets/services/Property 1=Autism Testing (adult).svg'
import im9 from '../../assets/services/Property 1=Child Psychiatry.svg'
import im10 from '../../assets/services/Property 1=Child Psychologist.svg'
import im11 from '../../assets/services/Property 1=Client-Centerer Therapy.svg'
import im12 from '../../assets/services/Property 1=Clinical Supervision (1).svg'

import im13 from '../../assets/services/Property 1=CAT.svg'
import im14 from '../../assets/services/Property 1=CBT.svg'
import im15 from '../../assets/services/Property 1=CFT.svg'
import im16 from '../../assets/services/Property 1=Counselling and Psyhoterapy.svg'
import im17 from '../../assets/services/Property 1=Couple T.svg'
import im18 from '../../assets/services/Property 1=Counselling.svg'

import im19 from '../../assets/services/Property 1=DBT.svg'
import im20 from '../../assets/services/Property 1=Dyslexia A.S.svg'
import im21 from '../../assets/services/Property 1=DIT.svg'
import im22 from '../../assets/services/Property 1=EMDR.svg'
import im23 from '../../assets/services/Property 1=Existantial Phenom.svg'
import im24 from '../../assets/services/Property 1=Family T.svg'

import im25 from '../../assets/services/Property 1=Gestalt T.svg'
import im26 from '../../assets/services/Property 1=Gender T.svg'
import im27 from '../../assets/services/Property 1=Hypno T.svg'
import im28 from '../../assets/services/Property 1=Integrative Therapy.svg'
import im29 from '../../assets/services/Property 1=Interpersonal Therapy.svg'
import im30 from '../../assets/services/Property 1=Jungian Psycho.svg'

import im31 from '../../assets/services/Property 1=LGBT.svg'
import im32 from '../../assets/services/Property 1=Life Coathing.svg'
import im33 from '../../assets/services/Property 1=Merriage.svg'
import im34 from '../../assets/services/Property 1=Media Services.svg'
import im35 from '../../assets/services/Property 1=Medico Legal Reports.svg'
import im36 from '../../assets/services/Property 1=Menopause.svg'

import im37 from '../../assets/services/Property 1=Mentalisation Based T.svg'
import im38 from '../../assets/services/Property 1=Mindfulness.svg'
import im39 from '../../assets/services/Property 1=Motivation Interviewing.svg'
import im40 from '../../assets/services/Property 1=NLP.svg'
import im41 from '../../assets/services/Property 1=Neuropsychology.svg'
import im42 from '../../assets/services/Property 1=Online Psychiatry and Counselling.svg'

import im43 from '../../assets/services/Property 1=Online couple.svg'
import im44 from '../../assets/services/Property 1=Peak Performance Coaching.svg'
import im45 from '../../assets/services/Property 1=Phenominology.svg'
import im46 from '../../assets/services/Property 1=Play T.svg'
import im47 from '../../assets/services/Property 1=Psychoanalysis.svg'
import im48 from '../../assets/services/Property 1=Psychodynamic Therapy.svg'

import im49 from '../../assets/services/Property 1=Psychlogical Testing Reports and.svg'
import im50 from '../../assets/services/Property 1=Psychologist Services.svg'
import im51 from '../../assets/services/Property 1=Psychometric Testing.svg'
import im52 from '../../assets/services/Property 1=Schema T.svg'
import im53 from '../../assets/services/Property 1=ISTDP.svg'
import im54 from '../../assets/services/Property 1=SFBT.svg'

import im55 from '../../assets/services/Property 1=Sports Psycho.svg'
import im56 from '../../assets/services/Property 1=Systemic T.svg'
import im57 from '../../assets/services/Property 1=Telephone  Counselling.svg'
import im58 from '../../assets/services/Property 1=TA.svg'
import im59 from '../../assets/services/Property 1=Transpersonal Therapy.svg'
import im60 from '../../assets/services/Property 1=Wellbeing and Lifestyle.svg'
import im61 from '../../assets/services/Property 1=Workplace Mental Health.svg'
import im62 from '../../assets/services/Property 1=Workshops.svg'

export type Service = {
  id: number
  title: string
  img: string
}

const services: Array<Service> = [
  {
    id: 1,
    title: 'Acceptance and\nCommitment\nTherapy (ACT)',
    img: im1,
  },
  {
    id: 2,
    title: 'ADHD Psychiatric\nAssessment and\n Support for\nAdults',
    img: im2,
  },
  {
    id: 3,
    title: 'ADHD Psychiatric\nAssessment and\nSupport for\nChildren',
    img: im3,
  },
  {
    id: 4,
    title: 'Adult\nPsychiatry',
    img: im4,
  },
  {
    id: 5,
    title: `Applied\nBehaviour\nAnalysis (ABA)`,
    img: im5,
  },
  {
    id: 6,
    title: 'Art\nTherapy',
    img: im6,
  },
  {
    id: 7,
    title: 'Autism Support\n(Child)',
    img: im7,
  },
  {
    id: 8,
    title: 'Autism Testing\n(Adult)',
    img: im8,
  },
  {
    id: 9,
    title: 'Child\nPsychiatry',
    img: im9,
  },
  {
    id: 10,
    title: 'Child\nPsychologist\nService',
    img: im10,
  },
  {
    id: 11,
    title: 'Client-Centred\nTherapy',
    img: im11,
  },
  {
    id: 12,
    title: 'Clinical\nSupervision',
    img: im12,
  },
  {
    id: 13,
    title: 'Cognitive\nAnalytic Therapy\n(CAT)',
    img: im13,
  },
  {
    id: 14,
    title: 'Cognitive\nBehavioural\nTherapy (CBT)',
    img: im14,
  },
  {
    id: 15,
    title: 'Compassion\nFocused Therapy\n(CFT)',
    img: im15,
  },
  {
    id: 16,
    title: 'Counselling and\nPsychotherapy',
    img: im16,
  },
  {
    id: 17,
    title: 'Couple\nTherapy',
    img: im17,
  },
  {
    id: 18,
    title: 'Counselling',
    img: im18,
  },

  {
    id: 19,
    title: 'Dialectical\nBehaviour\nTherapy (DBT)',
    img: im19,
  },
  {
    id: 20,
    title: 'Dyslexia\nAssessment and\nSupport',
    img: im20,
  },
  {
    id: 21,
    title: 'Dynamic\nInterpersonal\nTherapy (DIT)',
    img: im21,
  },
  {
    id: 22,
    title: 'Eye Movement\nDesensitisation\nReprocessing\n(EMDR)',
    img: im22,
  },
  {
    id: 23,
    title: 'Existential\nPhenomenology',
    img: im23,
  },
  {
    id: 24,
    title: 'Family\nTherapy',
    img: im24,
  },

  {
    id: 25,
    title: 'Gestalt\nTherapy',
    img: im25,
  },
  {
    id: 26,
    title: 'Gender\nIdentity',
    img: im26,
  },
  {
    id: 27,
    title: 'Hypnotherapy',
    img: im27,
  },
  {
    id: 28,
    title: 'Integrative\nTherapy',
    img: im28,
  },
  {
    id: 29,
    title: 'Interpersonal\ntherapy (IPT)',
    img: im29,
  },
  {
    id: 30,
    title: 'Jungian\nPsychoanalysis/\nDreamwork',
    img: im30,
  },

  {
    id: 31,
    title: 'LGBTQ\nIssues',
    img: im31,
  },
  {
    id: 32,
    title: 'Life\nCoaching',
    img: im32,
  },
  {
    id: 33,
    title: 'Marriage Therapy',
    img: im33,
  },
  {
    id: 34,
    title: 'Media\nServices',
    img: im34,
  },
  {
    id: 35,
    title: 'Medico Legal\nReports',
    img: im35,
  },
  {
    id: 36,
    title: 'Menopause\nSupport',
    img: im36,
  },

  {
    id: 37,
    title: 'Mentalisation\nBased Therapy\n(MBT)',
    img: im37,
  },
  {
    id: 38,
    title: 'Mindfulness',
    img: im38,
  },
  {
    id: 39,
    title: 'Motivational\nInterviewing',
    img: im39,
  },
  {
    id: 40,
    title: 'Neuro-Linguistic\nProgramming\n(NLP)',
    img: im40,
  },
  {
    id: 41,
    title: 'Neuropsychology',
    img: im41,
  },
  {
    id: 42,
    title: 'Online\nCounselling\nand  Psychiatry ',
    img: im42,
  },

  {
    id: 43,
    title: 'Online\nCouple\nCounselling',
    img: im43,
  },
  {
    id: 44,
    title: 'Peak\nPerformance\nCoaching',
    img: im44,
  },
  {
    id: 45,
    title: 'Phenomonology',
    img: im45,
  },
  {
    id: 46,
    title: 'Play\nTherapy',
    img: im46,
  },
  {
    id: 47,
    title: 'Psychoanalysis',
    img: im47,
  },
  {
    id: 48,
    title: 'Psychodynamic\nTherapy',
    img: im48,
  },

  {
    id: 49,
    title: 'Psychological\nTesting, Reports,\nand Evaluation',
    img: im49,
  },
  {
    id: 50,
    title: 'Psychologist\nServices',
    img: im50,
  },
  {
    id: 51,
    title: 'Psychometric\nTesting',
    img: im51,
  },
  {
    id: 52,
    title: 'Schema\nTherapy',
    img: im52,
  },
  {
    id: 53,
    title: 'Short-term\nDynamic\nPsychotherapy\n(ISTDP)',
    img: im53,
  },
  {
    id: 54,
    title: 'Solution-focused\nBrief Therapy\n(SFBT)',
    img: im54,
  },
  {
    id: 55,
    title: 'Sports\nPsychology',
    img: im55,
  },
  {
    id: 56,
    title: 'Systemic Therapy',
    img: im56,
  },
  {
    id: 57,
    title: 'Telephone\nCounselling &\nPsychotherapy',
    img: im57,
  },
  {
    id: 58,
    title: 'Transactional\nAnalysis (TA)',
    img: im58,
  },
  {
    id: 59,
    title: 'Transpersonal\nTherapy',
    img: im59,
  },
  {
    id: 60,
    title: 'Wellbeing\nand Lifestyle\nAssessment',
    img: im60,
  },
  {
    id: 61,
    title: 'Workplace\nMental Health\nSupport',
    img: im61,
  },
  {
    id: 62,
    title: 'Workshops',
    img: im62,
  },
]

export default services
