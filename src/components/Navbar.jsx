import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-6 flex flex-wrap justify-between items-start relative z-20">
      <div className="text-3xl font-bold italic">Albert</div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden p-2 focus:outline-none" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Desktop Navigation */}
      <div className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mt-4 md:mt-0">
          <li><a href="#works" className="font-medium hover:text-green-800">WORKS</a></li>
          <li><a href="#about" className="font-medium hover:text-green-800">ABOUT</a></li>
          <li><a href="#testimonial" className="font-medium hover:text-green-800">TESTIMONIAL</a></li>
          <li><a href="#contact" className="font-medium hover:text-green-800">CONTACT</a></li>
        </ul>
      </div>
      
      {/* Social Links - Desktop: Right side vertical, Mobile: Bottom horizontal */}
      <div className={`md:absolute md:right-0 md:top-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-row md:flex-col gap-4 mt-4 md:mt-0 justify-center md:justify-start">
          <li><a href="#facebook" className="text-sm hover:text-green-800">FACEBOOK</a></li>
          <li><a href="#instagram" className="text-sm hover:text-green-800">INSTAGRAM</a></li>
          <li><a href="#twitter" className="text-sm hover:text-green-800">TWITTER</a></li>
          <li><a href="#linkedin" className="text-sm hover:text-green-800">LINKEDIN</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;