import React from 'react';

function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-amber-50 z-0 overflow-hidden">
      {/* Background circles/gradients */}
      <div className="absolute w-full h-full bg-gradient-radial from-white to-transparent opacity-80"></div>
      
      {/* Profile image */}
      <div className="absolute md:top-1/3 right-0 md:right-1/12 w-full md:w-5/12 max-w-lg z-10 px-4 md:px-0">
        <img 
          src="/profile-image.jpg" 
          alt="Albert - Front-end Developer" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Background;