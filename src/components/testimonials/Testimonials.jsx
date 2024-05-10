import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import paul from '../../assets/paul.png'
import joan from '../../assets/joan.png'
import declan from '../../assets/declan.png'
import janice from '../../assets/janice .png'

const Testimonials = () => {
  return (
    <div>
        <div className="testimonials">
            <img src={next_icon} alt="" className='next-btn'/>
            <img src={back_icon} alt="" className='back-btn'/>
            <div className="slider"></div>
        </div>
    </div>
  )
}

export default Testimonials