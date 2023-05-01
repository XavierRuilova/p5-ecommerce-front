import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext';
import '../listItems/listitems.css'
import Icons from '../svg/Icons';


const AddItem = (props) => {
  const { position, image, cant, prod, price } = props;
    const ctx = useContext(UserContext)
    const {removeItem} = ctx
    return (
      <tr className="list-row">
        <td>
          <img className="list-img" src={image} alt="item" />
        </td>
        <td>
          <p>{parseFloat(cant)}</p>
        </td>
        <td>
          <p>{prod}</p>
        </td>
        <td>
          <p>{parseFloat(price) + "usd"}</p>
        </td>
        <td>
          <p>{parseFloat(price) * parseFloat(cant) + "usd"}</p>
        </td>
        <td>
          <button onClick={()=>{removeItem(position)}}>
            <Icons icon={"trash"} />
          </button>
        </td>
      </tr>
    );
}

export default AddItem