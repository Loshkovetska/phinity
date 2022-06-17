import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'
import PageLinks from '../../../common/PageLinks'
const TermsContent = observer(() => {
  useEffect(() => {
    if (GlobalState.locoScroll) {
      const smooth = document.querySelector('.smooth')
      const issues = smooth!.querySelector('.terms')
      if (!issues) return
      const title = smooth!.querySelector('.terms .privacy__title')
      const items = smooth!.querySelectorAll('.terms .privacy__row')

      issues?.classList.add('animated')
      setTimeout(() => {
        title?.classList.add('animated')
      }, 300)
      setTimeout(() => {
        items.forEach((i, id) => {
          i?.classList.add('animated')
          ;(i as HTMLElement).style.transitionDelay = `${id / 4 + 0.5}`
        })
      }, 1500)
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const container = document.querySelector('.terms')
    const vect = document.querySelector('.terms .privacy__vector')
    const smooth = document.querySelector('.smooth')
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom = elemRect.bottom - elemRect.height / 2

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0)`
        }
      })
  }, [GlobalState.locoScroll])

  if (!ContentStore.terms.content) return <></>

  return (
    <section className="terms privacy">
      <PageLinks
        links={[
          { title: ContentStore.terms.mainPageTitle, link: '/' },
          { title: ContentStore.terms.pageTitle, link: '/terms' },
        ]}
      />

      <Vector className="privacy__vector" />
      <div className="privacy__container">
        <div style={{ overflow: 'hidden' }}>
          <div
            className="privacy__title"
            dangerouslySetInnerHTML={{ __html: ContentStore.terms.title }}
          ></div>
        </div>
        {ContentStore.terms.content?.map((c, i) => (
          <div className="privacy__row" key={i}>
            <div className="privacy__sub-title">{c.title}</div>
            <div
              className="privacy__sub-text"
              dangerouslySetInnerHTML={{ __html: c.text }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  )
})

export default TermsContent
