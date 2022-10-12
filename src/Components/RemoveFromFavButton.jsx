import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CityContext } from "../App";
import { useRemoveFavCityFromLS } from "../Custom Hooks/useRemoveFavCityFromLS.js";
import AddandRemoveFavContainer from "../Styles/AddandRemoveFavButton.styles";
const RemoveFromFavButton = () => {
  const { state } = React.useContext(CityContext);
  const removeFavFromLS = useRemoveFavCityFromLS();
  return (
    <>
      <AddandRemoveFavContainer
        type="removeFromFavbtn"
        onClick={() => removeFavFromLS(state.cityName)}
      >
        <p>Remove From Fav</p>
        <span />
        <FontAwesomeIcon icon={faStar} />
      </AddandRemoveFavContainer>
    </>
  );
};

export default RemoveFromFavButton;
