import { createContext, useEffect, useState, type ReactNode } from "react";
import type { CountryInterface } from "../interfaces/CountryInterface";

interface AppContextInterface {
  countries: CountryInterface[];
  loading: boolean;
}

const AppContext = createContext<AppContextInterface>({
  countries: [],
  loading: true,
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,independent,capital,subregion,languages,area,maps,population,car,flags"
    )
      .then((data) => data.json())
      .then((res) => {
        setCountries(res);
        setLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider value={{ countries, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };
