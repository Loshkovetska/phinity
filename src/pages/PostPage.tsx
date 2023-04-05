import { Suspense, useEffect, useRef, useState , lazy} from 'react'
// import Reviews from '../components/pages/home/Reviews'
import DBStore, {
  getReviews,
  getPosts,
  getVideos,
  getPost,
  getPopularPosts,
  getPopularVideos,
} from '../stores/DBStore'
// import BookBlock from '../components/pages/home/BookBlock'
// import Videos from '../components/pages/blog/Videos'
// import PostContent from '../components/pages/post/PostContent'
// import RelatedPosts from '../components/pages/post/RelatedPosts'
import { useParams } from 'react-router'
import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getHome,
  getSinglePost,
} from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'
import Layout from '../components/common/Layout'

const Reviews = lazy(()=>import('../components/pages/home/Reviews'))
const BookBlock = lazy(()=>import('../components/pages/home/BookBlock'))
const Videos = lazy(()=>import('../components/pages/blog/Videos'))
const PostContent = lazy(()=>import('../components/pages/post/PostContent'))
const RelatedPosts = lazy(() => import('../components/pages/post/RelatedPosts'))

const PostPage = observer(() => {
  const requestRef = useRef<any>(false)
  const [loading, setLoading] = useState(true)
  const { sub: id } = useParams()

  


  useEffect(() => {
    if (!loading) {
      if (typeof window === 'undefined' || !window.document) {
        return
      }
    }
  }, [loading])

  useEffect(() => {
    if (requestRef.current) return
    getPosts()
    getReviews()
    getReviewsIO()
    getBookBlock()
    getHome()
    getPopularPosts()
    getPopularVideos()
    getVideos()
    getPost(id!).then(() => {})

    getSinglePost(id!).then(() => {
      setLoading(false)
    })
    requestRef.current = true
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  if (!DBStore.post) return <></>

  return (
    <>
      {!loading && (
        <Layout withVideo={false}>
          <Suspense fallback={<></>}>
            <PostContent />
            <RelatedPosts title={ContentStore.post.relatedTitle || ''} />
            <Videos arr={DBStore.videos} dt={ContentStore.post.video} />
            <Reviews dt={(ContentStore.post as any).reviews} />
            <BookBlock />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default PostPage
