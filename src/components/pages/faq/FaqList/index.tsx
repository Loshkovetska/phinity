import { observer } from 'mobx-react'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import PageLinks from '../../../common/PageLinks'
import { ReactComponent as ArrowRight } from '../../../../assets/ArrowRight.svg'

import './index.scss'
import DBStore from '../../../../stores/DBStore'
import { Faq } from '../../../../api/mocks/faqs'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'
const FaqList = observer(() => {
  useEffect(() => {
    if (!DBStore.faqs) return
    const smooth = document.querySelector('.smooth')
    const issues = smooth!.querySelector('.faq-list')
    const title = smooth!.querySelector('.faq-list__title')
    const items = smooth!.querySelectorAll('.faq-list__item')
    if (!issues || !title || !items.length) return

    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = issues!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top

    setTimeout(() => {
      issues?.classList.add('animated')
      title?.classList.add('animated')
    }, 500)

    setTimeout(() => {
      items.forEach((i, id) => {
        setTimeout(() => {
          i?.classList.add('animated')
        }, (id / 6 + 0.5) * 1000)
      })
    }, 1000)
  }, [DBStore.faqs])

  useEffect(() => {
    const container = document.querySelector('.faq-list')
    const vect = document.querySelector('.faq-list__vector')
    const smooth = document.querySelector('.smooth')

    if (!vect) return
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = vect!.getBoundingClientRect(),
      contRect = container!.getBoundingClientRect(),
      offset = contRect.top - bodyRect.top,
      offsetBottom = contRect.bottom - contRect.height / 2

    window.addEventListener('scroll', () => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${
          window.scrollY - offset
        }px, 0)`
      }
    })
  }, [DBStore.faqs])

  if (!DBStore.faqs) return <></>

  let main = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
  }

  return (
    <section className="faq-list">
      <PageLinks
        links={[
          { title: ContentStore.faq.mainPageTitle, link: main },
          { title: ContentStore.faq.pageTitle.toUpperCase(), link: 'FAQ' },
        ]}
      />
      <Vector className="faq-list__vector" />
      <div className="faq-list__container">
        <div style={{ overflow: 'hidden' }}>
          {' '}
          <h1 className="faq-list__title">{ContentStore.faq.title}</h1>
        </div>

        <div className="faq-list__list">
          {DBStore.faqs?.map((f, ind) => (
            <FaqItem key={ind} f={f} />
          ))}
        </div>
      </div>
    </section>
  )
})

export default FaqList

const FaqItem = ({ f }: { f: Faq }) => {
  const [active, setActive] = useState(false)
  const ref = useRef<any>(null)
  useEffect(() => {
    if (active) {
      ref.current && ref.current.classList.add('active')
    } else ref.current && ref.current.classList.remove('active')
  }, [active])

  return (
    <div className={classNames('faq-list__item')} ref={ref}>
      <div className="faq-list__item-top" onClick={() => setActive(!active)}>
        <div className="faq-list__item-title">{f.title}</div>
        <ArrowRight
          className={classNames('faq-list__item-icon', active && 'active')}
        />
      </div>
      <div
        className="faq-list__item-text"
        dangerouslySetInnerHTML={{ __html: f.text }}
      ></div>
    </div>
  )
}
