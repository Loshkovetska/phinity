import { observer } from 'mobx-react'
import { ReactComponent as Triangle } from '../../../../assets/triangle.svg'
import { ReactComponent as Vectors } from '../../../../assets/vectors.svg'
import img from '../../../../assets/unsplash_DkGIAjlIJu0.png'
import GlobalState from '../../../../stores/GlobalState'
import { useEffect, useState } from 'react'
import { isTouch } from '../../../../mocks/mobile'
import classNames from 'classnames'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import ContentStore from '../../../../stores/ContentStore'

const OurServices = observer(() => {
  const [showVideo, setShow] = useState(false)
  const [showBut, setShowBtn] = useState(false)
  const [pos, setPos] = useState(0)

  const [poster, setPoster] = useState('')
  useEffect(() => {
    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        setPos(args.scroll.y)
      })
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (showVideo) {
      const video = document.querySelector('.video-play')
      if (!isTouch) {
        ;(video as any).style.transform = `translate3d(0, ${pos}px, 0)`
      } else {
        ;(video as any).style.transform = `translate3d(0, ${0}px, 0)`
      }
      const vd = video?.querySelector('video')
      if (!vd) return
      vd.play()
      GlobalState.locoScroll && GlobalState.locoScroll.stop()

      vd.addEventListener('ended', (e) => {
        setShowBtn(true)
      })
    } else {
      const video = document.querySelector('.video-reset')
      GlobalState.locoScroll && GlobalState.locoScroll.start()
      const vd = video?.querySelector('video')
      if (!vd) return
      vd.load()
      ;(video as any).style.transform = `translate3d(0, ${0}px, 0)`
    }
  }, [showVideo, GlobalState.locoScroll])

  const playVideo = () => {
    const video = document.querySelector('.video-play')
    if (!video) return
    const vd = video?.querySelector('video')
    vd?.play()
    setShowBtn(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setPoster(ContentStore.issues.services.poster)
    }, 300)
  }, [])

  return (
    <section className="our-services issues">
      <div className="our-services__top">
        <div
          className={classNames(
            showVideo && 'video-play',
            !showVideo && 'video-reset',
          )}
        >
          <div className="our-services__img-block">
            <Vectors className="our-services__img-vectors" />
            <div className="our-services__mask">
            {poster &&   <video
                poster={poster}
                onClick={() => {
                  if (showVideo) {
                    const video = document.querySelector('.video-play')
                    if (!video) return
                    const vd = video?.querySelector('video')
                    if (vd?.paused) {
                      vd?.play()
                      setShowBtn(false)
                    } else {
                      vd?.pause()
                      setShowBtn(true)
                    }
                  }
                }}
                className="about-video"
                autoPlay={false}
                muted={false}
                controls={false}
                src={ContentStore.issues.services.videoSrc}
              ></video>}
              {showBut && (
                <div
                  className={classNames(
                    'about-video__play',
                    showBut && showVideo && 'show',
                  )}
                  onClick={playVideo}
                >
                  <Triangle />
                </div>
              )}
            </div>
            <div
              className={classNames('about-video__close', showVideo && 'show')}
              onClick={() => {
                setShow(false)
                setShowBtn(false)
                const video = document.querySelector('.video-play')
                if (!video) return
                const vd = video?.querySelector('video')
                vd?.pause()
              }}
            >
              <Close />
            </div>
          </div>
        </div>
        <div className="our-services__top-col">
          <div
            className="our-services__title"
            dangerouslySetInnerHTML={{
              __html: ContentStore.issues.services.title,
            }}
          ></div>
          <div
            className="our-services__text"
            dangerouslySetInnerHTML={{
              __html: ContentStore.issues.services.text,
            }}
          ></div>
          <div className="about__video" onClick={() => setShow(!showVideo)}>
            <div className="about__video-play">
              <Triangle />
            </div>
            <span>Watch video</span>
          </div>
        </div>
      </div>
    </section>
  )
})

export default OurServices
