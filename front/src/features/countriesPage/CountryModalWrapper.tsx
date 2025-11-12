import styled from "styled-components";
import type { CountryInterface } from "../../shared/interfaces/CountryInterface";

const StyledModalWrapper = styled.div`
  position: fixed;
  z-index: 90;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
`;

const StyledModal = styled.div`
  position: relative;
  height: 400px;
  width: 800px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const CloseBtn = styled.button`
  all: unset;
  position: absolute;
  background-color: #ddd;
  top: 10px;
  right: 10px;
  height: 20px;
  width: 20px;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  border-radius: 4px;
  cursor: pointer;
`;
const FavoriteBtn = styled.button<{ $bkgrnd: string }>`
  all: unset;
  position: absolute;
  background-color: ${(prop) => prop.$bkgrnd};
  color: black;
  bottom: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  border-radius: 4px;
  cursor: pointer;
`;

const HeadWrapper = styled.div`
  display: flex;
  height: 40px;
  gap: 10px;
  margin-bottom: 10px;
`;
const NameWrapper = styled.div`
  display: flex;
  max-height: 40px;
  flex-direction: column;
  gap: 4px;
  padding: 3px;
`;

const StyledFlag = styled.div<{ $src: string }>`
  height: 40px;
  width: 70px;
  border: 1px solid black;
  background-image: url(${(props) => props.$src});
  background-size: 70px 40px;
  background-position: center;
  background-repeat: no-repeat;
`;

const CountryName = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
const CountryCapital = styled.span`
  font-style: italic;
  font-size: 14px;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledInformation = styled.span`
  font-weight: bold;
`;
const StyledInformationText = styled.span`
  font-weight: normal;
`;

const CountryModalWrapper = ({
  open,
  onClose,
  children,
  favorite,
}: {
  open: boolean;
  onClose: (country: CountryInterface, bool: boolean) => void;
  children: CountryInterface;
  favorite: boolean;
}) => {
  if (!open) return;

  const closeModal = () => {
    onClose(children, false);
  };

  return (
    <StyledModalWrapper onClick={closeModal}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={closeModal}>×</CloseBtn>
        <HeadWrapper>
          <StyledFlag $src={children.flags.png} />
          <NameWrapper>
            <CountryName>{children.name.official}</CountryName>
            <CountryCapital>
              Capital: {children.capital} - Subregion: {children.subregion}{" "}
              {children.independent ? "- independent" : "- dependent"}
            </CountryCapital>
          </NameWrapper>
        </HeadWrapper>
        {children.flags.alt.length >= 1 ? (
          <StyledInformation>
            Flag Information:
            <StyledInformationText>{children.flags.alt}</StyledInformationText>
          </StyledInformation>
        ) : null}
        <ContentWrapper>
          <InformationWrapper>
            <StyledInformation>
              Population:{" "}
              <StyledInformationText>
                {children.population}
              </StyledInformationText>
            </StyledInformation>
            <StyledInformation>
              Area:{" "}
              <StyledInformationText>{children.area}</StyledInformationText>
            </StyledInformation>
            <StyledInformation>
              Driving side:{" "}
              <StyledInformationText>{children.car.side}</StyledInformationText>
            </StyledInformation>
            {children.car.signs[0].length >= 1 ? (
              <StyledInformation>
                Numberplate Signs:{" "}
                <StyledInformationText>
                  {children.car.signs.map((t) => t).join(", ")}
                </StyledInformationText>
              </StyledInformation>
            ) : null}
          </InformationWrapper>
        </ContentWrapper>
        {favorite ? (
          <FavoriteBtn $bkgrnd="#ffff00">★</FavoriteBtn>
        ) : (
          <FavoriteBtn $bkgrnd="#bbb">☆</FavoriteBtn>
        )}
      </StyledModal>
    </StyledModalWrapper>
  );
};

export default CountryModalWrapper;
