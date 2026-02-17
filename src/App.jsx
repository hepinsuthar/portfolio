import { useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
          <Footer />
          </>
      )}
    </>
  );
}

export default App;
