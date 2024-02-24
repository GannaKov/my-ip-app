import "./App.css";
import { useState, useEffect } from "react";
import { getIp, getCountryInfo } from "./services/requests";
import Map from "./components/Map/Map";

import InfoPage from "./pages/InfoPage/InfoPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Spinner from "./components/Spinner";

const App = () => {
  const [idData, setIpData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getIp()
      .then((res) => setIpData(res))
      .catch((error) => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (idData) {
      getCountryInfo(idData.location.country)
        .then((res) => setCountryData(res))
        .catch((error) => console.log(error.message));
    }
  }, [idData]);
  return (
    <>
      <SharedLayout />
      {loading && <Spinner />}
      <div className="appWrp">
        {idData && countryData && (
          <InfoPage idData={idData} countryData={countryData} />
        )}
        {idData && countryData && (
          <Map lat={idData.location.lat} lng={idData.location.lng} />
        )}
      </div>
    </>
  );
};

export default App;
//netlify
//https://geo.ipify.org/api/v2/country,city?apiKey=at_5h3pSQBtq0YpHx3jjCnA8dQzEzYRp&ipAddress=8.8.8.8

//https://geo.ipify.org/api/v2/country,city?apiKey=at_5h3pSQBtq0YpHx3jjCnA8dQzEzYRp&ipAddress=8.8.8.8
