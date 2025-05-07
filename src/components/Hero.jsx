// Hero.jsx
import React, { useEffect, useRef } from 'react';

function Hero() {
  const profileImageRef = useRef(null);

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
    <div className="relative pt-32 pb-16 md:py-36 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side with text content */}
        <div className="flex flex-col space-y-6 md:pr-12 animate-fade-in">
          <div className="text-sm text-primary font-semibold tracking-wider animate-slide-down">
            WELCOME TO MY WORLD
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white animate-slide-down" style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="text-primary relative">
              Developer
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent"></span>
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-200 animate-slide-down" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block">
              <span className="text-primary">Front-end</span> Developer
              <span className="inline-block ml-2 text-accent">&lt;/&gt;</span>
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            I design and code beautifully simple things, and I love what I do. 
            Specialized in creating modern, responsive websites with clean and efficient code.
          </p>
          
          <div className="flex space-x-5 mt-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <a 
              href="#works" 
              className="group relative overflow-hidden bg-primary hover:bg-accent text-white px-8 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 shadow-button hover:shadow-highlight flex items-center"
            >
              <span className="relative z-10">My Work</span>
              <span className="absolute w-0 h-0 rounded-full bg-primary-light opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:w-72 group-hover:h-72 transition-all duration-500"></span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full font-medium border-2 border-primary text-primary hover:text-white hover:bg-primary transition-all duration-300 flex items-center"
            >
              Contact Me
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
          <div className="flex items-center space-x-4 mt-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <span className="text-gray-600 dark:text-gray-300 text-sm">Find me on:</span>
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <a 
                key={social}
                href={`#${social}`} 
                className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-sm transform transition-all duration-300 hover:scale-110 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label={social}
              >
                <span className={`text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary`}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'facebook' && <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />}
                    {social === 'twitter' && <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />}
                    {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />}
                    {social === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />}
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Right side with profile image and design elements */}
        <div className="relative flex justify-center items-center mt-12 md:mt-0">
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary/5 rounded-full animate-spin-very-slow"></div>
          
          <div className="absolute w-full h-full max-w-md max-h-md flex items-center justify-center">
            <div className="w-48 h-48 md:w-72 md:h-72 rotate-45 border-4 border-primary/30 rounded-xl animate-spin-reverse animate-very-slow"></div>
          </div>
          
          <div
            ref={profileImageRef}
            className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white shadow-xl overflow-hidden border-4 border-white relative z-10 animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent-light/20 mix-blend-overlay"></div>
            <img
              src="/BNY-PP-300.JPG"
              alt="Developer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full shadow-inner-light"></div>
            
            {/* Decorative dots */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full animate-pulse-slow"></div>
          </div>
          
          {/* Code decoration */}
          <div className="absolute -top-4 right-1/4 text-xl text-primary opacity-30 animate-fade-in">
            &lt;div&gt;
          </div>
          <div className="absolute -bottom-4 left-1/4 text-xl text-primary opacity-30 animate-fade-in">
            &lt;/div&gt;
          </div>
          
          {/* Experience badge */}
          <div className="absolute -right-4 bottom-1/3 bg-white shadow-lg rounded-full py-2 px-4 z-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <span className="block text-sm font-semibold text-primary">5+ Years</span>
              <span className="block text-xs text-gray-600">Experience</span>
            </div>
          </div>
          
          {/* Skills badge */}
          <div className="absolute -left-4 top-1/3 bg-white shadow-lg rounded-full py-2 px-4 z-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <span className="block text-sm font-semibold text-primary">20+</span>
              <span className="block text-xs text-gray-600">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;