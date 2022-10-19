import React from "react";
import { motion } from "framer-motion";
import { AppVariant } from "../Animations/App.animations";
import AppStyles from "../Styles/App.styles.js";
import SearchField from "./SearchField";
import VerticalSpacer from "./VerticalSpacer";
import WeatherInfo from "./WeatherInfo";
import FavCity from "./FavCity";
import { CityContext } from "../App";
const HomePage = () => {
  const { state } = React.useContext(CityContext);
  return (
    <AppStyles.MainContainer
      as={motion.div}
      variants={AppVariant}
      initial="hidden"
      animate="visible"
    >
      <AppStyles.AppContainer>
        <SearchField />
        <VerticalSpacer space={"1rem"} />
        {state.cityName.length !== 0 ? (
          state.cityData ? (
            <WeatherInfo />
          ) : (
            <p>Loading...</p>
          )
        ) : (
          <p>No City Entered</p>
        )}
      </AppStyles.AppContainer>
      <AppStyles.FavCityContainer>
        <FavCity />
      </AppStyles.FavCityContainer>
    </AppStyles.MainContainer>
  );
};
export default HomePage;
