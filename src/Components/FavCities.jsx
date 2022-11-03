import React from "react";
import FavCityStyles from "../Styles/FavCity";
import { CityContext } from "../App";
import { useRemoveFavCityFromLS } from "../Custom Hooks/useRemoveFavCityFromLS";
import { SET_CITY_NAME } from "../Utils/constants";
import { motion } from "framer-motion";
import { FavCitiesVariants } from "../Animations/FavCity";
import { useGetCityWeatherData } from "../Custom Hooks/useGetCityWeatherData";
const FavCities = ({ favCities }) => {
  const { dispatch } = React.useContext(CityContext);
  const removeFavFromLS = useRemoveFavCityFromLS();

  const loadFavCityData = useGetCityWeatherData();

  return (
    <>
      {favCities.map((cityName, index) => {
        return (
          <FavCityStyles.FavCityItem
            key={index}
            as={motion.div}
            variants={FavCitiesVariants}
            whileHover="hover"
          >
            <p
              onClick={() => {
                dispatch({
                  type: SET_CITY_NAME,
                  payload: cityName,
                });
                loadFavCityData(cityName);
              }}
            >
              {cityName}
            </p>
            <button onClick={() => removeFavFromLS(cityName)}>Remove</button>
          </FavCityStyles.FavCityItem>
        );
      })}
    </>
  );
};

export default FavCities;
