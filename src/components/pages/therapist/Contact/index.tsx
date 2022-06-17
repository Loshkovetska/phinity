import { observer } from 'mobx-react'
import { useEffect } from 'react'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'
import CustomLink from '../../../common/CustomLink'
import Map from '../../../common/Map'
import './index.scss'
const Contact = observer(() => {
  useEffect(() => {
    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const about = smooth!.querySelector('.therapist-contact')
        const title = smooth!.querySelector('.therapist-contact__title')
        const items = smooth!.querySelectorAll('.therapist-contact__item')
        const map = smooth!.querySelector('.therapist-contact__map')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = about!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 500) {
          title?.classList.add('animated')
          items.forEach((i, id) => {
            ;(i as any).classList.add('animated')
            ;(i as any).style.transitionDelay = `${id / 6 + 0.5}s`
          })
          map?.classList.add('animated')
        }
      })
  }, [GlobalState.locoScroll])

  if (!ContentStore.therapist.contact) return <></>
  return (
    <section className="therapist-contact">
      <div className="therapist-contact__container">
        <div className="therapist-contact__col">
          <div style={{ overflow: 'hidden' }}>
            <div className="therapist-contact__title">Our Contacts</div>
          </div>
          <div className="therapist-contact__col-block">
            <div style={{ overflow: 'hidden' }}>
              <div className="therapist-contact__item">
                <div
                  className="therapist-contact__item-title"
                  dangerouslySetInnerHTML={{
                    __html: ContentStore.therapist.contact.sheduleTitle,
                  }}
                ></div>
                <div
                  className="therapist-contact__item-text"
                  dangerouslySetInnerHTML={{
                    __html: ContentStore.therapist.contact.shedule,
                  }}
                ></div>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div className="therapist-contact__item">
                <div
                  className="therapist-contact__item-title"
                  dangerouslySetInnerHTML={{
                    __html: ContentStore.therapist.contact.phoneTitle,
                  }}
                ></div>
                <div className="therapist-contact__item-text">
                  <CustomLink
                    type="phone"
                    text={ContentStore.therapist.contact.phone}
                  >
                    <div
                      className="therapist-contact__item-text"
                      dangerouslySetInnerHTML={{
                        __html: ContentStore.therapist.contact.phone,
                      }}
                    ></div>
                  </CustomLink>
                </div>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div className="therapist-contact__item">
                <div
                  className="therapist-contact__item-title"
                  dangerouslySetInnerHTML={{
                    __html: ContentStore.therapist.contact.emailTitle,
                  }}
                ></div>
                <CustomLink
                  type="email"
                  text={ContentStore.therapist.contact.email}
                >
                  <div className="therapist-contact__item-text">
                    {ContentStore.therapist.contact.email}
                  </div>
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
        <div className="therapist-contact__map">
          <Map location={ContentStore.therapist.contact.location} />
        </div>
      </div>
    </section>
  )
})

export default Contact
