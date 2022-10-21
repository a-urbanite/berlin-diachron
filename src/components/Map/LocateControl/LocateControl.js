import { useEffect } from "react";
import { useLeaflet, useMap } from "react-leaflet";
import Locate from "leaflet.locatecontrol";

export default function LocateControl() {

  const map = useMap();

  useEffect(() => {

    // geo locate props
    const locateOptions = {
      position: 'topleft',
      maxZoom: 19,
      strings: {
          title: 'Show me where I am!'
      },
      flyTo: true,
      drawCircle: true,
      icon: "locateIcon",
      iconElementTag: 'div',
      onActivate: () => {} // callback before engine starts retrieving locations
    }

    const lc = new Locate(locateOptions);
    // console.log(lc);
    lc.addTo(map);

    return () => {
      lc.remove()
    }

  }, [map]);

  return null;

}