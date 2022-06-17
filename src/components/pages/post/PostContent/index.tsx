import { observer } from 'mobx-react'
import { Link, useNavigate } from 'react-router-dom'
import { Post } from '../../../../api/mocks/posts'
import { outputFullDate } from '../../../../methods/output'
import DBStore, { getPost } from '../../../../stores/DBStore'
import Button from '../../../common/Button'
import PageLinks from '../../../common/PageLinks'
import './index.scss'
import fb from '../../../../assets/socials/black_facebook 1.png'
import inst from '../../../../assets/socials/black_instagram 1.png'
import tw from '../../../../assets/socials/black_twitter 1.png'
import { ReactComponent as Linkedin } from '../../../../assets/socials/linkedin.svg'
import { ReactComponent as Copy } from '../../../../assets/socials/Link.svg'
import { ReactComponent as ArrowRight } from '../../../../assets/ArrowRight.svg'
import { ReactComponent as Setting } from '../../../../assets/mob-sett.svg'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import { ReactComponent as Vector } from '../../../../assets/home-area.svg'
import img from '../../../../assets/post/img.png'
import { Fragment, useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import classNames from 'classnames'

const PostContent = observer(() => {
  const navigate = useNavigate()
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
      link: `/post/${DBStore.post?.id}`,
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
      const list = smooth!.querySelectorAll(
        '.post-content__sub-title,.post-content__sub-text',
      )
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
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const col = smooth!.querySelector('.post-content__col')
        const navigate = smooth!.querySelector('.post-content__navigate')
        const social = smooth!.querySelector('.post-content__top-social')
        const items = smooth!.querySelectorAll('.post-content__aside *')
        const row = document.querySelector('.post-content__row')
        const img = document.querySelector('.post-content__main-img')
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = issues!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 500) {
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
              navigate?.classList.add('animated')
              items.forEach((i, id) => {
                i?.classList.add('animated')
                ;(i as HTMLDivElement).style.transitionDelay = `${id / 8}s`
              })
            }, 1500)

            setTimeout(() => {
              ;(list as any)?.forEach((element: any) => {
                ;(element as HTMLElement).classList.add('animated')
              })
            }, 1000)
          }, 0)
        }
      })
    }
  }, [GlobalState.locoScroll])

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

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0)`
        }
      })
  }, [GlobalState.locoScroll])

  if (!DBStore.post) return <></>
  return (
    <section className="post-content">
      <PageLinks links={links} />
      <Vector className="post-content__vector" />
      <div className="post-content__container">
        <div className="post-content__top">
          <div className="post-content__top-block">
            <div style={{ overflow: 'hidden', paddingBottom: 3 }}>
              <div className="post-content__title">{DBStore.post?.title}</div>
            </div>
            <div className="post-content__top-bottom">
              <div className="post-content__author">
                <div className="post-content__author-img">
                  <img src={DBStore.post?.author.src} />
                </div>
                <div className="post-content__author-info">
                  <div className="post-content__author-title">
                    {DBStore.post?.author.name},{DBStore.post?.author.position}
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
                <div className="post-content__top-text">
                  Categories: {DBStore.post?.cat}
                </div>
                {window.innerWidth <= 1024 && (
                  <span className="post-content__top-separator">{'|'}</span>
                )}
                {window.innerWidth <= 1024 && (
                  <div className="post-content__aside-follow">
                    <img src={fb} />
                    <img src={inst} />
                    <img src={tw} />
                    <Linkedin />
                  </div>
                )}
              </div>
            </div>
          </div>
          {window.innerWidth <= 1024 && (
            <Button
              text={<Setting />}
              click={() => setFilter(true)}
              classname="black-border p11p24 filter"
            />
          )}
          {window.innerWidth > 1024 && (
            <div className="post-content__top-social">
              <div className="blog-content__aside-title">Follow Phinity</div>

              <div className="post-content__aside-follow">
                <img src={fb} />
                <img src={inst} />
                <img src={tw} />
                <Linkedin />
              </div>
            </div>
          )}
        </div>

        <div className="post-content__row">
          <div className="post-content__col">
            <div className="post-content__main">
              <img src={img} className="post-content__main-img" />
              {DBStore.post?.content.map((c, ind) => (
                <div
                  key={ind}
                  className="post-content__main-row"
                  id={`post-content-row${ind}`}
                >
                  <div style={{ overflow: 'hidden' }}>
                    {' '}
                    <h3 className="post-content__sub-title">{c.title}</h3>
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    {' '}
                    <div
                      className="post-content__sub-text"
                      dangerouslySetInnerHTML={{ __html: c.text }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="post-content__block">
              <div className="post-content__block-img">
                <img src={DBStore.post?.author.src} />
              </div>
              <div className="post-content__block-col">
                <div className="post-content__block-subtitle">
                  About the Author
                </div>
                <div className="post-content__block-title">
                  {DBStore.post?.author.name}, {DBStore.post?.author.position}
                </div>
                <div className="post-content__block-text">
                  {DBStore.post?.author.about}
                </div>
              </div>
            </div>
          </div>
          <div
            className={classNames('post-content__aside', showFilter && 'show')}
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
                <div className="blog-content__aside-text">
                  {DBStore.post?.title}
                </div>
                {DBStore.post?.content
                  .slice(0, show ? DBStore.post?.content.length : 4)
                  .map((c, i) => (
                    <div
                      className="blog-content__aside-text"
                      key={i}
                      onClick={() => {
                        const block = document.querySelector(
                          `.post-content-row${i}`,
                        )
                        GlobalState.locoScroll &&
                          GlobalState.locoScroll.scrollTo(block, 0)
                      }}
                    >
                      {i + 1}. {c.title}
                    </div>
                  ))}
                <div
                  className="blog-content__aside-all"
                  onClick={() => setShow(!show)}
                >
                  {!show ? 'See all' : 'Hide'}
                </div>
              </div>
            )}
            <div className="blog-content__aside-title">Tags</div>
            <div className="blog-content__aside-list wrap">
              {DBStore.post?.tags.map((t, i) => (
                <div className="blog-content__aside-text" key={i}>
                  {t}
                  {i + 1 != DBStore.tags?.length && ','}
                </div>
              ))}
            </div>
            <div className="blog-content__aside-title">Recent post</div>
            <div className="blog-content__aside-list">
              {getSorted()
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
            {window.innerWidth > 1024 && (
              <div className="blog-content__aside-book">
                <h3>Book your free 15 min session</h3>
                <p>
                  Please enter the following details to book your appointment
                </p>
                <Button
                  classname="light-blue"
                  text={'Book now'}
                  click={() => navigate('')}
                />
              </div>
            )}
            {window.innerWidth > 1024 && (
              <div className="blog-content__aside-share">
                <div className="blog-content__aside-title mr">
                  share this article
                </div>
                <div className="post-content__aside-follow">
                  <img src={fb} />
                  <img src={inst} />
                  <img src={tw} />
                  <Copy onClick={copy} />
                </div>
              </div>
            )}
          </div>
        </div>
        {window.innerWidth <= 1024 && (
          <div className="post-content__links">
            <div className="blog-content__aside-title mr">
              share this article
            </div>
            <div className="post-content__aside-follow">
              <img src={fb} />
              <img src={inst} />
              <img src={tw} />
              <Copy onClick={copy} />
            </div>
          </div>
        )}

        <div
          className={classNames(
            'post-content__bottom',
            !DBStore.posts?.find((p) => p.id == DBStore.post!.id - 1) && 'end',
          )}
        >
          {DBStore.posts?.find((p) => p.id == DBStore.post!.id - 1) && (
            <div
              className="post-content__bottom-col"
              onClick={() =>
                getPost(
                  DBStore.posts!.find((p) => p.id == DBStore.post!.id - 1)!.id,
                ).then(() => {
                  navigate(`/post/${DBStore.post!.id}`)
                })
              }
            >
              <div className="post-content__bottom-arrow left">
                <ArrowRight />
              </div>
              <div className="post-content__bottom-block left">
                <div className="post-content__bottom-text">Previous</div>
                <div className="post-content__bottom-title">
                  {
                    DBStore.posts?.find((p) => p.id == DBStore.post!.id - 1)
                      ?.title
                  }
                </div>
              </div>
            </div>
          )}

          {DBStore.posts?.find((p) => p.id == DBStore.post!.id + 1) && (
            <div
              className="post-content__bottom-col"
              onClick={() => {
                getPost(
                  DBStore.posts!.find((p) => p.id == DBStore.post!.id + 1)!.id,
                ).then(() => {
                  navigate(`/post/${DBStore.post!.id}`)
                })
              }}
            >
              <div className="post-content__bottom-block right">
                <div className="post-content__bottom-text">Next</div>
                <div className="post-content__bottom-title">
                  {
                    DBStore.posts?.find((p) => p.id == DBStore.post!.id + 1)
                      ?.title
                  }
                </div>
              </div>
              <div className="post-content__bottom-arrow right">
                <ArrowRight />
              </div>
            </div>
          )}
        </div>
        {window.innerWidth <= 1024 && (
          <div className="blog-content__aside-book">
            <h3>Book your free 15 min session</h3>
            <p>Please enter the following details to book your appointment</p>
            <Button
              classname="light-blue"
              text={'Book now'}
              click={() => navigate('')}
            />
          </div>
        )}
      </div>
    </section>
  )
})

export default PostContent
