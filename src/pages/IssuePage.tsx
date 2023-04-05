import { observer } from 'mobx-react'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Service } from '../api/mocks/services'
import ContentStore, {
  getBookBlock,
  getHome,
  getIssueContent,
  getMenu,
} from '../stores/ContentStore'
import DBStore, {
  getIssue,
  getPopularPosts,
  getPopularVideos,
  getReviews,
  getTherapists,
} from '../stores/DBStore'
import GlobalState, { getReviewsIO } from '../stores/GlobalState'
import Layout from '../components/common/Layout'

const Intro = lazy(() => import('../components/pages/services/Intro'))
const References = lazy(() => import('../components/common/References'))
const BookBlock = lazy(() => import('../components/pages/home/BookBlock'))
const Reviews = lazy(() => import('../components/pages/home/Reviews'))
const Therapists = lazy(() => import('../components/pages/home/Therapists'))
const CanHelp = lazy(() => import('../components/pages/issue/CanHelp'))
const Services = lazy(() => import('../components/pages/issue/Services'))
const Symptoms = lazy(() => import('../components/pages/issue/Symptoms'))
const AboutService = lazy(() =>
  import('../components/pages/service/AboutService'),
)

const TherapyHelp = lazy(() =>
  import('../components/pages/service/TherapyHelp'),
)
const PopularPosts = lazy(() =>
  import('../components/pages/video/PopularPosts'),
)
const PopularVideos = lazy(() =>
  import('../components/pages/videos/PopularVideos'),
)

const IssuePage = observer(() => {
  const [loading, setLoading] = useState(true)
  const [dt, setDt] = useState<any>(null)
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

    getHome()
    getTherapists()
    getReviews()
    getBookBlock()
    getReviewsIO()
    getPopularPosts()
    getPopularVideos()

    getIssue(id!).then(() => {
      DBStore.issue && setService(DBStore.issue)
    })
    getIssueContent(id!).then(() => {
      setDt({
        text: ContentStore.issue?.intro?.text,
        buttonText: ContentStore.issue?.intro?.buttonText,
        buttonLink: ContentStore.issue?.intro?.buttonLink,
      })
    })
    effectRef.current = true
  }, [])

  useEffect(() => {
    if (service && ContentStore.issue) {
      setLoading(false)
    }
  }, [ContentStore.issue, service])

  if (typeof window === 'undefined' || !window.document || !service) {
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
      title: ContentStore.issue.intro.mainPageTitle,
      link: main,
    },
    {
      title: ContentStore.issue.intro.pageTitle,
      link: issuesL,
    },
    {
      title: `${service.title.replaceAll('<br/>', ' ')}`,
      link: '/',
    },
  ]

  if (!ContentStore.issue) return <></>

  let services: Array<Service> = []

  if (ContentStore.issue.services) {
    services = JSON.parse(JSON.stringify(ContentStore.issue.services))
    services = services.sort((a, b) => a.title.localeCompare(b.title))
  }
  return (
    <>
      {!loading && (
        <Layout withVideo={false} withScroll isTranslate>
          <Suspense fallback={<></>}>
            <Intro
              dt={{
                ...dt,
                title: service.title.replaceAll('<br/>', ' '),
              }}
              links={links}
              classname="service-page"
            />
            <AboutService classname="issue" dt={ContentStore.issue.about} />
            <Symptoms />
            <CanHelp />
            <Services title={ContentStore.issue.serviceTitle} dt={services} />
            <TherapyHelp dt={ContentStore.issue.therapyHelp} />
            <Therapists
              dt={ContentStore.issue.therapists.list}
              therapist={ContentStore.issue.therapist}
              therapists={ContentStore.issue.therapists}
            />
            <Reviews dt={ContentStore.issue.reviews} />
            <PopularPosts
              content={{
                title: ContentStore.issue.blogTitle,
                buttonTitle: ContentStore.issue.blogButton,
              }}
            />
            <PopularVideos content={ContentStore.issue.video} />
            <References dt={ContentStore.issue.refs} />
            <BookBlock />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default IssuePage
