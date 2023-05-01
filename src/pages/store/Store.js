import React, { useEffect, useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
import CardList from "../../components/cardlist/CardList";
import { Outlet } from "react-router-dom";
import "./store.css";

const Store = () => {
  const ctx = useContext(AppContext);
  const { getProducts, products, } = ctx;

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
        price: ` ${item.price}usd`,
      };
    });
  };

  return (
    <>
      <section className="general">
        <article className="slider-container">
          <CardList list={products ? data() : []} />
        </article>
        <Outlet/>

      </section>

    </>
  );
};

export default Store;
