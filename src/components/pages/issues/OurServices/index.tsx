import { observer } from 'mobx-react'
import { ReactComponent as Triangle } from '../../../../assets/triangle.svg'
import { ReactComponent as Vectors } from '../../../../assets/vectors.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useEffect, useState } from 'react'
import { isTouch } from '../../../../mocks/mobile'
import classNames from 'classnames'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import ContentStore from '../../../../stores/ContentStore'
import { ReactComponent as Zoom } from '../../../../assets/ex/zoom.svg'
import RightClickCatcher from '../../../common/RightClickCatcher'
import { changePlayerState, setVideo } from '../../../common/VideoBox'

const OurServices = observer(() => {
  const [showVideo, setShow] = useState(false)
  const [showBut, setShowBtn] = useState(false)
  const [pos, setPos] = useState(0)

  const [poster, setPoster] = useState('')
  useEffect(() => {
    window.addEventListener('scroll', (args: any) => {
        setPos(window.scrollY)
      })
  }, [])

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

      vd.addEventListener('ended', (e) => {
        setShowBtn(true)
      })
    } else {
      const video = document.querySelector('.video-reset')
      const vd = video?.querySelector('video')
      if (!vd) return
      vd.load()
      ;(video as any).style.transform = `translate3d(0, ${0}px, 0)`
    }
  }, [showVideo])

  const fullScreen = () => {
    var elem: any = document.querySelector('.about-video')
    if (!elem) return
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen()
    }
  }
  const playVideo = () => {
    // const video = document.querySelector('.video-play')
    // if (!video) return
    const vd = document?.querySelector('.about-video')
    ;(vd as HTMLVideoElement)?.play()
    fullScreen()
  }

  useEffect(() => {
    setTimeout(() => {
      setPoster(ContentStore.issues.services.poster)
    }, 300)
  }, [])

  useEffect(() => {
    document
      .querySelector('.about-video')
      ?.addEventListener('fullscreenchange', (e: any) => {
        if (document.fullscreenElement) {
        } else {
          const vd = document?.querySelector('.about-video')
          ;(vd as HTMLVideoElement)?.pause()
          ;(vd as HTMLVideoElement)?.load()
        }
      })
  }, [poster])
  if (!ContentStore.issues) return <></>
  return (
    <section className="our-services issues">
      <div className="our-services__top left">
        <div className="our-services__top-img">
          <div
          // className={classNames(
          //   showVideo && 'video-play',
          //   !showVideo && 'video-reset',
          // )}
          >
            <div className="our-services__img-block">
              <Vectors className="our-services__img-vectors" />
              <div className="our-services__mask">
                {poster && (
                  <RightClickCatcher
                    children={
                      <video
                        disableRemotePlayback={true}
                        poster={poster}
                        className="about-video"
                        autoPlay={false}
                        muted={false}
                        controls={false}
                        src={ContentStore.issues.services.videoSrc}
                      ></video>
                    }
                  ></RightClickCatcher>
                )}
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
                {!showBut && (
                  <Zoom
                    className={classNames(
                      'about-video__zoom',
                      showVideo && 'show',
                    )}
                    onClick={() => {
                      fullScreen()
                    }}
                  />
                )}
              </div>
              <div
                className={classNames(
                  'about-video__close',
                  showVideo && 'show',
                )}
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
          <div
            className="about__video"
            onClick={() => {
              setVideo(ContentStore.issues.services.videoSrc, poster)
              changePlayerState()
            }}
          >
            {/* onClick={() => playVideo()} */}
            <div className="about__video-play">
              <Triangle />
            </div>
            <span>Watch video</span>
            <div className="about__video-cont"></div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default OurServices
