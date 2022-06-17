import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/choose.svg'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'

const ChooseUs = observer(() => {
  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const issues = smooth!.querySelector('.choose-us')
        const items = smooth!.querySelectorAll('.choose-us__item')
        const title = smooth!.querySelector('.choose-us__title')
        const text = smooth!.querySelector('.choose-us__text')
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = issues!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 500) {
          issues?.classList.add('animated')
          title?.classList.add('animated')
          text?.classList.add('animated')

          items.forEach((i, id) => {
            i?.classList.add('animated')
            ;(i as any).style.transitionDelay = `${id / 5 + 2}s`
          })
        }
      })
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (GlobalState.locoScroll && window.innerWidth <= 768) {
      const smooth = document.querySelector('.smooth')
      const cont = document.querySelector('.choose-us')
      const next = cont?.nextElementSibling
      const v2 = document.querySelector(`.choose-us__vector`)
      var bodyRect = smooth!.getBoundingClientRect(),
        nextRect = next!.getBoundingClientRect(),
        contRect = cont!.getBoundingClientRect()
      var offset = contRect.top - bodyRect.top,
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
  }, [])
  if (!ContentStore.about.chooseUs) return <></>
  return (
    <section className="choose-us">
      <Vector className="choose-us__vector" />
      <div className="choose-us__container">
        <div className="choose-us__top">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="choose-us__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.about.chooseUs.title,
              }}
            ></div>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <div
              className="choose-us__text"
              dangerouslySetInnerHTML={{
                __html: ContentStore.about.chooseUs.text,
              }}
            ></div>
          </div>
        </div>

        <div className="choose-us__list">
          {ContentStore.about.chooseUs?.list.map((l, id) => (
            <div className="choose-us__item" key={id}>
              <div className="choose-us__item-num">
                {id + 1}/{ContentStore.about.chooseUs?.list.length}
              </div>
              <div className="choose-us__item-text">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default ChooseUs
