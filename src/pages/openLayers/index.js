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


const OpenLayers = () => {

    useEffect(() => {

        let geojsonObject = {
            'type': 'FeatureCollection',
            'crs': {
                'type': 'name',
                'properties': {
                    'name': 'EPSG:3857',
                },
            },
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [-60, 40],
                                [-67, 43],
                                [-80, 46],
                                [-67, 43],
                                [-60, 40],
                            ],
                        ],
                    },
                }
            ]
        }


        let arr = [
            [-60, 40],
            [-67, 43],
            [-100, 46],
            [-67, 43],
            [-60, 40],
        ]

        let feature = new Feature({
            geometry: new Polygon([arr]).transform('EPSG:4326','EPSG:3857')
        })

        let map = new Map({
            target: 'map',
            view: new View({
                center: fromLonLat([-60, 40]),
                zoom: 4
            }),
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [feature]
                        // features: new GeoJSON().readFeatures(feature)
                    })
                })
            ],
        });


    }, [])

    useEffect(() => {

    }, [])


    return (
        <MenuLayout>

            <div className={"mapContainer"}>

                <div id={'map'} className={'map'}/>
            </div>
        </MenuLayout>
    )
}
export default OpenLayers;







