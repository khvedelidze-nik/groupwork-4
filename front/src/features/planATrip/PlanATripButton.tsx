import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledTripBtn = styled.button`
  all: unset;
  background-color: rgba(0, 0, 128, 0.5);
  color: white;
  border-radius: 8px;
  font-size: small;
  padding: 0 5px;
`;

const PlanATripButton: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const openTripsMenu = () => {
    if (!location.pathname.startsWith("/countries") || !params.page)
      navigate("/countries/1");
  };

  return (
    <>
      <StyledTripBtn onClick={openTripsMenu}>Plan a trip</StyledTripBtn>
    </>
  );
};

export default PlanATripButton;
