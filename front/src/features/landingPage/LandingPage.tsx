import Navbar from "../navbar/Navbar";
import LandingAboutUs from "./LandingAboutUs";
import LandingHero from "./LandingHero";
import LandingHowToInstruction from "./LandingHowToInstruction";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <LandingHero />
      <LandingAboutUs />
      <LandingHowToInstruction />
    </>
  );
};

export default LandingPage;
