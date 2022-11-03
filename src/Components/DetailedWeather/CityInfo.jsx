import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import CityInfoContainer from "../../Styles/CityInfo";
import { unixToReadableFormat } from "../../Utils/unixTimeToReadableFormat";

const CityInfo = ({ cityInfo }) => {
  const { name, country, coord, population, sunrise, sunset } = cityInfo;
  return (
    <CityInfoContainer
      as={motion.div}
      whileHover={{ backgroundColor: "hsl(0, 0%, 80%)" }}
    >
      <section>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <h2>
            {name}, {country}
          </h2>
        </div>
        <div>
          <p>latitude : {coord.lat}</p>
          <p>longitude : {coord.lon}</p>
          <p>Population : {population}</p>
        </div>
      </section>
      <section>
        <div>
          <h2>Sunrise</h2>
          <p>{unixToReadableFormat(sunrise)}</p>
        </div>
        <div>
          <h2>Sunset</h2>
          <p>{unixToReadableFormat(sunset)}</p>
        </div>
      </section>
    </CityInfoContainer>
  );
};
export default CityInfo;
