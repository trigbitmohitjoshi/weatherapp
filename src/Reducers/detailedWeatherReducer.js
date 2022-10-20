import {
  SET_CITY_DATA,
  SET_CITY_NOT_FOUND,
} from "../Utils/Constants";

export const detailedWeatherReducer = (state, action) => {
  switch (action.type) {    
    case SET_CITY_DATA:
      return {
        ...state,
        detailedCityData: action.payload,        
      };
    case SET_CITY_NOT_FOUND:
      return { ...state, cityNotFound: action.payload, cityData: null };
    default:
      return state;
  }
};
