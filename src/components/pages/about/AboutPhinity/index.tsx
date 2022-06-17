import { observer } from 'mobx-react'
import './index.scss'
import img from '../../../../assets/hands.png'
import img1 from '../../../../assets/unsplash_Wp7t4cWN-68 (1).png'
import Button from '../../../common/Button'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'

const AboutPhinity = observer(() => {
  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const issues = smooth!.querySelector('.about-phinity')
        const images = smooth!.querySelector('.about-phinity__col.images')
        const title = smooth!.querySelector('.about-phinity__title')
        const text = smooth!.querySelector('.about-phinity__text')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = issues!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 500) {
          images?.classList.add('animated')
          title?.classList.add('animated')
          text?.classList.add('animated')

          if (window.innerWidth <= 768) {
            const btn = smooth!.querySelector('.about-phinity .button')
            btn?.classList.add('animated')
          }
        }
      })
    }
  }, [GlobalState.locoScroll])

  if (!ContentStore.about.phinity) return <></>

  return (
    <section className="about-phinity">
      <div className="about-phinity__col images">
        <img
          src={ContentStore.about.phinity.img1}
          className="about-phinity__img left"
        />
        <img
          src={ContentStore.about.phinity.img2}
          className="about-phinity__img right"
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
        <Button
          text={ContentStore.about.phinity.buttonText}
          click={() => {}}
          classname="blue p18p40"
        />
      </div>
    </section>
  )
})

export default AboutPhinity
