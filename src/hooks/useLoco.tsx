import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss'
import { runInAction } from 'mobx'
import { useLocation } from 'react-router'
import GlobalState from '../stores/GlobalState'

export default function useLocoScroll(start: boolean) {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!start) return
    let locoScroll: any = null
    const scrollEl = document.querySelector('.smooth')

    if (!scrollEl) return

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.5,
      repeat: true,
      getDirection: true,
      getSpeed: true,
      elMobile: scrollEl,
      smartphone: {
        breakpoint: 0,
        smooth: true,
      },
      tablet: {
        breakpoint: 0,
        smooth: true,
      },
      reloadOnContextChange: true,
    })

    window.addEventListener('resize', () => locoScroll && locoScroll.update())

    setInterval(() => {
      locoScroll && locoScroll.update()
    }, 1000)

    runInAction(() => {
      GlobalState.locoScroll = locoScroll
    })

    return () => {
      if (locoScroll) {
        locoScroll.destroy()
        locoScroll = null
        runInAction(() => {
          GlobalState.locoScroll = locoScroll
        })
      }
    }
  }, [start, pathname])
}
