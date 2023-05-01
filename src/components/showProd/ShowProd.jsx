import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/GlobalContext";
import { UserContext } from "../../context/UserContext";
import "./showprod.css";
import Icons from "../svg/Icons";

const ShowProd = () => {
  const ctx = useContext(AppContext);
  const uctx = useContext(UserContext);
  const { findProduct, products, showProducts } = ctx;
  const { 
    ItemsCounter,
  } = uctx;
  const numb = document.getElementById("number-buy");
  let itemCart = JSON.parse(localStorage.getItem("cart"));

  const { id } = useParams();

  useEffect(() => {
    findProduct(id);
  }, [id]);

  const addCart = (value) => {
    if (itemCart === null) {
      itemCart = [];
      itemCart.push({
        productid: showProducts._id,
        image: showProducts.imgurl,
        prod: showProducts.productname,
        cant: value.value,
        price: showProducts.price,
      });
    } else {
      itemCart.push({
        productid: showProducts._id,
        image: showProducts.imgurl,
        prod: showProducts.productname,
        cant: value.value,
        price: showProducts.price,
      });
    }
    localStorage.setItem("cart", JSON.stringify(itemCart));
    value.value = 1;
    itemCart= JSON.parse(localStorage.getItem("cart")).length
    ItemsCounter()

  };
  return (
    <>
      {showProducts && (
        <>
          <div className="showprod-container">
            <section className="showprod-box">
              <div>
                <h2>{showProducts.productname}</h2>
                <img alt="product_" src={showProducts.imgurl} />
              </div>
              <article className="price">
                <h2>Precio: {`${showProducts.price}usd`}</h2>
                <div>
                  <h3>Pedido:</h3>
                  <div>
                    <span>Cantidad:</span>
                    <input
                      style={{ width: "40px" }}
                      type="number"
                      id="number-buy"
                      name="number"
                      min="1"
                      defaultValue={1}
                    />
                  </div>
                  <button
                    onClick={() => {
                      addCart(numb);
                    }}
                  >
                    <Icons icon={"cart"} />
                  </button>
                </div>
              </article>
            </section>

            <section className="showprod-container-two">
              <h3>Descripción</h3>
              <article>
                <p>{showProducts.description}</p>
              </article>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default ShowProd;
