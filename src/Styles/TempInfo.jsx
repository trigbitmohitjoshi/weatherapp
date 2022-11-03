import styled from "styled-components";

const TempInfoContainer = styled.div`
  text-align: center;
  h2 {
    font-size: 2.2rem;
    color: var(--color-p2);
  }
  > p {
    color: var(--color-p2);
    font-weight: 600;
    font-size: 1.1rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin-top: 0.2rem;
    color: blue;
    font-weight: 400;
  }
`;
export default TempInfoContainer;
