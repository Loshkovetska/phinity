import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Warn } from '../../../../assets/contact/warn.svg'
import { ReactComponent as User } from '../../../../assets/contact/Component 95.svg'
import { ReactComponent as SMS } from '../../../../assets/contact/Component 95 (1).svg'
import { ReactComponent as Tel } from '../../../../assets/contact/Component 95 (2).svg'
import { Link } from 'react-router-dom'
import GlobalState from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'

const Contact = observer(({ dt }: { dt: any }) => {
  const navigate = useNavigate()
  const [st, setState] = useState({
    name: '',
    isNameFocus: false,
    lastname: '',
    email: '',
    phone: '',
    msg: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
  })

  const emailValidate = (email: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  }

  //   const phoneValidate = (phone: string) => {
  //     return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
  //       phone,
  //     )
  //   }

  const submit = () => {
    let errs = {
      name: st.name.length ? '' : 'Fill field',
      lastname: st.lastname.length ? '' : 'Fill field',
      email: !st.email.length
        ? 'Fill field'
        : emailValidate(st.email)
        ? ''
        : 'Incorrect email',
      phone:
        st.phone.length && isNaN(+st.phone.replaceAll(' ', ''))
          ? 'Incorrect number'
          : !st.phone.length
          ? 'Fill field'
          : '',
    }
    if (
      errs.email.length ||
      errs.name.length ||
      errs.phone.length ||
      errs.lastname.length
    ) {
      setErrors({ ...errors, ...errs })
      return
    }
    const fd = new FormData()
    fd.append('firstname', st.name)
    fd.append('lastname', st.lastname)
    fd.append('email', st.email)
    fd.append('phone', st.phone)
    fd.append('msg', st.msg)
    fd.append('status', 'contact')
    navigate('/thanks')
    // fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // }).then(() => navigate('/thanks'))
  }

  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const issues = smooth!.querySelector('.contact-block')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = issues!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 500) {
          issues?.classList.add('animated')
        }
      })
    }
  }, [GlobalState.locoScroll])

  if (!ContentStore.about.contact) return <></>

  return (
    <section className="contact-block">
      <div className="contact-block__container">
        <div
          className="contact-block__title"
          dangerouslySetInnerHTML={{ __html: dt.title }}
        ></div>
        <div
          className="contact-block__text"
          dangerouslySetInnerHTML={{ __html: dt.text }}
        ></div>
        <form
          className="contact-block__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="contact-block__row">
            <div className="contact-block__col mr20">
              <div className="contact-block__col-input">
                <User />
                <input
                  className="input"
                  placeholder="First Name"
                  onChange={(e) => setState({ ...st, name: e.target.value })}
                />
              </div>
              <div className="contact-block__error">
                {errors.name.length ? <Warn /> : ''}
                {errors.name}
              </div>
            </div>
            <div className="contact-block__col">
              <div className="contact-block__col-input">
                <User />
                <input
                  className="input"
                  placeholder="Last Name"
                  onChange={(e) =>
                    setState({ ...st, lastname: e.target.value })
                  }
                />
              </div>
              <div className="contact-block__error">
                {errors.lastname.length ? <Warn /> : ''}
                {errors.lastname}
              </div>
            </div>
          </div>
          <div className="contact-block__row">
            <div className="contact-block__col mr20">
              <div className="contact-block__col-input">
                <SMS />
                <input
                  placeholder="Email"
                  className="input"
                  type="email"
                  onChange={(e) => setState({ ...st, email: e.target.value })}
                />
              </div>
              <div className="contact-block__error">
                {errors.email.length ? <Warn /> : ''}
                {errors.email}
              </div>
            </div>
            <div className="contact-block__col">
              <div className="contact-block__col-input">
                <Tel />
                <input
                  type={'text'}
                  placeholder="000 0000 0000"
                  className="input"
                  onChange={(e) => {
                    setState({ ...st, phone: e.target.value })
                  }}
                />
              </div>
              <div className="contact-block__error">
                {errors.phone.length ? <Warn /> : ''}
                {errors.phone}
              </div>
            </div>
          </div>
          <div className="contact-block__row">
            <div className="contact-block__col full">
              <div className="contact-block__col-input">
                <textarea
                  className="input big"
                  placeholder="Enter your message"
                  onChange={(e) => setState({ ...st, msg: e.target.value })}
                />
              </div>
            </div>
          </div>
          <p className="contact-block__sub-text">
            To view our terms {'&'} conditions of booking sessions,{' '}
            <Link to={'/terms'}>click here.</Link>
          </p>
          <Button
            classname="light-blue"
            text={'Submit'}
            click={submit}
            type="submit"
          />
        </form>
      </div>
    </section>
  )
})

export default Contact
