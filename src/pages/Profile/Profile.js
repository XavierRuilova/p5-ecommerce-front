import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import FormInputs from "../../components/forms/FormInputs";
import "./profile.css";
const Profile = () => {
  const userCtx = useContext(UserContext);

  const { authStatus, verifyingToken, formData, findUser } = userCtx;

  const navigate = useNavigate();

  useEffect(() => {
    // verifyingToken()
    if (authStatus == false) navigate("/");
  }, [authStatus]);

  const sendData = (event) => {
    event.preventDefault();
    verifyingToken();
    // updateUser(formData);
  };
  const idUser = localStorage.getItem("id");
  findUser(idUser);
  // console.log(formData);

  return (
    <>
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
    </>
  );
};

export default Profile;
