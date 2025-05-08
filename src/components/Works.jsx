import React, { useState } from 'react';

function Works() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "AgriSync: AI-Powered Smart Farming & Marketplace System",
      category: "Full Stack",
      image: "/image.png",
      description: "A smart agriculture platform leveraging AI/ML, Deep Learning, and Blockchain to empower farmers with real-time insights, disease detection, and transparent crop transactions.",
      tags: ["React.js", "TensorFlow", "FastAPI", "Solidity", "Ethereum", "Machine Learning", "Deep Learning", "Smart Contracts", "XGBoost", "EfficientNet", "CNN", "Random Forest", "Tailwind CSS"],
      link: "https://agri-sync.vercel.app",
      github: "https://github.com/bunnysunny24/AgriSync"
    },
    {
      id: 2,
      title: "E-Commerce Website",
      category: "Web Development",
      image: "/dev.webp",
      description: "A fully responsive e-commerce platform with shopping cart functionality.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Travel App",
      category: "Mobile App",
      image: "/dev.webp",
      description: "Interactive travel application with location-based recommendations.",
      tags: ["React Native", "Firebase", "Google Maps API"]
    },
    {
      id: 4,
      title: "Portfolio Design",
      category: "UI/UX",
      image: "/dev.webp",
      description: "Clean and modern portfolio design for creative professionals.",
      tags: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      id: 5,
      title: "Admin Dashboard",
      category: "Web Development",
      image: "/dev.webp",
      description: "Comprehensive admin dashboard with data visualization.",
      tags: ["Vue.js", "D3.js", "TailwindCSS"]
    }
  ];

  const categories = ['all', 'Web Development', 'Mobile App', 'UI/UX', 'Full Stack'];
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="works" className="py-24 md:py-32">
      <div className="text-center mb-16">
        <span className="text-sm font-bold text-accent uppercase tracking-wider">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 relative inline-block">
          My Works
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto mt-8 text-gray-600">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>
      </div>

      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center mb-12 gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
              activeFilter === category
                ? 'bg-primary text-white font-medium shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category === 'all' ? 'All' : category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 group animate-fade-in opacity-0" 
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-primary px-6 py-3 rounded-full font-medium shadow-button transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  View Project
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">
                {project.category}
              </div>
              
              {/* New: Project number with design element */}
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center font-bold shadow-highlight">
                0{project.id}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Link with arrow */}
              <div className="mt-6 flex justify-end">
                <a 
                  href={project.github || project.link || `#project-${project.id}`} 
                  className="flex items-center text-primary font-medium hover:text-accent transition-colors duration-300 group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>See Details</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <button className="group relative overflow-hidden border-2 border-primary text-primary hover:text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-button hover:shadow-lg">
          <span className="relative z-10">View All Projects</span>
          <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>
    </section>
  );
}

export default Works;