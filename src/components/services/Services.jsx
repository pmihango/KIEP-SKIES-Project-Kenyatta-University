import React from 'react'
import './Services.css'
import software_development from '../../assets/service_1.webp'
import cyber_security from '../../assets/service_2.jpg'
import data_analysis from '../../assets/service_3.avif'
import software_development_icon from '../../assets/software_development.png'
import cyber_security_icon from '../../assets/cyber_security.png'
import data_analysis_icon from '../../assets/data_analysis.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="service"> <img src={software_development} alt=""  /> 
            <div className="caption"> <img src={software_development_icon} alt="" /> <p>Software Development</p></div>
        </div>
        <div className="service"> <img src={cyber_security} alt="" />
            <div className="caption"> <img src={cyber_security_icon} alt="" /> <p>Cyber Security</p></div>
        </div>
        <div className="service"> <img src={data_analysis} alt="" />
        <div className="caption"> <img src={data_analysis_icon} alt="" /> <p>Data Analysis</p></div>
        </div>
    </div>
  )
}

export default Services