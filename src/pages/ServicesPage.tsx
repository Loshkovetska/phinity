import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import Intro from '../components/pages/services/Intro'
import BookBlock from '../components/pages/home/BookBlock'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import OurServices from '../components/pages/services/OurServices'
import PhinityAdvantages from '../components/pages/services/PhitityAdvantages'
import DBStore, { getServices } from '../stores/DBStore'
import { observer } from 'mobx-react'
import ContentStore, { getBookBlock, getMenu, getServicesContent } from '../stores/ContentStore'

const ServicesPage = observer(() => {
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
    getServices()
    getServicesContent().then(() => {
      document.title = `Phinity Therapy | ${ContentStore.services.pageTitle}`
    })
    getBookBlock()
    getMenu()
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  if (!ContentStore.services) return <></>
  const links = [
    {
      title: ContentStore.services.mainPageTitle,
      link: '/',
    },
    {
      title: ContentStore.services.pageTitle,
      link: '/services',
    },
  ]


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
            <Intro
              dt={ContentStore.services.intro}
              links={links}
              classname="service-page"
            />
            <OurServices />
            <PhinityAdvantages dt={ContentStore.services.advantages} />
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default ServicesPage
