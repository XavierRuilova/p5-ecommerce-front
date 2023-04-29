import React from 'react'
import './cards.css'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  const { idprod, pic, title, price } = props
  // const hadleProduct = () => {
  //   setter(idprod)
  // }


  return (
    <Link to={`/store/${idprod}`}>
    <div id={idprod} className="card" >
      <img src={pic} alt="ilustracion" />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
    </Link>

  )
}

export default Cards
