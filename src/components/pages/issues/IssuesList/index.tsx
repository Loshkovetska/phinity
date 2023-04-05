import { observer } from 'mobx-react'
import DBStore from '../../../../stores/DBStore'
import Button from '../../../common/Button'
import './index.scss'
import { ReactComponent as Setting } from '../../../../assets/filter.svg'
import { ReactComponent as MSetting } from '../../../../assets/mob-sett.svg'

import { ReactComponent as ArrowRight } from '../../../../assets/ArrowRight.svg'

import { ReactComponent as VScroll } from '../../../../assets/Vector 4.svg'
import { ReactComponent as V1 } from '../../../../assets/issues/Vector 10.svg'
import { ReactComponent as V3 } from '../../../../assets/issues/Vector 11 (1).svg'
import { ReactComponent as V4 } from '../../../../assets/issues/Vector 11 (2).svg'
import { ReactComponent as V2 } from '../../../../assets/issues/Vector 11.svg'
import { ReactComponent as V5 } from '../../../../assets/issues/Vector 12.svg'
import { ReactComponent as V6 } from '../../../../assets/issues/Vector 13.svg'
import Letters from '../../../common/Letters'
import { useEffect, useState } from 'react'
import GlobalState, {
  changeTheraFilterState,
} from '../../../../stores/GlobalState'
import ContentStore from '../../../../stores/ContentStore'

