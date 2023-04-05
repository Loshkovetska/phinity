import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import { ReactComponent as Triangle } from '../../../../assets/triangle.svg'
import { ReactComponent as Vectors } from '../../../../assets/vectors.svg'
import { ReactComponent as Setting } from '../../../../assets/filter.svg'
import { ReactComponent as MSetting } from '../../../../assets/mob-sett.svg'
import { ReactComponent as Zoom } from '../../../../assets/ex/zoom.svg'

import Button from '../../../common/Button'
import { ReactComponent as V1 } from '../../../../assets/services-vectors/Vector 10.svg'
import { ReactComponent as V2 } from '../../../../assets/services-vectors/Vector 11.svg'
import { ReactComponent as V3 } from '../../../../assets/services-vectors/Vector 12.svg'
import { ReactComponent as V4 } from '../../../../assets/services-vectors/Vector 13.svg'
import { ReactComponent as V5 } from '../../../../assets/services-vectors/Vector 14.svg'
import { ReactComponent as V6 } from '../../../../assets/services-vectors/Vector 15.svg'
import { ReactComponent as V7 } from '../../../../assets/services-vectors/Vector 16.svg'
import { ReactComponent as V9 } from '../../../../assets/services-vectors/Vector 18.svg'
import { ReactComponent as V10 } from '../../../../assets/services-vectors/Vector 19.svg'
import classNames from 'classnames'
import { Fragment, useEffect, useState } from 'react'
import GlobalState, {
  changeTheraFilterState,
} from '../../../../stores/GlobalState'

import { ReactComponent as VectorMain } from '../../../../assets/Vector\ 3.svg'
import { ReactComponent as VectorSub } from '../../../../assets/Vector\ 4.svg'
import DBStore from '../../../../stores/DBStore'
import { isTouch } from '../../../../mocks/mobile'
import ContentStore from '../../../../stores/ContentStore'
import { Service } from '../../../../api/mocks/services'
import Letters from '../../../common/Letters'
import Filter from '../../therapists/Filter'
import RightClickCatcher from '../../../common/RightClickCatcher'
import { changePlayerState, setVideo } from '../../../common/VideoBox'

const Vector = ({ id }: { id: number }) => {
  const vectors = [
    <V1 />,
    <V2 />,
    <V3 />,
    <V4 />,
    <V5 />,
    <V6 />,
    <V7 />,
    <V9 />,
    <V10 />,
  ]
  return vectors[
    id >= vectors.length ? Math.floor(id / vectors.length) - 1 : id
  ]
}

