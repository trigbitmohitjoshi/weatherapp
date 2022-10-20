import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WindInfoContainer from "../Styles/WindInfo.styles";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { degToDirection } from "../Utils/DegToDirection";
function WindInfo({ cityWindInfo }) {
  const windDirection = degToDirection(cityWindInfo.deg);
  const windIcon = React.useMemo(
    () => <FontAwesomeIcon icon={faLocationArrow} />,
    []
  );
  return (
    <>
      <WindInfoContainer>
        {windIcon}
        <p>
          {cityWindInfo.speed}m/s {windDirection}
        </p>
      </WindInfoContainer>
    </>
  );
}

export default WindInfo;
