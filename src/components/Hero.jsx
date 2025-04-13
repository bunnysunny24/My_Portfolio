import React from 'react';

function Hero() {
  return (
    <div className="py-10 md:py-16 relative">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">
        HI THERE, I'M ALBERT
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative">
        {/* Developer Title Text */}
        <div className="order-2 md:order-1">
          <div className="text-5xl md:text-8xl font-black text-green-800 leading-none">
            <div>FRONT</div>
            <div>END</div>
            <div>DEVELOPER</div>
          </div>
          <div className="text-4xl md:text-6xl text-green-800 mt-6 transform rotate-12 inline-block">&lt;/&gt;</div>
        </div>
        
        {/* This is just a placeholder - actual profile image is in the Background component */}
        <div className="order-1 md:order-2 md:h-96"></div>
      </div>
      
      {/* Description text */}
      <div className="mt-8 md:mt-0 md:absolute md:right-0 md:bottom-0 max-w-xs text-sm">
        I AM A CREATIVE FRONT-END DEVELOPER WITH A STRONG FOCUS ON MOTION AND INTERACTION.
      </div>
    </div>
  );
}

export default Hero;