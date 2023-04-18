import React, { useContext } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Header = () => {
  const ctx = useContext(UserContext)

  const { logout, authStatus } = ctx

  return (
    <header>
    <div>
      <Link to='/'>
      <img src='https://i.ibb.co/42wncLF/Captura-de-pantalla-2023-04-15-191146.png' alt="logo"/>
      </Link>
    </div>
    <div className='links'>
      {authStatus ? (
        <>
        <Link to='/store'>Mi tienda</Link>
        <Link to='/profile'>Mi perfil</Link>
        <Link to='/' onClick={logout}>Cerrar sesión</Link>
      </>
          
      ) : (
        <>
        <Link to='/login'>Iniciar sesión</Link>
        <Link to='/signup'>Registro</Link>
        </>

      )}

    </div>

    </header>
  )
}

export default Header