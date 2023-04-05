import { lazy, useEffect, useRef, useState } from 'react'
import DBStore, {
  getReviews,
  getVideos,
  getPopularVideos,
  getVideosFilters,
  filterVideos,
} from '../stores/DBStore'
import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getHome,
  getVideosContent,
} from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'
import Filter from '../components/pages/therapists/Filter'
import Layout from '../components/common/Layout'


const BookBlock = lazy(() => import('../components/pages/home/BookBlock'))
const Reviews = lazy(()=>import('../components/pages/home/Reviews'))
const NewVideos = lazy(() => import('../components/pages/videos/NewVideos'))
const PopularVideos = lazy(() => import('../components/pages/videos/PopularVideos'))

const VideosPage = observer(() => {
  const [filter, setFilter] = useState<any>(null)

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

    getReviews()
    getBookBlock()
    getReviewsIO()
    getHome()
    getPopularVideos()
    getVideosFilters()
    getVideosContent().then(() => {})
    getVideos().then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!loading) return
    setTimeout(() => {
      setShow(true)
    }, 2000)
  }, [loading])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  return (
    <>
      {!loading && (
        <Layout>
          <NewVideos />
          {show && (
            <>
              <PopularVideos content={ContentStore.videos.video} />
              <Reviews dt={ContentStore.videos.reviews} />
            </>
          )}
          <BookBlock />
        </Layout>
      )}
      <Filter
        params={[DBStore.videosFilter] || null}
        setFilter={(value) => {
          if (value == null) {
            setFilter(null)
            getVideos()
          } else {
            const st: any = {}
            ;[DBStore.videosFilter]?.forEach((e: any, i: number) => {
              st[e.title.replaceAll(' ', '')] = value[`p${i}`]
            })
            setFilter(st)
            filterVideos(st)
          }
        }}
      />
    </>
  )
})

export default VideosPage
