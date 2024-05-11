import React from 'react'
import './Contact.css'
import contact_icon from '../../assets/contact.png'
import mail_icon from '../../assets/mail.png'
import web_icon from '../../assets/web.png'
import phone_icon from '../../assets/telephone.png'
import location_icon from '../../assets/location.png'


const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us an Enquiry <img src={contact_icon} alt="" /></h3>
            <p>Feel free to reach out to us at Urex Group Limited for any inquiries, collaborations,
                 or questions you may have. Our team is dedicated to providing exceptional service and 
                 support to meet your needs. Whether you're interested in our software development solutions,
                  cyber security consultancy services, or data science analysis expertise, we're here to 
                  assist you every step of the way. Contact us today to learn more about how we can help 
                  elevate your business in the digital landscape. Your success is our priority, 
                  and we look forward to hearing from you soon!</p>
            <ul>
                <li><img src={web_icon} alt="" />https://urexgroup.co.ke</li>
                <li><img src={mail_icon} alt="" />pmihango@gmail.com</li>
                <li><img src={phone_icon} alt="" />+254 720 078 029 </li>
                <li><img src={location_icon} alt="" />Chandaria Business Center, Thika Road, K.U Main Gate.</li>
            </ul>
        </div>
        <div className="contact-col"></div>

    </div>
  )
}

export default Contact