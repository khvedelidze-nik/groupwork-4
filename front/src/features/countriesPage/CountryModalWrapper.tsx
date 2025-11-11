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

const CountryName = styled.span`
  position: relative;
  top: 0;
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
        <CountryName>Official Name: {children.name.official}</CountryName>
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
