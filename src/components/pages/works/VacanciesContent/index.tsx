import { observer } from 'mobx-react'
import PageLinks from '../../../common/PageLinks'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import { useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import { ReactComponent as ArrowRight } from '../../../../assets/ArrowRight.svg'
import { Vacancy } from '../../../../api/mocks/vacancies'
import classNames from 'classnames'
import DBStore from '../../../../stores/DBStore'
import { Link } from 'react-router-dom'
import ContentStore from '../../../../stores/ContentStore'

const VacanciesContent = observer(() => {
  useEffect(() => {
    document.querySelector('.vacancies')?.classList.add('animated')

    setTimeout(() => {
      document.querySelector('.vacancies__title')?.classList.add('animated')
    }, 500)

    setTimeout(() => {
      document.querySelector('.vacancies__subtitle')?.classList.add('animated')
    }, 1000)
    const items = document.querySelectorAll('.vacancies__text')

    setTimeout(() => {
      items.forEach((i, id) => {
        i.classList.add('animated')
        ;(i as HTMLDivElement).style.transitionDelay = `${id / 4 + 0.5}s`
      })
    }, 1400)

    setTimeout(() => {
      const items = document.querySelectorAll('.vacancies__item')
      items.forEach((i, id) => {
        i?.classList.add('animated')
        ;(document.querySelector(
          '.vacancies__item',
        ) as HTMLElement).style.transitionDelay = `${id / 6}s`
      })
    }, 3500)
  }, [DBStore.vacancies])

  useEffect(() => {
    const container = document.querySelector('.vacancies')
    const vect = document.querySelector('.vacancies__vector')
    const smooth = document.querySelector('.smooth')
    if (!smooth || !vect) return
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom = elemRect.bottom - elemRect.height / 2

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          if (window.innerWidth > 480) {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              args.scroll.y - offset
            }px, 0)`
          } else {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              args.scroll.y - offset
            }px, 0) scale(0.7)`
          }
        }
      })
  }, [GlobalState.locoScroll,DBStore.vacancies])

  if (!DBStore.vacancies) return <></>
  if (!ContentStore.works) return <></>
  return (
    <section className="vacancies">
      <Vector className="vacancies__vector" />

      <div className="vacancies__container">
        <PageLinks
          links={[
            { title: ContentStore.works.mainPageTitle, link: '/' },
            { title: ContentStore.works.pageTitle, link: '/jobs' },
          ]}
        />
        <div style={{ overflow: 'hidden' }}>
          <div
            className="vacancies__title"
            dangerouslySetInnerHTML={{
              __html:
                window.innerWidth > 768
                  ? ContentStore.works.title
                  : ContentStore.works.mobTitle,
            }}
          ></div>
        </div>
        <div className="vacancies__row">
          <div style={{ overflow: 'hidden' }}>
            {' '}
            <div
              className="vacancies__subtitle"
              dangerouslySetInnerHTML={{
                __html: ContentStore.works.subtitle,
              }}
            ></div>
          </div>
          <div className="vacancies__col">
            <div style={{ overflow: 'hidden' }}>
              {' '}
              <div
                className="vacancies__text"
                dangerouslySetInnerHTML={{
                  __html: ContentStore.works.p1,
                }}
              ></div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              {' '}
              <div
                className="vacancies__text mt56"
                dangerouslySetInnerHTML={{
                  __html: ContentStore.works.p2,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="vacancies__list">
          {DBStore.vacancies?.map((vi, id) => (
            <VacancyItem item={vi} key={id} />
          ))}
        </div>
      </div>
    </section>
  )
})

export default VacanciesContent

const VacancyItem = ({ item }: { item: Vacancy }) => {
  return (
    <Link className={classNames('vacancies__item')} to={`/job/${item.id}`}>
      <div className="vacancies__item-col">
        <div className="vacancies__item-top">
          Job title{' '}
          <span className="vacancies__item-date">
            {new Date(item.publicationDate).toLocaleDateString('en')}
          </span>
        </div>
        <div className="vacancies__item-title">
          {item.title} <span>({item.location})</span>
        </div>
      </div>
      <ArrowRight className="vacancies__item-arrow" />
    </Link>
  )
}
