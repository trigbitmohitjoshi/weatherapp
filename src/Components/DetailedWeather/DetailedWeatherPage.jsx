import React from "react";
import DetailedWeatherPageContainer from "./DetailedWeatherPageContainer";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { detailedWeatherReducer } from "../../Reducers/detailedWeatherReducer";
import { getCityFiveDayWeatherData } from "../../Api/getCityWeatherData";
import { SET_CITY_DATA, SET_CITY_NOT_FOUND } from "../../Utils/constants";
import CityInfo from "./CityInfo";
import NextDaysWeatherInfo from "./NextDaysWeatherInfo";
import { DetailedWeatherPageVariant } from "../../Animations/DetailedWeatherPage";

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
  const { detailedCityData, cityNotFound } = state;

  React.useEffect(() => {
    getCityFiveDayWeatherData(cityName)
      .then((res) => {
        dispatch({
          type: SET_CITY_DATA,
          payload: res.data,
        });
      })
      .catch(() => {
        dispatch({ type: SET_CITY_NOT_FOUND, payload: true });
      });
  }, [cityName]);

  return cityNotFound ? (
    <DetailedWeatherPageContainer>
      <p>City Not Found</p>
    </DetailedWeatherPageContainer>
  ) : detailedCityData ? (
    <DetailedWeatherPageContainer
      as={motion.div}
      variants={DetailedWeatherPageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CityInfo cityInfo={detailedCityData.city} />
      <NextDaysWeatherInfo nextDaysWeatherInfoList={detailedCityData.list} />
    </DetailedWeatherPageContainer>
  ) : (
    <DetailedWeatherPageContainer>
      <p>Loading...</p>
    </DetailedWeatherPageContainer>
  );
};
export default DetailedWeatherPage;
