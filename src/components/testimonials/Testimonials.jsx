import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import paul from '../../assets/paul.jpg'
import joan from '../../assets/joan.jpg'
import declan from '../../assets/declan.jpg'
import janice from '../../assets/janice.jpg'

const Testimonials = () => {

    const slider = useRef();
        let tx = 0;
    const slideForward = ()=>{
        if (tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = ()=>{
        if (tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }

  return (
    <div>
        <div className="testimonials">
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={paul} alt="" />
                                <div>
                                    <h3>Paul G</h3>
                                    <span>CEO-Urex Group</span>
                                </div>
                            </div>
                            <p>"Urex Group Limited transformed our digital landscape with their exceptional 
                                software development expertise. Their team's dedication and innovative 
                                solutions exceeded our expectations, propelling our business to new heights."</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={janice} alt="" />
                                <div>
                                    <h3>Wanjeri</h3>
                                    <span>CEO-LastBorn</span>
                                </div>
                            </div>
                            <p>"Urex Group Limited's data science analysis capabilities have been instrumental 
                                in shaping our strategic decisions. Their insightful analytics and actionable
                                 insights have unlocked new opportunities, driving growth and innovation across 
                                 our organization."</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={joan} alt="" />
                                <div>
                                    <h3>Joan W</h3>
                                    <span>Founder-eHealth</span>
                                </div>
                            </div>
                            <p>"Thanks to Urex Group Limited's cyber security consultancy, we now navigate 
                                the digital world with confidence. Their proactive approach and expert 
                                guidance have shielded our assets from threats, ensuring peace of mind in today's 
                                volatile cyber landscape."</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={declan} alt="" />
                                <div>
                                    <h3>Declan M</h3>
                                    <span>CTO- CheckMate</span>
                                </div>
                            </div>
                            <p>"Choosing Urex Group Limited was the best decision for our business. 
                                Their comprehensive suite of services, from software development to 
                                cyber security and data science analysis, has positioned 
                                us for success in the digital age. Their professionalism 
                                and expertise are second to none."</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Testimonials