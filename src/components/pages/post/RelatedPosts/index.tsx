import { observer } from 'mobx-react'
import DBStore from '../../../../stores/DBStore'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/Vector 1.svg'
import CustomSlider from '../../../common/CustomSlider'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { outputDate } from '../../../../methods/output'
import { useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'

import postImg from '../../../../assets/post/img.png'
import CheckerItemsInsideCont from '../../../common/CheckerItemsInsideCont'
import Button from '../../../common/Button'

const RelatedPosts = observer(({ title }: { title: string }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  useEffect(() => {
    const container = document.querySelector('.related-posts')
    const vect = document.querySelector('.related-posts__vector')
    const smooth = document.querySelector('.smooth')
    if (!smooth) return
    if (!vect) return

    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = vect!.getBoundingClientRect(),
      contRect = container!.getBoundingClientRect(),
      offset = contRect.top - bodyRect.top,
      offsetBottom = contRect.bottom - contRect.height / 2
    document
      .querySelector('.related-posts .slider__bottom')
      ?.classList.add('animated')

    window.addEventListener('scroll', (args: any) => {
      document
        .querySelector('.related-posts .slider__bottom')
        ?.classList.add('animated')
      if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
        requestAnimationFrame(() => {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            window.scrollY - offset
          }px, 0)`
        })
      }
    })
  }, [DBStore.posts])

  const posts = DBStore.posts
    ?.filter((p) => p.cat == DBStore.post?.cat && p.id != DBStore.post.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10)

  if (!DBStore.posts || !DBStore.post) return <></>

  if (!posts?.length) return <></>

  const linksL = GlobalState.links
  let blog = ''
  if (linksL) {
    blog = linksL.find((l: any) => l.id == 272).link
  }
  return (
    <section className="related-posts">
      <Vector className="related-posts__vector" />
      <div className="related-posts__container">
        <div className="related-posts__top">
          <div style={{ overflow: 'hidden' }}>
            <div className="related-posts__title">{title}</div>
          </div>
          <a className="p18p40 black-border button" href={blog}>
            <div className="button__text">
              <>
                See All <Arrow />
              </>
            </div>
          </a>
        </div>
        <CheckerItemsInsideCont
          container=".related-posts"
          child=".related-posts .blogs__item"
          countOfChidlren={posts?.length || 0}
          slider={
            <div className="related-posts__list">
              <CustomSlider
                autoPlay
                countItems={posts?.length || 0}
                width={200}
                slidesToShow={width > 768 ? 2 : 1}
                slidesToScroll={1}
              >
                {posts?.map((b, i) => (
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
                    <a href={`${blog}/${b.link}`} className="blogs__item-top">
                      <div className="blogs__item-img">
                        <img src={b.img || ''} alt={b.title} />
                      </div>
                      <div className="blogs__item-title">{b.title}</div>
                    </a>{' '}
                    <a className="blogs__item-text" href={`${blog}/${b.link}`}>
                      <p dangerouslySetInnerHTML={{ __html: b.shortInfo }}></p>
                    </a>
                    <div className="blogs__item-bottom">
                      <div className="blogs__item-cat">
                        <p>Category: {b.cat + ' '} </p>{' '}
                        {/* <span>({getCountByCat(b.cat)})</span> */}
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
            <div className="related-posts__list related-posts__list-center">
              {posts?.map((b, i) => (
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
                  <a href={`${blog}/${b.link}`} className="blogs__item-top">
                    <div className="blogs__item-img">
                      <img src={b.img || ''} alt={b.title} />
                    </div>
                    <div className="blogs__item-title">{b.title}</div>
                  </a>{' '}
                  <a className="blogs__item-text" href={`${blog}/${b.link}`}>
                    <p dangerouslySetInnerHTML={{ __html: b.shortInfo }}></p>
                  </a>
                  <div className="blogs__item-bottom">
                    <div className="blogs__item-cat">
                      <p>Category: {b.cat + ' '} </p>{' '}
                      {/* <span>({getCountByCat(b.cat)})</span> */}
                    </div>
                    <a className="blogs__item-more" href={`${blog}/${b.link}`}>
                      Read more <Arrow />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          }
        />
        {width <= 768 && (
          <a className="p18p40 black-border button" href={blog}>
            <div className="button__text">
              <>
                See All <Arrow />
              </>
            </div>
          </a>
        )}
      </div>
    </section>
  )
})

export default RelatedPosts
