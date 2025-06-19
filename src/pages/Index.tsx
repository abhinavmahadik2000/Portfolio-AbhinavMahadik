
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0)'
    }}>
      {/* Animated floating elements */}
      <motion.div
        className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full"
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
        className="absolute top-1/4 right-20 w-6 h-6 bg-white/15 rounded-full"
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
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-white/25 rounded-full"
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
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
