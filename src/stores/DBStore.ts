import { observable, runInAction } from 'mobx'
import { createNull } from 'typescript'
import categories from '../api/mocks/categories'
import faqs, { Faq } from '../api/mocks/faqs'
import images from '../api/mocks/images'
import issues, { Issue } from '../api/mocks/issues'
import posts, { Post } from '../api/mocks/posts'
import reviews, { Review } from '../api/mocks/reviews'
import services, { Service } from '../api/mocks/services'
import symptoms from '../api/mocks/symptoms'
import tags from '../api/mocks/tags'
import therapists, { Therapist } from '../api/mocks/therapists'
import { vacancies, Vacancy } from '../api/mocks/vacancies'
import videos, { Video } from '../api/mocks/videos'
import { DOMAIN } from '../mocks/doman'
import GlobalState from './GlobalState'

type DBStoreType = {
  reviews: Review[] | null
  therapists: Therapist[] | null
  services: Service[] | null
  posts: Post[] | null
  therapist: Therapist | null
  post: Post | null
  service: Service | null
  issues: Issue[] | null
  issue: Issue | null
  images: Array<string> | null
  tags: Array<string> | null
  categories: Array<string> | null
  videos: Array<Video> | null
  video: Video | null
  faqs: Array<Faq> | null
  vacancies: Array<Vacancy> | null
  vacancy: Vacancy | null
  symptoms: Array<{
    title: string
    text: string
  }> | null
}

const DBStore: DBStoreType = observable({
  reviews: Array(),
  therapists: Array(),
  services: Array(),
  posts: Array(),
  therapist: null,
  post: null,
  service: null,
  issues: null,
  issue: null,
  images: null,
  tags: null,
  categories: null,
  videos: null,
  video: null,
  faqs: null,
  vacancies: null,
  vacancy: null,
  symptoms: null,
})

export default DBStore

export const getReviews = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'reviews')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.reviews = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getPosts = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'post')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.posts = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getPost = async (id: number) => {
  try {
    // const fd = new FormData()
    // fd.append('status', 'posts')
    // let request = await fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // })
    // let response = await request.json()
    runInAction(() => {
      DBStore.post = posts.find((p) => p.id == id) || null //response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getTherapists = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'therapists')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.therapists = response
    })
  } catch (e) {
    console.log(e)
  }
}
export const getTherapist = async (id: number) => {
  try {
    // const fd = new FormData()
    // fd.append('status', 'therapists')
    // let request = await fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // })
    // let response = await request.json()
    runInAction(() => {
      DBStore.therapist = therapists.find((t) => t.id == id) || null //response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getServices = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'services')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()

    runInAction(() => {
      DBStore.services = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getService = async (id: number) => {
  try {
    const fd = new FormData()
    fd.append('id', id.toString())
    fd.append('status', 'services-single')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.service = response || null
    })
  } catch (e) {
    console.log(e)
  }
}

export const getTherapistsByService = async (id: number) => {
  try {
    // const fd = new FormData()
    // fd.append('status', 'therapists')
    // let request = await fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // })
    // let response = await request.json()
    runInAction(() => {
      DBStore.therapists = therapists.filter((s) => s.service_id == id) || null //response
    })
  } catch (e) {
    console.log(e)
  }
}
export const getIssuesByService = async (id: number) => {
  try {
    // const fd = new FormData()
    // fd.append('status', 'therapists')
    // let request = await fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // })
    // let response = await request.json()
    runInAction(() => {
      DBStore.issues = issues.slice(0, 6) || null //response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getServicesByTherapists = () => {
  try {
    // const fd = new FormData()
    // fd.append('status', 'therapists')
    // let request = await fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // })
    // let response = await request.json()
    runInAction(() => {
      DBStore.services = services.slice(0, 10) //response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getServicesByIssue = async (id: number) => {
  try {
    // const fd = new FormData()
    // fd.append('status', 'therapists')
    // let request = await fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // })
    // let response = await request.json()
    runInAction(() => {
      DBStore.services = services.slice(0, 18) //response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getImages = async () => {
  try {
    // const fd = new FormData()
    // fd.append('status', 'therapists')
    // let request = await fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // })
    // let response = await request.json()
    runInAction(() => {
      DBStore.images = images //response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getIssues = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'issues')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.issues = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getIssue = async (id: number) => {
  try {
    const fd = new FormData()
    fd.append('status', 'issues')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.issue = response.find((i: any) => i.id == id) || createNull
    })
  } catch (e) {
    console.log(e)
  }
}

export const sortTherapists = async (sort: any, total: number) => {
  try {
    if (!total) {
      runInAction(() => {
        GlobalState.theraFilterCount = total
        GlobalState.sortThera = {
          jobCat: Array(),
          approach: Array(),
          exper: Array(),
          time: Array(),
          locate: Array(),
        }
      })
      runInAction(() => {
        DBStore.therapists = therapists
      })

      return
    }
    const fd = new FormData()
    fd.append('text', JSON.stringify(sort))
    fd.append('status', 'sort')
    // let response = await fetch('/', {
    //   method: 'POST',
    //   body: new FormData(),
    // })

    // let res = await response.json();

    runInAction(() => {
      GlobalState.theraFilterCount = total
      GlobalState.sortThera = sort
    })

    runInAction(() => {
      DBStore.therapists = therapists.slice(0, 3)
    })
  } catch (e) {
    console.log(e)
  }
}

export const getTags = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'tags')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.tags = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getCategories = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'category-therapists')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.categories = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getFaqs = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'faqs')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.faqs = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getVacancies = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'vacancies')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.vacancies = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getVideos = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'videos')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.videos = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getVideo = async (id: number) => {
  try {
    // const fd = new FormData()
    // fd.append('status', 'therapists')
    // let request = await fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // })
    // let response = await request.json()
    runInAction(() => {
      DBStore.video = videos.find((v) => v.id == id) || null //response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getVacancy = async (id: number) => {
  try {
    // const fd = new FormData()
    // fd.append('status', 'therapists')
    // let request = await fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // })
    // let response = await request.json()
    runInAction(() => {
      DBStore.vacancy = vacancies.find((v) => v.id == id) || null //response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getSymptoms = async (id: number) => {
  try {
    const fd = new FormData()
    fd.append('status', 'symptoms')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.symptoms = response
    })
  } catch (e) {
    console.log(e)
  }
}
