import styled from "styled-components";

const Heading = styled.div`
  text-align: center;
  h1 {
    color: var(--color-p2);
    font-size: 1.7rem;
    font-weight: 600;
  }
`;
const FavCityContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 0.4rem;
`;
const FavCityItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(0, 0%, 88%);
  margin-bottom: 0.4rem;
  padding: 0.5rem 0.6rem;
  border-radius: 0.35rem;

  p {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-p2);
    cursor: pointer;
  }
  button {
    border: 1.3px solid var(--color-p2);
    background-color: transparent;
    border-radius: 0.35rem;
    color: var(--color-p2);
    font-weight: 500;
    padding: 0.35rem;
    cursor: pointer;
  }
`;
const FavCityStyles = { Heading, FavCityContainer, FavCityItem };
export default FavCityStyles;
