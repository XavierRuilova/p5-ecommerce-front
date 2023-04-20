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
  const [prods, setProds] =useState([])

  useEffect(() => {
    getProducts();
    setProds(products)
    console.log(prods)
  }, []);

  const data = ()=>{
    return prods.map((item)=>{
      return{
          imgurl: item.imgurl,
          productname: item.productname,
          description: item.description,
      }
  })
  }
  

    return (
      <>
        <Header />
        <section className="slider-container">
            <CardList list={prods ? data():[]}/>
        </section>

        <Footer />
      </>
    );
  };

export default Store;
