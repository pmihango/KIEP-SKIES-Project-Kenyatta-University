import React from 'react'
import './About.css'
import about_img from '../../assets/about1.jpg'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left"> 
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState=(true)}}/>
        </div>
        <div className="about-right">
            <h3>About Urex Group Ltd</h3>
            <h2>The Best Software Development company in Africa</h2>
            <p>Urex Group Limited stands as the pinnacle of software development prowess across the African 
                continent, renowned for its unmatched expertise and innovative solutions. With a dedicated 
                team of tech wizards, we redefine excellence in the realm of software development, crafting 
                tailored solutions that transcend expectations. Our commitment to delivering cutting-edge 
                software solutions is evident in every project we undertake, ensuring seamless integration 
                and unparalleled performance.</p>
            <p>Moreover, at Urex Group Limited, we don't just stop at software development; we lead the charge 
                in cyber security consultancy, safeguarding digital assets with unwavering vigilance. Our seasoned
                 consultants employ state-of-the-art strategies to fortify digital infrastructures, mitigating
                  risks and fortifying defenses against cyber threats. From threat assessments to proactive 
                  security measures, we empower businesses to navigate the digital landscape with confidence 
                  and resilience.</p>
            <p>Furthermore, our expertise extends to the realm of data science analysis, where we harness 
                the power of data to unlock valuable insights and drive informed decision-making. Through 
                advanced analytics and predictive modeling, we empower businesses to extract maximum value 
                from their data assets, uncovering hidden patterns and trends that fuel growth and innovation.
                 At Urex Group Limited, we don't just deliver solutions; we empower businesses to thrive in 
                 the digital age, setting new benchmarks for excellence in software development, cyber 
                 security consultancy, and data science analysis across Africa.</p>
        </div>

    </div>
  )
}

export default About