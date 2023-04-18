// import logo from './logo.svg';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Profile from './pages/Profile/Profile';
import Store from './pages/store/Store';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>}/>
    <Route element={<PrivateRoute />}>
      <Route path='/store' element={<Store/>} />
      <Route path='/profile' element={<Profile/>} />
    </Route>
  </Routes>

  );
}

export default App;
