import React from 'react'
import { NavLink } from 'react-router-dom'


const Menu = () =>{


  return(
    <div>
      <ul>
        <li><NavLink to={'/mapbox'}>mapbox</NavLink></li>
        <li><NavLink to={'/leaflet'}>leaflet</NavLink></li>
        <li><NavLink to={'/openlayers'}>openlayers</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu;