import styled from "styled-components";

const StyledTripsMenu = styled.div<{ $display?: string }>`
  position: relative;
  display: ${(props) => props.$display};
  left: 0;
  padding: 10px;
  width: 50%;
  flex-direction: column;
  border-left: 4px solid black;
`;

const TripsMenu = ({ open }: { open: boolean }) => {
  return (
    <StyledTripsMenu $display={open ? "flex" : "none"}>
      Hello World
    </StyledTripsMenu>
  );
};

export default TripsMenu;
