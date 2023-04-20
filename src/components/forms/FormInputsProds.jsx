import React, { useContext } from 'react'
import { AppContext } from '../../context/GlobalContext'

const FormInputsProds = ({tipo}) => {
    const AppCtx = useContext(AppContext)

    const { handleChangeProd, formaDataProd } = AppCtx
  
    const options = {
      productname: { titulo: 'Nombre del producto', type: 'text' },
      category: { titulo: 'Categoría', type: 'text' },
      brand: { titulo: 'Marca', type: 'text' },
      imgurl: { titulo: 'URL de la imagen', type: 'text' },
      price: { titulo: 'Precio', type: 'number' },
  
    }
  
    return (
      <>
        <label htmlFor={tipo}>{options[tipo].titulo}</label>
        <div>
          <input
            id={tipo}
            name={tipo}
            type={options[tipo].type}
            required
            onChange={(e)=>{handleChangeProd(e)}}
          />
        </div>
      </>
    )
}

export default FormInputsProds