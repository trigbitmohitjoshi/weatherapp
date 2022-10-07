export const degToDirection = (degNum) => {
  const dirArr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const val = Number(degNum) / 22.5 + 0.5;
  return dirArr[val.toFixed(0) % 16];
};
