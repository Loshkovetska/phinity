import { observer } from 'mobx-react'
import { Link, useNavigate } from 'react-router-dom'
import { outputDate } from '../../../../methods/output'
import DBStore, { getPosts } from '../../../../stores/DBStore'
import PageLinks from '../../../common/PageLinks'
import './index.scss'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { useEffect, useMemo, useRef, useState } from 'react'
import Button from '../../../common/Button'
import { Post } from '../../../../api/mocks/posts'
import Pagination from '../../../common/Pagination'
import GlobalState from '../../../../stores/GlobalState'
import { ReactComponent as Setting } from '../../../../assets/mob-sett.svg'
import classNames from 'classnames'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import ContentStore from '../../../../stores/ContentStore'

const BlogContent = observer(() => {
  const navigate = useNavigate()
  const ref = useRef<any>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentItems, setCurrentItems] = useState<Array<Post> | null>([])
  const [tag, setTag] = useState('')
  const [cat, setCat] = useState('')
  const [show, setShow] = useState(false)
  const [showFilter, setFilter] = useState(false)
  const links = [
    {
      title: ContentStore.blog.mainPageTitle,
      link: '/',
    },
    {
      title: ContentStore.blog.pageTitle,
      link: '/blog',
    },
  ]

  const getCount = (cat: string) => {
    return DBStore.posts?.filter(
      (p) => p.cat.toLocaleLowerCase() == cat.toLocaleLowerCase(),
    ).length
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 8
    const lastPageIndex = firstPageIndex + 8
    return currentItems?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, currentItems])

  const getSorted = (posts: Array<Post>): Array<Post> => {
    let res: Array<Post> = JSON.parse(JSON.stringify(posts))

    return res.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
  }

  useEffect(() => {
    if (!DBStore.posts) return
    if (!tag.length && !cat.length) {
      setCurrentItems(DBStore.posts)
    }

    if (cat.length) {
      setCurrentItems([
        ...DBStore.posts?.filter(
          (p) => p.cat.toLocaleLowerCase() == cat.toLocaleLowerCase(),
        ),
      ])
    }
    if (tag.length) {
      setCurrentItems(DBStore.posts?.filter((p) => p.tags.includes(tag)))
    }

    setTimeout(() => {
      document
        .querySelectorAll('.blog-content .blogs__item')
        .forEach((b) => b.classList.add('animated'))
    }, 300)
  }, [tag, cat, DBStore.posts])

  useEffect(() => {
    if (showFilter) {
      document.querySelector('body')?.classList.add('filter')
      GlobalState.locoScroll && GlobalState.locoScroll.scrollTo(0, 0)
      GlobalState.locoScroll && GlobalState.locoScroll.stop()
      window.scrollTo(0, 0)
    } else {
      document.querySelector('body')?.classList.remove('filter')
      GlobalState.locoScroll && GlobalState.locoScroll.start()
    }
  }, [showFilter])

  useEffect(() => {
    if (GlobalState.locoScroll) {
      const smooth = document.querySelector('.smooth')
      const issues = smooth!.querySelector('.blog-content')
      const title = smooth!.querySelector('.blog-content__title')
      issues?.classList.add('animated')
      title?.classList.add('animated')
      const items = smooth!.querySelectorAll('.blog-content__aside *')
      const list = smooth!.querySelectorAll('.blog-content .blogs__item')

      list.forEach((i, id) => {
        i?.classList.add('animated')
        ;(i as HTMLDivElement).style.transitionDelay = `${id / 6 + 1}s`
      })
      setTimeout(() => {
        items.forEach((i, id) => {
          i?.classList.add('animated')
          ;(i as HTMLDivElement).style.transitionDelay = `0.7s`
        })
      }, 1000)
    }
  }, [GlobalState.locoScroll, DBStore.posts])

  useEffect(() => {
    const container = document.querySelector('.blog-content')
    const vect = document.querySelector('.blog-content__vector')
    const smooth = document.querySelector('.smooth')
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = vect!.getBoundingClientRect(),
      contRect = container!.getBoundingClientRect(),
      offset = contRect.top - bodyRect.top,
      offsetBottom = contRect.bottom - contRect.height / 2

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0)`
        }
      })
  }, [GlobalState.locoScroll, DBStore.posts])

  if (!DBStore.posts) return <></>

  return (
    <section className="blog-content">
      <PageLinks links={links} />
      <Vector className="blog-content__vector" />
      <div className="blog-content__container" ref={ref}>
        <div className="blog-content__top">
          <div style={{ overflow: 'hidden' }}>
            <div
              className="blog-content__title"
              dangerouslySetInnerHTML={{ __html: ContentStore.blog.title }}
            ></div>
          </div>
          <Button
            text={
              <>
                <Setting />
              </>
            }
            click={() => setFilter(true)}
            classname="black-border p11p24 filter"
          />
        </div>

        <div className="blog-content__row">
          <div className="blog-content__col">
            {currentTableData?.map((b, i) => (
              <Link className="blogs__item" to={`/post/${b.id}`} key={i}>
                <div className="blogs__item-date">{outputDate(b.date)}</div>
                <div className="blogs__item-title">{b.title}</div>
                <div className="blogs__item-text">{b.shortInfo}</div>
                <div className="blogs__item-bottom">
                  <div className="blogs__item-cat">
                    <p>
                      {ContentStore.blog.categoryTitle}: {b.cat + ' '}{' '}
                    </p>{' '}
                    <span>
                      {''} ({getCount(b.cat)})
                    </span>
                  </div>
                  <div className="blogs__item-more">
                    Read more <Arrow />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            className={classNames('blog-content__aside', showFilter && 'show')}
          >
            <Close
              onClick={() => setFilter(false)}
              className="blog-content__aside-close"
            />
            <div className="blog-content__aside-title">
              {ContentStore.blog.tagTitle}
            </div>
            <div className="blog-content__aside-list wrap">
              {DBStore.tags?.map((t, i) => (
                <div
                  className="blog-content__aside-text"
                  key={i}
                  onClick={() => {
                    setTag(t)
                    setCat('')
                  }}
                >
                  {t}
                  {i + 1 != DBStore.tags?.length && ','}
                </div>
              ))}
            </div>
            <div className="blog-content__aside-title">
              {ContentStore.blog.recentTitle}
            </div>
            <div className="blog-content__aside-list">
              {getSorted(DBStore.posts)
                .slice(0, 5)
                .map((p, i) => (
                  <Link
                    className="blog-content__aside-text"
                    key={i}
                    to={`/post/${p.id}`}
                  >
                    {p.title}
                  </Link>
                ))}
            </div>
            <div className="blog-content__aside-title cat">
              {ContentStore.blog.categoryTitle}
            </div>
            <div className="blog-content__aside-list">
              {DBStore.categories
                ?.slice(0, show ? DBStore.categories?.length : 7)
                .map((c, i) => (
                  <div
                    className="blog-content__aside-text"
                    key={i}
                    onClick={() => {
                      setCat(c)
                      setTag('')
                    }}
                  >
                    {c} <span>({getCount(c)})</span>
                  </div>
                ))}
            </div>
            <div
              className="blog-content__aside-all"
              onClick={() => {
                if (show) {
                  const catTop = document.querySelector(
                    '.blog-content__aside-title.cat',
                  )
                  GlobalState.locoScroll &&
                    GlobalState.locoScroll.scrollTo(catTop)
                }
                setShow(!show)
              }}
            >
              {!show ? 'See all' : 'Hide'}
            </div>
            <div className="blog-content__aside-book">
              <h3
                dangerouslySetInnerHTML={{
                  __html: ContentStore.blog.book.title,
                }}
              ></h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: ContentStore.blog.book.text,
                }}
              ></p>
              <Button
                classname="light-blue"
                text={ContentStore.blog.book.buttonTitle}
                click={() =>
                  window.open(ContentStore.blog.book.buttonLink, '__blank')
                }
              />
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={(value) => {
            setCurrentPage(value)
            ref.current &&
              GlobalState.locoScroll &&
              GlobalState.locoScroll.scrollTo(ref.current, 0)
          }}
          data={currentItems as any}
          itemsPerPage={8}
        />
        {window.innerWidth <= 1024 && (
          <div className="blog-content__aside-book">
            <h3
              dangerouslySetInnerHTML={{
                __html: ContentStore.blog.book.title,
              }}
            ></h3>
            <p
              dangerouslySetInnerHTML={{
                __html: ContentStore.blog.book.text,
              }}
            ></p>
            <Button
              classname="light-blue"
              text={ContentStore.blog.book.buttonTitle}
              click={() =>
                window.open(ContentStore.blog.book.buttonLink, '__blank')
              }
            />
          </div>
        )}
      </div>
    </section>
  )
})

export default BlogContent
