import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/Services/Services'
import Title from './components/title/Title'

const App = () => {
  return (
    <div>
          <Navbar/>
          <Hero/>
        <div className="contaner">
          <Title subTitle='Our Services' title='What We Offer'/>
          <Services/>
        </div>
      
    </div>
  )
}

export default App