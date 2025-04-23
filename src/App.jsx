import { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);  

  return (
    <BrowserRouter basename="/"> 
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <section id="Hero" className="scroll-mt-20">
            <Hero />
          </section>
        </div>

        <section id="About" className="scroll-mt-20">
          <About />
        </section>

        <section id="Education" className="scroll-mt-20">
          <Education />
        </section>

        <section id="Tech" className="scroll-mt-20">
          <Tech />
        </section>

        <section id="Works" className="scroll-mt-20">
          <Works />
        </section>

        <section id="Feedbacks" className="scroll-mt-20">
          <Feedbacks />
        </section>

        <div className="relative z-0">
          <section id="Contact" className="scroll-mt-20">
            <Contact />
          </section>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
