import styled from "styled-components";
import type { CountryInterface } from "../../shared/interfaces/CountryInterface";

const StyledCountryCard = styled.div`
  background-color: rgb(220, 220, 220);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const StyledFlag = styled.div<{ $src?: string }>`
  height: 40px;
  width: 70px;
  border: 1px solid black;
  background-image: url(${(props) => props.$src});
  background-size: 70px 40px;
  background-position: center;
  background-repeat: no-repeat;
`;
const StyledName = styled.span`
  line-height: 22px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
`;
const StyledInformation = styled.span`
  line-height: 22px;
  height: 40px;
  font-style: italic;
`;

const CountryCard = ({
  children,
  onClick,
}: {
  children: CountryInterface;
  onClick: (country: CountryInterface, bool: boolean) => void;
}) => {
  const handleClick = () => {
    onClick(children, true);
  };

  return (
    <StyledCountryCard onClick={handleClick}>
      <StyledFlag $src={children.flags.png} />
      <StyledName>{children.name.common}</StyledName>
      <StyledInformation>- Region: {children.subregion}</StyledInformation>
      <StyledInformation>
        {children.independent ? "- independent" : "- dependent"}
      </StyledInformation>
      <StyledInformation>- Population: {children.population}</StyledInformation>
    </StyledCountryCard>
  );
};

export default CountryCard;
