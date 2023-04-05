import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Vector9 } from '../../../../assets/Vector 9.svg'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'
const TherapistBlock = observer(() => {
  useEffect(() => {
    const smooth = document.querySelector('.smooth'),
      block = document.querySelector('.therapist-block')

    setTimeout(() => {
      block?.classList.add('animated')
      const prev = block?.previousElementSibling,
        main = document.querySelector('.therapist-block__main'),
        sub = document.querySelector('.therapist-block__sub'),
        items2 = document.querySelectorAll('.therapist-block__item')

      ;(main as any).classList.add('animated')

      items2.forEach((i, id) => {
        i?.classList.add('animated')
        ;(i as HTMLElement).style.transitionDelay = `${id / 6 + 0.5}s`
      })
      ;(sub as any).classList.add('animated')
    }, 1000)

    // const
    //   prev = block?.previousElementSibling,
    //   main = document.querySelector('.therapist-block__main'),
    //   sub = document.querySelector('.therapist-block__sub'),
    //   items2 = document.querySelectorAll('.therapist-block__item')

    // window.addEventListener('scroll', (args: any) => {
    //   var bodyRect = smooth!.getBoundingClientRect(),
    //     elemRect = prev!.getBoundingClientRect(),
    //     offset = elemRect.bottom
    //   // if (window.scrollY > offset - 1500) {
    //   //   block?.classList.add('animated')
    //   // }

    //   if (window.scrollY > offset - 1500) {
    //     ;(main as any).classList.add('animated')

    //     items2.forEach((i, id) => {
    //       i?.classList.add('animated')
    //       ;(i as HTMLElement).style.transitionDelay = `${id / 6 + 0.5}s`
    //     })
    //     ;(sub as any).classList.add('animated')
    //   }
    // })
  }, [ContentStore.therapist.block])

  useEffect(() => {
    if (window.innerWidth > 768) {
      const container = document.querySelector('.therapist-block')
      const vect = document.querySelector('.therapist-block__vector')
      const smooth = document.querySelector('.smooth')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = container!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top,
        offsetBottom =
          elemRect.bottom - vect!.getBoundingClientRect().height / 2

      window.addEventListener('scroll', (args: any) => {
        if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            window.scrollY - offset
          }px, 0)`
        }
      })
    }
  }, [ContentStore.therapist.block])
  return (
    <section className="therapist-block">
      <Vector9 className="therapist-block__vector" />
      <div className="therapist-block__container">
        <div style={{ overflow: 'hidden' }}>
          <p
            className="therapist-block__main up"
            dangerouslySetInnerHTML={{
              __html: ContentStore.therapist.block.mainText,
            }}
          ></p>
        </div>
        <div className="therapist-block__list">
          {ContentStore.therapist.block.list.map((bl:any, i) => (
            <div className="therapist-block__item" key={i}>
              <div className="therapist-block__item-num">0{i + 1}</div>
              <div
                className="therapist-block__item-title"
                dangerouslySetInnerHTML={{ __html: bl.title }}
              ></div>
              <div
                className="therapist-block__item-text"
                dangerouslySetInnerHTML={{ __html: bl.text }}
              ></div>
            </div>
          ))}
        </div>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div
            className="therapist-block__sub up"
            dangerouslySetInnerHTML={{
              __html: ContentStore.therapist.block.subText,
            }}
          ></div>
        </div>
      </div>
    </section>
  )
})

export default TherapistBlock
