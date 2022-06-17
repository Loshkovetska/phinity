import { useEffect, useRef, useState } from 'react'
import Header from '../components/common/Header'
import useLocoScroll from '../hooks/useLoco'
import ScrollToTop from '../components/common/ScrollToTop'
import Reviews from '../components/pages/home/Reviews'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import {
  getReviews,
  getPosts,
  getCategories,
  getTags,
  getVideos,
} from '../stores/DBStore'
import BookBlock from '../components/pages/home/BookBlock'
import BlogContent from '../components/pages/blog/BlogContent'
import Accreditation from '../components/pages/home/Accreditation'
import Videos from '../components/pages/blog/Videos'
import { observer } from 'mobx-react'
import ContentStore, {
  getBlogContent,
  getBookBlock,
  getMenu,
} from '../stores/ContentStore'

const BlogPage = observer(() => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>(null)
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
    getCategories()
    getTags()
    getVideos()
    getMenu()
    getBookBlock()

    getBlogContent().then(() => {
      document.title = `Phinity Therapy | ${ContentStore.blog.pageTitle}`
    })
  }, [])
  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  if (!ContentStore.blog) return <></>

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
            <BlogContent />
            <Videos />
            <Reviews dt={ContentStore.blog.reviews} />
            {window.innerWidth > 1024 && <BookBlock />}
            <Accreditation accreditation={ContentStore.blog.accreditation} />
            <div className="space-block"></div>
            <Footer />
            <SearchBox />
          </div>
        </div>
      )}
    </>
  )
})
export default BlogPage
