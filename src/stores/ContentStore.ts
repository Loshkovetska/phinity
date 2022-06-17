import { observable, runInAction } from 'mobx'
import { DOMAIN } from '../mocks/doman'

const ContentStore = observable({
  book: {
    title: '',
    text: '',
    buttonText: '',
    buttonLink: '',
  },
  home: {
    pageTitle: '',
    intro: {
      sutitle: '',
      title: '',
      text: '',
      buttonText: '',
      reviewsLink: '',
      buttonTitle: '',
    },
    offers: {
      list: [
        {
          title: '',
          text: '',
        },
      ],
      title: '',
    },
    about: [
      {
        title: '',
        text: '',
        videoScr: '',
        poster: '',
      },
      {
        title: '',
        text: '',
        videoScr: '',
        poster: '',
      },
    ],
    issues: {
      title: '',
      text: '',
      buttonTitle: '',
    },
    therapists: {
      title: '',
      text: '',
      buttonTitle: '',
    },
    therapist: {
      title: '',
      text: '',
      buttonTitle: '',
    },
    accreditation: {
      title: '',
      text: '',
      imgs: [],
    },
    reviews: {
      title: '',
      text: '',
    },
    services: {
      title: '',
      text: '',
      imgs: [],
    },
    blog: {
      title: '',
      buttonTitle: '',
    },
  },
  issues: {
    pageTitle: 'Issues',
    mainPageTitle: 'Home',
    intro: {
      title: 'Psychological\nIssues',
      text: `    A warm welcome from our founder Dr Sheri Jacobson. We are a team
              of highly experienced psychotherapists, clinical and counselling
              psychologists and psychiatrists in central London.`,
      buttonText: 'Book now',
      buttonLink: '',
    },
    services: {
      poster: '',
      videoSrc: '',
      title: '',
      text: '',
    },
    block: {
      title: 'All Issues',
    },
    book: {
      title: '',
      text: '',
      buttonText: '',
      buttonLink: '',
    },
  },
  services: {
    pageTitle: '',
    mainPageTitle: '',
    intro: {
      title: 'Counselling\nServices',
      text: `    A warm welcome from our founder Dr Sheri Jacobson. We are a team
              of highly experienced psychotherapists, clinical and counselling
              psychologists and psychiatrists in central London.`,
      buttonText: '',
      buttonLink: '',
    },
    block: {
      poster: '',
      videoSrc: '',
      title: 'Our Services: What We Do',
      text: `A warm welcome from our founder Dr Sheri Jacobson. We are a team of
            highly experienced psychotherapists, clinical and counselling
            psychologists and psychiatrists in central London.`,
      subtitle: 'Our Services',
    },
    advantages: {
      title: 'What you get at Phinity',
      list: [
        {
          title: 'Leading therapy specialists ',
          icon: '',
        },
        {
          title: 'Carefully tailored therapy ',
          icon: '',
        },
        {
          title: 'Best treatment outcomes ',
          icon: '',
        },
        {
          title: 'Individualized approach',
          icon: '',
        },
      ],
    },
  },
  therapists: {
    pageTitle: '',
    mainPageTitle: '',
    main: {
      pageTitle: 'Therapists',
      mainPageTitle: 'Home',
      title: 'Meet Our Therapists',
      text: `    A warm welcome from our founder Dr Sheri Jacobson. We are a team of
            highly experienced psychotherapists, clinical and counselling
            psychologists and psychiatrists in central London`,
      buttonTitle: 'Book now',
    },
    reviews: {
      title: 'Take a look at our clients success stories ',
      text:
        'See what others are saying about their sessions at Phinity Therapy',
    },
  },
  about: {
    pageTitle: '',
    mainPageTitle: '',
    intro: {
      title: 'About us',
      deskText: `Phinity Therapy was set up in 2011 by well known TV psychologist Dr.
          Becky Spelman, a registered Psychologist and Cognitive Behavioural
          Therapist. Dr. Spelman who has 14 years experience of working in the
          field of mental. Psychologist and Cognitive Behavioural Therapist. Dr.
          Spelman who has 14 years experience of working in the field of men.
          Phinity Therapy was set up in 2011 by well known TV psychologist Dr.
          Becky Spelman, a registered Psychologist and Cognitive Behavioural
          Therapist.`,
      mobText: `Phinity Therapy was set up in 2011 by well known TV psychologist Dr. Becky Spelman, a registered Psychologist and Cognitive Behavioural Therapist. Dr. Spelman who has 14 years experience of working in the field of mental. Psychologist and Cognitive 
Behavioural Therapist.`,
      buttonText: 'Book free consultation ',
    },
    phinity: {
      title: 'About Phinity',
      img1: '',
      img2: '',
      text: `       Phinity Therapy was set up in 2011 by well known TV psychologist Dr.
            Becky Spelman, a registered Psychologist and Cognitive Behavioural
            Therapist. Dr. Spelman who has 14 years experience of working in the
            field of mental health.`,
      buttonText: 'Book Now',
    },
    team: {
      title: '',
      imgMob: '',
      imgDesk: '',
      list: [
        `Phylosophy of Phinity Therapy was set up in 2011 by well known TV psychologist Dr. Becky Spelman, a registered Psychologist and Cognitive `,
        `Phylosophy of Phinity Therapy was set up in 2011 by well known TV psychologist Dr. Becky Spelman, a registered Psychologist and Cognitive `,
        `Phylosophy of Phinity Therapy was set up in 2011 by well known TV psychologist Dr. Becky Spelman, a registered Psychologist and Cognitive `,
        `Phylosophy of Phinity Therapy was set up in 2011 by well known TV psychologist Dr. Becky Spelman, a registered Psychologist and Cognitive `,
      ],
    },
    phylosophy: {
      title: 'Phylosophy of Phinity Therapy',
      cols: [
        {
          text: '',
          img: '',
        },
        {
          text: '',
          img: '',
        },
      ],
    },
    clinic: {
      title: '',
      text: '',
    },
    advantages: {
      title: 'What you get at Phinity',
      list: [
        {
          title: 'Leading therapy specialists ',
          icon: '',
        },
        {
          title: 'Carefully tailored therapy ',
          icon: '',
        },
        {
          title: 'Best treatment outcomes ',
          icon: '',
        },
        {
          title: 'Individualized approach',
          icon: '',
        },
      ],
    },
    chooseUs: {
      title: 'Why choose us',
      text: ` The hand-selected practitioners are considered to be the best
              therapists in the country. They have trained in the UK’s most
              respected counselling institutions with years.`,
      list: [
        `Psychological therapy sessions are 50 minutes in duration.`,
        `Weekly attendance is required in order for you to benefit from therapy.`,
        `If you do not commitment to regular therapy your therapists might not be able to continue seeing you for treatment unless you have moved to a maintenance program`,
        `Please note that there is no reception at evenings and weekends, so you’ll be asked 
to meet your therapist at the exact appointment time.`,
        `Late cancellations and missed appointments sessions are payable in full unless 48 hours notice is given and an exceptional circumstance has arisen.`,
        `This same time will be reserved for you each week should you decided to continue with your therapy sessions.`,
        `Please note that there is no reception at evenings and weekends, so you’ll be asked 
to meet your therapist at the exact appointment time.`,
        `Late cancellations and missed appointments sessions are payable in full unless 48 hours notice is given and an exceptional circumstance has arisen.`,
        `This same time will be reserved for you each week should you decided to continue with your therapy sessions.`,
      ],
    },
    reviews: {
      title: 'Take a look at our clients success stories ',
      text:
        'See what others are saying about their sessions at Phinity Therapy',
    },
    contact: {
      title: '',
      text: '',
    },
  },
  works: {
    pageTitle: '',
    mainPageTitle: '',
    title: '',
    mobTitle: '',
    subtitle: '',
    p1: '',
    p2: '',
  },
  service: {
    intro: {
      pageTitle: 'Services',
      mainPageTitle: 'Home',
      text: `    A warm welcome from our founder Dr Sheri Jacobson. We are a team
              of highly experienced psychotherapists, clinical and counselling
              psychologists and psychiatrists in central London.`,
      buttonText: 'Book now',
    },
    about: {
      title: 'What is it?',
      text: ` Anger is a natural human response to situations or certain life
              experiences, it tends to happen when we feel under attack, feel
              like we’ve been deceived, hurt or insulted. Anger helps to release
              a build-up of energy and tension. As humans, we are programmed to
              express anger from birth. However, the healthy emotion can become
              extreme and may show symptoms of a more deep-rooted issue.`,
      img: '',
      list: [
        {
          title: 'Anger management',
          list: [
            `Anger management counselling online or face to face is designed to reduce or eliminate the feelings of anger by exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look 
at situations from a different perspective`,
            `Exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look at situations from a different perspective`,
            `There are certain beliefs that are held which can be a turning point in whether you get angry or not – these are explored in the type of counselling we use for anger management. The family dynamic, culture, environment and your own beliefs and views are all taken into account during your therapy programme.`,
          ],
        },
        {
          title: 'Academic Stress',
          list: [
            `Anger management counselling online or face to face is designed to reduce or eliminate the feelings of anger by exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look 
at situations from a different perspective`,
            `Exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look at situations from a different perspective`,
            `There are certain beliefs that are held which can be a turning point in whether you get angry or not – these are explored in the type of counselling we use for anger management. The family dynamic, culture, environment and your own beliefs and views are all taken into account during your therapy programme.`,
          ],
        },
        {
          title: `Why do you feel 
Academic Stress?`,
          list: [
            `Anger management counselling online or face to face is designed to reduce or eliminate the feelings of anger by exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look 
at situations from a different perspective`,
            `Exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look at situations from a different perspective`,
            `There are certain beliefs that are held which can be a turning point in whether you get angry or not – these are explored in the type of counselling we use for anger management. The family dynamic, culture, environment and your own beliefs and views are all taken into account during your therapy programme.`,
          ],
        },
      ],
    },
    issues: {
      title: '',
      text: '',
      buttonTitle: '',
    },
    help: {
      title: '',
      text: `  A warm welcome from our founder Dr Sheri Jacobson. We are a team
                of highly experienced psychotherapists, clinical and counselling
                psychologists and psychiatrists in central London.`,
      buttonTitle: '',
      items: [
        {
          title: 'Our therapist',
          icon: '',
          text: `We are a team of highly experienced and psychotherapists, clinical.`,
        },
        {
          title: 'Comfort rooms ',
          icon: '',
          text: `Dr Sheri Jacobson. We are a team of highly experienced.`,
        },
        {
          title: 'Individualized approach',
          icon: '<Item4 />',
          text: `A warm welcome from our founder Dr Sheri Jacobson. We are a team.`,
        },
      ],
    },
    therapists: {
      title: '',
      text: '',
    },
    therapist: {
      title: '',
      text: '',
    },
    blogTitle: '',
  },
  issue: {
    intro: {
      pageTitle: 'Issues',
      mainPageTitle: 'Home',
      text: `    A warm welcome from our founder Dr Sheri Jacobson. We are a team
              of highly experienced psychotherapists, clinical and counselling
              psychologists and psychiatrists in central London.`,
      buttonText: 'Book now',
    },
    about: {
      title: '',
      text: '',
      img: '',
    },
    symptomsTitle: '',
    help: {
      list: [
        {
          title: 'What Causes X',
          list: [
            `You find yourself involved in fights `,
            `You have explosive outbursts where you break things`,
            `You constantly rub your face`,
            `You find yourself having a lot of arguments with people around you `,
            `You have trouble with authority`,
            `You lose your temper whilst driving`,
            `You feel a desire to lash out verbally or physically`,
          ],
        },
        {
          title: 'How Therapy Can Help',
          list: [
            `Anger management counselling online or face to face is designed to reduce or eliminate the feelings of anger by exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look 
at situations from a different perspective`,
            `Exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look at situations from a different perspective`,
            `There are certain beliefs that are held which can be a turning point in whether you get angry or not – these are explored in the type of counselling we use for anger management. The family dynamic, culture, environment and your own beliefs and views are all taken into account during your therapy programme.`,
          ],
        },
        {
          title: `Why do you feel 
Academic Stress?`,
          list: [
            `Anger management counselling online or face to face is designed to reduce or eliminate the feelings of anger by exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look 
at situations from a different perspective`,
            `Exploring and identifying the underlying issues and what triggers your outbursts, raising your awareness and your ability to look at situations from a different perspective`,
            `There are certain beliefs that are held which can be a turning point in whether you get angry or not – these are explored in the type of counselling we use for anger management. The family dynamic, culture, environment and your own beliefs and views are all taken into account during your therapy programme.`,
          ],
        },
      ],
    },
    serviceTitle: '',
    therapyHelp: {
      title: '',
      text: '',
      buttonTitle: '',
      items: [
        {
          title: 'Our therapist',
          icon: '',
          text: `We are a team of highly experienced and psychotherapists, clinical.`,
        },
        {
          title: 'Comfort rooms ',
          icon: '',
          text: `Dr Sheri Jacobson. We are a team of highly experienced.`,
        },
        {
          title: 'Individualized approach',
          icon: '<Item4 />',
          text: `A warm welcome from our founder Dr Sheri Jacobson. We are a team.`,
        },
      ],
    },
    therapists: {
      title: '',
      text: '',
    },
    therapist: {
      title: '',
      text: '',
    },
    reviews: {
      title: 'Take a look at our clients success stories ',
      text:
        'See what others are saying about their sessions at Phinity Therapy',
    },
    blogTitle: '',
  },
  therapist: {
    serviceTitle: '',
    pageTitle: 'Therapist',
    mainPageTitle: 'Home',

    intro: {
      buttonTitle: '',
      buttonLink: '',
    },
    block: {
      mainText: `    Dr Eva King is a senior counselling psychologist who specialises in
            cognitive behavioural therapy. Although a specialist in CBT, Maxine
            is also trained in psychodynamic therapy, humanistic therapy and
            interpersonal psychotherapy which allows her to adapt her
            therapeutic approach to the needs and problems of the individual.`,
      list: [
        {
          title: 'Accreditation',
          text: 'British Association of Counselling & Psychotherapy (BACP)',
        },
        {
          title: 'Expirience',
          text: '10 years of experience 1 500 hours in consultation',
        },
        {
          title: 'Fees',
          text: 'Fees depends on the problem and number of hours',
        },
      ],
      subText: `       Dr Eva King is a senior counselling psychologist who specialises in
            cognitive behavioural therapy. Although a specialist in CBT, Maxine
            is also trained in psychodynamic therapy, humanistic therapy and
            interpersonal psychotherapy which allows her to adapt her
            therapeutic approach to the needs and problems of the individual.`,
    },
    issues: {
      title: '',
      text: '',
      buttonTitle: '',
    },
    reviews: {
      title: 'Take a look at our clients success stories ',
      text:
        'See what others are saying about their sessions at Phinity Therapy',
    },
    contact: {
      sheduleTitle: 'Open time',
      shedule: ' Mon-Sun 8 AM- 8 PM',
      phoneTitle: 'Our phone',
      phone: '077 6140 9077',
      emailTitle: 'Our email',
      email: 'phynitytherapy@com',
      location: { lat: 51.4640426, lng: -0.1132375 },
    },
  },
  fees: {
    mainPageTitle: 'Home',
    pageTitle: 'Fees',
    title: 'Our Fees',
    text: '        Important: The price is a 50 minute session',
    table: [
      ['Expert', 'Assessment & Treatment Sessions', 'Offers'],
      ['Individual psychological Therapy', '£100 – £170	 ', ''],
      ['Couples Therapy', '£190	 ', ''],
      [
        'Psychiatrist inital appointment',
        '£380 (Diagosis,  tratment plan, report & prescription)',
        `£260 (offered on case 
by case basis if no 
report is required).`,
      ],
      [
        'Psychiatrist follow up<br/><br/> Repeat prescription:',
        '£180 for 25 minutes sessions <br/><br/> £90 (when no appointment is required)	',
        `£260 (offered on case 
by case basis if no 
report is required).`,
      ],
      [
        'Psychological Counselling	',
        'New trainee counsellor: £20<br/><br/>	Advanced trainee counsellor: £40<br/><br/> First year of Doctorate: £60<br/><br/> Second year of Doctorate: £70<br/><br/> Final year of Doctorate: £80',
        ``,
      ],
      ['Psychologist Clinical Director Dr Becky Spelman', '£250	 ', ``],
      [
        'Health Insurance',
        'Psychologists & Psychotherapists: £190 total fee:<br/><br/> Psychiatrists: £410 in addition to standard fees per session	 ',
        ``,
      ],
      ['Letter from a Psychologist (up to 2 pages)	', '£170	 ', ``],
      ['Assessment and short report from a Psychologist		', '£340	 	 ', ``],

      [
        'Medico legal Report from a Psychologist (10-15 pages approx)',
        '£1200	 	 	 ',
        ``,
      ],
      [
        'Medico legal Report from a Psychiatrist (10-15 pages approx)',
        '£1800	 	 	 	 ',
        ``,
      ],
      ['15 Minute Initial Phone Chat with a Therapist', 'Free', ``],
      [
        '1 Year Unlimited	Unlimited',
        'Unlimited	Unlimited therapy, 1 session per week and unlimited 15 minute support calls between sessions',
        `	£6000	 `,
      ],
    ],
    rules: {
      title: 'The rules of sessional therapy',
      text: `            The hand-selected practitioners are considered to be the best
            therapists in the country. They have trained in the UK’s most
            respected counselling institutions with years.`,
      list: [
        `Psychological therapy sessions are 50 minutes in duration.`,
        `Please note that there is no reception at evenings and weekends, so you’ll be asked 
to meet your therapist at the exact appointment time.`,
        `Weekly attendance is required in order for you to benefit from therapy.`,
        `Late cancellations and missed appointments sessions are payable in full unless 48 hours notice is given and an exceptional circumstance has arisen.`,
        `If you do not commitment to regular therapy your therapists might not be able to continue seeing you for treatment unless you have moved to a maintenance program`,
        `This same time will be reserved for you each week should you decided to continue with your therapy sessions.`,
      ],
    },

    benefits: {
      title: ` Benefits of therapy
              <br /> via insurance`,
      cols: [
        {
          title: `Therapy via health
insurance`,
          text: `Did you know that your health insurance company might cover the costs of your treatment? Many health insurance policies can be invoiced directly for talking therapy or psychiatry sessions and you will never have to pay for the sessions yourself. Call your insurance company and ask if they will cover your treatment.

`,
        },
        {
          title: `How can I access therapy 
via insurance in London?`,
          text: `If you would like to talk to someone about therapy via insurance, please get in touch with us at the Private Therapy Clinic by telephone at: 
+077 6140 9077 for a free confidential chat or 
<a href='#' class="benefits__link">book online</a> to arrange an appointment.

`,
        },
      ],
      list: [
        `Some people that could benefit from therapy are put off by the long NHS referral times and the expense of turning to private health care. However, health insurance can cover the complete cost of therapy treatments.`,
        `Recognising the important role therapy can play in recovery and wellbeing, insurers are increasingly including them in their policies. Therapy can be used for a range of purposes, as either standalone treatment or to complement other medical treatment being given. Insurance can give you access to treatment options that might otherwise have been inaccessible to you, aiding your overall health.`,
        `It’s not just niche health insurance companies that can cover therapy treatment either, among the leading insurers AVIVA, Cigna, Vitality Health, Bupa, WPA, Allianz, and Axa PPP, all offer a level of cover within some of their policies. As a result, it’s worthwhile calling your health insurance provider to see if your agreement covers therapy if there’s a treatment that you could benefit from.`,
      ],
    },
    services: {
      title: '',
      text: '',
      imgs: [],
    },
  },
  contact: {
    mainPageTitle: 'Home',
    pageTitle: 'Contacts',
    reviews: {
      title: '',
      text: '',
    },
    intro: {
      title: 'Contact Us',
      text: `Interested in our services? Get in touch with us via the form below and we’ll get back to you as soon as possible!

Please check your ‘junk’ mail folder for responses from us.`,
    },
    content: {
      title: 'Our opening hours',
      text1: `  Our experts are available 7 days a week to help you solve any
            problems you're having. Don't worry, you're not alone. We can help
            you.`,
      text2: `    Don't worry, you're not alone. We can help you.`,
      sheduleTitle: 'Our clinic operates',
      sheduleText: 'Monday-Sunday 8.00 AM- 8.00 PM',
      sheduleButton: 'Call us',
      phoneTitle: 'Our phone',
      phoneText: 'Our phoneline work 24/7 Speak with someone anytime you call',
      phone: '077 6140 9077',
      phoneButton: 'Call us',
      emailTitle: 'Our email',
      emailText: `  Send us a message, we will get back to you via email within 24
              hours`,
      email: 'phynitytherapy@com',
      emailButton: 'send us a message',
    },
    location: {
      title: 'Our Location',
      subtitleDesk: 'Phinity clinic',
      subtitleMob: 'Phinity',
      address: ' 1 Harley Street, London, W1G 9QD',
      coords: { lat: 51.4640426, lng: -0.1132375 },
    },
    contact: {
      title: '',
      text: '',
    },
  },
  faq: {
    mainPageTitle: 'Home',
    pageTitle: 'Faq',
    title: 'FAQ',
    contact: {
      title: '',
      text: '',
    },
  },
  menu: [],
  blog: {
    mainPageTitle: '',
    pageTitle: '',
    title: 'All articles',
    book: {
      title: 'Book your free 15 min session',
      text: 'Please enter the following details to book your appointment',
      buttonTitle: 'Book now',
      buttonLink: '',
    },
    categoryTitle: 'Categories',
    tagTitle: 'Tags',
    recentTitle: 'Recent post',
    video: {
      title: 'Videos',
      text: `    We are proud to connect you with highly experienced practitioners
              who can help with almost any psychological issue.`,
      buttonTitle: 'See all',
      videoLength: 'Video length',
    },
    reviews: {
      title: 'Take a look at our clients success stories ',
      text:
        'See what others are saying about their sessions at Phinity Therapy',
    },
    accreditation: {
      title: '',
      text: '',
      imgs: [],
    },
  },
  privacy: {
    title: 'Privacy Policy',
    pageTitle: 'Privacy',
    mainPageTitle: '',
    content: [
      {
        title: 'Phinity Privacy Policy',
        text: `The following information outlines the Privacy Policy of Private Therapy Clinic. This policy is in place to ensure that information collected by your practitioners during your assessment and treatment at the Clinic is used in an appropriate and secure way.`,
      },
      {
        title: 'Payment Details',
        text: `All card details are stored securely, we can not view your full card details.`,
      },
      {
        title: 'Other Information Gathered',
        text: `Over the course of treatment at Private Therapy Clinic, information is gathered that allows 
the practitioner to make an informed professional decision as to the most appropriate assessment and treatment methods to be used. This information will include basic demographic data (e.g. name, date of birth, address, etc), as well as other information that 
is considered relevant. This will usually include the following:
\u0020\u0020\u00b7\u0020 The nature of the problem for which you are presenting;
\u0020\u0020\u00b7\u0020 Areas of behaviour related to the presenting problems;
\u0020\u0020\u00b7\u0020 A history of the presenting problem;
\u0020\u0020\u00b7\u0020 A family history of relevant information; and
\u0020\u0020\u00b7\u0020 Other information deemed necessary to make an informed clinical judgement about the nature of the presenting complaint and other relevant factors`,
      },
      {
        title: 'Confidentiality Of Information',
        text: `Generally, all information gathered over the course of assessment and treatment at Private Therapy Clinic remains confidential. There are several notable exceptions, however, to this confidentiality:
\u0020\u0020\u00b7\u0020 All practitioners at the Clinic discuss their caseload with an experienced Clinical supervisor in a supervisory relationship to ensure best practice. Information on the nature of the case (though not necessarily full identifying information) is shared with the practitioners supervisor;
\u0020\u0020\u00b7\u0020 In the event that the practitioners forms the professional opinion that either the client, or another individual is a risk for significant harm, a moral obligation may exist to act on this information with the aim of preventing such harm;
\u0020\u0020\u00b7\u0020 In the event that a file is subpoenaed to court;
\u0020\u0020\u00b7\u0020 In the event that a client gives permission to share their information by completing and signing a written consent form.`,
      },
      {
        title: 'Use Of Information',
        text: `Information gathered by Private Therapy Clinic is used exclusively for two purposes

For the formation of a practitioners opinion which is used to guide assessment and treatment for the presenting complaint; and
For the evaluation of the service provided by the Clinic, through collation of detailed statistics about referral sources, nature of presenting problems, attendance durations, etc. In all cases where information is used for statistical purposes, no identifying information is made available.`,
      },
      {
        title: 'Security Of Information',
        text: `Information gathered by Private Therapy Clinic is used exclusively for two purposes
Information provided to the Private Therapy Clinic is held both in the Client File and the Clinic Database (demographics and basic diagnostic information only). All files are held within the Clinic in locked offices, in locked filing cabinets or held electronically in a secure manner. Files only leave the Clinic when they do not have identifiable information on them.`,
      },
      {
        title: 'Obtaining Information',
        text: `Requests for information may be made to the Clinic Manager, Private Therapy Clinic 2106 Davenport House 261 Bolton Road Bury Gtr Manchester BL8 2NZ. Requests should be specific as to the exact information required, and should be acknowledged within 14 days in writing. Once a request for information is received, the Clinic Manager will conduct a thorough database review and collate the information in an appropriate manner to ensure adequate and full understanding on the part of the requesting person.`,
      },
      {
        title: 'Procedure For Complaint/Rectifying Information',
        text: `Official complaints or requests to change inaccurate or erroneous information should be made to the Clinic Manager, Private Therapy Clinic 2106 Davenport House 261 Bolton Road Bury Gtr Manchester BL8 2NZ . In such cases the Clinic Manager will conduct a review of the information held by the Clinic and make every effort to ensure that such information is accurate.`,
      },
    ],
  },
  terms: {
    title: 'Terms of Services',
    mainPageTitle: 'Home',
    pageTitle: 'Terms',
    content: [
      {
        title: 'APPOINTMENTS RESERVATION',
        text: `When you enter your card details your first payment will be taken right away. Your details will be stored securely and will be charged on the morning of any future appointments booked. You can pay by cash at the end of your appointment if you wish however we will still need to take your card details to reserve the appointment. If you have any questions about providing us with your card details please call +++020 3666 1145. When initial appointments are offered they will be provisionally held for you for 24 hours, if we do not receive payment within this time frame we will offer the slot out to others.`,
      },
      {
        title: 'REFUNDS',
        text: `If any appointment is cancelled within 48 hour prior to the appointment, we will refund the full the amount paid.

If any appointment is cancelled with less than 48 hours the full fee will be charged.
Refund of the full amount paid will only be granted if the practitioner cancels the appointment.

You have the right to cancel any bookings with us within seven days of your contract with us commencing and your payment will be returned provided notice is given 48 hours before your appointment is due to start.`,
      },
      {
        title: 'PAYMENT TERMS AND CONDITIONS',
        text: `(Note: in this document the word appointment refers to both appointments, workshops/seminars and assessments) NB. Private Therapy Clinic is under no obligation to offer a transfer or refund any fees paid. All requests for cancellation/refund or transfer must be put in an email to Phinity Therapy email: <a href="mailto:info@phinitytherapy.com" class="privacy__link">info@phinitytherapy.com</a>
We store credit card securely and cannot see your full card details.`,
      },
    ],
  },
  nofound: {
    title: 'Page not found',
    subText: 'We`re sorry!',
    text: `   We couldn\`t find this page. But don\`t worry, you can find plenty of
          other things on our Homepage or use search`,
    backButton: 'Go back',
    homeButton: 'Home page',
  },
  job: {
    mainPageTitle: 'Home',
    pageTitle: 'Work Opportunities',
    benefits: {
      title: 'Benefits',
      list: [
        `You will be aligned with a well-known therapy room organisation dedicated to raising standards of the profession.`,
        `You will have access to a custom built app to manage your bookings and invoices.`,
        `You will have networking opportunities with other practitioners.`,
        `Harley Therapy can provide a plentiful supply of suitable client referrals 
according to your hours of work and preferred ways of working.`,
        `You will have use of an administration facility 7 days a week, ensuring that new referrals can be made and existing clients can leave messages.`,
        `As an independent and qualified practitioner, you will work to your own therapeutic style and with your own supervision, unburdened by organisational demands.`,
      ],
    },
    company: {
      title: ' Company Description',
      text: `  Over the last 16 years, Harley Therapy has connected individuals
              to the highest calibre practitioners in private practice, working
              to improve their mental health and lead more fulfilling lives. We
              work relentlessly to raise the standard of psychological support
              in the private sector and align ourselves with the most selective
              group of clinicians.`,
    },
    descriptionTitle: 'Job Description',
    qualification: {
      title: 'Qualifications',
      text: ` Clients who contact Harley Therapy typically benefit from seeing
              practitioners with the following therapeutic and clinical skills:`,
    },
    info: {
      title: 'Additional Information',
      text: ` If you would like to be a part of this exciting movement and meet
              the criteria above, please submit your CV and a covering note.`,
      closingTitle: 'Closing date:',
      closingText: 'as soon as the role is filled.',
      closingSubText: `         Only successful applicants will be contacted - within 2 weeks of
              applying. No agencies please.`,
    },
    form: {
      subtitle: 'Let`s work together',
      title: 'Send us your CV',
      p1: `Haven’t found a suitable vacancy? Send us your CV anyway – we will
            inform you when we have a vacancy relevant to your skills.`,
      emailTitle: 'Email',
      email: 'phinitytherapy@gmail.com',
      p2: ` If you want to chat with us personally, write to our recruiter in
            the messengers:`,
      socials: [
        {
          title: 'Skype',
          link: '',
        },
        {
          title: 'Facebook',
          link: '',
        },
        {
          title: 'linkedin',
          link: '',
        },
      ],
    },
  },
  thanks: {
    pageTitle: 'Thank you',
    title: 'Thanks for filling out the form',
    text: ` We couldn\`t find this page. But don\`t worry, you can find plenty of
          other things on our Homepage or use search`,
    backButton: 'Go back',
    homeButton: 'Home page',
  },
  video: {
    mainPageTitle: 'Home',
    pageTitle: 'Videos',
    reviews: {
      title: '',
      text: '',
    },
  },
  videos: {
    mainPageTitle: 'Home',
    pageTitle: 'Videos',
    reviews: {
      title: '',
      text: '',
    },
    content: {
      title: 'Videos',
      text: '  Watch and learn from advocates and experts',
    },
  },
  cookie: {
    title: 'Have a cookie',
    text: `        This website uses cookies to ensure you get the best experience on our
          website. By continuing to use this website, you agree to their use.`,
    buttonText: 'Accept',
  },
})

