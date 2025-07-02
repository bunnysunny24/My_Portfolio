import React from 'react';

function WorkExperience() {
  const workExperience = [
    {
      id: 1,
      company: "Samsung R&D Institute India, Bangalore",
      position: "Samsung Prism R&D Intern",
      duration: "March 2025 - Present",
      location: "Remote, India",
      responsibilities: [
        "Built a multimodal deepfake detector using Swin-v2 and HuBERT with cross-attention, achieving 94%+ accuracy.",
        "Applied Grad-CAM, FFT, and contrastive learning for interpretable detection of audio-visual forgeries.",
        "Extracted rPPG pulse, blink rate, and GAN fingerprints to capture physiological and spectral anomalies."
      ],
      project: {
        title: "DeepFake Audio-Video Detection",
        technologies: "Python, PyTorch, Swin Transformers, Wav2Vec2, EfficientNet, OpenCV",
        details: [
          "Extracted multimodal features via facial landmarks, rPPG signals, blink metrics, and Wav2Vec2/HuBERT acoustic embeddings.",
          "Applied cross-modal transformers with ELA, FFT-based forensics, and temporal attention for manipulation detection.",
          "Achieved 94% accuracy on face swap, lip-sync, and audio deepfakes using fused embeddings and mixed-precision training.",
          "Optimized training with mixed-precision, multi-GPU setup, and automated hyperparameter tuning."
        ]
      }
    }
  ];

  return (
    <section id="work-experience" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 relative inline-block">
            Work Experience
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-8 text-gray-600 dark:text-gray-300">
            Professional experience and contributions in cutting-edge technology and research.
          </p>
        </div>

        <div className="space-y-12">
          {workExperience.map((work) => (
            <div key={work.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">{work.company}</h3>
                    <h4 className="text-lg font-semibold text-accent mb-2">{work.position}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {work.duration}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {work.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-primary dark:text-white mb-3">Key Responsibilities</h5>
                    <ul className="space-y-2">
                      {work.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h5 className="text-lg font-semibold text-primary dark:text-white mb-3">Featured Project</h5>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <h6 className="text-xl font-bold text-accent mb-2">{work.project.title}</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="font-semibold">Technologies:</span> {work.project.technologies}
                      </p>
                      <ul className="space-y-2">
                        {work.project.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="group relative overflow-hidden border-2 border-primary text-primary hover:text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-button hover:shadow-lg inline-block"
          >
            <span className="relative z-10">Let's Discuss Opportunities</span>
            <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
