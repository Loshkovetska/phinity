import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'
import PageLinks from '../../../common/PageLinks'
import './index.scss'

const PrivacyContent = observer(() => {
  useEffect(() => {
    setTimeout(() => {
      const smooth = document.querySelector('.smooth')
      const issues = smooth!.querySelector('.privacy')
      const title = smooth!.querySelector('.privacy__title')
      const items = smooth!.querySelectorAll(
        '.privacy  p, .privacy ul, .privacy  ol ',
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
    }, 1000)
  }, [ContentStore.privacy])

  useEffect(() => {
    setTimeout(() => {
      if (window.innerWidth <= 768) return
      const container = document.querySelector('.privacy')
      const vect = document.querySelector('.privacy__vector')
      const smooth = document.querySelector('.smooth')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetBottom = elemRect.bottom - elemRect.height / 2

      window.addEventListener('scroll', (args: any) => {
        if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            window.scrollY - offset
          }px, 0)`
        }
      })
    }, 1000)
  }, [ContentStore.privacy])

  if (!ContentStore.privacy) return <></>

  let main = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
  }

  return (
    <section className="privacy">
      <PageLinks
        links={[
          { title: ContentStore.privacy.mainPageTitle, link: main},
          { title: ContentStore.privacy.pageTitle, link: '/privacy' },
        ]}
      />

      <Vector className="privacy__vector" />
      <div className="privacy__container">
        <div style={{ overflow: 'hidden' }}>
          <h1
            className="privacy__title"
            dangerouslySetInnerHTML={{ __html: ContentStore.privacy.title }}
          ></h1>
        </div>
        <div
          className="privacy__content"
          dangerouslySetInnerHTML={{ __html: ContentStore.privacy.content }}
        ></div>
      </div>
    </section>
  )
})

export default PrivacyContent
