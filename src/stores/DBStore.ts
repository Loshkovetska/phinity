import { observable, runInAction } from 'mobx'
import { Faq } from '../api/mocks/faqs'
import { Issue } from '../api/mocks/issues'
import { Post } from '../api/mocks/posts'
import { Review } from '../api/mocks/reviews'
import { Service } from '../api/mocks/services'
import { Therapist } from '../api/mocks/therapists'
import { Vacancy } from '../api/mocks/vacancies'
import { Video } from '../api/mocks/videos'
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
  tags: Array<string> | null
  categories: Array<string> | null
  videos: Array<Video> | null
  video: Video | null
  faqs: Array<Faq> | null
  vacancies: Array<Vacancy> | null
  vacancy: Vacancy | null
  issuesFilters: any
  servicesFilters: any
  symptoms: Array<{
    title: string
    text: string
  }> | null
  popularVideos: Array<Video> | null
  therapistsFilter: any
  popularPosts: Array<Post> | null
  videosFilter: any
  postCategories: Array<any> | null
  worksCategories: Array<any> | null
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
  issuesFilters: null,
  servicesFilters: null,
  videosFilter: null,
  popularVideos: null,
  therapistsFilter: null,
  popularPosts: null,
  postCategories: null,
  worksCategories: null,
})

export default DBStore

export const getPopularVideos = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'popular-videos')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()

    runInAction(() => {
      DBStore.popularVideos = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getPopularPosts = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'popular-post')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()

    runInAction(() => {
      DBStore.popularPosts = response
    })
  } catch (e) {
    console.log(e)
  }
}

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

export const getPost = async (link: string) => {
  try {
    const fd = new FormData()
    fd.append('status', 'post')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.post = response.find((p: any) => p.link == link) || null
    })
  } catch (e) {
    console.log(e)
  }
}

export const getWorkFilters = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'category-vacancies')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.worksCategories = response
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
export const getTherapist = async (id: string) => {
  try {
    const fd = new FormData()
    fd.append('status', 'therapists')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.therapist = response.find((t: any) => t.link == id) || null
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

export const filterServices = async (st: any) => {
  try {
    const fd = new FormData()
    fd.append('dt', JSON.stringify(st))
    fd.append('status', 'filter-services')
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

export const filterTherapists = async (st: any) => {
  try {
    const fd = new FormData()
    fd.append('dt', JSON.stringify(st))
    fd.append('status', 'filter-therapists')
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

export const getTherapistsFilters = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'category-therapists')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.therapistsFilter = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getServicesFilters = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'f-services')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.servicesFilters = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getBlogCategories = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'category-post')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.postCategories = response.sort((a: any, b: any) =>
        a.localeCompare(b),
      )
    })
  } catch (e) {
    console.log(e)
  }
}

export const getVideosFilters = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'category-video')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.videosFilter = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const getService = async (link: string) => {
  try {
    const fd = new FormData()
    fd.append('link', link.toString())
    fd.append('status', 'services')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.service = response.find((r: any) => r.link == link)
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

export const getIssuesFilters = async () => {
  try {
    const fd = new FormData()
    fd.append('status', 'f-issues')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.issuesFilters = response
    })
  } catch (e) {
    console.log(e)
  }
}

export const filterIssues = async (st: any) => {
  try {
    const fd = new FormData()
    fd.append('dt', JSON.stringify(st))
    fd.append('status', 'filter-issues')
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

export const filterVideos = async (st: any) => {
  try {
    const fd = new FormData()
    fd.append('dt', JSON.stringify(st))
    fd.append('status', 'filter-videos')
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

export const filterPosts = async (st: any) => {
  try {
    const fd = new FormData()
    fd.append('status', 'post')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()

    const res: any = []
    response.forEach((r: any) => {
      if (st.includes(r.cat)) {
        res.push(r)
      }
    })

    runInAction(() => {
      DBStore.posts = res
    })
  } catch (e) {
    console.log(e)
  }
}

export const getIssue = async (id: string) => {
  try {
    const fd = new FormData()
    fd.append('status', 'issues')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.issue = response.find((i: any) => i.link == id) || null
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

export const filterVacancies = async (st: any) => {
  try {
    const fd = new FormData()
    fd.append('dt', JSON.stringify(st))
    fd.append('status', 'filter-vacancies')
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

export const getVideo = async (id: string) => {
  try {
    const fd = new FormData()
    fd.append('status', 'videos')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()

    runInAction(() => {
      DBStore.video = response.find((v: any) => v.link == id) || null
    })
  } catch (e) {
    console.log(e)
  }
}

export const getVacancy = async (link: string) => {
  try {
    const fd = new FormData()
    fd.append('status', 'vacancies')
    let request = await fetch(DOMAIN + 'react/', {
      method: 'POST',
      body: fd,
    })
    let response = await request.json()
    runInAction(() => {
      DBStore.vacancy = response.find((v: any) => v.link == link) || null
    })
  } catch (e) {
    console.log(e)
  }
}

export const getSymptoms = async (id: number) => {
  try {
    const fd = new FormData()
    fd.append('id', id.toString())
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
