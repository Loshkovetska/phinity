import { observer } from 'mobx-react'
import { Suspense, useEffect, useRef, useState, lazy } from 'react'
import Layout from '../components/common/Layout'
import { getHome, getPrivacy } from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'

const PrivacyContent = lazy(() =>
  import('../components/pages/privacy/PrivacyContent'),
)
const PrivacyPage = observer(() => {
  const [loading, setLoading] = useState(true)
  const effectRef = useRef<any>(false)

  useEffect(() => {
    if (effectRef.current) return

    getReviewsIO()
    getHome()
    getPrivacy().then(() => {
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
          <Suspense fallback={<></>}>
            <PrivacyContent />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default PrivacyPage
