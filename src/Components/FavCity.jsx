import React from "react";
import FavCityStyles from "../Styles/FavCity.styles";
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
      <FavCityStyles.Heading>
        <h1>Favourite City</h1>
      </FavCityStyles.Heading>
      <FavCityStyles.FavCityContainer>
        {favCities?.length > 0 ? (
          <FavCities favCities={favCities} />
        ) : (
          <p>No Fav City</p>
        )}
      </FavCityStyles.FavCityContainer>
    </>
  );
};

export default FavCity;