const IssuesList = observer(() => {
  const [letter, setLetter] = useState<string>('A')
  const [list, setList] = useState<any>(null)
  const Vector = ({ id }: { id: number }) => {
    const vectors = [
      <V1 className="issues__item-vector" />,
      <V2 className="issues__item-vector" />,
      <V3 className="issues__item-vector" />,
      <V4 className="issues__item-vector" />,
      <V5 className="issues__item-vector" />,
      <V6 className="issues__item-vector" />,
    ]
    return vectors[
      id >= vectors.length ? Math.floor(id / vectors.length) - 1 : id
    ]
  }
  const getList = (letter: string): any => {
    const sortArr = DBStore.issues?.sort((a, b) =>
      a.title.localeCompare(b.title),
    )
    let arrs =
      window.innerWidth > 768
        ? sortArr
        : sortArr?.filter(
            (s) =>
              s.title[0].toLowerCase().trim() ==
              letter.toLocaleLowerCase().trim(),
          )

    let list: any = {}
    arrs?.forEach((em) => {
      let section: string = em.title.trim().toLocaleUpperCase().charAt(0)
      if (list[section] == null) {
        list[section] = []
      }
      list[section].push(em)
    })

    return list
  }

  useEffect(() => {
    if (DBStore.issues) {
      window.addEventListener('scroll', (args: any) => {
        const smooth = document.querySelector('.smooth')
        const issues = smooth!.querySelector('.issues-list')
        if (!issues) return
        const title = smooth!.querySelector('.issues-list__title')
        const items = smooth!.querySelectorAll('.issues-list__row')
        const button = smooth!.querySelector('.issues-list .button.filter')
        const lettersBlock = smooth!.querySelector(
          '.issues-list .our-services__letters',
        )
        const letters = smooth!.querySelectorAll(
          '.issues-list .our-services__letter',
        )

        var bodyRect = smooth!.getBoundingClientRect(),
          elemRect = issues!.getBoundingClientRect(),
          offset = elemRect.top - bodyRect.top

        if (window.scrollY > offset - 1000) {
          issues?.classList.add('animated')
        }
        if (window.scrollY > offset - 800) {
          title?.classList.add('animated')
          button?.classList.add('animated')

          if (lettersBlock) {
            letters.forEach((i, id) => {
              ;(i as any).classList.add('animated')
              ;(i as HTMLElement).style.transitionDelay = `${id / 8}s`
            })
          }

          if (window.scrollY > offset - 500) {
            const list = document.querySelector('.issues-list__list')
            list?.classList.add('animated')
          }

          items.forEach((i, id) => {
            elemRect = i!.getBoundingClientRect()
            offset = elemRect.top - bodyRect.top
            if (window.scrollY > offset - 1200) {
              i?.classList.add('animated')
            }
          })
        }

        if (window.innerWidth <= 768) {
          const btn = smooth!.querySelector('.issues .button')
          if (btn) {
            elemRect = btn!.getBoundingClientRect()
            offset = elemRect.top - bodyRect.top
            if (window.scrollY > offset - 500) {
              btn?.classList.add('animated')
            }
          }
        }
      })
    }
  }, [DBStore.issues, ContentStore.issues.block])

  useEffect(() => {
    const sortArr = DBStore.issues?.sort((a, b) =>
      a.title.localeCompare(b.title),
    )
    let letter0 = 'A'
    if (sortArr && sortArr.length) {
      letter0 = sortArr[0].title[0].toUpperCase()
    }
    setLetter(letter0)
  }, [DBStore.issues])

  useEffect(() => {
    if (!letter.length) return
    setList(getList(letter))
  }, [letter])

  useEffect(() => {
    if (window.innerWidth > 768) {
      setTimeout(() => {
        const items = document.querySelectorAll('.issues-list .issues__item')
        const rows = document.querySelectorAll('.issues-list__row')

        if (!rows) return
        if (!items) return

        rows.forEach((r) => r.classList.add('animated'))
        items.forEach((i) => {
          const observer = new window.IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                ;(i as any)?.classList.add('animated')
              } else {
                // ;(i as any)?.classList.remove('animated')
              }
            },
            {
              root: null,
              threshold: 0.1,
            },
          )

          observer.observe(i)
        })
      }, 100)
    }
  }, [DBStore.issues, ContentStore.issues.block])

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        const items = document.querySelectorAll('.issues-list .issues__item')
        const smooth = document.querySelector('.smooth')
        const row = smooth!.querySelectorAll('.issues-list__row')
        row.forEach((i) => i.classList.add('animated'))
        items.forEach((i) => i.classList.add('animated'))
      }, 200)
    }
  }, [letter, DBStore.issues, ContentStore.issues.block])

  useEffect(() => {
    setTimeout(() => {
      const cont = document.querySelector('.issues-list')
      if (!cont) return
      const next = cont?.nextElementSibling
      const list = document.querySelector('.issues-list__list')
      const smooth = document.querySelector('.smooth')
      const v2 = document.querySelector('.issues-list__vector')
      var bodyRect = smooth!.getBoundingClientRect(),
        listRect = list!.getBoundingClientRect(),
        nextRect = next!.getBoundingClientRect(),
        contRect = cont!.getBoundingClientRect()
      var offset = listRect.top - bodyRect.top,
        offsetBottom = nextRect.top - v2!.getBoundingClientRect().height

      window.addEventListener('scroll', (args: any) => {
        if (window.scrollY >= offset && window.scrollY <= offsetBottom) {
          ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
            window.scrollY - offset
          }px, 0)`
        }
      })
    }, 1000)
  }, [])
  if (!DBStore.issues) return <></>

  if (!ContentStore.issues.block) return <></>

  const linksL = GlobalState.links
  let issues = ''
  if (linksL) {
    issues = linksL.find((l: any) => l.id == 266).link
  }
  return (
    <section className="issues-list">
      <div className="issues-list__top">
        <div style={{ overflow: 'hidden' }}>
          <div
            className="issues-list__title"
            dangerouslySetInnerHTML={{
              __html: ContentStore.issues.block.title,
            }}
          ></div>
        </div>
        <Button
          text={
            <>
              {window.innerWidth > 768 ? <Setting /> : <MSetting />}
              {window.innerWidth > 768 && 'Filter'}
              {window.innerWidth > 768 && GlobalState.filterCount ? (
                <span>({GlobalState.filterCount})</span>
              ) : (
                <></>
              )}
            </>
          }
          click={changeTheraFilterState}
          classname="black-border p11p24 filter"
        />
      </div>
      <Letters
        active={letter}
        data={DBStore.issues}
        change={(value) => {
          setLetter(value)
        }}
      />
      <div className="issues-list__list">
        {list && Object.entries(list).length ? (
          Object.entries(list).map((l, ind) => {
            const list: any = l[1] && l[1]
            return (
              <div className="issues-list__row" key={ind}>
                <h3 className="issues-list__letter">{l[0]}</h3>
                <div className="issues-list__content">
                  {list.map((item: any, index: number) => (
                    <a
                      className="issues__item"
                      key={index}
                      href={`${issues}/${item.link}`}
                    >
                      <Vector id={index} />
                      <div
                        className="issues__item-title"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></div>
                      <div
                        className="issues__item-text"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      ></div>
                      <ArrowRight className="issues__item-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            )
          })
        ) : (
          <></>
        )}
        <VScroll className="issues-list__vector" />
      </div>
    </section>
  )
})
export default IssuesList
