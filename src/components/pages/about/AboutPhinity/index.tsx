import { observer } from 'mobx-react'
import './index.scss'
import Button from '../../../common/Button'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'

const AboutPhinity = observer(() => {
  useEffect(() => {

      const smooth = document.querySelector('.smooth')
      const images = smooth!.querySelector('.about-phinity__col.images')
      setTimeout(() => {
        images?.classList.add('animated')
      }, 1000)
      setTimeout(() => {
        window.addEventListener('scroll', () => {
          const issues = smooth!.querySelector('.about-phinity')

          const title = smooth!.querySelector('.about-phinity__title')
          const text = smooth!.querySelector('.about-phinity__text')

          var bodyRect = smooth!.getBoundingClientRect(),
            elemRect = issues!.getBoundingClientRect(),
            offset = elemRect.top - bodyRect.top

          if (window.scrollY > offset - 1000) {
            title?.classList.add('animated')
            text?.classList.add('animated')

            if (window.innerWidth <= 768) {
              const btn = smooth!.querySelector('.about-phinity .button')
              btn?.classList.add('animated')
            }
          }
        })
      }, 1000)
    
  }, [])

  if (!ContentStore.about.phinity) return <></>

  return (
    <section className="about-phinity">
      <div className="about-phinity__col images">
        <img
          src={ContentStore.about.phinity.img1}
          className="about-phinity__img left"
          alt={ContentStore.about.phinity.title}
        />
        <img
          src={ContentStore.about.phinity.img2}
          className="about-phinity__img right"
          alt={ContentStore.about.phinity.title}
        />
      </div>
      <div className="about-phinity__col">
        <div style={{ overflow: 'hidden' }}>
          <div className="about-phinity__title">
            {ContentStore.about.phinity.title}
          </div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div
            className="about-phinity__text"
            dangerouslySetInnerHTML={{
              __html: ContentStore.about.phinity.text,
            }}
          ></div>
        </div>
        <a
          target={'_blank'}
          href={ContentStore.about.phinity.booklink}
          className="blue p18p40 button"
        >
          <div className="button__text">
            {ContentStore.about.phinity.buttonText}
          </div>
        </a>
      </div>
    </section>
  )
})

export default AboutPhinity
