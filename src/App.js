import React, {useEffect} from 'react'
import Home from './Components/Home/Home';
import SocialMedia from './Components/SocialMedia';
import Introduction from './Components/Introduction/Introduction';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Workflow from './Components/Workflow/Workflow';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {

  useEffect(() => {
    if (window.matchMedia("(min-width: 851px)").matches) {
      gsap.to(".Home", {
        scrollTrigger: {
            trigger: ".Introduction",
            start: "center 600",
            toggleActions: "restart none none reverse"
        },
        x: '100vw',
      });
    }
  }, [])

  return (
    <div className="App">
      <SocialMedia />
      <Home />
      <Introduction />
      <div className="section">
        <Projects />
        <About />
        <Workflow />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
