import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-green-400 selection:text-black">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
