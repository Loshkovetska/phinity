import classNames from 'classnames'
import { observer } from 'mobx-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import DBStore from '../../../../stores/DBStore'
import './index.scss'
import { ReactComponent as V1 } from '../../../../assets/services-vectors/Vector 10.svg'
import { ReactComponent as V2 } from '../../../../assets/services-vectors/Vector 11.svg'
import { ReactComponent as V3 } from '../../../../assets/services-vectors/Vector 12.svg'
import { ReactComponent as V4 } from '../../../../assets/services-vectors/Vector 13.svg'
import { ReactComponent as V5 } from '../../../../assets/services-vectors/Vector 14.svg'
import { ReactComponent as V6 } from '../../../../assets/services-vectors/Vector 15.svg'
import { ReactComponent as V7 } from '../../../../assets/services-vectors/Vector 16.svg'
import { ReactComponent as V9 } from '../../../../assets/services-vectors/Vector 18.svg'
import { ReactComponent as V10 } from '../../../../assets/services-vectors/Vector 19.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useEffect } from 'react'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'

import { ReactComponent as VScroll } from '../../../../assets/Vector 5.svg'
import Button from '../../../common/Button'

const Services = observer(({ title, dt }: { title: string; dt: any }) => {
  const { pathname } = useLocation()

  const Vector = ({ id }: { id: number }) => {
    const vectors = [
      <V1 />,
      <V2 />,
      <V3 />,
      <V4 />,
      <V5 />,
      <V6 />,
      <V7 />,
      <V9 />,
      <V10 />,
    ]
    return vectors[
      id >= vectors.length ? Math.floor(id / vectors.length) - 1 : id
    ]
  }

  useEffect(() => {
    window.addEventListener('scroll', (args: any) => {
      const smooth = document.querySelector('.smooth')
      const about = smooth!.querySelector('.services-block')
      const title = smooth!.querySelector('.services-block__title')
      const list = smooth!.querySelector('.services-block__list')
      const items = smooth!.querySelectorAll(
        '.services-block .our-services__item',
      )

      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = about!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (window.scrollY > offset - 800) {
        about?.classList.add('animated')
        title?.classList.add('animated')
      }

      elemRect = list!.getBoundingClientRect()
      offset = elemRect.top - bodyRect.top

      if (window.scrollY > offset - 800) {
        if (window.innerWidth > 768) {
          items.forEach((i, id) => {
            elemRect = i!.getBoundingClientRect()
            offset = elemRect.top - bodyRect.top
            if (window.scrollY > offset - 1000) {
              ;(i as any).classList.add('animated')
            }
          })
        }

        if (window.innerWidth <= 768) {
          list?.classList.add('animated')
        }
      }
    })
  }, [dt])

  useEffect(() => {
    setTimeout(() => {
      if (window.innerWidth <= 768) {
        const smooth = document.querySelector('.smooth')
        const cont = document.querySelector('.services-block')
        const next = cont?.nextElementSibling
        const list = document.querySelector('.services-block__list')
        const v2 = document.querySelector('.services-block__vector')
        var bodyRect = smooth!.getBoundingClientRect(),
          listRect = list!.getBoundingClientRect(),
          nextRect = next!.getBoundingClientRect(),
          contRect = cont!.getBoundingClientRect()
        var offset = listRect.top - bodyRect.top,
          offsetBottom = nextRect.top - v2!.getBoundingClientRect().height

        window.addEventListener('scroll', () => {
          if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
            ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0)`
          }
        })
      }
    }, 1000)
  }, [dt])

  if (!dt) return <></>

  const links = GlobalState.links
  let services = ''
  if (links) {
    services = links.find((l: any) => l.id == 264).link
  }

  return (
    <section
      className={classNames(
        'services-block ',
        pathname.includes('issue') && 'issue',
        pathname.includes('therapist') && 'therapist',
      )}
    >
      <div className="services-block__container">
        <div className="services-block__top">
          <div style={{ overflow: 'hidden' }}>
            <div className="services-block__title">{title}</div>
          </div>

          <a href={services} className="button p18p40 black-border">
            <div className="button__text">
              See All <Arrow />
            </div>
          </a>
        </div>

        <div className="services-block__list">
          {dt?.map((s: any, i: number) => (
            <a
              className="our-services__item animated"
              key={i}
              href={`${services}/${s.link}`}
            >
              <div className="our-services__item-content">
                <div className="our-services__item-img">
                  <img src={s.img} alt={s.title} />
                </div>
                <div
                  className={classNames('our-services__item-title')}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                ></div>
              </div>
              <Vector id={i} />
            </a>
          ))}
          <VScroll className="services-block__vector" />
        </div>
        <div className="services-block__bottom">
          <a href={services} className="button p18p40 black-border">
            <div className="button__text">
              See All <Arrow />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
})

export default Services
