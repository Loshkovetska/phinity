import { useNavigate } from 'react-router'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { Link } from 'react-router-dom'
import { outputDate } from '../../../../methods/output'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import DBStore from '../../../../stores/DBStore'
import { ReactComponent as Vector } from '../../../../assets/Vector 7.svg'
import ContentStore from '../../../../stores/ContentStore'
const Blogs = observer(({ title = 'Our Blogs' }: { title?: string }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (window.innerWidth <= 480) {
      const container = document.querySelector('.blogs')
      const vect = document.querySelector(`.blogs__vector`)
      const smooth = document.querySelector('.smooth')
      var bodyRect = smooth!.getBoundingClientRect(),
        elemRect = vect!.getBoundingClientRect(),
        contRect = container!.getBoundingClientRect(),
        offset = contRect.top - bodyRect.top,
        offsetBottom = contRect.top + contRect.height / 2

      GlobalState.locoScroll &&
        GlobalState.locoScroll.on('scroll', (args: any) => {
          if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
            ;(vect as HTMLElement).style.transform = `translate3d(0, ${
              args.scroll.y - offset
            }px, 0)`
          }
        })
    }
  }, [GlobalState.locoScroll])
  if (!DBStore.posts) return <></>

  if (!ContentStore.home.blog) return <></>

  const { blog } = ContentStore.home

  const posts = DBStore.posts.slice(0, DBStore.posts.length)
  return (
    <section className="blogs">
      <Vector className="blogs__vector" />
      <div className="blogs__container">
        <div className="blogs__top">
          <div
            className="blogs__title"
            dangerouslySetInnerHTML={{ __html: blog.title }}
          ></div>
          {window.innerWidth > 1024 && (
            <Button
              classname="black-border p18p40"
              text={
                <>
                  {blog.buttonTitle} <Arrow />
                </>
              }
              click={() => navigate('/blog')}
            />
          )}
        </div>
        <div className="blogs__list">
          {posts
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .slice(0, 2)
            .map((b, i) => (
              <Link className="blogs__item" to={`/blog/${b.id}`} key={i}>
                <div className="blogs__item-date">{outputDate(b.date)}</div>
                <div className="blogs__item-title">{b.title}</div>
                <div className="blogs__item-text">{b.shortInfo}</div>
                <div className="blogs__item-more">
                  Read more <Arrow />
                </div>
              </Link>
            ))}
        </div>
        {window.innerWidth <= 1024 && (
          <Button
            classname="black-border p18p40"
            text={
              <>
                {blog.buttonTitle} <Arrow />
              </>
            }
            click={() => navigate('/blog')}
          />
        )}
      </div>
    </section>
  )
})

export default Blogs
