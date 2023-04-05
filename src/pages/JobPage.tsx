import { observer } from 'mobx-react'
import { Suspense, useEffect, useRef, useState, lazy } from 'react'
import { useParams } from 'react-router'
import Layout from '../components/common/Layout'
import { getHome, getJobContent } from '../stores/ContentStore'
import DBStore, { getVacancy } from '../stores/DBStore'
import { getReviewsIO } from '../stores/GlobalState'

const Footer = lazy(() => import('../components/common/Footer'))
const CVForm = lazy(() => import('../components/pages/work/CVForm'))
const VacancyContent = lazy(() =>
  import('../components/pages/work/VacancyContent'),
)

const JobPage = observer(() => {
  const [loading, setLoading] = useState(true)
  const { sub: id } = useParams()
  const effectRef = useRef<any>(false)

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
    if (effectRef.current) return
    getJobContent()
    getReviewsIO()
    getHome()
    getVacancy(id!).then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])

  return (
    <>
      {!loading && (
        <Layout withFooter={false} withVideo={false}>
          <Suspense fallback={<></>}>
            <VacancyContent />
            {DBStore.vacancy && <CVForm />}
            {DBStore.vacancy && <Footer />}
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default JobPage
