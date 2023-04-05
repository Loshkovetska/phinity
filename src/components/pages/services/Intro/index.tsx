import { observer } from 'mobx-react'
import PageLinks from '../../../common/PageLinks'
import './index.scss'
import { ReactComponent as Scroll } from '../../../../assets/scroll.svg'
import { useEffect, useRef, useState } from 'react'
import CircleType from 'circletype'
import Button from '../../../common/Button'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useLocation } from 'react-router'
import DBStore from '../../../../stores/DBStore'
import classNames from 'classnames'
import { ReactComponent as ReviewsIODesk } from '../../../../assets/ex/reviews-desktop.svg'
import ReviewsIO from '../../../../assets/ex/reviews-mobile.svg'
import { ReactComponent as ScrollDown } from '../../../../assets/post/arrow.svg'

import { ReactComponent as BlueStar } from '../../../../assets/ex/star.svg'
import ContentStore from '../../../../stores/ContentStore'

const Intro = observer(
  ({ dt, links, classname }: { dt: any; links: any; classname: string }) => {
    const circleInstance = useRef<any>(null)
    const { pathname } = useLocation()
    const [width, setWidth] = useState(window.innerWidth)

    const getStars = (count: number) => {
      return new Array(Math.ceil(count)).fill(0, 0)
    }

    useEffect(() => {
      ;(document.querySelector(
        '.intro__text',
      ) as HTMLElement)!.style.animationDelay = '1s'
      ;(document.querySelector(
        '.sub-intro .button',
      ) as HTMLElement)!.style.animationDelay = '1.5s'

      if (document.querySelector('.sub-intro .intro__widget')) {
        ;(document.querySelector(
          '.sub-intro .intro__widget',
        ) as HTMLElement)!.style.animationDelay = '2s'
      }

      // ;(document.querySelector(
      //   '.sub-intro .intro__scroll',
      // ) as HTMLElement)!.style.animationDelay = '2.5s'
    }, [])

    useEffect(() => {
      const container = document.querySelector('.sub-intro')
      const vect = document.querySelector('.sub-intro__vector')
      const smooth = document.querySelector('.smooth')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetBottom = elemRect.bottom - elemRect.height / 2

      window.addEventListener('scroll', () => {
        if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
          requestAnimationFrame(() => {
            if (window.innerWidth > 480) {
              ;(vect as HTMLElement).style.transform = `translate3d(0, ${
                window.scrollY - offset + 65
              }px, 0)`
            } else {
              ;(vect as HTMLElement).style.transform = `translate3d(0, ${
                window.scrollY - offset + 65
              }px, 0) scale(0.7)`
            }
          })
        }
      })
    }, [])

    useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [])


    return (
      <section className={classNames('sub-intro', classname)}>
        <Vector className="sub-intro__vector animated fadeIn" />
        <div className="sub-intro__container">
          <PageLinks links={links} />
          <h1
            className="intro__title animated fadeIn"
            dangerouslySetInnerHTML={{ __html: dt.title }}
          ></h1>
          {GlobalState.rating && width > 768 && (
            <a
              href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
              target={'_blank'}
              className="animated fadeIn delay-2s intro__widget"
            >
              <div className="intro__widget-col">
                <div className="intro__widget-stars">
                  {' '}
                  <img
                    src={ReviewsIO}
                    alt={window.location.href}
                    className="intro__widget-icon"
                  />
                  {getStars(GlobalState.rating?.average_rating).map((s, i) => (
                    <BlueStar key={i} className="intro__widget-star" />
                  ))}
                </div>
                <span>
                  Read our{' '}
                  <span className="intro__widget-count">
                    {GlobalState.rating?.num_ratings}
                  </span>
                  {GlobalState.rating?.num_ratings > 1 ||
                  !GlobalState.rating?.num_ratings
                    ? 'reviews'
                    : 'review'}{' '}
                </span>
              </div>
            </a>
          )}
          <div className="sub-intro__bottom">
            <div className={classNames('intro__bottom')}>
              <div className="intro__block ">
                <div
                  className="intro__text animated fadeIn   "
                  dangerouslySetInnerHTML={{ __html: dt.text }}
                ></div>

                <a
                  className="blue p18p40 animated fadeIn delay-4s button "
                  href={dt.buttonLink}
                  target={'_blank'}
                >
                  <div className="button__text">
                    <>{dt.buttonText}</>
                  </div>
                </a>

                <div className="intro__block-row">
                  {GlobalState.rating && width <= 768 && (
                    <a
                      href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
                      target={'_blank'}
                      className="animated fadeIn delay-2s intro__widget"
                    >
                      <div className="intro__widget-col">
                        <div className="intro__widget-stars">
                          {' '}
                          <img
                            src={ReviewsIO}
                            alt={window.location.href}
                            className="intro__widget-icon"
                          />
                          {getStars(GlobalState.rating?.average_rating).map(
                            (s, i) => (
                              <BlueStar
                                key={i}
                                className="intro__widget-star"
                              />
                            ),
                          )}
                        </div>
                        <span>
                          Read our{' '}
                          <span className="intro__widget-count">
                            {GlobalState.rating?.num_ratings}
                          </span>
                          {GlobalState.rating?.num_ratings > 1 ||
                          !GlobalState.rating?.num_ratings
                            ? 'reviews'
                            : 'review'}{' '}
                        </span>
                      </div>
                    </a>
                  )}
                  {width <= 768 && (
                    <div className="intro__scrolldown animated fadeIn">
                      <ScrollDown />
                      <ScrollDown />
                      <ScrollDown />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  },
)

export default Intro
