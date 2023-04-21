import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
import CardList from "../../components/cardlist/CardList";
import "./store.css";

const Store = () => {
  const ctx = useContext(AppContext);
  const { getProducts, products } = ctx;
  const [productid, setProductid] = useState()
<<<<<<< HEAD
=======

>>>>>>> 46d3a655888e7337bfd8a0b2af22c83ed8f97d7e

  useEffect(() => {
    getProducts();
    
  }, []);

  const data = () => {
    return products.map((item) => {
      return {
        idprod: item._id,
        imgurl: item.imgurl,
        productname: item.productname,
        price: `${item.price} USD`,
      };
    });
  };

  return (
    <>
      <section style={{ display: "flex" }}>
        <article className="slider-container">
          <CardList setter={setProductid} list={products ? data() : []} />
        </article>
        <article>
          {productid && <p>{productid}</p>}
<<<<<<< HEAD

        </article>
      </section>

=======
        </article>
      </section>
>>>>>>> 46d3a655888e7337bfd8a0b2af22c83ed8f97d7e
    </>
  );
};

export default Store;
