import "./App.css";
import Map from "./components/Map/Map";

import InfoPage from "./pages/InfoPage/InfoPage";

const App = () => {
  return (
    <div className="appWrp">
      <InfoPage />
      <Map />
    </div>
  );
};

export default App;

//https://geo.ipify.org/api/v2/country,city?apiKey=at_5h3pSQBtq0YpHx3jjCnA8dQzEzYRp&ipAddress=8.8.8.8

//https://geo.ipify.org/api/v2/country,city?apiKey=at_5h3pSQBtq0YpHx3jjCnA8dQzEzYRp&ipAddress=8.8.8.8
