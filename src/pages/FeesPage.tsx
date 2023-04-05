import { Suspense, useEffect, useRef, useState, lazy } from 'react'
import { getReviews } from '../stores/DBStore'
import { observer } from 'mobx-react'
import ContentStore, { getFeesContent, getHome } from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'
import Layout from '../components/common/Layout'

const Servives = lazy(() => import('../components/pages/home/Services'))
const FeesTable = lazy(() => import('../components/pages/fees/FeesTable'))
const Rules = lazy(() => import('../components/pages/fees/Rules'))
const Benefits = lazy(() => import('../components/pages/fees/Benefits'))

const FeesPage = observer(() => {
  const [loading, setLoading] = useState(true)

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
    getReviewsIO()
    getHome()
    getFeesContent().then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])
  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  return (
    <>
      {!loading && (
        <Layout withVideo={false}>
          <Suspense fallback={<></>}>
            <FeesTable />
            <Rules />
            <Benefits />
            <Servives dt={ContentStore.fees.services} />
          </Suspense>
          <div className="space-block "></div>
        </Layout>
      )}
    </>
  )
})

export default FeesPage
