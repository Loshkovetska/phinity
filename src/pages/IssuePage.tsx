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
import Reviews from '../components/pages/home/Reviews'
import Therapists from '../components/pages/home/Therapists'
import CanHelp from '../components/pages/issue/CanHelp'
import Services from '../components/pages/issue/Services'
import Symptoms from '../components/pages/issue/Symptoms'
import AboutService from '../components/pages/service/AboutService'
import AboutSphere from '../components/pages/service/AboutSphere'
import TherapyHelp from '../components/pages/service/TherapyHelp'
import Intro from '../components/pages/services/Intro'
import useLocoScroll from '../hooks/useLoco'
import ContentStore, { getBookBlock, getMenu } from '../stores/ContentStore'
import DBStore, {
  getIssue,
  getPosts,
  getReviews,
  getService,
  getServicesByIssue,
  getSymptoms,
  getTherapists,
} from '../stores/DBStore'

const IssuePage = observer(() => {
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
    getIssue(+id!).then(() => {
      DBStore.issue && setService(DBStore.issue)
    })
    getServicesByIssue(+id!)
    getTherapists()
    getPosts()
    getReviews()
    getSymptoms(+id!)
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
      title: ContentStore.issue.intro.mainPageTitle,
      link: '/',
    },
    {
      title: ContentStore.issue.intro.pageTitle,
      link: '/issue',
    },
    {
      title: `${service.title}`,
      link: '/',
    },
  ]
  const dt = {
    title: `${service.title}`,
    text: ContentStore.issue.intro.pageTitle,
  }

  const getBlogTitle = () => {
    let t = service.title.replaceAll('\n', ' ')
    if (t.includes('(')) {
      const idx = t.indexOf('(')
      t = t.slice(0, idx)

      return t
    }
    return t
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
            <AboutService classname="issue" dt={ContentStore.issue.about} />
            <Symptoms />
            <CanHelp />
            <Services title={ContentStore.issue.serviceTitle} />
            <TherapyHelp dt={ContentStore.issue.therapyHelp} />
            <Therapists therapist={ContentStore.issue.therapist}
            therapists={ContentStore.issue.therapists}/>
            <Reviews dt={ContentStore.issue.reviews}/>
            <Blogs title={ContentStore.issue.blogTitle} />
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default IssuePage
