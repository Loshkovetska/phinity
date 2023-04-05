import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as DeskVector } from '../../../../assets/serv.svg'
import { ReactComponent as MobVector } from '../../../../assets/Vector 4.svg'
import { useEffect } from 'react'
import ContentStore from '../../../../stores/ContentStore'
const OurTeam = observer(() => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const smooth = document.querySelector('.smooth')
      const issues = smooth!.querySelector('.our-team')
      const items = smooth!.querySelectorAll('.our-team__item')
      const title = smooth!.querySelector('.our-team__title')
      const img = smooth!.querySelector('.our-team__img')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = issues!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (window.scrollY > offset - 1000) {
        issues?.classList.add('animated')
        title?.classList.add('animated')
        img?.classList.add('animated')

        items.forEach((i, id) => {
          i?.classList.add('animated')
          ;(i as any).style.transitionDelay = `${id / 5 + 2}s`
        })
      }
    })
  }, [])

  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const cont = document.querySelector('.our-team')
    const next = cont?.nextElementSibling
    const v2 = document.querySelector(
      `.our-team__vector.${window.innerWidth > 768 ? 'desk' : 'mob'}`,
    )
    var bodyRect = smooth!.getBoundingClientRect(),
      nextRect = next!.getBoundingClientRect(),
      contRect = cont!.getBoundingClientRect()
    var offset = contRect.top - bodyRect.top,
      offsetBottom = nextRect.top - v2!.getBoundingClientRect().height

    window.addEventListener('scroll', () => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
          window.scrollY - offset
        }px, 0) ${window.innerWidth > 768 ? 'rotateY(180deg)' : ''}`
      }
    })
  }, [])

  if (!ContentStore.about.team) return <></>

  return (
    <section className="our-team">
      <DeskVector className="our-team__vector desk" />
      <MobVector className="our-team__vector mob" />
      <div className="our-team__container">
        <div style={{ overflow: 'hidden' }}>
          <div className="our-team__title">{ContentStore.about.team.title}</div>
        </div>
        <div className="our-team__img-cont">
          <img
            src={
              window.innerWidth > 600
                ? ContentStore.about.team.imgDesk
                : ContentStore.about.team.imgMob
            }
            className="our-team__img"
            alt={ContentStore.about.team.title}
          />
        </div>
        <div className="our-team__list">
          {ContentStore.about.team.list?.map((l, id) => (
            <div className="our-team__item" key={id}>
              <div className="our-team__item-num">0{id + 1}</div>
              <div className="our-team__item-text">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default OurTeam
