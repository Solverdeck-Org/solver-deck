import HeroSection from "@/components/HeroSection";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Faq from "@/components/section/Faq";
import Process from "@/components/section/Process";
import Services from "@/components/section/Services";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Services />
      <Process />
      <About />
      <Contact />
      <Faq />
    </main>
  );
};

export default Home;
