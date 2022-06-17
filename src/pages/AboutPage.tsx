import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import Reviews from '../components/pages/home/Reviews'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import { getReviews, getImages } from '../stores/DBStore'
import AboutContent from '../components/pages/about/AboutContent'
import AboutPhinity from '../components/pages/about/AboutPhinity'
import OurTeam from '../components/pages/about/OutTeam'
import Phylosophy from '../components/pages/about/Phylosophy'
import PhinityAdvantages from '../components/pages/services/PhitityAdvantages'
import ChooseUs from '../components/pages/about/ChooseUs'
import OurClinic from '../components/pages/about/OurClinic'
import Contact from '../components/pages/about/Contact'
import { observer } from 'mobx-react'
import ContentStore, { getAbout, getMenu } from '../stores/ContentStore'

const AboutPage = observer(() => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useLocoScroll(!loading)
  useEffect(() => {
    document.title = 'Phinity Therapy | About'
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
    getImages()
    getReviews()
    getAbout()
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
            <AboutContent />
            <AboutPhinity />
            <OurTeam />
            <Phylosophy />
            <OurClinic />
            <PhinityAdvantages dt={ContentStore.about.advantages} />
            <ChooseUs />
            <Reviews dt={ContentStore.about.reviews} />
            <Contact dt={ContentStore.about.contact} />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default AboutPage
