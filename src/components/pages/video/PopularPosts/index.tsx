import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DBStore from '../../../../stores/DBStore'
import CustomSlider from '../../../common/CustomSlider'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'

import postImg from '../../../../assets/post/img.png'
import { outputDate } from '../../../../methods/output'
import CheckerItemsInsideCont from '../../../common/CheckerItemsInsideCont'
import Button from '../../../common/Button'
import GlobalState from '../../../../stores/GlobalState'

const PopularPosts = observer(({ content }: { content: any }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  if (!DBStore.popularPosts || !DBStore.popularPosts?.length) return <></>

  const links = GlobalState.links
  let blog = ''
  if (links) {
    blog = links.find((l: any) => l.id == 272).link
  }
  return (
    <section className="popular-videos popular-posts">
      <div className="popular-videos__top">
        <div
          className="popular-videos__title"
          dangerouslySetInnerHTML={{ __html: content.title }}
        ></div>
        <a href={blog} className="button p18p40 black-border">
          <div className="button__text">
            {' '}
            <>
              {content.buttonTitle} <Arrow />
            </>
          </div>
        </a>
      </div>
      <CheckerItemsInsideCont
        container=".popular-posts"
        child=".popular-posts .blogs__item"
        slider={
          <div className="popular-videos__list">
            <CustomSlider
              countItems={DBStore.popularPosts?.length || 0}
              width={200}
              slidesToShow={width > 900 ? 2 : 1}
              slidesToScroll={1}
              autoPlay
            >
              {DBStore.popularPosts?.map((b, i) => (
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
                      <img src={b.img || ''} alt={b?.title} />
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
        countOfChidlren={DBStore.popularPosts?.length || 0}
        list={
          <div className="popular-videos__list popular-videos__inline">
            {DBStore.popularPosts?.map((b, i) => (
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
                    <img src={b.img || ''} alt={b?.title} />
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
      {width <= 1120 && (
        <a href={blog} className="button p18p40 black-border">
          <div className="button__text">
            {' '}
            <>
              {content.buttonTitle} <Arrow />
            </>
          </div>
        </a>
      )}
    </section>
  )
})

export default PopularPosts
