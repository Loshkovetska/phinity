import { observer } from 'mobx-react'
import Button from '../Button'
import './index.scss'
import { ReactComponent as Close } from '../../../assets/close.svg'
import { useEffect, useState } from 'react'
import GlobalState from '../../../stores/GlobalState'
import ContentStore, { getCookieContent } from '../../../stores/ContentStore'

const Cookie = observer(() => {
  const [isShow, setShow] = useState(false)
  const getCookie = (name: string) => {
    var matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)',
      ),
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
  useEffect(() => {
    if (getCookie('hideModal') != 'true') {
      setTimeout(() => {
        setShow(true)
      }, 5000)
    }
  }, [])

  useEffect(() => {
    if (isShow) {
      GlobalState.locoScroll && GlobalState.locoScroll.stop()
      document.querySelector('.cookie')?.classList.add('anim')
      document.body.classList.add('hidden')
    } else {
      GlobalState.locoScroll && GlobalState.locoScroll.start()
      document.querySelector('.cookie')?.classList.remove('anim')
      document.body.classList.remove('hidden')
    }
  }, [isShow, GlobalState.locoScroll])
  const accept = () => {
    document.querySelector('.cookie')?.classList.remove('anim')
    document.cookie = 'hideModal=true'
    setShow(false)
  }

  useEffect(() => {
    getCookieContent()
  }, [])

  if (!ContentStore.cookie) return <></>

  return (
    <section className="cookie">
      <div className="cookie__container">
        <div className="cookie__top">
          <Close className="cookie__close" onClick={() => setShow(false)} />
        </div>
        <div
          className="cookie__title"
          dangerouslySetInnerHTML={{ __html: ContentStore.cookie.title }}
        ></div>
        <div
          className="cookie__text"
          dangerouslySetInnerHTML={{ __html: ContentStore.cookie.text }}
        ></div>
        <Button
          classname="black-border p15p40"
          click={accept}
          text={ContentStore.cookie.buttonText}
        />
      </div>
    </section>
  )
})

export default Cookie
