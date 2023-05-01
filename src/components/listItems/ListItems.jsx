import React, { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./listitems.css";
import AddItem from "../additem/AddItem";

const ListItems = ({ list }) => {
  const ctx = useContext(UserContext);
  const { itemNumber } = ctx;


  if (itemNumber>0) { 
    return list.map((item, i) => {
      if (list.length > 0) {
        return (
          
          <AddItem
            key={i}
            position={i}
            image={item.image}
            cant={item.cant}
            prod={item.prod}
            price={`${item.price}usd`}
          />
        );
      }
    });
  }
};

export default ListItems;
