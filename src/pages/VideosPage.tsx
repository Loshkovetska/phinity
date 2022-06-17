import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import Reviews from '../components/pages/home/Reviews'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import DBStore, {
  getReviews,
  getPosts,
  getVideos,
  getPost,
} from '../stores/DBStore'
import BookBlock from '../components/pages/home/BookBlock'
import { useParams } from 'react-router'
import { observer } from 'mobx-react'
import VideosContent from '../components/pages/videos/VideosContent'
import VideosList from '../components/pages/videos/VideosiList'
import ContentStore, {
  getBookBlock,
  getMenu,
  getVideoContent,
  getVideosContent,
} from '../stores/ContentStore'

const VideosPage = observer(() => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>(null)
  const { id: id } = useParams()
  const containerRef = useRef<HTMLDivElement>(null)
  useLocoScroll(!loading)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0)

    getMenu()
  }, [])

  useEffect(() => {
    if (!loading) {
      if (typeof window === 'undefined' || !window.document) {
        return
      }
    }
  }, [loading])

  useEffect(() => {
    getReviews()
    getVideos()
    getBookBlock();
  }, [])

  useEffect(() => {
    getVideosContent().then(() => {
      document.title = `Phinity | ${ContentStore.videos.pageTitle}`
    })
  }, [])

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
            <VideosContent />
            <VideosList />
            <Reviews dt={ContentStore.videos.reviews} />
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default VideosPage
