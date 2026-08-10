import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Credetials from "../Credetials";
import TrustedBy from "../TrustedBy";
import Services from "../Services";
import CallToAction from "../CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Services />
      <MySkills />
      <MyPortfolio />
      <Credetials />
      <CallToAction />
      <ContactMe />
      <Footer />
    </>
  );
}
