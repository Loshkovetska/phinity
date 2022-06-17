import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const PageLinks = ({ links }: { links: any[] }) => {
  return (
    <section className="links  animated fadeIn">
      {links.map((l, id) => (
        <Fragment key={id}>
          {id != links.length - 1 ? (
            <Link to={l.link} className="links__item">
              {l.title}
            </Link>
          ) : (
            <span className="links__item"> {l.title}</span>
          )}
          {id != links.length - 1 && (
            <span className="links__separator">/</span>
          )}
        </Fragment>
      ))}
    </section>
  )
}

export default PageLinks
