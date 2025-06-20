import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    // Create a sample resume download
    const resumeContent = `
    PRAVEEN KALAGARLA
+91 9490722065 ⋄ BHIMAVARAM,AP
praveenkalagarla2005@gmail.com  ⋄Linkedin   GitHub
OBJECTIVE

Aspiring Frontend Developer seeking a role or internship to apply skills in HTML, CSS, JavaScript, React.js, and responsive design. Committed to contributing to innovative web solutions and growing within a collaborative environment.
EDUCATION

Bachelor of Technology - Artificial Intelligence And Machine Learning ,
SRKR Engineering College , Bhimavaram, Andhra Pradesh	Expected 2026 Relevant Coursework: Data Structures, Artificial Intelligence, Machine Learning, Databases,
Board of Intermediate Education, AP - MPC ,
Sri Chaitanya Junior College , Vishakapatnam, Andhra Pradesh	2020 - 2022

   SKILLS

 TechnicalSkills   : HTML,CSS,JavaScript,Responsive,Bootstrap,React.js,Node.js,SQL,Github
  Soft Skills           :Leadership, Event Management, Communication Skills

  PROJECTS

 Online Food Website     Developed using HTML, CSS, JavaScript, and responsive design.
•	Developed a responsive food ordering platform with an intuitive and user-centric interface.
•	Integrated dynamic content to enhance interactivity and improve user engagement.
     National Hackathon Website   Developed using HTML, CSS, JavaScript and Responsive
•	Designed a responsive and user-friendly platform for a national hackathon, ensuring seamless navigation and accessibility across devices.
•	Enabled efficient event management with real-time updates, participant registration, and streamlined information access.
     Wikipedia Search Application   Developed using HTML, CSS, JavaScript, and Wikipedia API.
•	Created a dynamic application that allows users to search and retrieve Wikipedia articles with real-time suggestions.
•	Designed an intuitive user interface to ensure seamless browsing, enhancing user experience.
    Digital Timer Application  Developed using HTML, CSS, Responsive Design, and React.js.
•	Designed and implemented a customizable digital timer with features to set, pause, and reset the timer.
•	Ensured a responsive and intuitive user experience with a clean interface and seamless functionality across devices.
     EXTRA-CURRICULAR ACTIVITIES
      Executive Body Member (EBM)   Associative Computer Engineers Club
•	Hosted and managed multiple events, promoting student engagement and collaboration.
•	Developed leadership, organizational, and event management skills through active participation and strategic planning.



    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'John_Doe_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-lg border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 animate-slide-right">
            <div className="relative">
              <Rocket className="h-8 w-8 text-accent-400 animate-bounce-slow" />
              <div className="absolute inset-0 h-8 w-8 text-accent-400 animate-ping opacity-20">
                <Rocket className="h-8 w-8" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-accent-400 to-orange-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-accent-400 group ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-accent-400'
                    : 'text-white/80'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-orange-400 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.href.replace('#', '') ? 'w-full' : ''
                }`} />
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-medium hover:from-primary-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-glow"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={downloadResume}
              className="p-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full hover:from-primary-600 hover:to-purple-600 transition-all duration-300"
            >
              <Download className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-accent-400 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 hover:text-accent-400 hover:bg-white/10 rounded-md ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-accent-400 bg-white/10'
                      : 'text-white/80'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
