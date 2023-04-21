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
        <Route element={<PrivateRoute />}>
          <Route path="/store" element={<Store />}>
<<<<<<< HEAD
=======
            <Route path="/store/:id" element={<ShowProd />} />
>>>>>>> 46d3a655888e7337bfd8a0b2af22c83ed8f97d7e
          </Route>
          <Route path="/store/:id" element={<ShowProd />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/newproduct" element={<NewProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
