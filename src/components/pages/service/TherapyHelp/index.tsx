import { observer } from 'mobx-react'
import { ReactComponent as Vector } from '../../../../assets/Vector 1.svg'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Item1 } from '../../../../assets/Frame 31357.svg'
import { ReactComponent as Item2 } from '../../../../assets/Frame 31361.svg'
import { ReactComponent as Item3 } from '../../../../assets/Frame 31367.svg'
import { ReactComponent as Item4 } from '../../../../assets/Frame 31368.svg'
import { ReactComponent as VectorScroll } from '../../../../assets/Vector 5.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useEffect } from 'react'
const TherapyHelp = observer(({ dt }: { dt: any }) => {
  useEffect(() => {
    const smooth = document.querySelector('.smooth')

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const about = smooth!.querySelector('.therapy-help')
        const btn = smooth!.querySelector('.therapy-help .button')
        const title = smooth!.querySelector('.therapy-help__title')
        const text = smooth!.querySelector(
          '.therapy-help__col-block .therapy-help__text',
        )
        const items = smooth!.querySelectorAll('.therapy-help__item')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = about!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top
        if (args.scroll.y > offset - 500) {
          about?.classList.add('animated')
          title?.classList.add('animated')
          text?.classList.add('animated')
          btn?.classList.add('animated')
        }
        if (args.scroll.y > offset - 300) {
          items.forEach((i, id) => {
            i?.classList.add('animated')
            ;(i as HTMLElement).style.transitionDelay = `${id / 8 + 1}s`
          })
        }
      })
  }, [GlobalState.locoScroll])
  useEffect(() => {
    const container = document.querySelector('.therapy-help')
    const vect = document.querySelector('.therapy-help__vector')
    const smooth = document.querySelector('.smooth')
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom = elemRect.bottom - vect!.getBoundingClientRect().height / 2

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

          <div className="therapy-help__col-block">
            <div style={{ overflow: 'hidden' }}>
              <div
                className="therapy-help__text"
                dangerouslySetInnerHTML={{ __html: dt.text }}
              ></div>
            </div>
            {window.innerWidth > 1120 && (
              <Button
                classname="blue p18p40 "
                text={dt.buttonTitle}
                click={() => {}}
              />
            )}
          </div>
        </div>
        <div className="therapy-help__list">
          {dt.items.map((i:any, id:number) => (
            <div className="therapy-help__item" key={id}>
              <div className="therapy-help__item-num">0{id + 1}</div>
              <div className="therapy-help__item-title">{i.title}</div>
              <img className="therapy-help__item-img" src={i.icon} />
              <div className="therapy-help__text">{i.text}</div>
            </div>
          ))}
        </div>
        {window.innerWidth <= 1120 && (
          <Button
            classname="blue p18p40 "
            text={dt.buttonTitle}
            click={() => {}}
          />
        )}
      </div>
    </section>
  )
})

export default TherapyHelp
