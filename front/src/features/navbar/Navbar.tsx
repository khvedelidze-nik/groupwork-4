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
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  padding: 20px;
  background-color: white;
  height: 40px;
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
