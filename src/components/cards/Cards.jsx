import React from 'react'
import './cards.css'
import { useNavigate } from 'react-router-dom/dist'

const Cards = (props) => {
<<<<<<< HEAD
  const { idprod, pic, title, price, setter } = props
  const navigate = useNavigate()
  const hadleProduct = () => {
    // navigate(`/store/${idprod}`)
=======
  const { idProd, pic, title, price, setter } = props
  const navigate = useNavigate()
  const hadleProduct = () => {
>>>>>>> 46d3a655888e7337bfd8a0b2af22c83ed8f97d7e
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
