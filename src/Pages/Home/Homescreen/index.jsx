import Stats from "../Stats";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Credetials from "../Credetials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <Stats />
      <MyPortfolio />
      <Credetials />
      <ContactMe />
      <Footer />
    </>
  );
}
