import styled from "styled-components";

const NextDaysWeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.6rem;
  .week-day-box {
    background-color: hsl(0, 0%, 88%);
    padding: 0.6rem;
    border-radius: 0.6rem;
  }
  .week-day-name {
    text-align: center;
    margin-bottom: 0.4rem;
    > h1 {
      font-weight: 600;
      color: var(--color-p2);
      font-size: 1.8rem;
    }
  }
  .week-day-weather {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.4rem;
    cursor: pointer;
    .weather {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      border-radius: 0.4rem;
      background-color: hsl(0, 0%, 82%);
      padding: 0.4rem 0;
      > h3 {
        color: var(--color-p2);
      }
      > h4 {
        color: blue;
      }
      > p {
        color: var(--color-p1);
        font-weight: 600;
      }
      > p span {
        color: blue;
        font-weight: 500;
      }
      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;
        > svg {
          color: var(--color-p1);
        }
        > p {
          font-weight: 600;
          color: blue;
        }
      }
    }
  }
`;

export default NextDaysWeatherInfoContainer;
