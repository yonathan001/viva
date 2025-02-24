import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';

import logo from '../assets/images/circleviva.PNG';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg' // Blur effect and shadow on scroll
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Viva Technology"
              className="h-12 w-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '../assets/images/circleviva.PNG';
              }}
            />
            <div className="flex flex-col">
            <span
  className="text-1xl font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  viva Technology 🇪🇹
</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ title, href }) => (
              <a
                key={href}
                href={href}
                className={`nav-link ${
                  activeSection === href.slice(1)
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                } transition duration-300`}
              >
                {title}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation with Blurred Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Blurred Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)} // Close menu when overlay is clicked
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed top-20 left-4 right-4 bg-white rounded-lg shadow-lg z-50 p-6"
              >
                <div className="space-y-4">
                  {navItems.map(({ title, href }) => (
                    <a
                      key={href}
                      href={href}
                      className={`block text-gray-700 hover:text-blue-600 ${
                        activeSection === href.slice(1) ? 'font-semibold' : ''
                      } transition duration-300`}
                      onClick={() => setIsOpen(false)}
                    >
                      {title}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;