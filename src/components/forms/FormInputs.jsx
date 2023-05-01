import React, { useContext } from 'react'
import {UserContext} from '../../context/UserContext'

const FormInputs = ({tipo}) => {
  const userCtx = useContext(UserContext)
  const { handleChange } = userCtx

  const options = {
    username: { titulo: 'Nombre de usuario', type: 'text' },
    firstname: { titulo: 'Primer nombre', type: 'text' },
    lastname: { titulo: 'Apellido', type: 'text' },
    email: { titulo: 'Direccion de E-Mail', type: 'mail' },
    password: { titulo: 'Contraseña', type: 'password' },

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
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </div>
    </>
  )
}

export default FormInputs