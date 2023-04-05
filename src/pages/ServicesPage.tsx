import { Suspense, useEffect, useRef, useState, lazy } from 'react'

import DBStore, {
  filterServices,
  getPopularPosts,
  getPopularVideos,
  getServices,
  getServicesFilters,
} from '../stores/DBStore'
import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getHome,
  getServicesContent,
} from '../stores/ContentStore'
import GlobalState, { getReviewsIO } from '../stores/GlobalState'
import Filter from '../components/pages/therapists/Filter'
import Layout from '../components/common/Layout'

const Intro = lazy(() => import('../components/pages/services/Intro'))
const BookBlock = lazy(() => import('../components/pages/home/BookBlock'))
const OurServices = lazy(() =>
  import('../components/pages/services/OurServices'),
)
const PhinityAdvantages = lazy(() =>
  import('../components/pages/services/PhitityAdvantages'),
)
const PopularPosts = lazy(() =>
  import('../components/pages/video/PopularPosts'),
)

const PopularVideos = lazy(() =>
  import('../components/pages/videos/PopularVideos'),
)

const ServicesPage = observer(() => {
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<any>(null)
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

    getReviewsIO()
    getBookBlock()
    getHome()
    getServices()
    getServicesFilters()
    getPopularPosts()
    getPopularVideos()
    getServicesContent().then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  let main = ''

  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
  }

  const links = [
    {
      title: ContentStore.services.mainPageTitle,
      link: main,
    },
    {
      title: ContentStore.services.pageTitle,
      link: '/services',
    },
  ]
  if (!ContentStore.services) return <></>

  if (!DBStore.servicesFilters || !DBStore.services) return <></>

  return (
    <>
      {!loading && (
        <Layout withScroll>
          <Suspense fallback={<></>}>
            <Intro
              dt={{
                ...ContentStore.services.intro,
                buttonLink: ContentStore.services.intro.buttonLink,
              }}
              links={links}
              classname="service-page"
            />
            <OurServices />
            <PhinityAdvantages dt={ContentStore.services.advantages} />
            <PopularPosts
              content={{
                title: ContentStore.services.blogTitle,
                buttonTitle: ContentStore.services.blogButton,
              }}
            />
            <PopularVideos content={ContentStore.services.video} />
            <BookBlock />
          </Suspense>
        </Layout>
      )}
      <Filter
        params={DBStore.servicesFilters}
        setFilter={(value) => {
          if (value != null) {
            const st: any = {}
            DBStore.servicesFilters.forEach((e: any, i: number) => {
              st[e.title.replaceAll(' ', '')] = value[`p${i}`]
            })
            setFilter(st)
            filterServices(st)
          } else {
            setFilter(null)
            getServices()
          }
        }}
      />
    </>
  )
})

export default ServicesPage
