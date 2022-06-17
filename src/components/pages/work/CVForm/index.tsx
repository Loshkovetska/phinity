import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as File } from '../../../../assets/contact/Regular.svg'

import { ReactComponent as Warn } from '../../../../assets/contact/warn.svg'
import { ReactComponent as User } from '../../../../assets/contact/Component 95.svg'
import { ReactComponent as SMS } from '../../../../assets/contact/Component 95 (1).svg'
import { useEffect, useState } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import Button from '../../../common/Button'
import CheckBox from '../../../common/CheckBox'
import { Link } from 'react-router-dom'
import ContentStore from '../../../../stores/ContentStore'
const CVForm = observer(() => {
  const [st, setState] = useState<any>({
    name: '',
    isNameFocus: false,
    file: null,
    email: '',
    msg: '',
    isCheck: false,
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  })

  const emailValidate = (email: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  }

  const submit = () => {
    if (!st.isCheck) return
    let errs = {
      name: st.name.length ? '' : 'Fill field',
      email: !st.email.length
        ? 'Fill field'
        : emailValidate(st.email)
        ? ''
        : 'Incorrect email',
    }
    if (errs.email.length || errs.name.length) {
      setErrors({ ...errors, ...errs })
      return
    }
    const fd = new FormData()
    fd.append('firstname', st.name)
    fd.append('email', st.email)
    fd.append('file', st.file, st.file.name)
    fd.append('msg', st.msg)
    fd.append('status', 'contact')
    setErrors({ ...errors, ...errs })
    console.log(st)
    // fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // }).then(() => navigate('/thanks'))
  }
  const fileLoad = (e: any) => {
    var reader = new FileReader()
    var url = reader.readAsDataURL(e.target.files[0])
    setState({
      ...st,
      file: e.target.files[0],
    })
  }

  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const issues = smooth!.querySelector('.cv-form')

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = issues!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (args.scroll.y > offset - 500) {
          issues?.classList.add('animated')
        }
      })
    }
  }, [GlobalState.locoScroll])

  if (!ContentStore.job) return <></>
  return (
    <section className="cv-form">
      <div className="cv-form__container">
        <form className="cv-form__form" onSubmit={(e) => e.preventDefault()}>
          <div
            className="cv-form__subtitle"
            dangerouslySetInnerHTML={{ __html: ContentStore.job.form.subtitle }}
          ></div>
          <div
            className="cv-form__title"
            dangerouslySetInnerHTML={{ __html: ContentStore.job.form.title }}
          ></div>
          <div className="contact-block__col full">
            <div className="contact-block__col-input">
              <User />
              <input
                className="input"
                placeholder="Name"
                onChange={(e) => setState({ ...st, name: e.target.value })}
              />
            </div>
            <div className="contact-block__error">
              {errors.name.length ? <Warn /> : ''}
              {errors.name}
            </div>
          </div>
          <div className="contact-block__col full">
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
          <div className="contact-block__col full">
            <div className="contact-block__col-input">
              <textarea
                className="input big"
                placeholder="Enter your message"
                onChange={(e) => setState({ ...st, msg: e.target.value })}
              />
            </div>
          </div>
          <div className="cv-form__file">
            <label>
              <File />
              <input type={'file'} className="input-file" onChange={fileLoad} />
              <div className="cv-form__file-title">Attach your cv</div>
              <div className="cv-form__file-text">
                (.pdf .docx .png .zip .rar or .txt)
              </div>
            </label>
            {st.file && (
              <div className="cv-form__file-title mt12 capitalize">
                {st.file?.name} is attached
              </div>
            )}
          </div>
          <label className="cv-form__apply">
            <div className="cv-form__checkbox">
              <CheckBox
                text={
                  <>
                    By clicing this button, you accept{' '}
                    <Link to={'/terms'}> Terms of Services </Link> and{' '}
                    <Link to={'/privacy'}> Privacy Policy </Link>
                  </>
                }
                change={(value) => setState({ ...st, isCheck: value })}
                ischeck={st.isCheck}
              />
            </div>
          </label>
          <Button
            classname="light-blue"
            text={'Send'}
            click={submit}
            type="submit"
          />
        </form>
        <div className="cv-form__col">
          <div
            className="cv-form__col-text"
            dangerouslySetInnerHTML={{ __html: ContentStore.job.form.p1 }}
          ></div>
          <div
            className="cv-form__col-title"
            dangerouslySetInnerHTML={{
              __html: ContentStore.job.form.emailTitle,
            }}
          ></div>
          <div
            className="cv-form__link mb56"
            onClick={() =>
              (window.location.href = `mailto:${ContentStore.job.form.email}`)
            }
          >
            {ContentStore.job.form.email}
          </div>
          <div
            className="cv-form__col-text w305"
            dangerouslySetInnerHTML={{
              __html: ContentStore.job.form.p2,
            }}
          ></div>
          {ContentStore.job.form.socials.map((so, i) => (
            <a className="cv-form__link" href={so.link} key={i}>
              {so.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
})

export default CVForm
