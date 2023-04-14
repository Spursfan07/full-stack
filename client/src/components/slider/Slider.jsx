import React from 'react'
import './Slider.scss'
import SliderLib from 'infinite-react-carousel'

const Slider = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className='slider'>
      <div className='container'>
        <SliderLib slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </SliderLib>
      </div>
    </div>
  )
}

export default Slider
