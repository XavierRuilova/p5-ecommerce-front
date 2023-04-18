import React from 'react'
import './cards.css'

const Cards = ({pic, title, description}) => {


  return (
    <div className='card'>
        <img src={pic} alt='ilustracion'/>
        <h3>{title}</h3>
    </div>
  )
}

export default Cards