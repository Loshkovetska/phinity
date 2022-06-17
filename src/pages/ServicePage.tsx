import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ScrollToTop from '../components/common/ScrollToTop'
import SearchBox from '../components/common/SearchBox'
import Blogs from '../components/pages/home/Blogs'
import BookBlock from '../components/pages/home/BookBlock'
import Issues from '../components/pages/home/Issues'
import Therapists from '../components/pages/home/Therapists'
import AboutService from '../components/pages/service/AboutService'
import AboutSphere from '../components/pages/service/AboutSphere'
import TherapyHelp from '../components/pages/service/TherapyHelp'
import Intro from '../components/pages/services/Intro'
import useLocoScroll from '../hooks/useLoco'
import ContentStore, {
  getBookBlock,
  getMenu,
  getSingleService,
} from '../stores/ContentStore'
import DBStore, {
  getIssues,
  getIssuesByService,
  getPosts,
  getService,
  getTherapists,
} from '../stores/DBStore'

const ServicePage = observer(() => {
  const [loading, setLoading] = useState(false)
  const [service, setService] = useState<any>(null)
  const ref = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { id: id } = useParams()

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
    getService(+id!).then(() => {
      DBStore.service && setService(DBStore.service)
    })
    getTherapists()
    getPosts()
    getIssuesByService(+id!)
    getSingleService()
    getBookBlock()
    getMenu()
  }, [])

  useEffect(() => {
    if (service) {
      document.title = `Phinity | ${service.title}`
    }
  }, [service])

  if (typeof window === 'undefined' || !window.document || !service) {
    return <></>
  }
  const links = [
    {
      title: ContentStore.service.intro.mainPageTitle,
      link: '/',
    },
    {
      title: ContentStore.service.intro.pageTitle,
      link: '/services',
    },
    {
      title: `${service.title}`,
      link: '/',
    },
  ]

  const dt = {
    title: `${service.title}`,
    text: ContentStore.service.intro.text,
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
            <Intro dt={dt} links={links} classname="service-page" />
            <AboutService dt={ContentStore.service.about} />
            <AboutSphere />
            <Issues classname="service-page" dt={ContentStore.service.issues} />
            <TherapyHelp dt={ContentStore.service.help} />
            <Therapists
              therapist={ContentStore.service.therapist}
              therapists={ContentStore.service.therapists}
            />
            <Blogs title={ContentStore.service.blogTitle} />
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default ServicePage
