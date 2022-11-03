import React from "react";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { degToDirection } from "../../Utils/degToDirection";
import { kelvinToCelsius } from "../../Utils/kelvinToCelsius";
import { motion } from "framer-motion";
const WeatherTimeSlot = ({
  dayTimeSlotWeather: { main, weather, wind, time },
}) => {
  return (
    <>
      <motion.div
        className="weather"
        whileHover={{
          backgroundColor: "hsl(0, 0%, 75%)",
        }}
      >
        <h3>{weather[0].description}</h3>
        <h4>At {time}</h4>
        <p>
          Temp <span>{kelvinToCelsius(main.temp).toFixed(1)} &#8451;</span>
        </p>
        <p>
          Feels Like{" "}
          <span>
            {kelvinToCelsius(main.feels_like).toFixed(1)}
            &#8451;
          </span>
        </p>
        <p>
          Max Temp{" "}
          <span>{kelvinToCelsius(main.temp_max).toFixed(1)} &#8451;</span>
        </p>
        <p>
          Min Temp{" "}
          <span>{kelvinToCelsius(main.temp_min).toFixed(1)} &#8451;</span>
        </p>
        <p>
          Humidity <span>{main.humidity}%</span>
        </p>
        <div>
          <FontAwesomeIcon icon={faLocationArrow} />
          <p>
            {wind.speed}m/s {degToDirection(wind.deg)}
          </p>
        </div>
      </motion.div>
    </>
  );
};
export default WeatherTimeSlot;
