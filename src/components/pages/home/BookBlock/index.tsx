import './index.scss'
import vector from '../../../../assets/Vector 6.svg'
import Button from '../../../common/Button'
import { useLocation, useNavigate } from 'react-router'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import classNames from 'classnames'
import ContentStore from '../../../../stores/ContentStore'
const BookBlock = observer(() => {
  const { pathname } = useLocation()
  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const issues = smooth!.querySelector('.book-block')
        const cont = smooth!.querySelector('.book-block__container')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = issues!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 500) {
          cont?.classList.add('animated')
        }
      })
    }
  }, [GlobalState.locoScroll])

  if (!ContentStore.book) return <></>
  return (
    <section
      className={classNames('book-block', pathname.includes('blog') && 'blog')}
    >
      <div className="book-block__container">
        <img src={vector} />
        <div className="book-block__info">
          <div
            className="book-block__info-title"
            dangerouslySetInnerHTML={{ __html: ContentStore.book.title }}
          ></div>
          <div
            className="book-block__info-text"
            dangerouslySetInnerHTML={{ __html: ContentStore.book.text }}
          ></div>
          <Button
            classname="light-blue"
            text={ContentStore.book.buttonText}
            click={() => window.open(ContentStore.book.buttonLink, '__blank')}
          />
        </div>
      </div>
    </section>
  )
})

export default BookBlock
