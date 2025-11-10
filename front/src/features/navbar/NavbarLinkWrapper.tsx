import { links } from "../../router/links";
import { NavLink } from "react-router-dom";

const NavbarLinkWrapper = () => {
  return (
    <div className="nav-link-wrapper">
      {links.map((link) => (
        <NavLink key={link.text} className={"nav-link"} to={link.to}>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default NavbarLinkWrapper;
