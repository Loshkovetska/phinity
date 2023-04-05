import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import Map from '../../../common/Map'
import './index.scss'
import { ReactComponent as VectorDesk } from '../../../../assets/Vector 9.svg'
import { ReactComponent as VectorMobile } from '../../../../assets/Vector 4.svg'
import ContentStore from '../../../../stores/ContentStore'
import classNames from 'classnames'

const Location = observer(() => {
  const [coords, setCoords] = useState<any>(null)
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

    window.addEventListener('scroll', () => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        requestAnimationFrame(() => {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            window.scrollY - offset
          }px, 0)`
        })
      }
    })
  }, [])

  useEffect(() => {
    if (!ContentStore.contact.location?.list) return
    setCoords({
      lat: ContentStore.contact.location?.list[0].lat,
      lng: ContentStore.contact.location?.list[0].lng,
      maplink: ContentStore.contact.location?.list[0].maplink,
    })
  }, [ContentStore.contact.location?.list])

  if (!ContentStore.contact.location) return <></>
  const list = ContentStore.contact.location.list

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
            {/* ContentStore.contact.location. */}
            {list &&
              coords &&
              list.map((l: any, i: number) => (
                <div style={{ overflow: 'hidden' }} key={i}>
                  <div
                    className="location__item"
                    onClick={() => {
                      document
                        .querySelector('.location__map')
                        ?.classList.add('hidden-map')

                      setTimeout(() => {
                        document
                          .querySelector('.location__map')
                          ?.classList.remove('hidden-map')
                      }, 700)
                      setCoords({ lat: l.lat, lng: l.lng, maplink: l.maplink })
                    }}
                  >
                    <div
                      className={classNames(
                        'location__col-title',
                        coords.lat == l.lat && coords.lng == l.lng && 'active',
                      )}
                      dangerouslySetInnerHTML={{
                        __html: l.subtitle,
                      }}
                    ></div>
                    <div
                      className="location__col-text"
                      dangerouslySetInnerHTML={{
                        __html: l.address,
                      }}
                    ></div>
                    {/* <div
                    className="location__col-text"
                    dangerouslySetInnerHTML={{
                      __html: ContentStore.contact.location.address,
                    }}
                  ></div> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="location__map">
          {coords ? (
            <Map
              link={coords.maplink}
              location={coords}
              zoom={+ContentStore.contact.location.zoom || 18}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  )
})

export default Location
