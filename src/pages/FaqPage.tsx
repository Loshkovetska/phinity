import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import { getReviews, getImages, getFaqs } from '../stores/DBStore'

import Contact from '../components/pages/about/Contact'
import FaqList from '../components/pages/faq/FaqList'
import { observer } from 'mobx-react'
import ContentStore, { getFaqContent, getMenu } from '../stores/ContentStore'

const FaqPage = observer(() => {
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
    getFaqs()
    getFaqContent().then(() => {
      document.title = `Phinity Therapy | ${ContentStore.faq.pageTitle}`
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
            <FaqList />
            <Contact dt={ContentStore.faq.contact} />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default FaqPage
