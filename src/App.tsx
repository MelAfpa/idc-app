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
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/pension" element={<Pension />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
