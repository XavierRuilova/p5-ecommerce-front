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
            // localStorage.setItem('token', res.data.token)
            // localStorage.setItem('id', res.data._id)
            // localStorage.setItem('username', dataForm.firstname)
            // setAuthStatus(true)
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
          localStorage.setItem('id', res.data.verifiedUser._id)
          // localStorage.setItem('email', res.data.verifiedUser.email)



          setAuthStatus(true)
        } catch (error) {
          console.log('Error Verificando token', error)
        }
      }

      const loginUser = async (dataForm) => {
        try {
          const res = await clientAxios.post('/users/login', dataForm)
          localStorage.setItem('token', res.data.token)
          // localStorage.setItem('username', res.data.firstname)
          setAuthStatus(true)
        } catch (error) {
          console.log(error)
        }
      }

      const findUser = async (id) =>{
        try{
          const res = await clientAxios.get('/users/find', id)
          setFormData({
            username: res.data.username, 
            firstname: res.data.firstname, 
            lastname: res.data.lastname, 
          })
        }catch (error) {
          console.log(error)
        }
      }



      const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('id')

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
        setUserLocal,
      findUser }

      console.log('CONTEXTO USUARIO', data)
      return <UserContext.Provider value={data}>{children}</UserContext.Provider>

}
