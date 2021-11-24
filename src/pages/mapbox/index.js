import React, {useRef, useState, useEffect} from 'react'

import st from './style.scss'

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VpemVyIiwiYSI6ImNrd2Nkam9hdzA4cTYydm50MW0xMTMxYnYifQ.6ngxi9AVJUn_ASGD3-CxBQ';




const Mapbox = () =>{

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div className={st.container}>
     <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Mapbox