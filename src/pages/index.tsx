import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Menu/Navbar";
import Projects from "@/components/Work/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}
