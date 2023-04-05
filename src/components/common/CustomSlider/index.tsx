import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Caret } from '../../../assets/caret-right.svg'
import './index.scss'
import { isTouch } from '../../../mocks/mobile'
import { ReactComponent as Arrow } from '../../../assets/caret-right.svg'
import { observer } from 'mobx-react'
import { ReactComponent as ArrowRight } from '../../../assets/ArrowRight.svg'

import ContentStore from '../../../stores/ContentStore'
import { useNavigate } from 'react-router'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
// const CustomSlider = ({
//   children,
//   countItems,
//   width,
//   block,
//   slidesToShow,
//   slidesToScroll,
// }: {
//   children: any
//   countItems: number
//   width: number
//   block?: string
//   slidesToShow: number
//   slidesToScroll: number
// }) => {
//   const [widthCont, setWidth] = useState(window.innerWidth)
//
//   const thumb = useRef<any>(null),
//     sliderBlock = useRef<any>(null),
//     sliderList = useRef<any>(null),
//     slider = useRef<any>(null)

//   useEffect(() => {
//     if (!isTouch) {
//       if (!slider.current) return

//       let sliderRect: any = slider.current.getBoundingClientRect()

//       thumb.current.onmousedown = function (event: any) {
//         event.preventDefault()
//         let thumbRect = thumb.current.getBoundingClientRect()
//         let shiftX = event.pageX - thumbRect.x

//         thumb.current.ondragstart = function () {
//           return false
//         }
//         function onMouseMove(event: any) {
//           let x = event.pageX - sliderRect.x - shiftX
//           let length =
//             sliderList.current.scrollWidth -
//             window.innerWidth +
//             sliderBlock.current.getBoundingClientRect().x * 2

//           if (x < 0) x = 0
//           if (x > slider.current.clientWidth - thumb.current.offsetWidth)
//             x = slider.current.clientWidth - thumb.current.offsetWidth

//           const translate = () => {
//             thumb.current.style.transform = `matrix(1, 0, 0, 1, ${x}, 0)`
//             sliderList.current.style.transform = `matrix(1, 0, 0, 1, ${
//               (((x ? x + thumb.current.offsetWidth : x) * length) /
//                 slider.current.clientWidth) *
//               -1
//             }, 0)`
//           }
//           requestAnimationFrame(translate)
//         }

//         slider.current.addEventListener('mousemove', onMouseMove)

//         function onMouseUp() {
//           slider.current.removeEventListener('mousemove', onMouseMove)
//           document.removeEventListener('mouseup', onMouseUp)
//         }

//         document.addEventListener('mouseup', onMouseUp)
//       }
//     } else {
//       let sliderRect: any = slider.current.getBoundingClientRect()

//       ;(thumb.current as HTMLElement).addEventListener(
//         'touchstart',
//         (event: any) => {
//           let thumbRect = thumb.current.getBoundingClientRect()
//           let shiftX = event.targetTouches[0].clientX - thumbRect.x

//           thumb.current.ondragstart = function () {
//             return false
//           }
//           function onMouseMove(event: any) {
//             let x = event.targetTouches[0].clientX - sliderRect.x - shiftX
//             let length =
//               sliderList.current.scrollWidth -
//               window.innerWidth +
//               sliderBlock.current.getBoundingClientRect().x * 2

//             if (x < 0) x = 0
//             if (x > slider.current.clientWidth - thumb.current.offsetWidth)
//               x = slider.current.clientWidth - thumb.current.offsetWidth

//             const translate = () => {
//               thumb.current.style.transform = `matrix(1, 0, 0, 1, ${x}, 0)`
//               sliderList.current.style.transform = `matrix(1, 0, 0, 1, ${
//                 (((x ? x + thumb.current.offsetWidth : x) * length) /
//                   slider.current.clientWidth) *
//                 -1
//               }, 0)`
//             }
//             requestAnimationFrame(translate)
//           }
//           thumb.current.addEventListener('touchmove', onMouseMove)
//           function onMouseUp() {
//             thumb.current.removeEventListener('touchmove', onMouseMove)
//             document.removeEventListener('touchend', onMouseUp)
//           }
//           document.addEventListener('touchend', onMouseUp)
//         },
//         {
//           passive: true,
//         },
//       )
//     }
//   }, [widthCont])

//   useEffect(() => {
//     if (!isTouch) {
//       if (!slider) return

//       let sliderRect: any = sliderBlock.current.getBoundingClientRect()
//       sliderList.current.onmousedown = function (event: any) {
//         event.preventDefault()
//         let thumbRect = sliderList.current.getBoundingClientRect()
//         let shiftX = event.pageX - thumbRect.x

