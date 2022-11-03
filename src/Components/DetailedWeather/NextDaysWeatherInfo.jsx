import React from "react";
import NextDaysWeatherInfoContainer from "../../Styles/NextDaysWeatherInfo";
import { dateTimeToTime } from "../../Utils/dateTimeToTime";
import { dateTimeToWeekDay } from "../../Utils/dateTimeToWeekDay";

import WeatherTimeSlot from "./WeatherTimeSlot";
const NextDaysWeatherInfo = ({ nextDaysWeatherInfoList }) => {
  const [dataObject, setDataObject] = React.useState({});

  React.useEffect(() => {
    let data = {};
    nextDaysWeatherInfoList.forEach(({ dt_txt, main, weather, wind }) => {
      let day = dateTimeToWeekDay(dt_txt);
      let time = dateTimeToTime(dt_txt);
      data[day] = data[day]
        ? [...data[day], { main, weather, wind, time }]
        : [{ main, weather, wind, time }];
    });
    setDataObject(data);
  }, [nextDaysWeatherInfoList]);
  if (!dataObject) return null;
  return (
    <NextDaysWeatherInfoContainer>
      {Object.keys(dataObject).map((day) => (
        <React.Fragment key={day}>
          <div className="week-day-box">
            <div className="week-day-name">
              <h1>{day}</h1>
            </div>
            <div className="week-day-weather">
              {dataObject[day].map((dayTimeSlotWeather, index) => (
                <WeatherTimeSlot
                  key={index}
                  dayTimeSlotWeather={dayTimeSlotWeather}
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </NextDaysWeatherInfoContainer>
  );
};

export default NextDaysWeatherInfo;
