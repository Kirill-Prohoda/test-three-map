import React from 'react'
import 'leaflet/dist/leaflet.css';
import './style.scss'
import MenuLayout from "../../layout/MenuLayout";

import {
    LayersControl,
    MapContainer,
    TileLayer,
} from 'react-leaflet';

const Leaflet = () =>{

  const position = [51.505, -0.09]

  return(
    <div>
        <MenuLayout>
            leaflet
            <MapContainer
                center={position}
                // preferCanvas={true}
                // renderer={L.canvas()}>
                zoom={0}
                scrollWheelZoom={false}>

                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/*<MapSetting typeLayers={typeLayers}/>*/}

                {/*<LayersControl>*/}
                {/*    <LayersControl.Overlay name="Поля">*/}
                {/*        <FieldsLayerContainer position={position} />*/}
                {/*    </LayersControl.Overlay>*/}

                {/*    <LayersControl.Overlay name="Сетка">*/}
                {/*        <MappingLayerContainer position={position} layerMapping={layerMapping}/>*/}
                {/*    </LayersControl.Overlay>*/}
                {/*</LayersControl>*/}

            </MapContainer>
        </MenuLayout>

        {/*<MapContainer center={position} zoom={13} scrollWheelZoom={true}>*/}
        {/*  <TileLayer*/}
        {/*    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
        {/*    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
        {/*  />*/}
        {/*  <Marker position={position}>*/}
        {/*    <Popup>*/}
        {/*      A pretty CSS3 popup. <br /> Easily customizable.*/}
        {/*    </Popup>*/}
        {/*  </Marker>*/}
        {/*</MapContainer>*/}
    </div>
  )
}
export default Leaflet