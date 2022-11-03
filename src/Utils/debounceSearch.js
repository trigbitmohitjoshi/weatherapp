function debounceSearch(callback, delay) {
  let timeoutId;
  return (cityName) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      if (cityName.length > 0) callback(cityName);
    }, delay);
  };
}
export { debounceSearch };
