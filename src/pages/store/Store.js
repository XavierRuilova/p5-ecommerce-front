import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/GlobalContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/cardlist/CardList";
import Cards from "../../components/cards/Cards";
import "./store.css";

const Store = () => {
    const ctx = useContext(AppContext)
  const { getProducts, products } = ctx

  useEffect(() => {
    getProducts();
  }, []);

  const data = () => {
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
            <Cards pic={data}/>
        </section>

        <Footer />
      </>
    );
  };

export default Store;
