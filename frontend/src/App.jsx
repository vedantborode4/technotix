import React from 'react'
import Services from './pages/Services.jsx'
import WhyUs from './pages/WhyUs.jsx'
import Testimonials from './pages/Testimonials.jsx'
import ContactUs from './pages/ContactUs.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
    <Home />
    <About/>
    <Services />
    <WhyUs />
    <Testimonials />
    <ContactUs />
    <Footer/>
    </>
  )
}

export default App