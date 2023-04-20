import React, { useContext } from 'react'
import { AppContext } from '../../context/GlobalContext'

const FormInputsProds = ({tipo}) => {
    const AppCtx = useContext(AppContext)

    const { handleChangeProd, formaDataProd } = AppCtx
  
    const options = {
      productname: { titulo: 'Nombre del producto', type: 'text', required:true },
      category: { titulo: 'Categoría', type: 'text', required:true },
      brand: { titulo: 'Marca', type: 'text', required:false },
      imgurl: { titulo: 'URL de la imagen', type: 'text', required:true },
      price: { titulo: 'Precio', type: 'number', required:true },
  
    }
  
    return (
      <>
        <label htmlFor={tipo}>{options[tipo].titulo}</label>
        <div>
          <input
            id={tipo}
            name={tipo}
            type={options[tipo].type}
            required={options[tipo].required}
            onChange={(e)=>{handleChangeProd(e)}}
          />
        </div>
      </>
    )
}

export default FormInputsProds