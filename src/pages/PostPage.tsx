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
import Videos from '../components/pages/blog/Videos'
import PostContent from '../components/pages/post/PostContent'
import RelatedPosts from '../components/pages/post/RelatedPosts'
import { useParams } from 'react-router'
import { observer } from 'mobx-react'
import { getMenu } from '../stores/ContentStore'

const PostPage = observer(() => {
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
    getPosts()
    getReviews()
    getVideos()
    getMenu()
  }, [])

  useEffect(() => {
    getPost(+id!).then(() => {
      document.title = `Phinity | ${DBStore.post?.title}`
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
            <PostContent />
            <RelatedPosts />
            <Videos />
            {/* <Reviews /> */}
            <BookBlock />
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})

export default PostPage
