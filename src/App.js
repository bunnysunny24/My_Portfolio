import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden font-sans bg-white dark:bg-gray-900 transition-colors duration-300">
        <Background />
        <div className="relative z-10 px-4 md:px-12 lg:px-20">
          <Navbar />
          <main>
            <Hero />
            <Works />
            <About />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;