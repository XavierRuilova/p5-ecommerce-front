import React from 'react'
import './cards.css'

const Cards = (props) => {
  const {pic, title, price} = props


  return (
    <div className='card'>
        <img src={pic} alt='ilustracion'/>
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

export default Cards