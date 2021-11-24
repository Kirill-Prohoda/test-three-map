import React, {useRef, useState, useEffect} from 'react'

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {RouteWithAuth, AuthContainer} from './components/general/auth/export'

import Menu from './components/menu'

import Mapbox from './pages/mapbox';
import Leaflet from './pages/leaflet';
import OpenLayer from './pages/openLayers';
// import {Switch} from "react-router";
import {useActions} from "./hooks/useActions";
import MenuLayout from "./layout/MenuLayout";



function App() {



  return (
    <div className="App">
        <Switch>
            <RouteWithAuth exact path={'/'}>
                <MenuLayout>
                    <div>нужно выбрать карту</div>
                </MenuLayout>
            </RouteWithAuth>
            <RouteWithAuth path={'/mapbox'} component={Mapbox} />
            <RouteWithAuth path={'/leaflet'} component={Leaflet} />
            <RouteWithAuth path={'/openlayers'} component={OpenLayer} />
            <Route path={'/log'} component={AuthContainer}/>
        </Switch>
    </div>
  );
}

export default App;
