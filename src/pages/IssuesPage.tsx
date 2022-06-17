import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import Intro from '../components/pages/services/Intro'
import BookBlock from '../components/pages/home/BookBlock'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import OurServices from '../components/pages/issues/OurServices'
import { getIssues, getServices } from '../stores/DBStore'
import IssuesList from '../components/pages/issues/IssuesList'
import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getIssuesContent,
  getMenu,
} from '../stores/ContentStore'

const IssuesPage = observer(() => {
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
    getIssues()
    getIssuesContent().then(() => {
      document.title = `Phinity Therapy | ${ContentStore.issues.pageTitle}`
    })
    getBookBlock()
    getMenu()
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  if (!ContentStore.issues) return <></>
  const links = [
    {
      title: ContentStore.issues.mainPageTitle,
      link: '/',
    },
    {
      title: ContentStore.issues.pageTitle,
      link: '/issues',
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
              dt={ContentStore.issues.intro}
              links={links}
              classname="service-page"
            />
            <OurServices />
            <IssuesList />
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default IssuesPage
