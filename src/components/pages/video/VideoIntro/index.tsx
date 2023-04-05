import { observer } from 'mobx-react'
import PageLinks from '../../../common/PageLinks'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import { ReactComponent as Play } from '../../../../assets/video/Play.svg'
import { ReactComponent as ArrowRight } from '../../../../assets/ArrowRight.svg'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import DBStore, { getVideo } from '../../../../stores/DBStore'
import { useNavigate } from 'react-router'
import classNames from 'classnames'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'
import RightClickCatcher from '../../../common/RightClickCatcher'
import { outputDate } from '../../../../methods/output'
const VideoIntro = observer(() => {
  const ref = useRef<any>(null)

  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (!DBStore.video || !document.querySelector('.video-intro')) return

    setTimeout(() => {
      document.querySelector('.video-intro')!.classList.add('animated')
    }, 100)
    setTimeout(() => {
      document.querySelector('.video-intro__content')!.classList.add('animated')
    }, 200)
  }, [DBStore.video])

  useEffect(() => {
    const container = document.querySelector('.video-intro')
    const vect = document.querySelector('.video-intro__vector')
    const smooth = document.querySelector('.smooth')

    if (!smooth || !vect) return
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom = elemRect.bottom - elemRect.height / 2

    window.addEventListener('scroll', (args: any) => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        requestAnimationFrame(() => {
          if (window.innerWidth > 480) {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0)`
          } else {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0) scale(0.7)`
          }
        })
      }
    })
  }, [DBStore.video])

  const playVideo = () => {
    if (!ref.current) return
    if (ref.current.paused) {
      setPlay(true)
      ref.current.play()
    } else {
      setPlay(false)
      ref.current.pause()
    }
  }

  const { video } = DBStore

  useEffect(() => {
    if (!ref.current && video?.src.includes('youtube')) return
    ;(ref.current as HTMLVideoElement).addEventListener('playing', (e) => {
      setPlay(true)
    })
    ;(ref.current as HTMLVideoElement).addEventListener('pause', (e) => {
      setPlay(false)
      console.log('paused')
    })
    ;(ref.current as HTMLVideoElement).addEventListener('seeking', (e) => {
      setPlay(true)
      console.log('seek')
    })
    ;(ref.current as HTMLVideoElement).addEventListener('ended', (e) => {
      setPlay(false)
      console.log('end')
      ;(ref.current as HTMLVideoElement).load()
    })
    return () => {
      ref.current && ref.current.load()
    }
  }, [video])

  const getIndex = () => {
    let idx = 0
    DBStore.videos?.forEach((v, i) => {
      if (v.id == video?.id) idx = i
    })

    return idx
  }

  const dt = DBStore.videos

  let videos = '',
    main = ''

  const links = GlobalState.links
  if (links) {
    videos = links.find((l: any) => l.id == 644).link
    main = links.find((l: any) => l.id == 2).link
  }

  return (
    <section className="video-intro">
      <Vector className="video-intro__vector" />
      <div className="video-intro__container">
        <PageLinks
          links={[
            { title: ContentStore.video.mainPageTitle, link: main },
            { title: ContentStore.video.pageTitle, link: videos },
            {
              title: video?.title || '',
              link: `${videos}/${video?.link || ''}`,
            },
          ]}
        />

        <div className="video-intro__content">
          <div className="video-intro__content-top">
            <div className="video-intro__video">
              <RightClickCatcher
                children={
                  <>
                    {!video?.src.includes('youtube') ? (
                      <video
                        onClick={(e) => {
                          e.preventDefault()
                          playVideo()
                        }}
                        disableRemotePlayback={true}
                        ref={ref}
                        controls={play}
                        autoPlay={false}
                        src={video?.src}
                        poster={video?.poster ? video?.poster : ''}
                      >
                        <source src={video?.src}></source>
                      </video>
                    ) : (
                      <iframe
                        width="100%"
                        height="100%"
                        src={video.src}
                        frameBorder="0"
                        allowFullScreen={true}
                      ></iframe>
                    )}
                  </>
                }
              />
              {!video?.src.includes('youtube') && (
                <div
                  className={classNames(
                    'video-intro__video-play',
                    play && 'play',
                  )}
                  onClick={playVideo}
                >
                  <Play />
                </div>
              )}
            </div>
          </div>
          <div className="video-intro__top">
            <div className="video-intro__subtop">
              <div style={{ overflow: 'hidden' }}>
                <h1 className="video-intro__title">{video?.title}</h1>
              </div>
              <p className="video-intro__top-bottom">
                {DBStore.video?.linkAuthor && (
                  <a href={DBStore.video.linkAuthor}>
                    {DBStore.video.author?.name}
                  </a>
                )}{' '}
                &bull; {outputDate(DBStore.video!.date)}
              </p>
            </div>
            {window.innerWidth > 900 && (
              <div className="video-intro__social">
                <div className="video-intro__social-title">
                  {ContentStore.video?.shareTitle || ''}
                </div>
                <div className="video-intro__social-list">
                  {ContentStore.video?.shareList?.map((b: any, i) => (
                    <a
                      href={b.link + window.location.href}
                      target="__blank"
                      key={i}
                    >
                      <img src={b.icon} alt={window.location.href} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            className="video-intro__text"
            dangerouslySetInnerHTML={{ __html: video?.text || '' }}
          ></div>
          {DBStore.video?.author && (
            <div className="post-content__block">
              <div className="post-content__block-img">
                <img
                  src={DBStore.video?.author?.src || ''}
                  alt={DBStore.video?.title}
                />
              </div>
              {DBStore.video?.author && (
                <div className="post-content__block-col">
                  <div className="post-content__block-subtitle">
                    About the Author
                  </div>
                  <div className="post-content__block-title">
                    {DBStore.video?.author?.name}
                    {DBStore.video?.author?.position &&
                    DBStore.video?.author?.position.length
                      ? ', '
                      : ''}{' '}
                    {DBStore.video?.author?.position}
                  </div>
                  <div className="post-content__block-text">
                    {DBStore.video?.author?.about}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {window.innerWidth <= 900 && (
          <div className="video-intro__social">
            <div className="video-intro__social-title">
              {' '}
              {ContentStore.video?.shareTitle || ''}
            </div>
            <div className="video-intro__social-list">
              {ContentStore.video?.shareList?.map((b: any, i) => (
                <a
                  key={i}
                  href={b.link + window.location.href}
                  target="__blank"
                >
                  <img src={b.icon} alt={window.location.href} />
                </a>
              ))}
            </div>
          </div>
        )}
        {dt?.length ? (
          <div className={classNames('video-intro__bottom')}>
            {dt[getIndex() - 1] ? (
              <PostArrow
                title={dt[getIndex() - 1]?.title}
                isLeft
                action={() => {
                  // if (ref.current) {
                  //   ref.current.pause()
                  //   ref.current.load()
                  //   setPlay(false)
                  // }

                  window.location.href = `${videos}/${dt[getIndex() - 1]!.link}`

                  // getVideo(dt![getIndex() - 1]!.link!)
                }}
              />
            ) : (
              <PostArrow
                title={dt![dt!.length - 1]?.title}
                isLeft
                action={() => {
                  // if (ref.current) {
                  //   ref.current.pause()
                  //   ref.current.load()
                  //   setPlay(false)
                  // }

                  window.location.href = `${videos}/${
                    dt![dt!.length - 1]!.link
                  }`
                  // getVideo(dt![dt!.length - 1]!.link!)
                }}
              />
            )}
            {dt[getIndex() + 1] ? (
              <PostArrow
                title={dt[getIndex() + 1]?.title}
                isLeft={false}
                action={() => {
                  // if (ref.current) {
                  //   ref.current.pause()
                  //   ref.current.load()
                  //   setPlay(false)
                  // }

                  window.location.href = `${videos}/${dt[getIndex() + 1]!
                    .link!}`
                  // getVideo(dt[getIndex() + 1]!.link!)
                }}
              />
            ) : (
              <PostArrow
                title={dt![0].title}
                isLeft={false}
                action={() => {
                  // if (ref.current) {
                  //   ref.current.pause()
                  //   ref.current.load()
                  //   setPlay(false)
                  // }
                  window.location.href = `${videos}/${dt![0].link!}`
                  // getVideo(dt![0]!.link!)
                }}
              />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  )
})

export default VideoIntro

export const PostArrow = observer(
  ({
    title,
    isLeft,
    action,
  }: {
    isLeft: boolean
    title: string | undefined
    action: () => void
  }) => {
    return (
      <div className="post-content__bottom-col" onClick={action}>
        {isLeft ? (
          <>
            <div
              className={classNames(
                'post-content__bottom-arrow',
                isLeft ? 'left' : 'right',
              )}
            >
              <ArrowRight />
            </div>
            <div
              className={classNames(
                'post-content__bottom-block',
                isLeft ? 'left' : 'right',
              )}
            >
              <div className="post-content__bottom-text">
                {isLeft ? 'Previous' : 'Next'}
              </div>
              <div className="post-content__bottom-title">{title}</div>
            </div>
          </>
        ) : (
          <>
            <div className="post-content__bottom-block right">
              <div className="post-content__bottom-text">Next</div>
              <div className="post-content__bottom-title">{title}</div>
            </div>
            <div className="post-content__bottom-arrow right">
              <ArrowRight />
            </div>
          </>
        )}
      </div>
    )
  },
)
