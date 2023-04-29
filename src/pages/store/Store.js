import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
import CardList from "../../components/cardlist/CardList";
import { Outlet } from "react-router-dom";
import "./store.css";

const Store = () => {
  const ctx = useContext(AppContext);
  const { getProducts, products, setProducts, showProducts } = ctx;
  const [productid, setProductid] = useState()

  useEffect(() => {
    getProducts();
    
  }, []);

  const data = () => {
    return products.map((item) => {
      return {
        idprod: item._id,
        imgurl: item.imgurl,
        description: item.description,
        productname: item.productname,
        price: `${item.price} USD`,
      };
    });
  };

  return (
    <>
      <section style={{ display: "flex" }}>
        <article className="slider-container">
          <CardList list={products ? data() : []} />
        </article>
        {/* <article>
          {productid && productid}

        </article> */}
        <Outlet/>

      </section>

    </>
  );
};

export default Store;
