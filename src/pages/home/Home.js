import React, { useContext } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const navigate = useNavigate()
  const ctx = useContext(UserContext)

  const { authStatus, setUserLocal } = ctx

  setUserLocal(localStorage.getItem('username'))

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
            <p>Aliquip fugiat sunt quis sunt exercitation do dolore duis nulla tempor cupidatat. Non laborum ad magna Lorem occaecat pariatur consequat deserunt nulla reprehenderit nostrud. Elit commodo deserunt labore adipisicing ea officia velit in deserunt deserunt elit eu.</p>
          </article>
        </section>

        <section className="articles">
          <article className="descripciones" style={{ textAlign: 'right' }}>
            <h2>Nuestra misión</h2>
            <p>Aliquip fugiat sunt quis sunt exercitation do dolore duis nulla tempor cupidatat. Non laborum ad magna Lorem occaecat pariatur consequat deserunt nulla reprehenderit nostrud. Elit commodo deserunt labore adipisicing ea officia velit in deserunt deserunt elit eu.</p>
          </article>
        </section>

        <section className="articles">
          <article className="descripciones">
            <h2>Nuestra visión</h2>
            <p>Aliquip fugiat sunt quis sunt exercitation do dolore duis nulla tempor cupidatat. Non laborum ad magna Lorem occaecat pariatur consequat deserunt nulla reprehenderit nostrud. Elit commodo deserunt labore adipisicing ea officia velit in deserunt deserunt elit eu.</p>
          </article>
        </section>
      </div>
    </>
  );
};

export default Home;
