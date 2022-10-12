import styled from "styled-components";

const SearchFieldContainer = styled.div`
  display: flex;
  background-color: var(--color-input-field);
  border-radius: 0.3rem;

  input {
    padding: 0.625rem;
    border-radius: 0.3rem;
    background-color: transparent;
    font-weight: 500;
  }

  svg {
    padding: 0.625rem;
    cursor: pointer;
  }
`;

export default SearchFieldContainer;
