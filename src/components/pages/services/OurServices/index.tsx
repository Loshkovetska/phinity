import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import { ReactComponent as Triangle } from '../../../../assets/triangle.svg'
import { ReactComponent as Vectors } from '../../../../assets/vectors.svg'
import { ReactComponent as Setting } from '../../../../assets/filter.svg'
import { ReactComponent as MSetting } from '../../../../assets/mob-sett.svg'

import Button from '../../../common/Button'
import { Link } from 'react-router-dom'
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
import GlobalState from '../../../../stores/GlobalState'

import { ReactComponent as VectorMain } from '../../../../assets/Vector\ 3.svg'
import { ReactComponent as VectorSub } from '../../../../assets/Vector\ 4.svg'
import DBStore from '../../../../stores/DBStore'
import { isTouch } from '../../../../mocks/mobile'
import ContentStore from '../../../../stores/ContentStore'
import { Service } from '../../../../api/mocks/services'

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
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'Y',
    'Z',
  ]

  useEffect(() => {
    if (window.innerWidth <= 768 && DBStore.services) {
      setDt(
        DBStore.services?.filter(
          (s) => s.title[0].toLowerCase() == letter.toLocaleLowerCase(),
        ),
      )
    }
  }, [letter, DBStore.services])

  useEffect(() => {
    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
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
        if (args.scroll.y > offset - 500) {
          about?.classList.add('animated')
        }

        if (args.scroll.y > offset - 300) {
          top?.classList.add('animated')
        }

        elemRect = top!.getBoundingClientRect()
        offset = elemRect.bottom

        if (args.scroll.y > offset) {
          title?.classList.add('animated')
          button?.classList.add('animated')
          if (window.innerWidth > 768) {
            items.forEach((i, id) => {
              elemRect = i!.getBoundingClientRect()
              offset = elemRect.top - bodyRect.top
              if (args.scroll.y > offset - 600) {
                ;(i as any).classList.add('animated')
              }
            })
          }

          if (window.innerWidth <= 768) {
            list?.classList.add('animated')
          }
        }
        elemRect = lettersBlock!.getBoundingClientRect()
        offset = elemRect.top - bodyRect.top
        if (args.scroll.y > offset - 300) {
          letters.forEach((i, id) => {
            if (!id) letters[id].classList.add('active')
            ;(i as any).classList.add('animated')
            ;(i as HTMLElement).style.transitionDelay = `${id / 8}s`
          })
        }
      })
  }, [GlobalState.locoScroll])

  useEffect(() => {
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

      GlobalState.locoScroll &&
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
    setTimeout(() => {
      if (GlobalState.locoScroll) {
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

        GlobalState.locoScroll &&
          GlobalState.locoScroll.on('scroll', (args: any) => {
            if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
              ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
                args.scroll.y - offset
              }px, 0)`
            }
          })
      }
    }, 1000)
  }, [])

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
      setPoster(ContentStore.services.block.poster)
    }, 1000)
  }, [])

  useEffect(() => {
    setDt(DBStore.services)
  }, [DBStore.services])

  if (!ContentStore.services.block) return <></>
  if (!DBStore.services) return <></>

  return (
    <section className="our-services">
      <VectorMain className="our-services__vector" />
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
              {poster && (
                <video
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
                  src={ContentStore.services.block.videoSrc}
                ></video>
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
        {/* <div className="our-services__img-block">
          <Vectors />
          <div className="our-services__mask">
            <img className="our-service__img" src={img} />
          </div>
        </div> */}
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
          <div className="about__video" onClick={() => setShow(!showVideo)}>
            <div className="about__video-play">
              <Triangle />
            </div>
            <span>Watch video</span>
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
              {-1 > 0 && <span>(2)</span>}
            </>
          }
          click={() => {}}
          classname="black-border p11p24 filter"
        />
      </div>
      <div className="our-services__letters">
        {letters.map((l, i) => (
          <div
            className={classNames(
              'our-services__letter',
              l == 'A' && 'a',
              l == 'H' && 'h',
            )}
            key={i}
            onClick={() => {
              setLetter(l)
              const letters = document.querySelectorAll('.our-services__letter')
              letters.forEach((l) => l.classList.remove('active'))
              letters[i].classList.add('active')
            }}
          >
            {l}
          </div>
        ))}
      </div>
      <div className="our-services__list">
        {dt?.map((s, i) => (
          <Link className="our-services__item" key={i} to={`/service/${s.id}`}>
            <div className="our-services__item-content">
              <div className="our-services__item-img">
                <img src={s.img} />
              </div>
              <div
                className={classNames('our-services__item-title')}
                dangerouslySetInnerHTML={{ __html: s.title }}
              ></div>
            </div>
            <Vector id={i} />
          </Link>
        ))}
        <VectorSub className="our-services__list-vector" />
      </div>
    </section>
  )
})

export default OurServices
