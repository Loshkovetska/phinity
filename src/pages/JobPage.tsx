import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ScrollToTop from '../components/common/ScrollToTop'
import SearchBox from '../components/common/SearchBox'
import PrivacyContent from '../components/pages/privacy/PrivacyContent'
import CVForm from '../components/pages/work/CVForm'
import VacancyContent from '../components/pages/work/VacancyContent'
import VacanciesContent from '../components/pages/works/VacanciesContent'
import useLocoScroll from '../hooks/useLoco'
import { getJobContent, getMenu } from '../stores/ContentStore'
import DBStore, { getVacancies, getVacancy } from '../stores/DBStore'

const JobPage = observer(() => {
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

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  useEffect(() => {
    getVacancy(+id!).then(() => {
      document.title = `Phinity | ${DBStore.vacancy?.title}`
    })
    getMenu()
    getJobContent()
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
            <VacancyContent />
            <CVForm />
            <SearchBox />
            <Footer />
          </div>
        </div>
      )}
    </>
  )
})

export default JobPage
