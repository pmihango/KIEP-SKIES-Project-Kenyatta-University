import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/urex.png'
import menuicon from '../../assets/menu-icon.png'
import { Link, ScrollLink } from 'react-scroll';


const Navbar = () => {
   const [sticky, setSticky] = useState(false);
   useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
   })
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`} >
        <img src={logo} alt="" className='logo' />
        <ul>
            <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li> <Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
            <li> <Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li> <Link to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
            <li> <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>ContactUs</Link></li>
        </ul>
          <img src={menuicon} alt="" className='menu-icon' />
    </nav>
  )
}

export default Navbar