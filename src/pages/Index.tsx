
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { Sun, Moon } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightGradient = 'linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0)';
  const darkGradient = 'linear-gradient(to right, #1e293b, #374151, #4b5563)';

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: isDarkMode ? darkGradient : lightGradient
    }}>
      {/* Dark Mode Toggle */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginTop: '60px' }}
      >
        <Sun className={`w-4 h-4 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-yellow-500'}`} />
        <Switch
          checked={isDarkMode}
          onCheckedChange={setIsDarkMode}
          className="data-[state=checked]:bg-gray-700 data-[state=unchecked]:bg-yellow-400"
        />
        <Moon className={`w-4 h-4 transition-colors ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}`} />
      </motion.div>

      {/* Animated floating elements */}
      <motion.div
        className={`absolute top-10 left-10 w-4 h-4 rounded-full ${isDarkMode ? 'bg-blue-400/20' : 'bg-white/20'}`}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute top-1/4 right-20 w-6 h-6 rounded-full ${isDarkMode ? 'bg-purple-400/15' : 'bg-white/15'}`}
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className={`absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full ${isDarkMode ? 'bg-gray-300/25' : 'bg-white/25'}`}
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <div className={isDarkMode ? 'text-gray-100' : 'text-slate-800'}>
        <Navbar isDarkMode={isDarkMode} />
        <Hero />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Index;
