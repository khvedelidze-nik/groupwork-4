import styled from "styled-components";
import type { CountryFilterInterface } from "../../shared/interfaces/CountryFilterInterface";
import TextInput from "./inputs/TextInput";
import NumberInput from "./inputs/NumberInput";

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
  return (
    <StyledCountriesSidebar>
      <span>Filter by name</span>
      <TextInput
        label="Search by Name"
        value={children.searchFilter}
        setValue={children.setSearchFilter}
      />
      <span>Filter by subregion</span>
      <TextInput
        label="Search by Subregion"
        value={children.regionFilter}
        setValue={children.setRegionFilter}
      />
      <span>Filter by population</span>
      <NumberInput
        label="Min population"
        value={children.minPopulationFilter}
        setValue={children.setMinPopulationFilter}
      />
      <NumberInput
        label="Max population"
        value={children.maxPopulationFilter}
        setValue={children.setMaxPopulationFilter}
      />
    </StyledCountriesSidebar>
  );
};

export default CountriesSidebar;
