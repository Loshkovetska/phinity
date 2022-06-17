import { observer } from 'mobx-react'
import PageLinks from '../../../common/PageLinks'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import fb from '../../../../assets/socials/black_facebook 1.png'
import inst from '../../../../assets/socials/black_instagram 1.png'
import tw from '../../../../assets/socials/black_twitter 1.png'
import { ReactComponent as Linkedin } from '../../../../assets/socials/linkedin.svg'
import { ReactComponent as Play } from '../../../../assets/video/Play.svg'
import { ReactComponent as ArrowRight } from '../../../../assets/ArrowRight.svg'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import DBStore, { getVideo } from '../../../../stores/DBStore'
import { useNavigate } from 'react-router'
import classNames from 'classnames'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'
const VideoIntro = observer(() => {
  const ref = useRef<any>(null)
  const navigate = useNavigate()
  const [play, setPlay] = useState(false)
  useEffect(() => {
    document.querySelector('.video-intro')?.classList.add('animated')

    setTimeout(() => {
      document.querySelector('.video-intro__title')?.classList.add('animated')
      document.querySelector('.video-intro__social')?.classList.add('animated')
    }, 500)
    setTimeout(() => {
      document.querySelector('.video-intro__content')?.classList.add('animated')
    }, 1200)
  }, [])

  useEffect(() => {
    const container = document.querySelector('.video-intro')
    const vect = document.querySelector('.video-intro__vector')
    const smooth = document.querySelector('.smooth')

    if (!smooth || !vect) return
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

  const fullScreen = () => {
    var elem: any = document.querySelector('.video-intro__video video')
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
    if (!ref.current) return

    if (ref.current.paused) {
      setPlay(true)
      ref.current.play()
      fullScreen()
    } else {
      setPlay(false)
      ref.current.pause()
      ref.current.load()
    }
  }

  useEffect(() => {
    if (!ref.current) return
    ref.current.addEventListener('ended', () => {
      setPlay(false)
    })

    return () => {
      ref.current && ref.current.load()
    }
  }, [])
  if (!DBStore.video) return <></>
  const { video } = DBStore
  return (
    <section className="video-intro">
      <Vector className="video-intro__vector" />
      <div className="video-intro__container">
        <PageLinks
          links={[
            { title: ContentStore.video.mainPageTitle, link: '/' },
            { title: ContentStore.video.pageTitle, link: '/videos' },
            { title: video.title, link: `/video/${video.id}` },
          ]}
        />

        <div className="video-intro__top">
          <div style={{ overflow: 'hidden' }}>
            <div className="video-intro__title">{video?.title}</div>
          </div>
          {window.innerWidth > 900 && (
            <div className="video-intro__social">
              <div className="video-intro__social-title">share this video</div>
              <div className="video-intro__social-list">
                <img src={fb} />
                <img src={inst} />
                <img src={tw} />
                <Linkedin />
              </div>
            </div>
          )}
        </div>
        <div className="video-intro__content">
          <div className="video-intro__video">
            <video
              ref={ref}
              controls={false}
              autoPlay={false}
              src={video?.src}
              poster={video?.poster ? video?.poster : ''}
            >
              <source src={video?.src}></source>
            </video>
            <div
              className={classNames('video-intro__video-play', play && 'play')}
              onClick={playVideo}
            >
              <Play />
            </div>
          </div>
          <div className="video-intro__text">{video.text}</div>
        </div>
        {window.innerWidth <= 900 && (
          <div className="video-intro__social">
            <div className="video-intro__social-title">share this video</div>
            <div className="video-intro__social-list">
              <img src={fb} />
              <img src={inst} />
              <img src={tw} />
              <Linkedin />
            </div>
          </div>
        )}
        <div
          className={classNames(
            'video-intro__bottom',
            !DBStore.videos?.find((p) => p.id == DBStore.video!.id - 1) &&
              'end',
          )}
        >
          {DBStore.videos?.find((p) => p.id == video!.id - 1) && (
            <div
              className="post-content__bottom-col"
              onClick={() =>
                getVideo(
                  DBStore.videos!.find((p) => p.id == DBStore.video!.id - 1)!
                    .id,
                ).then(() => {
                  navigate(`/video/${DBStore.video!.id}`)
                })
              }
            >
              <div className="post-content__bottom-arrow left">
                <ArrowRight />
              </div>
              <div className="post-content__bottom-block left">
                <div className="post-content__bottom-text">Previous</div>
                <div className="post-content__bottom-title">
                  {DBStore.videos?.find((p) => p.id == video!.id - 1)?.title}
                </div>
              </div>
            </div>
          )}
          {DBStore.videos?.find((p) => p.id == video!.id + 1) && (
            <div
              className="post-content__bottom-col"
              onClick={() => {
                getVideo(
                  DBStore.videos!.find((p) => p.id == DBStore.video!.id + 1)!
                    .id,
                ).then(() => {
                  navigate(`/video/${DBStore.video!.id}`)
                })
              }}
            >
              <div className="post-content__bottom-block right">
                <div className="post-content__bottom-text">Next</div>
                <div className="post-content__bottom-title">
                  {DBStore.videos?.find((p) => p.id == video!.id + 1)?.title}
                </div>
              </div>
              <div className="post-content__bottom-arrow right">
                <ArrowRight />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
})

export default VideoIntro
