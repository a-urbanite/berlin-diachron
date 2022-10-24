import React from 'react'
import { TileLayer, LayersControl, WMSTileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

const LayerMenu = () => {
  return (
    <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="default">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="1656">
            <TileLayer
              url="https://warper.wmflabs.org/maps/tile/491/{z}/{x}/{y}.png"
              attribution={'<a target="_blank" href="https://warper.wmflabs.org/maps/491">WikiMaps Warper, Dahlberg Berlin 1688 1656-57</a>'}
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="1750">
            <TileLayer
              url="http://warper.wmflabs.org/maps/tile/188/{z}/{x}/{y}.png"
              attribution={'<a target="_blank" href="https://warper.wmflabs.org/maps/188">WikiMaps Warper, Schmettau Plan de la Ville de Berlin 1750</a>'}
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="1804">
            <TileLayer
              url="http://warper.wmflabs.org/maps/tile/468/{z}/{x}/{y}.png"
              attribution={'<a target="_blank" href="https://warper.wmflabs.org/maps/468">WikiMaps Warper, Selter Grundriss von Berlin 1804</a>'}
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="1863">
            <TileLayer
              url="http://warper.wmflabs.org/maps/tile/287/{z}/{x}/{y}.png"
              attribution={'<a target="_blank" href="https://warper.wmflabs.org/maps/287">WikiMaps Warper, Neuester Bebauungs-Plan von Berlin 1863</a>'}
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="1910">
            <TileLayer
              url="https://warper.wmflabs.org/maps/tile/1220/{z}/{x}/{y}.png"
              attribution={'<a target="_blank" href="https://warper.wmflabs.org/maps/1220">WikiMaps Warper, Straube-Plan Berlin 1910</a>'}
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="1928">
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
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="1953">
            <WMSTileLayer
              url="https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild1953"
              params={{layers: '0'}}
              crs={L.CRS.EPSG4326}
              attribution={'<a target="_blank" href="https://fbinter.stadt-berlin.de/fb/index.jsp?Szenario=luftbild&loginkey=zoomStart&mapId=k_luftbild1953@senstadt">Geoportal Berlin, Luftbilder 1953</a>'}
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="1992">
            <WMSTileLayer
              url="https://isk.geobasis-bb.de/ows/dop50g_1992_1997_wms?"
              params={{layers: 'bb_DOP50g_1992_1997'}}
              attribution={'<a target="_blank" href="https://geobroker.geobasis-bb.de/gbss.php?MODE=GetProductPreview&PRODUCTID=06f356f2-d61f-4bdf-9c5b-1741b273b327">© GeoBasis-DE/LGB, dl-de/by-2-0</a>'}
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="2022">
          <ReactLeafletGoogleLayer apiKey={process.env.REACT_APP_GOOGLE_MAPS_API} type={'hybrid'} />
        </LayersControl.BaseLayer>
      </LayersControl>
  )
}

export default LayerMenu