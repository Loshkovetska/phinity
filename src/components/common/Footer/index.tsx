import './index.scss'
import { ReactComponent as Logo } from '../../../assets/logo.svg'

import fb from '../../../assets/socials/black_facebook 1.png'
import inst from '../../../assets/socials/black_instagram 1.png'
import tw from '../../../assets/socials/black_twitter 1.png'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../stores/GlobalState'
import CustomLink from '../CustomLink'
const Footer = observer(() => {
  useEffect(() => {
    const smooth = document.querySelector('.smooth')
    const footer = document.querySelector('.footer')
    const offers = smooth!.querySelector('.footer')!.previousSibling!
    const height = footer?.getBoundingClientRect().height,
      bodyHeight = smooth?.getBoundingClientRect().height
    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = footer!.getBoundingClientRect(),
      prevRect = (offers as HTMLDivElement)!.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
        if (window.innerWidth > 768 && window.innerWidth < 900) {
          if (args.scroll.y + 200 > prevRect!.bottom - 500) {
            ;(footer as any)?.classList.add('animated')
          }
        } else {
          if (args.scroll.y + height! + 150 >= offset) {
            ;(footer as any)?.classList.add('animated')
          }
        }
      })
    }
  }, [GlobalState.locoScroll])
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__col grow">
          <Logo className="footer__logo" />
          {window.innerWidth > 550 && (
            <>
              <div
                className="footer__text grey"
                onClick={() => {
                  window.location.href = 'tel:07761409077'
                }}
              >
                077 6140 9077
              </div>
              <div className="footer__text grey">
                1 Harley Street, London, W1G 9QD
              </div>
              <div className="footer__text grey">Mon-Sun 8 AM- 8 PM</div>
            </>
          )}
        </div>
        <div className="footer__col w50p mr0">
          <div className="footer__sub-title ">Navigation</div>
          <Link to="/services" className="footer__text">
            Services
          </Link>
          <Link to="/issues" className="footer__text">
            Issues
          </Link>
          <Link to="/therapists" className="footer__text">
            Therapists
          </Link>
          <Link to="/fees" className="footer__text">
            Fees
          </Link>
        </div>
        <div className="footer__col mr0 w50p">
          <div className="footer__sub-title">Info Pages</div>
          <Link to="/blog" className="footer__text">
            Blog
          </Link>
          <Link to="/about" className="footer__text">
            About us
          </Link>
          <Link to="/contact" className="footer__text">
            Contact us
          </Link>
          <Link to="/faq" className="footer__text">
            FAQ
          </Link>
        </div>
        <div className="footer__col mr0 grow">
          <div className="footer__sub-title">Follow us</div>
          <div className="footer__text social">
            <img src={tw} />
            Twitter
          </div>
          <div className="footer__text social">
            <img src={fb} /> Facebook
          </div>
          <div className="footer__text social">
            <img src={inst} /> Instagram
          </div>
        </div>{' '}
        {window.innerWidth <= 550 && (
          <>
            <div className="footer__col w50p">
              <div className="footer__sub-title mb16">Phone number</div>
              <div
                className="footer__text"
                onClick={() => {
                  window.location.href = 'tel:07761409077'
                }}
              >
                077 6140 9077
              </div>
            </div>
            <div className="footer__col w50p mr0">
              <div className="footer__sub-title mb16">Location</div>
              <div className="footer__text">
                1 Harley Street, London, W1G 9QD
              </div>
            </div>
            <div className="footer__col w150">
              <div className="footer__sub-title mb16">Open work</div>
              <div className="footer__text">Mon-Sun 6 AM-10 PM</div>
            </div>
          </>
        )}
      </div>
      <div className="footer__row last">
        <div className="footer__sub-text copy">
          Copyright © 2022 Phinity Therapy. All rights reserved.
        </div>
        <div className="footer__col">
          <Link to="/terms" className="footer__sub-text mr32 link">
            Terms of Services
          </Link>
          <Link to="/privacy" className="footer__sub-text link">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
})

export default Footer
