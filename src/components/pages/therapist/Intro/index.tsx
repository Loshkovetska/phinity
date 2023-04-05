import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Vectors } from '../../../../assets/ther-vectors.svg'
import { ReactComponent as Ellipse1 } from '../../../../assets/Ellipse 67.svg'
import { ReactComponent as ReviewsIODesk } from '../../../../assets/ex/reviews-desktop.svg'
import ReviewsIO from '../../../../assets/ex/reviews-mobile.svg'

import { ReactComponent as BlueStar } from '../../../../assets/ex/star.svg'

import PageLinks from '../../../common/PageLinks'
import DBStore from '../../../../stores/DBStore'
import Button from '../../../common/Button'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'
const Intro = observer(() => {
  const getStars = (count: number) => {
    return new Array(Math.ceil(count)).fill(0, 0)
  }

  let main = '',
  thera=''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
    thera = linksL.find((l: any) => l.id == 268).link
  }

  const links = [
    {
      title: ContentStore.therapist.mainPageTitle,
      link: main,
    },
    {
      title: ContentStore.therapist.pageTitle,
      link: thera,
    },
    {
      title: `${DBStore.therapist?.name}`,
      link: '/',
    },
  ]

  return (
    <section className="therapist-intro animated fadeIn ">
      <Ellipse1 className="therapist-intro__vector w31" />
      <Ellipse1 className="therapist-intro__vector w25" />
      <Ellipse1 className="therapist-intro__vector w71" />
      <Ellipse1 className="therapist-intro__vector w72" />
      <Ellipse1 className="therapist-intro__vector w120" />
      <Ellipse1 className="therapist-intro__vector w185" />
      <Ellipse1 className="therapist-intro__vector w254" />
      <div className="therapist-intro__container">
        <PageLinks links={links} />
        <div className="therapist-intro__content">
          <div className="therapist-intro__col">
            <h1 className="therapist-intro__title animated fadeIn">
              {DBStore.therapist?.name.split(' ').map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </h1>
            <div className="therapist-intro__position animated fadeIn">
              {DBStore.therapist?.position}
            </div>
            {GlobalState.rating && window.innerWidth > 900 && (
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
            <div className="therapist-intro__col-bottom">
              <a
                className="button blue p18p40 animated fadeIn "
                href={ContentStore.therapist.buttonLink}
                target="_blank"
              >
                <div className="button__text">
                  {ContentStore.therapist.buttonTitle}
                </div>
              </a>
            </div>
            {GlobalState.rating && window.innerWidth <= 900 && (
              <a
                className="animated fadeIn delay-2s intro__widget"
                href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
                target={'_blank'}
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
          </div>
          <div className="therapist-intro__img animated fadeIn">
            <img src={DBStore.therapist?.img} alt={DBStore.therapist?.name} />
            <Vectors />
          </div>{' '}
        </div>
      </div>
    </section>
  )
})

export default Intro
