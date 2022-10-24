import React, {useEffect, useState} from 'react'
import { useMap, useMapEvent } from "react-leaflet";
import "leaflet.control.opacity/dist/L.Control.Opacity.css";
import 'leaflet.control.opacity';
import L from 'leaflet'

const OpacityControl = () => {
  const map = useMap();
  const [controlLayer, setControlLayer] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const eventListener = useMapEvent('baselayerchange', (e) => setControlLayer(e) )

  
  useEffect(() => {
    if (controlLayer !== null && controlLayer.name !== 'default') {
      L.control.opacity({"opacity": controlLayer.layer}, {position: 'bottomright', collapsed: true}).addTo(map);
    }
    return () => {
      map._controlContainer.children[3].children[0]?.remove()
    }
  }, [controlLayer])


  return null

}

export default OpacityControl