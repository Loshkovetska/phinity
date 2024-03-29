import { observer } from 'mobx-react'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Video } from '../../../../assets/video.svg'
import DBStore from '../../../../stores/DBStore'
import { Link, useNavigate } from 'react-router-dom'
import ContentStore from '../../../../stores/ContentStore'
import { Video as VideoType } from '../../../../api/mocks/videos'
import RightClickCatcher from '../../../common/RightClickCatcher'
import { outputFullDate } from '../../../../methods/output'
import CheckerItemsInsideCont from '../../../common/CheckerItemsInsideCont'
import CustomSlider from '../../../common/CustomSlider'

const Videos = observer(
  ({ arr, dt }: { arr: Array<VideoType> | null; dt: any }) => {
    useEffect(() => {
      window.addEventListener('scroll', () => {
        const smooth = document.querySelector('.smooth')
        const videos = smooth!.querySelector('.videos')
        const title = smooth!.querySelector('.videos__title')
        const text = smooth!.querySelector('.videos__text')
        const items = smooth!.querySelectorAll('.videos__item')

        if (!smooth || !videos) return

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = videos!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (window.scrollY > offset - 1000) {
          videos?.classList.add('animated')
          const btn = smooth!.querySelector('.videos .button')
          title?.classList.add('animated')
          text?.classList.add('animated')

          if (window.innerWidth > 768) {
            btn?.classList.add('animated')
          }

          items.forEach((i, id) => {
            i?.classList.add('animated')
            ;(i as HTMLDivElement).style.transitionDelay = `${id / 8 + 0.5}s`
          })
        }

        if (window.innerWidth <= 768) {
          const btn = smooth!.querySelector('.videos .button')
          if (btn) {
            elemRect = btn!.getBoundingClientRect()
            offset = elemRect.top - bodyRect.top
            if (window.scrollY > offset - 700) {
              btn?.classList.add('animated')
            }
          }
        }
      })
    }, [arr])
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [])

    // if (!arr || !arr.length) return <></>

    const linksL = GlobalState.links
    let videos = ''
    if (linksL) {
      videos = linksL.find((l: any) => l.id == 644).link
    }

    return (
      <section className="videos">
        <div className="videos__top">
          <div className="videos__col">
            <div style={{ overflow: 'hidden' }}>
              <div
                className="videos__title"
                dangerouslySetInnerHTML={{
                  __html: dt?.title,
                }}
              ></div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div
                className="videos__text"
                dangerouslySetInnerHTML={{
                  __html: dt?.text,
                }}
              ></div>
            </div>
          </div>
          {window.innerWidth > 768 && (
            <a className="button p18p40 black-border" href={videos}>
              <div className="button__text">
                <>
                  {dt?.buttonTitle} <Arrow />
                </>
              </div>
            </a>
          )}
        </div>
        {dt && (
          <CheckerItemsInsideCont
            container=".videos"
            child={'.videos__item'}
            slider={
              <div className="videos__list slider-videos">
                <CustomSlider
                  autoPlay
                  countItems={arr?.length ||dt.length}
                  width={305}
                  block="videos"
                  slidesToShow={
                    width >= 1440
                      ? 3
                      : width <= 1024 && width > 768
                      ? 2
                      : width <= 768
                      ? 1
                      : 3
                  }
                  slidesToScroll={
                    width >= 1440
                      ? 3
                      : width <= 1024 && width > 768
                      ? 2
                      : width <= 768
                      ? 1
                      : 3
                  }
                >
                  {arr?.slice(0, 20)?.map((v, ind) => (
                    <VideoComponent item={v} key={ind} />
                  ))}
                </CustomSlider>
              </div>
            }
            list={
              <div className="videos__list">
                {arr?.slice(0, 20)?.map((v, ind) => (
                  <VideoComponent item={v} key={ind} />
                ))}
              </div>
            }
            countOfChidlren={arr?.length ||dt.length}
          />
        )}

        {window.innerWidth <= 768 && (
          <a className="button p18p40 black-border" href={videos}>
            <div className="button__text">
              <>
                {dt?.buttonTitle} <Arrow />
              </>
            </div>
          </a>
        )}
      </section>
    )
  },
)

export default Videos

export const VideoComponent = observer(({ item }: { item: any }) => {
  const ref = useRef<HTMLVideoElement>(null)
  const links = GlobalState.links
  let videos = ''
  if (links) {
    videos = links.find((l: any) => l.id == 644).link
  }
  return (
    <a className="videos__item" href={`${videos}/${item.link}`}>
      <div className="videos__item-img">
        <img src={item.poster} alt={window.location.href} />
        <RightClickCatcher
          children={
            <video
              className={`#video${item.id}`}
              ref={ref}
              controls={false}
              autoPlay={false}
              src={item.src}
              poster={item.poster ? item.poster : ''}
            >
              <source src={item.src}></source>
            </video>
          }
        />
        <Video className="videos__item-icon" />
      </div>
      <div className="videos__item-title">{item.title}</div>
      <div className="videos__item-desc" dangerouslySetInnerHTML={{__html:item.text}}></div>
    </a>
  )
})
