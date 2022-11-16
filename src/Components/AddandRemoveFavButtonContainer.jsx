import styled from "styled-components";

const AddandRemoveFavContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  gap: 0.4rem;
  p {
    font-weight: 600;
    color: ${(props) =>
      props.type === "addToFavBtn" ? "var(--color-p2)" : "blue"};
  }
  svg {
    font-size: 0.95rem;
    color: ${(props) => (props.type === "addToFavBtn" ? "red" : "blue")};
  }
`;

export default AddandRemoveFavContainer;
