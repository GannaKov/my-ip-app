import axios from "axios";

const apiIpKey = import.meta.env.VITE_APIIPKEY;

export const getIp = async () => {
  const { data } = await axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiIpKey}`
  );
  return data;
};

export const getCountryInfo = async (code) => {
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/alpha/${code}`
  );
  return data;
};
