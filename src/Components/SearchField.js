import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef } from "react";
import { CityContext } from "../App";
import getCityWeatherData from "../GetCityWeatherData";
import {
  SET_CITY_DATA,
  SET_CITY_NAME,
  SET_CITY_NOT_FOUND,
} from "../Utils/Constants";
import styles from "../Styles/SearchField.module.css";
import debounceSearch from "../Utils/debounceSearch";
function SearchField() {
  const searchFieldRef = React.createRef();
  const { state, dispatch } = useContext(CityContext);
  const { current: decoratedWeatherData } = useRef(
    debounceSearch(getData, 3000)
  );
  useEffect(() => {
    searchFieldRef.current.focus();
  }, []);

  function getData(cityName) {
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
  }

  const handleFieldChange = (e) => {
    dispatch({
      type: SET_CITY_NAME,
      payload: e.target.value,
    });
    dispatch({
      type: SET_CITY_NOT_FOUND,
      payload: false,
    });
    if (state.cityData) {
      dispatch({
        type: SET_CITY_DATA,
        payload: null,
      });
    }
    if (e.target.value.length === 0) {
      dispatch({
        type: SET_CITY_DATA,
        payload: null,
      });
      dispatch({
        type: SET_CITY_NOT_FOUND,
        payload: false,
      });
    }
  };

  return (
    <div className={styles.searchField}>
      <input
        type={"text"}
        value={state.cityName}
        onChange={handleFieldChange}
        onInput={decoratedWeatherData}
        placeholder="Enter a City"
        ref={searchFieldRef}
      />
      <FontAwesomeIcon
        icon={faSearch}
        onClick={() => getData(state.cityName)}
      />
    </div>
  );
}

export default React.memo(SearchField);
