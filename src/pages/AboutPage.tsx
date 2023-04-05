import { useEffect, useRef, useState } from 'react'
import Reviews from '../components/pages/home/Reviews'
import { getReviews } from '../stores/DBStore'
// import AboutContent from '../components/pages/about/AboutContent'
// import AboutPhinity from '../components/pages/about/AboutPhinity'
// import OurTeam from '../components/pages/about/OutTeam'
// import Phylosophy from '../components/pages/about/Phylosophy'
// import PhinityAdvantages from '../components/pages/services/PhitityAdvantages'
// import ChooseUs from '../components/pages/about/ChooseUs'
// import OurClinic from '../components/pages/about/OurClinic'
// import Contact from '../components/pages/about/Contact'
import { observer } from 'mobx-react'
import ContentStore, { getAbout } from '../stores/ContentStore'
import { getReviewsIO } from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import { lazy, Suspense } from 'react'

const AboutContent = lazy(() =>
  import('../components/pages/about/AboutContent'),
)
const AboutPhinity = lazy(() =>
  import('../components/pages/about/AboutPhinity'),
)
const OurTeam = lazy(() => import('../components/pages/about/OutTeam'))
const Phylosophy = lazy(() => import('../components/pages/about/Phylosophy'))
const PhinityAdvantages = lazy(() =>
  import('../components/pages/services/PhitityAdvantages'),
)
const ChooseUs = lazy(() => import('../components/pages/about/ChooseUs'))
const OurClinic = lazy(() => import('../components/pages/about/OurClinic'))
const Contact = lazy(() => import('../components/pages/about/Contact'))

const AboutPage = observer(() => {
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
    getReviewsIO()
    getAbout().then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])
  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  return (
    <>
      {!loading && (
        <Layout withVideo={false}>
          <Suspense fallback={<></>}>
            <AboutContent />
            <AboutPhinity />
            <OurTeam />
            <Phylosophy />
            <OurClinic />
            <PhinityAdvantages dt={ContentStore.about.advantages} />
            <ChooseUs />
            <Reviews dt={ContentStore.about.reviews} />
            <Contact dt={ContentStore.about.contact} />
          </Suspense>
        </Layout>
      )}
    </>
  )
})

export default AboutPage
