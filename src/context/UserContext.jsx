import { createContext, useState } from "react";
import clientAxios from "../config/axios";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [authStatus, setAuthStatus] = useState(false);
  const [itemNumber, setItemNumber] = useState();
  // let [itemCart, setItemCart] = useState()

  const [user, setUser] = useState({
    username: null,
    firstname: null,
    lastname: null,
    email: null,
    password: null,
  });

  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const createUser = async (dataForm) => {
    try {
      const res = await clientAxios.post("/users/signup", dataForm);
      // localStorage.setItem('token', res.data.token)
      // localStorage.setItem('id', res.data._id)
      // localStorage.setItem('username', dataForm.firstname)
      // setAuthStatus(true)
    } catch (error) {
      console.log(error);
    }
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      clientAxios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete clientAxios.defaults.headers.common["x-auth-token"];
    }

    try {
      const res = token && (await clientAxios.get("/users/verify"));
      setUser(res.data);
      localStorage.setItem("username", res.data.verifiedUser.firstname);
      localStorage.setItem("id", res.data.verifiedUser._id);
      setAuthStatus(true);
    } catch (error) {
      console.log("Error Verificando token", error);
    }
  };

  const loginUser = async (dataForm) => {
    try {
      const res = await clientAxios.post("/users/login", dataForm);
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  const findUser = async (id) => {
    try {
      const res = await clientAxios.get("/users/find", id);
      setFormData({
        username: res.data.username,
        firstname: res.data.firstname,
        lastname: res.data.lastname,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("cart");
    setCurrentUser("");
    setUser(null);
    setAuthStatus(false);
  };

  const ItemsCounter = () => {
    let itemCart = JSON.parse(localStorage.getItem("cart"));
    if (itemCart !== null) {
      if (itemCart.length > 0) {
        setItemNumber(itemCart.length);
        return <div className="counter">{itemNumber}</div>;
      }
    }
  };

  const removeItem = (ind) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log("ITEM", cart);
    cart.splice(ind, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    ItemsCounter();


  };

  const data = {
    currentUser,
    setCurrentUser,
    createUser,
    authStatus,
    itemNumber,
    setItemNumber,
    // itemCart,
    // setItemCart,
    user,
    formData,
    handleChange,
    verifyingToken,
    loginUser,
    findUser,
    logout,
    ItemsCounter,
    removeItem,
  };

  // console.log('CONTEXTO USUARIO', data)
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
