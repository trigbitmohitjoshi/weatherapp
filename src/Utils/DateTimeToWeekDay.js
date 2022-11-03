import { DAYS } from "./constants";

export const dateTimeToWeekDay = (dateTime) => {
  const newDateTime = new Date(dateTime);
  return DAYS[newDateTime.getDay()];
};
