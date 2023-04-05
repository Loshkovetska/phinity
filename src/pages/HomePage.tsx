import { useEffect, useRef, useState } from 'react'
// import Intro from '../components/pages/home/Intro'
// import Offers from '../components/pages/home/Offers'
// import About from '../components/pages/home/About'
// import Issues from '../components/pages/home/Issues'
// import Accreditation from '../components/pages/home/Accreditation'
// import Reviews from '../components/pages/home/Reviews'
// import Servives from '../components/pages/home/Services'
// import Therapists from '../components/pages/home/Therapists'
// import Blogs from '../components/pages/home/Blogs'
// import BookBlock from '../components/pages/home/BookBlock'
import DBStore, {
  getPosts,
  getReviews,
  getTherapists,
  getVideos,
} from '../stores/DBStore'
import { getReviewsIO } from '../stores/GlobalState'
import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getHome,
  getHomeIntro,
} from '../stores/ContentStore'
import Videos from '../components/pages/blog/Videos'

import React, { Suspense } from 'react'
import Layout from '../components/common/Layout'

const Intro = React.lazy(() => import('../components/pages/home/Intro'))
const Offers = React.lazy(() => import('../components/pages/home/Offers'))
const About = React.lazy(() => import('../components/pages/home/About'))
const Issues = React.lazy(() => import('../components/pages/home/Issues'))
const Therapists = React.lazy(() =>
  import('../components/pages/home/Therapists'),
)
const Accreditation = React.lazy(() =>
  import('../components/pages/home/Accreditation'),
)

const Reviews = React.lazy(() => import('../components/pages/home/Reviews'))
const Servives = React.lazy(() => import('../components/pages/home/Services'))
const Blogs = React.lazy(() => import('../components/pages/home/Blogs'))
const BookBlock = React.lazy(() => import('../components/pages/home/BookBlock'))

const HomePage = observer(() => {
  const requestRef = useRef<any>(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>(null)

  useEffect(() => {
    if (!loading) {
      if (typeof window === 'undefined' || !window.document) {
        return
      }
    }
  }, [loading])

  useEffect(() => {
    if (requestRef.current) return
    getPosts()
    getTherapists()
    getReviews()
    getReviewsIO()
    getBookBlock()
    getVideos()
    getHomeIntro()
    getHome().then(() => {})
    requestRef.current = true
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  return (
    <>
      <Layout withScroll withFooter>
        <Suspense fallback={<></>}>
          <Intro />
          <Offers />
          <About />
          <Issues
            dt={ContentStore.home.issues}
            arr={ContentStore.home.issues.list}
          />
          <Therapists
            dt={DBStore.therapists}
            therapist={ContentStore.home.therapist}
            therapists={ContentStore.home.therapists}
          />
          <Accreditation accreditation={ContentStore.home.accreditation} />
          <Reviews dt={ContentStore.home.reviews} />
          <Servives dt={ContentStore.home.services} />
          <Blogs arr={DBStore.posts} dt={ContentStore.home.blog} />
          <Videos arr={DBStore.videos} dt={ContentStore.home.video} />
          <BookBlock />
        </Suspense>
      </Layout>
    </>
  )
})

export default HomePage
