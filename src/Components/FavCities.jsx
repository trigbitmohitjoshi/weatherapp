import React from "react";
import FavCityStyles from "../Styles/FavCity.styles";
import { CityContext } from "../App";
import { getCityWeatherData } from "../Api/getCityWeatherData";
import { useRemoveFavCityFromLS } from "../Custom Hooks/useRemoveFavCityFromLS";
import {
  SET_CITY_DATA,
  SET_CITY_NAME,
  SET_CITY_NOT_FOUND,
} from "../Utils/Constants";
import { motion } from "framer-motion";
import { FavCitiesVariants } from "../Animations/FavCity.animation";
const FavCities = ({ favCities }) => {
  const { dispatch } = React.useContext(CityContext);
  const removeFavFromLS = useRemoveFavCityFromLS();
  const loadFavCityData = (cityName) => {
    getCityWeatherData(cityName.toLowerCase())
      .then((res) => {
        dispatch({
          type: SET_CITY_NAME,
          payload: cityName,
        });
        dispatch({
          type: SET_CITY_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_CITY_DATA,
          payload: null,
        });
        dispatch({
          type: SET_CITY_NOT_FOUND,
          payload: true,
        });
      });
  };
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
