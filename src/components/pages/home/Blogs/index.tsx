import { useNavigate } from 'react-router'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { Link } from 'react-router-dom'
import { outputDate } from '../../../../methods/output'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import DBStore from '../../../../stores/DBStore'
import { ReactComponent as Vector } from '../../../../assets/Vector 7.svg'
import ContentStore from '../../../../stores/ContentStore'
import { Post } from '../../../../api/mocks/posts'
import CheckerItemsInsideCont from '../../../common/CheckerItemsInsideCont'
import CustomSlider from '../../../common/CustomSlider'

const Blogs = observer(
  ({ dt, arr }: { dt: any; arr: Array<Post> | null | undefined }) => {
    useEffect(() => {
      if (window.innerWidth <= 480) {
        const container = document.querySelector('.blogs')
        const vect = document.querySelector(`.blogs__vector`)
        const smooth = document.querySelector('.smooth')
        if (!vect) return
        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = vect!.getBoundingClientRect(),
          contRect = container!.getBoundingClientRect(),
          offset = contRect.top - bodyRect.top,
          offsetBottom = contRect.top + contRect.height / 2

        window.addEventListener('scroll', () => {
          if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              window.scrollY - offset
            }px, 0)`
          }
        })
      }
    }, [arr])

    const getCountByCat = (cat: string) => {
      return arr?.filter((d) => d.cat == cat)?.length || 0
    }

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [])

    // if (!arr || !arr.length) return <></>
    const posts = arr?.slice(0, arr.length)

    const links = GlobalState.links
    let blog = ''
    if (links) {
      blog = links.find((l: any) => l.id == 272).link
    }

    return (
      <section className="blogs">
        <Vector className="blogs__vector" />
        <div className="blogs__container">
          <div className="blogs__top">
            <div
              className="blogs__title"
              dangerouslySetInnerHTML={{ __html: dt?.title }}
            ></div>
            {window.innerWidth > 1024 && (
              <a href={blog} className="button black-border p18p40">
                <div className="button__text">
                  {dt?.buttonTitle} <Arrow />
                </div>
              </a>
            )}
          </div>
          {dt && (
            <CheckerItemsInsideCont
              container=".blogs"
              child={'.blogs__item'}
              slider={
                <div className="blogs__list slider-blogs">
                  <CustomSlider
                    autoPlay
                    countItems={posts?.length || dt.length}
                    width={305}
                    block="videos"
                    slidesToShow={width >= 900 ? 2 : 1}
                    slidesToScroll={width >= 900 ? 2 : 1}
                  >
                    {posts
                      ?.sort(
                        (a: any, b: any) =>
                          new Date(b.date).getTime() -
                          new Date(a.date).getTime(),
                      )
                      .slice(0, 20)
                      .map((b: any, i: number) => (
                        <div
                          className="blogs__item"
                          key={i}
                          onTouchEnd={(e) => {
                            const items = document.querySelectorAll(
                              '.blogs__list.slider-blogs .blogs__item',
                            )
                            if (items) {
                              items[i].classList.add('disable-post')

                              setTimeout(() => {
                                items[i].classList.remove('disable-post')
                              }, 300)
                            }
                            // alert('touch-canc '+e);
                          }}
                          onTouchCancel={(e) => {
                            const items = document.querySelectorAll(
                              '.blogs__list.slider-blogs .blogs__item',
                            )
                            if (items) {
                              items[i].classList.add('disable-post')

                              setTimeout(() => {
                                items[i].classList.remove('disable-post')
                              }, 300)
                            }
                            // alert('touch-canc '+e);
                          }}
                        >
                          <div className="blogs__item-date">
                            {b.author?.name && (
                              <>
                                {' '}
                                <a
                                  href={b.author.link}
                                  target={
                                    b.author.link?.includes('https')
                                      ? '_blank'
                                      : ''
                                  }
                                >
                                  {b.author.name}
                                </a>{' '}
                                &bull;{' '}
                              </>
                            )}
                            {outputDate(b.date)}{' '}
                          </div>
                          <a href={`${blog}/${b.link}`} className="blogs__item-top">
                            <div className="blogs__item-img">
                              <img src={b.img || ''} alt={b.title} />
                            </div>
                            <div className="blogs__item-title">{b.title}</div>
                          </a>{' '}
                          <a className="blogs__item-text" href={`${blog}/${b.link}`}>
                            <p
                              dangerouslySetInnerHTML={{ __html: b.shortInfo }}
                            ></p>
                          </a>
                          <div className="blogs__item-bottom">
                            <div className="blogs__item-cat">
                              <p>Category: {b.cat + ' '} </p>{' '}
                              <span>({getCountByCat(b.cat)})</span>
                            </div>
                            <a className="blogs__item-more" href={`${blog}/${b.link}`}>
                              Read more <Arrow />
                            </a>
                          </div>
                        </div>
                      ))}
                  </CustomSlider>
                </div>
              }
              list={
                <div className="blogs__list">
                  {posts
                    ?.sort(
                      (a: any, b: any) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime(),
                    )
                    .slice(0, 20)
                    .map((b: any, i: number) => (
                      <div className="blogs__item" key={i}>
                        <div className="blogs__item-date">
                          {b.author?.name && (
                            <>
                              {' '}
                              <a
                                href={b.author.link}
                                target={
                                  b.author.link?.includes('https')
                                    ? '_blank'
                                    : ''
                                }
                              >
                                {b.author.name}
                              </a>{' '}
                              &bull;{' '}
                            </>
                          )}
                          {outputDate(b.date)}{' '}
                        </div>
                        <a href={`${blog}/${b.link}`} className="blogs__item-top">
                          <div className="blogs__item-img">
                            <img src={b.img || ''} alt={b.title} />
                          </div>
                          <div className="blogs__item-title">{b.title}</div>
                        </a>{' '}
                        <a className="blogs__item-text" href={`${blog}/${b.link}`}>
                          <p
                            dangerouslySetInnerHTML={{ __html: b.shortInfo }}
                          ></p>
                        </a>
                        <div className="blogs__item-bottom">
                          <div className="blogs__item-cat">
                            <p>Category: {b.cat + ' '} </p>{' '}
                            <span>({getCountByCat(b.cat)})</span>
                          </div>
                          <a className="blogs__item-more" href={`${blog}/${b.link}`}>
                            Read more <Arrow />
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              }
              countOfChidlren={posts?.length || dt.length}
            />
          )}
          {window.innerWidth <= 1024 && (
            <a href={blog} className="button black-border p18p40">
              <div className="button__text">
                {dt?.buttonTitle} <Arrow />
              </div>
            </a>
          )}
        </div>
      </section>
    )
  },
)

export default Blogs
