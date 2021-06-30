import React from "react"
import grey from '../images/grey.png'
import './Gallery.scss'

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <h1 className="title-heading">Gallery</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='Slider'>
          <div className='Slide'>
            <img src={grey} alt='galleryImg' />
            <img src={grey} alt='galleryImg' />
            <img src={grey} alt='galleryImg' />
            <img src={grey} alt='galleryImg' />
            <img src={grey} alt='galleryImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
