import { useState, useEffect } from "react";
import { getIp, getCountryInfo } from "../../services/requests";

// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
// } from "https://cdn.esm.sh/react-leaflet";

const InfoPage = () => {
  const [idData, setIpData] = useState(null);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    getIp()
      .then((res) => setIpData(res))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    if (idData) {
      getCountryInfo(idData.location.country)
        .then((res) => setCountryData(res))
        .catch((error) => console.log(error.message));
    }
  }, [idData]);

  return (
    <div>
      {idData && countryData && (
        <>
          <p>{idData.ip}</p>
          <p>{idData.location.country}</p>
          <p>{idData.location.region}</p>
          <p>{idData.location.city}</p>
          <p>INFO</p>
          <p>{countryData[0].name.common}</p>
          <p>{countryData[0].name.official}</p>
          <p>{countryData[0].capital[0]}</p>
          <p>{countryData[0].population}</p>
          <img src={countryData[0].flags.png} alt={countryData[0].flags.alt} />
          <p>{countryData[0].name.population}</p>
        </>
      )}
    </div>
  );
};

export default InfoPage;
