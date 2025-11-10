import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import CountriesContentWrapper from "./CountriesContentWrapper";

const StyledCountriesPage = styled.div`
  position: relative;
`;

const CountriesPage = () => {
  return (
    <StyledCountriesPage>
      <Navbar />
      <CountriesContentWrapper />
    </StyledCountriesPage>
  );
};

export default CountriesPage;
