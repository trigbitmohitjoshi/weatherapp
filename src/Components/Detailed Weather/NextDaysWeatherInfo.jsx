import React from "react";
import NextDaysWeatherInfoContainer from "../../Styles/NextDaysWeatherInfo.styles";
import { constructNextDaysWeatherObject } from "../../Utils/ConstructNextDaysWeatherObject";
import { constructNextDaysWeatherJSX } from "../../Utils/ConstructNextDaysWeatherJSX";
import VerticalSpacer from "../VerticalSpacer";
const NextDaysWeatherInfo = ({ nextDaysWeatherInfo }) => {
  const [constructedJSXArr, setConstructedJSXArr] = React.useState();

  React.useEffect(() => {
    const constructedObject =
      constructNextDaysWeatherObject(nextDaysWeatherInfo);
    const jsxObject = constructNextDaysWeatherJSX(constructedObject);
    setConstructedJSXArr(Object.entries(jsxObject));
  }, [nextDaysWeatherInfo]);

  if (!constructedJSXArr) {
    return null;
  }

  return (
    <>
      <NextDaysWeatherInfoContainer>
        {constructedJSXArr.map((value, index) => (
          <>
            <div className="week-day-box">
              <div className="week-day-name">
                <h1>{value[0]}</h1>
              </div>
              <div className="week-day-weather">{value[1]}</div>
            </div>
            <VerticalSpacer space={"0.6rem"} />
          </>
        ))}
      </NextDaysWeatherInfoContainer>
    </>
  );
};
export default React.memo(NextDaysWeatherInfo);
