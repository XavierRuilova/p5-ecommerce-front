import React, { useContext, useEffect } from "react";
import Icons from "../svg/Icons";
import "./header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const ctx = useContext(UserContext);

  const { ItemsCounter, logout, authStatus, verifyingToken, currentUser } = ctx;

  return (
    <header>
      <div>
        <Link to="/">
          <img
            src="https://i.ibb.co/42wncLF/Captura-de-pantalla-2023-04-15-191146.png"
            alt="logo"
          />
        </Link>
      </div>
      {authStatus ? (
        <div className="linksOnline">
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>{`Perfil de ${currentUser}`}</span>
            <Icons icon={"profile"} /> <span>{':'}</span>
          </Link>
          <Link to="/">Inicio</Link>
          <Link to="/store">Mi tienda</Link>
          <Link to="/newproduct">Vender</Link>
          <Link to="/checkout">
            <div style={{ display: "flex" }}>
              <ItemsCounter />
              <Icons icon={"cart"} />
            </div>
          </Link>
          <Link to="/" onClick={logout}>
            Cerrar sesión
          </Link>
        </div>
      ) : (
        <>
          <div className="linksOffline">
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/signup">Registro</Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
