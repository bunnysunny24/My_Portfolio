import React, { useState, useEffect } from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const checkScrollPosition = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, [showScrollTop]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary/5 pt-16 pb-10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 rounded-tl-full"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse-slow"></div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-10 mb-8">
          {/* Logo */}
          <div className="text-3xl font-bold italic mb-8 md:mb-0 animate-fade-in opacity-0">
            <span className="text-primary">bhavashesh</span>
            <span className="relative w-3 h-3 inline-block ml-1">
              <span className="absolute top-0 right-0 w-full h-full bg-accent rounded-full animate-pulse"></span>
            </span>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center mb-8 md:mb-0 animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
            <a href="#works" className="text-gray-600 hover:text-primary transition-colors duration-300 relative group">
              Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-4 animate-fade-in opacity-0" style={{animationDelay: '0.4s'}}>
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
                className="w-10 h-10 bg-white text-primary hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 transform hover:scale-110"
                aria-label={social}
                target={social !== 'phone' && social !== 'gmail' ? '_blank' : '_self'}
                rel={social !== 'phone' && social !== 'gmail' ? 'noopener noreferrer' : ''}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  {social === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                  {social === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />}
                  {social === 'gmail' && <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />}
                  {social === 'phone' && <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />}
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
          {/* About Column */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">Bhavashesh</h4>
            <p className="text-gray-600 mb-4">
            I'm a frontend developer and B.Tech student driven by a passion for creating elegant, intuitive, and user-focused digital experiences. I enjoy blending design with emerging technologies like AI/ML, IoT, and blockchain to build innovative solutions.
            </p>
            
            <a 
              href="#about" 
              className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
            >
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center">
                  <svg className="w-3 h-3 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center">
                  <svg className="w-3 h-3 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center">
                  <svg className="w-3 h-3 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center">
                  <svg className="w-3 h-3 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Consulting
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center">
                  <svg className="w-3 h-3 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center">
                  <svg className="w-3 h-3 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center">
                  <svg className="w-3 h-3 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center">
                  <svg className="w-3 h-3 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">Stay Updated</h4>
            <p className="text-gray-600 mb-4">
              Subscribe to my newsletter to get updates on my latest work and 
              insights on web development.
            </p>
            
            <form className="mt-4 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 flex-grow bg-gray-50"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright and terms */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 text-gray-500 text-sm animate-fade-in opacity-0" style={{animationDelay: '0.8s'}}>
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Bhavashesh D. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;