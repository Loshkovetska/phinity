import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import DBStore from '../../../../stores/DBStore'
import Button from '../../../common/Button'
import CheckerItemsInsideCont from '../../../common/CheckerItemsInsideCont'
import CustomSlider from '../../../common/CustomSlider'
import { VideoComponent } from '../../blog/Videos'
import './index.scss'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import GlobalState from '../../../../stores/GlobalState'

const PopularVideos = observer(({ content }: { content: any }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  useEffect(() => {
    if (!DBStore.popularVideos?.length) return

    if (DBStore.popularVideos.length > 0) {
      setTimeout(() => {
        const items = document.querySelectorAll('.popular-videos .videos__item')
        if (!items) return

        items.forEach((element) => {
          element.classList.add('animated')
        })
      }, 1000)
    }
  }, [DBStore.popularVideos])

  if (!DBStore.popularVideos || !DBStore.popularVideos?.length) return <></>

  const links = GlobalState.links
  let videos = ''
  if (links) {
    videos = links.find((l: any) => l.id == 644).link
  }
  return (
    <section className="popular-videos">
      <div className="popular-videos__top">
        <div>
          <div
            className="popular-videos__title"
            dangerouslySetInnerHTML={{ __html: content.title }}
          ></div>
          <div style={{ overflow: 'hidden' }}>
            <div
              className="popular-videos__text"
              dangerouslySetInnerHTML={{ __html: content.text }}
            ></div>
          </div>
        </div>
        <a href={videos} className="button p18p40 black-border">
          <div className="button__text">
            {' '}
            <>
              {content.buttonTitle} <Arrow />
            </>
          </div>
        </a>
      </div>

      <CheckerItemsInsideCont
        container=".popular-videos"
        child=".popular-videos .videos__item"
        slider={
          <div className="popular-videos__list">
            <CustomSlider
              countItems={DBStore.popularVideos?.length || 0}
              width={200}
              slidesToShow={width > 900 ? 3 : width > 660 ? 2 : 1}
              slidesToScroll={width > 900 ? 2 : 1}
              autoPlay
            >
              {DBStore.popularVideos?.map((vi, i) => (
                <VideoComponent item={vi} key={i} />
              ))}
            </CustomSlider>
          </div>
        }
        countOfChidlren={DBStore.popularVideos?.length || 0}
        list={
          <div className="popular-videos__list popular-videos__inline">
            {DBStore.popularVideos?.map((vi, i) => (
              <VideoComponent item={vi} key={i} />
            ))}
          </div>
        }
      />
      {width <= 1120 && (
        <a href={videos} className="button p18p40 black-border">
          <div className="button__text">
            {' '}
            <>
              {content.buttonTitle} <Arrow />
            </>
          </div>
        </a>
      )}
    </section>
  )
})

export default PopularVideos
