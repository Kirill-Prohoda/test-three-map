import React, { useRef, useState, useEffect } from "react"
import "./style.scss";

import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

const Openlayer = ({ children, zoom, center }) => {
  
  return (
    <>
      <Map view={{center: [0, 0], zoom: 2}} onClick={showPopup}>
        <Layers>
          <layer.Tile/>
          <layer.Vector source={markers} style={markers.style} zIndex="1" />
        </Layers>
        <Overlays>
          <Overlay 
            ref={comp => this.overlayComp = comp}
            element="#popup" />
        </Overlays>
        <Controls attribution={false} zoom={true}>
          <control.Rotate />
          <control.ScaleLine />
          <control.FullScreen />
          <control.OverviewMap />
          <control.ZoomSlider />
          <control.ZoomToExtent />
          <control.Zoom />
        </Controls>
        <Interactions>
          <interaction.Select style={selectedMarkerStyle} />
          <interaction.Draw source={markers} type='Point' />
          <interaction.Modify features={markers.features} />
        </Interactions>
      </Map>

      <custom.Popup ref={comp => this.popupComp = comp}>
      </custom.Popup>
    </>
  )
}
export default Openlayer;






