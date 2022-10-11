import React from "react";
import styles from "../Styles/AddToFavButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CityContext } from "../App";
import { useAddFavCityToLS } from "../Custom Hooks/useAddFavCityToLS";
const AddToFavButton = () => {
  const { state } = React.useContext(CityContext);
  const addFavToLS = useAddFavCityToLS();
  return (
    <>
      <div
        className={styles.addToFavButton}
        onClick={() => addFavToLS(state.cityName)}
      >
        <p>Add To Fav</p>
        <span />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </>
  );
};

export default AddToFavButton;
