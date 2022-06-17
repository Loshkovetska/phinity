import classNames from 'classnames'
import { observer } from 'mobx-react'
import { NavLink, useLocation } from 'react-router-dom'
import GlobalState, { changeMenuState } from '../../../stores/GlobalState'
import './index.scss'
import { ReactComponent as Arrow } from '../../../assets/caret-right.svg'
import fb from '../../../assets/socials/black_facebook 1.png'
import inst from '../../../assets/socials/black_instagram 1.png'
import tw from '../../../assets/socials/black_twitter 1.png'
import Button from '../Button'
import { useEffect } from 'react'
import ContentStore from '../../../stores/ContentStore'

const Navigation = observer(() => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (GlobalState.isMenuOpen) {
      document.body.classList.add('hidden')
    } else document.body.classList.remove('hidden')
  }, [GlobalState.isMenuOpen])

  useEffect(() => {
    if (GlobalState.isMenuOpen) {
      GlobalState.locoScroll && GlobalState.locoScroll.stop()
    } else GlobalState.locoScroll && GlobalState.locoScroll.start()
  }, [GlobalState.isMenuOpen])
  if (!ContentStore.menu) return <></>




  return (
    <nav className={classNames('navigation', GlobalState.isMenuOpen && 'open')}>
      {ContentStore.menu!.map((m: any, i: number) => (
        <a
          key={i}
          href={m.link}
          className={classNames(
            'navigation__link',
            pathname.includes(m.link) && 'active',
          )}
          onClick={() => {
            window.innerWidth <= 1120 && changeMenuState()
          }}
        >
          {m.title} <Arrow />
        </a>
      ))}
      {window.innerWidth <= 1024 && (
        <>
          <div className="navigation__socials">
            <div className="navigation__title">Follow us</div>
            <div className="navigation__social">
              <img src={tw} />
              Twitter
            </div>
            <div className="navigation__social">
              <img src={fb} /> Facebook
            </div>
            <div className="navigation__social">
              <img src={inst} /> Instagram
            </div>
          </div>
          <div className="navigation__contacts">
            <div className="navigation__title">contact us</div>
            <div
              className="navigation__contact"
              onClick={() => (window.location.href = `tel:07761409077`)}
            >
              077 6140 9077
            </div>
            <div
              className="navigation__contact"
              onClick={() =>
                (window.location.href = `mailto:phinitytherapy@gmail.com`)
              }
            >
              phinitytherapy@gmail.com
            </div>
          </div>
          <Button
            classname="black-border p15p40"
            text={'Book now'}
            click={() => {}}
          />
        </>
      )}
    </nav>
  )
})
export default Navigation
