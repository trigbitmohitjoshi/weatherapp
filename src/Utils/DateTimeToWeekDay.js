import { DAYS } from "./Constants";

export const dateTimeToWeekDay = (dateTime) => {
  const newDateTime = new Date(dateTime);
  return DAYS[newDateTime.getDay()];
};

