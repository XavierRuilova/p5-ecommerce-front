import { useState, createContext } from 'react'
import clientAxios from '../config/axios'
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState()
  
  
    const getProducts = async () => {
      try {
        const res = await clientAxios.get('/products/load')
        setProducts(res.data.products)
      } catch (error) {
        console.log(error)
      }
    }
  
  
    const data = {
        getProducts,
        products,
        setProducts,
    }
    console.log('CONTEXTO', data)
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
  }