function debounceSearch(callback, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback.call(this, args[0].target.value);
    }, delay);
  };
}
export default debounceSearch;
