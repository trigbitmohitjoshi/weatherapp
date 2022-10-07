import React from "react";
import styles from "../Styles/TempInfo.module.css";
import { kelvinToCelsius } from "../Utils/KelvinToCelsius";
function TempInfo({ cityData }) {
  const currentTemp = kelvinToCelsius(cityData.main.temp).toFixed(1);
  const maxTemp = kelvinToCelsius(cityData.main.temp_max).toFixed(1);
  const minTemp = kelvinToCelsius(cityData.main.temp_min).toFixed(1);
  const feelsLikeTemp = kelvinToCelsius(cityData.main.feels_like).toFixed(1);
  return (
    <>
      <div className={styles.tempInfo}>
        <h2>{currentTemp} &#8451;</h2>
        <p>Feels Like {feelsLikeTemp} &#8451;</p>
        <div>
          <p>Max Temp {maxTemp} &#8451;</p>
          <p>Min Temp {minTemp} &#8451;</p>
          <p>Humidity {cityData.main.humidity}%</p>
        </div>
      </div>
    </>
  );
}

export default TempInfo;
