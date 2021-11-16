import React from 'react'
import Home from './Components/Home/Home';
import SocialMedia from './Components/SocialMedia';
import About from './Components/About/About';
import Workflow from './Components/Workflow/Workflow';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import Introduction from './Components/Introduction/Introduction';

function App() {
  return (
    <div className="App">
      <SocialMedia />
      <Home />
      <Introduction />
      <About />
      <Workflow />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
