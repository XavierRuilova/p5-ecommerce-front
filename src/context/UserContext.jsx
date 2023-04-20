import { createContext, useState } from "react";
import clientAxios from "../config/axios";
export  const UserContext = createContext()

export const UserProvider = ({children}) =>{
  const [userLocal, setUserLocal] = useState()
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
            const res = await clientAxios.post('/users/signup', dataForm)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username', dataForm.firstname)
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
          const res = token && (await clientAxios.get('/users/verify'))
          setUser(res.data)
          localStorage.setItem('username', res.data.verifiedUser.firstname)

          setAuthStatus(true)
        } catch (error) {
          console.log('Error Verificando token', error)
        }
      }

      const loginUser = async (dataForm) => {
        try {
          const res = await clientAxios.post('/users/login', dataForm)
          localStorage.setItem('token', res.data.token)
*          localStorage.setItem('username', res.data.firstname)

          setAuthStatus(true)
        } catch (error) {
          console.log(error)
        }
      }

    //   const updateUser = async (dataForm) => {
    //     const token = localStorage.getItem('token')
    
    //     if (token) {
    //       clientAxios.defaults.headers.common['x-auth-token'] = token
    //     } else {
    //       delete clientAxios.defaults.headers.common['x-auth-token']
    //     }
    //     try {
    //         const res = token && (await clientAxios.get('/users/load', ))
    //         setUser(res.data)
    //         setAuthStatus(true)
    //         setFormData(dataForm)
    //         // const res = await clientAxios.put('/users/update', dataForm)


    //     }catch (error){
    //         console.log(error)
    //     }
    //   }

      const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setUserLocal('')

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
        authStatus,
        userLocal, 
        setUserLocal }

      console.log('CONTEXTO USUARIO', data)
      return <UserContext.Provider value={data}>{children}</UserContext.Provider>

}
