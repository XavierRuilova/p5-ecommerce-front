import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'
// import { UserContext } from "../../context/UserContext";
import { AppContext } from "../../context/GlobalContext";
import FormInputsProds from "../../components/forms/FormInputsProds";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const NewProduct = () => {
  const appCtx = useContext(AppContext);

  // const { authStatus, createUser, formData } = userCtx
  const {  createProduct, newProduct, setNewProduct, success, error, setError, setSuccess, formDataProd, handleChangeProd  } = appCtx;
//   const { authStatus, handleChange } = useContext(UserContext)
  
//   const [ok, setOk] = useState(false)

//   const handleChanges = (event) => {
//     setNewProduct({
//         ...newProduct,
//         [event.target.name]: event.target.value,
//     }
//     )
//     console.log(newProduct)

//   }

//   const handleClick = async (event) => {
//     setError(false)
//     setSuccess(false)
//     await handleChange(event)
//     setOk(true)
//   }

//   useEffect(() => {
//     ok && createProduct(newProduct)
//     setOk(false)
//   }, [ok])

  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (authStatus==false) navigate('/')
  // }, [authStatus])

  const sendData = (event) => {
    event.preventDefault();
    createProduct(formDataProd);
  };

  return (
    <>
      <Header />
      <div >
        <h2>Nuevo producto</h2>

        <form onSubmit={(e) => sendData(e)}>
          <FormInputsProds tipo="productname"/>
          <label htmlFor="category">Categoría</label>
          <br />
          <select
            style={{ width: "180px", height: "25px", borderRadius: "4px", marginTop:'6px', marginLeft:'6px'}}
            name="category"
            id="category"
            required
            onChange={(e)=>handleChangeProd(e)}
          >
            <option value="none">---------------------------------------</option>
            <option value="Hogar">Hogar</option>
            <option value="Ferreteria">Ferreteria</option>
            <option value="Vestimenta">Vestimenta</option>
            <option value="Deporte">Deporte</option>
          </select>
          <br />
          <FormInputsProds tipo="brand"/>
          <FormInputsProds tipo="imgurl" />
          <label for="comentarios">Descripción</label>
          <br />
          <textarea
          style={{marginTop:'6px', marginLeft:'6px'}}
            id="description"
            name="description"
            rows="25"
            cols="70"
            required
            onChange={(e)=>handleChangeProd(e)}
          />
          <br />
          <FormInputsProds tipo="price"/>

          <button type="submit">Crear</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NewProduct;
