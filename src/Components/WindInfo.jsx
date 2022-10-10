import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/WindInfo.module.css";
import { degToDirection } from "../Utils/DegToDirection";
function WindInfo({ cityWindInfo }) {
  const windDirection = degToDirection(cityWindInfo.deg);
  return (
    <>
      <div className={styles.windInfo}>
        <div>
          <FontAwesomeIcon icon={faLocationArrow} />
          <p>
            {cityWindInfo.speed}m/s {windDirection}
          </p>
        </div>
      </div>
    </>
  );
}

export default WindInfo;
