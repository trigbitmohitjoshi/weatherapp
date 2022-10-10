import React from "react";
import styles from "../Styles/TempInfo.module.css";
import { kelvinToCelsius } from "../Utils/KelvinToCelsius";
const TempInfo = ({ cityTempInfo }) => {
  const currentTemp = kelvinToCelsius(cityTempInfo.temp).toFixed(1);
  const maxTemp = kelvinToCelsius(cityTempInfo.temp_max).toFixed(1);
  const minTemp = kelvinToCelsius(cityTempInfo.temp_min).toFixed(1);
  const feelsLikeTemp = kelvinToCelsius(cityTempInfo.feels_like).toFixed(1);
  return (
    <>
      <div className={styles.tempInfo}>
        <h2>{currentTemp} &#8451;</h2>
        <p>Feels Like {feelsLikeTemp} &#8451;</p>
        <div>
          <p>Max Temp {maxTemp} &#8451;</p>
          <p>Min Temp {minTemp} &#8451;</p>
          <p>Humidity {cityTempInfo.humidity}%</p>
        </div>
      </div>
    </>
  );
}

export default TempInfo;
