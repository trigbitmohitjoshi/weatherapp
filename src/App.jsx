import React from "react";
import { cityReducer } from "./Reducers/cityReducer";
import { FAV_CITIES } from "./Utils/Constants";
import styles from "./Styles/App.module.css";
import SearchField from "./Components/SearchField";
import VerticalSpacer from "./Components/VerticalSpacer";
import WeatherInfo from "./Components/WeatherInfo";
import FavCity from "./Components/FavCity";
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
      <div className={styles.main}>
        <div className={styles.app}>
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
        </div>
        <div className={styles.favCity}>
          <FavCity />
        </div>
      </div>
    </CityContext.Provider>
  );
};

export default App;
