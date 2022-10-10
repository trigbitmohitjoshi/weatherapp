import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/CityName.module.css";
const CityName = ({ cityData }) => {
  return (
    <>
      <div className={styles.cityName}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <h1>
          {cityData.name} , {cityData.sys.country}
        </h1>
      </div>
      <div className={styles.weatherDescription}>
        <p>{cityData.weather[0].description}</p>
      </div>
    </>
  );
};

export default CityName;
