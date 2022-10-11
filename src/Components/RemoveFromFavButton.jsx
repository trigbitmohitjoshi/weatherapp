import React from "react";
import styles from "../Styles/RemoveFromFavButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CityContext } from "../App";
import { useRemoveFavCityFromLS } from "../Custom Hooks/useRemoveFavCityFromLS.js";
const RemoveFromFavButton = () => {
  const { state } = React.useContext(CityContext);
  const removeFavFromLS = useRemoveFavCityFromLS();
  return (
    <>
      <div
        className={styles.removeFromFavButton}
        onClick={() => removeFavFromLS(state.cityName)}
      >
        <p>Remove From Fav</p>
        <span />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </>
  );
};

export default RemoveFromFavButton;
