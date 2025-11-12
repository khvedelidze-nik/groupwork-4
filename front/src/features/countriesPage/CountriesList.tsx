import { useContext, useState } from "react";
import { AppContext } from "../../shared/context/AppContextProvider";
import styled from "styled-components";
import CountryCard from "./CountryCard";
import { useParams } from "react-router-dom";
import type { CountryFilteredInterface } from "../../shared/interfaces/CountryFilterInterface";
import CountriesListPageBtnWrapper from "./CountriesListPageBtnWrapper";
import type { CountryInterface } from "../../shared/interfaces/CountryInterface";
import CountryModalWrapper from "./CountryModalWrapper";

const StyledCountriesWrapper = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const StyledCountriesList = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const CountriesList = (children: CountryFilteredInterface) => {
  const { countries } = useContext(AppContext);

  const [country, setCountry] = useState<CountryInterface>(countries[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const params = useParams();
  const pageIndex = params.page;
  const filteredCountries = countries
    .sort((a: CountryInterface, b: CountryInterface) =>
      a.name.common.localeCompare(b.name.common)
    )
    .filter((country) =>
      country.name.common
        .toLowerCase()
        .startsWith(children.searchFilter.toLowerCase())
    )
    .filter((country) =>
      country.subregion
        .toLowerCase()
        .startsWith(children.regionFilter.toLowerCase())
    )
    .filter(
      (country) => country.population >= Number(children.minPopulationFilter)
    )
    .filter((country) =>
      children.maxPopulationFilter
        ? country.population <= Number(children.maxPopulationFilter)
        : country.population >= Number(children.maxPopulationFilter)
    );
  const toggleModal = (country: CountryInterface, bool: boolean) => {
    setCountry(country);
    setModalOpen(bool);
  };
  return (
    <StyledCountriesWrapper>
      <StyledCountriesList>
        {filteredCountries
          .slice(Number(pageIndex) * 10 - 10, Number(pageIndex) * 10)
          .map((country) => (
            <CountryCard
              key={country.name.common}
              children={country}
              onClick={toggleModal}
            />
          ))}
      </StyledCountriesList>
      <CountriesListPageBtnWrapper count={filteredCountries.length} />
      <CountryModalWrapper
        open={modalOpen}
        onClose={toggleModal}
        children={country}
        favorite={true}
      />
    </StyledCountriesWrapper>
  );
};

export default CountriesList;
