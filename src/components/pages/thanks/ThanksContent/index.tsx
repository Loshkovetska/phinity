import { observer } from 'mobx-react'
import './index.scss'
import { ReactComponent as Vectors } from '../../../../assets/ther-vectors.svg'
import { ReactComponent as Ellipse1 } from '../../../../assets/Ellipse 67.svg'
import { ReactComponent as Hands } from '../../../../assets/Hands.svg'
import { useNavigate } from 'react-router'
import Button from '../../../common/Button'
import ContentStore from '../../../../stores/ContentStore'
import GlobalState from '../../../../stores/GlobalState'

const ThanksContent = observer(() => {
  if (!ContentStore.thanks) return <></>

  const linksL = GlobalState.links
  let main = ''
  if (linksL) {
    main = linksL.find((l: any) => l.id == 2).link
  }

  return (
    <section className="thanks animated fadeIn">
      <Ellipse1 className="therapist-intro__vector w31" />
      <Ellipse1 className="therapist-intro__vector w25" />
      <Ellipse1 className="therapist-intro__vector w71" />
      <Ellipse1 className="therapist-intro__vector w72" />
      <Ellipse1 className="therapist-intro__vector w120" />
      <Ellipse1 className="therapist-intro__vector w185" />
      <Ellipse1 className="therapist-intro__vector w254" />
      <div className="thanks__container">
        <h1
          className="thanks__title"
          dangerouslySetInnerHTML={{ __html: ContentStore.thanks.title }}
        ></h1>
        <Hands className="thanks__hands" />
        <div
          className="thanks__text"
          dangerouslySetInnerHTML={{ __html: ContentStore.thanks.text }}
        ></div>
        <div className="thanks__bottom">
          <Button
            classname="black-border p18p40"
            text={ContentStore.thanks.backButton}
            click={() => window.history.go(-1)}
          />
          <Button
            classname="blue p18p40"
            text={ContentStore.thanks.homeButton}
            click={() => (window.location.href = main)}
          />
        </div>
      </div>
    </section>
  )
})

export default ThanksContent
