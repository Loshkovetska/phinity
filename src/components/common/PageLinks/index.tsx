import classNames from 'classnames'
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const PageLinks = ({ links }: { links: any[] }) => {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 300);
    
  }, [])
  

  return (
    <section className={classNames("links", show && 'visible-links')}>
      {links.map((l, id) => (
        <Fragment key={id}>
          {id != links.length - 1 ? (
            <a href={l.link} className="links__item">
              {l.title}
            </a>
          ) : (
            <span className="links__item"> {l.title}</span>
          )}
          {id != links.length - 1 && (
            <span className="links__separator">
              {!l.title.length ? '' : '/'}
            </span>
          )}
        </Fragment>
      ))}
    </section>
  )
}

export default PageLinks
