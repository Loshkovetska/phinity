import { observer } from 'mobx-react'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/Vector 8.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useEffect } from 'react'
import ContentStore from '../../../../stores/ContentStore'
const ContactContent = observer(() => {
  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const issues = smooth!.querySelector('.contact-content')
    const main = smooth!.querySelector('.contact-content__col.main'),
      second = smooth!.querySelector('.contact-content__col.second')
    const cols = smooth!.querySelectorAll('.contact-content__sub-col'),
      bodyRect = smooth!.getBoundingClientRect().top,
      elemRect = issues!.getBoundingClientRect().top,
      offset = elemRect - bodyRect

    window.addEventListener('scroll', () => {
      if (window.scrollY > offset - 1000) {
        issues?.classList.add('animated')
        setTimeout(() => {
          main?.classList.add('animated')
        }, 500)
        setTimeout(() => {
          second?.classList.add('animated')
        }, 1000)
        setTimeout(() => {
          cols.forEach((i, id) => {
            setTimeout(() => {
              i?.classList.add('animated')
            }, (id / 8) * 1000)
          })
        }, 1500)
      }
    })
  }, [])

  useEffect(() => {
    if (window.innerWidth > 768) return

    const container = document.querySelector('.contact-content')
    const vect = document.querySelector('.contact-content__vector')
    const smooth = document.querySelector('.smooth')
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
  }, [])

  if (!ContentStore.contact.content) return <></>

  return (
    <section className="contact-content">
      <div className="contact-content__container">
        <Vector className="contact-content__vector" />
        <div className="contact-content__col main">
          <div
            className="contact-content__title"
            dangerouslySetInnerHTML={{
              __html: ContentStore.contact.content.title,
            }}
          ></div>
          <div
            className="contact-content__text mb40 w525"
            dangerouslySetInnerHTML={{
              __html: ContentStore.contact.content.text1,
            }}
          ></div>

          <div
            className="contact-content__text mb40 w525"
            dangerouslySetInnerHTML={{
              __html: ContentStore.contact.content.text2,
            }}
          ></div>
          <div
            className="contact-content__text mb8"
            dangerouslySetInnerHTML={{
              __html: ContentStore.contact.content.sheduleTitle,
            }}
          ></div>
          <div
            className="contact-content__bold-text"
            dangerouslySetInnerHTML={{
              __html: ContentStore.contact.content.sheduleText,
            }}
          ></div>
          <div className="contact-content__bottom">
            <Button
              classname={
                window.innerWidth > 768 ? 'blue f14' : 'black-border f14'
              }
              text={ContentStore.contact.content.sheduleButton}
              click={() =>
                (window.location.href = `tel:${ContentStore.contact.content.phone}`)
              }
            />
          </div>
        </div>
        <div className="contact-content__col second">
          <div className="contact-content__sub-col">
            <div
              className="contact-content__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.contact.content.phoneTitle,
              }}
            ></div>
            <div
              className="contact-content__text mb24 w328"
              dangerouslySetInnerHTML={{
                __html: ContentStore.contact.content.phoneText,
              }}
            ></div>

            <div
              className="contact-content__bold-text"
              dangerouslySetInnerHTML={{
                __html: ContentStore.contact.content.phone,
              }}
            ></div>
            <div className="contact-content__bottom">
              <Button
                classname={
                  window.innerWidth > 768 ? 'blue f14' : 'black-border f14'
                }
                text={ContentStore.contact.content.phoneButton}
                click={() =>
                  (window.location.href = `tel:${ContentStore.contact.content.phone}`)
                }
              />
            </div>
          </div>
          <div className="contact-content__sub-col">
            <div
              className="contact-content__title"
              dangerouslySetInnerHTML={{
                __html: ContentStore.contact.content.emailTitle,
              }}
            ></div>
            <div
              className="contact-content__text mb24 w355"
              dangerouslySetInnerHTML={{
                __html: ContentStore.contact.content.emailText,
              }}
            ></div>

            <div
              className="contact-content__text email"
              dangerouslySetInnerHTML={{
                __html: ContentStore.contact.content.email,
              }}
            ></div>

            <div className="contact-content__bottom">
              <Button
                classname={
                  window.innerWidth > 768 ? 'blue f14' : 'black-border f14'
                }
                text={ContentStore.contact.content.emailButton}
                click={() =>
                  (window.location.href = `mailto:${ContentStore.contact.content.email}`)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default ContactContent
