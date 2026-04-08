import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";
// https://vidhyasugathan.vercel.app/

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
