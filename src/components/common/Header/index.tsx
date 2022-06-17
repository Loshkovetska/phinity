import Navigation from '../Navigation'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { ReactComponent as Search } from '../../../assets/search.svg'
import { ReactComponent as Menu } from '../../../assets/menu.svg'
import { ReactComponent as Close } from '../../../assets/close.svg'

import GlobalState, {
  changeMenuState,
  changeSearchState,
} from '../../../stores/GlobalState'
import './index.scss'
import Button from '../Button'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router'
import { runInAction } from 'mobx'

const Header = observer(() => {
  const navigate = useNavigate()
  return (
    <header className="header slideInDown">
      {window.innerWidth <= 1024 && (
        <>
          {!GlobalState.isMenuOpen ? (
            <Menu onClick={changeMenuState} />
          ) : (
            <Close onClick={changeMenuState} />
          )}
        </>
      )}
      <Logo className="header__logo" onClick={() => navigate('/')} />
      <Navigation />
      <div className="header__search">
        {GlobalState.isSearchOpen ? (
          <Close onClick={changeSearchState} />
        ) : (
          <Search onClick={changeSearchState} />
        )}
      </div>
      {window.innerWidth > 1024 && (
        <Button
          classname="black-border p15p40"
          text={'Book now'}
          click={() => {}}
        />
      )}
    </header>
  )
})

export default Header
