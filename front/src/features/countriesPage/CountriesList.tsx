import { useContext } from "react";
import { AppContext } from "../../shared/context/AppContextProvider";

const CountriesList = () => {
  const { countries } = useContext(AppContext);
  return (
    <ul className="countries-list">
      {countries.map((country) => (
        <li key={country.name.common} className="country-card">
          <h3>{country.name.official}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
