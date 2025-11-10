import { Route, Routes } from "react-router-dom";
import Layout from "../features/layout/Layout";
import LandingPage from "../features/landingPage/LandingPage";
import CountriesPage from "../features/countriesPage/CountriesPage";
import ErrorPage from "../features/errorPage/ErrorPage";

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
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
