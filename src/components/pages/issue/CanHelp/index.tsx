import { observer } from 'mobx-react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
      if (items[i].classList.contains('active')) {
        return
      }

      items.forEach((i) => i.classList.remove('active'))

      if (!items[i]) return
      items[i].classList.add('active')
    }
  }

  const getLength = (parts: Array<number>, index: number) => {
    if (!index) {
      return parts[index]
    }
    let gen = 0
    for (let i = 0; i <= index; i++) {
      gen += parts[i]
    }
    return gen
  }

  const getPrevLength = (parts: Array<number>, index: number) => {
    if (!index) {
      return parts[index]
    }

    let gen = 0

    for (let i = 0; i < index; i++) {
      gen += parts[i]
    }

    return gen
  }
  const [heightBlock, setHeightBlock] = useState(0)
  const [bottomBlock, setBottomBlock] = useState(0)

  const ref = useRef<any>(null)

  useLayoutEffect(() => {
    if (!ref.current) return
    const observer = new ResizeObserver((entries: any) => {
      entries.forEach((el: any) => {
        setHeightBlock(el.contentBoxSize[0].blockSize)
        const tar = el.target
        setBottomBlock(tar.getBoundingClientRect().bottom)
      })
    })
    observer.observe(ref.current)
  }, [])

  useEffect(() => {
    let smooth = document.querySelector('.smooth')
    if (!smooth) return
    if (window.innerWidth > 1120) {
      const container = document.querySelector('.can-help')
      const block = document.querySelector('.can-help__row')
      const scroll = document.querySelector('.can-help__block'),
        wrapper = document.querySelector('.can-help__wrapper')
      const cols = document.querySelectorAll('.can-help__block-col')
      if (!cols) return

      const next = container!.nextElementSibling
      const vect = document.querySelector(`.can-help__neiro`),
        vectRect = vect!.getBoundingClientRect()

      if (!cols.length) return
      let bodyRect = smooth!.getBoundingClientRect(),
        elemRect = block!.getBoundingClientRect(),
        contRect = container?.getBoundingClientRect(),
        nextRect = next!.getBoundingClientRect(),
        scrollREct = scroll!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetEnd =
          offset +
          heightBlock -
          cols[cols.length - 1].getBoundingClientRect().height

      const startPos = scroll!.getBoundingClientRect().top
      const parts: Array<number> = []
      cols.forEach((element: Element, i: number) => {
        if (!i) parts.push(element.getBoundingClientRect().height)
        else parts.push(element.getBoundingClientRect().height + 48)
      })


      window.addEventListener('scroll', () => {
        if (window.scrollY < offset) {
          changeLocate(0)
        }
        if (
          window.scrollY >
            offset - (window.innerHeight - vectRect.height) / 2 &&
          window.scrollY <= offsetEnd
        ) {
          parts?.forEach((p, i) => {
            if (!i) {
              if (
                window.scrollY >=
                  offset - (window.innerHeight - vectRect.height) / 2 &&
                window.scrollY < offset + p / 2
              ) {
                changeLocate(i)
                return
              }
            } else {
              if (
                window.scrollY >= offset + getPrevLength(parts, i) - 200 &&
                window.scrollY <= offset + getLength(parts, i)
              ) {
                changeLocate(i)
              }
            }
          })
        }
      })
    }
  }, [heightBlock])

  useEffect(() => {
    if (window.innerWidth > 1120) {
      const smooth = document.querySelector('.smooth')
      const vect = document.querySelector(`.can-help__neiro`)
      var bodyRect = smooth!.getBoundingClientRect(),
        vectRect = vect!.getBoundingClientRect(),
        offset = vectRect.top - bodyRect.top,
        offsetBottom = bottomBlock - vectRect!.height

      let value =
        window.innerWidth > 1440
          ? ((window.innerHeight - vectRect.height) / 2) * -1
          : (window.innerHeight - vectRect.height) / 2 - 100

      window.addEventListener('scroll', () => {
        if (
          window.scrollY <
          offset - (window.innerHeight - vectRect.height) / 2
        ) {
          ;(vect as HTMLElement).style.top = `${0}px`
          // ;(vect as HTMLElement).style.transform = `translate3d(0, ${0}px, 0)`
        }
        if (
          window.scrollY >=
            offset - (window.innerHeight - vectRect.height) / 2 &&
          window.scrollY <= offsetBottom + value
        ) {
          ;(vect as HTMLElement).style.top = `${
            (window.innerHeight - vectRect.height) / 2
          }px`
          // ;(vect as HTMLElement).style.transform = `translate3d(0, ${
          //   window.scrollY - offset
          // }px, 0)`
        }
      })
    }
  }, [bottomBlock])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const smooth = document.querySelector('.smooth')
      const row = smooth!.querySelector('.can-help__row')
      const items = smooth!.querySelectorAll('.can-help .can-help__locator')
      const list = smooth!.querySelector('.can-help__block-col.show')
      const title = document.querySelector('.can-help__title')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = row!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (window.scrollY > offset - (window.innerWidth > 768 ? 1000 : 800)) {
        row?.classList.add('animated')
        title?.classList.add('animated')
      }
      if (window.scrollY > offset - 800) {
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
            if (window.scrollY > offset - 500) {
              i.classList.add('animated')
            }
          })
        }
      }
    })
  }, [])

  if (!ContentStore.issue.help) return <></>

  return (
    <section className="can-help">
      <div className="can-help__row" ref={ref}>
        <div className="can-help__wrapper">
          <div className="can-help__neiro">
            <img src={img} alt={ContentStore.issue.intro.pageTitle} />
            {ContentStore.issue.help.list
              .map((l: any) => l.title)
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
                    if (block) {
                      const smooth = document.querySelector('.smooth')
                      if (!smooth) return
                      const rect = smooth.getBoundingClientRect().top
                      window.scrollTo({
                        top: block[i].getBoundingClientRect().top - rect - 100,
                        behavior: 'smooth',
                      })
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
        <div className="can-help__block">
          {ContentStore.issue.help.list?.map((l: any, id) => (
            <div
              className={classNames('can-help__block-col', !id && 'show')}
              key={id}
            >
              <div className="can-help__block-title">{l.title}</div>
              <div className="can-help__list">
                {l.list.map((s: any, i: number) => (
                  <div className="can-help__item" key={i}>
                    {/* <div className="can-help__item-num">0{i + 1}</div> */}
                    <div
                      className="can-help__item-text"
                      dangerouslySetInnerHTML={{ __html: s }}
                    ></div>
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
