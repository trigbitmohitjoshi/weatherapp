import React from "react";
import { CityContext } from "../App";
import styles from "../Styles/WeatherInfo.module.css";
import CityName from "./CityName";
import TempInfo from "./TempInfo";
import VerticalSpacer from "./VerticalSpacer";
import WindInfo from "./WindInfo";
import RemoveFromFavButton from "./RemoveFromFavButton";
import AddToFavButton from "./AddToFavButton";
const WeatherInfo = () => {
  const { state } = React.useContext(CityContext);
  if (state.cityNotFound) {
    return <p>City Not Found</p>;
  }
  return (
    <>
      <div className={styles.weatherInfo}>
        <CityName cityData={state.cityData} />
        <VerticalSpacer space={"0.4rem"} />
        <TempInfo cityTempInfo={state.cityData.main} />
        <VerticalSpacer space={"0.8rem"} />
        <WindInfo cityWindInfo={state.cityData.wind} />
        <VerticalSpacer space={"0.5rem"} />
        {state.favCities?.some((city) => city === state.cityName) ? (
          <RemoveFromFavButton />
        ) : (
          <AddToFavButton />
        )}
      </div>
    </>
  );
};

export default WeatherInfo;
