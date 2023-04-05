import {
  BrowserRouter as Router,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Fragment, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react'
import routes from './routes'
import './styles/index.scss'
import GlobalState, { getLinks } from './stores/GlobalState'
import NoFound from './pages/404'
import { getBookBlock, getMenu } from './stores/ContentStore'
import { runInAction } from 'mobx'

export const history = createBrowserHistory()

const App = observer(() => {
  const headerContent = useRef(null)
  const requestRef = useRef<any>(false)

  useEffect(() => {
    if (requestRef.current) return
    getLinks().then(() => {})
    getMenu()

    requestRef.current = true
  }, [])

  let p404 = ''
  if (GlobalState.links) {
    p404 = GlobalState.links.find((d: any) => d.id == 601).link
  }

  return (
    <HistoryRouter history={history}>
      <div ref={headerContent}></div>
      <Routes>
        <Route path="*" element={<NoFound />} />
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
        <Route path={'/error'} element={<NoFound />} />
        <Route path={'/404'} element={<NoFound />} />
      </Routes>
    </HistoryRouter>
  )
})

export default App
