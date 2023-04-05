import { observer } from 'mobx-react'
import { Suspense, useEffect, useRef, useState, lazy } from 'react'
import Layout from '../components/common/Layout'
import ContentStore, { getHome, getTerms } from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'

const TermsContent = lazy(() =>
  import('../components/pages/terms/TermsContent'),
)

const TermsPage = observer(() => {
  const [loading, setLoading] = useState(true)
  const effectRef = useRef<any>(false)

  useEffect(() => {
    if (effectRef.current) return

    getReviewsIO()
    getHome()
    getTerms().then(() => {
      setLoading(false)
    })
    effectRef.current = true
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

  return (
    <>
      {!loading && (
        <Layout withVideo={false}>
          <Suspense>
            <TermsContent dt={ContentStore.terms} />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default TermsPage
