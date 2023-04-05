import { observer } from 'mobx-react'
import { useRef } from 'react'
import Cookie from '../Cookie'
import Footer from '../Footer'
import Header from '../Header'
import ScrollToTop from '../ScrollToTop'
import SearchBox from '../SearchBox'
import VideoBox from '../VideoBox'
import { ReactComponent as ScrollDown } from '../../../assets/post/arrow.svg'
import classNames from 'classnames'

const Layout = observer(
  ({
    children,
    withScroll = false,
    withFooter = true,
    withCookie = true,
    withVideo = true,
    isTranslate = false,
  }: {
    children: any
    withScroll?: boolean
    withFooter?: boolean
    withCookie?: boolean
    withVideo?: boolean
    isTranslate?: boolean
  }) => {
    const ref = useRef<any>(null)
    return (
      <>
        <div ref={ref}></div>
        <ScrollToTop headerContent={ref} />
        <div className="smooth">
          <div
            className={classNames('container', !isTranslate && 'hidden-scroll')}
          >
            <Header />
            {children}
            {withFooter && <Footer />}
            <SearchBox />
          </div>
          {window.innerWidth > 768 && withScroll && (
            <div className="intro__scrolldown animated fadeIn">
              <ScrollDown />
              <ScrollDown />
              <ScrollDown />
            </div>
          )}
        </div>
        {withVideo && <VideoBox />}
        {withCookie && <Cookie />}
      </>
    )
  },
)

export default Layout
