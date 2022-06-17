import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/common/Header'
import ScrollToTop from '../components/common/ScrollToTop'
import SearchBox from '../components/common/SearchBox'
import NotFoundContent from '../components/pages/notfound/NotFoundContent'
import useLocoScroll from '../hooks/useLoco'
import ContentStore, { getMenu, getNoFound } from '../stores/ContentStore'

const NoFound = observer(() => {
  const [loading, setLoading] = useState(false)
  const [service, setService] = useState<any>(null)
  const ref = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useLocoScroll(!loading)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0)
    getMenu()
    getNoFound().then(() => {
      document.title = `Phinity | ${ContentStore.nofound.title}`
    })
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
            <NotFoundContent />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default NoFound
