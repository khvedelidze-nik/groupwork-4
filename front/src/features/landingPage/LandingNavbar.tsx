import PlanATripButton from "../planATrip/PlanATripButton";
import LandingLinkWrapper from "./LandingLinkWrapper";

const LandingNavbar = () => {
  return (
    <div className="landing-navbar">
      <LandingLinkWrapper />
      <PlanATripButton />
    </div>
  );
};

export default LandingNavbar;
