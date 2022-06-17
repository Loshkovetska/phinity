import { observer } from 'mobx-react'
import DBStore from '../../../../stores/DBStore'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import fb from '../../../../assets/socials/black_facebook 1.png'
import inst from '../../../../assets/socials/black_instagram 1.png'
import tw from '../../../../assets/socials/black_twitter 1.png'
import { ReactComponent as Linkedin } from '../../../../assets/socials/linkedin.svg'

import './index.scss'
import PageLinks from '../../../common/PageLinks'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'

const VacancyContent = observer(() => {
  useEffect(() => {
    document.querySelector('.vacancy-content')?.classList.add('animated')

    setTimeout(() => {
      document
        .querySelector('.vacancy-content__title')
        ?.classList.add('animated')
      document
        .querySelector('.vacancy-content__subtitle')
        ?.classList.add('animated')
      document
        .querySelector('.vacancy-content__social')
        ?.classList.add('animated')
    }, 500)
    setTimeout(() => {
      document
        .querySelector('.vacancy-content__content')
        ?.classList.add('animated')
    }, 1200)
  }, [])

  useEffect(() => {
    const container = document.querySelector('.vacancy-content')
    const vect = document.querySelector('.vacancy-content__vector')
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
  }, [GlobalState.locoScroll])

  useEffect(() => {
    const container = document.querySelector('.vacancy-content')
    const smooth = document.querySelector('.smooth')
    if (!smooth || !container) return
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top

    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y > offset - 500) {
          document
            .querySelector('.vacancy-content__skills .vacancy-content__title')
            ?.classList.add('animated')
          setTimeout(() => {
            document
              .querySelector('.vacancy-content__skills-list')
              ?.classList.add('animated')
          }, 1000)
        }
      })
      const benefits = document.querySelector('.vacancy-content__benefits'),
        elemRect = benefits!.getBoundingClientRect(),
        offsetBenefit = elemRect.top - bodyRect.top
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y > offsetBenefit - 500) {
          document
            .querySelector('.vacancy-content__benefits .vacancy-content__title')
            ?.classList.add('animated')
          setTimeout(() => {
            document
              .querySelectorAll('.vacancy-content__benefits-item')
              .forEach((li, id) => {
                li.classList.add('animated')
                ;(li as HTMLElement).style.transitionDelay = `${id / 6}s`
              })
          }, 1000)
        }
      })
    }
  }, [GlobalState.locoScroll])

  if (!DBStore.vacancy) return <></>
  const { vacancy } = DBStore
  return (
    <section className="vacancy-content">
      <Vector className="vacancy-content__vector" />
      <div className="vacancy-content__container">
        <PageLinks
          links={[
            { title: ContentStore.job.mainPageTitle, link: '/' },
            { title: ContentStore.job.pageTitle, link: '/jobs' },
            { title: vacancy.title, link: `/job/${vacancy.id}` },
          ]}
        />

        <div className="vacancy-content__top">
          <div className="vacancy-content__top-col">
            <div style={{ overflow: 'hidden' }}>
              <div className="vacancy-content__title">{vacancy?.title}</div>
            </div>
            <div className="vacancy-content__subtitle">{vacancy.location}</div>
          </div>
          <div className="vacancy-content__social">
            <div className="vacancy-content__social-title">
              share this video
            </div>
            <div className="vacancy-content__social-list">
              <img src={fb} />
              <img src={inst} />
              <img src={tw} />
              <Linkedin />
            </div>
          </div>
        </div>
        <div className="vacancy-content__row">
          <div className="vacancy-content__row-col">
            <div
              className="vacancy-content__row-title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.company.title,
              }}
            ></div>
            <div
              className="vacancy-content__text"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.company.text,
              }}
            ></div>
          </div>
          <div className="vacancy-content__row-col">
            <div
              className="vacancy-content__row-title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.descriptionTitle,
              }}
            ></div>
            <div
              className="vacancy-content__text"
              dangerouslySetInnerHTML={{ __html: vacancy.description }}
            ></div>
          </div>
        </div>
        <div className="vacancy-content__skills">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="vacancy-content__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.qualification.title,
              }}
            ></div>
          </div>

          <ul className="vacancy-content__skills-list">
            <div
              className="vacancy-content__skills-item"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.qualification.text,
              }}
            ></div>
            {vacancy?.qualifications.split(';').map((vi, id) => (
              <li className="vacancy-content__skills-item" key={id}>
                {vi}
              </li>
            ))}
          </ul>
        </div>
        <div className="vacancy-content__benefits">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="vacancy-content__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.benefits.title,
              }}
            ></div>
          </div>

          <div className="vacancy-content__benefits-list">
            {ContentStore.job.benefits.list?.map((vi, id) => (
              <div className="vacancy-content__benefits-item" key={id}>
                <div className="vacancy-content__benefits-num">
                  {id + 1}/{ContentStore.job.benefits.list.length}
                </div>
                <div className="vacancy-content__benefits-text">{vi}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="vacancy-content__bottom">
          <div className="vacancy-content__bottom-col">
            <div
              className="vacancy-content__row-title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.info.title,
              }}
            ></div>
            <div
              className="vacancy-content__text"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.info.text,
              }}
            ></div>
            <div
              className="vacancy-content__row-title mt56"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.info.closingTitle,
              }}
            ></div>
            <div
              className="vacancy-content__text"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.info.closingText,
              }}
            ></div>
            <div
              className="vacancy-content__text mt56"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.info.closingSubText,
              }}
            ></div>
          </div>
          <div className="vacancy-content__social">
            <div className="vacancy-content__social-title">
              share this video
            </div>
            <div className="vacancy-content__social-list">
              <img src={fb} />
              <img src={inst} />
              <img src={tw} />
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default VacancyContent
