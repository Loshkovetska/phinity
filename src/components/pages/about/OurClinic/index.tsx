import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { ReactComponent as VectorDesk } from '../../../../assets/Vector 4.svg'

import { ReactComponent as Vector } from '../../../../assets/clinic.svg'
import DBStore from '../../../../stores/DBStore'
import GlobalState from '../../../../stores/GlobalState'
import CustomSlider from '../../../common/CustomSlider'
import './index.scss'
import ContentStore from '../../../../stores/ContentStore'

const OurClinic = observer(() => {
  useEffect(() => {
    document.querySelector('.phinity-adv')?.classList.add('clinic')
  }, [])
  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const issues = smooth!.querySelector('.our-clinic')
        const items = smooth!.querySelectorAll('.our-clinic__item')
        const title = smooth!.querySelector('.our-clinic__title')
        const text = smooth!.querySelector('.our-clinic__text')
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = issues!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 500) {
          issues?.classList.add('animated')
          title?.classList.add('animated')
          text?.classList.add('animated')

          items.forEach((i, id) => {
            i?.classList.add('animated')
            ;(i as any).style.transitionDelay = `${id / 5 + 2.5}s`
          })
        }
      })
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (GlobalState.locoScroll) {
      const smooth = document.querySelector('.smooth')
      const cont = document.querySelector('.our-clinic')
      const next = cont?.nextElementSibling
      const v2 = document.querySelector(
        `.our-clinic__vector.${window.innerWidth > 768 ? 'desk' : 'mob'}`,
      )
      var bodyRect = smooth!.getBoundingClientRect(),
        nextRect = next!.getBoundingClientRect(),
        contRect = cont!.getBoundingClientRect()
      var offset = contRect.top - bodyRect.top,
        offsetBottom = nextRect.top - v2!.getBoundingClientRect().height

      GlobalState.locoScroll &&
        GlobalState.locoScroll.on('scroll', (args: any) => {
          if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
            ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
              args.scroll.y - offset
            }px, 0) ${window.innerWidth > 768 ? 'rotate(180deg)' : ''}`
          }
        })
    }
  }, [])

  if (!DBStore.images) return <></>
  if (!ContentStore.about.clinic) return <></>
  return (
    <section className="our-clinic">
      <VectorDesk className="our-clinic__vector desk" />
      <Vector className="our-clinic__vector mob" />
      <div className="our-clinic__container">
        <div className="our-clinic__top">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="our-clinic__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.about.clinic.title,
              }}
            ></div>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <div
              className="our-clinic__text"
              dangerouslySetInnerHTML={{
                __html: ContentStore.about.clinic.text,
              }}
            ></div>
          </div>
        </div>

        <div className="our-clinic__list">
          <CustomSlider
            countItems={DBStore.images?.length}
            width={300}
            block=""
          >
            {DBStore.images?.map((l, id) => (
              <div className="our-clinic__item" key={id}>
                <img src={l} />
              </div>
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})
export default OurClinic
