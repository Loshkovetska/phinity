import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Setting } from '../../../../assets/filter.svg'
import { ReactComponent as MobSetting } from '../../../../assets/mob-sett.svg'

import { ReactComponent as Scroll } from '../../../../assets/scroll.svg'
import { ReactComponent as Vector } from '../../../../assets/Vector 7.svg'
import Button from '../../../common/Button'
import PageLinks from '../../../common/PageLinks'
import DBStore from '../../../../stores/DBStore'
import { useEffect, useRef } from 'react'
import CircleType from 'circletype'
import Filter from '../Filter'
import GlobalState, {
  changeTheraFilterState,
} from '../../../../stores/GlobalState'
import { Link } from 'react-router-dom'
import ContentStore from '../../../../stores/ContentStore'

const Therapists = observer(() => {
  const circleInstance = useRef<any>(null)

  const links = [
    {
      title: ContentStore.therapists.mainPageTitle,
      link: '/',
    },
    {
      title: ContentStore.therapists.pageTitle,
      link: '/therapists',
    },
  ]

  useEffect(() => {
    if (window.innerWidth <= 768) {
      new CircleType(circleInstance.current).radius(60)
    }
  }, [])

  useEffect(() => {
    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const about = smooth!.querySelector('.all-therapists')
        const title = smooth!.querySelector('.all-therapists__title')
        const button = smooth!.querySelector('.all-therapists .button.filter')
        const list = smooth!.querySelector('.all-therapists__list')
        const items = smooth!.querySelectorAll(
          '.all-therapists .therapists__item.small',
        )
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = about!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 300) {
          about?.classList.add('animated')
          title?.classList.add('animated')
          button?.classList.add('animated')
          items.forEach((i, id) => {
            elemRect = i!.getBoundingClientRect()
            offset = elemRect.top - bodyRect.top
            if (args.scroll.y > offset - 1000) {
              ;(i as any).classList.add('animated')
              if (window.innerWidth > 768) {
                ;(i as any).style.transitionDelay = `${id / 3 + 1.5}s`
              } else;
              ;(i as any).style.transitionDelay = `${id / 3 + 0.3}s`
            }
          })
        }
      })
  }, [GlobalState.locoScroll])

  useEffect(() => {
    setTimeout(() => {
      if (GlobalState.locoScroll && window.innerWidth > 768) {
        const cont = document.querySelector('.all-therapists')
        const next = cont?.nextElementSibling
        const list = document.querySelector('.all-therapists__list')
        const smooth = document.querySelector('.smooth')
        const v2 = document.querySelector('.all-therapists__vector')
        if (!v2 || !next || !list) return
        var bodyRect = smooth!.getBoundingClientRect(),
          listRect = list!.getBoundingClientRect(),
          nextRect = next!.getBoundingClientRect(),
          contRect = cont!.getBoundingClientRect()
        var offset = listRect.top - bodyRect.top,
          offsetBottom = nextRect.top - v2!.getBoundingClientRect().height

        GlobalState.locoScroll &&
          GlobalState.locoScroll.on('scroll', (args: any) => {
            if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
              ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
                args.scroll.y - offset
              }px, 0) rotateY(180deg)`
            }
          })
      }
    }, 1000)
  }, [])

  if (!ContentStore.therapists) return <></>

  return (
    <section className="all-therapists">
      <div className="all-therapists__container">
        {window.innerWidth > 768 && <PageLinks links={links} />}
        <div className="all-therapists__intro">
          <PageLinks links={links} />
          <div
            className="all-therapists__intro-title  animated fadeIn"
            dangerouslySetInnerHTML={{
              __html: ContentStore.therapists.main.title,
            }}
          ></div>
          <div
            className="all-therapists__intro-text animated fadeIn delay-1s "
            dangerouslySetInnerHTML={{
              __html: ContentStore.therapists.main.text,
            }}
          ></div>
          <Button
            text={ContentStore.therapists.main.buttonTitle}
            click={() => {}}
            classname="blue p18p40 animated fadeIn delay-2s"
          />
          <div className="all-therapists__intro-bottom">
            <div className="intro__scroll animated fadeIn delay-3s ">
              <div className="intro__scroll-area">
                <div className="intro__scroll-text" ref={circleInstance}>
                  Scroll Down
                </div>
              </div>
              <Scroll className="" />
            </div>
          </div>
        </div>
        <div className="all-therapists__top">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="all-therapists__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.therapists.main.title,
              }}
            ></div>
          </div>

          <Button
            text={
              <>
                {window.innerWidth > 768 ? <Setting /> : <MobSetting />}
                {window.innerWidth > 768 && 'Filter'}
                {window.innerWidth > 768 && GlobalState.theraFilterCount ? (
                  <span>({GlobalState.theraFilterCount})</span>
                ) : (
                  <></>
                )}
              </>
            }
            click={changeTheraFilterState}
            classname="black-border p11p24 filter"
          />
        </div>
        <Vector className="all-therapists__vector" />

        <div className="all-therapists__list">
          {DBStore.therapists?.map((i, id) => (
            <Link
              className="therapists__item small"
              key={id}
              to={`/therapist/${i.id}`}
            >
              <div className="therapists__item-img">
                <img src={i.img} />
              </div>
              <div className="therapists__item-info">
                <div className="therapists__item-title">Dr. {i.name}</div>
                <div className="therapists__item-text">{i.position}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Filter />
    </section>
  )
})
export default Therapists
