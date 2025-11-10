import { NavLink } from "react-router-dom";
import { links } from "../../router/links";

const LandingLinkWrapper = () => {
  return (
    <div className="landing-link-wrapper">
      {links.map((link) => (
        <NavLink key={link.text} className={"landing-nav-link"} to={link.to}>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default LandingLinkWrapper;
