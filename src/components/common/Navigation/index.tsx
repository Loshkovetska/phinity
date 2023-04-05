import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useLocation } from 'react-router-dom'
import GlobalState, { changeMenuState } from '../../../stores/GlobalState'
import './index.scss'
import { ReactComponent as Arrow } from '../../../assets/caret-right.svg'
import { useEffect, useState } from 'react'
import ContentStore from '../../../stores/ContentStore'

const Navigation = observer(() => {
  const [width, setWidth] = useState(window.innerWidth)
  const { pathname } = useLocation()

  useEffect(() => {
    if (GlobalState.isMenuOpen) {
      document.body.classList.add('hidden')
    } else document.body.classList.remove('hidden')
  }, [GlobalState.isMenuOpen])

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])



  return (
    <nav className={classNames('navigation', GlobalState.isMenuOpen && 'open')}>
      {(ContentStore.menu as any)?.list?.map((m: any, i: number) => (
        <a
          key={i}
          href={m.link}
          className={classNames(
            'navigation__link',
            window.location.href.trim() == m.link.trim() && 'active',
          )}
          onClick={() => {
            window.innerWidth <= 1120 && changeMenuState()
          }}
        >
          {m.title} <Arrow />
        </a>
      ))}
      {width <= 1024 && (
        <>
          <div className="navigation__socials">
            <div className="navigation__title">Follow Us</div>
            {(ContentStore.menu as any)?.follow?.map((f: any, i: number) => (
              <div
                key={i}
                className="navigation__social"
                onClick={() => window.open(f.link, '__blank')}
              >
                <span>
                  <img src={f.icon} alt={f.link} />
                </span>
                {f.title}
              </div>
            ))}
          </div>
          <div className="navigation__contacts">
            <div className="navigation__title">Contact Us</div>
            <div
              className="navigation__contact"
              onClick={() =>
                (window.location.href = `tel:${
                  (ContentStore.menu as any)?.phone
                }`)
              }
            >
              {(ContentStore.menu as any)?.phone}
            </div>
            <div
              className="navigation__contact"
              onClick={() =>
                (window.location.href = `mailto:${
                  (ContentStore.menu as any)?.email
                }`)
              }
            >
              {(ContentStore.menu as any)?.email}
            </div>
          </div>
          <a
            href={(ContentStore.menu as any)?.bookLink}
            className="black-border p15p40 button"
            target={'__blank'}
          >
            <div className="button__text">
              {(ContentStore.menu as any)?.bookTitle}
            </div>
          </a>
        </>
      )}
    </nav>
  )
})
export default Navigation
