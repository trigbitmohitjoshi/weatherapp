import React, { useContext } from "react";
import { CityContext } from "../App";
import CityName from "./CityName";
import TempInfo from "./TempInfo";
import VerticalSpacer from "./VerticalSpacer";
import WindInfo from "./WindInfo";

function WeatherInfo() {
  const { state } = useContext(CityContext);
  if (state.cityNotFound) {
    return <p>City Not Found</p>;
  }
  if (!state.cityData) {
    return <p>Click on Search</p>;
  }
  return (
    <>
      <CityName cityData={state.cityData} />
      <VerticalSpacer space={"0.4rem"} />
      <TempInfo cityData={state.cityData} />
      <VerticalSpacer space={"0.8rem"} />
      <WindInfo cityData={state.cityData} />
    </>
  );
}

export default WeatherInfo;
