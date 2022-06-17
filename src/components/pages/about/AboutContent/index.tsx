import PageLinks from '../../../common/PageLinks'
import './index.scss'
import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useRef } from 'react'
import CircleType from 'circletype'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import { ReactComponent as Scroll } from '../../../../assets/scroll.svg'

import GlobalState from '../../../../stores/GlobalState'
import Button from '../../../common/Button'
import ContentStore from '../../../../stores/ContentStore'

const AboutContent = observer(() => {
  const circleInstance = useRef<any>(null)

  useEffect(() => {
    new CircleType(circleInstance.current).radius(60)
  }, [])

  useEffect(() => {
    const container = document.querySelector('.about-content')
    const vect = document.querySelector('.about-content__vector')
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
              args.scroll.y - offset
            }px, 0)`
          } else {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              args.scroll.y - offset
            }px, 0) scale(0.7)`
          }
        }
      })
  }, [GlobalState.locoScroll])

  if (!ContentStore.about) return <></>
  return (
    <section className="about-content">
      <Vector className="about-content__vector animated fadeIn" />

      <div className="about-content__container">
        <PageLinks
          links={[
            { title: 'Home', link: '/' },
            { title: 'About us', link: '/about' },
          ]}
        />
        <div
          className="about-content__title  animated fadeIn"
          dangerouslySetInnerHTML={{ __html: ContentStore.about.intro.title }}
        ></div>
        <div
          className="about-content__text animated fadeIn delay-1s"
          dangerouslySetInnerHTML={{
            __html:
              window.innerWidth > 768
                ? ContentStore.about.intro.deskText
                : ContentStore.about.intro.mobText,
          }}
        ></div>
        <Button
          text={ContentStore.about.intro.buttonText}
          click={() => {}}
          classname="blue p18p40 animated fadeIn delay-2s "
        />

        <div className="intro__bottom">
          <div className="intro__scroll animated fadeIn delay-3s  ">
            <div className="intro__scroll-area">
              <div className="intro__scroll-text" ref={circleInstance}>
                Scroll Down
              </div>
            </div>
            <Scroll className="" />
          </div>
        </div>
      </div>
    </section>
  )
})

export default AboutContent
