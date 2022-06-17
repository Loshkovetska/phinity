import CustomSlider from '../../../common/CustomSlider'
import './index.scss'
import { ReactComponent as Star } from '../../../../assets/ic_star.svg'
import { ReactComponent as Check } from '../../../../assets/check.svg'
import GlobalState from '../../../../stores/GlobalState'
import { useEffect } from 'react'
import { observer } from 'mobx-react'
import DBStore from '../../../../stores/DBStore'
import { useLocation } from 'react-router'
import ContentStore from '../../../../stores/ContentStore'

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
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const issues = smooth!.querySelector('.reviews')
        const title = smooth!.querySelector('.reviews__title')
        const text = smooth!.querySelector('.reviews__text')
        const items = smooth!.querySelectorAll('.reviews__item')
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = issues!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top
        if (args.scroll.y > offset - 500) {
          issues?.classList.add('animated')
        }
        if (args.scroll.y > offset - 300) {
          title?.classList.add('animated')
          text?.classList.add('animated')

          items.forEach((i, id) => {
            i?.classList.add('animated')
            ;(i as HTMLDivElement).style.transitionDelay = `${id / 6 + 1.5}s`
          })
        }
      })
    }
  }, [GlobalState.locoScroll])


  return (
    <section className="reviews">
      <div style={{ overflow: 'hidden' }}>
        <div
          className="reviews__title"
          dangerouslySetInnerHTML={{ __html: dt.title }}
        ></div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div
          className="reviews__text"
          dangerouslySetInnerHTML={{ __html: dt.text }}
        ></div>
      </div>
      <div className="reviews__list">
        <CustomSlider width={365} countItems={DBStore.reviews?.length || 0}>
          {DBStore.reviews?.map((i, id) => (
            <div className="reviews__item" key={id}>
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
              <div className="reviews__item-status">
                <div>
                  <Check />
                </div>
                Verify
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>
    </section>
  )
})

export default Reviews
