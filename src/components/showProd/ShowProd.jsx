import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/GlobalContext";
import "./showprod.css";

const ShowProd = () => {
  const ctx = useContext(AppContext);
  const { findProduct, products, showProducts } = ctx;
  const { id } = useParams();

  useEffect(() => {
    findProduct(id);
    console.log("PRODUCTO", showProducts);
  }, [id]);

  return (
    <>
      {showProducts && (
        <>
          <div className="showprod-container">
            <section className="showprod-box">
              <h3>{showProducts.productname}</h3>
              <img
                className="showprod-image"
                alt="product_"
                src={showProducts.imgurl}
              />
            </section>

            <section>
              <h3>Descripción</h3>
              <article style={{ textAlign: "justify" }}>
                {showProducts.description}
              </article>
              <div>Precio: {showProducts.price}</div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default ShowProd;
