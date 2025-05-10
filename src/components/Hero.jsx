// Hero.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function Hero() {
  const profileImageRef = useRef(null);
  const { darkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Handle viewport resize and determine if mobile view
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Add floating animation to profile image
    const profileImage = profileImageRef.current;
    if (profileImage) {
      let position = 0;
      let direction = 1;
      const animate = () => {
        position += 0.05 * direction;
        if (position > 5) direction = -1;
        if (position < -5) direction = 1;
        profileImage.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(animate);
      };
      const animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, []);

  return (
    <div className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pt-32 md:pb-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* Left side with text content */}
        <div className="flex flex-col space-y-6 md:space-y-8 md:pr-8 lg:pr-12 animate-fade-in">
          <div className="text-xs sm:text-sm text-primary font-semibold tracking-widest uppercase animate-slide-down">
            WELCOME TO MY WORLD
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-800 dark:text-white animate-slide-down tracking-tight" style={{ animationDelay: '0.2s', letterSpacing: '-0.02em' }}>
            Hi, I'm <span className="text-primary relative inline-block">
              Developer
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-200 animate-slide-down leading-tight" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block">
              <span className="text-primary">Full Stack Developer</span> with 
              <span className="text-accent font-extrabold ml-2">AI/ML expertise</span>
              <span className="inline-block ml-2 sm:ml-3 text-accent">&lt;/&gt;</span>
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.5s', lineHeight: '1.8' }}>
          I'm a 2nd-year B.Tech student passionate about technology and innovation. I explore frontend development, AI/ML, IoT, and blockchain to build meaningful, user-centered digital solutions.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-5 mt-6 sm:mt-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <a 
              href="#works" 
              className="group relative overflow-hidden bg-primary hover:bg-accent text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center text-sm sm:text-base"
              style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)' }}
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute w-0 h-0 rounded-full bg-white/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:w-72 group-hover:h-72 transition-all duration-500"></span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a 
              href="#contact" 
              className={`px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-medium border-2 border-primary text-primary hover:text-white hover:bg-primary transition-all duration-300 flex items-center shadow-lg hover:shadow-xl text-sm sm:text-base ${
                darkMode ? 'dark:border-primary dark:text-primary-light dark:hover:text-white' : ''
              }`}
              style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 0, 0, 0.03)' }}
            >
              Contact Me
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
          <div className="flex items-center space-x-3 sm:space-x-5 mt-8 sm:mt-10 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium">Find me on:</span>
            {['github', 'linkedin', 'phone', 'gmail'].map((social) => (
              <a 
                key={social}
                href={social === 'github' 
                  ? 'https://github.com/bunnysunny24' 
                  : social === 'linkedin' 
                  ? 'https://www.linkedin.com/in/bhavashesh/' 
                  : social === 'phone'
                  ? 'tel:9849800511'
                  : social === 'gmail'
                  ? 'mailto:bhavashesh@gmail.com'
                  : '#'} 
                className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 shadow-dark-lg' 
                    : 'bg-white shadow-lg'
                }`}
                style={{ boxShadow: darkMode 
                  ? '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.15)' 
                  : '0 10px 20px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.03)' 
                }}
                aria-label={social}
                target={['github', 'linkedin'].includes(social) ? '_blank' : '_self'}
                rel={['github', 'linkedin'].includes(social) ? 'noopener noreferrer' : ''}
              >
                <span className={`transition-colors duration-300 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                    {social === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />}
                    {social === 'phone' && <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />}
                    {social === 'gmail' && <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />}
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Right side with profile image and design elements */}
        <div className="relative flex justify-center items-center mt-8 sm:mt-10 md:mt-0">
          {/* 3D effect circular background gradients - enhanced for dark mode and mobile */}
          <div className={`absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full animate-spin-very-slow ${
            darkMode 
              ? 'bg-gradient-to-tr from-primary/15 to-accent/15' 
              : 'bg-gradient-to-tr from-primary/5 to-accent/5'
          }`}></div>
          <div className={`absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] rounded-full -rotate-45 animate-spin-reverse animate-very-slow ${
            darkMode 
              ? 'bg-gradient-to-bl from-accent/10 to-primary/10' 
              : 'bg-gradient-to-bl from-accent/3 to-primary/3'
          }`}></div>
          
          {/* 3D decorative geometric shapes - enhanced for mobile */}
          <div className="absolute w-full h-full max-w-xs sm:max-w-sm md:max-w-md max-h-xs sm:max-h-sm md:max-h-md flex items-center justify-center">
            <div className={`w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-80 lg:h-80 rotate-45 rounded-xl animate-spin-reverse animate-very-slow ${
              darkMode ? 'border-4 border-primary/20' : 'border-4 border-primary/10'
            }`}></div>
            <div className={`absolute w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-60 lg:h-60 -rotate-12 rounded-xl animate-float animate-very-slow ${
              darkMode ? 'border-4 border-accent/20' : 'border-4 border-accent/10'
            }`}></div>
          </div>
          
          {/* Main profile image with 3D shadow effects - enhanced for mobile */}
          <div
            ref={profileImageRef}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden relative z-10 animate-scale-in"
            style={{ 
              animationDelay: '0.4s',
              boxShadow: darkMode 
                ? '0 10px 50px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.2)' 
                : '0 10px 50px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            {/* Gradient background visible behind transparent parts of the image */}
            <div className={`absolute inset-0 ${
              darkMode 
                ? 'bg-gradient-to-br from-primary-light/40 to-accent-light/40' 
                : 'bg-gradient-to-br from-primary-light/30 to-accent-light/30'
            }`}></div>
            
            {/* Image with transparent background */}
            <img
              src="/BNY-PP-300.JPG"
              alt="Developer"
              className="w-full h-full object-contain relative z-10"
              style={{ 
                objectPosition: "center 40%",
                background: "transparent" 
              }}
            />
            
            {/* Subtle glow effect around edges */}
            <div className={`absolute inset-0 rounded-full z-20 ${
              darkMode ? 'shadow-inner-glow' : 'shadow-inner-light'
            }`}></div>
            
            {/* 3D floating accent dots - adjusted for mobile */}
            <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 sm:w-8 h-6 sm:h-8 bg-accent rounded-full animate-pulse shadow-lg z-30" 
                 style={{ boxShadow: darkMode ? '0 4px 15px rgba(251, 191, 36, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.15)' }}></div>
            <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 bg-primary rounded-full animate-pulse-slow shadow-lg z-30"
                 style={{ boxShadow: darkMode ? '0 4px 15px rgba(30, 86, 49, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.15)' }}></div>
          </div>
          
          {/* Technology accent text elements - visible only on larger screens */}
          <div className={`hidden md:block absolute -top-8 right-1/4 text-xl font-mono animate-fade-in ${
            darkMode ? 'text-primary/70' : 'text-primary/60'
          }`}>
            &lt;TensorFlow/&gt;
          </div>
          <div className={`hidden md:block absolute -bottom-8 left-1/4 text-xl font-mono animate-fade-in ${
            darkMode ? 'text-accent/70' : 'text-accent/60'
          }`}>
            &lt;scikit-learn/&gt;
          </div>
          
          {/* 3D floating badges - adjusted for mobile */}
          <div className={`absolute -right-4 sm:-right-6 bottom-1/3 z-20 animate-float rounded-full py-2 sm:py-3 px-3 sm:px-5 ${
            darkMode ? 'bg-gray-800 shadow-dark-xl' : 'bg-white shadow-xl' 
          }`} 
               style={{ 
                 animationDelay: '0.8s',
                 boxShadow: darkMode 
                   ? '0 10px 25px rgba(0, 0, 0, 0.25), 0 8px 10px rgba(0, 0, 0, 0.15)' 
                   : '0 10px 25px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.05)'
               }}>
            <div className="text-center">
              <span className={`block text-sm sm:text-base font-bold ${
                darkMode ? 'text-primary-light' : 'text-primary'
              }`}>1 YR+</span>
              <span className={`block text-xs ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Experience</span>
            </div>
          </div>
          
          <div className={`absolute -left-4 sm:-left-6 top-1/3 z-20 animate-float rounded-full py-2 sm:py-3 px-3 sm:px-5 ${
            darkMode ? 'bg-gray-800 shadow-dark-xl' : 'bg-white shadow-xl'
          }`} 
               style={{ 
                 animationDelay: '0.6s',
                 boxShadow: darkMode 
                   ? '0 10px 25px rgba(0, 0, 0, 0.25), 0 8px 10px rgba(0, 0, 0, 0.15)' 
                   : '0 10px 25px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.05)'  
               }}>
            <div className="text-center">
              <span className={`block text-sm sm:text-base font-bold ${
                darkMode ? 'text-primary-light' : 'text-primary'
              }`}>20+</span>
              <span className={`block text-xs ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Projects</span>
            </div>
          </div>
          
          {/* Additional 3D elements - visible only on larger screens */}
          <div className={`hidden sm:block absolute top-1/4 -right-8 sm:-right-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-lg rotate-12 animate-float-slow ${
            darkMode 
              ? 'bg-gradient-to-tr from-primary/10 to-accent/15' 
              : 'bg-gradient-to-tr from-primary/5 to-accent/10'
          }`}></div>
          <div className={`hidden sm:block absolute bottom-1/4 -left-8 sm:-left-10 w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 rounded-lg -rotate-12 animate-float-slow ${
            darkMode 
              ? 'bg-gradient-to-bl from-accent/10 to-primary/15' 
              : 'bg-gradient-to-bl from-accent/5 to-primary/10'
          }`}></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;