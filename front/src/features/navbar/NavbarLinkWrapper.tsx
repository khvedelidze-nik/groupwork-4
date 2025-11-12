import styled from "styled-components";
import { links } from "../../router/links";
import { NavLink } from "react-router-dom";

const StyledLinkWrapper = styled.div`
  display: flex;
  gap: 20px;
  line-height: 40px;
`;

const StyledNavLink = styled(NavLink)`
  all: unset;
  color: #555;
  font-size: larger;
  cursor: pointer;

  &.active {
    color: black;
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 128, 0.5);
    text-decoration-thickness: 3px;
    cursor: default;
    -moz-text-decoration-color: rgba(0, 0, 128, 0.5);
  }
`;

const NavbarLinkWrapper = () => {
  return (
    <StyledLinkWrapper>
      {links.map((link) => (
        <StyledNavLink key={link.text} to={link.to}>
          {link.text}
        </StyledNavLink>
      ))}
    </StyledLinkWrapper>
  );
};

export default NavbarLinkWrapper;
