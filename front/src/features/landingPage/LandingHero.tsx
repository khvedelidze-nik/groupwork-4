import styled from "styled-components";
import bgImage from "../../assets/38630-map-world-countries-flag.jpg";

const StyledHeroSection = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  position: relative;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWelcomeWrapper = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.37);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const StyledWelcomeText = styled.h1`
  font-size: 75px;
  font-weight: 700;
  color: rgb(143, 0, 0);
`;

const LandingHero = () => {
  return (
    <StyledHeroSection>
      <StyledWelcomeWrapper>
        <StyledWelcomeText>Welcome</StyledWelcomeText>
      </StyledWelcomeWrapper>
    </StyledHeroSection>
  );
};

export default LandingHero;
