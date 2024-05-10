import React from 'react'
import './Projects.css'
import farmtech from '../../assets/farmtech.png'
import africahospital from '../../assets/africahospital.png'
import clearlink from '../../assets/clearlink.png'
import excellent from '../../assets/excellent.png'


const Projects = () => {
  return (
    <div className='projects'>
        <div className="gallery">
            <img src={farmtech} alt="the best farmers agriculture portal" /> 
            <img src={africahospital} alt="" />
            <img src={clearlink} alt="" />
            <img src={excellent} alt="" />            
        </div>
        <button className='btn'> See More Projects Here <a href="https://ipage.co.ke"></a></button>

    </div>
  )
}

export default Projects