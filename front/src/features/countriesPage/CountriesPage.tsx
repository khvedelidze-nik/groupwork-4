import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import CountriesContentWrapper from "./CountriesContentWrapper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const StyledCountriesPage = styled.div`
  position: relative;
`;

const CountriesPage = () => {
  return (
    <StyledCountriesPage>
      <Navbar />
      <DndProvider backend={HTML5Backend}>
        <CountriesContentWrapper />
      </DndProvider>
    </StyledCountriesPage>
  );
};

export default CountriesPage;
