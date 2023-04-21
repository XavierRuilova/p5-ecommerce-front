import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import FormInputs from '../../components/forms/FormInputs'
import './login.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Login = () => {
  const userCtx = useContext(UserContext)
  const { loginUser, authStatus, verifyingToken, formData, setUserLocal } = userCtx


  const navigate = useNavigate()

  useEffect(() => {
    verifyingToken()

    if (authStatus) {
      navigate('/')
      setUserLocal(localStorage.getItem('username'))
    }
  }, [authStatus])

  if (authStatus) return null

  const sendData = (event) => {
    event.preventDefault()
    loginUser(formData)
  }

  return (
    <>
      <div className='container'>
        <h2>Iniciar sesión</h2>

        <form onSubmit={(e) => sendData(e)}>
          <FormInputs tipo='email' />
          <FormInputs tipo='password' />
          <button type='submit'>Iniciar sesión</button>
        </form>
      </div>
    </>
  )
}

export default Login