import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'
import PageLinks from '../../../common/PageLinks'
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
    }, 1000)
    setTimeout(() => {
      table?.classList.add('animated')
    }, 3000)
  }, [GlobalState.locoScroll])

  return (
    <section className="fees-table">
      <PageLinks
        links={[
          { title: ContentStore.fees.mainPageTitle, link: '/' },
          { title: ContentStore.fees.pageTitle, link: '/fees' },
        ]}
      />
      <div style={{ overflow: 'hidden' }}>
        <div
          className="fees-table__title"
          dangerouslySetInnerHTML={{ __html: ContentStore.fees.title }}
        ></div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div
          className="fees-table__text"
          dangerouslySetInnerHTML={{ __html: ContentStore.fees.text }}
        ></div>
      </div>
      <div className="fees-table__table">
        {ContentStore.fees.table?.map((row, i) => (
          <div className="fees-table__table-row" key={i}>
            {row.map((r, id) => (
              <div
                className={classNames(
                  'fees-table__table-col',
                  !i && 'fees-table__table-title',
                  i && !id && 'fees-table__table-name',
                  i && id && 'fees-table__table-text',
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
