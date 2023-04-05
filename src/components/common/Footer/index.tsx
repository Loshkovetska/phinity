import './index.scss'
import logo from '../../../assets/logo.svg'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import ContentStore from '../../../stores/ContentStore'
import classNames from 'classnames'
import GlobalState from '../../../stores/GlobalState'
const Footer = observer(() => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const footer = document.querySelector('.footer')

    if (!footer) return

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ;(footer as any)?.classList.add('animated')
        } else {
        }
      },
      {
        root: null,
        threshold: 0.1,
      },
    )

    observer.observe(footer)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const linksL = GlobalState.links
  let main = ''
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
  }

  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__col grow">
          <img
            src={logo}
            className="footer__logo"
            onClick={() => (window.location.href = main)}
          />
          {width > 550 && (
            <>
              <div
                className="footer__text grey link"
                onClick={() => {
                  window.location.href = `tel:${
                    (ContentStore.menu as any)?.phone
                  }`
                }}
              >
                {(ContentStore.menu as any)?.phone}
              </div>
              <div
                className="footer__text grey"
                dangerouslySetInnerHTML={{
                  __html: (ContentStore.menu as any)?.location.text,
                }}
              ></div>
            </>
          )}
        </div>
        <div className="footer__col w50p mr0">
          <div className="footer__sub-title ">
            {(ContentStore.menu as any)?.navTitle}
          </div>
          {/* Navigation */}
          {(ContentStore.menu as any)?.nav?.map((n: any, i: number) => (
            <a href={n.link} className="footer__text link" key={i}>
              {n.title}
            </a>
          ))}
        </div>
        <div className="footer__col mr0 w50p">
          <div className="footer__sub-title">
            {(ContentStore.menu as any).infoTitle}
          </div>
          {/* Info Pages */}
          {(ContentStore.menu as any).info?.map((n: any, i: number) => (
            <a href={n.link} className="footer__text link" key={i}>
              {n.title}
            </a>
          ))}
        </div>
        <div className="footer__col mr0 grow">
          <div className="footer__sub-title">
            {(ContentStore.menu as any).followTitle}
          </div>
          {/* Follow us */}
          <div className="footer__sub-socials">
            {(ContentStore.menu as any).follow?.map((f: any, i: number) => (
              <a
                key={i}
                className="footer__text social"
                href={f.link}
                target={'__blank'}
              >
                <img src={f.icon} alt={f.link} />
              </a>
            ))}
          </div>
          {width > 550 && (
            <>
              <div className="footer__sub-title">
                {(ContentStore.menu as any)?.emailTitle}
              </div>
              {/* Email us */}
              <div
                className="footer__text link"
                onClick={() =>
                  (window.location.href = `mailto: ${
                    (ContentStore.menu as any)?.email
                  }`)
                }
              >
                {(ContentStore.menu as any)?.email}
              </div>
            </>
          )}
        </div>{' '}
        {width <= 550 && (
          <>
            <div className="footer__col w50p">
              <div className="footer__sub-title mb16">
                {(ContentStore.menu as any)?.phoneTitle}
              </div>
              {/* Phone number */}
              <div
                className="footer__text link"
                onClick={() => {
                  window.location.href = `tel:${
                    (ContentStore.menu as any)?.phone
                  }`
                }}
              >
                {(ContentStore.menu as any)?.phone}
              </div>
            </div>
            <div className="footer__col w100p mr0">
              <div className="footer__sub-title">
                {(ContentStore.menu as any)?.emailTitle}
              </div>
              <div
                className="footer__text link"
                onClick={() =>
                  (window.location.href = `mailto: ${
                    (ContentStore.menu as any)?.email
                  }`)
                }
              >
                {(ContentStore.menu as any)?.email}
              </div>
            </div>

            <div className="footer__col w100p">
              <div className="footer__sub-title mb16">
                {(ContentStore.menu as any)?.sheduleTitle}
              </div>
              {/* Open work */}
              <div
                className="footer__text"
                dangerouslySetInnerHTML={{
                  __html: (ContentStore.menu as any)?.location.text,
                }}
              ></div>
            </div>
          </>
        )}
      </div>
      {width <= 550 && (
        <div className="footer__sub-title mb16">
          {(ContentStore.menu as any)?.locationTitle}
        </div>
      )}
      <div
        className="footer__text grey link-locat"
        dangerouslySetInnerHTML={{
          __html: (ContentStore.menu as any)?.shedule,
        }}
      ></div>

      <div className="footer__row last">
        <div className="footer__sub-text copy">
          Copyright © {new Date().getFullYear()} Phinity Therapy. All Rights
          Reserved.
        </div>
        <div className="footer__col">
          {(ContentStore.menu as any)?.bottomLinks?.map((c: any, i: any) => (
            <a
              href={c.link}
              className={classNames(
                'footer__sub-text link',
                i + 1 != (ContentStore.menu as any)?.bottomLinks.length &&
                  'mr32',
              )}
              key={i}
            >
              {c.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
})

export default Footer
