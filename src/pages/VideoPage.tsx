import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import Reviews from '../components/pages/home/Reviews'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import DBStore, { getReviews, getVideo, getVideos } from '../stores/DBStore'
import BookBlock from '../components/pages/home/BookBlock'
import { useParams } from 'react-router'
import { observer } from 'mobx-react'

import VideoIntro from '../components/pages/video/VideoIntro'
import ContentStore, { getBookBlock, getMenu, getVideoContent } from '../stores/ContentStore'

const VideoPage = observer(() => {
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
    getMenu()
    getBookBlock()
    getVideoContent()
  }, [])

  useEffect(() => {
    getVideo(+id!).then(() => {
      document.title = `Phinity | ${DBStore.video?.title}`
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
            <VideoIntro />
            <Reviews dt={ContentStore.video.reviews} />
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default VideoPage
