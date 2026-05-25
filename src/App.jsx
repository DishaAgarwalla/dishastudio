import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return <Loader />;

  }

  return (

    <div className="bg-[#020617] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Education />

      <Projects />

      <Certifications />

      <Contact />

      <Footer />

      <ScrollToTop />

    </div>

  );
}

export default App;