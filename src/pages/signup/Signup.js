import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import FormInputs from '../../components/forms/FormInputs'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './signup.css'


const Signup = () => {
  const userCtx = useContext(UserContext)

  const { authStatus, createUser, formData } = userCtx

  const navigate = useNavigate()

  useEffect(() => {
    if (authStatus) navigate('/')
  }, [authStatus])

  const sendData = (event) => {
    event.preventDefault()
    createUser(formData)
  }

  return (
    <>
    <Header/>
    <div className='container'>
      <h2>Crear cuenta</h2>

      <form onSubmit={(e) => sendData(e)}>
        <FormInputs tipo='username' />
        <FormInputs tipo='firstname' />
        <FormInputs tipo='lastname' />
        <FormInputs tipo='email' />
        <FormInputs tipo='password' />
        <button type='submit'>Registrarme</button>
      </form>
    </div>
    <Footer/>
    </>
    
  )
}

export default Signup