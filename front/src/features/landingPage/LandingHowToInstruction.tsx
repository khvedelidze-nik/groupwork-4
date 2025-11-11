import styled from "styled-components";

import bgImage from "../../assets/wp3846208.jpg";

const InstructionWrapper = styled.div`
  width: 1100px;
  height: 700px;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
  margin: auto;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const InstructionTextWrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.374);
`;

const StyledHeader = styled.h1`
  font-size: 40px;
  font-weight: 700;
  font-family: sans-serif;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const StyledOrderedList = styled.ol`
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-family: sans-serif;
`;

const StyledUnorderedList = styled.ul`
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-family: sans-serif;
  list-style: disc;
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  font-family: sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 600;
  width: 700px;
`;

const LandingHowToInstruction = () => {
  return (
    <InstructionWrapper>
      <InstructionTextWrapper>
        <StyledHeader>გამოყენების ინსტრუქცია</StyledHeader>

        <StyledOrderedList>
          <li>
            <StyledParagraph>
              გახსნისას დაგხვდება Welcome ლენდინგ-ფეიჯი, სადაც აღწერილია აპის
              ფუნქციონალი და გამოყენების გზები.
            </StyledParagraph>
          </li>
          <li>
            <StyledParagraph>
              დააჭირე ღილაკს Explore Places, რათა გადახვიდე ქვეყნების
              ჩამონათვალზე.
            </StyledParagraph>
          </li>
          <li>
            <StyledParagraph>
              ქვეყნების გვერდზე შეგიძლია:
              <StyledUnorderedList>
                <li>
                  <StyledParagraph>
                    მოძებნო ქვეყნები სახელის მიხედვით,
                  </StyledParagraph>
                </li>
                <li>
                  <StyledParagraph>
                    გაფილტრო კო ნტინენტის ან ფავორიტების მიხედვით,
                  </StyledParagraph>
                </li>
                <li>
                  <StyledParagraph>
                    თითოეულ ბარათზე დააჭირო ღილაკს Add to Favorites, რომ ქვეყანა
                    შენს ფავორიტებში დაამატო.
                  </StyledParagraph>
                </li>
              </StyledUnorderedList>
            </StyledParagraph>
          </li>
          <li>
            <StyledParagraph>
              ქვეყნის ბარათზე დაკლიკვისას გაიხსნება მოდალური ფანჯარა,
              <br />
              სადაც დეტალურად გამოჩნდება ინფორმაცია არჩეული ქვეყნის შესახებ.
            </StyledParagraph>
          </li>
          <li>
            <StyledParagraph>
              ზედა მარჯვენა კუთხეში მდებარე ღილაკზე Plan a Trip დაჭერით
              <br />
              გაიხსნება გვერდითი პანელი (sidebar),
              <br />
              სადაც შეგიძლია drag & drop-ით მოათავსო
              <br />
              ქვეყნები შენი სამოგზაურო გეგმების შესაქმნელად.
            </StyledParagraph>
          </li>
          <li>
            <StyledParagraph>
              თუ ამ ღილაკს მთავარ გვერდზე დააჭერ,
              <br />
              სისტემა ავტომატურად გადაგიყვანს ქვეყნების ჩამონათვალზე
              <br />
              და შემდეგ გახსნის პანელს.
            </StyledParagraph>
          </li>
        </StyledOrderedList>
      </InstructionTextWrapper>
    </InstructionWrapper>
  );
};

export default LandingHowToInstruction;
