import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, useMap, Marker, Popup, LayersControl, LayerGroup, Circle, WMSTileLayer } from 'react-leaflet'
import styles from './Map.module.scss'
import LocateControl from './LocateControl/LocateControl';
import L from 'leaflet'
import 'leaflet.fullscreen/Control.FullScreen.js'
import 'leaflet.fullscreen/Control.FullScreen.css'
import { useState } from 'react'

const Map = () => {
  const [crs, setcrs] = useState('default')

  return (
    
    <MapContainer 
    center={[52.5200, 13.4050]} 
    zoom={13} 
      scrollWheelZoom={false} 
      className={styles.mapContainer}
      fullscreenControl={true}
      fullscreenControlOptions={
        { 
          forceSeparateButton: true,
          position: 'topleft'
        }
      }
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocateControl/>
      <LayersControl position="topright">
        <LayersControl.Overlay name="1750">
            <TileLayer
              url="http://warper.wmflabs.org/maps/tile/188/{z}/{x}/{y}.png"
            />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="1804">
            <TileLayer
              url="http://warper.wmflabs.org/maps/tile/468/{z}/{x}/{y}.png"
            />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="1863">
            <TileLayer
              url="http://warper.wmflabs.org/maps/tile/287/{z}/{x}/{y}.png"
            />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="1928">
            <WMSTileLayer
              url="https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild1928?"
              params={{layers: '0'}}
              attribution={'<a target="_blank" href="https://fbinter.stadt-berlin.de/fb/index.jsp?Szenario=luftbild&loginkey=zoomStart&mapId=k_luftbild1928@senstadt">Geoportal Berlin, Luftbilder 1928</a>'}
              crs={L.CRS.EPSG4326}
              // eventHandlers={{
              //   add: (e) => {
              //     console.log("Added Layer:", e.target);
              //   },
              //   remove: (e) => {
              //     console.log("Removed layer:", e.target);
              //   }
              // }}
            />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="1953">
            <WMSTileLayer
              url="https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild1953"
              params={{layers: '0'}}
              crs={L.CRS.EPSG4326}
              attribution={'<a target="_blank" href="https://fbinter.stadt-berlin.de/fb/index.jsp?Szenario=luftbild&loginkey=zoomStart&mapId=k_luftbild1953@senstadt">Geoportal Berlin, Luftbilder 1953</a>'}
            />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="1992-97">
            <WMSTileLayer
              url="https://isk.geobasis-bb.de/ows/dop50g_1992_1997_wms?"
              params={{layers: 'bb_DOP50g_1992_1997'}}
              attribution={'<a target="_blank" href="https://geobroker.geobasis-bb.de/gbss.php?MODE=GetProductPreview&PRODUCTID=06f356f2-d61f-4bdf-9c5b-1741b273b327">© GeoBasis-DE/LGB, dl-de/by-2-0</a>'}
            />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  )
}

export default Map