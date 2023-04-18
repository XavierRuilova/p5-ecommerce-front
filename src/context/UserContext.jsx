import { createContext, useState } from "react";
import clientAxios from "../config/axios";
export  const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        username: null, 
        firstname: null, 
        lastname: null, 
        email: null,
        password: null
    })
    const [authStatus, setAuthStatus] = useState(false)
    
    const [formData, setFormData]= useState({
        username: '', 
        firstname: '', 
        lastname: '', 
        email: '',
        password: ''
    })

    const handleChange = (event) =>{
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const createUser = async (dataForm) =>{
        try{
            const res = await clientAxios.post('http://localhost:4000/users/signup', dataForm)
            localStorage.setItem('token', res.data.token)
            setAuthStatus(true)
        } catch(error){
            console.log(error)
        }
    }

    const verifyingToken = async () => {
        const token = localStorage.getItem('token')
    
        if (token) {
          clientAxios.defaults.headers.common['x-auth-token'] = token
        } else {
          delete clientAxios.defaults.headers.common['x-auth-token']
        }
    
        try {
          const res = token && (await clientAxios.get('http://localhost:4000/users/verify'))
          setUser(res.data)
          setAuthStatus(true)
        } catch (error) {
          console.log('Error Verificando token', error)
        }
      }

      const loginUser = async (dataForm) => {
        try {
          const res = await clientAxios.post('http://localhost:4000/users/login', dataForm)
          localStorage.setItem('token', res.data.token)
          setAuthStatus(true)
        } catch (error) {
          console.log(error)
        }
      }

      const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
        setAuthStatus(false)
      }

      const data = { 
        createUser, 
        loginUser, 
        handleChange, 
        verifyingToken, 
        logout, 
        formData, 
        user, 
        authStatus }
      console.log('CONTEXTO USUARIO', data)
      return <UserContext.Provider value={data}>{children}</UserContext.Provider>

}