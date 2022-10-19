export const dateTimeToTime = (dateTime) => {
  const newDateTime = new Date(dateTime);
  return newDateTime.toLocaleTimeString();
};

