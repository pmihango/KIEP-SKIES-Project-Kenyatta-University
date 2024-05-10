import React from 'react'
import './Title.css'

const Title = ({SubTitle , title}) => {
  return (
    <div className='title'> 
      <p>{SubTitle}Our Services</p> 
      <h2>{title}</h2>
    </div>
  )
}

export default Title