import React, { useContext } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const navigate = useNavigate()
  const ctx = useContext(UserContext)

  const { authStatus, setCurrentUser } = ctx

  setCurrentUser(localStorage.getItem('username'))

  return (
    <>
      <section className="jumbotron">
        <div>
          <h1>Bienvenido a Mi tienda online</h1>
          <article className="descripciones">
            <p>Tu tienda en línea a solo unos clics de distanca. </p>
          </article>
          {authStatus ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button onClick={(e) => navigate('/store')}>ir a mi tienda</button>
              </div>
            </>

          ) : (
            <>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button onClick={(e) => navigate('/signup')}>Registrarme</button>
                <p>¿Ya tienes cuenta? <Link to='/login'>Iniciar sesión</Link></p>
              </div>
            </>

          )}

        </div>
        <div>
          <img
            src="https://i.ibb.co/Gdg7gqJ/Captura-de-pantalla-187.png"
            className="imgjumbo"
          ></img>
        </div>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <section className="articles">
          <article className="descripciones">
            <h2>¿Quiénes somos?</h2>
            <p>Somos tu tienda en línea. Estamos a solo unos clics de distancia de la comodidad de tu hogar ofreciéndote una amplia variedad de productos y a futuro servicios. Esperamos poder ayudar en todo lo posible para que puedas conseguir los productos que deseas y de la mejor calidad.</p>
          </article>
        </section>

        <section className="articles">
          <article className="descripciones" style={{ textAlign: 'right' }}>
            <h2>Nuestra misión</h2>
            <p>Ofrecer productos de calidad nacionales e importados garantizando la confianza de los consumidores al recibir un producto de calidad. </p>
          </article>
        </section>

        <section className="articles">
          <article className="descripciones">
            <h2>Nuestra visión</h2>
            <p>Liderar los mercados en línea a nivel nacional e internacional siendo prioridad para los mercaderes que deseen ofertar sus productos en la red.</p>
          </article>
        </section>
      </div>
    </>
  );
};

export default Home;
