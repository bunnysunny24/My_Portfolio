import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <Background />
      <div className="relative z-10 px-4 md:px-12 lg:px-20">
        <Navbar />
        <Hero />
        <Works />z
        <About />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;