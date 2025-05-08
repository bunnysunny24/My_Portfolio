import React, { useState, useEffect } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    (localStorage.getItem('darkMode') === null && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar transparency on scroll
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Handle active section highlighting
      const sections = ['works', 'about', 'skills', 'testimonial', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 dark:bg-gray-900/90' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo on left */}
        <div className="text-2xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Bunny</span>
          <span className="relative w-2 h-2 inline-block ml-1">
            <span className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-primary to-accent rounded-full animate-pulse-slow"></span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {['works', 'about', 'skills', 'testimonial', 'contact'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`} 
                  className={`font-medium text-sm uppercase transition-all duration-300 relative group ${
                    activeSection === section 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center p-2 focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-gradient-to-r from-primary to-accent block transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gradient-to-r from-primary to-accent block transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gradient-to-r from-primary to-accent block transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
        
        {/* Right side - Social Links & Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            {['github', 'linkedin', 'instagram', 'gmail'].map((social) => (
              <a 
                key={social}
                href={`#${social}`} 
                className="text-gray-500 hover:text-primary transition-all duration-300"
                aria-label={social}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  {social === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                  {social === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />}
                  {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />}
                  {social === 'gmail' && <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />}
                </svg>
              </a>
            ))}
          </div>
          
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center transition duration-300 focus:outline-none shadow"
            aria-label="Toggle Dark Mode"
          >
            <div 
              className={`w-6 h-6 relative rounded-full transition duration-500 transform ${
                darkMode ? 'translate-x-6 bg-primary' : 'translate-x-0 bg-white'
              } p-1 text-white flex justify-center items-center`}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Bunny</span>
            </div>
            <button 
              onClick={() => setMenuOpen(false)}
              className="p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="space-y-6 mt-10">
            {['works', 'about', 'skills', 'testimonial', 'contact'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`} 
                  onClick={() => setMenuOpen(false)} 
                  className={`block text-lg font-medium uppercase transition-all duration-300 ${
                    activeSection === section 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                  }`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-4">Connect with me</p>
            <div className="flex space-x-5">
              {['github', 'linkedin', 'instagram', 'gmail'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`} 
                  className="text-gray-500 hover:text-primary transition-all duration-300"
                  aria-label={social}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                    {social === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />}
                    {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />}
                    {social === 'gmail' && <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />}
                  </svg>
                </a>
              ))}
            </div>
            
            {/* Mobile dark mode toggle */}
            <div className="mt-8">
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <span>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                <div 
                  className={`w-10 h-5 rounded-full flex items-center ${darkMode ? 'bg-primary' : 'bg-gray-300'} transition-colors duration-300`}
                >
                  <div 
                    className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${
                      darkMode ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" 
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;