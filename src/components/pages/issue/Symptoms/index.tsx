import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Deskvector } from '../../../../assets/serv.svg'
import { ReactComponent as Mobvector } from '../../../../assets/Vector 4.svg'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'
import DBStore from '../../../../stores/DBStore'

const Symptoms = observer(() => {
  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const about = smooth!.querySelector('.symptoms')
        const items = smooth!.querySelectorAll('.symptoms__item')

        const title = smooth!.querySelector('.symptoms__title')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = about!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top
        if (args.scroll.y > offset - 500) {
          about?.classList.add('animated')
          title?.classList.add('animated')
          items.forEach((i, id) => {
            i.classList.add('animated')
            ;(i as HTMLDivElement).style.transitionDelay = `${id / 6 + 1.5}s`
          })
        }
      })
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (GlobalState.locoScroll) {
      const container = document.querySelector('.symptoms')
      const smooth = document.querySelector('.smooth')
      const vect = document.querySelector(
        `.symptoms__vector.${window.innerWidth > 650 ? 'desk' : 'mob'}`,
      )
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        vectRect = vect?.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetBottom = elemRect.bottom - vectRect!.height

      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0) ${window.innerWidth > 650 ? 'rotateY(180deg)' : 'rotateY(0)'}`
        }
      })
    }
  }, [GlobalState.locoScroll])

  if (!DBStore.symptoms) return <></>
  if (!ContentStore.issue) return <></>
  return (
    <section className="symptoms">
      <div className="symptoms__container">
        <div style={{ overflow: 'hidden' }}>
          <div
            className="symptoms__title"
            dangerouslySetInnerHTML={{
              __html: ContentStore.issue.symptomsTitle,
            }}
          ></div>
        </div>
        <div className="symptoms__list">
          {DBStore.symptoms?.map((s, i) => (
            <div className="symptoms__item" key={i}>
              <div className="symptoms__item-title">{s.title}</div>
              <div className="symptoms__item-text">{s.text}</div>
            </div>
          ))}
          <Mobvector className="symptoms__vector mob" />
        </div>
      </div>
      <Deskvector className="symptoms__vector desk" />
    </section>
  )
})
export default Symptoms
