import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/Vector 3.svg'
import { useEffect } from 'react'
import classNames from 'classnames'
import ContentStore from '../../../../stores/ContentStore'
import { ReactComponent as Vectors } from '../../../../assets/vectors.svg'

const AboutService = observer(
  ({ classname = '', dt }: { classname?: string; dt: any }) => {
    useEffect(() => {
      if (window.innerWidth <= 480) {
        const container = document.querySelector('.about-service')
        const smooth = document.querySelector('.smooth')
        const vect = document.querySelector(`.about-service__vector`)
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = container!.getBoundingClientRect(),
          vectRect = vect?.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top,
          offsetBottom = elemRect.bottom - vectRect!.height

        window.addEventListener('scroll', () => {
          if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
            requestAnimationFrame(() => {
              ;(vect as HTMLElement).style.transform = `translate3d(0, ${
                window.scrollY - offset
              }px, 0)`
            })
          }
        })
      }
    }, [])

    if (!ContentStore.service.about) return <></>

    return (
      <section className={classNames('about-service', classname)}>
        <Vector className="about-service__vector" />
        <div className="about-service__container">
          <div className="about-service__row">
            <div className="about-service__col">
              <div
                className="about-service__title"
                dangerouslySetInnerHTML={{
                  __html: dt.title,
                }}
              ></div>
              <div
                className="about-service__text"
                dangerouslySetInnerHTML={{
                  __html: dt.text,
                }}
              ></div>
            </div>
            <div className="about-service__img">
              <Vectors />
              <div className="about-service__mask">
                <img src={dt.img} alt={dt.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  },
)

export default AboutService
