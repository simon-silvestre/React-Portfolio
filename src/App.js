import React from 'react'
import Home from './Components/Home/Home';
import SocialMedia from './Components/SocialMedia';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import Workflow from './Components/Workflow/Workflow';

function App() {
  return (
    <div className="App">
      <SocialMedia />
      <Home />
      <Workflow />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
