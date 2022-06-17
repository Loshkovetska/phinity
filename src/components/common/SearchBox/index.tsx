import './index.scss'
import { ReactComponent as Close } from '../../../assets/close.svg'
import { ReactComponent as Search } from '../../../assets/search.svg'
import { Fragment, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import GlobalState, { search } from '../../../stores/GlobalState'
import { changeSearchState } from '../../../stores/GlobalState'
import { Link } from 'react-router-dom'
import { runInAction } from 'mobx'
const SearchBox = observer(() => {
  const [input, setState] = useState('')
  const [isFocus, setFocus] = useState(false)
  const [searchRes, setSearch] = useState<any>(GlobalState.search)

  const Text = ({ text, input }: { text: string; input: string }) => {
    const smallText = text.toLocaleLowerCase()
    let startIndex = smallText.indexOf(input.toLowerCase())
    let endIndex = input.length + startIndex
    if (startIndex != -1 && input.length) {
      const subText = text.slice(startIndex, endIndex)
      if (startIndex) {
        let txBefore = text.slice(0, startIndex - 1)
        let txAfter = text.slice(endIndex)

        return (
          <>
            {txBefore} <span>{subText}</span>
            {txAfter}
          </>
        )
      } else {
        let txAfter = text.slice(endIndex)
        return (
          <>
            <span>{subText}</span>
            {txAfter}
          </>
        )
      }
    }
    return <>{text}</>
  }

  useEffect(() => {
    if (input.length > 3) {
      search(input).then(() => {
        setSearch(GlobalState.search)
      })
    }
  }, [input])

  useEffect(() => {
    setSearch(GlobalState.search)
  }, [GlobalState.search])

  useEffect(() => {
    setState('')
    setFocus(false)
  }, [GlobalState.isSearchOpen])
  useEffect(() => {

    if (GlobalState.isSearchOpen) {
      document.body.classList.add('hidden')
    } else document.body.classList.remove('hidden')
  }, [GlobalState.isSearchOpen])
  return (
    <section
      className={classNames(
        'searchbox',
        !GlobalState.isSearchOpen ? 'close' : 'show',
      )}
    >
      {window.innerWidth > 1024 && (
        <Close
          onClick={() => {
            runInAction(() => {
              GlobalState.search = null
            })
            setState('')
            changeSearchState()
          }}
          className="searchbox__close"
        />
      )}
      <div className="searchbox__container">
        <div className="searchbox__input">
          <Search />
          <input
            className="input"
            onChange={(e) => setState(e.target.value)}
            value={input}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder="Enter what you are searching for"
          />
          {input.length ? (
            <div className="searchbox__clear" onClick={() => setState('')}>
              Delete
            </div>
          ) : (
            <></>
          )}
        </div>
        {
          <div
            className={classNames(
              'searchbox__list',
              isFocus && !searchRes && 'show',
              searchRes && 'hidden',
            )}
          >
            <div className={classNames('searchbox__col', 'mr')}>
              <div className="searchbox__col-title">Issues</div>
            </div>
            <div className={classNames('searchbox__col')}>
              <div className="searchbox__col-title">Articles</div>
            </div>
            <div className={classNames('searchbox__col', 'mr')}>
              <div className="searchbox__col-title">Services</div>
            </div>
            <div className={classNames('searchbox__col')}>
              <div className="searchbox__col-title">Therapists</div>
            </div>
          </div>
        }
        <div className={classNames('searchbox__list-res', searchRes && 'show')}>
          {searchRes?.map((s: any, i: number) => {
            let title = '',
              link = ''
            if (s.cat == 'issues') {
              title = 'Issues'
              link = '/issue/'
            }
            if (s.cat == 'articles') {
              title = 'articles'
              link = '/article/'
            }
            if (s.cat == 'therapists') {
              title = 'Therapists'
              link = '/therapist/'
            }
            if (s.cat == 'services') {
              title = 'Services'
              link = '/service/'
            }

            return (
              <div
                className={classNames('searchbox__col', i % 2 == 0 && 'mr')}
                key={i}
              >
                <div className="searchbox__col-title">{title}</div>
                {s.list.map((l: any, idx: number) => (
                  <Link
                    key={idx}
                    className={classNames('searchbox__col-text')}
                    to={`${link}${l.id}`}
                  >
                    <Text text={l.title} input={input} />
                  </Link>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default SearchBox
