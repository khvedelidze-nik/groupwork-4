export interface CountryFilterInterface {
  searchFilter: string;
  setSearchFilter: (v: string) => void;
  regionFilter: string;
  setRegionFilter: (v: string) => void;
  minPopulationFilter: string;
  setMinPopulationFilter: (v: string) => void;
  maxPopulationFilter: string;
  setMaxPopulationFilter: (v: string) => void;
}
export interface CountryFilteredInterface {
  searchFilter: string;
  regionFilter: string;
  minPopulationFilter: string;
  maxPopulationFilter: string;
}
