import styled from "styled-components";
import PlanATripButton from "../planATrip/PlanATripButton";
import NavbarLinkWrapper from "./NavbarLinkWrapper";

const StyledNavbar = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: firebrick;
  height: 20px;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavbarLinkWrapper />
      <PlanATripButton />
    </StyledNavbar>
  );
};

export default Navbar;
