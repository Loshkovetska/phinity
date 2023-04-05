import { observer } from 'mobx-react'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Setting } from '../../../../assets/filter.svg'
import { ReactComponent as MSetting } from '../../../../assets/mob-sett.svg'
import DBStore from '../../../../stores/DBStore'
import { VideoComponent } from '../../blog/Videos'
import { useEffect, useState } from 'react'
import GlobalState, {
  changeTheraFilterState,
} from '../../../../stores/GlobalState'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import classNames from 'classnames'
import ContentStore from '../../../../stores/ContentStore'
import { Video } from '../../../../api/mocks/videos'

const VideosList = observer(() => {
  const [cat, setCat] = useState('')
  const [showCats, setShowCats] = useState(false)
  const [showFilter, setFilter] = useState(false)
  const [show, setShow] = useState(1)

  const [currentItems, setItems] = useState<Array<Video>>(Array())
  const getEnd = (count: number) => {
    if (count <= 1) return 'video'
    else return 'videos'
  }

  const reset = () => {
    setCat('')
    setShow(1)
  }

  useEffect(() => {
    if (showFilter) {
      document.querySelector('body')?.classList.add('filter')
      window.scrollTo(0, 0)
    } else {
      document.querySelector('body')?.classList.remove('filter')
    }
  }, [showFilter])

  const getCount = (cat: string) => {
    return DBStore.videos?.filter(
      (p) => p.category?.toLocaleLowerCase() == cat.toLocaleLowerCase(),
    ).length
  }

  useEffect(() => {
    window.addEventListener('scroll', (args: any) => {
      const smooth = document.querySelector('.smooth')
      const videos = smooth!.querySelector('.videos-list')
      const title = smooth!.querySelector('.videos-list__top')
      const items = smooth!.querySelectorAll('.videos-list .videos__item')

      const itemsAside = smooth!.querySelectorAll('.blog-content__aside *')

      setTimeout(() => {
        itemsAside.forEach((i, id) => {
          setTimeout(() => {
            i?.classList.add('animated')
          }, 700)
        })
      }, 1000)

      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = videos!.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (window.scrollY > offset - 2000) {
        videos?.classList.add('animated')
        title?.classList.add('animated')

        // Array.from(items).forEach((i, id) => {
        //   i?.classList.add('animated')
        //   if (id >= 0 && id <= 5) {
        //     ;(i as HTMLDivElement).style.transitionDelay = `${id / 8 + 0.5}s`
        //   }
        // })
      }

      if (window.innerWidth <= 768) {
        const btn = smooth!.querySelector('.videos .button')
        if (btn) {
          elemRect = btn!.getBoundingClientRect()
          offset = elemRect.top - bodyRect.top
          if (window.scrollY > offset - 500) {
            btn?.classList.add('animated')
          }
        }
      }
    })
  }, [DBStore.videos])

  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const items = smooth!.querySelectorAll('.videos-list .videos__item')

    if (!items) return
    setTimeout(() => {
      Array.from(items)
        .slice(show * 6 - 6, show * 6 + 1)
        .forEach((i: any, id: number) => {
          i?.classList.add('animated')
          ;(i as HTMLDivElement).style.transitionDelay = `${id / 6 + 0.5}s`
        })
    }, 300)
  }, [show, cat, currentItems])

  useEffect(() => {
    if (!DBStore.videos) return
    if (cat.length) {
      const uts = DBStore.videos.filter((f) => f.category == cat)
      setItems(uts)
    } else setItems(DBStore.videos)
  }, [cat, DBStore.videos])

  if (!DBStore.videos || !DBStore.videosFilter) return <></>

  return (
    <section className="videos-list">
      <div className="videos-list__left">
        <div className="videos-list__top">
          {/* <div className="videos-list__count">
            {DBStore.videos?.length} {getEnd(DBStore.videos?.length || 0)}
          </div> */}
          {/* {window.innerWidth <= 1024 && (
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
          )} */}
        </div>
        <div className="videos-list__list">
          {currentItems?.slice(0, show * 6)?.map((vi: any, i: number) => (
            <VideoComponent item={vi} key={i} />
          ))}
        </div>
        <div className="videos-list__bottom">
          <div className="videos-list__shown">
            Showing{' '}
            {show * 6 > currentItems?.length ? currentItems?.length : show * 6}{' '}
            of {currentItems?.length}
          </div>
          {show * 6 < currentItems.length && (
            <Button
              text={'Load more'}
              click={() => {
                setShow(show + 1)
              }}
              classname="black-border p11p24 f14"
            />
          )}
        </div>
      </div>
      <div className={classNames('blog-content__aside', showFilter && 'show')}>
        <Close
          onClick={() => setFilter(false)}
          className="blog-content__aside-close"
        />
        <span className="new-videos__subtitle">
          {DBStore.videos?.length}{' '}
          {!DBStore.videos?.length || DBStore.videos?.length > 1
            ? 'videos'
            : 'video'}
        </span>
        <div className="blog-content__aside-title cat">
          {ContentStore.videos.categoryTitle}
          <span onClick={reset}> Clear</span>
        </div>
        <div className="blog-content__aside-list">
          {DBStore.videosFilter?.list
            ?.slice(0, showCats ? DBStore.videosFilter?.list?.length : 7)
            .map((c: any, i: number) => (
              <div
                className={classNames(
                  'blog-content__aside-text',
                  cat == c && 'active',
                )}
                key={i}
                onClick={() => {
                  setCat(c)
                  setShow(1)
                  const catTop = document.querySelector(
                    '.blog-content__aside-title.cat',
                  )

                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                  setFilter(false)
                }}
              >
                {c} <span>({getCount(c)})</span>
              </div>
            ))}
        </div>
        {DBStore.videosFilter.list?.length > 7 ? (
          <div
            className="blog-content__aside-all"
            onClick={() => {
              if (showCats) {
                const catTop = document.querySelector(
                  '.blog-content__aside-title.cat',
                )

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }

              setShowCats(!showCats)
            }}
          >
            {!showCats ? 'See All' : 'Hide'}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  )
})

export default VideosList
