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
import { Link, useNavigate } from 'react-router-dom'
import ContentStore from '../../../../stores/ContentStore'
import ReviewsIO from '../../../../assets/ex/reviews-mobile.svg'
import { ReactComponent as BlueStar } from '../../../../assets/ex/star.svg'
import { ReactComponent as ScrollDown } from '../../../../assets/post/arrow.svg'

const Therapists = observer(() => {
  const getStars = (count: number) => {
    return new Array(Math.ceil(count)).fill(0, 0)
  }
  useEffect(() => {
    if (window.innerWidth <= 768) {
      // new CircleType(circleInstance.current).radius(60)
      const smooth = document.querySelector('.smooth')
      const about = smooth!.querySelector('.all-therapists')
      about?.classList.add('animated')
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const smooth = document.querySelector('.smooth')

      const about = smooth!.querySelector('.all-therapists')
      const title = smooth!.querySelector('.all-therapists__title')
      const button = smooth!.querySelector('.all-therapists .button.filter')
      const list = smooth!.querySelector('.all-therapists__list')
      about?.classList.add('animated')
      title?.classList.add('animated')
      button?.classList.add('animated')
    }, 1000)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', (args: any) => {
      const smooth = document.querySelector('.smooth')
      const items = smooth!.querySelectorAll(
        '.all-therapists .therapists__item.small',
      )
      items.forEach((i, id) => {
        let elemRect = i!.getBoundingClientRect()
        let bodyRect = smooth!.getBoundingClientRect()
        let offset = elemRect.top - bodyRect.top
        if (window.scrollY > offset - 1000) {
          setTimeout(
            () => {
              ;(i as any).classList.add('animated')
            },
            window.innerWidth > 768 ? (id / 8) * 1000 : (id / 3 + 0.3) * 1000,
          )
        }
      })
    })
  }, [])

  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const items = smooth!.querySelectorAll(
      '.all-therapists .therapists__item.small',
    )
    items.forEach((i, id) => {
      setTimeout(
        () => {
          ;(i as any).classList.add('animated')
        },
        window.innerWidth > 768 ? (id / 8) * 1000 : (id / 3 + 0.3) * 1000,
      )
    })
  }, [DBStore.therapists])

  useEffect(() => {
    setTimeout(() => {
      if (window.innerWidth > 768) {
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

        window.addEventListener('scroll', (args: any) => {
          if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
            ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0) rotateY(180deg)`
          }
        })
      }
    }, 1000)
  }, [])

  if (!ContentStore.therapists) return <></>

  const linksL = GlobalState.links
  let therapists = '',
    main = ''
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
    therapists = linksL.find((l: any) => l.id == 268).link
  }

  const links = [
    {
      title: ContentStore.therapists.mainPageTitle,
      link: main,
    },
    {
      title: ContentStore.therapists.pageTitle,
      link: '/therapists',
    },
  ]

  return (
    <section className="all-therapists">
      <div className="all-therapists__container">
        <PageLinks links={links} />
        {/* <div className="all-therapists__intro">
          <PageLinks links={links} /> */}
          {/* <h1
            className="all-therapists__intro-title  animated fadeIn"
            dangerouslySetInnerHTML={{
              __html: ContentStore.therapists.main.title,
            }}
          ></h1>
          <div
            className="all-therapists__intro-text animated fadeIn delay-1s "
            dangerouslySetInnerHTML={{
              __html: ContentStore.therapists.main.text,
            }}
          ></div>
          {window.innerWidth > 768 && (
            <a
              href={ContentStore.home.intro.buttonLink}
              target="_blank"
              className="button blue p18p40 animated fadeIn delay-2s"
            >
              <div className="button__text">
                {ContentStore.therapists.main.buttonTitle}
              </div>
            </a>
          )} */}
          {/* 
          <div className="all-therapists__intro-bottom">
            {GlobalState.rating && window.innerWidth <= 768 && (
              <a
                href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
                target={'_blank'}
                className="animated fadeIn delay-2s intro__widget"
              >
                <div className="intro__widget-col">
                  <div className="intro__widget-stars">
                    {' '}
                    <img
                      src={ReviewsIO}
                      alt={window.location.href}
                      className="intro__widget-icon"
                    />
                    {getStars(GlobalState.rating?.average_rating).map(
                      (s, i) => (
                        <BlueStar key={i} className="intro__widget-star" />
                      ),
                    )}
                  </div>
                  <span>
                    Read our{' '}
                    <span className="intro__widget-count">
                      {GlobalState.rating?.num_ratings}
                    </span>
                    {GlobalState.rating?.num_ratings > 1 ||
                    !GlobalState.rating?.num_ratings
                      ? 'reviews'
                      : 'review'}{' '}
                  </span>
                </div>
              </a>
            )}
            <div className="intro__scrolldown animated fadeIn delay-3s">
              <ScrollDown />
              <ScrollDown />
              <ScrollDown />
            </div>
          </div> */}
        {/* </div> */}
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
                {window.innerWidth > 768 && GlobalState.filterCount ? (
                  <span>({GlobalState.filterCount})</span>
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
            <a
              className="therapists__item small"
              key={id}
              href={`${therapists}/${i.link}`}
            >
              <div className="therapists__item-img">
                <img src={i.img} alt={i?.name} />
              </div>
              <div className="therapists__item-info">
                <div className="therapists__item-title">{i.name}</div>
                <div className="therapists__item-text">{i.position}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
})
export default Therapists
