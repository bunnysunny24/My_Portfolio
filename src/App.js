import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <Background />
      <div className="relative z-10 px-4 md:px-12 lg:px-20">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;