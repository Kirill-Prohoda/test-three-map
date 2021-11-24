import React, {useRef, useState, useEffect} from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Menu from './components/menu'

import Mapbox from './pages/mapbox';
import Leaflet from './pages/leaflet';
import OpenLayer from './pages/openLayers';


function App() {


  return (
    <div className="App">
      <div>
        <Menu/>
      </div>
      <div>
        <Routes>
          <Route path={'/'} element={<div>нужно выбрать карту</div>} />
          <Route path={'mapbox'} element={<Mapbox/>} />
          <Route path={'leaflet'} element={<Leaflet />} />
          <Route path={'openlayer'} element={<OpenLayer/>} />
        </Routes>
      </div>
     
    </div>
  );
}

export default App;
