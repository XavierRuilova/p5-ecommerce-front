import logo from './logo.svg';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' />
    <Route path='/profile' />
  </Routes>

  );
}

export default App;
