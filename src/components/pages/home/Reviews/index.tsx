import CustomSlider from '../../../common/CustomSlider'
import './index.scss'
import { ReactComponent as Star } from '../../../../assets/ic_star.svg'
import { ReactComponent as Check } from '../../../../assets/check.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import DBStore from '../../../../stores/DBStore'
import { useLocation } from 'react-router'
import ContentStore from '../../../../stores/ContentStore'
import { ReactComponent as ArrowSquareOut } from '../../../../assets/ex/ArrowSquareOut.svg'
import CheckerItemsInsideCont from '../../../common/CheckerItemsInsideCont'

const Reviews = observer(({ dt }: { dt: any }) => {
  const getStars = (count: number) => {
    return new Array(Math.ceil(count)).fill(0, 0)
  }

  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.includes('issue') && !pathname.includes('issues')) {
      const smooth = document.querySelector('.smooth')
      if (!smooth) return

      const all = smooth!.querySelectorAll('.reviews *')

      all.forEach((a) => a.classList.add('animated'))
    }
  }, [pathname])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const smooth = document.querySelector('.smooth')
      const issues = smooth!.querySelector('.reviews')
      const title = smooth!.querySelector('.reviews__title')
      const text = smooth!.querySelector('.reviews__text')
      const items = smooth!.querySelectorAll('.reviews__item')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = issues!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top
      if (window.scrollY > offset - 1000) {
        issues?.classList.add('animated')
      }
      if (window.scrollY > offset - 700) {
        title?.classList.add('animated')
        text?.classList.add('animated')

        if (window.innerWidth > 768) {
          items.forEach((i, id) => {
            setTimeout(() => {
              i?.classList.add('animated')
            }, (id / 6 + 0.5) * 100)
          })
        } else {
          items.forEach((i, id) => {
            setTimeout(() => {
              i?.classList.add('animated')
            }, (id / 6 + 0.5) * 100)
          })
        }
        setTimeout(() => {
          document
            .querySelector('.reviews .slick-dots')
            ?.classList.add('animated')
        }, 1000)
      }
    })
  }, [])

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  return (
    <section className="reviews">
      <div style={{ overflow: 'hidden' }}>
        <div
          className="reviews__title"
          dangerouslySetInnerHTML={{ __html: dt?.title }}
        ></div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div
          className="reviews__text"
          dangerouslySetInnerHTML={{ __html: dt?.text }}
        ></div>
      </div>
      <CheckerItemsInsideCont
        countOfChidlren={DBStore.reviews?.length||0}
        child=".reviews__item"
        container=".reviews"
        slider={
          <div className="reviews__list">
            <CustomSlider
              width={365}
              autoPlay
              variableWidth={true}
              countItems={DBStore.reviews?.length || 0}
              slidesToShow={width >= 1440 ? 3 : width < 1024 ? 1 : 2}
              slidesToScroll={width >= 1440 ? 3 : width < 1024 ? 1 : 2}
            >
              {DBStore.reviews?.map((i, id) => (
                <a
                  className="reviews__item"
                  key={id}
                  href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
                  target={'_blank'}
                >
                  <div className="reviews__item-title">{i.title}</div>
                  <div className="reviews__item-sub">{i.sub}</div>
                  <div className="reviews__item-rating">
                    {getStars(i.rating).map((s, si) => (
                      <Star key={si} />
                    ))}
                  </div>
                  <div
                    className="reviews__item-text"
                    dangerouslySetInnerHTML={{ __html: i.text }}
                  ></div>
                  <div className="reviews__item-read">
                    Read more <ArrowSquareOut />
                  </div>
                  <div className="reviews__item-status">
                    <div>
                      <Check />
                    </div>
                    Verified
                  </div>
                </a>
              ))}
            </CustomSlider>
          </div>
        }
        list={
          <div className="reviews__list reviews-list">
            {DBStore.reviews?.map((i, id) => (
              <a
                className="reviews__item"
                key={id}
                href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
                target={'_blank'}
              >
                <div className="reviews__item-title">{i.title}</div>
                <div className="reviews__item-sub">{i.sub}</div>
                <div className="reviews__item-rating">
                  {getStars(i.rating).map((s, si) => (
                    <Star key={si} />
                  ))}
                </div>
                <div
                  className="reviews__item-text"
                  dangerouslySetInnerHTML={{ __html: i.text }}
                ></div>
                <div className="reviews__item-read">
                  Read more <ArrowSquareOut />
                </div>
                <div className="reviews__item-status">
                  <div>
                    <Check />
                  </div>
                  Verified
                </div>
              </a>
            ))}
          </div>
        }
      />
    </section>
  )
})

export default Reviews
