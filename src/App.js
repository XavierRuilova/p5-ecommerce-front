// import logo from './logo.svg';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Profile from "./pages/Profile/Profile";
import Store from "./pages/store/Store";
import PrivateRoute from "./components/auth/PrivateRoute";
import NewProduct from "./pages/newproduct/NewProduct";
import Layout from "./components/Layout";
import ShowProd from "./components/showProd/ShowProd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/store" element={<Store />}>
            <Route path=":id" element={<ShowProd />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
