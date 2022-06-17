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

const Issues = observer(
  ({ classname, dt }: { classname?: string; dt: any }) => {
    const navigate = useNavigate()
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

        GlobalState.locoScroll &&
          GlobalState.locoScroll.on('scroll', (args: any) => {
            if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
              ;(vect as HTMLElement).style.transform = `translate3d(0, ${
                args.scroll.y - offset
              }px, 0)`
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

        GlobalState.locoScroll &&
          GlobalState.locoScroll.on('scroll', (args: any) => {
            if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
              ;(vect as HTMLElement).style.transform = `translate3d(0, ${
                args.scroll.y - offset
              }px, 0)`
            }
          })
      }
    }, [GlobalState.locoScroll])

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
                    __html: dt.title,
                  }}
                ></div>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div
                  className="issues__text"
                  dangerouslySetInnerHTML={{
                    __html: dt.text,
                  }}
                ></div>
              </div>
            </div>
            {window.innerWidth > 768 && !classname?.includes('service-page') && (
              <Button
                text={
                  <>
                    {dt.buttonTitle} <Arrow />
                  </>
                }
                click={() => navigate('/issues')}
                classname="p18p40 black-border"
              />
            )}
          </div>

          <div className="issues__list">
            {DBStore.issues?.slice(0, 6).map((is, i) => (
              <Link className="issues__item" key={i} to={`/issue/${is.id}`}>
                <Vector id={i} />
                <div
                  className="issues__item-title"
                  dangerouslySetInnerHTML={{ __html: is.title }}
                ></div>
                <div className="issues__item-text">{is.text}</div>
                <ArrowRight className="issues__item-arrow" />
              </Link>
            ))}
          </div>
          {window.innerWidth <= 768 && !classname?.includes('service-page') && (
            <Button
              text={
                <>
                  {dt.buttonTitle}
                  <Arrow />
                </>
              }
              click={() => navigate('/issues')}
              classname="p18p40 black-border"
            />
          )}
        </div>
      </section>
    )
  },
)
export default Issues
