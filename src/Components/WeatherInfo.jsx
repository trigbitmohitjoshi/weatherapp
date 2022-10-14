import React from "react";
import { CityContext } from "../App";
import WeatherInfoContainer from "../Styles/WeatherInfo.styles";
import CityName from "./CityName";
import TempInfo from "./TempInfo";
import VerticalSpacer from "./VerticalSpacer";
import WindInfo from "./WindInfo";
import RemoveFromFavButton from "./RemoveFromFavButton";
import AddToFavButton from "./AddToFavButton";
import { motion } from "framer-motion";
import { WeatherInfoVariant } from "../Animations/WeatherInfo.animation";
const WeatherInfo = () => {
  const { state } = React.useContext(CityContext);
  if (state.cityNotFound) {
    return <p>City Not Found</p>;
  }
  return (
    <>
      <WeatherInfoContainer as={motion.div} variants={WeatherInfoVariant}>
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
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherInfo;
