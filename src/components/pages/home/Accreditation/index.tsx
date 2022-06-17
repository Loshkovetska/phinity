import './index.scss'

import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import { ReactComponent as VectorDesk } from '../../../../assets/Vector 1.svg'
import { ReactComponent as VectorMob } from '../../../../assets/Vector 5.svg'
const Accreditation = observer(({ accreditation }: { accreditation: any }) => {
  useEffect(() => {
    const container = document.querySelector('.accreditation')
    const vect = document.querySelector(
      `.accreditation__vector.${window.innerWidth > 480 ? 'desk' : 'mob'}`,
    )
    const smooth = document.querySelector('.smooth')
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = vect!.getBoundingClientRect(),
      contRect = container!.getBoundingClientRect(),
      offset = contRect.top - bodyRect.top,
      offsetBottom = contRect.top + contRect.height / 3

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0)`
        }
      })
  }, [GlobalState.locoScroll])

  return (
    <section className="accreditation">
      <VectorDesk className="accreditation__vector desk" />
      <VectorMob className="accreditation__vector mob" />
      <div className="accreditation__container">
        <div className="accreditation__top">
          <div
            style={{
              overflow: 'hidden',
            }}
          >
            <div
              className="accreditation__title"
              dangerouslySetInnerHTML={{ __html: accreditation.title }}
            ></div>
          </div>
          {window.innerWidth > 768 ? (
            <div
              style={{
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                className="accreditation__text"
                dangerouslySetInnerHTML={{ __html: accreditation.text }}
              ></div>
            </div>
          ) : (
            <div
              style={{
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                className="accreditation__text"
                dangerouslySetInnerHTML={{ __html: accreditation.text }}
              ></div>
            </div>
          )}
        </div>
        <div className="accreditation__list">
          {accreditation.imgs.map((i: any, id: number) => (
            <div className="accreditation__item" key={id}>
              <img src={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Accreditation
