import React from 'react';

function Achievements() {
  const achievements = [
    {
      id: 7,
      title: "Top 3 - Red Bull Basement Hackathon",
      organization: "Red Bull Basement",
      year: "2024–2025",
      description: "Secured Top 3 position in Red Bull Basement Hackathon, creating a real-world tech solution.",
      category: "Competition",
      icon: "🥉"
    },
    {
      id: 8,
      title: "2nd Runner-Up - Enduraverse’25 Hackathon",
      organization: "Enduraverse’25 (National Level)",
      year: "2024–2025",
      description: "Won 2nd Runner-Up in national-level Enduraverse’25 Hackathon, selected among top 6 teams across India.",
      category: "Competition",
      icon: "🏅"
    },
    {
      id: 9,
      title: "Smart India Hackathon 2024 Qualifier",
      organization: "Smart India Hackathon",
      year: "2024",
      description: "Qualified the Internal Round for Smart India Hackathon 2024 with a functional and scalable project.",
      category: "Competition",
      icon: "🎯"
    },
    {
      id: 10,
      title: "Top 10 Finalist - TEM-E-THON’25 Hackathon",
      organization: "TEM-E-THON’25",
      year: "2025",
      description: "Top 10 Finalist among 5k+ applicants in TEM-E-THON’25 Hackathon.",
      category: "Competition",
      icon: "🏆"
    }
  ];

  const categories = [
    { name: "Professional", color: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900" },
    { name: "Academic", color: "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900" },
    { name: "Community", color: "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900" },
    { name: "Research", color: "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900" },
    { name: "Competition", color: "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900" },
    { name: "Leadership", color: "text-indigo-600 bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900" }
  ];

  const getCategoryColor = (category) => {
    const categoryObj = categories.find(cat => cat.name === category);
    return categoryObj ? categoryObj.color : "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800";
  };

  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 relative inline-block">
            Achievements
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-8 text-gray-600 dark:text-gray-300">
            Recognition and milestones that mark my journey in technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>
                      {achievement.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{achievement.year}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-sm font-medium text-accent mb-3">
                  {achievement.organization}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="group relative overflow-hidden border-2 border-primary text-primary hover:text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-button hover:shadow-lg inline-block"
          >
            <span className="relative z-10">Let's Achieve More Together</span>
            <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
