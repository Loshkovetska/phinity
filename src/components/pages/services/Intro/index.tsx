import { observer } from 'mobx-react'
import PageLinks from '../../../common/PageLinks'
import './index.scss'
import { ReactComponent as Scroll } from '../../../../assets/scroll.svg'
import { useEffect, useRef } from 'react'
import CircleType from 'circletype'
import Button from '../../../common/Button'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useLocation } from 'react-router'
import DBStore from '../../../../stores/DBStore'
import classNames from 'classnames'

const Intro = observer(
  ({ dt, links, classname }: { dt: any; links: any; classname: string }) => {
    const circleInstance = useRef<any>(null)
    const { pathname } = useLocation()
    useEffect(() => {
      setTimeout(() => {
        document.querySelector('.sub-intro__line')?.classList.add('animated')
      }, 100)
      new CircleType(circleInstance.current).radius(60)
    }, [pathname])

    useEffect(() => {
      if (dt.title.length > 28) {
        ;(document.querySelector(
          '.intro__text',
        ) as HTMLElement)!.style.animationDelay = '1.5s'
        ;(document.querySelector(
          '.sub-intro .button',
        ) as HTMLElement)!.style.animationDelay = '2s'
        ;(document.querySelector(
          '.sub-intro .intro__scroll',
        ) as HTMLElement)!.style.animationDelay = '3s'
      }
    }, [])

    useEffect(() => {
      const container = document.querySelector('.sub-intro')
      const vect = document.querySelector('.sub-intro__vector')
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

    return (
      <section className={classNames('sub-intro', classname)}>
        <Vector className="sub-intro__vector animated fadeIn" />
        <div className="sub-intro__container">
          <PageLinks links={links} />
          <div
            className="intro__title animated fadeIn"
            dangerouslySetInnerHTML={{ __html: dt.title }}
          ></div>
          {dt.title.length <= 28 && <div className="sub-intro__line"></div>}
          <div className="intro__bottom">
            <div className="intro__scroll animated fadeIn  ">
              <div className="intro__scroll-area">
                <div className="intro__scroll-text" ref={circleInstance}>
                  Scroll Down
                </div>
              </div>
              <Scroll className="" />
            </div>
            <div className="intro__block ">
              <div
                className="intro__text animated fadeIn   "
                dangerouslySetInnerHTML={{ __html: dt.text }}
              ></div>
              <Button
                text={<>{dt.buttonText}</>}
                click={() => window.open(dt.buttonLink, '__blank')}
                classname="blue p18p40 animated fadeIn delay-4s "
              />
            </div>
          </div>
        </div>
      </section>
    )
  },
)

export default Intro
