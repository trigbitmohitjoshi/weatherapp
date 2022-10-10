import axios from "axios";
const getCityWeatherData = (city) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40f750264f80cf395984132d41d9bf76`
  );
  return res;
};
export { getCityWeatherData };
