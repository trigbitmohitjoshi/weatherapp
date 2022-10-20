import React from "react";
import AddandRemoveFavContainer from "../Styles/AddandRemoveFavButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CityContext } from "../App";
import { useAddFavCityToLS } from "../Custom Hooks/useAddFavCityToLS";
import { motion } from "framer-motion";
import { AddandRemoveFavVariant } from "../Animations/AddandRemoveFavButton.animation";
const AddToFavButton = () => {
  const { state } = React.useContext(CityContext);
  const addFavToLS = React.useCallback(useAddFavCityToLS(), []);
  const favIcon = React.useMemo(() => <FontAwesomeIcon icon={faStar} />, []);
  return (
    <AddandRemoveFavContainer
      type="addToFavBtn"
      onClick={() => addFavToLS(state.cityName)}
      as={motion.div}
      variants={AddandRemoveFavVariant}
      whileHover="hover"
    >
      <p>Add To Fav</p>
      {favIcon}
    </AddandRemoveFavContainer>
  );
};

export default AddToFavButton;
