function debounceSearch(callback, delay) {
  let timeoutId;
  return function (cityName) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback.call(this, cityName);
    }, delay);
  };
}
export { debounceSearch };
