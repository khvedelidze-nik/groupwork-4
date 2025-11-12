export interface CountryInterface {
  name: {
    common: string;
    official: string;
    nativeName: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  independent: boolean;
  capital: string[];
  subregion: string;
  languages: { [languageCode: string]: string };
  area: number;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: { signs: string[]; side: string };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
