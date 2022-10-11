import React from "react";
import styles from "../Styles/FavCity.module.css";
import FavCities from "./FavCities";
import { CityContext } from "../App";
const FavCity = () => {
  const { state } = React.useContext(CityContext);
  const [favCities, setFavCities] = React.useState([]);
  React.useEffect(() => {
    setFavCities(state.favCities);
  }, [state.favCities]);

  return (
    <>
      <div className={styles.heading}>
        <h1>Favourite City</h1>
      </div>
      <div className={styles.favCitiesContainer}>
        {favCities?.length > 0 ? (
          <FavCities favCities={favCities} />
        ) : (
          <p>No Fav City</p>
        )}
      </div>
    </>
  );
};

export default FavCity;
