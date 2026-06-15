import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Home({ theme, setTheme }) {
  return (
    <div className="relative overflow-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
