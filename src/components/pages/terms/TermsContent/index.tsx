import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'
import PageLinks from '../../../common/PageLinks'
const TermsContent = observer(({ dt }: { dt: any }) => {
  useEffect(() => {
    setTimeout(() => {
      if (dt) {
        const smooth = document.querySelector('.smooth')
        const issues = smooth!.querySelector('.terms')
        if (!issues) return
        const title = smooth!.querySelector('.terms .privacy__title')
        const items = smooth!.querySelectorAll(
          '.terms p, .terms ul, .terms ol ',
        )

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
    }, 1500)
  }, [dt])

  useEffect(() => {
    setTimeout(() => {
      if (!dt) return
      if (window.innerWidth <= 768) return
      const container = document.querySelector('.terms')
      const vect = document.querySelector('.terms .privacy__vector')
      const smooth = document.querySelector('.smooth')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetBottom = elemRect.bottom - elemRect.height / 2

      window.addEventListener('scroll', () => {
        if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
          requestAnimationFrame(() => {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0)`
          })
        }
      })
    }, 1500)
  }, [dt])

  if (!dt) return <></>

  let main = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
  }

  return (
    <section className="terms privacy">
      <PageLinks
        links={[
          { title: dt.mainPageTitle, link: main },
          { title: dt.pageTitle, link: '/cookie-page' },
        ]}
      />
      <Vector className="privacy__vector" />
      <div className="privacy__container">
        <div style={{ overflow: 'hidden' }}>
          <h1
            className="privacy__title"
            dangerouslySetInnerHTML={{ __html: dt.title }}
          ></h1>
        </div>
        <div
          className="privacy__content"
          dangerouslySetInnerHTML={{ __html: dt.content }}
        ></div>
      </div>
    </section>
  )
})

export default TermsContent
