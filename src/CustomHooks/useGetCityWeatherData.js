import React from "react";
import { getCityWeatherData } from "../Api/getCityWeatherData";
import { CityContext } from "../App";
import { SET_CITY_DATA, SET_CITY_NOT_FOUND } from "../Utils/constants";

export const useGetCityWeatherData = () => {
  const { dispatch } = React.useContext(CityContext);
  return React.useCallback(
    (cityName) => {
      getCityWeatherData(cityName.toLowerCase())
        .then((res) => {
          dispatch({
            type: SET_CITY_DATA,
            payload: res.data,
          });
        })
        .catch(() => {
          dispatch({
            type: SET_CITY_NOT_FOUND,
            payload: true,
          });
        });
    },
    [dispatch]
  );
};