const OurServices = observer(() => {
  const [showVideo, setShow] = useState(false)
  const [showBut, setShowBtn] = useState(false)
  const [pos, setPos] = useState(0)
  const [letter, setLetter] = useState('A')
  const [dt, setDt] = useState<Array<Service> | null>(null)
  const [poster, setPoster] = useState('')

  const getList = (letter: string) => {
    let services = JSON.parse(JSON.stringify(DBStore.services))
    services = services.sort((a: Service, b: Service) =>
      a.title.localeCompare(b.title),
    )
    services = services?.filter(
      (s: Service) =>
        s.title[0].toLowerCase().trim() == letter.toLocaleLowerCase().trim(),
    )

    return services
  }

  useEffect(() => {
    if (window.innerWidth <= 768 && DBStore.services) {
      let services = JSON.parse(JSON.stringify(DBStore.services))
      services = services.sort((a: Service, b: Service) =>
        a.title.localeCompare(b.title),
      )

      let letter0 = 'A'
      if (services && services.length) {
        letter0 = services[0].title[0].toUpperCase()
        setDt(getList(letter0))
      }
      setLetter(letter0)
    }
  }, [DBStore.services])

  useEffect(() => {
    setDt(getList(letter))
  }, [letter])

  useEffect(() => {
    if (!DBStore.services) return
    setTimeout(() => {
      window.addEventListener('scroll', () => {
        const smooth = document.querySelector('.smooth')
        const about = smooth!.querySelector('.our-services')
        if (about?.classList.contains('issues')) return
        const middle = smooth!.querySelector('.our-services__middle')
        const title = smooth!.querySelector(
          '.our-services__middle .our-services__title',
        )
        const button = smooth!.querySelector(
          '.our-services__middle .button.filter',
        )
        const list = smooth!.querySelector('.our-services__list')
        const items = smooth!.querySelectorAll('.our-services__item')
        const top = smooth!.querySelector('.our-services__top')
        const letters = smooth!.querySelectorAll('.our-services__letter')
        const lettersBlock = smooth!.querySelector('.our-services__letters')
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = about!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top
        if (window.scrollY > offset - 500) {
          about?.classList.add('animated')
        }

        if (window.scrollY > offset - 300) {
          top?.classList.add('animated')
        }

        elemRect = top!.getBoundingClientRect()
        offset = elemRect.bottom

        if (window.scrollY > offset) {
          title?.classList.add('animated')
          button?.classList.add('animated')
          if (window.innerWidth > 768) {
            list?.classList.add('animated')
          }

          if (window.innerWidth <= 768) {
            list?.classList.add('animated')
          }
        }
      })
    }, 1500)
  }, [DBStore.services])

  useEffect(() => {
    if (!DBStore.services) return
    if (window.innerWidth <= 768) {
      const container = document.querySelector('.our-services')
      if (container?.classList.contains('issues')) return
      const list = document.querySelector('.our-services__list')
      const vect = document.querySelector('.our-services__vector')
      const smooth = document.querySelector('.smooth')
      if (!vect || !list) return
      if (!smooth) return

      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        listRect = list!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetBottom = listRect.top - vect!.getBoundingClientRect().height

      window.addEventListener('scroll', () => {
        if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
          requestAnimationFrame(() => {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0)`
          })
        }
      })
    }
  }, [DBStore.services])

  useEffect(() => {
    setTimeout(() => {
      if (DBStore.services) {
        const cont = document.querySelector('.our-services')
        if (cont?.classList.contains('issues')) return
        const next = document.querySelector('.phinity-adv')
        const list = document.querySelector('.our-services__list')
        const smooth = document.querySelector('.smooth')
        const v2 = document.querySelector('.our-services__list-vector')
        if (!v2 || !next || !list) return
        var bodyRect = smooth!.getBoundingClientRect(),
          listRect = list!.getBoundingClientRect(),
          nextRect = next!.getBoundingClientRect(),
          contRect = cont!.getBoundingClientRect()
        var offset = listRect.top - bodyRect.top,
          offsetBottom = nextRect.top - v2!.getBoundingClientRect().height

        window.addEventListener('scroll', (args: any) => {
          if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
            ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0)`
          }
        })
      }
    }, 1500)
  }, [DBStore.services])

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
      setPoster(ContentStore.services.block.poster)
    }, 1000)
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

  useEffect(() => {
    if (window.innerWidth > 768) {
      let services = JSON.parse(JSON.stringify(DBStore.services))
      services = services.sort((a: Service, b: Service) =>
        a.title.localeCompare(b.title),
      )
      setDt(services)
    }
  }, [DBStore.services])

  if (!ContentStore.services.block) return <></>
  if (!DBStore.services) return <></>

  const linksL = GlobalState.links
  let servicesL = ''
  if (linksL) {
    servicesL = linksL.find((l: any) => l.id == 264).link
  }

  return (
    <section className="our-services">
      <VectorMain className="our-services__vector" />
      <div className="our-services__top left">
        <div className="our-services__top-img">
          <div>
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
                        src={ContentStore.services.block.videoSrc}
                      ></video>
                    }
                  />
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
              __html: ContentStore.services.block.title,
            }}
          ></div>
          <div
            className="our-services__text"
            dangerouslySetInnerHTML={{
              __html: ContentStore.services.block.text,
            }}
          ></div>
          <div
            className="about__video"
            onClick={() => {
              setVideo(ContentStore.services.block.videoSrc, poster)
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
      <div className="our-services__middle">
        <div style={{ overflow: 'hidden' }}>
          <div
            className="our-services__title"
            dangerouslySetInnerHTML={{
              __html: ContentStore.services.block.subtitle,
            }}
          ></div>
        </div>
        <Button
          text={
            <>
              {window.innerWidth > 768 ? <Setting /> : <MSetting />}
              {window.innerWidth > 768 && 'Filter'}
              {window.innerWidth > 768 && GlobalState.filterCount ? (
                <span>({GlobalState.filterCount})</span>
              ) : (
                <></>
              )}
            </>
          }
          click={changeTheraFilterState}
          classname="black-border p11p24 filter"
        />
      </div>
      <Letters
        active={letter}
        data={DBStore.services}
        change={(value) => {
          setLetter(value)
        }}
      />
      <div className="our-services__list">
        {dt?.map((s, i) => (
          <a
            className="our-services__item"
            key={i}
            href={`${servicesL}/${s.link}`}
          >
            <div className="our-services__item-content">
              <div className="our-services__item-img">
                <img src={s.img} alt={s.title} />
              </div>
              <div
                className={classNames('our-services__item-title')}
                dangerouslySetInnerHTML={{ __html: s.title }}
              ></div>
            </div>
            <Vector id={i} />
          </a>
        ))}
        <VectorSub className="our-services__list-vector" />
      </div>
    </section>
  )
})

export default OurServices
