import React from "react";
import { CityContext } from "../App";
import styles from "../Styles/SearchField.module.css";
import { debounceSearch } from "../Utils/debounceSearch";
import { getCityWeatherData } from "../Api/getCityWeatherData";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SET_CITY_DATA,
  SET_CITY_NAME,
  SET_CITY_NOT_FOUND,
} from "../Utils/Constants";
const SearchField = () => {
  const { state, dispatch } = React.useContext(CityContext);
  const getData = React.useCallback((cityName) => {
    getCityWeatherData(cityName.toLowerCase())
      .then((res) => {
        dispatch({
          type: SET_CITY_DATA,
          payload: res.data,
        });
        dispatch({
          type: SET_CITY_NOT_FOUND,
          payload: false,
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
  }, [dispatch]);
  const { current: decoratedWeatherData } = React.useRef(
    debounceSearch(getData, 3000)
  );
  React.useEffect(() => {
    if (state.cityName) {
      decoratedWeatherData(state.cityName);
    }
  }, [state.cityName]);
  const handleFieldChange = (e) => {
    dispatch({
      type: SET_CITY_NAME,
      payload: e.target.value,
    });
  };
  const searchButton = (
    <FontAwesomeIcon icon={faSearch} onClick={() => getData(state.cityName)} />
  );
  return (
    <div className={styles.searchField}>
      <input
        type={"text"}
        value={state.cityName}
        onChange={handleFieldChange}
        placeholder="Enter a City"
        autoFocus
      />
      {searchButton}
    </div>
  );
};

export default SearchField;
