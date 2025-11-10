import styled from "styled-components";
import type { CountryFilterInterface } from "../../shared/interfaces/CountryFilterInterface";

const StyledCountriesSidebar = styled.div`
  position: relative;
  left: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #bbbbbb;
`;

const CountriesSidebar = (children: CountryFilterInterface) => {
  return (
    <StyledCountriesSidebar>
      <input
        type="text"
        placeholder="Search"
        value={children.searchFilter}
        onChange={(e) => children.setSearchFilter(e.target.value)}
      />
    </StyledCountriesSidebar>
  );
};

export default CountriesSidebar;
