import img from '../../assets/unsplash_pAtA8xe_iVM.png'

export type Post = {
  id: number
  title: string
  date: string
  shortInfo: string
  cat: string
  tags: Array<string>
  author: Author
  content: Array<any>
}

export type Author = {
  name: string
  position: string
  area: string
  src: string
  about: string
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a different path.  
\nWhat are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a different path.\nWhat are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a different path.\nWhat are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],
    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 1,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-05-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 2,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-24',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 3,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `I don’t know what to do `,
    date: '2022-01-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 4,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `What is gaslighting?  `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: ['Generalised anxiety disorder', 'Panic Attacks'],
  },
  {
    id: 5,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Suffering with lack of responsibility?`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Addictions',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 6,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Why do I make excuses?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Body Dysmorphic Disorder',
    tags: ['Trauma', 'Personality Disorders'],
  },
  {
    id: 7,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Impatience`,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bipolar',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 8,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?`,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Bereavement',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 9,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Thinking traps: how to let go
of negative thoughts  `,
    date: '2022-02-25',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anxiety',
    tags: ['Anxiety & stress', 'Depression', 'Anger'],
  },
  {
    id: 10,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'Anger',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
  {
    id: 11,
    author: {
      name: 'John Staddon',
      position: 'Ph.D.',
      area: 'Adaptive Behavior',
      src: img,
      about: `Ph.D., is James B. Duke Professor of Psychology, and Professor of Biology and Neurobiology, Emeritus at Duke University. He obtained his BSc at University College, London, and PhD in Experimental Psychology at Harvard University and also did research at the MIT Systems Lab, and taught at the University of Toronto. He has taught and done research at Oxford University (UK), the University of São Paulo .`,
    },
    title: `Feeling alone in a relationship – 
what steps can I take?    `,
    date: '2022-05-01',
    shortInfo: `
    If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. `,
    content: [
      {
        title: 'What is gaslighting?',
        text: `If you are suffering with a lack of responsibility, here’s how to choose a 
different path.  
\n
What are mental health issues, and why are they so common?
Mental health issues are on the rise with statistics showing that 1 in 4 people in the UK suffer with at least one mental health condition, or have in their lifetime. 
In the UK alone, there are currently around 20 million people that experience difficulties with a mental illness. Since the start of the COVID-19 pandemic, the number of people suffering has increased exceedingly, due to numerous lockdowns, self-isolation, quarantine, and not being able to experience everyday social interactions. According to the Office For National Statistics, depression in adults rose by 1.3 percentage points to 15.6% compared to the corresponding 
2019 period.`,
      },
      {
        title: 'Suffering with lack of responsibility?',
        text: `Mental illnesses include a wealth of different symptoms, not limited to depression, anxiety, OCD, addiction, ADHD, body dysmorphia, and an extensive list of more.

How do I know if I’m suffering from a mental health issue?
Have you ever felt too uncomfortable to leave the house? Have you ever felt anxious about seeing certain people, or attending a social event? Have you ever felt too down to get out of bed in the morning, or felt yourself consistently going over the same thoughts, processes and actions? These are all general signs and attributes of a mental illness.`,
      },
      {
        title: 'Why do I make excuses?',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
      {
        title: 'Impatience',
        text: `Why does this lead to lack of responsibility? How can I reverse this?
One attribute that is exceedingly common amongst people who suffer with anxiety and depression, is lack of responsibility. Depression can make you feel 
like you’re not worth it, and nothing is worth it, and therefore leads down a path of irresponsibility, delinquency, and carelessness, not only to yourself, but towards your job, finances, relationships and more. This can also relate to anxiety, where some people experience feeling too anxious to go to work, to see people, to interact socially and stay on top of payments and finances.
`,
      },
    ],

    cat: 'ADD/ADHD',
    tags: [
      'Generalised anxiety disorder',
      'Panic Attacks',
      'Self-Esteem',
      'Trauma',
      'Personality Disorders',
    ],
  },
]

export default posts
