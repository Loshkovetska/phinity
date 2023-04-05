import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { ReactComponent as Triangle } from '../../../../assets/triangle.svg'
import { ReactComponent as VectorScroll } from '../../../../assets/Vector 4.svg'
import { ReactComponent as VectorScrollDesk } from '../../../../assets/Vector 8.svg'
import { ReactComponent as Zoom } from '../../../../assets/ex/zoom.svg'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import classNames from 'classnames'
import { isTouch } from '../../../../mocks/mobile'
import ContentStore from '../../../../stores/ContentStore'
import { useNavigate } from 'react-router'
import { lerp } from '../../../../methods/lerp'
import RightClickCatcher from '../../../common/RightClickCatcher'
import { changePlayerState, setVideo } from '../../../common/VideoBox'
import { Link } from 'react-router-dom'

const About = observer(() => {
  const [showVideo, setShow] = useState(false)
  const [showBut, setShowBtn] = useState(false)
  const [pos, setPos] = useState(0)
  const [isAutoPlay, setAuto] = useState(false)
  const secondVideo = useRef<any>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const smooth = document.querySelector('.smooth')
      const about = smooth!.querySelector('.about')
      const items = smooth!.querySelectorAll('.about__row')

      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = about!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top
      if (window.scrollY > offset - 800) {
        about?.classList.add('animated')
      }

      items.forEach((i, id) => {
        let elemRect = i!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top
        if (window.scrollY > offset - 800) {
          i?.classList.add('animated')

          if (id + 1 == items.length) {
            setAuto(true)
          }
        }
      })
    })
  }, [])

  useEffect(() => {
    const container = document.querySelector('.about')
    const smooth = document.querySelector('.smooth')
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom = elemRect.bottom - elemRect.height / 2

    let frame: any = null
    const vect = document.querySelector(
      `.about__vector.${window.innerWidth > 480 ? 'desk' : 'mob'}`,
    )
    window.addEventListener('scroll', () => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${
          window.scrollY - offset
        }px, 0)`
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
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
    setShowBtn(false)
  }

  useEffect(() => {
    if (isAutoPlay) {
      setTimeout(() => {
        secondVideo.current && secondVideo.current.play()
      }, 1000)
    }
  }, [isAutoPlay])

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
  }, [])

  // if (!ContentStore.home.about) return <></>
  const { about } = ContentStore.home

  // if (!about) return <></>

  const linksL = GlobalState.links
  let aboutL = ''
  if (linksL) {
    aboutL = linksL.find((l: any) => l.id == 259).link
  }

  return (
    <section className="about">
      <VectorScrollDesk className="about__vector desk" />
      <VectorScroll className="about__vector mob" />
      <div className="about__container">
        <div className="about__row one animated">
          <div className="about__col">
            <div style={{ overflow: 'hidden' }}>
              <div
                className="about__title"
                dangerouslySetInnerHTML={{
                  __html: about ? about[0]?.title : '',
                }}
              ></div>
            </div>

            <div
              className="about__text"
              dangerouslySetInnerHTML={{ __html: about ? about[0].text : '' }}
            ></div>
            <div className="about__func">
              <div
                className="about__video"
                onClick={() => {
                  setVideo(about ?about[0]?.videoScr:'',about ?about[0]?.poster:'')
                  changePlayerState()
                }}
              >
                {/* playVideo() */}
                <div className="about__video-play">
                  <Triangle />
                </div>
                <span>Watch video</span>
                <div className="about__video-cont"></div>
              </div>
              <a className="about__more" href={aboutL}>
                Read More
                <Arrow />
              </a>
            </div>
          </div>
          <div
            className={
              classNames()
              // showVideo && 'video-play',
              // !showVideo && 'video-reset',
            }
          >
            <div className={classNames('about__img one video')}>
              <div className="about-mask">
                <RightClickCatcher
                  children={
                    <video
                      disableRemotePlayback={true}
                      poster={about?about[0]?.poster:''}
                      className="about-video"
                      autoPlay={false}
                      muted={false}
                      controls={false}
                      src={about?about[0].videoScr:''}
                    ></video>
                  }
                />

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
        <div className="about__row two">
          <div className="about__img two">
            <div className="about-mask">
              <RightClickCatcher
                children={
                  <video
                    disableRemotePlayback={true}
                    ref={secondVideo}
                    className="about-video"
                    autoPlay={isAutoPlay}
                    poster={about?about[1].poster:''}
                    loop
                    playsInline
                    muted={true}
                    controls={false}
                    src={about?about[1].videoScr:''}
                  >
                    <source src={about?about[1].videoScr:""}></source>
                  </video>
                }
              />
            </div>
          </div>
          <div className="about__col">
            <div
              className="about__title"
              dangerouslySetInnerHTML={{ __html: about?about[1].title:'' }}
            ></div>
            <div
              className="about__text mb30"
              dangerouslySetInnerHTML={{ __html: about?about[1].text:'' }}
            ></div>

            <div className="about__func">
              <a
                className="button blue p18p40 book"
                href={ContentStore.home.about?ContentStore.home.about[1].buttonLink:''}
                target="__blank"
              >
                <div className="button__text">
                  {ContentStore.home.about?ContentStore.home.about[1].buttonTitle:''}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
export default About
