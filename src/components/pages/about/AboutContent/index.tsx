import PageLinks from '../../../common/PageLinks'
import './index.scss'
import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import { ReactComponent as Scroll } from '../../../../assets/scroll.svg'
import ReviewsIO from '../../../../assets/ex/reviews-mobile.svg'
import { ReactComponent as BlueStar } from '../../../../assets/ex/star.svg'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'
import { ReactComponent as ScrollDown } from '../../../../assets/post/arrow.svg'

const AboutContent = observer(() => {
  const [isAnimate, setAnimate] = useState(false)
  const getStars = (count: number) => {
    return new Array(Math.ceil(count)).fill(0, 0)
  }

  useEffect(() => {
    const els = document.querySelectorAll('.about-content *')
    if (isAnimate) {
      els.forEach((e) => e.classList.add('animated'))
    } else els.forEach((e) => e.classList.remove('animated'))
  }, [isAnimate])

  useEffect(() => {
    if (ContentStore.about) {
      setAnimate(true)
    }
  }, [ContentStore.about])

  useEffect(() => {
    if (!ContentStore.about) return
    const container = document.querySelector('.about-content')
    const vect = document.querySelector('.about-content__vector')
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
              window.scrollY - offset
            }px, 0)`
          } else {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0) scale(0.7)`
          }
        })
      }
    })
  }, [ContentStore.about])

  let main = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
  }

  return (
    <section className="about-content">
      <Vector className="about-content__vector" />

      <div className="about-content__container">
        <PageLinks
          links={[
            { title: ContentStore.about?.mainPageTitle, link: main },
            { title: ContentStore.about?.pageTitle, link: '/about' },
          ]}
        />
        <div style={{ overflow: 'hidden' }}>
          <h1
            className="about-content__title"
            dangerouslySetInnerHTML={{
              __html: ContentStore.about?.intro.title,
            }}
          ></h1>
        </div>
        <div
          className="about-content__text"
          dangerouslySetInnerHTML={{
            __html:
              window.innerWidth > 768
                ? ContentStore.about?.intro.deskText
                : ContentStore.about?.intro.deskText,
          }}
        ></div>
        {/* <a
          href={ContentStore.about?.phinity.booklink}
          className="button blue p18p40 animated fadeIn "
          target={'_blank'}
        >
          <div className="button__text">
            {ContentStore.about?.intro.buttonText}
          </div>
        </a>

        <div className="intro__bottom">
          {GlobalState.rating && window.innerWidth <= 768 && (
            <a
              href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
              target={'_blank'}
              className=" fadeIn intro__widget"
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
          <div className="intro__scrolldown animated fadeIn">
            <ScrollDown />
            <ScrollDown />
            <ScrollDown />
          </div>
        </div> */}
      </div>
    </section>
  )
})

export default AboutContent
