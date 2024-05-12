import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Title from './components/title/Title'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import VideoPlayer from './components/video player/VideoPlayer'
// import { useState } from 'react'

const App = () => {

const [playState, setPlayState] = useState(false);

  return (
    <div>
          <Navbar/>
          <Hero/>
        <div className="container">
          <Title subTitle='Our Services' title='What We Offer'/>
          <Services/>
          <About playState = {playState}/>
          <Title subTitle='Portifolio' title='Our Projects'/>
          <Projects/>
          <Title subTitle='Testimonials' title='What Our Clients Say'/>
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get in Touch with Urex'/>
          <Contact/>
          <Footer/>
        </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App