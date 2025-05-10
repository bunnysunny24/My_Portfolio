import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import AllProjects from './components/AllProjects';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Main Homepage Route */}
          <Route path="/" element={
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
          } />

          {/* All Projects Page Route */}
          <Route path="/projects" element={
            <div className="relative min-h-screen overflow-x-hidden font-sans bg-white dark:bg-gray-900 transition-colors duration-300">
              <Background />
              <div className="relative z-10 px-4 md:px-12 lg:px-20">
                <Navbar />
                <AllProjects />
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;