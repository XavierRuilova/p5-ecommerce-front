import { useState, createContext } from 'react'
import clientAxios from '../config/axios'
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState({
      productname: null, 
      category: null, 
      brand: null, 
      description: null,
      price: null,
    })
    const [newProduct, setNewProduct] = useState()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formDataProd, setFormDataProd]= useState({
      productname: '', 
      category: '', 
      brand: '', 
      description: '',
      price: ''
  })

  const handleChangeProd = (event) =>{
    // event.preventDefault()
    setFormDataProd({
        ...formDataProd,
        [event.target.name]: event.target.value,
    })
}

    const getProducts = async () => {
      try {
        const res = await clientAxios.get('http://localhost:4000/products/load')
        setProducts(res.data.Product)
      } catch (error) {
        console.log(error)
      }
    }
  
    const createProduct = async (dataForm) => {

      try {
        const res = await clientAxios.post('http://localhost:4000/products/upload', dataForm)
        // setSuccess(true)
      } catch (error) {
        console.log(error)
      }
    }
  
    const data = {
        getProducts,
        products,
        setProducts,
        error, 
        setError, 
        newProduct, 
        setNewProduct, 
        createProduct,
        success, 
        setSuccess, 
        handleChangeProd, 
        formDataProd,

    }
    console.log('CONTEXTO', data)
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
  }