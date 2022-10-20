import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import MoreDetailsContainer from "../Styles/MoreDetailsButton.styles";

const MoreDetailsButton = ({ cityName }) => {
  const navigate = useNavigate();
  return (
    <MoreDetailsContainer
      as="div"
      onClick={() => navigate(`more-details/${cityName}`)}
    >
      <p>Detailed Weather of {cityName}</p>
      <span />
      <FontAwesomeIcon icon={faArrowRight} />
    </MoreDetailsContainer>
  );
};
export default MoreDetailsButton;
