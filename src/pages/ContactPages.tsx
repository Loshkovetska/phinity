import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
// import Intro from '../components/pages/services/Intro'
// import Reviews from '../components/pages/home/Reviews'
import { getReviews } from '../stores/DBStore'
// import ContactContent from '../components/pages/contact/ContactContent'
// import Location from '../components/pages/contact/Location'
// import Contact from '../components/pages/about/Contact'
import ContentStore, {
  getAbout,
  getBookBlock,
  getContactContent,
  getHome,
} from '../stores/ContentStore'
import GlobalState, { getReviewsIO } from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import { lazy, Suspense } from 'react'

const Intro = lazy(() => import('../components/pages/services/Intro'))
const Reviews = lazy(() => import('../components/pages/home/Reviews'))
const ContactContent = lazy(() =>
  import('../components/pages/contact/ContactContent'),
)
const Location = lazy(() => import('../components/pages/contact/Location'))
const Contact = lazy(() => import('../components/pages/about/Contact'))

const ContactPage = observer(() => {
  const [loading, setLoading] = useState(true)
  const effectRef = useRef<any>(false)

  useEffect(() => {
    if (!loading) {
      if (typeof window === 'undefined' || !window.document) {
        return
      }
    }
  }, [loading])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  useEffect(() => {
    if (effectRef.current) return

    getReviews()
    getReviewsIO()
    getBookBlock()
    getHome()
    getAbout()
    getContactContent().then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])

  if (!ContentStore.contact) return <></>

  let main = '',
    vacanc = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
    vacanc = linksL.find((l: any) => l.id == 262).link
  }

  return (
    <>
      {!loading && (
        <Layout withScroll>
          <Suspense fallback={<></>}>
            <Intro
              classname="services-page contact"
              dt={{
                ...ContentStore.contact.intro,
                buttonText: ContentStore.contact.intro.buttonText,
                buttonLink: ContentStore.contact.intro.buttonLink,
              }}
              links={[
                { title: ContentStore.contact.mainPageTitle, link: main },
                { title: ContentStore.contact.pageTitle, link: '/contacts' },
              ]}
            />
            <ContactContent />
            <Location />
            <Reviews dt={ContentStore.contact.reviews} />
            <Contact dt={ContentStore.about.contact} />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default ContactPage
