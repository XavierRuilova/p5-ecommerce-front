import { useState, createContext } from "react";
import clientAxios from "../config/axios";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [showProducts, setShowProducts] = useState();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formDataProd, setFormDataProd] = useState({
    productname: "",
    category: "",
    brand: "",
    description: "",
    price: "",
  });

  const handleChangeProd = (event) => {
    event.preventDefault();
    setFormDataProd({
      ...formDataProd,
      [event.target.name]: event.target.value,
    });
  };

  const getProducts = async () => {
    try {
      const res = await clientAxios.get("/products/load");
      setProducts(res.data.Product);
    } catch (error) {
      console.log(error);
    }
  };

  const findProduct = async (id) => {
    try {
      const res = await clientAxios.get(`/products/find/${id}`);
      setShowProducts(res.data.Product);
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async (dataForm) => {
    try {
      const res = await clientAxios.post("/products/upload", dataForm);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    products,
    setProducts,
    showProducts,
    error,
    setError,
    success,
    setSuccess,
    formDataProd,
    handleChangeProd,
    getProducts,
    findProduct,
    createProduct,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
