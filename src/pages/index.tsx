import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Menu/Navbar";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Work/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
