import './index.scss'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import { ReactComponent as Vector } from '../../../../assets/Vector 7.svg'

const Servives = observer(({ dt }: { dt: any }) => {
  useEffect(() => {
    if (window.innerWidth > 480) {
      const container = document.querySelector('.services')
      const vect = document.querySelector(`.services__vector`)
      const smooth = document.querySelector('.smooth')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = vect!.getBoundingClientRect(),
        contRect = container!.getBoundingClientRect(),
        offset = contRect.top - bodyRect.top,
        offsetBottom = contRect.top + contRect.height / 3

      window.addEventListener('scroll', () => {
          if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0)`
          }
        })
    }
  }, [])

  return (
    <section className="services">
      <Vector className="services__vector" />
      <div className="services__container">
        <div
          style={{
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            className="services__title"
            dangerouslySetInnerHTML={{ __html: dt?.title }}
          ></div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div
            className="services__text"
            dangerouslySetInnerHTML={{ __html: dt?.text }}
          ></div>
        </div>
        <div className="services__list">
          {dt?.imgs?.map((i: any, id: number) => (
            <div className="services__item" key={id}>
              <img src={i.src} alt={i.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Servives
