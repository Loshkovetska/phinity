import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'
import PageLinks from '../../../common/PageLinks'

import ReviewsIO from '../../../../assets/ex/reviews-mobile.svg'

import { ReactComponent as BlueStar } from '../../../../assets/ex/star.svg'

import './index.scss'
const FeesTable = observer(() => {
  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const about = smooth!.querySelector('.fees-table')
    const title = smooth!.querySelector('.fees-table__title')
    const text = smooth!.querySelector('.fees-table__text')

    const table = smooth!.querySelector('.fees-table__table')
    about?.classList.add('animated')
    setTimeout(() => {
      title?.classList.add('animated')
      text?.classList.add('animated')
    }, 500)
    setTimeout(() => {
      table?.classList.add('animated')
    }, 2000)
  }, [ContentStore.fees])

  const getStars = (count: number) => {
    return new Array(Math.ceil(count)).fill(0, 0)
  }

  let main = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
  }
  return (
    <section className="fees-table">
      <PageLinks
        links={[
          { title: ContentStore.fees.mainPageTitle, link: main },
          { title: ContentStore.fees.pageTitle, link: '/fees' },
        ]}
      />
      <div style={{ overflow: 'hidden' }}>
        <h1
          className="fees-table__title"
          dangerouslySetInnerHTML={{ __html: ContentStore.fees.title }}
        ></h1>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div
          className="fees-table__text"
          dangerouslySetInnerHTML={{ __html: ContentStore.fees.text }}
        ></div>
      </div>

      {GlobalState.rating && (
        <a
          href="https://www.reviews.co.uk/company-reviews/store/phinity-therapy?utm_source=phinity-therapy&utm_medium=widget&utm_campaign=text-banner"
          target={'_blank'}
          className="animated fadeIn delay-2s intro__widget"
        >
          <div className="intro__widget-col">
            <div className="intro__widget-stars">
              {' '}
              <img
                src={ReviewsIO}
                alt={window.location.href}
                className="intro__widget-icon"
              />
              {getStars(GlobalState.rating?.average_rating).map((s, i) => (
                <BlueStar key={i} className="intro__widget-star" />
              ))}
            </div>
            <span>
              Read our{' '}
              <span className="intro__widget-count">
                {GlobalState.rating?.num_ratings}
              </span>
              {GlobalState.rating?.num_ratings > 1 ||
              !GlobalState.rating?.num_ratings
                ? 'reviews'
                : 'review'}{' '}
            </span>
          </div>
        </a>
      )}
      <div className="fees-table__table">
        {ContentStore.fees.table?.map((row:any, i) => (
          <div className="fees-table__table-row" key={i}>
            {row?.map((r:any, id:number) => (
              <div
                className={classNames(
                  'fees-table__table-col',
                  !i && 'fees-table__table-title',
                  i && !id && 'fees-table__table-name',
                  i && id && 'fees-table__table-text ',
                )}
                key={id}
                dangerouslySetInnerHTML={{
                  __html: r,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
})

export default FeesTable
