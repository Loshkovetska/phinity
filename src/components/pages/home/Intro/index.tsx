import './index.scss'
import { ReactComponent as Scroll } from '../../../../assets/scroll.svg'
import Button from '../../../common/Button'
import CircleType from 'circletype'
import { useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import GlobalState from '../../../../stores/GlobalState'
import { ReactComponent as ReviewsIO } from '../../../../assets/ex/qnkvymax.svg'
import { ReactComponent as BlueStar } from '../../../../assets/ex/star.svg'
import ContentStore from '../../../../stores/ContentStore'

const Intro = observer(() => {
  const circleInstance = useRef<any>(null)
  const getStars = (count: number) => {
    return new Array(Math.ceil(count)).fill(0, 0)
  }
  useEffect(() => {
    new CircleType(circleInstance.current).radius(60)
  }, [])

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

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          if (window.innerWidth > 480) {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              args.scroll.y - offset + 65
            }px, 0)`
          } else {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              args.scroll.y - offset + 65
            }px, 0) scale(0.7)`
          }
        }
      })
  }, [GlobalState.locoScroll])

  if (!ContentStore.home) return <></>

  const { intro } = ContentStore.home

  return (
    <section className="intro">
      <Vector className="intro__vector animated fadeIn" />
      <div className="intro__container">
        <div
          className="intro__sub-title animated fadeIn"
          dangerouslySetInnerHTML={{ __html: intro?.sutitle }}
        ></div>
        <div
          className="intro__title animated fadeIn"
          dangerouslySetInnerHTML={{ __html: intro?.title }}
        ></div>
        <div className="intro__bottom">
          <div className="intro__bottom-widget">
            {GlobalState.rating && (
              <div className="animated fadeIn delay-2s intro__widget">
                <ReviewsIO className="intro__widget-icon" />
                <span className="intro__widget-count">
                  {GlobalState.rating?.num_ratings}
                </span>
                {GlobalState.rating?.num_ratings > 1 ||
                !GlobalState.rating?.num_ratings
                  ? 'reviews'
                  : 'review'}{' '}
                <span className="intro__widget-separate"></span>
                {getStars(GlobalState.rating?.average_rating).map((s, i) => (
                  <BlueStar key={i} />
                ))}
              </div>
            )}
            <div className="intro__scroll  animated fadeIn ">
              <div className="intro__scroll-area">
                <div className="intro__scroll-text" ref={circleInstance}>
                  Scroll Down
                </div>
              </div>
              <Scroll className="" />
            </div>
          </div>
          <div className="intro__block ">
            <div
              className="intro__text animated fadeIn delay-1s"
              dangerouslySetInnerHTML={{ __html: intro.text }}
            ></div>
            <Button
              text={<>{intro.buttonText}</>}
              click={() => window.open(intro.buttonTitle, '__blank')}
              classname="blue p18p40  animated fadeIn delay-2s"
            />
          </div>
        </div>
      </div>
    </section>
  )
})

export default Intro
