import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import BookBlock from '../components/pages/home/BookBlock'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import {
  getCategories,
  getReviews,
  getServices,
  getTherapists,
} from '../stores/DBStore'
import Reviews from '../components/pages/home/Reviews'
import Therapists from '../components/pages/therapists/Therapists'
import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getMenu,
  getTherapistsContent,
} from '../stores/ContentStore'

const TherapistsPage = observer(() => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useLocoScroll(!loading)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0)
    getMenu()
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
    getTherapists()
    getTherapistsContent().then(() => {
      document.title = `Phinity Therapy | ${ContentStore.therapists.pageTitle}`
    })
    getBookBlock()
    getCategories()
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
            <Therapists />
            <Reviews dt={ContentStore.therapists.reviews} />
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default TherapistsPage
