import { lazy, Suspense, useEffect, useRef, useState } from 'react'

import { getIssues, getReviews, getTherapist } from '../stores/DBStore'
import { useParams } from 'react-router'

import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getHome,
  getTherapistContent,
} from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'
import { Issue } from '../api/mocks/issues'
import { Service } from '../api/mocks/services'
import Layout from '../components/common/Layout'

const BookBlock = lazy(()=>import('../components/pages/home/BookBlock'))
const Reviews = lazy(()=>import('../components/pages/home/Reviews'))
const Issues = lazy(()=>import('../components/pages/home/Issues'))
const Intro = lazy(() => import( '../components/pages/therapist/Intro'))
const TherapistBlock = lazy(()=>import('../components/pages/therapist/TherapistBlock'))

const Services = lazy(()=>import('../components/pages/issue/Services'))
const Contact = lazy(()=>import('../components/pages/therapist/Contact'))

const TherapistPage = observer(() => {
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

  useEffect(() => {
    if (effectRef.current) return
    getReviews()
    getTherapist(id!)
    getIssues()
    getBookBlock()
    getReviewsIO()
    getHome()
    getTherapistContent(id!).then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }
  let issues: Array<Issue> = [],
    services: Array<Service> = []
  if (ContentStore.therapist.issues.list) {
    issues = JSON.parse(JSON.stringify(ContentStore.therapist.issues.list))
  }
  if (ContentStore.therapist.services.list) {
    services = JSON.parse(JSON.stringify(ContentStore.therapist.services.list))
  }

  return (
    <>
      {!loading && (
        <Layout withVideo={false}>
          <Suspense fallback={<></>}>
            <Intro />
            <TherapistBlock />
            <Services
              title={ContentStore.therapist.services.title}
              dt={services.sort((a: Service, b: Service) =>
                a.title.localeCompare(b.title),
              )}
            />
            <Issues
              classname="therapist"
              dt={ContentStore.therapist.issues}
              arr={issues.sort((a: Issue, b: Issue) =>
                a.title.localeCompare(b.title),
              )}
            />
            <Reviews dt={ContentStore.therapist.reviews} />
            <Contact />
            <BookBlock />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default TherapistPage
