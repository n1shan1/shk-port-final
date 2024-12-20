import About from "./components/About";
import Hero from "./components/Hero";
import Intern from "./components/Intern";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomPointer from "./components/CustomPointer";
import ComplexNavbar from "./components/ComplexNavbar";



const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <AnimatedBackground />
      <CustomPointer />

      <div className="relative container mx-auto px-8">

        <ComplexNavbar/>
        
        <Hero />
        <About />
        <Technologies />
        <Intern />
        <Projects />
        <Contact />

        
      </div>
    </div>

    
  );
};

export default App;
