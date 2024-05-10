import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div>
          <Navbar/>
          <Hero/>
        <div className="contaner">
          <Services/>
        </div>
      
    </div>
  )
}

export default App