import styled from "styled-components";
import type { CountryFilterInterface } from "../../shared/interfaces/CountryFilterInterface";
import { useLocation, useNavigate } from "react-router-dom";

const StyledCountriesSidebar = styled.div`
  position: relative;
  left: 0;
  padding: 10px;
  display: flex;
  width: 200px;
  flex-direction: column;
  background-color: #bbbbbb;
  gap: 10px;
`;

const CountriesSidebar = (children: CountryFilterInterface) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <StyledCountriesSidebar>
      <span>Filter by name</span>
      <input
        type="text"
        placeholder="Search by name"
        value={children.searchFilter}
        onChange={(e) => {
          if (location.pathname !== "/countries/1") navigate("/countries/1");
          children.setSearchFilter(e.target.value);
        }}
      />
      <span>Filter by subregion</span>
      <input
        type="text"
        placeholder="Search by subregion"
        value={children.regionFilter}
        onChange={(e) => {
          if (location.pathname !== "/countries/1") navigate("/countries/1");
          children.setRegionFilter(e.target.value);
        }}
      />
      <span>Filter by population</span>
      <input
        type="text"
        placeholder="Min population"
        value={children.minPopulationFilter}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          if (location.pathname !== "/countries/1") navigate("/countries/1");
          children.setMinPopulationFilter(value);
        }}
      />
      <input
        type="text"
        placeholder="Max population"
        value={children.maxPopulationFilter}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          if (location.pathname !== "/countries/1") navigate("/countries/1");
          children.setMaxPopulationFilter(value);
        }}
      />
    </StyledCountriesSidebar>
  );
};

export default CountriesSidebar;
