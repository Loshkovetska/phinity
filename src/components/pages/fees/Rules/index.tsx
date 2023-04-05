import { observer } from 'mobx-react'
import { useEffect } from 'react'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'
import './index.scss'

const Rules = observer(() => {
  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const about = smooth!.querySelector('.rules')
    const title = smooth!.querySelector('.rules__title')
    const text = smooth!.querySelector('.rules__text')
    const items = smooth!.querySelectorAll('.rules__item')
    const bodyTop = smooth!.getBoundingClientRect().top,
      elementTop = about!.getBoundingClientRect().top,
      offset = elementTop - bodyTop

    setTimeout(() => {
      about?.classList.add('animated')
      title?.classList.add('animated')
      text?.classList.add('animated')
      items.forEach((i) => i?.classList.add('animated'))
    }, 100)

    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > offset - 700) {
    //     about?.classList.add('animated')
    //     title?.classList.add('animated')
    //     text?.classList.add('animated')
    //     setTimeout(() => {
    //       items.forEach((i) => i?.classList.add('animated'))
    //     }, 2000)
    //   }
    // })
  }, [ContentStore.fees.rules])

  if (!ContentStore.fees.rules) return <></>

  return (
    <section className="rules">
      <div className="rules__top">
        <div style={{ overflow: 'hidden' }}>
          <div
            className="rules__title"
            dangerouslySetInnerHTML={{ __html: ContentStore.fees.rules.title }}
          ></div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div
            className="rules__text"
            dangerouslySetInnerHTML={{ __html: ContentStore.fees.rules.text }}
          ></div>
        </div>
      </div>

      <div className="rules__list">
        {ContentStore.fees.rules.list?.map((li, i) => (
          <div className="rules__item" key={i}>
            <div className="rules__item-num">
              {i + 1}/{ContentStore.fees.rules.list?.length}
            </div>
            <div className="rules__item-text">{li}</div>
          </div>
        ))}
      </div>
    </section>
  )
})

export default Rules
