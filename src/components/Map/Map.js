import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer } from 'react-leaflet'
import styles from './Map.module.scss'
import LocateControl from './LocateControl/LocateControl';
import 'leaflet.fullscreen/Control.FullScreen.js'
import 'leaflet.fullscreen/Control.FullScreen.css'
import LayerMenu from './LayerMenu/LayerMenu';

const Map = () => {

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
      <LayerMenu/>
    </MapContainer>
  )
}

export default Map