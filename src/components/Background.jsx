import React from 'react';

function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-amber-50 z-0 overflow-hidden">
      {/* Main circular whirl elements - thicker borders and reduced opacity */}
      <div className="absolute w-96 h-96 rounded-full border-8 border-white opacity-40 -top-12 -right-12"></div>
      <div className="absolute w-64 h-64 rounded-full border-8 border-white opacity-40 top-1/4 right-1/3"></div>
      <div className="absolute w-80 h-80 rounded-full border-8 border-white opacity-40 bottom-0 -left-12"></div>
      
      {/* Additional inner circles - thicker borders */}
      <div className="absolute w-72 h-72 rounded-full border-4 border-white opacity-30 -top-24 -right-24"></div>
      <div className="absolute w-48 h-48 rounded-full border-4 border-white opacity-30 top-1/3 right-1/4"></div>
      <div className="absolute w-64 h-64 rounded-full border-4 border-white opacity-30 bottom-12 -left-24"></div>
      
      {/* Subtle gradient overlays - increased opacity */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-white to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-white to-transparent opacity-40"></div>
    </div>
  );
}

export default Background;