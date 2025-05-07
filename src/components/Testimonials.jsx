import React, { useState, useEffect, useRef } from 'react';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "/dev.webp",
      quote: "Albert is an exceptional front-end developer who transformed our vision into reality. His attention to detail and creativity are unmatched."
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Startup Founder",
      company: "InnovateLabs",
      image: "/dev.webp",
      quote: "Working with Albert was an amazing experience. He not only delivered on time but also provided valuable insights that improved our product."
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Product Manager",
      company: "DesignHub",
      image: "/dev.webp",
      quote: "Albert's technical skills and eye for design make him a rare talent. He's responsive, professional, and a joy to work with."
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Add exit animation class
    if (testimonialRef.current) {
      testimonialRef.current.classList.add('animate-slide-out-left');
    }
    
    // Wait for exit animation to complete
    setTimeout(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      
      // Reset animation state
      if (testimonialRef.current) {
        testimonialRef.current.classList.remove('animate-slide-out-left');
        testimonialRef.current.classList.add('animate-slide-in-right');
      }
      
      // Remove entrance animation class
      setTimeout(() => {
        if (testimonialRef.current) {
          testimonialRef.current.classList.remove('animate-slide-in-right');
          setIsAnimating(false);
        }
      }, 500);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Add exit animation class
    if (testimonialRef.current) {
      testimonialRef.current.classList.add('animate-slide-out-right');
    }
    
    // Wait for exit animation to complete
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      
      // Reset animation state
      if (testimonialRef.current) {
        testimonialRef.current.classList.remove('animate-slide-out-right');
        testimonialRef.current.classList.add('animate-slide-in-left');
      }
      
      // Remove entrance animation class
      setTimeout(() => {
        if (testimonialRef.current) {
          testimonialRef.current.classList.remove('animate-slide-in-left');
          setIsAnimating(false);
        }
      }, 500);
    }, 300);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === activeIndex) return;
    
    if (index > activeIndex) {
      // Going forward
      if (testimonialRef.current) {
        testimonialRef.current.classList.add('animate-slide-out-left');
      }
      
      setTimeout(() => {
        setActiveIndex(index);
        if (testimonialRef.current) {
          testimonialRef.current.classList.remove('animate-slide-out-left');
          testimonialRef.current.classList.add('animate-slide-in-right');
        }
        
        setTimeout(() => {
          if (testimonialRef.current) {
            testimonialRef.current.classList.remove('animate-slide-in-right');
          }
        }, 500);
      }, 300);
    } else {
      // Going backward
      if (testimonialRef.current) {
        testimonialRef.current.classList.add('animate-slide-out-right');
      }
      
      setTimeout(() => {
        setActiveIndex(index);
        if (testimonialRef.current) {
          testimonialRef.current.classList.remove('animate-slide-out-right');
          testimonialRef.current.classList.add('animate-slide-in-left');
        }
        
        setTimeout(() => {
          if (testimonialRef.current) {
            testimonialRef.current.classList.remove('animate-slide-in-left');
          }
        }, 500);
      }, 300);
    }
  };

  return (
    <section id="testimonial" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 relative inline-block">
            What Clients Say
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-8 text-gray-600">
            Here's what some of my clients have to say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
          
          {/* Large quote mark */}
          <div className="absolute top-10 left-0 md:left-10 text-9xl text-primary/10 font-serif">"</div>
          
          {/* Testimonial Card */}
          <div 
            ref={testimonialRef}
            className="relative bg-white rounded-2xl p-6 md:p-10 shadow-card z-10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative">
                {/* Profile image with frame */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative accent */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full"></div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary rounded-full"></div>
              </div>
              
              <div className="flex-1 md:pl-4">
                <p className="text-lg md:text-xl italic mb-6 text-gray-600 relative">
                  <span className="inline-block text-accent font-serif text-2xl align-top -ml-2">"</span>
                  {testimonials[activeIndex].quote}
                  <span className="inline-block text-accent font-serif text-2xl align-bottom">"</span>
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-0.5 bg-accent mr-4"></div>
                  <div>
                    <h4 className="text-xl font-bold text-primary">{testimonials[activeIndex].name}</h4>
                    <p className="text-accent">
                      {testimonials[activeIndex].role}, <span className="text-gray-600">{testimonials[activeIndex].company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Rating stars */}
            <div className="absolute top-6 right-6 flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full bg-white shadow-button hover:shadow-lg flex items-center justify-center transition-all duration-300 group"
              disabled={isAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative h-3 transition-all duration-300 rounded-full ${
                    index === activeIndex ? 'w-10 bg-primary' : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  disabled={isAnimating}
                >
                  {index === activeIndex && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-60"></span>
                  )}
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full bg-white shadow-button hover:shadow-lg flex items-center justify-center transition-all duration-300 group"
              disabled={isAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;