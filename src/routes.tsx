import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPages'
import FaqPage from './pages/FaqPage'
import FeesPage from './pages/FeesPage'
import HomePage from './pages/HomePage'
import IssuePage from './pages/IssuePage'
import IssuesPage from './pages/IssuesPage'
import JobPage from './pages/JobPage'
import PostPage from './pages/PostPage'
import PrivacyPage from './pages/PrivacyPage'
import ServicePage from './pages/ServicePage'
import ServicesPage from './pages/ServicesPage'
import TermsPage from './pages/TermsPage'
import ThanksPage from './pages/ThanksPage'
import TherapistPage from './pages/TherapistPage'
import TherapistsPage from './pages/TherapistsPage'
import VideoPage from './pages/VideoPage'
import VideosPage from './pages/VideosPage'
import WorkPage from './pages/WorkPage'

export type RouteType = {
  path: string
  component: any
}

const routes: Array<RouteType> = [
  { path: '/', component: <HomePage /> },
  { path: '/services', component: <ServicesPage /> },
  { path: '/service/:id', component: <ServicePage /> },
  { path: '/issues', component: <IssuesPage /> },
  { path: '/issue/:id', component: <IssuePage /> },
  { path: '/therapists', component: <TherapistsPage /> },
  { path: '/therapist/:id', component: <TherapistPage /> },
  { path: '/about', component: <AboutPage /> },
  { path: '/thanks', component: <ThanksPage /> },
  { path: '/blog', component: <BlogPage /> },
  { path: '/post/:id', component: <PostPage /> },
  { path: '/faq', component: <FaqPage /> },
  { path: '/privacy', component: <PrivacyPage /> },
  { path: '/terms', component: <TermsPage /> },
  { path: '/contacts', component: <ContactPage /> },
  { path: '/fees', component: <FeesPage /> },
  { path: '/videos', component: <VideosPage /> },
  { path: '/video/:id', component: <VideoPage /> },
  { path: '/jobs', component: <WorkPage /> },
  { path: '/job/:id', component: <JobPage /> },
]

export default routes
