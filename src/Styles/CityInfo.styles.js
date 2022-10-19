import styled from "styled-components";

const CityInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  background-color: hsl(0, 0%, 88%);
  padding: 0.4rem 0;
  border-radius: 0.6rem;
  cursor: pointer; 
  section:nth-of-type(1) {
    div:nth-of-type(1) {
      color: var(--color-p2);
      display: flex;
      align-items: center;
      gap:0.4rem
    }
    div:nth-of-type(2) {
      p {
        color: grey;
        font-style: italic;
      }
    }
  }
  section:nth-of-type(2) {
    h2 {
      color: var(--color-p2);
    }
    p {
      color: grey;
      font-style: italic;
    }
  }
`;
export default CityInfoContainer;
