import { observer } from 'mobx-react'
import { outputDate } from '../../../../methods/output'
import DBStore from '../../../../stores/DBStore'
import PageLinks from '../../../common/PageLinks'
import './index.scss'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { useEffect, useMemo, useRef, useState } from 'react'
import Button from '../../../common/Button'
import { Post } from '../../../../api/mocks/posts'
import Pagination from '../../../common/Pagination'
import GlobalState, {
  changeTheraFilterState,
} from '../../../../stores/GlobalState'
import { ReactComponent as Setting } from '../../../../assets/mob-sett.svg'
import classNames from 'classnames'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import ContentStore from '../../../../stores/ContentStore'
import { VideoComponent } from '../Videos'

const BlogContent = observer(() => {
  const [showBottom, setShowBottom] = useState(false)
  const ref = useRef<any>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentItems, setCurrentItems] = useState<Array<Post> | null>([])
  const [cat, setCat] = useState('')
  const [show, setShow] = useState(false)
  const [showFilter, setFilter] = useState(false)

  const getCount = (cat: string) => {
    return DBStore.posts?.filter(
      (p) => p.cat.toLocaleLowerCase() === cat.toLocaleLowerCase(),
    ).length
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 5
    const lastPageIndex = firstPageIndex + 5
    return currentItems?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, currentItems])

  useEffect(() => {
    if (!DBStore.posts) return
    if (!cat.length) {
      setCurrentItems(DBStore.posts)

      setTimeout(() => {
        setShowBottom(true)
      }, 1500)
    }

    if (cat.length) {
      setCurrentItems([
        ...DBStore.posts?.filter(
          (p) => p.cat.toLocaleLowerCase() === cat.toLocaleLowerCase(),
        ),
      ])
    }

    setTimeout(() => {
      document
        .querySelectorAll('.blog-content .blogs__item')
        .forEach((b) => b.classList.add('animated'))
    }, 300)
  }, [cat, DBStore.posts, currentPage])

  useEffect(() => {
    if (showFilter) {
      document.querySelector('body')?.classList.add('filter')
      window.scrollTo(0, 0)
    } else {
      document.querySelector('body')?.classList.remove('filter')
    }
  }, [showFilter])

  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const issues = smooth!.querySelector('.blog-content')
    const title = smooth!.querySelector('.blog-content__title')

    if (!smooth || !issues) return

    const bodyRect = smooth.getBoundingClientRect().top,
      rect = issues.getBoundingClientRect().top

    issues?.classList.add('animated')
    title?.classList.add('animated')
    const items = smooth!.querySelectorAll('.blog-content__aside *')
    const list = smooth!.querySelectorAll('.blog-content .blogs__item')

    list.forEach((i, id) => {
      setTimeout(() => {
        i?.classList.add('animated')
      }, id / 6 + 1000)
    })
    setTimeout(() => {
      items.forEach((i, id) => {
        setTimeout(() => {
          i?.classList.add('animated')
        }, 700)
      })
    }, 1000)

    window.addEventListener('scroll', () => {
      issues?.classList.add('animated')
      title?.classList.add('animated')
      const items = smooth!.querySelectorAll('.blog-content__aside *')
      const list = smooth!.querySelectorAll('.blog-content .blogs__item')

      list.forEach((i, id) => {
        setTimeout(() => {
          i?.classList.add('animated')
        }, id / 6 + 1000)
      })
      setTimeout(() => {
        items.forEach((i, id) => {
          setTimeout(() => {
            i?.classList.add('animated')
          }, 700)
        })
      }, 1000)
    })
  }, [DBStore.posts])

  useEffect(() => {
    if (window.innerWidth <= 768) return

    const container = document.querySelector('.blog-content')
    const vect = document.querySelector('.blog-content__vector')
    const smooth = document.querySelector('.smooth')

    if (!smooth || !vect || !container) return

    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = vect!.getBoundingClientRect(),
      contRect = container!.getBoundingClientRect(),
      offset = contRect.top - bodyRect.top,
      offsetBottom = contRect.bottom - contRect.height / 2

    window.addEventListener('scroll', (args: any) => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        requestAnimationFrame(() => {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            window.scrollY - offset
          }px, 0)`
        })
      }
    })
  }, [DBStore.posts])

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('blog')) {
        const param = localStorage.getItem('blog')
        setCat(param!)
      }
    }, 1000)
  }, [])

  const getCountByCat = (cat: string) => {
    return DBStore.posts?.filter((d) => d.cat == cat)?.length || 0
  }

  const reset = () => {
    localStorage.removeItem('blog')
    setCat('')
    setCurrentPage(1)
  }

  let main = '',
    vacanc = '',
    blog = ''
  const linksL = GlobalState.links
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
    vacanc = linksL.find((l: any) => l.id == 262).link
    blog = linksL.find((l: any) => l.id == 272).link
  }

  const links = [
    {
      title: ContentStore.blog?.mainPageTitle || 'Home',
      link: main,
    },
    {
      title: ContentStore.blog?.pageTitle || 'Blog',
      link: '/blog',
    },
  ]

  return (
    <>
      <section className="blog-content">
        {ContentStore.blog && <PageLinks links={links} />}
        <Vector className="blog-content__vector" />
        <div className="blog-content__container" ref={ref}>
          <div className="blog-content__top">
            <div style={{ overflow: 'hidden' }}>
              <h1
                className="blog-content__title"
                dangerouslySetInnerHTML={{ __html: ContentStore.blog?.title }}
              ></h1>
            </div>
            <Button
              text={
                <>
                  <Setting />
                </>
              }
              click={changeTheraFilterState}
              classname="black-border p11p24 filter"
            />
          </div>

          <div className="blog-content__row">
            <div className="blog-content__col">
              {currentTableData?.map((b, i) => (
                <div className="blogs__item" key={i}>
                  <div className="blogs__item-date">
                    {b.author?.name && (
                      <>
                        {' '}
                        <a
                          href={b.author.link}
                          target={
                            b.author.link?.includes('https') ? '_blank' : ''
                          }
                        >
                          {b.author.name}
                        </a>{' '}
                        &bull;{' '}
                      </>
                    )}
                    {outputDate(b.date)}{' '}
                  </div>
                  <a className="blogs__item-top" href={`${blog}/${b.link}`}>
                    <div className="blogs__item-img">
                      {<img src={b.img || ''} alt={b.title} />}
                    </div>
                    <div className="blogs__item-title">{b.title}</div>
                  </a>{' '}
                  <a className="blogs__item-text" href={`${blog}/${b.link}`}>
                    <p dangerouslySetInnerHTML={{ __html: b.shortInfo }}></p>
                  </a>
                  <div className="blogs__item-bottom">
                    <div className="blogs__item-cat">
                      <p>Category: {b.cat + ' '} </p>{' '}
                      <span>({getCount(b.cat)})</span>
                    </div>
                    <a className="blogs__item-more" href={`${blog}/${b.link}`}>
                      Read more <Arrow />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={classNames(
                'blog-content__aside',
                showFilter && 'show',
              )}
            >
              <Close
                onClick={() => setFilter(false)}
                className="blog-content__aside-close"
              />

              <div className="blog-content__aside-title cat">
                {ContentStore.blog?.categoryTitle}
                <span onClick={reset}> Clear</span>
              </div>
              <div className="blog-content__aside-list">
                {DBStore.postCategories
                  ?.slice(0, show ? DBStore.postCategories?.length : 7)
                  .map((c, i) => (
                    <div
                      className={classNames(
                        'blog-content__aside-text',
                        cat == c && 'active',
                      )}
                      key={i}
                      onClick={() => {
                        setCat(c)
                        setCurrentPage(1)
                        localStorage.clear()
                        setFilter(false)
                      }}
                    >
                      {c} <span>({getCount(c)})</span>
                    </div>
                  ))}
              </div>
              {DBStore.postCategories && DBStore.postCategories?.length > 7 ? (
                <div
                  className="blog-content__aside-all"
                  onClick={() => {
                    if (show) {
                      const catTop = document.querySelector(
                        '.blog-content__aside-title.cat',
                      )
                      if (!catTop) return
                      const smooth = document.querySelector('.smooth')
                      if (!smooth) return

                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      })
                    }

                    setShow(!show)
                  }}
                >
                  {!show ? 'See All' : 'Hide'}
                </div>
              ) : (
                <></>
              )}

              <div className="blog-content__aside-visible">
                <div className="blog-content__aside-title">
                  {ContentStore.blog?.blogTitle}
                </div>
                <div className="blog-content__aside-list">
                  {DBStore.popularPosts?.slice(0, 1).map((b, i) => (
                    <div className="blogs__item" key={i}>
                      <div className="blogs__item-date">
                        {b.author?.name && (
                          <>
                            {' '}
                            <a
                              href={b.author.link}
                              target={
                                b.author.link?.includes('https') ? '_blank' : ''
                              }
                            >
                              {b.author.name}
                            </a>{' '}
                            &bull;{' '}
                          </>
                        )}
                        {outputDate(b.date)}{' '}
                      </div>
                      <a
                        className="blogs__item-top"
                        href={`${blog}/${b.link}`}
                      >
                        <div className="blogs__item-title">{b.title}</div>
                      </a>{' '}
                      <div className="blogs__item-text">
                        <p
                          dangerouslySetInnerHTML={{ __html: b.shortInfo }}
                        ></p>
                      </div>
                      <div className="blogs__item-bottom">
                        <div className="blogs__item-cat">
                          <p>Category: {b.cat + ' '} </p>{' '}
                          <span>({getCountByCat(b.cat)})</span>
                        </div>
                        <a
                          className="blogs__item-more"
                          href={`${blog}/${b.link}`}
                        >
                          Read more <Arrow />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="blog-content__aside-visible">
                <div className="blog-content__aside-title">
                  {ContentStore.blog.video.title}
                </div>
                <div className="blog-content__aside-list">
                  {DBStore.popularVideos?.slice(0, 1).map((b, i) => (
                    <VideoComponent item={b} key={i} />
                  ))}
                </div>
              </div>

              <div className="blog-content__aside-book">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: ContentStore.blog?.book.title,
                  }}
                ></h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: ContentStore.blog?.book.text,
                  }}
                ></p>
                <a
                  className="button light-blue"
                  href={ContentStore.book.buttonLink}
                  target="_blank"
                >
                  <div className="button__text">
                    {ContentStore.book.buttonText}
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={(value) => {
              setCurrentPage(value)
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
            data={currentItems as any}
            itemsPerPage={5}
          />
          {window.innerWidth <= 1024 && showBottom && (
            <div className="blog-content__aside-book">
              <h3
                dangerouslySetInnerHTML={{
                  __html: ContentStore.blog?.book.title,
                }}
              ></h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: ContentStore.blog?.book.text,
                }}
              ></p>
              <a
                className="button light-blue"
                href={ContentStore.book.buttonLink}
                target="_blank"
              >
                <div className="button__text">
                  {ContentStore.book.buttonText}
                </div>
              </a>
            </div>
          )}
        </div>
      </section>
      <div
        className="blur__bg"
        onClick={() => {
          if (document.body.classList.contains('filter')) {
            setFilter(false)
          }
        }}
      ></div>
    </>
  )
})

export default BlogContent
