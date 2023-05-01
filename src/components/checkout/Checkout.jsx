import React, {useContext} from "react";
import { UserContext } from "../../context/UserContext";
import "./checkout.css";
import ListItems from "../listItems/ListItems";

const Checkout = () => {
    const ctx = useContext(UserContext)
    // const {itemCart, setItemCart}=ctx

    let itemCart = JSON.parse(localStorage.getItem("cart"))
  return (
    <div className="chkt">
      <h2>Listado de pedidos:</h2>
      <div className="list-cont">
        <table className="list-table">
          <thead>
            <tr>
              <th>
                <h5>Imagen</h5>
              </th>
              <th>
                <h5>Cant.</h5>
              </th>
              <th>
                <h5>Producto</h5>
              </th>
              <th>
                <h5>P. Unit</h5>
              </th>
              <th>
                <h5>Total</h5>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">
            <ListItems list={itemCart} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checkout;
