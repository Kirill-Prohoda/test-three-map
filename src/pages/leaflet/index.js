import React, {useEffect, useState} from 'react'
import 'leaflet/dist/leaflet.css';
import './style.scss'
import MenuLayout from "../../layout/MenuLayout";
import {CircleMarker, Polygon, Tooltip} from "react-leaflet";

import {
    LayersControl,
    MapContainer,
    TileLayer,
} from 'react-leaflet';

import LayerGroup from "ol/layer/Group";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Leaflet = () =>{

    const {fieldsList} = useTypedSelector(state=>state.fieldsStore)

    let [fields, setFields] = useState([])

    useEffect(()=>{
        if(fieldsList.length){

            let list = fieldsList.flatMap(i=>{
                if(i.geometry?.coordinates){
                    return [i.geometry.coordinates]
                }
                return []
            })

            setFields(list)
        }
    },[fieldsList])

  return(
    <div>
        <MenuLayout>
            leaflet
            <MapContainer
                center={[55, 55]}
                // preferCanvas={true}
                // renderer={L.canvas()}>
                zoom={10}
                scrollWheelZoom={true}>

                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {/*<LayerGroup>*/}
                    {fields.map((field,index)=>{
                            debugger
                            return (
                                <Polygon
                                    positions={field}
                                />
                            )
                        })
                    }
                {/*</LayerGroup>*/}

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
    </div>
  )
}
export default Leaflet