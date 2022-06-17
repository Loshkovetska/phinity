import { observer } from 'mobx-react'
import { Fragment, useEffect, useState } from 'react'
import DBStore from '../../../../stores/DBStore'
import GlobalState from '../../../../stores/GlobalState'
import './index.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import classNames from 'classnames'
import ContentStore from '../../../../stores/ContentStore'

const AboutSphere = observer(() => {
  const [top, setTop] = useState(0)

  useEffect(() => {
    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const row = smooth!.querySelector('.about-service__block-row')
        const items = smooth!.querySelectorAll(
          '.about-service__sphere .center, .about-service__sphere .sphere',
        )
        const list = smooth!.querySelector('.about-service__scroll')
        const title = document.querySelector(
          '.about-service__block .about-service__title',
        )
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = row!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - (window.innerWidth > 768 ? 700 : 500)) {
          row?.classList.add('animated')
          title?.classList.add('animated')
        }
        if (args.scroll.y > offset - 300) {
          items.forEach((i, id) => {
            i.classList.add('animated')
            ;(i as any).style.transitionDelay = `${id / 8}s`
          })
          if (window.innerWidth > 1120) {
            list?.classList.add('animated')
            ;(list as any).style.transitionDelay = `0s`
          } else {
            list?.classList.add('animated')

            const items = smooth!.querySelectorAll('.about-service__block-col')
            items.forEach((i) => {
              elemRect = i!.getBoundingClientRect()
              offset = elemRect.top - bodyRect.top
              if (args.scroll.y > offset - 700) {
                i.classList.add('animated')
              }
            })
          }
        }
      })
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (GlobalState.locoScroll && window.innerWidth > 1120) {
      const container = document.querySelector('.about-service__block-row')
      const smooth = document.querySelector('.smooth')
      const vect = document.querySelector(`.about-service__sphere`)
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        vectRect = vect!.getBoundingClientRect(),
        offset = vectRect.top - bodyRect.top,
        offsetBottom = elemRect.bottom - vectRect!.height

      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset + 56
          }px, 0)`
        }
      })
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const sphere = document.querySelector('.about-service__sphere')
    const scroll = document.querySelector('.about-service__scroll-area')
    const row = document.querySelector('.about-service__block-row'),
      block = document.querySelector('.about-service__block'),
      next = block?.nextElementSibling

    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = row!.getBoundingClientRect(),
      nextRect = next!.getBoundingClientRect(),
      scrollREct = scroll!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      blockRect = block!.getBoundingClientRect(),
      offsetBottom = nextRect.top
    const startPos = scroll!.getBoundingClientRect().top - elemRect.top

    const cols = document.querySelectorAll('.about-service__block-col')

    if (GlobalState.locoScroll && window.innerWidth > 1120) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (
          args.scroll.y > offset - 20 &&
          args.scroll.y <
            offset +
              (cols[0].getBoundingClientRect().height +
                cols[1].getBoundingClientRect().height +
                cols[2].getBoundingClientRect().height / 3)
        ) {
          if (
            args.scroll.y >= offset &&
            args.scroll.y < offset + cols[0].getBoundingClientRect().height
          ) {
            ;(sphere as any)!.className = 'about-service__sphere'
            sphere?.classList.add('initial')
            const lines = document.querySelectorAll(
              '.about-service__sphere .line',
            )
            lines.forEach((l) => l.classList.remove('hidden'))
          }
          if (
            args.scroll.y > offset + cols[0].getBoundingClientRect().height &&
            args.scroll.y <=
              offset +
                cols[1].getBoundingClientRect().height +
                cols[0].getBoundingClientRect().height
          ) {
            ;(sphere as any)!.className = 'about-service__sphere'

            sphere?.classList.add('middle')
            const lines = document.querySelectorAll(
              '.about-service__sphere .line',
            )
            setTimeout(
              () => lines.forEach((l) => l.classList.add('hidden')),
              1000,
            )
          }
          if (
            args.scroll.y >
              offset +
                cols[0].getBoundingClientRect().height +
                cols[1].getBoundingClientRect().height -
                140 &&
            args.scroll.y <=
              offsetBottom - cols[2].getBoundingClientRect().height
          ) {
            ;(sphere as any)!.className = 'about-service__sphere'
            sphere?.classList.add('finish')
          }
        }
      })
    }
  }, [GlobalState.locoScroll, top])

  // useEffect(() => {
  //   if (window.innerWidth > 1120) {
  //     setTimeout(() => {
  //       let smooth = document.querySelector('.smooth'),
  //         bodyRect = smooth!.getBoundingClientRect()
  //       const container = document.querySelector('.about-service__block')
  //       const block = document.querySelector('.about-service__block-row'),
  //         col = document.querySelectorAll('.about-service__block-col'),
  //         scrollArea = document.querySelector('.about-service__scroll-area')
  //       let elemRect = col[0]!.getBoundingClientRect(),
  //         contRect = block?.getBoundingClientRect(),
  //         scrollRect = scrollArea?.getBoundingClientRect(),
  //         offset = contRect!.top - bodyRect.top

  //       console.log(
  //         offset,
  //         scrollRect?.height,
  //         col[2].getBoundingClientRect().height / 3,
  //       )
  //       ;(container as any)!.style.paddingBottom = `${
  //         window.innerWidth > 1440
  //           ? offset -
  //             scrollRect!.height +
  //             col[0].getBoundingClientRect().height +
  //             col[2].getBoundingClientRect().height / 3 +
  //             140 +
  //             32
  //           : 1440
  //       }px`
  //     }, 1500)
  //   }
  // }, [])

  // useEffect(() => {
  //   const smooth = document.querySelector('.smooth')
  //   const sphere = document.querySelector('.about-service__sphere')
  //   const scroll = document.querySelector('.about-service__scroll-area')
  //   const row = document.querySelector('.about-service__block-row'),
  //     block = document.querySelector('.about-service__block'),
  //     next = block?.nextElementSibling

  //   var bodyRect = smooth!.getBoundingClientRect(),
  //     elemRect = row!.getBoundingClientRect(),
  //     nextRect = next!.getBoundingClientRect(),
  //     scrollREct = scroll!.getBoundingClientRect(),
  //     offset = elemRect.top - bodyRect.top,
  //     blockRect = block!.getBoundingClientRect(),
  //     offsetBottom = nextRect.top
  //   const startPos = scroll!.getBoundingClientRect().top - elemRect.top

  //   const cols = document.querySelectorAll('.about-service__block-col')

  //   if (GlobalState.locoScroll && window.innerWidth > 1120) {
  //     GlobalState.locoScroll.on('scroll', (args: any) => {
  //       if (args.scroll.y < offset) {
  //         ;(row as HTMLElement).style.transform = `translate3d(0,${0}px,0)`
  //         ;(scroll as HTMLElement).style.transform = `translate3d(0,${0}px,0)`
  //       }
  //       if (
  //         args.scroll.y > offset - 20 &&
  //         args.scroll.y <
  //           offset +
  //             (cols[0].getBoundingClientRect().height +
  //               cols[1].getBoundingClientRect().height +
  //               cols[2].getBoundingClientRect().height / 3)
  //       ) {
  //         ;(row as HTMLElement).style.transform = `translate3d(0,${
  //           args.scroll.y - offset
  //         }px,0)`
  //         ;(scroll as HTMLElement).style.transform = `translate3d(0,${
  //           (args.scroll.y - offset + 140) * -1
  //         }px,0)`

  //         if (
  //           args.scroll.y >= offset &&
  //           args.scroll.y < offset + cols[0].getBoundingClientRect().height
  //         ) {
  //           ;(sphere as any)!.className = 'about-service__sphere'
  //           sphere?.classList.add('initial')
  //           const lines = document.querySelectorAll(
  //             '.about-service__sphere .line',
  //           )
  //           lines.forEach((l) => l.classList.remove('hidden'))
  //         }
  //         if (
  //           args.scroll.y > offset + cols[0].getBoundingClientRect().height &&
  //           args.scroll.y <=
  //             offset +
  //               cols[1].getBoundingClientRect().height +
  //               cols[0].getBoundingClientRect().height
  //         ) {
  //           ;(sphere as any)!.className = 'about-service__sphere'

  //           sphere?.classList.add('middle')
  //           const lines = document.querySelectorAll(
  //             '.about-service__sphere .line',
  //           )
  //           setTimeout(
  //             () => lines.forEach((l) => l.classList.add('hidden')),
  //             1000,
  //           )
  //         }
  //         if (
  //           args.scroll.y >
  //             offset +
  //               cols[0].getBoundingClientRect().height +
  //               cols[1].getBoundingClientRect().height -
  //               140 &&
  //           args.scroll.y <=
  //             offsetBottom - cols[2].getBoundingClientRect().height
  //         ) {
  //           ;(sphere as any)!.className = 'about-service__sphere'
  //           sphere?.classList.add('finish')
  //         }
  //       }
  //     })
  //   }
  // }, [GlobalState.locoScroll, top])


  if(!ContentStore.service.about)return <></>
  return (
    <div className="about-service__block">
      {window.innerWidth > 768 && (
        <div style={{ overflow: 'hidden' }}>
          <div className="about-service__title">
            About {DBStore.service?.title}
          </div>
        </div>
      )}
      <div className="about-service__block-row">
        <>
          <div className="about-service__sphere initial">
            <div className="w32 sky center"></div>
            <div className="w16 blue sphere"></div>
            <div className="line"></div>
            <div className="w27 blue sphere"></div>
            <div className="line"></div>
            <div className="w34 sand sphere"></div>
            <div className="line"></div>
            <div className="w34 dolphin sphere"></div>
            <div className="line"></div>
            <div className="w57 sky sphere"></div>
            <div className="line"></div>
            <div className="w59 sand sphere"></div>
            <div className="line"></div>
            <div className="w86 blue sphere"></div>
            <div className="line"></div>
            <div className="w105 dolphin sphere"></div>
            <div className="line"></div>
            <div className="w191 sky sphere"></div>
            <div className="line"></div>
            <div className="w191 blue sphere"></div>
            <div className="line"></div>

            <div className="w253 sky sphere"></div>
            <div className="line"></div>
          </div>
          {window.innerWidth <= 768 && (
            <div style={{ overflow: 'hidden' }}>
              <div className="about-service__title">
                About {DBStore.service?.title}
              </div>
            </div>
          )}

          <div className="about-service__scroll">
            <div className="about-service__scroll-area">
              {ContentStore.service.about.list?.map((l, id) => (
                <div
                  className={classNames('about-service__block-col')}
                  key={id}
                >
                  <div className="about-service__block-title">{l.title}</div>
                  <div className="about-service__list">
                    {l.list.map((s, i) => (
                      <div className="about-service__item" key={i}>
                        <div className="about-service__item-num">0{i + 1}</div>
                        <div className="about-service__item-text">{s}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  )
})

export default AboutSphere
