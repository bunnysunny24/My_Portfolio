import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function Background() {
  const { darkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate parallax positions
  const calculateParallaxPosition = (depth) => {
    const multiplier = 40 * depth;
    return {
      transform: `translate(${(mousePosition.x - 0.5) * multiplier}px, ${(mousePosition.y - 0.5) * multiplier}px)`,
    };
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full z-0 overflow-hidden transition-colors duration-700 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-white via-amber-50 to-white'
    }`}>
      {/* Main background pattern with subtle noise texture */}
      <div 
        className={`absolute inset-0 bg-noise ${darkMode ? 'opacity-5' : 'opacity-3'}`} 
        style={{ backgroundSize: '200px 200px' }}
      ></div>
      
      {/* Large subtle gradient overlays with parallax effect */}
      <div 
        className={`absolute top-0 right-0 w-full h-full bg-gradient-radial ${
          darkMode ? 'from-primary/15 to-transparent' : 'from-primary/10 to-transparent'
        } opacity-40`}
        style={{
          ...calculateParallaxPosition(0.2),
          backgroundPosition: '90% 20%',
        }}
      ></div>
      <div 
        className={`absolute bottom-0 left-0 w-full h-full bg-gradient-radial ${
          darkMode ? 'from-accent/15 to-transparent' : 'from-accent/10 to-transparent'
        } opacity-40`}
        style={{
          ...calculateParallaxPosition(0.3),
          backgroundPosition: '20% 80%',
        }}
      ></div>
      
      {/* Animated circular elements with parallax effect */}
      <div 
        className={`absolute w-96 h-96 rounded-full border-8 ${
          darkMode ? 'border-primary/10' : 'border-primary/5'
        } opacity-30 -top-12 -right-12 animate-spin-slow`}
        style={calculateParallaxPosition(0.5)}
      ></div>
      <div 
        className={`absolute w-64 h-64 rounded-full border-8 ${
          darkMode ? 'border-accent/10' : 'border-accent/5'
        } opacity-30 top-1/4 right-1/3 animate-float-slow`}
        style={calculateParallaxPosition(0.4)}
      ></div>
      <div 
        className={`absolute w-80 h-80 rounded-full border-8 ${
          darkMode ? 'border-primary/10' : 'border-primary/5'
        } opacity-30 bottom-0 -left-12 animate-pulse-slow`}
        style={calculateParallaxPosition(0.3)}
      ></div>
      
      {/* Morphing shapes with parallax effect */}
      <div 
        className={`absolute w-72 h-72 rounded-blob ${
          darkMode ? 'bg-gray-700/10' : 'bg-gray-100/30'
        } -top-24 -right-24 animate-spin-reverse animate-morph`}
        style={calculateParallaxPosition(0.6)}
      ></div>
      <div 
        className={`absolute w-48 h-48 rounded-blob ${
          darkMode ? 'bg-primary/10' : 'bg-primary/5'
        } top-1/3 right-1/4 animate-float-slower animate-morph`}
        style={calculateParallaxPosition(0.7)}
      ></div>
      <div 
        className={`absolute w-64 h-64 rounded-blob ${
          darkMode ? 'bg-accent/10' : 'bg-accent/5'
        } bottom-12 -left-24 animate-pulse-very-slow animate-morph`}
        style={calculateParallaxPosition(0.5)}
      ></div>
      
      {/* Grid lines */}
      <div 
        className={`absolute inset-0 opacity-5 ${darkMode ? 'bg-grid-dark' : 'bg-grid-light'}`}
        style={calculateParallaxPosition(0.1)}
      ></div>
      
      {/* Accent elements with parallax effect */}
      <div 
        className={`absolute w-32 h-32 rounded-full border-2 ${
          darkMode ? 'border-primary-light/30' : 'border-primary-light/20'
        } top-1/2 right-1/4 animate-float`}
        style={calculateParallaxPosition(0.8)}
      ></div>
      <div 
        className={`absolute w-40 h-40 rounded-full border-2 ${
          darkMode ? 'border-accent-light/30' : 'border-accent-light/20'
        } bottom-1/3 left-1/3 animate-float-slow`}
        style={calculateParallaxPosition(0.9)}
      ></div>
      <div 
        className={`absolute w-24 h-24 rounded-full ${
          darkMode ? 'bg-secondary-light/15' : 'bg-secondary-light/10'
        } top-1/4 left-1/4 animate-pulse-slow`}
        style={calculateParallaxPosition(1)}
      ></div>
      
      {/* Glowing accent elements with enhanced dark mode support */}
      <div 
        className={`absolute w-16 h-16 rounded-full ${
          darkMode ? 'shadow-glow-primary' : 'shadow-glow-primary-light'
        } ${darkMode ? 'bg-primary/20' : 'bg-primary/10'} top-1/3 right-40 animate-pulse-slow`}
        style={calculateParallaxPosition(0.6)}
      ></div>
      <div 
        className={`absolute w-12 h-12 rounded-full ${
          darkMode ? 'shadow-glow-accent' : 'shadow-glow-accent-light'
        } ${darkMode ? 'bg-accent/20' : 'bg-accent/10'} bottom-1/4 left-40 animate-pulse-very-slow`}
        style={calculateParallaxPosition(0.7)}
      ></div>
      
      {/* Floating shape elements with parallax effect */}
      <div 
        className={`absolute w-24 h-24 rotate-45 border-2 ${
          darkMode ? 'border-primary/15' : 'border-primary/10'
        } top-1/3 left-10 animate-spin-reverse`}
        style={calculateParallaxPosition(0.5)}
      ></div>
      <div 
        className={`absolute w-16 h-16 rotate-12 border-2 ${
          darkMode ? 'border-accent/15' : 'border-accent/10'
        } bottom-1/4 right-20 animate-float`}
        style={calculateParallaxPosition(0.6)}
      ></div>
      
      {/* Diagonal lines with better dark mode visibility */}
      <div 
        className={`absolute w-[150px] h-px ${
          darkMode ? 'bg-gradient-to-r from-transparent via-primary/20 to-transparent' : 'bg-gradient-to-r from-transparent via-primary/10 to-transparent'
        } rotate-45 top-1/3 right-1/4`}
        style={calculateParallaxPosition(0.3)}
      ></div>
      <div 
        className={`absolute w-[120px] h-px ${
          darkMode ? 'bg-gradient-to-r from-transparent via-accent/20 to-transparent' : 'bg-gradient-to-r from-transparent via-accent/10 to-transparent'
        } -rotate-45 bottom-1/3 left-1/4`}
        style={calculateParallaxPosition(0.4)}
      ></div>
      
      {/* Particle dots with enhanced visibility in dark mode */}
      <div 
        className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-primary/80' : 'bg-primary'} top-1/4 right-1/3 animate-pulse`}
        style={calculateParallaxPosition(1)}
      ></div>
      <div 
        className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-accent/80' : 'bg-accent'} top-1/3 left-1/4 animate-pulse-slow`}
        style={calculateParallaxPosition(0.9)}
      ></div>
      <div 
        className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-primary/80' : 'bg-primary'} bottom-1/3 right-1/4 animate-pulse-very-slow`}
        style={calculateParallaxPosition(0.8)}
      ></div>
      <div 
        className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-accent/80' : 'bg-accent'} bottom-1/4 left-1/3 animate-pulse`}
        style={calculateParallaxPosition(0.7)}
      ></div>
      
      {/* Added subtle code-like design elements for a developer portfolio */}
      <div 
        className={`absolute bottom-20 right-20 font-mono text-sm ${darkMode ? 'text-gray-700' : 'text-gray-300'} opacity-30`}
        style={calculateParallaxPosition(0.2)}
      >
        {`{ "developer": true }`}
      </div>
      <div 
        className={`absolute top-40 left-20 font-mono text-sm ${darkMode ? 'text-gray-700' : 'text-gray-300'} opacity-30`}
        style={calculateParallaxPosition(0.3)}
      >
        {`<code>Hello World</code>`}
      </div>
    </div>
  );
}

export default Background;