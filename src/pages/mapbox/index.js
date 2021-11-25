import React, {useRef, useState, useEffect} from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import st from './style.scss'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import MenuLayout from "../../layout/MenuLayout"; // eslint-disable-line import/no-webpack-loader-syntax


mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VpemVyIiwiYSI6ImNrd2RjZjNkajFiZDkybnFsemN1NXd0b2gifQ.onnOB_zr-IcaaeZ5WWcJOw'

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiZ2VpemVyIiwiYSI6ImNrd2RjZjNkajFiZDkybnFsemN1NXd0b2gifQ.onnOB_zr-IcaaeZ5WWcJOw'
});



const Mapbox = () =>{

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




  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [55.229847731213766, 55.34988509327104],
      zoom: 12
    });

  }, []);


  useEffect(()=>{

    if(fields.length){
        map.current.on('load', function(){
            let obj = async ()=>{
                let r = await map.current.addSource('maine', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Polygon',
                            'coordinates': fields
                        }
                    }
                });
                let rr = await map.current.addLayer({
                    'id': 'maine',
                    'type': 'fill',
                    'source': 'maine', // reference the data source
                    'layout': {},
                    'paint': {
                        'fill-color': '#0080ff', // blue color fill
                        'fill-opacity': 0.5
                    }
                });
                let rrr = await map.current.addLayer({
                    'id': 'outline',
                    'type': 'line',
                    'source': 'maine',
                    'layout': {},
                    'paint': {
                        'line-color': '#000',
                        'line-width': 3
                    }
                });
            }
            obj()
        })

    }

  },[fields])

  return (
    <MenuLayout>
        <div className={st.container}>
            <div ref={mapContainer} className="map-container" />
        </div>
        <br/>
    </MenuLayout>
  );
}

export default Mapbox