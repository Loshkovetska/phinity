import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import DBStore, {
  getPopularPosts,
  getPopularVideos,
  getPosts,
  getReviews,
  getVideo,
  getVideos,
} from '../stores/DBStore'

import { useParams } from 'react-router'
import { observer } from 'mobx-react'

import ContentStore, {
  getBookBlock,
  getHome,
  getVideoContent,
} from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'
import Layout from '../components/common/Layout'


const Reviews= lazy(()=>import('../components/pages/home/Reviews'))
const BookBlock= lazy(()=>import('../components/pages/home/BookBlock'))
const PopularPosts= lazy(()=>import('../components/pages/video/PopularPosts'))
const PopularVideos = lazy(() => import('../components/pages/videos/PopularVideos'))
const VideoIntro= lazy(()=>import('../components/pages/video/VideoIntro'))
const VideoPage = observer(() => {
  const [loading, setLoading] = useState(true)
  const { sub: id } = useParams()
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
    getVideos()
    getBookBlock()
    getPopularVideos()
    getVideoContent(id!)
    getReviewsIO()
    getHome()
    getPosts()
    getPopularPosts()
    getVideo(id!).then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  if (!DBStore.video) return <></>

  return (
    <>
      {!loading && (
        <Layout withVideo={false}>
          <Suspense fallback={<></>}>
            <VideoIntro />
            <PopularPosts
              content={{
                title: ContentStore.video.blogTitle,
                buttonTitle: ContentStore.video.blogButton,
              }}
            />
            <PopularVideos content={ContentStore.video.video} />
            <Reviews dt={ContentStore.video.reviews} />
            <BookBlock />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default VideoPage
