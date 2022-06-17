import { observer } from 'mobx-react'
import DBStore from '../../../../stores/DBStore'
import './index.scss'
import { ReactComponent as Vector } from '../../../../assets/Vector 1.svg'
import CustomSlider from '../../../common/CustomSlider'
import { Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'
import { outputDate } from '../../../../methods/output'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'

const RelatedPosts = observer(() => {
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

    GlobalState.locoScroll &&
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
          ;(vect as HTMLElement).style.transform = `translate3d(0, ${
            args.scroll.y - offset
          }px, 0)`
        }
      })
  }, [GlobalState.locoScroll])

  const posts = DBStore.posts
    ?.filter((p) => p.cat == DBStore.post?.cat)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10)

  if (!DBStore.posts || !DBStore.post) return <></>

  return (
    <section className="related-posts">
      <Vector className="related-posts__vector" />
      <div className="related-posts__container">
        <div style={{ overflow: 'hidden' }}>
          <div className="related-posts__title">Related Articles </div>
        </div>
        <div className="related-posts__list">
          <CustomSlider countItems={posts?.length || 0} width={200}>
            {posts?.map((b, i) => (
              <Link className="blogs__item" to={`/blog/${b.id}`} key={i}>
                <div className="blogs__item-date">{outputDate(b.date)}</div>
                <div className="blogs__item-title">{b.title}</div>
                <div className="blogs__item-text">{b.shortInfo}</div>
                <div className="blogs__item-more">
                  Read more <Arrow />
                </div>
              </Link>
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})

export default RelatedPosts
