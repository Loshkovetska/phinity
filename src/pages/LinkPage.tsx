import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router'
// import AboutPage from './AboutPage'
// import CookiePage from './CookiePage'
// import BlogPage from './BlogPage'
// import ContactPage from './ContactPages'
// import FaqPage from './FaqPage'
// import FeesPage from './FeesPage'
// import IssuePage from './IssuePage'
// import ServicesPage from './ServicesPage'
// import WorkPage from './WorkPage'
// import NoFound from './404'
// import TermsPage from './TermsPage'
// import ThanksPage from './ThanksPage'
// import VideosPage from './VideosPage'
// import IssuesPage from './IssuesPage'
// import TherapistsPage from './TherapistsPage'
// import PrivacyPage from './PrivacyPage'

// import PostPage from './PostPage'
// import ServicePage from './ServicePage'
// import JobPage from './JobPage'
// import VideoPage from './VideoPage'
// import TherapistPage from './TherapistPage'
import GlobalState from '../stores/GlobalState'

import React, { Suspense } from 'react'

const NoFound = React.lazy(() => import('./404'))
const AboutPage = React.lazy(() => import('./AboutPage'))
const CookiePage = React.lazy(() => import('./CookiePage'))
const BlogPage = React.lazy(() => import('./BlogPage'))

const ContactPage = React.lazy(() => import('./ContactPages'))
const FaqPage = React.lazy(() => import('./FaqPage'))
const FeesPage = React.lazy(() => import('./FeesPage'))

const IssuePage = React.lazy(() => import('./IssuePage'))
const ServicesPage = React.lazy(() => import('./ServicesPage'))
const WorkPage = React.lazy(() => import('./WorkPage'))

const TermsPage = React.lazy(() => import('./TermsPage'))
const ThanksPage = React.lazy(() => import('./ThanksPage'))
const VideosPage = React.lazy(() => import('./VideosPage'))
const IssuesPage = React.lazy(() => import('./IssuesPage'))
const TherapistsPage = React.lazy(() => import('./TherapistsPage'))

const PrivacyPage = React.lazy(() => import('./PrivacyPage'))
const PostPage = React.lazy(() => import('./PostPage'))
const ServicePage = React.lazy(() => import('./ServicePage'))
const JobPage = React.lazy(() => import('./JobPage'))
const VideoPage = React.lazy(() => import('./VideoPage'))
const TherapistPage = React.lazy(() => import('./TherapistPage'))

const LinkPage = observer(() => {
  const { pathname } = useLocation()
  const { param: main, sub: sub } = useParams()
  const [links, setLinks] = useState(null)

  const requestRef = useRef<any>(false)

  useEffect(() => {
    if (requestRef.current && !GlobalState.links) return

    setLinks(GlobalState.links)
    requestRef.current = true
  }, [GlobalState.links])

  if (!links) return <></>

  let currentPage = (links as any)?.find((l: any) => l.link == '/' + main)
  let subPage = null

  if (sub) {
    subPage = (links as any)?.find((l: any) => {
      if ('/' + main === l.link && pathname.includes(l.link)) return l
    })
  }
  return (
    <>
      {!subPage && currentPage?.id == 601 && <NoFound />}
      {!subPage && currentPage?.id == 259 && <AboutPage />}
      {!subPage && currentPage?.id == 272 && <BlogPage />}
      {subPage && subPage?.id == 272 && <PostPage />}

      {!subPage && currentPage?.id == 274 && <ContactPage />}
      {!subPage && currentPage?.id == 775 && <CookiePage />}
      {!subPage && currentPage?.id == 507 && <FaqPage />}
      {!subPage && currentPage?.id == 270 && <FeesPage />}
      {!subPage && currentPage?.id == 266 && <IssuesPage />}
      {subPage && subPage?.id == 266 && <IssuePage />}
      {!subPage && currentPage?.id == 264 && <ServicesPage />}
      {subPage && subPage?.id == 264 && <ServicePage />}
      {!subPage && currentPage?.id == 262 && <WorkPage />}
      {subPage && subPage?.id == 262 && <JobPage />}
      {!subPage && currentPage?.id == 644 && <VideosPage />}
      {subPage && subPage?.id == 644 && <VideoPage />}
      {!subPage && currentPage?.id == 268 && <TherapistsPage />}
      {subPage && subPage?.id == 268 && <TherapistPage />}
      {!subPage && currentPage?.id == 3 && <PrivacyPage />}
      {!subPage && currentPage?.id == 591 && <TermsPage />}
      {!subPage && currentPage?.id == 635 && <ThanksPage />}
    </>
  )
})

export default LinkPage
