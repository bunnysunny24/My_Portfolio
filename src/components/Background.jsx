import React from 'react';

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-white via-amber-50 to-white z-0 overflow-hidden">
      {/* Main background shapes */}
      <div className="absolute w-full h-full bg-pattern opacity-5"></div>
      
      {/* Large subtle gradient overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent opacity-40"></div>
      
      {/* Animated circular elements */}
      <div className="absolute w-96 h-96 rounded-full border-8 border-primary/5 opacity-30 -top-12 -right-12 animate-spin-slow"></div>
      <div className="absolute w-64 h-64 rounded-full border-8 border-accent/5 opacity-30 top-1/4 right-1/3 animate-float-slow"></div>
      <div className="absolute w-80 h-80 rounded-full border-8 border-primary/5 opacity-30 bottom-0 -left-12 animate-pulse-slow"></div>
      
      {/* Morphing shapes */}
      <div className="absolute w-72 h-72 bg-white/10 -top-24 -right-24 animate-spin-reverse animate-morph"></div>
      <div className="absolute w-48 h-48 bg-primary/5 top-1/3 right-1/4 animate-float-slower animate-morph"></div>
      <div className="absolute w-64 h-64 bg-accent/5 bottom-12 -left-24 animate-pulse-very-slow animate-morph"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Accent elements */}
      <div className="absolute w-32 h-32 rounded-full border-2 border-primary-light opacity-20 top-1/2 right-1/4 animate-float"></div>
      <div className="absolute w-40 h-40 rounded-full border-2 border-accent-light opacity-20 bottom-1/3 left-1/3 animate-float-slow"></div>
      <div className="absolute w-24 h-24 rounded-full bg-secondary-light/10 top-1/4 left-1/4 animate-pulse-slow"></div>
      
      {/* Glowing accent elements */}
      <div className="absolute w-16 h-16 rounded-full bg-primary/5 shadow-glow top-1/3 right-40 animate-pulse-slow"></div>
      <div className="absolute w-12 h-12 rounded-full bg-accent/5 shadow-glow bottom-1/4 left-40 animate-pulse-very-slow"></div>
      
      {/* Floating shape elements */}
      <div className="absolute w-24 h-24 rotate-45 border-2 border-primary/10 top-1/3 left-10 animate-spin-reverse"></div>
      <div className="absolute w-16 h-16 rotate-12 border-2 border-accent/10 bottom-1/4 right-20 animate-float"></div>
      
      {/* Diagonal lines */}
      <div className="absolute w-[150px] h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent rotate-45 top-1/3 right-1/4"></div>
      <div className="absolute w-[120px] h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent -rotate-45 bottom-1/3 left-1/4"></div>
      
      {/* Particle dots */}
      <div className="absolute w-2 h-2 rounded-full bg-primary top-1/4 right-1/3 animate-pulse"></div>
      <div className="absolute w-2 h-2 rounded-full bg-accent top-1/3 left-1/4 animate-pulse-slow"></div>
      <div className="absolute w-2 h-2 rounded-full bg-primary bottom-1/3 right-1/4 animate-pulse-very-slow"></div>
      <div className="absolute w-2 h-2 rounded-full bg-accent bottom-1/4 left-1/3 animate-pulse"></div>
    </div>
  );
}

export default Background;