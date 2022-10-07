import React, { useReducer } from "react";
import { cityReducer } from "./Reducers/cityReducer";
import styles from "./Styles/App.module.css";
import SearchField from "./Components/SearchField";
import VerticalSpacer from "./Components/VerticalSpacer";
import WeatherInfo from "./Components/WeatherInfo";
const initialState = {
  cityName: "",
  cityData: null,
  cityNotFound: false,
};
export const CityContext = React.createContext();
function App() {
  const [state, dispatch] = useReducer(cityReducer, initialState);
  return (
    <CityContext.Provider value={{ state, dispatch }}>
      <div className={styles.app}>
        <SearchField />
        <VerticalSpacer space={"1rem"} />
        {state.cityName.length !==0? <WeatherInfo /> : <p>No City Entered</p>}
      </div>
    </CityContext.Provider>
  );
}

export default App;
