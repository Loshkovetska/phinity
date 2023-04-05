import { observer } from 'mobx-react'
import DBStore from '../../../../stores/DBStore'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import './index.scss'
import PageLinks from '../../../common/PageLinks'
import { createElement, useEffect } from 'react'
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
  }, [DBStore.vacancy])

  useEffect(() => {
    const container = document.querySelector('.vacancy-content')
    const vect = document.querySelector('.vacancy-content__vector')
    const smooth = document.querySelector('.smooth')

    if (!smooth || !vect) return
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom = elemRect.bottom - elemRect.height / 2

    window.addEventListener('scroll', () => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        requestAnimationFrame(() => {
          if (window.innerWidth > 480) {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0)`
          } else {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0) scale(0.7)`
          }
        })
      }
    })
  }, [DBStore.vacancy])

  useEffect(() => {
    const container = document.querySelector('.vacancy-content')
    const smooth = document.querySelector('.smooth')
    if (!smooth || !container) return
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top

    window.addEventListener('scroll', (args: any) => {
      if (window.scrollY > offset - 700) {
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
    const benefits = document.querySelector('.vacancy-content__benefits')

    elemRect = benefits!.getBoundingClientRect()
    const offsetBenefit = elemRect.top - bodyRect.top
    window.addEventListener('scroll', () => {
      if (window.scrollY > offsetBenefit - 500) {
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
  }, [DBStore.vacancy])

  const getList = (paragr: any) => {
    return paragr.split(';')
  }

  if (!DBStore.vacancy) return <></>
  const { vacancy } = DBStore

  let main = '',
    vacanc = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
    vacanc = linksL.find((l: any) => l.id == 262).link
  }
  return (
    <section className="vacancy-content">
      <Vector className="vacancy-content__vector" />
      <div className="vacancy-content__container">
        <PageLinks
          links={[
            { title: ContentStore.job.mainPageTitle, link: main },
            { title: ContentStore.job.pageTitle, link: vacanc },
            { title: vacancy.title, link: `${vacanc}/${vacancy.id}` },
          ]}
        />

        <div className="vacancy-content__top">
          <div className="vacancy-content__top-col">
            <div style={{ overflow: 'hidden' }}>
              <h1 className="vacancy-content__title">{vacancy?.title}</h1>
            </div>
            <div className="vacancy-content__subtitle">{vacancy.location}</div>
          </div>
          <div className="vacancy-content__social">
            <div className="vacancy-content__social-title">
              {ContentStore.job?.shareTitle}
            </div>
            <div className="vacancy-content__social-list">
              {ContentStore.job?.shareList?.map((b: any, i) => (
                <a
                  key={i}
                  href={b.link + window.location.href}
                  target="__blank"
                >
                  <img src={b.icon} alt={window.location.href} />
                </a>
              ))}
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
                __html: vacancy.are!,
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
          <div
            className="vacancy-content__skills-list"
            dangerouslySetInnerHTML={{
              __html: vacancy.asc!,
            }}
          ></div>

          {/* <ul className="vacancy-content__skills-list">
            <li
              className="vacancy-content__skills-item"
              dangerouslySetInnerHTML={{
                __html: ContentStore.job.qualification.text,
              }}
            ></li>
            {getList(vacancy?.qualifications).map((vi: any, id: number) => (
              <li className="vacancy-content__skills-item" key={id}>
                {vi}
              </li>
            ))}
          </ul> */}
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
            {vacancy.offers?.map((vi, id) => (
              <div className="vacancy-content__benefits-item" key={id}>
                <div className="vacancy-content__benefits-num">
                  {id + 1}/{vacancy.offers?.length}
                </div>
                <div className="vacancy-content__benefits-text">{vi.text}</div>
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
              {ContentStore.job?.shareTitle}
            </div>
            <div className="vacancy-content__social-list">
              {ContentStore.job?.shareList?.map((b: any, i) => (
                <a
                  key={i}
                  href={b.link + window.location.href}
                  target={'__blank'}
                >
                  <img src={b.icon} alt={window.location.href} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default VacancyContent
