import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'
import CustomLink from '../../../common/CustomLink'
import Map from '../../../common/Map'
import './index.scss'
const Contact = observer(() => {
  const [tab, setTab] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const about = smooth!.querySelector('.therapist-contact')
        const title = smooth!.querySelector('.therapist-contact__title')
        const tabs = smooth!.querySelectorAll('.therapist-contact__tab')
        const items = smooth!.querySelectorAll('.therapist-contact__item')
        const map = smooth!.querySelector('.therapist-contact__map')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = about!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (window.scrollY > offset - 700) {
          title?.classList.add('animated')
          tabs?.forEach((t) => t.classList.add('animated'))
          items.forEach((i, id) => {
            ;(i as any).classList.add('animated')
            ;(i as any).style.transitionDelay = `${id / 6 + 0.5}s`
          })
          map?.classList.add('animated')
        }
      })
  }, [])

  if (!ContentStore.therapist.contact) return <></>
  return (
    <section className="therapist-contact">
      <div className="therapist-contact__container">
        <div className="therapist-contact__col">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="therapist-contact__title"
              dangerouslySetInnerHTML={{
                __html: '',
              }}
            ></div>
          </div>
          {ContentStore.therapist.contact?.clinics?.map((c, i) => (
            <div style={{ overflow: 'hidden' }}>
              <div
                className={classNames(
                  'therapist-contact__tab',
                  tab == i && 'active',
                )}
                key={i}
                onClick={() => setTab(i)}
              >
                {c.title}
              </div>
            </div>
          ))}
          <div className="therapist-contact__col-block">
            <div style={{ overflow: 'hidden' }}>
              <div className="therapist-contact__item">
                <div
                  className="therapist-contact__item-title"
                  dangerouslySetInnerHTML={{
                    __html: ContentStore.therapist.contact?.addressTitle,
                  }}
                ></div>
                <div
                  className="therapist-contact__item-text"
                  dangerouslySetInnerHTML={{
                    __html:
                      ContentStore.therapist.contact.clinics[tab]?.address,
                  }}
                ></div>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div className="therapist-contact__item">
                <div
                  className="therapist-contact__item-title"
                  dangerouslySetInnerHTML={{
                    __html: ContentStore.therapist.contact?.sheduleTitle,
                  }}
                ></div>
                <div
                  className="therapist-contact__item-text"
                  dangerouslySetInnerHTML={{
                    __html:
                      ContentStore.therapist.contact.clinics[tab]?.shedule,
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
                    text={ContentStore.therapist.contact.clinics[tab]?.phone}
                  >
                    <div
                      className="therapist-contact__item-text"
                      dangerouslySetInnerHTML={{
                        __html:
                          ContentStore.therapist.contact.clinics[tab]?.phone,
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
                  text={ContentStore.therapist.contact.clinics[tab]?.email}
                >
                  <div className="therapist-contact__item-text">
                    {ContentStore.therapist.contact.clinics[tab]?.email}
                  </div>
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
        <div className="therapist-contact__map">
          <Map
            link={ContentStore.therapist.contact.clinics[tab]?.maplink}
            location={ContentStore.therapist.contact.location}
            zoom={+ContentStore.therapist.contact.zoom || 18}
          />
        </div>
      </div>
    </section>
  )
})

export default Contact
