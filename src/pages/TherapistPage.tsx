import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import BookBlock from '../components/pages/home/BookBlock'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import {
  getIssues,
  getReviews,
  getServices,
  getTherapist,
  getTherapists,
  getServicesByTherapists,
} from '../stores/DBStore'
import Reviews from '../components/pages/home/Reviews'
import Issues from '../components/pages/home/Issues'
import { useParams } from 'react-router'
import Intro from '../components/pages/therapist/Intro'
import TherapistBlock from '../components/pages/therapist/TherapistBlock'
import Services from '../components/pages/issue/Services'
import Contact from '../components/pages/therapist/Contact'
import { observer } from 'mobx-react'
import ContentStore, { getBookBlock, getMenu } from '../stores/ContentStore'

const TherapistPage = observer(() => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { id: id } = useParams()
  useLocoScroll(!loading)
  useEffect(() => {
    document.title = 'Phinity Therapy | Therapist'
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
    getReviews()
    getTherapist(+id!)
    getServicesByTherapists()
    getIssues()
    getMenu()
    getBookBlock()
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
            <TherapistBlock />
            <Services title={ContentStore.therapist.serviceTitle} />
            <Issues classname="therapist" dt={ContentStore.therapist.issues} />
            <Reviews dt={ContentStore.therapist.reviews} />
            <Contact />
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default TherapistPage
