import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // EmailJS configuration - updated with your actual credentials
  const SERVICE_ID = "service_6gds2hh"; // Your EmailJS service ID
  const TEMPLATE_ID = "template_4z6xcz6"; // Updated to your default template
  const PUBLIC_KEY = "qTVVtUCWTSQ62RME0"; // Your updated EmailJS public key
  const PRIVATE_KEY = "BQlzBWmxfDe3JzooBZQQd"; // Your EmailJS private key

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  // Handle viewport resize and determine if mobile view
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        success: false,
        message: 'Please fill in all required fields.'
      });
      setLoading(false);
      return;
    }
    
    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        success: false,
        message: 'Please enter a valid email address.'
      });
      setLoading(false);
      return;
    }
    
    // Prepare template parameters - configured for your template
    const templateParams = {
      from_name: formData.name,
      to_name: "Bhavashesh", // Your name
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject || "Portfolio Contact Form Submission",
      message: formData.message
    };
    
    // Send email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormStatus({
          success: true,
          message: 'Your message has been sent successfully! I will get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setFormStatus({
          success: false,
          message: 'There was an error sending your message. Please try again later.'
        });
      })
      .finally(() => {
        setLoading(false);
        
        // Clear status after 5 seconds
        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 relative overflow-hidden px-4 sm:px-6 md:px-0">
      {/* Background decorative elements - adjusted for mobile */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent/5 rounded-full blur-2xl sm:blur-3xl"></div>
      
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 relative inline-block">
            Contact Me
            <span className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 md:h-1.5 bg-accent rounded-full"></span>
          </h2>
          <p className="text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mt-6 md:mt-8 text-gray-600 dark:text-gray-300 px-4 sm:px-6 md:px-0">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
          {/* Contact Information - enhanced for mobile */}
          <div className="w-full lg:w-2/5 animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-card h-full relative overflow-hidden group">
              {/* Decorative pattern */}
              <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-accent/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/10 rounded-tr-full"></div>
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white mb-5 md:mb-6 flex items-center">
                  <span className="w-6 md:w-8 h-0.5 bg-accent mr-2 md:mr-3"></span>
                  Contact Information
                </h3>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6 shadow-neon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
                      <a 
                        href="tel:+919849800511" 
                        className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                      >
                        +91 98498 00511
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6 shadow-neon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                      <a 
                        href="mailto:bhavashesh@gmail.com" 
                        className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base break-all"
                      >
                        bhavashesh@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6 shadow-neon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Hyderabad, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 md:mb-6 text-sm sm:text-base">Connect With Me</h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    {[
                      { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/bunnysunny24' },
                      { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://www.linkedin.com/in/bhavashesh/' },
                      { name: 'Gmail', icon: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z', url: 'mailto:bhavashesh@gmail.com' }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href={social.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                        aria-label={social.name}
                      >
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - enhanced for mobile */}
          <div className="w-full lg:w-3/5 animate-fade-in opacity-0" style={{animationDelay: '0.4s'}}>
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-card relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white mb-5 md:mb-6 flex items-center">
                <span className="w-6 md:w-8 h-0.5 bg-accent mr-2 md:mr-3"></span>
                Send Me a Message
              </h3>
              
              {formStatus && (
                <div className={`p-3 sm:p-4 mb-5 sm:mb-6 rounded-lg text-sm sm:text-base ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-gray-50 group-hover:bg-white text-sm sm:text-base"
                        placeholder="Bhavashesh"
                        required
                        disabled={loading}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-gray-50 group-hover:bg-white text-sm sm:text-base"
                        placeholder="Bhavashesh@gmail.com"
                        required
                        disabled={loading}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-gray-50 group-hover:bg-white text-sm sm:text-base"
                    placeholder="What's this regarding?"
                    disabled={loading}
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={isMobile ? "4" : "6"}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-gray-50 group-hover:bg-white text-sm sm:text-base"
                    placeholder="Your message here..."
                    required
                    disabled={loading}
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-primary hover:bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-500 shadow-button hover:shadow-lg w-full flex items-center justify-center text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    <span className="relative z-10 flex items-center">
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;