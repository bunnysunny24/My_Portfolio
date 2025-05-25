import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Handle viewport resize and determine if mobile view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setIsMobile(width < 768);
      
      // Close mobile menu when resizing to desktop
      if (width >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className={`py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-4'
    }`}>      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo on left */}
        <div className="text-xl sm:text-2xl font-bold">
          <Link to="/" className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Bunny
            <span className="relative w-1.5 sm:w-2 h-1.5 sm:h-2 inline-block ml-1">
              <span className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-primary to-accent rounded-full animate-pulse-slow"></span>
            </span>
          </Link>
        </div>
          {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            {['works', 'about', 'skills', 'contact'].map((section) => (
              <li key={section}>
                {location.pathname === "/" ? (
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
                ) : (
                  <Link 
                    to={`/#${section}`} 
                    className={`font-medium text-sm uppercase transition-all duration-300 relative group text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary`}
                  >
                    {section}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full`}></span>
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link 
                to="/certificates" 
                className={`font-medium text-sm uppercase transition-all duration-300 relative group ${
                  location.pathname === "/certificates" 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                }`}
              >
                Certificates
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === "/certificates" ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
            {location.pathname !== "/projects" && (
              <li>
                <Link 
                  to="/projects" 
                  className="font-medium text-sm uppercase transition-all duration-300 relative group text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full"></span>
                </Link>
              </li>
            )}
          </ul>
        </div>
        
        {/* Mobile menu button - enhanced for touch */}
        <button 
          className="md:hidden flex items-center p-2 focus:outline-none touch-manipulation" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
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
            {['github', 'linkedin', 'gmail', 'phone'].map((social) => (
              <a 
                key={social}
                href={social === 'github' 
                  ? 'https://github.com/bunnysunny24' 
                  : social === 'linkedin' 
                  ? 'https://www.linkedin.com/in/bhavashesh/' 
                  : social === 'gmail'
                  ? 'mailto:bhavashesh@gmail.com'
                  : social === 'phone'
                  ? 'tel:9849800511'
                  : '#'}
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-all duration-300"
                aria-label={social}
                target={social !== 'phone' && social !== 'gmail' ? '_blank' : '_self'}
                rel={social !== 'phone' && social !== 'gmail' ? 'noopener noreferrer' : ''}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  {social === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                  {social === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />}
                  {social === 'gmail' && <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />}
                  {social === 'phone' && <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />}
                </svg>
              </a>
            ))}
          </div>
          
          {/* Dark mode toggle - Enhanced version */}
          <button
            onClick={toggleDarkMode}
            className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center transition duration-300 focus:outline-none shadow relative"
            aria-label="Toggle Dark Mode"
          >
            <span className="sr-only">{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
            
            {/* Sun and moon icons for better visibility */}
            <span className={`absolute left-1 top-1 text-yellow-500 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 0 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 0 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z" clipRule="evenodd" />
              </svg>
            </span>
            <span className={`absolute right-1 top-1 text-gray-100 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z" />
              </svg>
            </span>
            
            {/* Toggle circle */}
            <div 
              className={`w-6 h-6 relative rounded-full transition duration-500 transform ${
                darkMode ? 'translate-x-6 bg-primary' : 'translate-x-0 bg-white'
              } shadow-md z-10`}
            ></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - improved accessibility and animations */}
      <div 
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 right-0 bottom-0 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
        aria-hidden={!menuOpen}
      >
        <div className="p-5 sm:p-6">          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <div className="text-xl sm:text-2xl font-bold">
              <Link to="/" onClick={() => setMenuOpen(false)} className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Bunny</Link>
            </div>
            <button 
              onClick={() => setMenuOpen(false)}
              className="p-2 focus:outline-none touch-manipulation"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>            <ul className="space-y-4 sm:space-y-6 mt-8 sm:mt-10">
            {['works', 'about', 'skills', 'testimonial', 'contact'].map((section, index) => (
              <li key={section} className="transform translate-x-8 opacity-0 animate-slide-in-right" style={{animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards'}}>
                {location.pathname === "/" ? (
                  <a 
                    href={`#${section}`} 
                    onClick={() => setMenuOpen(false)} 
                    className={`block text-base sm:text-lg font-medium uppercase transition-all duration-300 ${
                      activeSection === section 
                        ? 'text-primary' 
                        : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="w-5 sm:w-6 h-0.5 bg-accent mr-2 sm:mr-3 inline-block"></span>
                      {section}
                    </span>
                  </a>
                ) : (
                  <Link 
                    to={`/#${section}`} 
                    onClick={() => setMenuOpen(false)} 
                    className="block text-base sm:text-lg font-medium uppercase transition-all duration-300 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  >
                    <span className="flex items-center">
                      <span className="w-5 sm:w-6 h-0.5 bg-accent mr-2 sm:mr-3 inline-block"></span>
                      {section}
                    </span>
                  </Link>
                )}
              </li>
            ))}
            <li className="transform translate-x-8 opacity-0 animate-slide-in-right" style={{animationDelay: `${0.1 + 5 * 0.1}s`, animationFillMode: 'forwards'}}>
              <Link 
                to="/certificates" 
                onClick={() => setMenuOpen(false)} 
                className={`block text-base sm:text-lg font-medium uppercase transition-all duration-300 ${
                  location.pathname === "/certificates" 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
                }`}
              >
                <span className="flex items-center">
                  <span className="w-5 sm:w-6 h-0.5 bg-accent mr-2 sm:mr-3 inline-block"></span>
                  Certificates
                </span>
              </Link>
            </li>
            {location.pathname !== "/projects" && (
              <li className="transform translate-x-8 opacity-0 animate-slide-in-right" style={{animationDelay: `0.6s`, animationFillMode: 'forwards'}}>
                <Link 
                  to="/projects" 
                  onClick={() => setMenuOpen(false)} 
                  className="block text-base sm:text-lg font-medium uppercase transition-all duration-300 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                >
                  <span className="flex items-center">
                    <span className="w-5 sm:w-6 h-0.5 bg-accent mr-2 sm:mr-3 inline-block"></span>
                    Projects
                  </span>
                </Link>
              </li>
            )}
          </ul>
          
          <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-gray-100 dark:border-gray-800 transform translate-y-8 opacity-0 animate-slide-up" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Connect with me</p>
            <div className="flex space-x-4 sm:space-x-5">
              {['github', 'linkedin', 'gmail', 'phone'].map((social, index) => (
                <a 
                  key={social}
                  href={social === 'github' 
                    ? 'https://github.com/bunnysunny24' 
                    : social === 'linkedin' 
                    ? 'https://www.linkedin.com/in/bhavashesh/' 
                    : social === 'gmail'
                    ? 'mailto:bhavashesh@gmail.com'
                    : social === 'phone'
                    ? 'tel:9849800511'
                    : '#'}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 transform hover:scale-110"
                  aria-label={social}
                  target={social !== 'phone' && social !== 'gmail' ? '_blank' : '_self'}
                  rel={social !== 'phone' && social !== 'gmail' ? 'noopener noreferrer' : ''}
                  style={{animationDelay: `${0.6 + index * 0.1}s`}}
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                    {social === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />}
                    {social === 'gmail' && <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />}
                    {social === 'phone' && <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />}
                  </svg>
                </a>
              ))}
            </div>
            
            {/* Mobile dark mode toggle - improved for touch and accessibility */}
            <div className="mt-6 sm:mt-8 transform translate-y-8 opacity-0 animate-slide-up" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-3 py-2 sm:py-3 px-3 sm:px-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300 w-full touch-manipulation"
              >
                {darkMode ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    <span>Switch to Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <span>Switch to Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open - with improved touch handling */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden touch-none" 
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
}

export default Navbar;