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
            let obj = async ()=>{
                let fieldsTime = fields
                let fieldsSecond = fields

                let polygonTime = await new Polygon(fieldsTime).transform('EPSG:4326', 'EPSG:3857');
                let polygonSecond = await new Polygon(fieldsSecond).transform('EPSG:4326', 'EPSG:3857');

                let featureTime = await new Feature(polygonTime);
                let featureSecond = await new Feature(polygonSecond);

                let vectorSourceTime = await new VectorSource();
                let vectorSourceSecond = await new VectorSource();

                vectorSourceTime.addFeature(featureTime);
                vectorSourceSecond.addFeature(featureSecond);

                let vectorLayerTime = await new VectorLayer({
                    source: vectorSourceTime
                });

                let vectorLayerSecond = await new VectorLayer({
                    source: vectorSourceSecond
                });

                let t = await map.addLayer(vectorLayerTime);
                let tt = await map.addLayer(vectorLayerSecond);
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








