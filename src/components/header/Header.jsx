import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div>
      <img src='https://i.ibb.co/42wncLF/Captura-de-pantalla-2023-04-15-191146.png' alt="logo"/>
    </div>
    <div className='links'>
    <Link to='/login'>Iniciar sesión</Link>
    <Link to='/signup'>Registro</Link>
    </div>

    </header>
  )
}

export default Header