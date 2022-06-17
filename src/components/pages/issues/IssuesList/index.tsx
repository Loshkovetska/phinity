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
import GlobalState from '../../../../stores/GlobalState'
import { Link } from 'react-router-dom'
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
    let arrs =
      window.innerWidth > 768
        ? DBStore.issues
        : DBStore.issues?.filter(
            (s) => s.title[0].toLowerCase() == letter.toLocaleLowerCase(),
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
    if (GlobalState.locoScroll) {
      GlobalState.locoScroll.on('scroll', (args: any) => {
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

        if (args.scroll.y > offset - 500) {
          issues?.classList.add('animated')
        }
        if (args.scroll.y > offset - 500) {
          title?.classList.add('animated')
          button?.classList.add('animated')
          items.forEach((i, id) => {
            elemRect = i!.getBoundingClientRect()
            offset = elemRect.top - bodyRect.top
            if (args.scroll.y > offset - 600) {
              i?.classList.add('animated')
            }
          })
        }
        elemRect = lettersBlock!.getBoundingClientRect()
        offset = elemRect.top - bodyRect.top
        if (args.scroll.y > offset - 300) {
          letters.forEach((i, id) => {
            ;(i as any).classList.add('animated')
            ;(i as HTMLElement).style.transitionDelay = `${id / 8}s`
          })
        }

        if (window.innerWidth <= 768) {
          const btn = smooth!.querySelector('.issues .button')
          if (btn) {
            elemRect = btn!.getBoundingClientRect()
            offset = elemRect.top - bodyRect.top
            if (args.scroll.y > offset - 500) {
              btn?.classList.add('animated')
            }
          }
        }
      })
    }
  }, [GlobalState.locoScroll])

  useEffect(() => {
    if (DBStore.issues) {
      setList(getList(letter))
    }
  }, [letter, DBStore.issues])

  useEffect(() => {
    setTimeout(() => {
      if (GlobalState.locoScroll) {
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

        GlobalState.locoScroll &&
          GlobalState.locoScroll.on('scroll', (args: any) => {
            if (args.scroll.y >= offset && args.scroll.y <= offsetBottom) {
              ;(v2 as HTMLElement).style.transform = `translate3d(0, ${
                args.scroll.y - offset
              }px, 0)`
            }
          })
      }
    }, 1000)
  }, [])
  if (!DBStore.issues) return <></>

  if(!ContentStore.issues.block)return <></>
  return (
    <section className="issues-list">
      <div className="issues-list__top">
        <div style={{ overflow: 'hidden' }}>
          <div className="issues-list__title" dangerouslySetInnerHTML={{__html:ContentStore.issues.block.title}}></div>
        </div>
        <Button
          text={
            <>
              {window.innerWidth > 768 ? <Setting /> : <MSetting />}
              {window.innerWidth > 768 && 'Filter'}
              {-1 > 0 && <span>(2)</span>}
            </>
          }
          click={() => {}}
          classname="black-border p11p24 filter"
        />
      </div>
      <Letters
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
                    <Link
                      className="issues__item"
                      key={index}
                      to={`/issue/${item.id}`}
                    >
                      <Vector id={index} />
                      <div
                        className="issues__item-title"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></div>
                      <div className="issues__item-text">{item.text}</div>
                      <ArrowRight className="issues__item-arrow" />
                    </Link>
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
