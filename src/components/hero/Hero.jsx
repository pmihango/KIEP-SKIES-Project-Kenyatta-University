import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Next-Level User Experiences: Custom Frontend Development Solutions</h1>
                <p>From responsive layouts to seamless navigation, Urex is dedicated 
                    to delivering frontend solutions that not only look exceptional 
                    but also drive results.</p>
                    <button className='btn'>Explore our Services <img src={dark_arrow} alt="" /></button>
            
        </div>

    </div>
  )
}

export default Hero