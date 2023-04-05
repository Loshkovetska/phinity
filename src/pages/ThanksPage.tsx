import { observer } from 'mobx-react'
import { Suspense, useEffect, useRef, useState, lazy } from 'react'
import Layout from '../components/common/Layout'
import { getMenu, getThanks } from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'

const ThanksContent = lazy(() =>
  import('../components/pages/thanks/ThanksContent'),
)

const ThanksPage = observer(() => {
  const [loading, setLoading] = useState(true)
  const effectRef = useRef<any>(false)

  useEffect(() => {
    if (effectRef.current) return

    getReviewsIO()
    getThanks().then(() => {
      setLoading(false)
    })

    document.querySelector('html')?.classList.add('hidden')
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
        <Layout withVideo={false} withFooter={false}>
          <Suspense fallback={<></>}>
            <ThanksContent />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default ThanksPage
