import React from "react";
import DetailedWeatherPageContainer from "../../Styles/DetailedWeatherPage.styles";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { detailedWeatherReducer } from "../../Reducers/detailedWeatherReducer";
import { getCityFiveDayWeatherData } from "../../Api/getCityWeatherData";
import { SET_CITY_DATA, SET_CITY_NOT_FOUND } from "../../Utils/Constants";
import CityInfo from "./CityInfo";
import NextDaysWeatherInfo from "./NextDaysWeatherInfo";

const initialState = {
  detailedCityData: null,
  cityNotFound: false,
};
const DetailedWeatherPage = () => {
  const { cityName } = useParams();
  const [state, dispatch] = React.useReducer(
    detailedWeatherReducer,
    initialState
  );

  React.useEffect(() => {
    getCityFiveDayWeatherData(cityName)
      .then((res) => {
        dispatch({
          type: SET_CITY_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({ type: SET_CITY_NOT_FOUND, payload: true });
      });
  }, [cityName]);

  if (state.cityNotFound) {
    return (
      <DetailedWeatherPageContainer>
        <p>City Not Found</p>
      </DetailedWeatherPageContainer>
    );
  }

  if (state.detailedCityData == null) {
    return (
      <DetailedWeatherPageContainer>
        <p>Loading...</p>
      </DetailedWeatherPageContainer>
    );
  }
  return (
    <>
      <DetailedWeatherPageContainer
        as={motion.div}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
          duation: 1.2,
          ease: "easeInOut",
        }}
      >
        <CityInfo cityInfo={state.detailedCityData.city} />
        <NextDaysWeatherInfo
          nextDaysWeatherInfo={state.detailedCityData.list}
        />
      </DetailedWeatherPageContainer>
    </>
  );
};
export default React.memo(DetailedWeatherPage);
