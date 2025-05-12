import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({ children, threshold = 0.1, delay = 0, direction = null }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class based on direction
            let animationClass = 'animate-fade-in';
            
            if (direction === 'left') {
              animationClass = 'animate-slide-in-left';
            } else if (direction === 'right') {
              animationClass = 'animate-slide-in-right';
            } else if (direction === 'up') {
              animationClass = 'animate-slide-in-up';
            } else if (direction === 'down') {
              animationClass = 'animate-slide-in-down';
            }
            
            setTimeout(() => {
              section.classList.add(animationClass);
              section.classList.remove('opacity-0');
            }, delay);
            
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold }
    );
    
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [threshold, delay, direction]);
  
  return (
    <div ref={sectionRef} className="opacity-0">
      {children}
    </div>
  );
};

export default ScrollReveal;