import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import { useEffect } from 'react'
import ContentStore from '../../../../stores/ContentStore'

const Phylosophy = observer(() => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const smooth = document.querySelector('.smooth')
      const issues = smooth!.querySelector('.phylosophy')
      const items = smooth!.querySelectorAll('.phylosophy__col')
      const title = smooth!.querySelector('.phylosophy__title')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = issues!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (window.scrollY > offset - 1000) {
        issues?.classList.add('animated')
        title?.classList.add('animated')

        items.forEach((i, id) => {
          i?.classList.add('animated')
          const els = i.querySelectorAll('img, .phylosophy__text')
          els.forEach((e) => {
            ;(e as any).style.transitionDelay = `${id / 5 + 0.5}s`
          })
        })
      }
    })
  }, [])
  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const cont = document.querySelector('.phylosophy')
    const next = cont?.nextElementSibling
    const v2 = document.querySelector(`.phylosophy__vector`)
    var bodyRect = smooth!.getBoundingClientRect(),
      nextRect = next!.getBoundingClientRect(),
      contRect = cont!.getBoundingClientRect()
    var offset = contRect.top - bodyRect.top,
      offsetBottom = nextRect.top - v2!.getBoundingClientRect().height

    window.addEventListener('scroll', () => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
          window.scrollY - offset
        }px, 0)`
      }
    })
  }, [])

  if (
    !ContentStore.about.phylosophy ||
    !ContentStore.about.phylosophy.cols.length
  )
    return <></>

  return (
    <section className="phylosophy">
      <Vector className="phylosophy__vector" />
      <div className="phylosophy__container">
        <div className="phylosophy__col left">
          <div style={{ overflow: 'hidden' }}>
            {' '}
            <div
              className="phylosophy__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.about.phylosophy.title,
              }}
            ></div>
          </div>{' '}
          <img
            className="phylosophy__img"
            src={ContentStore.about.phylosophy.cols[0].img}
            alt={ContentStore.about.phylosophy.title}
          />
          <div
            className="phylosophy__text"
            dangerouslySetInnerHTML={{
              __html: ContentStore.about.phylosophy.cols[0].text,
            }}
          ></div>
        </div>
        <div className="phylosophy__col right">
          <div
            className="phylosophy__text"
            dangerouslySetInnerHTML={{
              __html: ContentStore.about.phylosophy.cols[1].text,
            }}
          ></div>
          <img
            className="phylosophy__img"
            src={ContentStore.about.phylosophy.cols[1].img}
            alt={ContentStore.about.phylosophy.title}
          />
        </div>{' '}
      </div>
    </section>
  )
})

export default Phylosophy
