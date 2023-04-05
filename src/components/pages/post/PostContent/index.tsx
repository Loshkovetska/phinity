import { observer } from 'mobx-react'
import { Link, useNavigate } from 'react-router-dom'
import { Post } from '../../../../api/mocks/posts'
import { outputFullDate } from '../../../../methods/output'
import DBStore, { getPost } from '../../../../stores/DBStore'
import Button from '../../../common/Button'
import PageLinks from '../../../common/PageLinks'
import './index.scss'
import { ReactComponent as ArrowSquareOut } from '../../../../assets/ex/ArrowSquareOut.svg'
import { ReactComponent as Copy } from '../../../../assets/socials/copy.svg'
import { ReactComponent as Setting } from '../../../../assets/mob-sett.svg'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import { Fragment, useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import classNames from 'classnames'
import ContentStore from '../../../../stores/ContentStore'
import { PostArrow } from '../../video/VideoIntro'

const PostContent = observer(() => {
  const [showFilter, setFilter] = useState(false)
  const [show, setShow] = useState(false)
  const links = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: DBStore.post?.title,
      link: `/${DBStore.post?.link}`,
    },
  ]

  const getSorted = (): Array<Post> => {
    let res: Array<Post> = JSON.parse(JSON.stringify(DBStore.posts!))

    return res.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
  }

  const copy = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href)
    }
  }
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
    const list = smooth!.querySelectorAll('.post-content h2,.post-content p, .post-content h3')
    const issues = smooth!.querySelector('.post-content')
    const title = smooth!.querySelector('.post-content__title')
    const top = smooth!.querySelector('.post-content__top-bottom')
    issues?.classList.add('animated')
    title?.classList.add('animated')

    setTimeout(() => {
      setTimeout(() => {
        top?.classList.add('animated')
      }, 200)
    }, 1500)

    const col = smooth!.querySelector('.post-content__col')
    const navigate = smooth!.querySelector('.post-content__navigate')
    const social = smooth!.querySelector('.post-content__top-social')
    const items = smooth!.querySelector('.post-content__aside')
    const row = document.querySelector('.post-content__row')
    const img = document.querySelectorAll('.post-content img')

    setTimeout(() => {
      setTimeout(() => {
        col?.classList.add('animated')
      }, 500)
      setTimeout(() => {
        social?.classList.add('animated')
      }, 800)
      setTimeout(() => {
        row?.classList.add('animated')
      }, 1000)

      setTimeout(() => {
        items?.classList.add('animated')
        // items.forEach((i, id) => {
        //   setTimeout(() => {
        //     i?.classList.add('animated')
        //   }, (id / 8) * 1000)
        // })
      }, 1500)
      const mainItems = document.querySelectorAll(
        '.post-content__main h3, .post-content__main p,.post-content__main img, .post-content__main h2',
      )
      setTimeout(() => {
        ;(mainItems as any)?.forEach((element: any) => {
          ;(element as HTMLElement).classList.add('animated')
        })
      }, 1000)
    }, 0)
  }, [DBStore.post])

  useEffect(() => {
    setTimeout(() => {
      const rows = document.querySelectorAll('.post-content__main>div')
      if (!rows) return

      rows.forEach((r, i) => (r.id = `post-content-row${i}`))
    }, 100)
  }, [DBStore.post])

  useEffect(() => {
    const container = document.querySelector('.post-content')
    const vect = document.querySelector('.post-content__vector')
    const smooth = document.querySelector('.smooth')
    if (!smooth) return
    if (!vect) return

    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = vect!.getBoundingClientRect(),
      contRect = container!.getBoundingClientRect(),
      offset = contRect.top - bodyRect.top,
      offsetBottom = contRect.bottom - contRect.height / 2

    window.addEventListener('scroll', (args: any) => {
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${
          window.scrollY - offset
        }px, 0)`
      }
    })
  }, [])

  if (!DBStore.post) return <></>
  if (!DBStore.posts) return <></>
  if (!ContentStore.post) return <></>

  const getIndex = () => {
    let idx = 0
    DBStore.posts?.forEach((v, i) => {
      if (v.id == DBStore.post!.id) idx = i
    })

    return idx
  }

  const dt = DBStore.posts

  const linksL = GlobalState.links
  let videos = '',
    blog = ''
  if (linksL) {
    videos = linksL.find((l: any) => l.id == 644).link
    blog = linksL.find((l: any) => l.id == 272).link
  }
  return (
    <>
      {' '}
      <section className="post-content">
        <PageLinks links={links} />
        <Vector className="post-content__vector" />
        <div className="post-content__container">
          <div className="post-content__top">
            <div className="post-content__top-block">
              <div style={{ overflow: 'hidden', paddingBottom: 3 }}>
                <h1 className="post-content__title">{DBStore.post?.title}</h1>
              </div>
              <div className="post-content__top-bottom">
                <div className="post-content__author">
                  <div className="post-content__author-img">
                    <img
                      src={DBStore.post?.author.src}
                      alt={DBStore.post?.title}
                    />
                  </div>
                  <div className="post-content__author-info">
                    <div className="post-content__author-title">
                      {DBStore.post?.author.name}
                    </div>
                    <div className="post-content__author-position">
                      {DBStore.post?.author.area}
                    </div>
                    {window.innerWidth <= 1024 && (
                      <div className="post-content__top-text">
                        {outputFullDate(
                          DBStore.post?.date || new Date().toDateString(),
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="post-content__top-col">
                  {window.innerWidth > 1024 && (
                    <div className="post-content__top-text">
                      Posted{' '}
                      {outputFullDate(
                        DBStore.post?.date || new Date().toDateString(),
                      )}
                    </div>
                  )}
                  {window.innerWidth > 1024 && (
                    <span className="post-content__top-separator">{'|'}</span>
                  )}
                  <div
                    className="post-content__top-text category"
                    onClick={() => {
                      localStorage.setItem('blog', `${DBStore.post?.cat}`)
                      window.location.href = blog
                    }}
                  >
                    Categories: {DBStore.post?.cat}
                  </div>
                  {window.innerWidth <= 1024 && (
                    <span className="post-content__top-separator">{'|'}</span>
                  )}
                  {window.innerWidth <= 1024 && (
                    <div className="post-content__aside-follow">
                      {(ContentStore.menu as any).follow?.map(
                        (f: any, i: number) => (
                          <span
                            key={i}
                            onClick={() => {
                              window.open(f.link, '__blank')
                            }}
                          >
                            <img src={f.icon} alt={DBStore.post?.title} />
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {window.innerWidth <= 1024 && (
              <Button
                text={<Setting />}
                click={() =>
                   setFilter(true)

                }
                classname="black-border p11p24 filter"
              />
            )}
            {window.innerWidth > 1024 && (
              <div className="post-content__top-social">
                <div className="blog-content__aside-title">
                  {' '}
                  {ContentStore.post.followTitle}
                </div>

                <div className="post-content__aside-follow">
                  {(ContentStore.menu as any).follow?.map(
                    (f: any, i: number) => (
                      <a key={i} target="__blank" href={f.link}>
                        <img src={f.icon} alt={DBStore.post?.title} />
                      </a>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="post-content__row">
            <div className="post-content__col">
              <div className="post-content__main">
                {DBStore.post?.img?.length ? (
                  <img
                    src={DBStore.post?.img || ''}
                    alt={DBStore.post?.title}
                  />
                ) : (
                  <></>
                )}

                {DBStore.post?.content.map((c, ind) => (
                  <div key={ind}>
                    <div>
                      <h2>{c.title}</h2>
                    </div>
                    <div>
                      <p dangerouslySetInnerHTML={{ __html: c.text }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="blur__bg" onClick={() => setFilter(false)}></div>

            <div
              className={classNames(
                'post-content__aside',
                showFilter && 'show',
              )}
            >
              <Close
                onClick={() => setFilter(false)}
                className="blog-content__aside-close"
              />
              {window.innerWidth > 1024 && (
                <div className="post-content__navigate">
                  <div className="blog-content__aside-title">
                    Table of Contents
                  </div>
                  {DBStore.post?.content.map((c, i) => (
                    <div
                      className="blog-content__aside-text"
                      key={i}
                      onClick={() => {
                        const block = document.querySelector(
                          `#post-content-row${i}`,
                        )
                        if (!block) return
                        const smooth = document.querySelector('.smooth')
                        if (!smooth) return
                        window.scrollTo({
                          top:
                            block.getBoundingClientRect().top -
                            smooth.getBoundingClientRect().top -
                            50,
                          behavior: 'smooth',
                        })
                      }}
                    >
                      {c.title}
                    </div>
                  ))}
                </div>
              )}
              {DBStore.popularPosts && DBStore.popularPosts.length && (
                <>
                  <div className="blog-content__aside-title">
                    {ContentStore.post.blogTitle}
                  </div>
                  <ul className="blog-content__aside-list posts">
                    {DBStore.popularPosts?.slice(0, 5).map((p, i) => (
                      <li key={i}>
                        {' '}
                        <a
                          className="blog-content__aside-text blog-content__aside-post"
                          href={`${blog}/${p.link}`}
                        >
                          {p.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {DBStore.popularVideos && DBStore.popularVideos.length && (
                <>
                  <div className="blog-content__aside-title">
                    {ContentStore.post.videoTitle}
                  </div>
                  <ul className="blog-content__aside-list posts">
                    {DBStore.popularVideos?.slice(0, 5).map((p, i) => (
                      <li key={i}>
                        {' '}
                        <a
                          className="blog-content__aside-text blog-content__aside-video"
                          href={`${videos}/${p.link}`}
                        >
                          {p.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {window.innerWidth > 1024 && (
                <div className="blog-content__aside-book">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: ContentStore.book.title,
                    }}
                  ></h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: ContentStore.book.text }}
                  ></p>
                  <a
                    href={ContentStore.book.buttonLink}
                    className="button light-blue"
                    target={'_blank'}
                  >
                    <div className="button__text">
                      {ContentStore.book.buttonText}
                    </div>
                  </a>
                </div>
              )}
              {window.innerWidth > 1024 && (
                <div className="blog-content__aside-share">
                  <div className="blog-content__aside-title mr">
                    {ContentStore.post?.shareTitle || ''}{' '}
                  </div>
                  <div className="post-content__aside-follow">
                    {ContentStore.post?.shareList?.map((b:any, i) => (
                      <a
                        key={i}
                        href={b.link + window.location.href}
                        target="__blank"
                      >
                        <img src={b.icon} alt={window.location.href} />
                      </a>
                    ))}
                    <Copy onClick={copy} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="post-content__sub-bottom">
            <div className="post-content__block">
              <div className="post-content__block-img">
                <img src={DBStore.post?.author.src} alt={DBStore.post?.title} />
              </div>
              <div className="post-content__block-col">
                <div className="post-content__block-subtitle">
                  About the Author
                </div>
                <div className="post-content__block-title">
                  {DBStore.post?.author.name}
                  {DBStore.post?.author.position &&
                  DBStore.post?.author.position.length
                    ? ', '
                    : ''}{' '}
                  {DBStore.post?.author.position}
                </div>
                <div className="post-content__block-text">
                  {DBStore.post?.author.about}
                </div>
              </div>
            </div>
            {DBStore.post?.refs?.length ? (
              <div className="post-content__refer">
                <div className="post-content__block-title">References</div>
                <ul className="post-content__refer-list">
                  {DBStore.post.refs.map((r, i) => (
                    <li className="post-content__refer-item" key={i}>
                      {r.title}{' '}
                      {r.link.length ? (
                        <a href={r.link} target={'_blank'}>
                          {r.link}
                          <ArrowSquareOut />
                        </a>
                      ) : (
                        <></>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          {window.innerWidth <= 1024 && (
            <div className="post-content__links">
              <div className="blog-content__aside-title mr">
                {ContentStore.post?.shareTitle || ''}{' '}
              </div>
              <div className="post-content__aside-follow">
                {ContentStore.post?.shareList?.map((b:any, i) => (
                  <a
                    key={i}
                    target={'__blank'}
                    href={b.link + window.location.href}
                  >
                    <img src={b.icon} alt={window.location.href} />
                  </a>
                ))}
                <Copy onClick={copy} />
              </div>
            </div>
          )}

          {dt.length ? (
            <div className={classNames('post-content__bottom')}>
              {dt[getIndex() - 1] ? (
                <PostArrow
                  title={dt[getIndex() - 1]?.title}
                  isLeft
                  action={() => {
                    window.location.href = `${blog}/${dt[getIndex() - 1]!.link}`
                    getPost(dt![getIndex() - 1]!.link!)
                  }}
                />
              ) : (
                <PostArrow
                  title={dt![dt!.length - 1]?.title}
                  isLeft
                  action={() => {
                    window.location.href = `${blog}/${dt![dt!.length - 1]!.link}`
                    getPost(dt![dt!.length - 1]!.link!)
                  }}
                />
              )}
              {dt[getIndex() + 1] ? (
                <PostArrow
                  title={dt[getIndex() + 1]?.title}
                  isLeft={false}
                  action={() => {
                    window.location.href = `${blog}/${dt[getIndex() + 1]!.link}`
                    getPost(dt![getIndex() + 1]!.link!)
                  }}
                />
              ) : (
                <PostArrow
                  title={dt![0].title}
                  isLeft={false}
                  action={() => {
                    window.location.href = `${blog}/${dt![0].link}`
                    getPost(dt![0]!.link!)
                  }}
                />
              )}
            </div>
          ) : (
            <></>
          )}
          {window.innerWidth <= 1024 && (
            <div className="blog-content__aside-book">
              <h3
                dangerouslySetInnerHTML={{ __html: ContentStore.book.title }}
              ></h3>
              <p
                dangerouslySetInnerHTML={{ __html: ContentStore.book.text }}
              ></p>

              <a
                href={ContentStore.book.buttonLink}
                className="button light-blue"
                target={'_blank'}
              >
                <div className="button__text">
                  {ContentStore.book.buttonText}
                </div>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
})

export default PostContent
