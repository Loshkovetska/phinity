import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/Vector 3.svg'
import ContentStore from '../../../../stores/ContentStore'
const Offers = observer(() => {
  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const offers = smooth!.querySelector('.offers')
        const offersList = smooth!.querySelector('.offers__list')
        const title = smooth!.querySelector('.offers__title')
        const items = smooth!.querySelectorAll('.offers__item')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = offers!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top
        if (args.scroll.y > offset - 700) {
          offers?.classList.add('animated')
          title?.classList.add('animated')
        }

        if (args.scroll.y > offset - 500) {
          items.forEach((i, id) => {
            i.classList.add('animated')
            ;(i as HTMLDivElement).style.transitionDelay = `${id / 8}s`
          })
        }
      })
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (window.innerWidth <= 480) {
      const container = document.querySelector('.offers')
      const vect = document.querySelector('.offers__vector')
      const smooth = document.querySelector('.smooth')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = vect!.getBoundingClientRect(),
        contRect = container!.getBoundingClientRect(),
        offset = contRect.top - bodyRect.top,
        offsetBottom = contRect.bottom - contRect.height / 2

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

  if (!ContentStore.home.offers) return <></>
  return (
    <section className="offers">
      <div className="offers__container">
        <div className="offers__wrapper">
          <div
            className="offers__title"
            dangerouslySetInnerHTML={{ __html: ContentStore.home.offers.title }}
          ></div>
        </div>
        <div className="offers__wrapper list">
          <div className="offers__list">
            {ContentStore.home.offers.list?.map((o, i) => (
              <div className={`offers__item offers__item${i}`} key={i}>
                <div
                  className="offers__item-title"
                  dangerouslySetInnerHTML={{ __html: o.title }}
                ></div>
                <div
                  className="offers__item-text"
                  dangerouslySetInnerHTML={{ __html: o.text }}
                ></div>
              </div>
            ))}

            <Vector className="offers__vector animated fadeIn" />
          </div>
        </div>
      </div>
    </section>
  )
})

export default Offers
