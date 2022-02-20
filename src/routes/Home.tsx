import ServicesList from "../components/molecules/ServicesList";
import Projects from "../components/molecules/Projects";
import { Hero, Services, About, Enquiry } from "../components/sections";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services>
        <ServicesList />
      </Services>
      <Projects />
      <Enquiry />
    </>
  );
};

export default Home;
