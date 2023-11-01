// import React, { Component } from "react";
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Team from './team/Team';
import Adoption from './adoptions/Adoptions';
import { Home } from './home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/adoption' element={<Adoption/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
