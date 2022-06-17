import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ScrollToTop from '../components/common/ScrollToTop'
import SearchBox from '../components/common/SearchBox'
import VacanciesContent from '../components/pages/works/VacanciesContent'
import useLocoScroll from '../hooks/useLoco'
import ContentStore, { getMenu, getWork } from '../stores/ContentStore'
import { getVacancies } from '../stores/DBStore'

const WorkPage = observer(() => {
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
    getMenu()
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
    getVacancies()
    getWork().then(() => {
      document.title = `Phinity | ${ContentStore.works.pageTitle}`
    })
  }, [])

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
            <VacanciesContent />
            <SearchBox />
            <Footer />
          </div>
        </div>
      )}
    </>
  )
})

export default WorkPage
