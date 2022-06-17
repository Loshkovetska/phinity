import { observer } from 'mobx-react'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Setting } from '../../../../assets/filter.svg'
import { ReactComponent as MSetting } from '../../../../assets/mob-sett.svg'
import DBStore from '../../../../stores/DBStore'
import { VideoComponent } from '../../blog/Videos'
import { useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'

const VideosList = observer(() => {
  const [show, setShow] = useState(6)
  const getEnd = (count: number) => {
    if (count <= 1) return 'video'
    else return 'videos'
  }

  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const videos = smooth!.querySelector('.videos-list')
        const title = smooth!.querySelector('.videos-list__top')
        const items = smooth!.querySelectorAll('.videos-list .videos__item')
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = videos!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 300) {
          videos?.classList.add('animated')
          title?.classList.add('animated')

          Array.from(items).forEach((i, id) => {
            i?.classList.add('animated')
            if (id >= 0 && id <= 5) {
              ;(i as HTMLDivElement).style.transitionDelay = `${id / 6 + 2}s`
            }
          })
        }

        if (window.innerWidth <= 768) {
          const btn = smooth!.querySelector('.videos .button')
          if (btn) {
            elemRect = btn!.getBoundingClientRect()
            offset = elemRect.top - bodyRect.top
            if (args.scroll.y > offset - 500) {
              btn?.classList.add('animated')
            }
          }
        }
      })
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (show - 6 >= 6) {
      const smooth = document.querySelector('.smooth')
      const items = smooth!.querySelectorAll('.videos-list .videos__item')
      if (!items) return
      setTimeout(() => {
        Array.from(items)
          .slice(show - 6, show)
          .forEach((i: any, id: number) => {
            i?.classList.add('animated')
            ;(i as HTMLDivElement).style.transitionDelay = `${id / 6 + 0.5}s`
          })
      }, 300)
    }
  }, [show])

  if (!DBStore.videos) return <></>
  return (
    <section className="videos-list">
      <div className="videos-list__top">
        <div className="videos-list__count">
          {DBStore.videos?.length} {getEnd(DBStore.videos?.length || 0)}
        </div>
        <Button
          text={
            <>
              {window.innerWidth > 768 ? <Setting /> : <MSetting />}
              {window.innerWidth > 768 && 'Filter'}
              {-1 > 0 && <span>(2)</span>}
            </>
          }
          click={() => {}}
          classname="black-border p11p24 filter"
        />
      </div>
      <div className="videos-list__list">
        {DBStore.videos?.slice(0, show)?.map((vi, i) => (
          <VideoComponent item={vi} key={i} />
        ))}
      </div>
      <div className="videos-list__bottom">
        <div className="videos-list__shown">
          Showing {show} of {DBStore.videos?.length}
        </div>
        {show + 6 <= DBStore.videos.length && (
          <Button
            text={'Load more'}
            click={() => {
              if (show + 6 > DBStore.videos!.length) return
              setShow(show + 6)
            }}
            classname="black-border p11p24"
          />
        )}
        {show == DBStore.videos.length && (
          <Button
            text={'Load less'}
            click={() => {
              setShow(6)
              GlobalState.locoScroll &&
                GlobalState.locoScroll.scrollTo(
                  document.querySelector('.videos-list'),
                  -100,
                )
            }}
            classname="black-border p11p24"
          />
        )}
      </div>
    </section>
  )
})

export default VideosList
