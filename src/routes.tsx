import HomePage from './pages/HomePage'
import LinkPage from './pages/LinkPage'

export type RouteType = {
  path: string
  component: any
}

const routes: Array<RouteType> = [
  { path: '/', component: <HomePage /> },
  { path: '/:param', component: <LinkPage /> },
  { path: '/:param/:sub', component: <LinkPage /> },
]

export default routes
