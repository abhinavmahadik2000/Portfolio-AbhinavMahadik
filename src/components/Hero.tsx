
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
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${i % 2 === 0 ? '2' : '3'} h-${i % 2 === 0 ? '2' : '3'} bg-white/20 rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - About Me Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Profile Picture */}
            <motion.div
              className="flex justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.div 
                className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-lg relative"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  borderColor: "rgba(255,255,255,0.6)"
                }}
                animate={{
                  borderColor: [
                    "rgba(255,255,255,0.3)",
                    "rgba(255,255,255,0.6)",
                    "rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{
                  borderColor: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.img 
                  src="/lovable-uploads/321fcf46-d500-4263-a9e3-76fa32a99f84.png" 
                  alt="Abhinav Dilip Mahadik"
                  className="w-full h-full object-cover"
                  animate={{
                    filter: [
                      "brightness(1) contrast(1)",
                      "brightness(1.1) contrast(1.1)",
                      "brightness(1) contrast(1)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Abhinav Dilip Mahadik
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-lg md:text-xl text-slate-700 h-12 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="font-medium">
                {typewriterText}
                <motion.span
                  className="inline-block w-0.5 h-5 bg-slate-700 ml-1"
                  animate={{ 
                    opacity: [1, 0],
                    scaleY: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-4 mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { href: "mailto:abhinavdrmahadik@gmail.com", icon: Mail, color: "from-red-500 to-pink-500" },
                { href: "https://www.linkedin.com/in/abhinavmahadik", icon: Linkedin, color: "from-blue-500 to-blue-600" },
                { href: "https://github.com/abhinavmahadik2000", icon: Github, color: "from-gray-700 to-gray-900" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/80 rounded-full backdrop-blur-sm hover:bg-slate-700/90 transition-all duration-300 shadow-lg relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    rotate: 10
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <social.icon className="w-5 h-5 text-white relative z-10" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Model */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 1.0, type: "spring", stiffness: 50 }}
          >
            <motion.div 
              className="w-full max-w-sm mx-auto relative"
              whileHover={{ scale: 1.05 }}
              animate={{
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div 
                className="aspect-square max-h-[350px] relative overflow-hidden rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(0,0,0,0.2)",
                    "0 20px 60px rgba(0,0,0,0.3)",
                    "0 10px 30px rgba(0,0,0,0.2)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <spline-viewer url="https://prod.spline.design/a614lKfFFOZKTDOp/scene.splinecode"></spline-viewer>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#about"
            className="inline-flex items-center text-slate-700 hover:text-slate-600 transition-colors duration-200"
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 1.1, 1]
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
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
