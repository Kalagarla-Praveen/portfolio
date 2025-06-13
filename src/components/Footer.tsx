import React from 'react';
import { Rocket, Github, Linkedin, Twitter, Mail, Instagram, Dribbble, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/Kalagarla-Praveen', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/praveenkalagarla/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/praveenkalagarla46', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: <Dribbble className="h-5 w-5" />, href: 'https://dribbble.com', label: 'Dribbble', color: 'hover:text-rose-400' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:praveenkalagarla2005@gmail.com', label: 'Email', color: 'hover:text-green-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Frontend',
    'Backend',
    'Machine Learning',
    
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Rocket className="h-10 w-10 text-accent-400 animate-bounce-slow" />
                <div className="absolute inset-0 h-10 w-10 text-accent-400 animate-ping opacity-20">
                  <Rocket className="h-10 w-10" />
                </div>
              </div>
              <div>
                <span className="text-2xl w-600 font-bold bg-gradient-to-r from-accent-400 to-orange-400 bg-clip-text text-transparent">
                  Praveen
                </span>
                <p className="text-white/60 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Creating digital experiences that blend creativity with cutting-edge technology. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 rounded-xl text-white/60 ${link.color} transition-all duration-300 hover:bg-white/10 hover:scale-110 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-accent-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/60 hover:text-accent-400 transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm mb-1">Email</p>
                <a
                  href="mailto:praveenkalagarla2005@gmail.com"
                  className="text-white hover:text-accent-400 transition-colors"
                >
                praveenkalagarla2005@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Phone</p>
                <a
                  href="tel:+91 9490722065"
                  className="text-white hover:text-accent-400 transition-colors"
                >
                  +91 9490722065
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Location</p>
                <span className="text-white">Bhimavaram, AP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/60 text-sm">
                © {currentYear} Praveen. All rights reserved.
              </p>
              <p className="text-white/60 text-sm flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                <span>and lots of</span>
                <span className="text-accent-400">☕</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-white/60 text-sm">Available for freelance</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-accent-400 to-orange-400 text-white rounded-full hover:from-accent-500 hover:to-orange-500 transition-all duration-300 hover:scale-110 animate-bounce-slow"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </footer>
  );
};

export default Footer;