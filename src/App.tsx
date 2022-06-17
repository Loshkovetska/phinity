import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import routes from './routes'
import './styles/index.scss'
import NotFound from './pages/404'

const App = observer(() => {
  const headerContent = useRef(null)
  return (
    <Router>
      <div ref={headerContent}></div>
      <Routes>
        <Route path="/404" element={<NotFound />} />
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  )
})

export default App
