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

  useEffect(async () => {
    await getProducts();
    console.log(products)
    // setProds(products)
    // console.log(prods)
  }, []);

  const data = ()=>{
    return products.map((item)=>{
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
            <CardList list={products ? data():[]}/>
        </section>

        <Footer />
      </>
    );
  };

export default Store;
