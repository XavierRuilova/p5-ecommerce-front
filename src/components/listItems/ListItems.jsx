import React, { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./listitems.css";
import { useNavigate } from "react-router-dom";
import AddItem from "../additem/AddItem";

const ListItems = ({ list }) => {
    const ctx = useContext(UserContext)
    const { removeItem}=ctx;
    const navigate = useNavigate();

  // useEffect(()=>{
  // navigate('/checkout')
  // },[]);

  return list.map((item, i) => {
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
  });
};

export default ListItems;
