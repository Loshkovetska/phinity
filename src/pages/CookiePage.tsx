import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import Layout from '../components/common/Layout'
import ContentStore, {
  getCookiePageContent,
  getHome,
} from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'
import { lazy, Suspense } from 'react'

const TermsContent = lazy(() =>
  import('../components/pages/terms/TermsContent'),
)
const CookiePage = observer(() => {
  const [loading, setLoading] = useState(true)
  const effectRef = useRef<any>(false)

  useEffect(() => {
    if (effectRef.current) return
    getReviewsIO()
    getHome()
    getCookiePageContent().then(() => {
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

  useEffect(() => {
    document.querySelector('.terms')?.classList.add('cookie-page')
  }, [ContentStore.cookiePage])

  if (!ContentStore.cookiePage) return <></>

  return (
    <>
      {!loading && (
        <Layout withVideo={false}>
          <Suspense fallback={<></>}>
            <TermsContent dt={ContentStore.cookiePage} />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default CookiePage
