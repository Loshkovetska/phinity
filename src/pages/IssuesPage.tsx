import { useEffect, useRef, useState } from 'react'
import DBStore, {
  filterIssues,
  getIssues,
  getIssuesFilters,
  getPosts,
  getVideos,
} from '../stores/DBStore'
import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getHome,
  getIssuesContent,
} from '../stores/ContentStore'
import GlobalState, { getReviewsIO } from '../stores/GlobalState'
import Filter from '../components/pages/therapists/Filter'
import Layout from '../components/common/Layout'
import { lazy, Suspense } from 'react'

const Blogs = lazy(() => import('../components/pages/home/Blogs'))
const Videos = lazy(()=>import('../components/pages/blog/Videos'))
const Intro = lazy(() => import('../components/pages/services/Intro'))
const BookBlock = lazy(() => import('../components/pages/home/BookBlock'))
const OurServices = lazy(()=>import('../components/pages/issues/OurServices'))
const IssuesList = lazy(()=>import('../components/pages/issues/IssuesList'))

const IssuesPage = observer(() => {
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
    getIssuesContent().then(() => {})
    getBookBlock()
    getReviewsIO()
    getHome()
    getIssuesFilters()
    getVideos()
    getPosts()
    getIssues()
    effectRef.current = true
  }, [])

  useEffect(() => {
    if (DBStore.issues && ContentStore.issues) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [DBStore.issues, ContentStore.issues])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  let main = '',
    issuesL = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
    issuesL = linksL.find((l: any) => l.id == 266).link
  }

  const links = [
    {
      title: ContentStore.issues.mainPageTitle,
      link: main,
    },
    {
      title: ContentStore.issues.pageTitle,
      link: '/issues',
    },
  ]
  if (!ContentStore.issues) return <></>
  if (!DBStore.issuesFilters || !DBStore.issues) return <></>
  return (
    <>
      {!loading && (
        <Layout withScroll>
          <Suspense fallback={<></>}>
            <Intro
              dt={{
                ...ContentStore.issues.intro,
                buttonLink: ContentStore.issues.intro.buttonLink,
              }}
              links={links}
              classname="service-page"
            />
            <OurServices />
            <IssuesList />
            <Blogs
              arr={DBStore.posts}
              dt={{
                title: ContentStore.issues.blogTitle,
                buttonTitle: ContentStore.issues.blogButton,
              }}
            />
            <Videos arr={DBStore.videos} dt={ContentStore.issues.video} />

            <BookBlock />
          </Suspense>
        </Layout>
      )}
      <Filter
        params={DBStore.issuesFilters}
        setFilter={(value) => {
          if (value == null) {
            setFilter(null)
            getIssues()
          } else {
            const st: any = {}
            DBStore.issuesFilters.forEach((e: any, i: number) => {
              st[e.title.replaceAll(' ', '')] = value[`p${i}`]
            })
            setFilter(st)
            filterIssues(st)
          }
        }}
      />
    </>
  )
})

export default IssuesPage
