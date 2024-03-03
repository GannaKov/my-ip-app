/* eslint-disable react/prop-types */
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { MapContainer, Popup, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet/Marker";
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
        <Marker
          position={[lat, lng]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            Hello <br /> You are hier
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
