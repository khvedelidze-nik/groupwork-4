import styled from "styled-components";
import CountriesList from "./CountriesList";
import CountriesSidebar from "./CountriesSidebar";
import { useState } from "react";

const StyledCountriesContentWrapper = styled.div`
  position: relative;
  display: flex;
`;

const CountriesContentWrapper = () => {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <StyledCountriesContentWrapper>
      <CountriesSidebar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <CountriesList searchFilter={searchFilter} />
    </StyledCountriesContentWrapper>
  );
};

export default CountriesContentWrapper;
