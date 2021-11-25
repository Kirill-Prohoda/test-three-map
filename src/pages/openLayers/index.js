import React, {useRef, useState, useEffect} from "react"
import "./style.scss";
import MenuLayout from "../../layout/MenuLayout";

// import {
//   interaction, layer, custom, control,
//   Interactions, Overlays, Controls,
//   Map, Layers, Overlay, Util
// } from "react-openlayers";

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import Polygon from 'ol/geom/Polygon';
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON"
import Feature from "ol/Feature"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Vector} from "ol";


var map;

const OpenLayers = () => {

    const {fieldsList} = useTypedSelector(state=>state.fieldsStore)

    let [fields, setFields] = useState([])

    useEffect(()=>{
        if(fieldsList.length){

            let list = fieldsList.flatMap((i,index)=>{
                if(i.geometry?.coordinates.length === 1){
                    return i.geometry.coordinates
                }
                return []
            })

            debugger
            setFields(list)
        }
    },[fieldsList])



    useEffect(() => {

        map = new Map({
            target: 'map',
            view: new View({
                center: fromLonLat([55, 55]),
                zoom: 11
            }),
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: []
                        // features: new GeoJSON().readFeatures(feature)
                    })
                })
            ],
        });

    }, [])

    useEffect(() => {
        if(fields.length){
            // [lng, lat]
            debugger
            let obj = async ()=>{
                let fieldsListCopy = fields

                let polygon = await new Polygon(fieldsListCopy).transform('EPSG:4326', 'EPSG:3857');
                let feature = await new Feature(polygon);

                let vectorSource = await new VectorSource();
                vectorSource.addFeature(feature);

                let vectorLayer = await new VectorLayer({
                    source: vectorSource
                });

                await map.addLayer(vectorLayer);
            }
            obj()

        }

    }, [fields])


    return (
        <MenuLayout>

            <div className={"mapContainer"}>

                <div id={'map'} className={'map'}/>
            </div>
        </MenuLayout>
    )
}
export default OpenLayers;















// let geojsonObject = {
//     'type': 'FeatureCollection',
//     'crs': {
//         'type': 'name',
//         'properties': {
//             'name': 'EPSG:3857',
//         },
//     },
//     'features': [
//         {
//             'type': 'Feature',
//             'geometry': {
//                 'type': 'Polygon',
//                 'coordinates': [
//                     [
//                         [-60, 40],
//                         [-67, 43],
//                         [-80, 46],
//                         [-67, 43],
//                         [-60, 40],
//                     ],
//                 ],
//             },
//         }
//     ]
// }


//в это место вставить все геозоны
// let arr = [
//     [-60, 40],
//     [-67, 43],
//     [-100, 46],
//     [-67, 43],
//     [-60, 40],
// ]
//
// //в это место вставить все геозоны
// let feature = new Feature({
//     geometry: new Polygon([arr]).transform('EPSG:4326','EPSG:3857')
// })








