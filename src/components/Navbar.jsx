import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-6 flex justify-between items-start relative z-20">
      {/* Logo on left */}
      <div className="text-3xl font-bold italic">Albert</div>
      
      {/* Center navigation with pill background */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full px-8 py-3 shadow-sm">
          <ul className="flex space-x-8">
            <li><a href="#works" className="font-medium text-sm hover:text-green-800">WORKS</a></li>
            <li><a href="#about" className="font-medium text-sm hover:text-green-800">ABOUT</a></li>
            <li><a href="#testimonial" className="font-medium text-sm hover:text-green-800">TESTIMONIAL</a></li>
            <li><a href="#contact" className="font-medium text-sm hover:text-green-800">CONTACT</a></li>
          </ul>
        </div>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden p-2 focus:outline-none" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden w-full ${menuOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="bg-white rounded-full px-8 py-3 shadow-sm">
          <ul className="flex flex-col space-y-2 items-center">
            <li><a href="#works" className="font-medium text-sm hover:text-green-800">WORKS</a></li>
            <li><a href="#about" className="font-medium text-sm hover:text-green-800">ABOUT</a></li>
            <li><a href="#testimonial" className="font-medium text-sm hover:text-green-800">TESTIMONIAL</a></li>
            <li><a href="#contact" className="font-medium text-sm hover:text-green-800">CONTACT</a></li>
          </ul>
        </div>
      </div>
      
      {/* Social Links - Right side vertical */}
      <div className="hidden md:block">
        <ul className="flex flex-col space-y-2 text-right">
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