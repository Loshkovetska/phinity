import Navigation from '../Navigation'
import logo from '../../../assets/logo.svg'
import { ReactComponent as Search } from '../../../assets/search.svg'
import { ReactComponent as Menu } from '../../../assets/menu.svg'
import { ReactComponent as Close } from '../../../assets/close.svg'

import GlobalState, {
  changeMenuState,
  changeSearchState,
} from '../../../stores/GlobalState'
import './index.scss'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import ContentStore from '../../../stores/ContentStore'
import classNames from 'classnames'

const Header = observer(() => {
  const [isShow, setShow] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  // useEffect(() => {
  //   if (ContentStore.menu) {
  //     setTimeout(() => {
  //       setShow(true)
  //     }, 300)
  //   }
  // }, [ContentStore.menu])

  const linksL = GlobalState.links
  let main = ''
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
  }

  return (
    <header className={classNames('header', isShow && 'show')}>
      {width <= 1024 && (
        <>
          {!GlobalState.isMenuOpen ? (
            <Menu onClick={changeMenuState} />
          ) : (
            <Close onClick={changeMenuState} />
          )}
        </>
      )}
      <img
        src={logo}
        className="header__logo"
        onClick={() => (window.location.href = main)}
      />
      <Navigation />
      <div className="header__search">
        {GlobalState.isSearchOpen ? (
          <Close onClick={changeSearchState} />
        ) : (
          <Search onClick={changeSearchState} />
        )}
      </div>
      {width > 1024 && (
        <a
          className="button black-border p15p40 f14"
          href={(ContentStore.menu as any).bookLink}
          target="__blank"
        >
          <div className="button__text">
            {' '}
            {(ContentStore.menu as any).bookTitle}
          </div>
        </a>
      )}
    </header>
  )
})

export default Header
