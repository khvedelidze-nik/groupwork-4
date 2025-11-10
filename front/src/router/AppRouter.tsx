import { Route, Routes } from "react-router-dom";
import Layout from "../features/layout/Layout";
import LandingPage from "../features/landingPage/LandingPage";
import CountriesPage from "../features/countriesPage/CountriesPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/"
        element={<Layout />}
        children={[
          <Route path="/countries/:page" element={<CountriesPage />} />,
        ]}
      />
    </Routes>
  );
};

export default AppRouter;
