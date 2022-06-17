import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { ReactComponent as Triangle } from '../../../../assets/triangle.svg'
import { ReactComponent as VectorScroll } from '../../../../assets/Vector 4.svg'
import { ReactComponent as VectorScrollDesk } from '../../../../assets/Vector 8.svg'
import video from '../../../../assets/ex/unsplash_DkGIAjlIJu0.png'
import video2 from '../../../../assets/ex/gif 1.png'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import classNames from 'classnames'
import { isTouch } from '../../../../mocks/mobile'
import ContentStore from '../../../../stores/ContentStore'
import { useNavigate } from 'react-router'

const About = observer(() => {
  const [showVideo, setShow] = useState(false)
  const [showBut, setShowBtn] = useState(false)
  const [pos, setPos] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const about = smooth!.querySelector('.about')
        const items = smooth!.querySelectorAll('.about__row')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = about!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top
        if (args.scroll.y > offset - 500) {
          about?.classList.add('animated')
        }

        items.forEach((i, id) => {
          let elemRect = i!.getBoundingClientRect(),
            offset = elemRect.top - bodyRect.top
          if (args.scroll.y > offset - 500) {
            i?.classList.add('animated')
          }
        })
      })
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (GlobalState.locoScroll) {
      const container = document.querySelector('.about')
      const smooth = document.querySelector('.smooth')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetBottom = elemRect.bottom - elemRect.height / 2
      const vect = document.querySelector(
        `.about__vector.${window.innerWidth > 480 ? 'desk' : 'mob'}`,
      )

      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0)`
        }
      })
    }
  }, [GlobalState.locoScroll])

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
      const vd = video?.querySelector('video')
      if (!vd) return
      vd.load()
      GlobalState.locoScroll && GlobalState.locoScroll.start()
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

  if (!ContentStore.home.about) return <></>
  const { about } = ContentStore.home

  if (!about) return <></>

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
                dangerouslySetInnerHTML={{ __html: about[0].title }}
              ></div>
            </div>

            <div
              className="about__text"
              dangerouslySetInnerHTML={{ __html: about[0].text }}
            ></div>
            <div className="about__func">
              <div className="about__video" onClick={() => setShow(!showVideo)}>
                <div className="about__video-play">
                  <Triangle />
                </div>
                <span>Watch video</span>
              </div>
              <div className="about__more" onClick={() => navigate('/about')}>
                Read More
                <Arrow />
              </div>
            </div>
          </div>
          <div
            className={classNames(
              showVideo && 'video-play',
              !showVideo && 'video-reset',
            )}
          >
            <div className={classNames('about__img one video')}>
              <div className="about-mask">
                <video
                  poster={video}
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
                  src={about[0].videoScr}
                ></video>

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
              <video
                className="about-video"
                autoPlay={true}
                loop
                muted={true}
                controls={false}
                src={about[1].videoScr}
              >
                <source src={about[1].videoScr}></source>
              </video>
            </div>
          </div>
          <div className="about__col">
            <div
              className="about__title"
              dangerouslySetInnerHTML={{ __html: about[1].title }}
            ></div>
            <div
              className="about__text mb30"
              dangerouslySetInnerHTML={{ __html: about[1].text }}
            ></div>

            <div className="about__func">
              <Button
                classname="blue p18p40 book"
                text={
                  window.innerWidth <= 480
                    ? 'Book free consultation'
                    : 'Book now'
                }
                click={() =>
                  (window.location.href = ContentStore.home.intro.buttonText)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
export default About
