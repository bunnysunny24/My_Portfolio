import React from 'react';

function Certificates() {
  const certificates = [
    { 
      id: 1,
      title: "Introducing Generative AI with AWS",
      issuer: "Udacity",
      image: "/Screenshot 2025-07-02 202706.png",
      credentialId: "e/2605bbe4-3d32-11f0-9f27-1b0f6948b1a9",
      credentialUrl: "https://www.udacity.com/certificate/e/2605bbe4-3d32-11f0-9f27-1b0f6948b1a9"
    },
    { 
      id: 2, 
      title: "GitHub Foundations", 
      issuer: "GitHub",
      image: "/Github_foundation_certi.jpeg" 
    },
    { 
      id: 3, 
      title: "Supervised Machine Learning", 
      issuer: "Stanford, Deeplearning.AI",
      image: "/Machine_leanring_certi.jpeg" 
    },
    { 
      id: 4, 
      title: "Database Management Systems", 
      issuer: "NPTEL",
      image: "/Dbms_certi.jpeg" 
    },
    { 
      id: 5, 
      title: "Introduction to IoT and Embedded Systems", 
      issuer: "University of California, Irvine",
      image: "/intro_to_iot_and_embedded_systems.jpeg" 
    },
    { 
      id: 6, 
      title: "IoT Wireless & Cloud Computing Emerging Technologies", 
      issuer: "Yonsei University",
      image: "/iot_wireless_technology.jpeg" 
    },
    { 
      id: 6, 
      title: "Java", 
      issuer: "NPTEL",
      image: "/java_certi.jpeg" 
    },
    { 
      id: 7, 
      title: "Complete Python Developer", 
      issuer: "Udemy",
      image: "/python_certi.jpeg" 
    },
    { 
      id: 8, 
      title: "Python 101 for Data Science", 
      issuer: "Cognitive Class AI, IBM",
      image: "/python_datascience_certi.png" 
    }
  ];
  
  return (
    <section id="certificates" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">My Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 relative inline-block">
            Certifications
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-8 text-gray-600 dark:text-gray-300">
            Professional certificates that showcase my continuous learning journey and expertise in various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => cert.credentialUrl ? window.open(cert.credentialUrl, '_blank') : window.open(cert.image, '_blank')}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white px-4 py-2 rounded-full text-sm bg-primary/90 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {cert.credentialUrl ? "Verify Certificate" : "View Certificate"}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-primary dark:text-white text-lg group-hover:text-accent transition-colors duration-300">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{cert.issuer}</p>
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 truncate">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="group relative overflow-hidden border-2 border-primary text-primary hover:text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-button hover:shadow-lg inline-block"
          >
            <span className="relative z-10">Contact Me For More Details</span>
            <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
