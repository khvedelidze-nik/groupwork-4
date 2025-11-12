import { useNavigate } from "react-router-dom";
import { StyledInput } from "./style";

const TextInput = ({
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
        if (location.pathname !== "/countries/1") navigate("/countries/1");
        setValue(e.target.value);
      }}
    />
  );
};

export default TextInput;
