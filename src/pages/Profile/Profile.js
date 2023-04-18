import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import FormInputs from "../../components/FormInputs";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./profile.css";
const Profile = () => {
  const userCtx = useContext(UserContext);

  const { authStatus, verifyingToken, updateUser, formData } = userCtx;

  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus==false) navigate("/");
  }, [authStatus]);


  const sendData = (event) => {
    event.preventDefault();
    verifyingToken()
    updateUser(formData);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Mi perfil</h2>

        <form onSubmit={(e) => sendData(e)}>
          <FormInputs tipo="username" />
          <FormInputs tipo="firstname" />
          <FormInputs tipo="lastname" />
          <FormInputs tipo="email" />
          <FormInputs tipo="password" />
          <button type="submit">actualizar</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
