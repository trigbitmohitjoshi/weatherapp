import axios from "axios";
const getCityWeatherData = (city) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
  );
  return res;
};
const getCityFiveDayWeatherData = (city) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
  );
  return res;
};
export { getCityWeatherData, getCityFiveDayWeatherData };
