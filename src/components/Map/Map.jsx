/* eslint-disable react/prop-types */
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./Map.module.css";

const Map = ({ lat, lng }) => {
  return (
    <div className={styles.container}>
      <MapContainer
        center={[lat, lng]}
        zoom={9}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.535632, 13.461753]} draggable={true}>
          <Popup>
            Hello <br /> You are hier
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
