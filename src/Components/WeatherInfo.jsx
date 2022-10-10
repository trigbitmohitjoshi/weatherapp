import React from "react";
import { CityContext } from "../App";
import CityName from "./CityName";
import TempInfo from "./TempInfo";
import VerticalSpacer from "./VerticalSpacer";
import WindInfo from "./WindInfo";

const WeatherInfo = () => {
  const { state } = React.useContext(CityContext);
  if (state.cityNotFound) {
    return <p>City Not Found</p>;
  }
  if (!state.cityData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <CityName cityData={state.cityData} />
      <VerticalSpacer space={"0.4rem"} />
      <TempInfo cityTempInfo={state.cityData.main} />
      <VerticalSpacer space={"0.8rem"} />
      <WindInfo cityWindInfo={state.cityData.wind} />
    </>
  );
};

export default WeatherInfo;
