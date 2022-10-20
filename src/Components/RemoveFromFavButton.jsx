import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CityContext } from "../App";
import { useRemoveFavCityFromLS } from "../Custom Hooks/useRemoveFavCityFromLS.js";
import AddandRemoveFavContainer from "../Styles/AddandRemoveFavButton.styles";
import { AddandRemoveFavVariant } from "../Animations/AddandRemoveFavButton.animation";
import { motion } from "framer-motion";
const RemoveFromFavButton = () => {
  const { state } = React.useContext(CityContext);
  const removeFavFromLS = React.useCallback(useRemoveFavCityFromLS(), []);
  const favIcon = React.useMemo(() => <FontAwesomeIcon icon={faStar} />, []);
  return (
    <AddandRemoveFavContainer
      type="removeFromFavbtn"
      onClick={() => removeFavFromLS(state.cityName)}
      as={motion.div}
      variants={AddandRemoveFavVariant}
      whileHover="hover"
    >
      <p>Remove From Fav</p>
      {favIcon}
    </AddandRemoveFavContainer>
  );
};

export default RemoveFromFavButton;
