// Hero.jsx
import React from 'react';

function Hero() {
  return (
    <div className="relative py-16">
      <h1 className="text-3xl font-bold text-center mb-8 md:mb-16">
        HI THERE, I'M ALBERT
      </h1>
      
      <div className="relative">
        {/* The main FRONT text */}
        <div className="absolute left-0 top-16 md:top-0 text-7xl md:text-9xl font-black text-green-800 z-20">
          FRONT
        </div>
        
        {/* The END text */}
        <div className="absolute right-0 top-16 md:top-0 text-7xl md:text-9xl font-black text-green-800 z-20">
          END
        </div>
        
        {/* Profile image goes here - handled as background */}
        <div className="h-96 md:h-128"></div>
        
        {/* The DEVELOPER text */}
        <div className="text-7xl md:text-9xl font-black text-green-800 mt-10">
          DEVELOPER
        </div>
        
        {/* The code brackets - appearing with rotation */}
        <div className="text-5xl md:text-6xl text-green-800 absolute right-16 bottom-24 transform rotate-12">
          &lt;/&gt;
        </div>
        
        {/* The side description text */}
        <div className="absolute right-0 top-48 md:top-32 text-xs md:text-sm text-right leading-tight">
          I AM A CREATIVE<br />
          FRONT-END<br />
          DEVELOPER WITH<br />
          A STRONG FOCUS<br />
          ON MOTION AND<br />
          INTERACTION.
        </div>
      </div>  
    </div>
  );
}

export default Hero;