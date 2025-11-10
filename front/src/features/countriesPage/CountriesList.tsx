import { useContext } from "react";
import { AppContext } from "../../shared/context/AppContextProvider";
import styled from "styled-components";
import CountryCard from "./CountryCard";
import { useParams } from "react-router-dom";
import type { CountryFilteredInterface } from "../../shared/interfaces/CountryFilterInterface";

const StyledCountriesList = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const CountriesList = (children: CountryFilteredInterface) => {
  const { countries } = useContext(AppContext);
  const params = useParams();
  const pageIndex = params.page;
  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .startsWith(children.searchFilter.toLowerCase())
  );
  return (
    <StyledCountriesList>
      {filteredCountries
        .slice(Number(pageIndex) * 10 - 10, Number(pageIndex) * 10)
        .map((country) => (
          <CountryCard key={country.name.common} children={country} />
        ))}
    </StyledCountriesList>
  );
};

export default CountriesList;
