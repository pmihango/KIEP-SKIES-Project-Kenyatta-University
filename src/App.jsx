import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Title from './components/title/Title'
import About from './components/about/About'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <div>
          <Navbar/>
          <Hero/>
        <div className="container">
          <Title subTitle='Our Services' title='What We Offer'/>
          <Services/>
          <About/>
          <Title subTitle='Portifolio' title='Our Projects'/>
          <Projects/>
          <Title subTitle='Testimonials' title='What Our Clients Say'/>

        </div>
      
    </div>
  )
}

export default App