//         sliderList.current.ondragstart = function () {
//           return false
//         }
//         function onMouseMove(event: any) {
//           let x = event.pageX - sliderRect.x - shiftX
//           let length =
//             sliderList.current.scrollWidth -
//             window.innerWidth +
//             sliderRect.x * 2
//           if (x > 0) x = 0
//           if (x < length * -1) {
//             x = length * -1
//           }

//           const translate = () => {
//             sliderList.current.style.transform = `matrix(1, 0, 0, 1, ${x}, 0)`

//             let del =
//               x / length
//                 ? slider.current.getBoundingClientRect().width -
//                   thumb.current.getBoundingClientRect().width
//                 : 1
//             thumb.current.style.transform = `matrix(1, 0, 0, 1, ${
//               (x / length) * del * -1
//             }, 0)`
//           }

//           requestAnimationFrame(translate)
//         }

//         sliderList.current.addEventListener('mousemove', onMouseMove)

//         function onMouseUp() {
//           sliderList.current.removeEventListener('mousemove', onMouseMove)
//           document.removeEventListener('mouseup', onMouseUp)
//         }

//         document.addEventListener('mouseup', onMouseUp)
//       }
//     } else {
//       if (!slider) return

//       let sliderRect: any = sliderBlock.current.getBoundingClientRect()

//       ;(sliderList.current as HTMLElement).addEventListener(
//         'touchstart',
//         (event: any) => {
//           // event.preventDefault()
//           let thumbRect = sliderList.current.getBoundingClientRect()

//           let shiftX = event.targetTouches[0].clientX - thumbRect.x

//           sliderList.current.ondragstart = function () {
//             return false
//           }
//           function onMouseMove(event: any) {
//             let x = event.targetTouches[0].clientX - sliderRect.x - shiftX
//             let length =
//               sliderList.current.scrollWidth -
//               window.innerWidth +
//               sliderRect.x * 2
//             if (x > 0) x = 0
//             if (x < length * -1) {
//               x = length * -1
//             }

//             const translate = () => {
//               sliderList.current.style.transform = `matrix(1, 0, 0, 1, ${x}, 0)`

//               let del =
//                 x / length
//                   ? slider.current.getBoundingClientRect().width -
//                     thumb.current.getBoundingClientRect().width
//                   : 1
//               thumb.current.style.transform = `matrix(1, 0, 0, 1, ${
//                 (x / length) * del * -1
//               }, 0)`
//             }

//             requestAnimationFrame(translate)
//           }

//           sliderList.current.addEventListener('touchmove', onMouseMove, {
//             passive: true,
//           })

//           function onMouseUp() {
//             sliderList.current.removeEventListener('touchmove', onMouseMove)
//             document.removeEventListener('touchend', onMouseUp)
//           }

//           document.addEventListener('touchend', onMouseUp, {
//             passive: true,
//           })
//         },
//         {
//           passive: true,
//         },
//       )
//     }
//   }, [widthCont])

//   useEffect(() => {
//     window.addEventListener('resize', () => setWidth(window.innerWidth))
//   }, [])

//   return (
//     <section className="slider" ref={sliderBlock}>
//       <div className={classNames('slider__list')} ref={sliderList}>
//         {children}
//       </div>
//       <div className="slider__bottom">
//         <div className="slider__range" ref={slider}>
//           <div className="slider__range-thumb" ref={thumb}>
//             <div className="slider__range-thumb-bg"></div>
//           </div>
//           <div className="slider__range-track"></div>
//         </div>

//         {block == 'therapists' && (
//           <a href={'/therapists'} className="p18p40 black-border button">
//             {' '}
//             <div className="button__text">
//               {ContentStore.home.therapists.buttonTitle} <Arrow />
//             </div>
//           </a>
//         )}
//       </div>
//     </section>
//   )
// }

// export default CustomSlider

import Slider from 'react-slick'

const CustomSlider = observer(
  ({
    children,
    countItems,
    width,
    block,
    slidesToShow,
    slidesToScroll,
    variableWidth = true,
    autoPlay = false,
  }: {
    children: any
    countItems: number
    width: number
    block?: string
    slidesToShow: number
    slidesToScroll: number
    variableWidth?: boolean
    autoPlay?: boolean
  }) => {
    const [autoPlayStart, setStart] = useState(false)
    const [contWidth, setWidth] = useState(window.innerWidth)
    const settings = {
      dots: true,
      speed: 1000,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      arrows: contWidth >= 1024,
      variableWidth: false,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 9000,
      pauseOnHover: false,
      nextArrow: (
        <div className="slider__btn back">
          <ArrowRight />
        </div>
      ),
      prevArrow: (
        <div className="slider__btn next">
          <ArrowRight />
        </div>
      ),
    }

    useEffect(() => {
      window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [])
    return (
      <section className="slider">
        <div className="slider__list">
          <Slider {...settings}>{children}</Slider>
        </div>
      </section>
    )
  },
)

export default CustomSlider
