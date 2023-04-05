import { useEffect, useRef, useState } from 'react'
import { getFaqs } from '../stores/DBStore'
import { observer } from 'mobx-react'
import ContentStore, { getFaqContent, getHome } from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import { lazy, Suspense } from 'react'

const Contact = lazy(() => import('../components/pages/about/Contact'))
const FaqList = lazy(() => import('../components/pages/faq/FaqList'))

const FaqPage = observer(() => {
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

    getFaqs()
    getReviewsIO()
    getHome()
    getFaqContent().then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])
  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  return (
    <>
      <Layout withVideo={false}>
        <Suspense fallback={<></>}>
          <FaqList />
          <Contact dt={ContentStore.faq.contact} />
        </Suspense>
      </Layout>
    </>
  )
})

export default FaqPage
