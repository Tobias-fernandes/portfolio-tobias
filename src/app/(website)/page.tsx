import Experience from "@/components/website/experience";
import Hero from "@/components/website/hero";
import Projects from "@/components/website/projects";
import Skills from "@/components/website/skills";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
