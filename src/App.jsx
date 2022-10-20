import React from "react";
import { cityReducer } from "./Reducers/cityReducer";
import { FAV_CITIES } from "./Utils/Constants";
import IndexGlobalStyle from "./Styles/index.styles";
import { Route, Routes, useLocation } from "react-router-dom";
import DetailedWeatherPage from "./Components/Detailed Weather/DetailedWeatherPage";
import HomePage from "./Components/HomePage";
import PageNotFound from "./Components/PageNotFound";
import { AnimatePresence } from "framer-motion";
const initialState = {
  cityName: "",
  cityData: null,
  cityNotFound: false,
  favCities: [],
};

export const CityContext = React.createContext();
const App = () => {
  const [state, dispatch] = React.useReducer(cityReducer, initialState);
  const location = useLocation();
  React.useEffect(() => {
    dispatch({
      type: FAV_CITIES,
      payload: JSON.parse(localStorage.getItem("Fav Cities")) || [],
    });
  }, []);

  return (
    <CityContext.Provider value={{ state, dispatch }}>
      <IndexGlobalStyle />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
          <Route index path="/" element={<HomePage />} />
          <Route
            path="more-details/:cityName"
            element={<DetailedWeatherPage />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </CityContext.Provider>
  );
};

export default App;
