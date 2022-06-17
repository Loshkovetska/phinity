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

const Videos = observer(() => {
  const navigate = useNavigate()
  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const videos = smooth!.querySelector('.videos')
        const title = smooth!.querySelector('.videos__title')
        const text = smooth!.querySelector('.videos__text')
        const items = smooth!.querySelectorAll('.videos__item')
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = videos!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 500) {
          videos?.classList.add('animated')
          const btn = smooth!.querySelector('.videos .button')
          title?.classList.add('animated')
          text?.classList.add('animated')

          if (window.innerWidth > 768) {
            btn?.classList.add('animated')
          }

          items.forEach((i, id) => {
            i?.classList.add('animated')
            ;(i as HTMLDivElement).style.transitionDelay = `${id / 6 + 2}s`
          })
        }

        if (window.innerWidth <= 768) {
          const btn = smooth!.querySelector('.videos .button')
          if (btn) {
            elemRect = btn!.getBoundingClientRect()
            offset = elemRect.top - bodyRect.top
            if (args.scroll.y > offset - 500) {
              btn?.classList.add('animated')
            }
          }
        }
      })
    }
  }, [GlobalState.locoScroll])

  if (!ContentStore.blog.video) return <></>
  if (!DBStore.videos) return <></>
  return (
    <section className="videos">
      <div className="videos__top">
        <div className="videos__col">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="videos__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.blog.video.title,
              }}
            ></div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div
              className="videos__text"
              dangerouslySetInnerHTML={{ __html: ContentStore.blog.video.text }}
            ></div>
          </div>
        </div>
        {window.innerWidth > 768 && (
          <Button
            text={
              <>
                {ContentStore.blog.video.buttonTitle} <Arrow />
              </>
            }
            click={() => navigate('/videos')}
            classname="p18p40 black-border"
          />
        )}
      </div>
      <div className="videos__list">
        {DBStore.videos?.slice(0, 3)?.map((v, ind) => (
          <VideoComponent item={v} key={ind} />
        ))}
      </div>
      {window.innerWidth <= 768 && (
        <Button
          text={
            <>
              {ContentStore.blog.video.buttonTitle} <Arrow />
            </>
          }
          click={() => navigate('/videos')}
          classname="p18p40 black-border"
        />
      )}
    </section>
  )
})

export default Videos

export const VideoComponent = observer(({ item }: { item: any }) => {
  const ref = useRef<HTMLVideoElement>(null)
  const [isReady, setReady] = useState(false)
  const [length, setLength] = useState('0:00')
  const getLength = () => {
    if (!ref.current) return
    let minutes = 0,
      seconds = 0
    minutes = parseInt((ref.current.duration / 60).toString(), 10)
    seconds = ref.current.duration % 60

    setLength(`${Math.floor(minutes)}:${Math.floor(seconds)}`)
  }

  useEffect(() => {
    if (isReady) {
      getLength()
    }
  }, [isReady])

  return (
    <Link className="videos__item" to={`/videos`}>
      <div className="videos__item-img">
        <video
          ref={ref}
          controls={false}
          autoPlay={false}
          src={item.src}
          onLoadedMetadata={() => setReady(true)}
          poster={item.poster ? item.poster : ''}
        >
          <source src={item.src}></source>
        </video>
        <Video className="videos__item-icon" />
      </div>
      <div className="videos__item-title">{item.title}</div>
      <div className="videos__item-length">
        {ContentStore.blog.video.videoLength} {length}
      </div>
    </Link>
  )
})
