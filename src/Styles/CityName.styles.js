import styled from "styled-components";

const CityNameContainer = styled.div`
  display: flex;
  align-items: center;

  > * {
    color: var(--color-p2);
    font-size: 1.5rem;
  }
  h1 {
    margin-left: 0.5rem;
    font-size: 1.8rem;
  }
`;
const WeatherDescriptionContainer = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: blue;
`;
const CityNameStyles = { CityNameContainer, WeatherDescriptionContainer };
export default CityNameStyles;
