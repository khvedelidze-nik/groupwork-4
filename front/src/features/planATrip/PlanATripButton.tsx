import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PlanATripButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const openTripsMenu = () => {
    if (location.pathname !== "/countries") navigate("/countries");
  };

  return (
    <>
      <button className="plan-a-trip-btn" onClick={openTripsMenu}>
        Plan a trip
      </button>
    </>
  );
};

export default PlanATripButton;
