import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

const StyledPageBtn = styled(NavLink)`
  all: unset;
  background-color: #bbb;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;

  &.active {
    text-decoration: underline;
  }
`;

const CountriesListPageBtnWrapper = ({ count }: { count: number }) => {
  const pageButtons: number[] = [];
  for (let i = 1; i < count / 10 + 1; i++) {
    pageButtons.push(i);
  }
  return (
    <StyledButtonWrapper>
      {pageButtons.map((value) => (
        <StyledPageBtn key={value} to={"/countries/" + value}>
          {value}
        </StyledPageBtn>
      ))}
    </StyledButtonWrapper>
  );
};

export default CountriesListPageBtnWrapper;
