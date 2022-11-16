import React from "react";
import { CityContext } from "../App";
import WeatherInfoContainer from "./WeatherInfoContainer";
import CityName from "./CityName";
import TempInfo from "./TempInfo";
import VerticalSpacer from "./VerticalSpacer";
import WindInfo from "./WindInfo";
import RemoveFromFavButton from "./RemoveFromFavButton";
import AddToFavButton from "./AddToFavButton";
import MoreDetailsButton from "./MoreDetailsButton";
import { motion } from "framer-motion";
import { WeatherInfoVariant } from "../Animations/WeatherInfo";
const WeatherInfo = () => {
  const {
    state: { cityName, cityData, favCities },
  } = React.useContext(CityContext);
  return (
    <WeatherInfoContainer as={motion.div} variants={WeatherInfoVariant}>
      <CityName cityData={cityData} />
      <VerticalSpacer space={"0.4rem"} />
      <TempInfo cityTempInfo={cityData.main} />
      <VerticalSpacer space={"0.8rem"} />
      <WindInfo cityWindInfo={cityData.wind} />
      <VerticalSpacer space={"0.4rem"} />
      <MoreDetailsButton cityName={cityData.name} />
      <VerticalSpacer space={"0.5rem"} />
      {favCities?.some((city) => city === cityName) ? (
        <RemoveFromFavButton />
      ) : (
        <AddToFavButton />
      )}
    </WeatherInfoContainer>
  );
};

export default WeatherInfo;
