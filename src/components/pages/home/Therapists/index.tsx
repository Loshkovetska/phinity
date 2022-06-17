import Button from '../../../common/Button'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import './index.scss'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import CustomSlider from '../../../common/CustomSlider'
import { ReactComponent as Star } from '../../../../assets/ic_star.svg'
import DBStore from '../../../../stores/DBStore'
import { ReactComponent as Vector } from '../../../../assets/Vector 1.svg'
import { Link, useNavigate } from 'react-router-dom'
import ContentStore from '../../../../stores/ContentStore'
const Therapists = observer(
  ({ therapist, therapists }: { therapist: any; therapists: any }) => {
    const navigate = useNavigate()
    useEffect(() => {
      if (GlobalState.locoScroll) {
        setTimeout(() => {
          GlobalState.locoScroll.on('scroll', (args: any) => {
            const smooth = document.querySelector('.smooth')
            const therapists = smooth!.querySelector('.therapists')
            const title = smooth!.querySelector(
              DBStore.therapists!.length > 1
                ? '.therapists__container.two .therapists__title'
                : '.therapists__container.one .therapists__title',
            )

            const text = smooth!.querySelector('.therapists__text')
            const bottom = smooth!.querySelector('.therapists__bottom')
            const items = smooth!.querySelectorAll('.therapists__item')
            const list = smooth!.querySelector('.therapists__list')
            var bodyRect = smooth!.getBoundingClientRect(),
              elemRect = therapists!.getBoundingClientRect(),
              offset = elemRect.top - bodyRect.top
            if (args.scroll.y > offset - 500) {
              therapists?.classList.add('animated')
              title?.classList.add('animated')
              text?.classList.add('animated')
            }

            if (args.scroll.y > offset - 300) {
              bottom?.classList.add('animated')
            }

            if (list) {
              if (args.scroll.y > offset - 300) {
                items.forEach((i, id) => {
                  i?.classList.add('animated')
                  ;(i as HTMLDivElement).style.transitionDelay = `${
                    1.5 + id / 8
                  }s`
                })
              }
            }
          })
        }, 0)
      }
    }, [GlobalState.locoScroll])

    useEffect(() => {
      if (window.innerWidth <= 480) {
        const container = document.querySelector('.therapists')
        const vect = document.querySelector('.therapists__vector')
        const smooth = document.querySelector('.smooth')
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = vect!.getBoundingClientRect(),
          contRect = container!.getBoundingClientRect(),
          offset = contRect.top - bodyRect.top,
          offsetBottom = contRect.top + contRect.height / 3

        GlobalState.locoScroll &&
          GlobalState.locoScroll.on('scroll', (args: any) => {
            if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
              ;(vect as HTMLElement).style.transform = `translate3d(0, ${
                args.scroll.y - offset
              }px, 0) rotateY(180deg)`
            }
          })
      }
    }, [GlobalState.locoScroll])

    const getStars = (count: number) => {
      return new Array(Math.ceil(count)).fill(0, 0)
    }

    if (!DBStore.therapists) return <></>

    return (
      <section className="therapists">
        <Vector className="therapists__vector" />
        {DBStore.therapists?.length == 1 ? (
          <div className="therapists__container one">
            {window.innerWidth <= 768 && (
              <div style={{ overflow: 'hidden' }}>
                <div
                  className="therapists__title"
                  dangerouslySetInnerHTML={{
                    __html: therapist.title,
                  }}
                ></div>
              </div>
            )}

            <Link
              className="therapists__item big"
              to={`/therapist/${DBStore.therapists[0].id}`}
            >
              <div className="therapists__item-img">
                <img src={DBStore.therapists[0].img} />
              </div>
              <div className="therapists__item-info">
                <div className="therapists__item-title">
                  Dr. {DBStore.therapists[0].name}
                </div>
                <div className="therapists__item-text">
                  {DBStore.therapists[0].position}
                </div>
              </div>
            </Link>
            <div className="therapists__block">
              {window.innerWidth > 768 && (
                <div
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    className="therapists__title"
                    dangerouslySetInnerHTML={{
                      __html: therapist.title,
                    }}
                  ></div>
                </div>
              )}
              <div
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="therapists__text"
                  dangerouslySetInnerHTML={{
                    __html: therapist.text,
                  }}
                ></div>
              </div>
              <div className="therapists__bottom">
                <Button
                  text={therapist.buttonTitle}
                  classname="blue p18p40"
                  click={() =>
                    window.open(ContentStore.book.buttonLink, '__blank')
                  }
                />
                <div
                  className="therapists__more"
                  onClick={() =>
                    navigate(`/therapist/${DBStore.therapists![0].id}`)
                  }
                >
                  Read more <Arrow />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="therapists__container two">
            <div>
              <div
                className="therapists__title"
                dangerouslySetInnerHTML={{
                  __html: therapists.title,
                }}
              ></div>
            </div>
            <div
              style={{
                overflow: 'hidden',
                display: 'flex',
                justifyContent:
                  window.innerWidth <= 768 ? 'flex-start' : 'center',
              }}
            >
              <div
                className="therapists__text"
                dangerouslySetInnerHTML={{
                  __html: therapists.text,
                }}
              ></div>
            </div>
            <div className="therapists__list">
              <CustomSlider
                countItems={DBStore.therapists.length}
                width={305}
                block="therapists"
              >
                {DBStore.therapists.map((i, id) => (
                  <Link
                    className="therapists__item small"
                    key={id}
                    to={`/therapist/${i.id}`}
                  >
                    <div className="therapists__item-img">
                      <img src={i.img} />
                    </div>
                    <div className="therapists__item-info">
                      <div className="therapists__item-title">Dr. {i.name}</div>
                      <div className="therapists__item-text">{i.position}</div>
                      {window.innerWidth <= 1024 && (
                        <div className="therapists__item-rating">
                          {getStars(i.rating).map((s, d) => (
                            <Star key={d} />
                          ))}
                          {i.rating}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </CustomSlider>
            </div>
          </div>
        )}
      </section>
    )
  },
)

export default Therapists
