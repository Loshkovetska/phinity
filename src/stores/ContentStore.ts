import { observable, runInAction } from 'mobx'
import { DOMAIN } from '../mocks/doman'

const ContentStore = observable({
  book: {
    title: '',
    text: '',
    buttonText: '',
    buttonLink: '',
  },
  intro: {
    sutitle: '',
    title: '',
    text: '',
    buttonText: '',
    reviewsLink: '',
    buttonTitle: '',
    buttonLink: '',
  },
  submenu: {},
  post: {
    reviews: {
      title: '',
      text: '',
    },
    followTitle: '',
    videoTitle: '',
    blogTitle: '',
    relatedTitle: '',
    video: {},
    tags: [],
    shareTitle: '',
    shareList: [],
  },
  home: {
    video: {},
    pageTitle: '',
    intro: {
      sutitle: '',
      title: '',
      text: '',
      buttonText: '',
      reviewsLink: '',
      buttonTitle: '',
      buttonLink: '',
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
        buttonLink: '',
        buttonTitle: '',
      },
    ],
    issues: {
      title: '',
      text: '',
      buttonTitle: '',
      list: [],
    },
    therapists: {
      title: '',
      text: '',
      buttonTitle: '',
      buttonLink: '',
      buttonTitleOne: '',
      buttonLinkOne: '',
    },
    therapist: {
      title: '',
      text: '',
      buttonTitle: '',
      buttonLink: '',
      buttonTitleOne: '',
      buttonLinkOne: '',
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
    blogTitle: '',
    blogButton: '',
    video: {},
    pageTitle: '',
    mainPageTitle: '',
    intro: {
      title: '',
      text: ``,
      buttonText: '',
      buttonLink: '',
    },
    services: {
      poster: '',
      videoSrc: '',
      title: '',
      text: '',
    },
    block: {
      title: '',
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
    blogTitle: '',
    blogButton: '',
    blog: {},
    video: {},
    intro: {
      title: '',
      text: ``,
      buttonText: '',
      buttonLink: '',
    },
    block: {
      poster: '',
      videoSrc: '',
      title: '',
      text: ``,
      subtitle: '',
    },
    advantages: {
      title: '',
      list: [],
    },
  },
  therapists: {
    pageTitle: '',
    mainPageTitle: '',
    main: {
      pageTitle: '',
      mainPageTitle: '',
      title: '',
      text: ``,
      buttonTitle: '',
    },
    reviews: {
      title: ' ',
      text: '',
    },
  },
  about: {
    pageTitle: '',
    mainPageTitle: '',
    intro: {
      title: '',
      deskText: ``,
      mobText: ``,
      buttonText: '',
      booklink: '',
    },
    phinity: {
      title: '',
      img1: '',
      img2: '',
      text: ` `,
      buttonText: '',
      booklink: '',
    },
    team: {
      title: '',
      imgMob: '',
      imgDesk: '',
      list: [``],
    },
    phylosophy: {
      title: '',
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
      images: [],
    },
    advantages: {
      title: '',
      list: [
        {
          title: '',
          icon: '',
        },
      ],
    },
    chooseUs: {
      title: '',
      text: ``,
      list: [],
    },
    reviews: {
      title: '',
      text: '',
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
    blog: {},
    refs: [],
    blogButton: '',
    video: {},
    intro: {
      buttonLink: '',
      title: '',
      pageTitle: '',
      mainPageTitle: '',
      text: `  `,
      buttonText: '',
    },
    about: {
      title: '',
      text: ``,
      img: '',
      list: [],
    },
    issues: {
      title: '',
      text: '',
      buttonTitle: '',
      list: [],
    },
    help: {
      title: '',
      text: ``,
      buttonTitle: '',
      items: [],
    },
    therapists: {
      title: '',
      text: '',
      list: [],
    },
    therapist: {
      title: '',
      text: '',
      list: [],
    },
    blogTitle: '',
  },
  issue: {
    refs: [],
    blogButton: '',
    video: {},
    intro: {
      pageTitle: '',
      mainPageTitle: '',
      text: ``,
      buttonText: '',
      buttonLink: '',
    },
    about: {
      title: '',
      text: '',
      img: '',
    },
    symptomsTitle: '',
    symptoms: [],
    help: {
      list: [],
    },
    serviceTitle: '',
    services: [],
    therapyHelp: {
      title: '',
      text: '',
      buttonTitle: '',
      items: [],
    },
    therapists: {
      title: '',
      text: '',
      list: [],
    },
    therapist: {
      title: '',
      text: '',
      list: [],
    },
    reviews: {
      title: '',
      text: '',
    },
    blog: [],
    blogTitle: '',
  },
  therapist: {
    buttonLink: '',
    buttonTitle: '',
    pageTitle: '',
    mainPageTitle: '',
    block: {
      mainText: ``,
      list: [],
      subText: ``,
    },
    services: {
      title: '',
      list: [],
    },

    issues: {
      title: '',
      text: '',
      buttonTitle: '',
      list: [],
    },
    reviews: {
      title: '',
      text: '',
    },
    contact: {
      title: '',
      sheduleTitle: '',
      shedule: '',
      phoneTitle: '',
      phone: '',
      emailTitle: '',
      email: '',
      location: { lat: 51.4640426, lng: -0.1132375 },
      zoom: '',
      maplink: '',
      addressTitle: '',
      clinics: [
        {
          title: '',
          maplink: '',
          shedule: '',
          phone: '',
          email: '',
          address: '',
        },
      ],
    },
  },
  fees: {
    mainPageTitle: '',
    pageTitle: '',
    title: '',
    text: '',
    table: [],
    rules: {
      title: '',
      text: ``,
      list: [],
    },

    benefits: {
      title: ``,
      cols: [
        {
          title: ``,
          text: ``,
        },
        {
          title: ``,
          text: ``,
        },
      ],
      list: [],
    },
    services: {
      title: '',
      text: '',
      imgs: [],
    },
  },
  contact: {
    mainPageTitle: '',
    pageTitle: '',
    reviews: {
      title: '',
      text: '',
    },
    intro: {
      title: '',
      text: ``,
      buttonText: '',
      buttonLink: '',
    },
    content: {
      title: '',
      text1: ``,
      text2: ` `,
      sheduleTitle: '',
      sheduleText: '',
      sheduleButton: '',
      phoneTitle: '',
      phoneText: '',
      phone: '',
      phoneButton: '',
      emailTitle: '',
      emailText: ``,
      email: '',
      emailButton: '',
    },
    location: {
      zoom: '',
      title: '',
      subtitleDesk: '',
      subtitleMob: '',
      address: ' ',
      list: [{ lat: 0, lng: 0, maplink: '' }],
    },
    contact: {
      title: '',
      text: '',
    },
  },
  faq: {
    mainPageTitle: '',
    pageTitle: '',
    title: '',
    contact: {
      title: '',
      text: '',
    },
  },
  menu: {
    list: [
      {
        title: '',
        link: '',
      },
    ],
    youtube: '',
    linkedin: '',
    tw: '',
    fb: '',
    instagram: '',
    phone: '',
    email: '',
    phoneTitle: '',
    emailTitle: '',
    shedule: '',
    sheduleTitle: '',
    loationTitle: '',
    location: { text: '', link: '' },
    nav: [{ title: '', link: '' }],
    info: [{ title: '', link: '' }],
    bookTitle: '',
    bookLink: '',
    terms: '',
    cookie: '',
    privacy: '',
  },
  blog: {
    blogTitle: '',
    blogButton: '',
    mainPageTitle: '',
    pageTitle: '',
    title: '',
    book: {
      title: '',
      text: '',
      buttonTitle: '',
      buttonLink: '',
    },
    categoryTitle: '',
    tagTitle: '',
    recentTitle: '',
    video: {
      title: '',
      text: ``,
      buttonTitle: '',
      videoLength: '',
    },
    reviews: {
      title: '',
      text: '',
    },
    accreditation: {
      title: '',
      text: '',
      imgs: [],
    },
  },
  privacy: {
    title: '',
    pageTitle: '',
    mainPageTitle: '',
    content: '',
  },
  terms: {
    title: '',
    mainPageTitle: '',
    pageTitle: '',
    content: '',
  },
  nofound: {
    title: '',
    subText: '',
    text: ``,
    backButton: '',
    homeButton: '',
  },
  job: {
    shareList: [],
    shareTitle: '',
    mainPageTitle: '',
    pageTitle: '',
    benefits: {
      title: '',
      list: [],
    },
    company: {
      title: ' ',
      text: ``,
    },
    descriptionTitle: '',
    qualification: {
      title: '',
      text: ``,
    },
    info: {
      title: '',
      text: ``,
      closingTitle: '',
      closingText: '',
      closingSubText: ``,
    },
    form: {
      subtitle: '',
      title: '',
      p1: ``,
      emailTitle: '',
      email: '',
      p2: ``,
      socials: [],
    },
  },
  thanks: {
    pageTitle: '',
    title: '',
    text: ``,
    backButton: '',
    homeButton: '',
  },
  video: {
    mainPageTitle: '',
    pageTitle: '',
    blogTitle: '',
    blogButton: '',
    video: {},
    shareTitle: '',
    shareList: [],
    reviews: {
      title: '',
      text: '',
    },
  },
  videos: {
    categoryTitle: '',
    video: {},
    mainPageTitle: '',
    pageTitle: '',
    reviews: {
      title: '',
      text: '',
    },
    content: {
      title: '',
      text: '',
    },
    list: [],
  },
  cookie: {
    title: '',
    text: ``,
    buttonText: '',
  },
  cookiePage: null,
})

export default ContentStore

export const getHomeIntro = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'intro')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()

    runInAction(() => {
      ContentStore.intro = response
    })
  } catch (e) {
    console.log(e)
  }
}

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

