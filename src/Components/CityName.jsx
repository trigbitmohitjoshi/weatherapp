import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import CityNameStyle from "./CityNameContainer";
const CityName = ({ cityData }) => {
  const { name, sys, weather } = cityData;
  return (
    <>
      <CityNameStyle.CityNameContainer>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <h1>
          {name} , {sys.country}
        </h1>
      </CityNameStyle.CityNameContainer>
      <CityNameStyle.WeatherDescriptionContainer>
        <p>{weather[0].description}</p>
      </CityNameStyle.WeatherDescriptionContainer>
    </>
  );
};

export default CityName;
