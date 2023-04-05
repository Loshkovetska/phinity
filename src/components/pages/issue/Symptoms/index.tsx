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
    window.addEventListener('scroll', () => {
      const smooth = document.querySelector('.smooth')
      const about = smooth!.querySelector('.symptoms')
      const items = smooth!.querySelectorAll('.symptoms__item')

      const title = smooth!.querySelector('.symptoms__title')

      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = about!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      let start = window.innerWidth > 768 ? 1000 : 800
      let startDelay = window.innerWidth > 768 ? 1 : 1
      if (window.scrollY > offset - start) {
        about?.classList.add('animated')
        title?.classList.add('animated')
        items.forEach((i, id) => {
          i.classList.add('animated')
          ;(i as HTMLDivElement).style.transitionDelay = `${
            id / 6 + startDelay
          }s`
        })
      }
    })
  }, [ContentStore.issue])

  useEffect(() => {
    const container = document.querySelector('.symptoms')
    const smooth = document.querySelector('.smooth')
    const vect = document.querySelector(
      `.symptoms__vector.${window.innerWidth > 650 ? 'desk' : 'mob'}`,
    )

    if (!vect) return
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
          }px, 0) ${window.innerWidth > 650 ? 'rotateY(180deg)' : 'rotateY(0)'}`
        })
      }
    })
  }, [ContentStore.issue])

  if (!ContentStore.issue) return <></>

  let symptoms: any = []
  if (ContentStore.issue.symptoms) {
    symptoms = JSON.parse(JSON.stringify(ContentStore.issue.symptoms))
    symptoms = symptoms.sort((a: any, b: any) => a.title.localeCompare(b.title))
  }

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
          {(symptoms as any)?.map((s: any, i: number) => (
            <div className="symptoms__item" key={i}>
              <div className="symptoms__item-title">{s.title}</div>
              <div
                className="symptoms__item-text"
                dangerouslySetInnerHTML={{ __html: s.text }}
              ></div>
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
