import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import Intro from '../components/pages/home/Intro'
import Offers from '../components/pages/home/Offers'
import About from '../components/pages/home/About'
import Issues from '../components/pages/home/Issues'
import Accreditation from '../components/pages/home/Accreditation'
import Reviews from '../components/pages/home/Reviews'
import Servives from '../components/pages/home/Services'
import Therapists from '../components/pages/home/Therapists'
import Blogs from '../components/pages/home/Blogs'
import BookBlock from '../components/pages/home/BookBlock'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import {
  getIssues,
  getPosts,
  getReviews,
  getTherapists,
} from '../stores/DBStore'
import { getReviewsIO } from '../stores/GlobalState'
import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getHome,
  getMenu,
} from '../stores/ContentStore'
import Cookie from '../components/common/Cookie'
const HomePage = observer(() => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useLocoScroll(!loading)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0)
  }, [])
  useEffect(() => {
    if (!loading) {
      if (typeof window === 'undefined' || !window.document) {
        return
      }
    }
  }, [loading])

  useEffect(() => {
    getPosts()
    getTherapists()
    getReviews()
    getIssues()
    getReviewsIO()
    getBookBlock()
    getHome().then(() => {
      document.title = `Phinity Therapy | ${ContentStore.home.pageTitle}`
    })
    getMenu()
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  return (
    <>
      <div ref={ref}></div>
      <ScrollToTop headerContent={ref} />
      {!loading && (
        <div
          className="smooth"
          data-scroll
          ref={containerRef}
          data-load-container
        >
          <div className="container">
            <Header />
            <Intro />
            <Offers />
            <About />
            <Issues dt={ContentStore.home.issues} />
            <Therapists
              therapist={ContentStore.home.therapist}
              therapists={ContentStore.home.therapists}
            />
            <Accreditation accreditation={ContentStore.home.accreditation} />
            <Reviews dt={ContentStore.home.reviews} />
            <Servives dt={ContentStore.home.services} />
            <Blogs />
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
      <Cookie />
    </>
  )
})

export default HomePage
