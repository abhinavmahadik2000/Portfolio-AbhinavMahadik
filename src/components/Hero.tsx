
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Software Engineer • Data Scientist • Machine Learning Engineer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-3 h-3 bg-white/25 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 bg-clip-text text-transparent">
              Abhinav Dilip Mahadik
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-medium">
              {typewriterText}
              <motion.span
                className="inline-block w-0.5 h-6 bg-slate-700 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="mailto:abhinavdrmahadik@gmail.com"
              className="p-3 bg-slate-800/80 rounded-full backdrop-blur-sm hover:bg-slate-700/90 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abhinavmahadik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/80 rounded-full backdrop-blur-sm hover:bg-slate-700/90 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://github.com/abhinavmahadik2000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/80 rounded-full backdrop-blur-sm hover:bg-slate-700/90 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
          </motion.div>

          {/* 3D Spline Model */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-full max-w-2xl mx-auto relative">
              <div className="aspect-square max-h-[500px] lg:max-h-[600px] relative overflow-hidden rounded-2xl flex items-center justify-center">
                <spline-viewer 
                  url="https://prod.spline.design/a614lKfFFOZKTDOp/scene.splinecode"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '400px'
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.a
              href="#about"
              className="inline-flex items-center text-slate-700 hover:text-slate-600 transition-colors duration-200"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
