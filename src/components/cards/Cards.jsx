import React from 'react'
import './cards.css'

const Cards = (props) => {
  const { idprod, pic, title, price, setter } = props
  const hadleProduct = () => {
    setter(idprod)
  }


  return (
    <div id={idprod} className="card" onClick={hadleProduct}>
      <img src={pic} alt="ilustracion" />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  )
}

export default Cards
