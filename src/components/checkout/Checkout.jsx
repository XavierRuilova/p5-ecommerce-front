import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./checkout.css";
import ListItems from "../listItems/ListItems";
import PaypalButton from "../paypalbutton/PaypalButton";

const Checkout = () => {
  const ctx = useContext(UserContext);
  const { itemNumber } = ctx;

  let itemCart = JSON.parse(localStorage.getItem("cart"));
 let list = itemCart? (itemCart.map((e,i)=>{return e.price})):[]
 console.log('lista', list)
 let total = 0
 list?(list.forEach(e=>{total += parseFloat(e)})):[]


  return (
    <div style={{ margin: "30px" }}>
      <h2>Listado de pedidos:</h2>
{itemNumber>0 || itemNumber==null?(
  <div className="chkt">
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
              {itemCart? <ListItems list={itemCart} /> : <></>}
            </tbody>
          </table>
        </div>

        <section className="sum">
          <h2>Total a pagar:</h2>
          <p style={{textAlign: 'right', fontSize:'large'}}>{total} <span style={{fontWeight:"bold"}}>usd</span></p>
          {total>0?(<PaypalButton value={total}/>):<></>}

        </section>
      </div>
):(<></>)}
      
    </div>
  );
};

export default Checkout;
