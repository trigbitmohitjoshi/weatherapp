import { dateTimeToTime } from "./DateTimeToTime";
import { dateTimeToWeekDay } from "./DateTimeToWeekDay";

export const constructNextDaysWeatherObject = (nextDaysWeatherInfo) => {
  const obj = {};
  for (let i = 0; i < nextDaysWeatherInfo.length; i++) {
    let day = String(dateTimeToWeekDay(nextDaysWeatherInfo[i].dt_txt));
    let main = nextDaysWeatherInfo[i].main;
    let weather = nextDaysWeatherInfo[i].weather[0];
    let wind = nextDaysWeatherInfo[i].wind;
    let time = dateTimeToTime(nextDaysWeatherInfo[i].dt_txt);
    obj[day] = obj[day]
      ? [...obj[day], { main, weather, wind, time }]
      : [{ main, weather, wind, time }];
  }
  return obj;
};
