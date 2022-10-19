export const unixToReadableFormat = (unixTimestamp) => {
  const dateObject = new Date(unixTimestamp * 1000);
  return dateObject.toLocaleString();
};
