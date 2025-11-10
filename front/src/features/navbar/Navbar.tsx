import PlanATripButton from "../planATrip/PlanATripButton";
import NavbarLinkWrapper from "./NavbarLinkWrapper";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarLinkWrapper />
      <PlanATripButton />
    </div>
  );
};

export default Navbar;
