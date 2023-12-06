// import React, { Component } from "react";
import './App.css';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Team from './team/Team';
import Adoption from './adoptions/Adoptions';
import { Home } from './home/Home';
import Pension from './pension/Pension';
import Parrainer from './parrainage/Parrainer';
import Benevolat from './benevolat/Benevolat';
import Dons from './dons/Dons';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/pension" element={<Pension />} />
          <Route path="/parrainer" element={<Parrainer />} />
          <Route path="/benevolat" element={<Benevolat />} />
          <Route path="/dons" element={<Dons />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
