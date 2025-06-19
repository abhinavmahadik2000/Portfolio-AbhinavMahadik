
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
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.9, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-3 h-3 bg-white/25 rounded-full"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-white/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-full opacity-75"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <img
                src="/lovable-uploads/e0e2571f-9aa1-405c-b423-898828e712ec.png"
                alt="Abhinav Dilip Mahadik"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(0,0,0,0.3)"
            }}
          >
            <motion.span 
              className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Abhinav Dilip Mahadik
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto h-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-medium">
              {typewriterText}
              <motion.span
                className="inline-block w-0.5 h-5 bg-slate-700 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { href: "mailto:abhinavdrmahadik@gmail.com", icon: Mail, color: "from-red-500 to-red-600" },
              { href: "https://www.linkedin.com/in/abhinavmahadik", icon: Linkedin, color: "from-blue-500 to-blue-600" },
              { href: "https://github.com/abhinavmahadik2000", icon: Github, color: "from-gray-700 to-gray-800" }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`p-3 bg-gradient-to-r ${social.color} rounded-full backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    rotate: [0, -5, 5, 0],
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Smaller 3D Spline Model */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div 
              className="w-full max-w-lg mx-auto relative"
              whileInView={{ 
                rotateY: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="aspect-square max-h-[350px] lg:max-h-[400px] relative overflow-hidden rounded-2xl flex items-center justify-center shadow-2xl">
                <spline-viewer 
                  url="https://prod.spline.design/a614lKfFFOZKTDOp/scene.splinecode"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '300px'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="#about"
              className="inline-flex items-center text-slate-700 hover:text-slate-600 transition-colors duration-200"
              animate={{ 
                y: [0, 8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.2,
                color: "#475569"
              }}
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
