import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { ReactComponent as ArrowRight } from '../../../../assets/ArrowRight.svg'

import { ReactComponent as Vector1 } from '../../../../assets/issues/Vector 10.svg'
import { ReactComponent as Vector3 } from '../../../../assets/issues/Vector 11 (1).svg'
import { ReactComponent as Vector4 } from '../../../../assets/issues/Vector 11 (2).svg'
import { ReactComponent as Vector2 } from '../../../../assets/issues/Vector 11.svg'
import { ReactComponent as Vector5 } from '../../../../assets/issues/Vector 12.svg'
import { ReactComponent as Vector6 } from '../../../../assets/issues/Vector 13.svg'
import { ReactComponent as VectorScroll } from '../../../../assets/Vector 5.svg'
import { ReactComponent as VectorServiceScroll } from '../../../../assets/Vector 4.svg'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import DBStore from '../../../../stores/DBStore'
import ContentStore from '../../../../stores/ContentStore'
import { Issue } from '../../../../api/mocks/issues'

const Issues = observer(
  ({
    classname,
    dt,
    arr,
  }: {
    classname?: string
    dt: any
    arr: Array<Issue> | null | undefined
  }) => {
    const Vector = ({ id }: { id: number }) => {
      const vectors = [
        <Vector1 className="issues__item-vector" />,
        <Vector2 className="issues__item-vector" />,
        <Vector3 className="issues__item-vector" />,
        <Vector4 className="issues__item-vector" />,
        <Vector5 className="issues__item-vector" />,
        <Vector6 className="issues__item-vector" />,
      ]
      return vectors[
        id >= vectors.length ? Math.floor(id / vectors.length) - 1 : id
      ]
    }

    useEffect(() => {
      if (window.innerWidth <= 480 && !classname?.includes('service-page')) {
        const container = document.querySelector('.issues')
        const vect = document.querySelector('.issues__vector')
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
      }
      if (window.innerWidth > 480 && classname?.includes('service-page')) {
        const container = document.querySelector('.issues.service-page')
        const vect = document.querySelector('.issues__vector')
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
      }
    }, [])

    const links = GlobalState.links
    let issues = ''
    if (links) {
      issues = links.find((l: any) => l.id == 266).link
    }

    let subarr: any = [];
    
    if (arr) {
      const ar= JSON.parse(JSON.stringify(arr))
      subarr = ar.sort((a:Issue, b:Issue)=>a.title.localeCompare(b.title))
    }

    return (
      <section className={classNames('issues', classname)}>
        {!classname?.includes('service-page') && (
          <VectorScroll className="issues__vector" />
        )}
        {classname?.includes('service-page') && (
          <VectorServiceScroll className="issues__vector" />
        )}
        <div className="issues__container">
          <div className="issues__top">
            <div className="issues__col">
              <div style={{ overflow: 'hidden' }}>
                <div
                  className="issues__title"
                  dangerouslySetInnerHTML={{
                    __html: dt?.title,
                  }}
                ></div>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div
                  className="issues__text"
                  dangerouslySetInnerHTML={{
                    __html: dt?.text,
                  }}
                ></div>
              </div>
            </div>
            {window.innerWidth > 768 && (
              <a href={issues} className="button p18p40 black-border">
                <div className="button__text">
                  See All <Arrow />
                </div>
              </a>
            )}
          </div>

          <div className="issues__list">
            {subarr?.map((is:any, i:number) => (
              <a className="issues__item" key={i} href={`${issues}/${is.link}`}>
                <Vector id={i} />
                <div
                  className="issues__item-title"
                  dangerouslySetInnerHTML={{ __html: is.title }}
                ></div>
                <div
                  className="issues__item-text"
                  dangerouslySetInnerHTML={{ __html: is.text }}
                ></div>
                <ArrowRight className="issues__item-arrow" />
              </a>
            ))}
          </div>
          {window.innerWidth <= 768 && (
            <a href={issues} className="button p18p40 black-border">
              <div className="button__text">
                See All <Arrow />
              </div>
            </a>
          )}
        </div>
      </section>
    )
  },
)
export default Issues
