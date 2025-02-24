import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

import logo from "../assets/images/circleviva.PNG";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg bg-opacity-80 ${
        hasScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Viva Tech" className="h-12 w-auto object-cover" />
          <span className="text-3xl font-semibold text-white tracking-wide uppercase">
            Viva Tech
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ title, href }) => (
            <a
              key={href}
              href={href}
              className={`text-lg transition-all duration-300 ${
                activeSection === href.slice(1)
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-gray-900 shadow-md md:hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map(({ title, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-white text-lg font-medium hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
