import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ScrollToTop from '../components/common/ScrollToTop'
import SearchBox from '../components/common/SearchBox'
import Intro from '../components/pages/services/Intro'
import useLocoScroll from '../hooks/useLoco'
import BookBlock from '../components/pages/home/BookBlock'
import Reviews from '../components/pages/home/Reviews'
import { getReviews } from '../stores/DBStore'
import ContactContent from '../components/pages/contact/ContactContent'
import Location from '../components/pages/contact/Location'
import Contact from '../components/pages/about/Contact'
import ContentStore, {
  getBookBlock,
  getContactContent,
  getMenu,
} from '../stores/ContentStore'

const ContactPage = observer(() => {
  const [loading, setLoading] = useState(false)
  const [service, setService] = useState<any>(null)
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

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  useEffect(() => {
    getReviews()
    getBookBlock()
    getMenu()
    getContactContent().then(() => {
      document.title = `Phinity | ${ContentStore.contact.pageTitle}`
    })
  }, [])

  if (!ContentStore.contact) return <></>


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
              classname="services-page contact"
              dt={ContentStore.contact.intro}
              links={[
                { title: ContentStore.contact.mainPageTitle, link: '/' },
                { title: ContentStore.contact.pageTitle, link: '/contacts' },
              ]}
            />
            <ContactContent />
            <Location />
            <Reviews dt={ContentStore.contact.reviews} />
            <>
              {window.innerWidth > 768 ? (
                <>
                  <BookBlock />
                </>
              ) : (
                <>
                  <Contact dt={ContentStore.contact.contact} />
                </>
              )}
            </>
            <SearchBox />
            <Footer />
          </div>
        </div>
      )}
    </>
  )
})

export default ContactPage
