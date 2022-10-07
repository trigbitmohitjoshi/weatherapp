import axios from "axios";
function getCityWeatherData(city) {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
  );
  return res;
}
export default getCityWeatherData;
