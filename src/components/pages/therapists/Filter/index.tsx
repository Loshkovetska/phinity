import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import GlobalState, {
  changeTheraFilterState,
} from '../../../../stores/GlobalState'
import { ReactComponent as Close } from '../../../../assets/close.svg'
import { ReactComponent as Arrow } from '../../../../assets/caret-right.svg'

import './index.scss'
import CheckBox from '../../../common/CheckBox'
import Button from '../../../common/Button'
import DBStore, { sortTherapists } from '../../../../stores/DBStore'
import { runInAction } from 'mobx'
const Filter = observer(() => {
  const [total, setTotal] = useState(GlobalState.theraFilterCount)
  const [state, setState] = useState<any>({
    jobCat: GlobalState.sortThera.jobCat || [],
    isJobCat: false,
    approach: GlobalState.sortThera.approach || [],
    isAppr: false,
    exper: GlobalState.sortThera.exper || [],
    isExp: false,
    time: GlobalState.sortThera.time || [],
    isTime: false,
    locate: GlobalState.sortThera.locate || [],
    isLocate: false,
  })
  useEffect(() => {
    if (GlobalState.isTheraFilter) {
      document.body.classList.add('hidden')
    } else document.body.classList.remove('hidden')
  }, [GlobalState.isTheraFilter])

  const getJobCat = (flag: boolean, str: string) => {
    let js: any = state.jobCat
    if (flag) {
      js.push(str)
    } else js = js.filter((j: any) => j != str)
    setState({ ...state, jobCat: [...js] })
  }

  const getApproach = (flag: boolean, str: string) => {
    let js: any = state.approach
    if (flag) {
      js.push(str)
    } else js = js.filter((j: any) => j != str)
    setState({ ...state, approach: [...js] })
  }
  const getExperience = (flag: boolean, str: string) => {
    let js: any = state.exper
    if (flag) {
      js.push(str)
    } else js = js.filter((j: any) => j != str)
    setState({ ...state, exper: [...js] })
  }

  const getTime = (flag: boolean, str: string) => {
    let js: any = state.time
    if (flag) {
      js.push(str)
    } else js = js.filter((j: any) => j != str)
    setState({ ...state, time: [...js] })
  }

  const getLocate = (flag: boolean, str: string) => {
    let js: any = state.locate
    if (flag) {
      js.push(str)
    } else js = js.filter((j: any) => j != str)
    setState({ ...state, locate: [...js] })
  }

  const getTotal = () => {
    let count = 0
    count += state.jobCat.length
    count += state.approach.length
    count += state.exper.length
    count += state.time.length
    count += state.locate.length
    return count
  }

  const reset = () => {
    setState({
      ...state,
      jobCat: Array(),
      approach: Array(),
      exper: Array(),
      time: Array(),
      locate: Array(),
    })
    runInAction(() => {
      GlobalState.sortThera = {
        jobCat: Array(),
        approach: Array(),
        exper: Array(),
        time: Array(),
        locate: Array(),
      }
    })
  }

  useEffect(() => {
    if (GlobalState.isTheraFilter) {
      document.querySelector('body')?.classList.add('filter')
      GlobalState.locoScroll && GlobalState.locoScroll.scrollTo(0, 0)
      GlobalState.locoScroll && GlobalState.locoScroll.stop()
      window.scrollTo(0, 0)
    } else {
      document.querySelector('body')?.classList.remove('filter')
      GlobalState.locoScroll && GlobalState.locoScroll.start()
    }
  }, [GlobalState.isTheraFilter])

  useEffect(() => {
    setTotal(getTotal())
  }, [state])

  return (
    <section
      className={classNames(
        'filter-pop',
        GlobalState.isTheraFilter && 'open',
        !GlobalState.isTheraFilter && 'hidden',
      )}
    >
      <div
        className="filter-pop__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="filter-pop__top">
          <span className="filter-pop__top-title">Filter</span>
          {total ? (
            <span className="filter-pop__top-clear" onClick={reset}>
              Clear All
            </span>
          ) : (
            ''
          )}
          <Close
            onClick={() => {
              changeTheraFilterState()
            }}
          />
        </div>
        <div className="filter-pop__col">
          {total ? (
            <div className="filter-pop__res">
              <div className="filter-pop__res-title">Applied filters</div>
              <div className="filter-pop__res-list">
                {state.jobCat.map((s: any, i: number) => (
                  <div className="filter-pop__res-block" key={i}>
                    <Close
                      onClick={() => {
                        let st = state.jobCat
                        st = st.filter((j: any) => j != s)
                        setState({ ...state, jobCat: [...st] })
                      }}
                    />
                    {s}
                  </div>
                ))}
                {state.approach.map((s: any, i: number) => (
                  <div className="filter-pop__res-block" key={i}>
                    <Close
                      onClick={() => {
                        let st = state.approach
                        st = st.filter((j: any) => j != s)
                        setState({
                          ...state,
                          approach: [...st],
                        })
                      }}
                    />
                    {s}
                  </div>
                ))}
                {state.exper.map((s: any, i: number) => (
                  <div className="filter-pop__res-block" key={i}>
                    <Close
                      onClick={() => {
                        let st = state.exper
                        st = st.filter((j: any) => j != s)
                        setState({ ...state, exper: [...st] })
                      }}
                    />
                    {s}
                  </div>
                ))}
                {state.time.map((s: any, i: number) => (
                  <div className="filter-pop__res-block" key={i}>
                    <Close
                      onClick={() => {
                        let st = state.time
                        st = st.filter((j: any) => j != s)
                        setState({ ...state, time: [...st] })
                      }}
                    />
                    {s}
                  </div>
                ))}
                {state.locate.map((s: any, i: number) => (
                  <div className="filter-pop__res-block" key={i}>
                    <Close
                      onClick={() => {
                        let st = state.locate
                        st = st.filter((j: any) => j != s)
                        setState({ ...state, locate: [...st] })
                      }}
                    />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            className={classNames(
              'filter-pop__row',
              state.jobCat.length > 0 && 'filled',
            )}
          >
            <div
              className={classNames('filter-pop__row-top')}
              onClick={() => setState({ ...state, isJobCat: !state.isJobCat })}
            >
              <div className="filter-pop__row-title">job category</div>
              <Arrow
                className={classNames(
                  'filter-pop__row-arrow',
                  state.isJobCat && 'open',
                )}
              />
            </div>
            <div
              className={classNames(
                'filter-pop__row-col hidden',
                state.isJobCat && 'show',
              )}
            >
              {DBStore.categories?.map((ci, id) => (
                <CheckBox
                  key={id}
                  text={ci}
                  change={(value) => getJobCat(value, ci)}
                  ischeck={state.jobCat.includes(ci)}
                />
              ))}
            </div>
          </div>
          <div
            className={classNames(
              'filter-pop__row',
              state.approach.length > 0 && 'filled',
            )}
          >
            <div
              className={classNames('filter-pop__row-top')}
              onClick={() => setState({ ...state, isAppr: !state.isAppr })}
            >
              <div className="filter-pop__row-title">approach</div>
              <Arrow
                className={classNames(
                  'filter-pop__row-arrow',
                  state.isAppr && 'open',
                )}
              />
            </div>
            <div
              className={classNames(
                'filter-pop__row-col hidden',
                state.isAppr && 'show',
              )}
            >
              <CheckBox
                text="Academic stress"
                change={(value) => getApproach(value, 'Academic stress')}
                ischeck={state.approach.includes('Academic stress')}
              />
              <CheckBox
                text="Children"
                change={(value) => getApproach(value, 'Children')}
                ischeck={state.approach.includes('Children')}
              />
            </div>
          </div>
          <div
            className={classNames(
              'filter-pop__row',
              state.exper.length > 0 && 'filled',
            )}
          >
            <div
              className={classNames('filter-pop__row-top')}
              onClick={() => setState({ ...state, isExp: !state.isExp })}
            >
              <div className="filter-pop__row-title">experience</div>
              <Arrow
                className={classNames(
                  'filter-pop__row-arrow',
                  state.isExp && 'open',
                )}
              />
            </div>
            <div
              className={classNames(
                'filter-pop__row-col hidden',
                state.isExp && 'show',
              )}
            >
              <CheckBox
                text="Academic stress"
                change={(value) => getExperience(value, 'Academic stress')}
                ischeck={state.exper.includes('Academic stress')}
              />
              <CheckBox
                text="Children"
                change={(value) => getExperience(value, 'Children')}
                ischeck={state.exper.includes('Children')}
              />
            </div>
          </div>
          <div
            className={classNames(
              'filter-pop__row',
              state.time.length > 0 && 'filled',
            )}
          >
            <div
              className={classNames('filter-pop__row-top')}
              onClick={() => setState({ ...state, isTime: !state.isTime })}
            >
              <div className="filter-pop__row-title">time of work</div>{' '}
              <Arrow
                className={classNames(
                  'filter-pop__row-arrow',
                  state.isTime && 'open',
                )}
              />
            </div>
            <div
              className={classNames(
                'filter-pop__row-col hidden',
                state.isTime && 'show',
              )}
            >
              <CheckBox
                text="Academic stress"
                change={(value) => getTime(value, 'Academic stress')}
                ischeck={state.time.includes('Academic stress')}
              />
              <CheckBox
                text="Children"
                change={(value) => getTime(value, 'Children')}
                ischeck={state.time.includes('Children')}
              />
            </div>
          </div>
          <div
            className={classNames(
              'filter-pop__row',
              state.locate.length > 0 && 'filled',
            )}
          >
            <div
              className={classNames('filter-pop__row-top')}
              onClick={() => setState({ ...state, isLocate: !state.isLocate })}
            >
              <div className="filter-pop__row-title">location</div>
              <Arrow
                className={classNames(
                  'filter-pop__row-arrow',
                  state.isLocate && 'open',
                )}
              />
            </div>
            <div
              className={classNames(
                'filter-pop__row-col hidden',
                state.isLocate && 'show',
              )}
            >
              <CheckBox
                text="Academic stress"
                change={(value) => getLocate(value, 'Academic stress')}
                ischeck={state.locate.includes('Academic stress')}
              />
              <CheckBox
                text="Children"
                change={(value) => getLocate(value, 'Children')}
                ischeck={state.locate.includes('Children')}
              />
            </div>
          </div>
        </div>
        <div className="filter-pop__bottom">
          <Button
            classname="blue p18p40"
            text={<>Apply {total ? <>({total})</> : ''} </>}
            click={() => {
              sortTherapists(
                {
                  jobcat: state.jobCat,
                  approach: state.approach,
                  exper: state.exper,
                  time: state.time,
                  locate: state.locate,
                },
                total,
              ).then(() => changeTheraFilterState())
            }}
          />
        </div>
      </div>
    </section>
  )
})

export default Filter
