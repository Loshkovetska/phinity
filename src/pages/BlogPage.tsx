import { useEffect, useRef, useState } from 'react'
import DBStore, {
  getReviews,
  getPosts,
  getVideos,
  getPopularVideos,
  getPopularPosts,
  getBlogCategories,
  filterPosts,
} from '../stores/DBStore'
import { observer } from 'mobx-react'
import ContentStore, {
  getBlogContent,
  getBookBlock,
  getHome,
} from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'
import Filter from '../components/pages/therapists/Filter'
import Layout from '../components/common/Layout'
import { lazy, Suspense } from 'react'

const BlogContent = lazy(() => import('../components/pages/blog/BlogContent'))
const Reviews = lazy(() => import('../components/pages/home/Reviews'))
const BookBlock = lazy(() => import('../components/pages/home/BookBlock'))
const Footer = lazy(() => import('../components/common/Footer'))
const Accreditation = lazy(() =>
  import('../components/pages/home/Accreditation'),
)
const PopularPosts = lazy(() =>
  import('../components/pages/video/PopularPosts'),
)
const PopularVideos = lazy(() =>
  import('../components/pages/videos/PopularVideos'),
)

const BlogPage = observer(() => {
  const [showBottom, setShowBottom] = useState(false)
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
    getPopularVideos()
    getPopularPosts()
    getHome()
    getPosts()
    getReviews()
    getBlogCategories()
    getVideos()
    getBookBlock()
    getReviewsIO()
    getBlogContent().then(() => {
      setLoading(false)
      setTimeout(() => {
        setShowBottom(true)
      }, 2000)
    })
    effectRef.current = true
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  if (!ContentStore.blog) return <></>

  return (
    <>
      {!loading && (
        <Layout withVideo={false} withFooter={false}>
          <Suspense fallback={<></>}>
            <BlogContent />
            {showBottom && (
              <>
                <PopularPosts
                  content={{
                    title: ContentStore.blog.blogTitle,
                    buttonTitle: ContentStore.blog.blogButton,
                  }}
                />
                <PopularVideos content={ContentStore.blog.video} />
                <Reviews dt={ContentStore.blog.reviews} />
                {window.innerWidth > 1024 && <BookBlock />}
                <Accreditation
                  accreditation={ContentStore.blog.accreditation}
                />
                {window.innerWidth <= 1024 && <BookBlock />}
                <div className="space-block"></div>
                <Footer />
              </>
            )}
          </Suspense>
        </Layout>
      )}

      <Filter
        params={[{ title: 'Category', list: DBStore.postCategories }] || null}
        setFilter={(value) => {
          if (value == null) {
            setFilter(null)
            getPosts()
          } else {
            let st: any
            ;[DBStore.postCategories]?.forEach((e: any, i: number) => {
              st = value[`p${i}`]
            })
            setFilter(st)
            filterPosts(st)
          }
        }}
      />
    </>
  )
})
export default BlogPage
