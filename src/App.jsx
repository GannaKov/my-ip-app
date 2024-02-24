import "./App.css";
import { useState, useEffect } from "react";
import { getIp, getCountryInfo } from "./services/requests";
import Map from "./components/Map/Map";

import InfoPage from "./pages/InfoPage/InfoPage";

const App = () => {
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
    <div className="appWrp">
      <InfoPage idData={idData} countryData={countryData} />
      <Map />
    </div>
  );
};

export default App;

//https://geo.ipify.org/api/v2/country,city?apiKey=at_5h3pSQBtq0YpHx3jjCnA8dQzEzYRp&ipAddress=8.8.8.8

//https://geo.ipify.org/api/v2/country,city?apiKey=at_5h3pSQBtq0YpHx3jjCnA8dQzEzYRp&ipAddress=8.8.8.8
