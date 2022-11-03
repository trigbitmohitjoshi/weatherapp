import React from "react";
import SearchFieldContainer from "../Styles/SearchField";
import { CityContext } from "../App";
import { debounceSearch } from "../Utils/debounceSearch";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SET_CITY_NAME } from "../Utils/constants";
import { useGetCityWeatherData } from "../CustomHooks/useGetCityWeatherData";
const SearchField = () => {
  const { state, dispatch } = React.useContext(CityContext);

  const getData = useGetCityWeatherData();
  const { current: decoratedWeatherData } = React.useRef(
    debounceSearch(getData, 3000)
  );

  React.useEffect(() => {
    decoratedWeatherData(state.cityName);
  }, [decoratedWeatherData, state.cityData, state.cityName]);

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
    <SearchFieldContainer>
      <input
        type={"text"}
        value={state.cityName}
        onChange={handleFieldChange}
        placeholder="Enter a City"
        autoFocus
      />
      {searchButton}
    </SearchFieldContainer>
  );
};

export default SearchField;
