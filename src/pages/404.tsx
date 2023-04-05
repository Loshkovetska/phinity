import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import Layout from '../components/common/Layout'
// import NotFoundContent from '../components/pages/notfound/NotFoundContent'
import { getNoFound } from '../stores/ContentStore'
import React, { Suspense } from 'react'

const NotFoundContent = React.lazy(() =>
  import('../components/pages/notfound/NotFoundContent'),
)

const NoFound = observer(() => {
  const [loading, setLoading] = useState(true)
  const effectRef = useRef<any>(false)

  useEffect(() => {
    if (effectRef.current) return

    document.querySelector('html')?.classList.add('hidden')
    getNoFound().then(() => {
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
        <Layout withFooter={false} withCookie={false} withVideo={false}>
          <Suspense fallback={<></>}>
            <NotFoundContent />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default NoFound
