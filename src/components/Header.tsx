import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-slide-right">
            <div className="relative">
              <Rocket className="h-8 w-8 text-accent-400 animate-bounce-slow" />
              <div className="absolute inset-0 h-8 w-8 text-accent-400 animate-ping opacity-20">
                <Rocket className="h-8 w-8" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-accent-400 to-orange-400 bg-clip-text text-transparent">
              Praveen Kalagarla
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
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-orange-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.href.replace('#', '')
                      ? 'w-full'
                      : ''
                  }`}
                />
              </button>
            ))}

            {/* ✅ Download Resume Button */}
            <a
              href="/Praveen_Kalagarla_Resume.pdf"
              download="Praveen_Kalagarla_Resume.pdf"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-medium hover:from-primary-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-glow"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="/Praveen_Kalagarla_Resume.pdf"
              download="Praveen_Kalagarla_Resume.pdf"
              className="p-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full hover:from-primary-600 hover:to-purple-600 transition-all duration-300"
            >
              <Download className="h-4 w-4" />
            </a>
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
