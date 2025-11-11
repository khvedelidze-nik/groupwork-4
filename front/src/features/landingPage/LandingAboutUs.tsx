import styled from "styled-components";
import bgImage from "../../assets/Georgia-Country-Skyline-Wallpaper-95759.jpg";

const AboutUsSection = styled.div`
  width: 900px;
  height: 500px;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  background-attachment: fixed;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
const StyledTextWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 40px;
`;

const StyledHeader = styled.h1`
  font-size: 45px;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 2px black;
  font-weight: 700;
  font-family: sans-serif;
`;

const StyledParagraph = styled.p`
  font-size: 17px;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 2px black;
  font-family: sans-serif;
  font-weight: 600;
`;

const LandingAboutUs = () => {
  return (
    <AboutUsSection>
      <StyledTextWrapper>
        <StyledHeader>ჩვენ შესახებ</StyledHeader>
        <StyledParagraph>
          ეს ვებ-აპლიკაცია შექმნილია ორი ახალგაზრდა დეველოპერის მიერ,
          <br />
          რომლებიც ერთიანად არიან მოტივირებულები თანამედროვე ვებტექნოლოგიების ,
          <br />
          შესწავლითა და პრაქტიკული უნარების განვითარებით.
          <br />
          მათი მიზანია შექმნან ინტერაქტიული, მარტივად მოსახმარი და სასარგებლო
          აპლიკაციები,
          <br />
          რომლებიც აერთიანებს დიზაინს,
          <br />
          ფუნქციონალს და რეალურ მონაცემებთან მუშაობას.
        </StyledParagraph>
      </StyledTextWrapper>
    </AboutUsSection>
  );
};

export default LandingAboutUs;
