import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import './index.scss'
import img from '../../../../assets/Group.svg'
import classNames from 'classnames'
import ContentStore from '../../../../stores/ContentStore'
const CanHelp = observer(() => {
  const changeLocate = (i: number) => {
    let smooth = document.querySelector('.smooth')
    const items = document.querySelectorAll('.can-help__locator')
    const blocks = document.querySelectorAll('.can-help__block-col')
    const block = document.querySelector('.can-help__row'),
      blockRect = block?.getBoundingClientRect()

    if (items) {
      items.forEach((i) => i.classList.remove('active'))
      items[i].classList.add('active')
    }
  }
  useEffect(() => {
    let smooth = document.querySelector('.smooth')
    if (!GlobalState.locoScroll || !smooth) return
    if (window.innerWidth > 1120) {
      const container = document.querySelector('.can-help')
      const block = document.querySelector('.can-help__row')
      const scroll = document.querySelector('.can-help__block'),
        wrapper = document.querySelector('.can-help__wrapper')

      const next = container!.nextElementSibling

      let bodyRect = smooth!.getBoundingClientRect(),
        elemRect = block!.getBoundingClientRect(),
        contRect = container?.getBoundingClientRect(),
        nextRect = next!.getBoundingClientRect(),
        scrollREct = scroll!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetEnd = nextRect.top
      const startPos = scroll!.getBoundingClientRect().top
      const cols = document.querySelectorAll('.can-help__block-col')
      GlobalState.locoScroll.on('scroll', (args: any) => {
        // if (args.scroll.y < offset) {
        //   ;(block as HTMLElement).style.transform = `translate3d(0,${0}px,0)`
        //   ;(scroll as HTMLElement).style.transform = `translate3d(0,${0}px,0)`
        // }
        if (
          args.scroll.y > offset &&
          args.scroll.y <=
            offset +
              (cols[0].getBoundingClientRect().height +
                cols[1].getBoundingClientRect().height +
                cols[2].getBoundingClientRect().height / 3) -
              140
        ) {
          // ;(block as HTMLElement).style.transform = `translate3d(0,${
          //   args.scroll.y - offset
          // }px,0)`
          // if (args.scroll.y > offset + 56) {
          //   ;(scroll as HTMLElement).style.transform = `translate3d(0,${
          //     (args.scroll.y - offset) * -1
          //   }px,0)`
          // }
          if (
            args.scroll.y >= offset &&
            args.scroll.y <
              offset + cols[0].getBoundingClientRect().height + 64 + 0
          ) {
            changeLocate(0)
          }

          if (
            args.scroll.y >=
              offset + cols[0].getBoundingClientRect().height - 64 - 0 &&
            args.scroll.y <
              offset +
                cols[1].getBoundingClientRect().height +
                cols[0].getBoundingClientRect().height
          ) {
            changeLocate(1)
          }
          if (
            args.scroll.y >=
              offset +
                cols[0].getBoundingClientRect().height +
                cols[1].getBoundingClientRect().height -
                140 &&
            args.scroll.y < offsetEnd - cols[2].getBoundingClientRect().height
          ) {
            changeLocate(2)
          }
        }
      })
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (GlobalState.locoScroll && window.innerWidth > 1120) {
      const container = document.querySelector('.can-help__row')
      const smooth = document.querySelector('.smooth')
      const vect = document.querySelector(`.can-help__neiro`)
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        vectRect = vect!.getBoundingClientRect(),
        offset = vectRect.top - bodyRect.top,
        offsetBottom = elemRect.bottom - vectRect!.height

      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          console.log(args.scroll.y - offset)
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0)`
        }
      })
    }
  }, [GlobalState.locoScroll])
  // useEffect(() => {
  //   if (window.innerWidth > 1120) {
  //     let smooth = document.querySelector('.smooth'),
  //       bodyRect = smooth!.getBoundingClientRect()
  //     const container = document.querySelector('.can-help')
  //     const block = document.querySelector('.can-help__row'),
  //       scroll = document.querySelector('.can-help__block'),
  //       col = document.querySelectorAll('.can-help__block-col')
  //     let elemRect = block!.getBoundingClientRect(),
  //       contRect = container?.getBoundingClientRect(),
  //       scrollRect = scroll?.getBoundingClientRect(),
  //       offset = elemRect!.top - bodyRect.top

  //     ;(container as any)!.style.paddingBottom = `${
  //       window.innerWidth > 1440
  //         ? offset -
  //           scrollRect!.height +
  //           col[2].getBoundingClientRect().height / 3 +
  //           140 +
  //           32
  //         : 1440
  //     }px`
  //   }
  // }, [])

  useEffect(() => {
    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const row = smooth!.querySelector('.can-help__row')
        const items = smooth!.querySelectorAll('.can-help .can-help__locator')
        const list = smooth!.querySelector('.can-help__block-col.show')
        const title = document.querySelector('.can-help__title')
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
          if (window.innerWidth > 1024) {
            list?.classList.add('animated')
            ;(list as any).style.transitionDelay = `${items.length / 6 + 2}s`
          } else {
            const items = smooth!.querySelectorAll('.can-help__block-col')
            items.forEach((i) => {
              elemRect = i!.getBoundingClientRect()
              offset = elemRect.top - bodyRect.top
              if (args.scroll.y > offset - 100) {
                i.classList.add('animated')
              }
            })
          }
        }
      })
  }, [GlobalState.locoScroll])

  return (
    <section className="can-help">
      <div className="can-help__row">
        <div className="can-help__wrapper">
          <div className="can-help__neiro">
            <img src={img} />
            {ContentStore.issue.help.list
              .map((l) => l.title)
              .map((t, i) => (
                <div
                  className={classNames(
                    'can-help__locator',
                    `loc${i + 1}`,
                    !i && `active`,
                  )}
                  key={i}
                  onClick={() => {
                    let block = document.querySelectorAll(
                      '.can-help__block-col',
                    )
                    if (block && GlobalState.locoScroll) {
                      GlobalState.locoScroll.scrollTo(block[i], -100)
                    }

                    if (window.innerWidth < 1120) {
                      changeLocate(i)
                    }
                  }}
                >
                  <div className="can-help__locator-point"></div>
                  {t}
                </div>
              ))}
          </div>
        </div>
        {/* <div className="can-help__neiro">
          <img src={img} />
          {lists
            .map((l) => l.title)
            .map((t, i) => (
              <div
                className={classNames(
                  'can-help__locator',
                  `loc${i + 1}`,
                  !i && `active`,
                )}
                key={i}
                onClick={() => {
                  let block = document.querySelectorAll('.can-help__block-col')
                  if (block && GlobalState.locoScroll) {
                    GlobalState.locoScroll.scrollTo(block[i])
                  }
                }}
              >
                <div className="can-help__locator-point"></div>
                {t}
              </div>
            ))}
        </div> */}
        <div className="can-help__block">
          {ContentStore.issue.help.list?.map((l, id) => (
            <div
              className={classNames('can-help__block-col', !id && 'show')}
              key={id}
            >
              <div className="can-help__block-title">{l.title}</div>
              <div className="can-help__list">
                {l.list.map((s, i) => (
                  <div className="can-help__item" key={i}>
                    <div className="can-help__item-num">0{i + 1}</div>
                    <div className="can-help__item-text">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
export default CanHelp
