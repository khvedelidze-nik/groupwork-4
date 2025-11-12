import styled from "styled-components";

export const StyledInput = styled.input`
  all: unset;
  background-color: white;
  border-radius: 4px;
  font-size: 12px;
  padding: 4px;

  &:focus-within {
    box-shadow: 0 2px 2px black;
  }
`;
