import React from "react";
import AddandRemoveFavContainer from "../Styles/AddandRemoveFavButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CityContext } from "../App";
import { useAddFavCityToLS } from "../Custom Hooks/useAddFavCityToLS";
const AddToFavButton = () => {
  const { state } = React.useContext(CityContext);
  const addFavToLS = useAddFavCityToLS();
  return (
    <>
      <AddandRemoveFavContainer type='addToFavBtn' onClick={() => addFavToLS(state.cityName)}>
        <p>Add To Fav</p>
        <span />
        <FontAwesomeIcon icon={faStar} />
      </AddandRemoveFavContainer>
    </>
  );
};

export default AddToFavButton;
