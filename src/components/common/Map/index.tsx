import React, { Component, Fragment, useEffect, useRef } from 'react'
import img from '../../../assets/min-logo.svg'
import './index.scss'

const Map = ({
  location,
  zoom = 18,
  link,
}: {
  location: any
  zoom?: number
  link: string
}) => {
  const ref = useRef<any>(null)

  useEffect(() => {
    if (!ref.current) return
    // function initMap(): void {
    //   let map = new google.maps.Map(ref.current as HTMLElement, {
    //     center: { lat: +location.lat, lng: +location.lng },
    //     zoom: zoom,
    //     zoomControl: true,
    //     scaleControl: true,
    //   })
    //   const marker = new google.maps.Marker({
    //     position: { lat: +location.lat, lng: +location.lng },
    //     map: map,
    //     icon: img
    //   })
    // }
    // initMap()
  }, [location])
  return (
    <div style={{ width: '100%', height: '100%' }} ref={ref} className='map'>
      <iframe
        src={link}
        width="100%"
        height="100%"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map
