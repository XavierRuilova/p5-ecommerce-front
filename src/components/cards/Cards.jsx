import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

// design for the cards in the carousel

const Cards = (props) => {
  const { idprod, pic, title, price } = props;


  return (
    <div className="cards">
      <Link style={{textDecoration:'none', color:'black'}} to={`/store/${idprod}`}>
        <div className="card-content" id={idprod} >
          <img src={pic} alt="ilustracion" />
          <h3>{title}</h3>
          <h4>Precio:{price}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
