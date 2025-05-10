import React, { useEffect, useRef } from 'react';

function About() {
  const progressRefs = useRef([]);
  const sectionRef = useRef(null);

  // Animation for counting up experience years
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Counter animation
          const counterElement = document.getElementById('experience-counter');
          if (counterElement) {
            let count = 0;
            const target = 5;
            const duration = 2000; // ms
            const interval = duration / target;
            
            const timer = setInterval(() => {
              count++;
              counterElement.textContent = count;
              if (count === target) clearInterval(timer);
            }, interval);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 relative inline-block">
            Know Me More
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Left column with animated content */}
          <div className="md:w-7/12 animate-fade-in opacity-0">
            <h3 className="text-3xl font-bold text-primary mb-6">
              I'm <span className="text-accent italic">Bhavashesh D</span>,
            </h3>
            
            <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-white !dark:text-white">
            I’m a 2nd-year B.Tech student with a strong passion for becoming a Full Stack Developer with AI/ML expertise. I focus on creating beautiful, functional, and intelligent digital experiences. While still learning and building my skills, I am eager to work on projects that integrate machine learning models into full-stack applications, aiming to develop scalable, data-driven, and user-centered solutions.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed text-gray-700 dark:text-white !dark:text-white">
            I believe that design is about solving problems and creating intuitive, enjoyable experiences for users. Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <span className="w-8 h-0.5 bg-accent mr-3"></span>
                  Personal Info
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-primary w-24 font-medium">Name:</span> 
                    <span className="text-gray-700 dark:text-white">Bhavashesh D</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary w-24 font-medium">Email:</span> 
                    <a href="mailto:bhavashesh@gmail.com" className="text-gray-700 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300">bhavashesh@gmail.com</a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary w-24 font-medium">Phone:</span> 
                    <a href="tel:+919849800511" className="text-gray-700 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300">+(91) 9849800511</a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary w-24 font-medium">Location:</span> 
                    <span className="text-gray-700 dark:text-white">Hyderabad, Telangana</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <span className="w-8 h-0.5 bg-accent mr-3"></span>
                  My Interests
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 dark:text-white">
                    <span className="text-accent mr-1">✦</span> AI & ML
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 dark:text-white">
                    <span className="text-accent mr-1">✦</span> IoT Systems
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 dark:text-white">
                    <span className="text-accent mr-1">✦</span> Full Stack Dev
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 dark:text-white">
                    <span className="text-accent mr-1">✦</span> Deep Learning
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 dark:text-white">
                    <span className="text-accent mr-1">✦</span> Blockchain
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 dark:text-white">
                    <span className="text-accent mr-1">✦</span> Mobile Apps
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/Bhavashesh_RESUME_Final.pdf" 
                download="Bhavashesh_RESUME_Final.pdf"
                className="group relative overflow-hidden bg-primary hover:bg-accent text-white px-8 py-3 rounded-full font-medium transition-all duration-500 transform hover:translate-y-[-3px] shadow-button flex items-center justify-center"
              >
                <span className="mr-2">Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="group relative overflow-hidden border-2 border-primary text-primary hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center shadow-button"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </div>
          </div>
          
          {/* Right column with profile image and experience */}
          <div className="md:w-5/12 mt-10 md:mt-0">
            <div className="relative animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
              {/* Background frame */}
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-accent rounded-xl"></div>
              
              {/* Main image */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/BNY-PP-300.JPG" 
                  alt="bhavashesh Profile" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30 pointer-events-none"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent/80 rounded-lg transform rotate-45"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary/80 rounded-lg transform rotate-12"></div>
              
              {/* Experience badge */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full border-8 border-white bg-primary shadow-xl flex flex-col items-center justify-center transform rotate-12 group hover:rotate-0 transition-transform duration-500">
                <span id="experience-counter" className="text-4xl font-bold text-white">0</span>
                <span className="text-xs font-medium text-white uppercase tracking-wider">Years of</span>
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Experience</span>
                
                {/* Accent circle */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;