export const getIssueContent = async (link: string) => {
  try {
    const formData = new FormData()
    formData.append('link', link.toString())
    formData.append('status', 'issue-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.issue = response
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

export const getTherapistContent = async (id: string) => {
  try {
    const formData = new FormData()
    formData.append('id', id.toString())
    formData.append('status', 'single-therapists')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.therapist = response[0]
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

export const getSinglePost = async (id: string) => {
  if (!id) return
  try {
    const formData = new FormData()
    formData.append('link', id.toString())
    formData.append('status', 'single-post')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.post = response[0]
    })
  } catch (e) {
    console.log(e)
  }
}

export const getSingleService = async (link: string) => {
  try {
    const formData = new FormData()
    formData.append('link', link.toString())
    formData.append('status', 'services-single')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.service = response[0]
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
    formData.append('status', 'nofound-page')

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

    runInAction(() => {
      ContentStore.job = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getThanks = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'thanks-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.thanks = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getVideoContent = async (link: string) => {
  try {
    const formData = new FormData()
    formData.append('link', link)
    formData.append('status', 'video-single')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.video = response[0]
    })
  } catch (e) {
    console.log(e)
  }
}

export const getVideosContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'video-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.videos = response
    })
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

    runInAction(() => {
      ContentStore.cookie = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getCookiePageContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'cookie-p')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.cookiePage = response
    })
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

export const getFeesContent = async () => {
  try {
    const formData = new FormData()
    formData.append('status', 'fees-page')

    const request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: formData,
    })

    const response = await request.json()

    runInAction(() => {
      ContentStore.fees = response
    })
  } catch (e) {
    console.log(e)
  }
}
