import './index.scss'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import { ReactComponent as Vector } from '../../../../assets/Vector 7.svg'
import ContentStore from '../../../../stores/ContentStore'

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
            dangerouslySetInnerHTML={{ __html: dt.title }}
          ></div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div
            className="services__text"
            dangerouslySetInnerHTML={{ __html: dt.text }}
          ></div>
        </div>
        {window.innerWidth > 768 && (
          <>
            <div className="services__list">
              {dt.imgs.map((i: any, id: number) => (
                <div className="services__item" key={id}>
                  <img src={i} />
                </div>
              ))}
            </div>
          </>
        )}
        {window.innerWidth <= 768 && window.innerWidth > 365 && (
          <>
            <div className="services__list">
              <div className="services__item">
                <img src={dt.imgs[0]} />
              </div>
              <div className="services__item">
                <img src={dt.imgs[1]} />
              </div>
              <div className="services__item">
                <img src={dt.imgs[3]} />
              </div>
              <div className="services__item">
                <img src={dt.imgs[2]} />
              </div>
              <div className="services__item">
                <img src={dt.imgs[4]} />
              </div>
            </div>
          </>
        )}
        {window.innerWidth <= 365 && (
          <>
            <div className="services__list">
              <div className="services__item">
                <img src={dt.imgs[0]} />
              </div>
              <div className="services__item">
                <img src={dt.imgs[1]} />
              </div>

              <div className="services__item">
                <img src={dt.imgs[3]} />
              </div>
              <div className="services__item">
                <img src={dt.imgs[2]} />
              </div>
              <div className="services__item">
                <img src={dt.imgs[4]} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
})

export default Servives
