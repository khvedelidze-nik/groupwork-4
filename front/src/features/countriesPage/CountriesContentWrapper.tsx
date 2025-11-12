import styled from "styled-components";
import CountriesList from "./CountriesList";
import CountriesSidebar from "./CountriesSidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TripsMenu from "../planATrip/TripsMenu";

const StyledCountriesContentWrapper = styled.div`
  position: relative;
  display: flex;
  min-height: calc(100vh - 60px);
`;

const CountriesContentWrapper = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [minPopulationFilter, setMinPopulationFilter] = useState("");
  const [maxPopulationFilter, setMaxPopulationFilter] = useState("");
  const [openTripsMenu, setOpenTripsMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.openTripsMenu) {
      setOpenTripsMenu(true);
    } else {
      setOpenTripsMenu(false);
    }
  }, [location.state?.openTripsMenu]);
  if (openTripsMenu) console.log(true);
  return (
    <StyledCountriesContentWrapper>
      <CountriesSidebar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        minPopulationFilter={minPopulationFilter}
        setMinPopulationFilter={setMinPopulationFilter}
        maxPopulationFilter={maxPopulationFilter}
        setMaxPopulationFilter={setMaxPopulationFilter}
      />
      <CountriesList
        searchFilter={searchFilter}
        regionFilter={regionFilter}
        minPopulationFilter={minPopulationFilter}
        maxPopulationFilter={maxPopulationFilter}
      />
      <TripsMenu open={openTripsMenu} />
    </StyledCountriesContentWrapper>
  );
};

export default CountriesContentWrapper;
