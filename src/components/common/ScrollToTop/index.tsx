import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import GlobalState from '../../../stores/GlobalState'

const ScrollToTop = observer(({ headerContent }: { headerContent: any }) => {
  const { pathname } = useLocation()
  useEffect(() => {
    if (
      document.querySelector('.sub-intro__line')?.classList.contains('animated')
    ) {
      document.querySelector('.sub-intro__line')?.classList.remove('animated')
    }
    runInAction(() => {
      GlobalState.isMenuOpen = false
      GlobalState.isSearchOpen = false
    })
    if (headerContent && headerContent.current) {
      ;(headerContent.current as Element).scrollIntoView()
    }
  }, [pathname])

  return null
})

export default ScrollToTop
