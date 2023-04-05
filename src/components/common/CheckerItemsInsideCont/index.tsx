import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'

const CheckerItemsInsideCont = observer(
  ({
    slider,
    list,
    countOfChidlren,
    container,
    child,
  }: {
    slider: any
    list: any
    countOfChidlren: number
    container: string
    child: string
  }) => {
    const [showSlider, setShow] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [])

    useEffect(() => {
      const cont = document.querySelector(container)
      if (!cont) return

      const contWidth = cont.getBoundingClientRect().width
      const ch = document.querySelector(child)
      if (!ch) return

      const margin =
        parseInt(getComputedStyle(ch).marginRight) ||
        parseInt(getComputedStyle(ch).marginLeft)

      if (
        (ch.getBoundingClientRect().width + margin) * countOfChidlren <=
        contWidth
      ) {
        setShow(false)
      } else setShow(true)
    }, [width, countOfChidlren])

    return <>{showSlider ? slider : list}</>
  },
)

export default CheckerItemsInsideCont
