
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
}

const Navbar = ({ isDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const textColor = isDarkMode ? 'text-gray-100' : 'text-slate-800';
  const hoverColor = isDarkMode ? 'hover:text-gray-300' : 'hover:text-slate-600';
  const underlineColor = isDarkMode ? 'bg-gray-300' : 'bg-slate-700';

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? (isDarkMode ? 'bg-gray-900/80' : 'bg-slate-900/80') + ' backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-end items-center py-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`${textColor} ${hoverColor} transition-colors duration-200 font-medium relative`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineColor}`}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/*Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} ${hoverColor}`}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className={`md:hidden ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-lg mt-2 p-4 mx-4 shadow-lg`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`block py-3 ${textColor} ${hoverColor} transition-colors duration-200 font-medium`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
