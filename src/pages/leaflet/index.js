import React from 'react'
import 'leaflet/dist/leaflet.css';
import './style.scss'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Leaflet = () =>{

  const position = [51.505, -0.09]

  return(
    <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    </div>
  )
}
export default Leaflet