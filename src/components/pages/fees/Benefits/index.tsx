import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/Vector 9.svg'
import ContentStore from '../../../../stores/ContentStore'
const Benefits = observer(() => {
  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const about = smooth!.querySelector('.benefits')
    const title = smooth!.querySelector('.benefits__title')
    const text = smooth!.querySelector('.benefits__text')

    const items = smooth!.querySelectorAll('.benefits__item')
    const bodyTop = smooth!.getBoundingClientRect().top,
      elementTop = about!.getBoundingClientRect().top,
      offset = elementTop - bodyTop


      window.addEventListener('scroll', () => {
        if (window.scrollY > offset - 500) {
          about?.classList.add('animated')
        }

        if (window.scrollY > offset - 200) {
          title?.classList.add('animated')
          text?.classList.add('animated')
          setTimeout(() => {
            items.forEach((i) => i?.classList.add('animated'))
          }, 2000)
        }
      })
    
  }, [ContentStore.fees.benefits])

  useEffect(() => {
    const container = document.querySelector('.benefits')
    const vect = document.querySelector(`.benefits__vector`)
    const smooth = document.querySelector('.smooth')
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = vect!.getBoundingClientRect(),
      contRect = container!.getBoundingClientRect(),
      offset = contRect.top - bodyRect.top,
      offsetBottom = contRect.bottom - contRect.height / 2

    window.addEventListener('scroll', () => {
        if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
          requestAnimationFrame(() => {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0) rotateX(180deg) rotateY(${
              window.innerWidth > 768 ? 180 : 0
            }deg)`
          })
        }
      })
  }, [])

  if (!ContentStore.fees.benefits) return <></>
  return (
    <section className="benefits">
      <Vector className="benefits__vector" />
      <div className="benefits__container">
        <div className="benefits__row center">
          {ContentStore.fees.benefits.cols.map((li, i) => (
            <div className="benefits__col" key={i}>
              <div style={{ overflow: 'hidden' }}>
                <div className="benefits__row-title">{li.title}</div>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div
                  className="benefits__row-text"
                  dangerouslySetInnerHTML={{ __html: li.text }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="benefits__row">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="benefits__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.fees.benefits.title,
              }}
            ></div>
          </div>
          <div className="benefits__list">
            {ContentStore.fees.benefits.list?.map((li, i) => (
              <div className="benefits__item" key={i}>
                <div className="benefits__item-num">
                  {i + 1}/{ContentStore.fees.benefits.list.length}
                </div>
                <div
                  className="benefits__item-text"
                  dangerouslySetInnerHTML={{ __html: li }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default Benefits
