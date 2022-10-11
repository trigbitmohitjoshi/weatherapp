import React from "react";
import { CityContext } from "../App";
import { FAV_CITIES } from "../Utils/Constants";

export const useRemoveFavCityFromLS = () => {
  const { dispatch } = React.useContext(CityContext);
  const removeFavFromLS = (cityName) => {
    const favCities = localStorage.getItem("Fav Cities");
    const favCitiesArray = JSON.parse(favCities);
    favCitiesArray.splice(favCitiesArray.indexOf(cityName), 1);
    localStorage.setItem("Fav Cities", JSON.stringify(favCitiesArray));
    dispatch({
      type: FAV_CITIES,
      payload: favCitiesArray,
    });
  };
  return removeFavFromLS;
};
