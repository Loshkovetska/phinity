import { observer } from 'mobx-react'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Issue } from '../api/mocks/issues'
import ContentStore, {
  getBlogContent,
  getBookBlock,
  getHome,
  getSingleService,
} from '../stores/ContentStore'
import DBStore, {
  getPosts,
  getService,
  getTherapists,
  getVideos,
} from '../stores/DBStore'
import GlobalState, { getReviewsIO } from '../stores/GlobalState'
import Layout from '../components/common/Layout'

const Intro = lazy(() => import('../components/pages/services/Intro'))
const References = lazy(() => import('../components/common/References'))
const Videos = lazy(() => import('../components/pages/blog/Videos'))
const Blogs = lazy(() => import('../components/pages/home/Blogs'))
const BookBlock = lazy(() => import('../components/pages/home/BookBlock'))
const Issues = lazy(() => import('../components/pages/home/Issues'))
const Therapists = lazy(() => import('../components/pages/home/Therapists'))
const AboutService = lazy(() =>
  import('../components/pages/service/AboutService'),
)
const AboutSphere = lazy(() =>
  import('../components/pages/service/AboutSphere'),
)
const TherapyHelp = lazy(() =>
  import('../components/pages/service/TherapyHelp'),
)

const ServicePage = observer(() => {
  const [loading, setLoading] = useState(true)
  const [service, setService] = useState<any>(null)
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

    getService(id!).then(() => {
      DBStore.service && setService(DBStore.service)
    })
    getTherapists()
    getPosts()
    getSingleService(id!)
    getBookBlock()
    getReviewsIO()
    getHome()
    getVideos()
    getBlogContent()
    effectRef.current = true
  }, [])

  useEffect(() => {
    if (ContentStore.service && service) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [ContentStore.service, service])

  if (typeof window === 'undefined' || !window.document || !service) {
    return <></>
  }

  let main = '',
    servL = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
    servL = linksL.find((l: any) => l.id == 264).link
  }
  const links = [
    {
      title: ContentStore.service.intro.mainPageTitle,
      link: main,
    },
    {
      title: ContentStore.service.intro.pageTitle,
      link: servL,
    },
    {
      title: `${service.title.replaceAll('<br/>', ' ')}`,
      link: '/',
    },
  ]

  const dt = {
    title: ContentStore.service.intro.title,
    text: ContentStore.service.intro.text,
    buttonText: ContentStore.service.intro.buttonText,
    buttonLink: ContentStore.service.intro.buttonLink,
  }

  if (!ContentStore.service) return <></>

  let issues: Array<Issue> = []
  if (ContentStore.service.issues.list) {
    issues = JSON.parse(JSON.stringify(ContentStore.service?.issues?.list))
  }
  return (
    <>
      {!loading && (
        <Layout withScroll withVideo={false} isTranslate>
          <Suspense fallback={<></>}>
            <Intro dt={dt} links={links} classname="service-page" />
            <AboutService dt={ContentStore.service.about} />
            <AboutSphere />
            <Issues
              classname="service-page"
              dt={ContentStore.service.issues}
              arr={issues.sort((a: Issue, b: Issue) =>
                a.title.localeCompare(b.title),
              )}
            />
            <TherapyHelp dt={ContentStore.service.help} />
            <Therapists
              dt={ContentStore.service.therapists.list}
              therapist={ContentStore.service.therapist}
              therapists={ContentStore.service.therapists}
            />
            <Blogs
              arr={DBStore.posts}
              dt={{
                title: ContentStore.service.blogTitle,
                buttonTitle: ContentStore.service.blogButton,
              }}
            />
            <Videos arr={DBStore.videos} dt={ContentStore.service.video} />
            <References dt={ContentStore.service.refs} />
            <BookBlock />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default ServicePage
