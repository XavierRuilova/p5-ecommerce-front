import React from 'react'
import './cards.css'

const Cards = (props) => {
  const {idProd, pic, title, price} = props


  return (
    <div id={idProd} className='card'>
        <img src={pic} alt='ilustracion'/>
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

export default Cards