import Navbar from "./components/Navbar.tsx";
import Info from "./components/Info.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx"
import Projects from "./components/Projects.tsx"
import ContactInfo from "./components/ContactInfo.tsx";
function App() {
  return (
    <>
      <Navbar/>
      <Info/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactInfo/>
      <Navbar/>
    </>
  );
}

export default App;
