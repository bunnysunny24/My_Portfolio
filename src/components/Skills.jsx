import React, { useEffect, useRef } from 'react';

function Skills() {
  const sectionRef = useRef(null);
  const skillBarsRef = useRef([]);

  const skills = [
    { name: "Python", level: 85, color: "primary" },
    { name: "React.js", level: 92, color: "primary" },
    { name: "Machine Learning", level: 65, color: "primary" },
    { name: "JavaScript", level: 92, color: "primary" },
    { name: "TensorFlow", level: 68, color: "accent" },
    { name: "Tailwind CSS", level: 100, color: "accent" },
    { name: "FastAPI", level: 99, color: "accent" },
    { name: "IoT (Arduino/ESP32)", level: 23, color: "accent" }
  ];

  // Animate skill bars when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all skill bars and animate them
            const skillBars = Array.from(entry.target.querySelectorAll('.skill-progress-inner'));
            skillBars.forEach((bar) => {
              const level = bar.getAttribute('data-level');
              bar.style.width = `${level}%`;
              bar.style.opacity = 1;
            });
          }
        });
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
    <section id="skills" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">My Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 relative inline-block">
            Technical Expertise
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-8 text-gray-600 dark:text-gray-300">
            I've worked with a variety of technologies in the web development world.
            Here are my main areas of expertise.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-10 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-accent/5 translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="mb-6 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className={`w-2 h-8 bg-${skill.color} mr-3 rounded-sm`}></div>
                      <span className="font-medium text-lg dark:text-white">{skill.name}</span>
                    </div>
                    <span className={`font-medium text-${skill.color} text-lg`}>{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`skill-progress-inner h-full bg-${skill.color} rounded-full transition-all duration-1000 ease-out opacity-0 w-0`}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 relative">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center dark:text-white">
                <span className="w-8 h-0.5 bg-accent mr-3"></span>
                Other Technologies I Work With
                <span className="w-8 h-0.5 bg-accent ml-3"></span>
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
                {["Java","Flutter", "Solidity", "Blockchain", "React Native", "Deep Learning", "Node.js", 
                  "MongoDB", "MySQL", "OpenCV", "Scikit-learn", "XGBoost", "EfficientNet", "Raspberry Pi","Neural Networks", "React Native"].map((tech, index) => (
                  <span 
                    key={index} 
                    className="relative group overflow-hidden"
                  >
                    <span className="relative z-10 bg-gradient-to-br from-primary-light to-primary text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center group-hover:shadow-neon">
                      {tech}
                      <svg className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    {/* Subtle glow effect */}
                    <span className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-25 blur-md transition-opacity duration-300 transform scale-110"></span>
                  </span>
                ))}
              </div>
            </div>

            {/* Code Elements Decoration */}
            <div className="absolute top-5 left-5 text-5xl opacity-5 font-mono">{"<h1>"}</div>
            <div className="absolute bottom-5 right-5 text-5xl opacity-5 font-mono">{"</h1>"}</div>
          </div>
        </div>

        {/* Optional: Add a download resume button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="group inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-primary hover:text-accent border border-primary/20 px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-sm hover:shadow-md dark:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>View My Full Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;