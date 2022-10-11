import {
  FAV_CITIES,
  SET_CITY_DATA,
  SET_CITY_NAME,
  SET_CITY_NOT_FOUND,
} from "../Utils/Constants";

export const cityReducer = (state, action) => {
  switch (action.type) {
    case SET_CITY_NAME:
      return {
        ...state,
        cityName: action.payload,
        cityData: null,
        cityNotFound: false,
      };
    case SET_CITY_DATA:
      return { ...state, cityData: action.payload };
    case SET_CITY_NOT_FOUND:
      return { ...state, cityNotFound: action.payload };
    case FAV_CITIES:
      return { ...state, favCities: action.payload };
    default:
      return state;
  }
};
