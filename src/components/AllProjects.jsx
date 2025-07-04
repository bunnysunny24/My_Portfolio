import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function AllProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const { darkMode } = useTheme();
  
  // Complete project list including ones from Works.jsx and additional projects
  const allProjects = [
    {
      id: 1,
      title: "Logistics Pulse Copilot: Real-Time AI Assistant",
      category: "AI & ML",
      image: "/Screenshot 2025-07-02 202047.png",
      description: "A real-time AI-powered document processing system for logistics operations. It demonstrates streaming ETL, dynamic indexing, and live RAG capabilities for logistics and finance operations.",
      tags: ["Python", "Pathway", "RAG", "FastAPI", "React.js", "Streaming ETL", "Vector Databases", "Real-time Processing", "Document Processing", "Anomaly Detection"],
      link: "https://www.youtube.com/watch?v=3IMeI_IDK_k",
      github: "https://github.com/bunnysunny24/Logistics"
    },
    {
      id: 2,
      title: "AgriSync: AI-Powered Smart Farming & Marketplace System",
      category: "Full Stack",
      image: "/image.png",
      description: "A smart agriculture platform leveraging AI/ML, Deep Learning, and Blockchain to empower farmers with real-time insights, disease detection, and transparent crop transactions.",
      tags: ["React.js", "TensorFlow", "FastAPI", "Solidity", "Ethereum", "Machine Learning", "Deep Learning", "Smart Contracts", "XGBoost", "EfficientNet", "CNN", "Random Forest", "Tailwind CSS"],
      link: "https://agri-sync.vercel.app",
      github: "https://github.com/bunnysunny24/AgriSync"
    },
    {
      id: 3,
      title: "BluePulse: Smart Water Management System",
      category: "IoT & ML",
      image: "/Screenshot 2025-05-08 223845.png",
      description: "An IoT and machine learning-based water management system for real-time monitoring, leakage detection, and usage analytics with interactive visualization dashboard.",
      tags: ["IoT", "ESP32", "Machine Learning", "React.js", "MySQL", "Python", "Data Visualization", "Firebase", "Scikit-learn"],
      link: "https://blue-pulse-zeta.vercel.app",
      github: "https://github.com/bunnysunny24/BluePulse"
    },
    {
      id: 4,
      title: "OnBoardX: IoT-Based Vehicle Monitoring System",
      category: "IoT & ML",
      image: "/Screenshot 2025-05-08 224147.png",
      description: "A real-time IoT-based vehicle monitoring system integrating ESP32, Raspberry Pi, and ML for safety alerts, accident detection, and emergency response.",
      tags: ["Python", "Raspberry Pi", "ESP32", "FastAPI", "Flask", "Machine Learning", "Firebase", "React Native", "ReactJS", "IoT", "Real-time Analytics"],
      github: "https://github.com/bunnysunny24/Project-OnBoardX"
    },
    {
      id: 5,
      title: "QuestEd: AI-Powered Personalized Learning Platform",
      category: "Ed-Tech",
      image: "/Screenshot 2025-05-08 225101.png",
      description: "A comprehensive learning platform that personalizes content for engineering students while supporting teachers with resource sharing and analytics.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "FastAPI", "Gamification", "Machine Learning", "Facial Recognition"],
      github: "https://github.com/bunnysunny24/QuestEd"
    },
    {
      id: 6,
      title: "Vibeout: Emotion-Based Workout Assistant",
      category: "AI & IoT",
      image: "/Screenshot 2025-05-08 225442.png",
      description: "An innovative platform that analyzes users' emotional states through facial recognition and voice analysis to personalize workout experiences with safety monitoring.",
      tags: ["Emotion AI", "CNN", "EfficientNet B0", "React.js", "FastAPI", "IoT Sensors", "Classification", "Facial Recognition", "Voice Analysis"],
      github: "https://github.com/bunnysunny24/Vibeout"
    },
    {
      id: 7,
      title: "GitHub Trending Repos",
      category: "Frontend",
      image: "/Screenshot 2025-05-08 230907.png",
      description: "A responsive web application that displays trending GitHub repositories with features like pagination, search functionality, and dynamic filtering based on stars.",
      tags: ["React.js", "GitHub API", "Axios", "React Paginate", "Responsive Design", "Tailwind CSS", "JavaScript"],
      link: "https://ieeetask-99.vercel.app",
      github: "https://github.com/bunnysunny24/Github-trending-repos"
    },
    {
      id: 8,
      title: "Einstein School Website",
      category: "Frontend",
      image: "/Screenshot 2025-05-08 231209.png",
      description: "A comprehensive school website showcasing curriculum, activities, clubs, exam patterns, and administrative information with user-friendly navigation and professional design.",
      tags: ["React.js", "Tailwind CSS", "React Router", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/bunnysunny24/Eisntein-school-website"
    },
    {
      id: 9,
      title: "EvoDoc: Intelligent Medical Assistant",
      category: "AI & Healthcare",
      image: "/dev.webp",
      description: "An advanced AI-powered healthcare system providing real-time health monitoring, disease prediction, interactive chatbot support, and gamified health tracking for patients and doctors.",
      tags: ["React.js", "React Native", "Node.js", "Python", "Machine Learning", "Firebase", "IoT", "Chatbot", "Healthcare"],
      github: "https://github.com/bunnysunny24/Evo-Doc"
    },
    {
      id: 10,
      title: "Searching Techniques: Pac-Man BFS & A* Pathfinding Visualizer",
      category: "AI & Algorithms",
      image: "/Screenshot 2025-05-08 231803.png",
      description: "Interactive visualizer demonstrating AI searching algorithms with a Pac-Man game using BFS for ghost pathfinding and an A* algorithm visualizer for optimal path discovery.",
      tags: ["React.js", "BFS Algorithm", "A* Pathfinding", "Framer Motion", "JavaScript", "Grid-Based Movement", "Pathfinding", "Game Development"],
      github: "https://github.com/bunnysunny24/Searching_techniques"
    },
    {
      id: 11,
      title: "Fire Detection and Alarm System",
      category: "IoT & Hardware",
      image: "/dev.webp",
      description: "An Arduino-based fire detection system with real-time monitoring via LCD display that detects fire intensity levels and triggers appropriate alerts through buzzer and LED indicators.",
      tags: ["Arduino", "IoT", "Fire Sensor", "I2C LCD", "Hardware", "Electronics", "Embedded Systems"],
      github: "https://github.com/bunnysunny24/fire-alarm"
    },
    {
      id: 12,
      title: "QuickCart: E-commerce Website",
      category: "Frontend",
      image: "/Screenshot 2025-05-08 232351.png",
      description: "A modern, beautiful e-commerce web application featuring a fully functional shopping cart, product filtering, user authentication, and payment gateway integration.",
      tags: ["React.js", "Tailwind CSS", "React Router", "Shopping Cart", "Authentication", "Payment Gateway", "Responsive Design"],
      github: "https://github.com/bunnysunny24/QuickCart"
    },
    {
      id: 13,
      title: "ClimaSync: Weather Forecasting Tool",
      category: "ML & Data Visualization",
      image: "/Screenshot 2025-05-08 232704.png",
      description: "An intelligent weather forecasting application that predicts weather parameters using machine learning models and provides interactive data visualization with sorting algorithms.",
      tags: ["Python", "FastAPI", "React.js", "Tailwind CSS", "Machine Learning", "Random Forest", "Data Visualization", "Sorting Algorithms"],
      github: "https://github.com/bunnysunny24/ClimaSync"
    },
    {
      id: 14,
      title: "AI-Driven CRM",
      category: "AI & Data Analytics",
      image: "/dev.webp",
      description: "An intelligent CRM platform that analyzes customer inputs and reviews, filtering those with specific interests and presenting insights through an interactive dashboard with chatbot integration.",
      tags: ["React", "Python", "FastAPI", "Web Scraping", "Chatbot", "LinkedIn API", "Facebook API", "Google API", "Gmail API", "Data Analytics"],
      github: "https://github.com/bunnysunny24/AI-Driven-CRM"
    },
    {
      id: 15,
      title: "Supply Chain Management",
      category: "Full Stack",
      image: "/Screenshot 2025-05-08 233425.png",
      description: "A comprehensive end-to-end supply chain management system with separate interfaces for Administrators, Suppliers, and Customers to streamline business operations.",
      tags: ["React", "Dart", "Tailwind CSS", "Supply Chain", "User Role Management", "Inventory Management", "Web Application"],
      link: "https://scm-react.vercel.app/",
      github: "https://github.com/bunnysunny24/Supply-Chain-Management"
    },
    {
      id: 16,
      title: "Morse Code Converter",
      category: "AI & ML",
      image: "/dev.webp",
      description: "A versatile Morse code conversion tool supporting text-to-Morse, Morse-to-text, and audio conversion with neural network-based processing for accurate translations.",
      tags: ["React", "Machine Learning", "Deep Learning", "Neural Network", "TensorFlow", "FastAPI", "Audio Processing"],
      github: "https://github.com/bunnysunny24/Morse_Code"
    },
    {
      id: 17,
      title: "Procedural Art Generator",
      category: "Mobile App",
      image: "/Screenshot 2025-05-08 233901.png",
      description: "A sleek, intuitive Flutter app that transforms mathematical algorithms into stunning visual art through an interactive canvas, customizable parameters, and powerful export options.",
      tags: ["Flutter", "Dart", "Generative Art", "Creative Coding", "Algorithms", "Mobile Development", "Offline App"],
      github: "https://github.com/bunnysunny24/Procedural-Art-Generator"
    },
    {
      id: 18,
      title: "Digital Wellbeing Dashboard",
      category: "Mobile App",
      image: "/Screenshot 2025-05-08 234139.png",
      description: "A React Native application that helps users track and manage their digital habits with visual insights, goal setting features, and focus mode scheduling for healthier technology use.",
      tags: ["React Native", "Android Studio", "Mobile Development", "Data Visualization", "Habit Tracking", "UI/UX", "Digital Wellness"],
      github: "https://github.com/bunnysunny24/Digital-Wellbeing-Dashboard"
    },
    {
      id: 19,
      title: "Smart Agriculture System",
      category: "IoT & ML",
      image: "/Screenshot 2025-05-08 234358.png",
      description: "A compact, cost-effective IoT solution for real-time environmental monitoring in agriculture using Arduino Nano, ESP32, and multiple sensors for tracking air quality, temperature, humidity, and soil moisture.",
      tags: ["Arduino", "ESP32", "IoT", "React", "JavaScript", "Firebase", "Sensors", "FastAPI", "Machine Learning", "Environmental Monitoring"],
      link: "https://smart-agri-culture.vercel.app",
      github: "https://github.com/bunnysunny24/Smart-AgriCulture"
    },
    {
      id: 20,
      title: "RoomiePay: Fair Settlements Made Easy",
      category: "Full Stack",
      image: "/Screenshot 2025-05-09 105354.png",
      description: "A convenient expense tracking and settlement application designed for roommates to manage shared expenses, split bills fairly, and track payment history.",
      tags: ["Python", "React.js", "MySQL", "FastAPI", "Expense Tracking", "Payment Settlement", "Financial Management"],
      github: "https://github.com/bunnysunny24/RoomiePay"
    },
    {
      id: 22,
      title: "Eco-eats: Food Wastage Distribution System",
      category: "Desktop Application",
      image: "/Screenshot 2025-05-08 224741.png",
      description: "A Java-based application that connects food providers with collectors to reduce food waste through an efficient distribution system with integrated mapping.",
      tags: ["Java", "JavaFX", "MySQL", "JDBC", "OpenStreetMap", "OOP", "Database Management", "GIS"],
      github: "https://github.com/bunnysunny24/Eco-eats"
    },
  ];

  // Extract all unique categories from projects
  const categories = ['all', ...new Set(allProjects.map(project => project.category))];
  
  // All unique tags across all projects
  const allTags = [...new Set(allProjects.flatMap(project => project.tags))].sort();

  // Filter projects based on search term and active filter
  useEffect(() => {
    let result = allProjects;
    
    // Apply category filter
    if (activeFilter !== 'all') {
      result = result.filter(project => project.category === activeFilter);
    }
    
    // Apply search filter to title, description and tags
    if (searchTerm.trim() !== '') {
      const search = searchTerm.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(search) || 
        project.description.toLowerCase().includes(search) ||
        project.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }
    
    setFilteredProjects(result);
  }, [searchTerm, activeFilter]);

  return (
    <div className={`min-h-screen pt-16 md:pt-24 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Header with Back Button */}
      <div className="container mx-auto px-4">
        <Link 
          to="/" 
          className={`flex items-center text-primary hover:text-accent transition-colors mb-6`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </Link>
        
        <h1 className="text-4xl font-bold mb-2 text-primary">All Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Browse through my complete portfolio of projects</p>
      </div>
      
      {/* Search and Filter Tools */}
      <div className={`sticky top-16 md:top-20 z-30 py-4 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full py-3 pl-12 pr-4 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800 text-white border-gray-700 focus:border-primary' 
                    : 'bg-gray-50 text-gray-800 border-gray-200 focus:border-primary'
                } border focus:outline-none transition-colors duration-300`}
              />
              <svg 
                className={`absolute left-4 top-3.5 w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className={`absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 md:justify-end">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-primary text-white' 
                      : darkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Count & Tags Filter */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> of {allProjects.length} projects
          </p>
          
          {/* Quick Tag Filters - Mobile Hidden, Desktop Shown */}
          <div className="hidden md:flex flex-wrap gap-2 mt-4 md:mt-0">
            {allTags.slice(0, 8).map(tag => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
            {allTags.length > 8 && (
              <button 
                className={`text-xs px-3 py-1.5 rounded-full ${
                  darkMode ? 'bg-gray-800 text-primary' : 'bg-gray-100 text-primary'
                }`}
              >
                +{allTags.length - 8} more
              </button>
            )}
          </div>
        </div>
        
        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <svg 
              className="w-16 h-16 mx-auto text-gray-400 mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Try adjusting your search or filter to find what you're looking for
            </p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveFilter('all');}}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Project Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-xl overflow-hidden transition-all duration-500 group animate-fade-in opacity-0 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-card hover:shadow-xl`}
              style={{ animationDelay: `${0.05 * project.id}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.github || project.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-primary px-6 py-3 rounded-full font-medium shadow-button transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    View Details
                  </a>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center font-bold shadow-highlight">
                  {project.id < 10 ? `0${project.id}` : project.id}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-xs px-3 py-1 rounded-full cursor-pointer ${
                        darkMode ? 'bg-gray-700 text-gray-200' : 'bg-primary/10 text-primary'
                      }`}
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                    }`}>
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
                
                {/* Link with arrow */}
                <div className="mt-6 flex justify-end">
                  <a 
                    href={project.github || project.link || '#'} 
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
      </div>
    </div>
  );
}

export default AllProjects;