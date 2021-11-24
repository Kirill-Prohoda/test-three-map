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

    const {FetchFullListFields} = useActions()



    useEffect(()=>{
        FetchFullListFields()
    },[])


  const {fieldsList} = useTypedSelector(state=>state.fieldsStore)


  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-67.13734, 45.13745],
      zoom: 9
    });



  }, []);


//   useEffect(()=>{
//
//       if(fieldsList.length){
//           map.current.on('load', () => {
// .
//               map.current.addSource('maine', {
//                   'type': 'geojson',
//                   'data': {
//                       'type': 'Feature',
//                       'geometry': {
//                           'type': 'Polygon',
//                           'coordinates': [
//                               [
//                                   [-67.13734, 45.13745],
//                                   [-66.96466, 44.8097],
//                                   [-68.03252, 44.3252],
//                                   [-69.06, 43.98],
//                                   [-70.11617, 43.68405],
//                                   [-70.64573, 43.09008],
//                                   [-70.75102, 43.08003],
//                                   [-70.79761, 43.21973],
//                                   [-70.98176, 43.36789],
//                                   [-70.94416, 43.46633],
//                                   [-71.08482, 45.30524],
//                                   [-70.66002, 45.46022],
//                                   [-70.30495, 45.91479],
//                                   [-70.00014, 46.69317],
//                                   [-69.23708, 47.44777],
//                                   [-68.90478, 47.18479],
//                                   [-68.2343, 47.35462],
//                                   [-67.79035, 47.06624],
//                                   [-67.79141, 45.70258],
//                                   [-67.13734, 45.13745]
//                               ]
//                           ]
//                       }
//                   }
//               })
//           })
//       }
//   },[fieldsList])


  return (
    <MenuLayout>
      mapbox
        <div className={st.container}>
            <div ref={mapContainer} className="map-container" />
        </div>
        <br/>
        {/*<Map*/}
        {/*    style="mapbox://styles/mapbox/streets-v9"*/}
        {/*    containerStyle={{*/}
        {/*        height: '100vh',*/}
        {/*        width: '100vw'*/}
        {/*    }}*/}
        {/*>*/}
        {/*    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>*/}
        {/*        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />*/}
        {/*    </Layer>*/}
        {/*</Map>;*/}
        {/*<Map*/}
        {/*    center={[-70.9, 42.35]}*/}
        {/*    zoom={[9]}*/}
        {/*    style="mapbox://styles/mapbox/streets-v11"*/}
        {/*    containerStyle={{*/}
        {/*        height: '100%',*/}
        {/*        width: '100vw'*/}
        {/*    }}*/}
        {/*>*/}
        {/*    /!*<Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>*!/*/}
        {/*    /!*    /!*<Feature coordinates={[-0.481747846041145, 51.3233379650232]} />*!/*!/*/}
        {/*    /!*</Layer>*!/*/}
        {/*</Map>*/}
    </MenuLayout>
  );
}

export default Mapbox