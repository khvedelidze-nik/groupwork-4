import { useNavigate } from "react-router-dom";
import { StyledInput } from "./style";

const NumberInput = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (v: string) => void;
}) => {
  const navigate = useNavigate();
  return (
    <StyledInput
      type="text"
      placeholder={label}
      value={value}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (location.pathname !== "/countries/1") navigate("/countries/1");
        setValue(value);
      }}
    />
  );
};

export default NumberInput;
