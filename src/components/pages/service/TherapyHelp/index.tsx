import { observer } from 'mobx-react'
import { ReactComponent as Vector } from '../../../../assets/Vector 1.svg'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as VectorScroll } from '../../../../assets/Vector 5.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useEffect } from 'react'
import ContentStore from '../../../../stores/ContentStore'
const TherapyHelp = observer(({ dt }: { dt: any }) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const smooth = document.querySelector('.smooth')

      if (!smooth) return;
      const about = smooth!.querySelector('.therapy-help')
      const btn = smooth!.querySelector('.therapy-help .button')
      const title = smooth!.querySelector('.therapy-help__title')
      const text = smooth!.querySelector(
        '.therapy-help__col .therapy-help__text',
      )
      const items = smooth!.querySelectorAll('.therapy-help__item')

      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = about!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      let start = window.innerWidth > 768 ? 1000 : 800
      let nextStart = window.innerWidth > 768 ? 800 : 600
      if (window.scrollY > offset - start) {
        about?.classList.add('animated')
        title?.classList.add('animated')
        text?.classList.add('animated')
        btn?.classList.add('animated')
      }
      if (window.scrollY > offset - nextStart) {
        items.forEach((i, id) => {
          i?.classList.add('animated')
          ;(i as HTMLElement).style.transitionDelay = `${id / 8 + 0.5}s`
        })
      }
    })
  }, [])
  useEffect(() => {
    setTimeout(() => {
      const container = document.querySelector('.therapy-help')
      const vect = document.querySelector('.therapy-help__vector')
      const smooth = document.querySelector('.smooth');
      if (!smooth) return;
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetBottom =
          elemRect.bottom - vect!.getBoundingClientRect().height / 2

      window.addEventListener('scroll', () => {
        if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
          requestAnimationFrame(() => {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0)`
          })
        }
      })
    }, 1000)
  }, [])

  return (
    <section className="therapy-help">
      {window.innerWidth > 768 && <Vector className="therapy-help__vector" />}
      {window.innerWidth <= 768 && (
        <VectorScroll className="therapy-help__vector" />
      )}

      <div className="therapy-help__container">
        <div className="therapy-help__col">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="therapy-help__title"
              dangerouslySetInnerHTML={{ __html: dt.title }}
            ></div>
          </div>
          <div className="therapy-help__subcol">
            <div style={{ overflow: 'hidden' }}>
              <div
                className="therapy-help__text"
                dangerouslySetInnerHTML={{ __html: dt.text }}
              ></div>
            </div>
            {window.innerWidth > 1120 && (
              <a
                className="button blue p18p40 "
                href={ContentStore.home.intro.buttonLink}
                target={'_blank'}
              >
                <div className="button__text">{dt.buttonTitle}</div>
              </a>
            )}
          </div>
        </div>
        <div className="therapy-help__list">
          {dt.items.map((i: any, id: number) => (
            <div className="therapy-help__item" key={id}>
              <div className="therapy-help__item-title">{i.title}</div>
              <img
                className="therapy-help__item-img"
                src={i.icon}
                alt={i.title}
              />
              <div
                className="therapy-help__text"
                dangerouslySetInnerHTML={{ __html: i.text }}
              ></div>
            </div>
          ))}
        </div>
        {window.innerWidth <= 1120 && (
          <a
            className="button blue p18p40 "
            href={ContentStore.home.intro.buttonLink}
            target={'_blank'}
          >
            <div className="button__text">{dt.buttonTitle}</div>
          </a>
        )}
      </div>
    </section>
  )
})

export default TherapyHelp
