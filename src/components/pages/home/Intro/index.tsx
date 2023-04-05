import './index.scss'
import { ReactComponent as Scroll } from '../../../../assets/scroll.svg'
import { ReactComponent as ScrollDown } from '../../../../assets/post/arrow.svg'

import Button from '../../../common/Button'
import CircleType from 'circletype'
import { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import GlobalState from '../../../../stores/GlobalState'
import { ReactComponent as ReviewsIODesk } from '../../../../assets/ex/reviews-desktop.svg'
import ReviewsIO from '../../../../assets/ex/reviews-mobile.svg'

import { ReactComponent as BlueStar } from '../../../../assets/ex/star.svg'
import ContentStore from '../../../../stores/ContentStore'
const Intro = observer(() => {
  const circleInstance = useRef<any>(null)
  const [width, setWidth] = useState(window.innerWidth)

  const getStars = (count: number) => {
    return new Array(Math.ceil(count)).fill(0, 0)
  }

  useEffect(() => {
    if (!circleInstance.current) return
    setTimeout(() => {
      new CircleType(circleInstance.current).radius(60)
    }, 200)
  }, [width])

  useEffect(() => {
    document.querySelector('.intro')?.classList.add('animated')
  }, [])

  useEffect(() => {
    const container = document.querySelector('.intro')
    const vect = document.querySelector('.intro__vector')
    const smooth = document.querySelector('.smooth')
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom = elemRect.bottom - elemRect.height / 2

    window.addEventListener('scroll', () => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        if (window.innerWidth > 480) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            window.scrollY - offset + 65
          }px, 0)`
        } else {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            window.scrollY - offset + 65
          }px, 0) scale(0.7)`
        }
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  // if (!ContentStore.home) return <></>

  const intro = ContentStore.intro

  return (
    <section className="intro animated">
      <Vector className="intro__vector " />
      {/* animated fadeIn */}

      <div className="intro__container">
        {/* animated fadeIn */}
        <div
          className="intro__sub-title "
          dangerouslySetInnerHTML={{ __html: intro?.sutitle }}
        ></div>
        {/* animated fadeIn */}
        <h1
          className="intro__title "
          dangerouslySetInnerHTML={{ __html: intro?.title }}
        ></h1>
        <div className="intro__bottom">
          {/* animated fadeIn delay-2s */}
          <div className="intro__bottom-widget">
            {GlobalState.rating && width > 768 && (
              <a
                href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
                target={'_blank'}
                className=" intro__widget"
              >
                <div className="intro__widget-col">
                  <div className="intro__widget-stars">
                    <img
                      src={ReviewsIO}
                      alt={window.location.href}
                      className="intro__widget-icon"
                    />
                    {getStars(GlobalState.rating?.average_rating).map(
                      (s, i) => (
                        <BlueStar key={i} className="intro__widget-star" />
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
          </div>
          <div className="intro__block ">
            {/* animated fadeIn */}
            <div
              className="intro__text "
              dangerouslySetInnerHTML={{ __html: intro.text }}
            ></div>
            {/* animated fadeIn */}
            <a
              href={intro.buttonLink}
              target="__blank"
              className="button blue p18p40   "
            >
              <div className="button__text">{intro.buttonText}</div>
            </a>

            <div className="intro__block-row">
              {/* animated fadeIn delay-2s */}
              {GlobalState.rating && width <= 768 && (
                <a
                  href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
                  target={'_blank'}
                  className=" intro__widget"
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
                          <BlueStar key={i} className="intro__widget-star" />
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
              {/* animated fadeIn */}
              {width <= 768 && (
                <div className="intro__scrolldown ">
                  <ScrollDown />
                  <ScrollDown />
                  <ScrollDown />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Intro