export default ContentStore

export const getHome = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'home')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.home = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getIssuesContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'issues-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.issues = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getServicesContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'services-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.services = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getBookBlock = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'book')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.book = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getTherapistsContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'therapists-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.therapists = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getAbout = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'about-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.about = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getWork = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'join-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.works = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getSingleService = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'service-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.service = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getMenu = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'menu')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.menu = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getBlogContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'blog-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.blog = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getPrivacy = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'policy-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.privacy = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getTerms = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'terms-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.terms = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getNoFound = async () => {
  try {
    const formData = new FormData()
    formData.append('status', '404-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.nofound = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getJobContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'job-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    // runInAction(() => {
    //   ContentStore.job = response
    // })
  } catch (e) {
    console.log(e)
  }
}

export const getThanks = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'thanks')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    // runInAction(() => {
    //   ContentStore.thanks = response
    // })
  } catch (e) {
    console.log(e)
  }
}

export const getVideoContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'video-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    // runInAction(() => {
    //   ContentStore.video = response
    // })
  } catch (e) {
    console.log(e)
  }
}

export const getVideosContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'videos-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    // runInAction(() => {
    //   ContentStore.video = response
    // })
  } catch (e) {
    console.log(e)
  }
}

export const getCookieContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'cookie-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    // runInAction(() => {
    //   ContentStore.cookie = response
    // })
  } catch (e) {
    console.log(e)
  }
}

export const getFaqContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'faq-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.faq = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getContactContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'contacts-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.contact = {
        ...ContentStore.contact,
        ...response,
      }
    })
  } catch (e) {
    console.log(e)
  }
}
