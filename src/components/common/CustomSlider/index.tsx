import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { ReactComponent as Caret } from '../../../assets/caret-right.svg'
import './index.scss'
import { isTouch } from '../../../mocks/mobile'
import { ReactComponent as Arrow } from '../../../assets/caret-right.svg'

import Button from '../Button'
import ContentStore from '../../../stores/ContentStore'
import { useNavigate } from 'react-router'
const CustomSlider = ({
  children,
  countItems,
  width,
  block,
}: {
  children: any
  countItems: number
  width: number
  block?: string
}) => {
  const navigate = useNavigate()
  const thumb = useRef<any>(null),
    sliderBlock = useRef<any>(null),
    sliderList = useRef<any>(null),
    slider = useRef<any>(null)

  useEffect(() => {
    if (!isTouch) {
      if (!slider.current) return

      let sliderRect: any = slider.current.getBoundingClientRect()

      thumb.current.onmousedown = function (event: any) {
        event.preventDefault()
        let thumbRect = thumb.current.getBoundingClientRect()
        let shiftX = event.pageX - thumbRect.x

        thumb.current.ondragstart = function () {
          return false
        }
        function onMouseMove(event: any) {
          let x = event.pageX - sliderRect.x - shiftX
          let length =
            sliderList.current.scrollWidth -
            window.innerWidth +
            sliderBlock.current.getBoundingClientRect().x * 2

          if (x < 0) x = 0
          if (x > slider.current.clientWidth - thumb.current.offsetWidth)
            x = slider.current.clientWidth - thumb.current.offsetWidth

          const translate = () => {
            thumb.current.style.transform = `matrix(1, 0, 0, 1, ${x}, 0)`
            sliderList.current.style.transform = `matrix(1, 0, 0, 1, ${
              (((x ? x + thumb.current.offsetWidth : x) * length) /
                slider.current.clientWidth) *
              -1
            }, 0)`
          }
          requestAnimationFrame(translate)
        }

        slider.current.addEventListener('mousemove', onMouseMove)

        function onMouseUp() {
          slider.current.removeEventListener('mousemove', onMouseMove)
          document.removeEventListener('mouseup', onMouseUp)
        }

        document.addEventListener('mouseup', onMouseUp)
      }
    } else {
      let sliderRect: any = slider.current.getBoundingClientRect()
      thumb.current.ontouchstart = (event: any) => {
        let thumbRect = thumb.current.getBoundingClientRect()
        let shiftX = event.targetTouches[0].clientX - thumbRect.x

        thumb.current.ondragstart = function () {
          return false
        }
        function onMouseMove(event: any) {
          let x = event.targetTouches[0].clientX - sliderRect.x - shiftX
          let length =
            sliderList.current.scrollWidth -
            window.innerWidth +
            sliderBlock.current.getBoundingClientRect().x * 2

          if (x < 0) x = 0
          if (x > slider.current.clientWidth - thumb.current.offsetWidth)
            x = slider.current.clientWidth - thumb.current.offsetWidth

          const translate = () => {
            thumb.current.style.transform = `matrix(1, 0, 0, 1, ${x}, 0)`
            sliderList.current.style.transform = `matrix(1, 0, 0, 1, ${
              (((x ? x + thumb.current.offsetWidth : x) * length) /
                slider.current.clientWidth) *
              -1
            }, 0)`
          }
          requestAnimationFrame(translate)
        }
        thumb.current.addEventListener('touchmove', onMouseMove)
        function onMouseUp() {
          thumb.current.removeEventListener('touchmove', onMouseMove)
          document.removeEventListener('touchend', onMouseUp)
        }
        document.addEventListener('touchend', onMouseUp)
      }
    }
  }, [])

  useEffect(() => {
    if (!isTouch) {
      if (!slider) return

      let sliderRect: any = sliderBlock.current.getBoundingClientRect()
      sliderList.current.onmousedown = function (event: any) {
        event.preventDefault()
        let thumbRect = sliderList.current.getBoundingClientRect()
        let shiftX = event.pageX - thumbRect.x

        sliderList.current.ondragstart = function () {
          return false
        }
        function onMouseMove(event: any) {
          let x = event.pageX - sliderRect.x - shiftX
          let length =
            sliderList.current.scrollWidth -
            window.innerWidth +
            sliderRect.x * 2
          if (x > 0) x = 0
          if (x < length * -1) {
            x = length * -1
          }

          const translate = () => {
            sliderList.current.style.transform = `matrix(1, 0, 0, 1, ${x}, 0)`

            let del =
              x / length
                ? slider.current.getBoundingClientRect().width -
                  thumb.current.getBoundingClientRect().width
                : 1
            thumb.current.style.transform = `matrix(1, 0, 0, 1, ${
              (x / length) * del * -1
            }, 0)`
          }

          requestAnimationFrame(translate)
        }

        sliderList.current.addEventListener('mousemove', onMouseMove)

        function onMouseUp() {
          sliderList.current.removeEventListener('mousemove', onMouseMove)
          document.removeEventListener('mouseup', onMouseUp)
        }

        document.addEventListener('mouseup', onMouseUp)
      }
    } else {
      if (!slider) return

      let sliderRect: any = sliderBlock.current.getBoundingClientRect()

      sliderList.current.ontouchstart = function (event: any) {
        event.preventDefault()
        let thumbRect = sliderList.current.getBoundingClientRect()
        let shiftX = event.targetTouches[0].clientX - thumbRect.x

        sliderList.current.ondragstart = function () {
          return false
        }
        function onMouseMove(event: any) {
          let x = event.targetTouches[0].clientX - sliderRect.x - shiftX
          let length =
            sliderList.current.scrollWidth -
            window.innerWidth +
            sliderRect.x * 2
          if (x > 0) x = 0
          if (x < length * -1) {
            x = length * -1
          }

          const translate = () => {
            sliderList.current.style.transform = `matrix(1, 0, 0, 1, ${x}, 0)`

            let del =
              x / length
                ? slider.current.getBoundingClientRect().width -
                  thumb.current.getBoundingClientRect().width
                : 1
            thumb.current.style.transform = `matrix(1, 0, 0, 1, ${
              (x / length) * del * -1
            }, 0)`
          }

          requestAnimationFrame(translate)
        }

        sliderList.current.addEventListener('touchmove', onMouseMove)

        function onMouseUp() {
          sliderList.current.removeEventListener('touchmove', onMouseMove)
          document.removeEventListener('touchend', onMouseUp)
        }

        document.addEventListener('touchend', onMouseUp)
      }
    }
  }, [])
  return (
    <section className="slider" ref={sliderBlock}>
      <div className="slider__list" ref={sliderList}>
        {children}
      </div>
      <div className="slider__bottom">
        <div className="slider__range" ref={slider}>
          <div className="slider__range-thumb" ref={thumb}>
            <div className="slider__range-thumb-bg"></div>
          </div>
          <div className="slider__range-track"></div>
        </div>
        {block == 'therapists' && (
          <Button
            text={
              <>
                {ContentStore.home.therapists.buttonTitle} <Arrow />
              </>
            }
            click={() => navigate('/therapists')}
            classname="p18p40 black-border"
          />
        )}
      </div>
    </section>
  )
}

export default CustomSlider
