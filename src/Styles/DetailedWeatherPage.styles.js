import styled from "styled-components";

const DetailedWeatherPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 0.6rem;
  > p {
    margin: 0 auto;
    color: var(--color-p2);
    font-weight: 600;
    font-size: 1.4rem;
  }
`;

export default DetailedWeatherPageContainer;
