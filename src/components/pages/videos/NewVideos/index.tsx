import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import ContentStore from '../../../../stores/ContentStore'
import DBStore from '../../../../stores/DBStore'
import GlobalState, {
  changeTheraFilterState,
} from '../../../../stores/GlobalState'
import Button from '../../../common/Button'
import PageLinks from '../../../common/PageLinks'
import VideosList from '../VideosiList'
import './index.scss'
import { ReactComponent as Setting } from '../../../../assets/filter.svg'
import { ReactComponent as MSetting } from '../../../../assets/mob-sett.svg'
const NewVideos = observer(() => {
  const [isLoad, setLoad] = useState(false)
  useEffect(() => {
    if (DBStore.videos) {
      setTimeout(() => {
        document.querySelector('.new-videos')?.classList.add('animated')
      }, 300)

      setTimeout(() => {
        document.querySelector('.new-videos__title')?.classList.add('animated')
      }, 500)

      setTimeout(() => {
        document
          .querySelector('.new-videos__subtitle')
          ?.classList.add('animated')
      }, 700)

      setTimeout(() => {
        const items = document!.querySelectorAll('.videos-list .videos__item')
        Array.from(items).forEach((i, id) => {
          i?.classList.add('animated')
          if (id >= 0 && id <= 5) {
            ;(i as HTMLDivElement).style.transitionDelay = `${id / 8 + 0.5}s`
          }
        })
      }, 1000)
    }
  }, [DBStore.videos])

  if (!DBStore.videos) return <></>

  let main = '',
    thera = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
    thera = linksL.find((l: any) => l.id == 268).link
  }
  return (
    <section className="new-videos">
      <PageLinks
        links={[
          { title: ContentStore.videos?.mainPageTitle, link: main },
          { title: ContentStore.videos?.pageTitle, link: '/video' },
        ]}
      />
      <div className="new-videos__top">
        <div style={{ overflow: 'hidden' }}>
          <div className="new-videos__title">
            {ContentStore.videos.content.title}
          </div>
        </div>
        {/* <span className="new-videos__subtitle">
          {DBStore.videos?.length}{' '}
          {!DBStore.videos?.length || DBStore.videos?.length > 1
            ? 'videos'
            : 'video'}
        </span> */}
        {window.innerWidth <= 1024 && (
          <Button
            text={
              <>
                {window.innerWidth > 768 ? <Setting /> : <MSetting />}
                {window.innerWidth > 768 && 'Filter'}
                {window.innerWidth > 768 && GlobalState.filterCount ? (
                  <span>({GlobalState.filterCount})</span>
                ) : (
                  <></>
                )}
              </>
            }
            click={changeTheraFilterState}
            classname="black-border p11p24 filter"
          />
        )}
      </div>
      <VideosList />
    </section>
  )
})

export default NewVideos
