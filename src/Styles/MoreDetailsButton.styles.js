import styled from "styled-components";

const MoreDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > * {
    color: blue;
  }
  p {
    font-weight: 500;
  }
  p:hover{
    text-decoration:underline
  }
  span {
    margin-inline: 0.2rem;
  }
`;
export default MoreDetailsContainer;
