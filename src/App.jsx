import React from "react";
import { cityReducer } from "./Reducers/cityReducer";
import { FAV_CITIES } from "./Utils/Constants";
import AppStyles from "./Styles/App.styles.js";
import SearchField from "./Components/SearchField";
import VerticalSpacer from "./Components/VerticalSpacer";
import WeatherInfo from "./Components/WeatherInfo";
import FavCity from "./Components/FavCity";
import IndexGlobalStyle from "./Styles/index.styles";
import { motion } from "framer-motion";
import { AppVariant } from "./Animations/App.animations";
const initialState = {
  cityName: "",
  cityData: null,
  cityNotFound: false,
  favCities: [],
};

export const CityContext = React.createContext();
const App = () => {
  const [state, dispatch] = React.useReducer(cityReducer, initialState);
  React.useEffect(() => {
    dispatch({
      type: FAV_CITIES,
      payload: JSON.parse(localStorage.getItem("Fav Cities")) || [],
    });
  }, []);

  return (
    <CityContext.Provider value={{ state, dispatch }}>
      <IndexGlobalStyle />
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
    </CityContext.Provider>
  );
};

export default App;
