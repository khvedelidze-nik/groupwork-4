import styled from "styled-components";
import type { CountryInterface } from "../../shared/interfaces/CountryInterface";

const StyledCountryCard = styled.div`
  background-color: rgb(220, 220, 220);
  -webkit-user-drag: element;
`;

const CountryCard = ({ children }: { children: CountryInterface }) => {
  return <StyledCountryCard>{children.name.common}</StyledCountryCard>;
};

export default CountryCard;
