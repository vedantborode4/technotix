import React from 'react';
import Services from './pages/Services.jsx';
import WhyUs from './pages/WhyUs.jsx';
import Testimonials from './pages/Testimonials.jsx';
import ContactUs from './pages/ContactUs.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="scroll-smooth">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="why-us">
        <WhyUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;

