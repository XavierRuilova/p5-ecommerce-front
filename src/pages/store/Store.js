import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
import { AppContext } from "../../context/GlobalContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/cardlist/CardList";
import "./store.css";

const Store = () => {
    const ctx = useContext(AppContext)
  const { getProducts, products } = ctx

  useEffect( () => {
     getProducts();

  }, []);

  const data = ()=>{
    return products.map((item)=>{
      return{
          idprod: item._id,
          imgurl: item.imgurl,
          productname: item.productname,
          price: `${item.price} USD`,
      }
  })
  }
  

    return (
      <>
        <Header />
        <section className="slider-container">
            <CardList list={products ? data():[]}/>
        </section>

        <Footer />
      </>
    );
  };

export default Store;
