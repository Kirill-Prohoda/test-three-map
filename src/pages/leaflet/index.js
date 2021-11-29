import React, {useEffect, useState} from 'react'
import 'leaflet/dist/leaflet.css';
import './style.scss'
import MenuLayout from "../../layout/MenuLayout";
import {CircleMarker, Polygon, Tooltip, FeatureGroup, Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {
    LayersControl,
    MapContainer,
    TileLayer,
} from 'react-leaflet';

import LayerGroup from "ol/layer/Group";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";


const Leaflet = () =>{

    const {fieldsList} = useTypedSelector(state=>state.fieldsStore)
    const {unitsPosition} = useTypedSelector(state=>state.unitsStore)
    const {connectFetchStatusUnits, disconnectFetchStatusUnits} = useActions()

    let [fields, setFields] = useState([])
    let [units, setUnit] = useState([])

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

    useEffect(()=>{
        if(fieldsList.length){
            connectFetchStatusUnits()
        }
        return ()=>{
            disconnectFetchStatusUnits()
        }
    },[fieldsList])



    useEffect(()=>{
        setUnit(unitsPosition)


    },[unitsPosition])



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


                <FeatureGroup>
                        {fields.map((field,index)=>{
                            return (
                                <Polygon
                                    positions={field.map(i=>i.map(j=>[j[1], j[0]]))}
                                />
                            )
                        })
                        }
                </FeatureGroup>

                <FeatureGroup>
                    {fields.map((field,index)=>{
                        return (
                            <Polygon
                                positions={field.map(i=>i.map(j=>[j[1], j[0]]))}
                            />
                        )
                    })
                    }
                </FeatureGroup>


                <FeatureGroup>
                    {units.map((unit,index)=>{

                        if(unit?.values['rt_position']){
                            return (
                                <Marker
                                    position={[...unit?.values['rt_position'].reverse()]}
                                />
                            )
                        }

                    })
                    }
                </FeatureGroup>

                    {/*<LayersControl.Overlay name="Поля2">*/}
                    {/*    {fields.map((field,index)=>{*/}
                    {/*        return (*/}
                    {/*            <Polygon*/}
                    {/*                positions={field}*/}
                    {/*            />*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*    }*/}
                    {/*</LayersControl.Overlay>*/}
                {/*</FeatureGroup>*/}



                {/*{fields.map((field,index)=>{*/}
                {/*    return (*/}
                {/*        <Polygon*/}
                {/*            positions={field}*/}
                {/*        />*/}
                {/*    )*/}
                {/*})*/}
                {/*}*/}

                    {/*<LayerGroup>*/}

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