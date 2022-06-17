import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import Map from '../../../common/Map'
import './index.scss'
import { ReactComponent as VectorDesk } from '../../../../assets/Vector 9.svg'
import { ReactComponent as VectorMobile } from '../../../../assets/Vector 4.svg'
import ContentStore from '../../../../stores/ContentStore'

const Location = observer(() => {
  useEffect(() => {
    const container = document.querySelector('.location')
    const vect = document.querySelector(
      `.location__vector.${window.innerWidth > 768 ? 'desk' : 'mob'}`,
    )
    const smooth = document.querySelector('.smooth')
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = vect!.getBoundingClientRect(),
      contRect = container!.getBoundingClientRect(),
      offset = contRect.top - bodyRect.top,
      offsetBottom = contRect.bottom - contRect.height / 2

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0)`
        }
      })
  }, [GlobalState.locoScroll])

  if (!ContentStore.contact.location) return <></>
  return (
    <section className="location">
      <VectorDesk className="location__vector desk" />
      <VectorMobile className="location__vector mob" />
      <div className="location__container">
        <div className="location__col">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="location__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.contact.location.title,
              }}
            ></div>
          </div>
          <div className="location__col-block">
            <div style={{ overflow: 'hidden' }}>
              <div className="location__item">
                <div
                  className="location__col-title"
                  dangerouslySetInnerHTML={{
                    __html:
                      window.innerWidth > 768
                        ? ContentStore.contact.location.subtitleDesk
                        : ContentStore.contact.location.subtitleMob,
                  }}
                ></div>
                <div
                  className="location__col-text"
                  dangerouslySetInnerHTML={{
                    __html: ContentStore.contact.location.address,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="location__map">
          <Map location={ContentStore.contact.location.coords} />
        </div>
      </div>
    </section>
  )
})

export default Location
