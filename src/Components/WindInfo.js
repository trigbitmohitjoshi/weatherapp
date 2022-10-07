import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/WindInfo.module.css";
import { degToDirection } from "../Utils/DegToDirection";
function WindInfo({ cityData }) {
  const windDirection = degToDirection(cityData.wind.deg);
  return (
    <>
      <div className={styles.windInfo}>
        <div>
          <FontAwesomeIcon icon={faLocationArrow} />
          <p>
            {cityData.wind.speed}m/s  {windDirection}
          </p>
        </div>
      </div>
    </>
  );
}

export default WindInfo;
