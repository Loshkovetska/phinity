import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import { ReactComponent as Triangle } from '../../../../assets/triangle.svg'

import PageLinks from '../../../common/PageLinks'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import DBStore from '../../../../stores/DBStore'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import ContentStore from '../../../../stores/ContentStore'

const VideosContent = observer(() => {
  const navigate = useNavigate()
  useEffect(() => {
    document.querySelector('.videos-content')?.classList.add('animated')

    setTimeout(() => {
      document
        .querySelector('.videos-content__title')
        ?.classList.add('animated')
      document.querySelector('.videos-content__text')?.classList.add('animated')
    }, 500)

    setTimeout(() => {
      document.querySelector('.videos-content__anim')?.classList.add('animated')
      const items = document.querySelectorAll('.videos-content__item')
      items.forEach((i, id) => {
        i?.classList.add('animated')
        ;(document.querySelector(
          '.videos-content__item',
        ) as HTMLElement).style.transitionDelay = `${id / 6}s`
      })
    }, 2000)
  }, [])

  useEffect(() => {
    const container = document.querySelector('.videos-content')
    const vect = document.querySelector('.videos-content__vector')
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

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const container = document.querySelector('.videos-content__anim')
    const vect = document.querySelector('.videos-content__img')
    const images = document.querySelectorAll('.videos-content__img img')
    const scrollArea = document.querySelector('.videos-content__scroll')
    const smooth = document.querySelector('.smooth')

    console.log(images)
    if (!smooth || !vect || !scrollArea || !images) return

    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      scrollRect = scrollArea!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom = elemRect.bottom

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y < offset) {
          ;(vect as HTMLElement).style.top = '0px'
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${0}px, 0)`
        }
        if (
          args.scroll.y >= offset &&
          args.scroll.y <=
            offsetBottom - images[0].getBoundingClientRect().height
        ) {
          ;(vect as HTMLElement).style.top = '32px'
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0)`

          if (args.scroll.y < offset + scrollRect.height / 4) {
            images.forEach((img, i) => {
              img.classList.remove('active')
            })
            images[0].classList.add('active')
          }

          if (
            args.scroll.y >= offset + scrollRect.height / 4 &&
            args.scroll.y < offset + scrollRect.height / 3
          ) {
            images.forEach((img, i) => {
              img.classList.remove('active')
            })
            console.log(images)
            images[1].classList.add('active')
          }
          if (
            args.scroll.y >= offset + scrollRect.height / 3 &&
            args.scroll.y < offset + scrollRect.height
          ) {
            images.forEach((img, i) => {
              img.classList.remove('active')
            })
            images[2].classList.add('active')
          }
        }
      })
  }, [GlobalState.locoScroll])

  if (!ContentStore.videos) return <></>
  return (
    <section className="videos-content">
      <Vector className="videos-content__vector" />
      <PageLinks
        links={[
          { title: ContentStore.videos.mainPageTitle, link: '/' },
          { title: ContentStore.videos.pageTitle, link: '/video' },
        ]}
      />
      <div className="videos-content__container">
        <div style={{ overflow: 'hidden' }}>
          <div
            className="videos-content__title"
            dangerouslySetInnerHTML={{
              __html: ContentStore.videos.content.title,
            }}
          ></div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div
            className="videos-content__text"
            dangerouslySetInnerHTML={{
              __html: ContentStore.videos.content.text,
            }}
          ></div>
        </div>
        {window.innerWidth <= 768 ? (
          <div className="videos-content__list">
            {DBStore.videos?.slice(0, 3)?.map((v, i) => (
              <div className="videos-content__item" key={i}>
                <div className="videos-content__poster">
                  <img src={v.poster} />
                </div>
                <div className="videos-content__col">
                  <div className="videos-content__col-title">{v.title}</div>
                  <div className="videos-content__col-text">{v.text}</div>
                  <div
                    className="about__video"
                    onClick={() => navigate(`/video/${v.id}`)}
                  >
                    <div className="about__video-play">
                      <Triangle />
                    </div>
                    <span>Watch video</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <section className="videos-content__anim">
            <div className="videos-content__img">
              {DBStore.videos?.slice(0, 3).map((vi, id) => (
                <img
                  src={vi.poster}
                  key={id}
                  className={classNames(!id && 'active')}
                />
              ))}
            </div>
            <div className="videos-content__scroll">
              {DBStore.videos?.slice(0, 3).map((v, i) => (
                <div className="videos-content__col" key={i}>
                  <div className="videos-content__col-title">{v.title}</div>
                  <div className="videos-content__col-text">{v.text}</div>
                  <div
                    className="about__video"
                    onClick={() => navigate(`/video/${v.id}`)}
                  >
                    <div className="about__video-play">
                      <Triangle />
                    </div>
                    <span>Watch video</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  )
})

export default VideosContent
