import Navbar from "./components/Navbar.tsx";
import Info from "./components/Info.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import ContactInfo from "./components/ContactInfo.tsx";

function App() {
  return (
    <div className="container text-center mt-5">
      <Navbar />
      <Info />
      <About />
      <Skills />
      <Projects />
      <ContactInfo />
      <Navbar />
    </div>
  );
}

export default App;
