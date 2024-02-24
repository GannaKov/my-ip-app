import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.container}>
      <MapContainer
        center={[52.535632, 13.461753]}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.535632, 13.461753]} draggable={true}>
          <Popup>
            Hello <br /> I am hier
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
