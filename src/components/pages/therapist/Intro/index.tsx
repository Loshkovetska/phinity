import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Vectors } from '../../../../assets/ther-vectors.svg'
import { ReactComponent as Ellipse1 } from '../../../../assets/Ellipse 67.svg'

import PageLinks from '../../../common/PageLinks'
import DBStore from '../../../../stores/DBStore'
import Button from '../../../common/Button'
import ContentStore from '../../../../stores/ContentStore'
const Intro = observer(() => {
  if (!DBStore.therapist) return <></>
  const links = [
    {
      title: ContentStore.therapist.mainPageTitle,
      link: '/',
    },
    {
      title: ContentStore.therapist.pageTitle,
      link: '/therapists',
    },
    {
      title: `Dr. ${DBStore.therapist?.name}`,
      link: '/',
    },
  ]

  return (
    <section className="therapist-intro animated fadeIn ">
      <Ellipse1 className="therapist-intro__vector w31" />
      <Ellipse1 className="therapist-intro__vector w25" />
      <Ellipse1 className="therapist-intro__vector w71" />
      <Ellipse1 className="therapist-intro__vector w72" />
      <Ellipse1 className="therapist-intro__vector w120" />
      <Ellipse1 className="therapist-intro__vector w185" />
      <Ellipse1 className="therapist-intro__vector w254" />
      <div className="therapist-intro__container">
        <PageLinks links={links} />
        <div className="therapist-intro__content">
          <div className="therapist-intro__img animated fadeIn">
            <img src={DBStore.therapist.img} />
            <Vectors />
          </div>{' '}
          <div className="therapist-intro__col">
            <div className="therapist-intro__small-title animated fadeIn">
              DR.
            </div>
            <div className="therapist-intro__title animated fadeIn">
              {DBStore.therapist?.name.split(' ').map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <div className="therapist-intro__position animated fadeIn delay-2s">
              {DBStore.therapist?.position}
            </div>
            <div className="therapist-intro__col-bottom">
              <Button
                classname="blue p18p40 animated fadeIn "
                text={ContentStore.therapist.intro.buttonTitle}
                click={() =>
                  window.open(
                    ContentStore.therapist.intro.buttonLink,
                    '__blank',
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Intro
