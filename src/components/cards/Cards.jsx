import React from 'react'
import './cards.css'
import { useNavigate } from 'react-router-dom/dist'

const Cards = (props) => {
  const { idProd, pic, title, price } = props
  const navigate = useNavigate()
  const hadleProduct = () => {
    navigate(`/store/${idProd}`)
  }


  return (
    <div id={idProd} className="card" onClick={hadleProduct}>
      <img src={pic} alt="ilustracion" />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  )
}

export default Cards