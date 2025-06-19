
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
            whileHover={{ 
              scale: 1.02,
              color: "#1e293b"
            }}
            animate={{
              textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 10px rgba(0,0,0,0.1)", "0 0 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            About <span className="text-slate-700">Me</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              "I'm a passionate Software Engineer and Data Scientist with expertise in AI/ML, full-stack development, and advanced analytics. Currently pursuing my Master's in Computer Science at the University of Texas at Arlington.",
              "With experience ranging from building predictive machine learning models to developing scalable web applications, I enjoy solving complex problems and creating innovative solutions that make a real impact.",
              "My expertise spans across Python, JavaScript, SQL, and various AI/ML frameworks including PyTorch, TensorFlow, and Scikit-Learn. I'm also proficient in modern web technologies like React, Node.js, and cloud platforms."
            ].map((text, index) => (
              <motion.p 
                key={index}
                className="text-base text-slate-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ 
                  x: 5,
                  color: "#334155"
                }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              y: -5
            }}
          >
            <motion.h3 
              className="text-xl font-bold text-slate-800 mb-4"
              animate={{
                color: ["#1e293b", "#475569", "#1e293b"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Quick Facts
            </motion.h3>
            <div className="space-y-3">
              {[
                { label: 'Education', value: 'UT Arlington (MS CS)' },
                { label: 'Experience', value: '3+ Years' },
                { label: 'Specialization', value: 'AI/ML & Full-Stack' }
              ].map((fact, index) => (
                <motion.div 
                  key={fact.label}
                  className="flex justify-between"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    x: 5,
                    scale: 1.02
                  }}
                >
                  <span className="text-slate-600">{fact.label}</span>
                  <motion.span 
                    className="text-slate-800 font-medium"
                    animate={{
                      color: ["#1e293b", "#475569", "#1e293b"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {fact.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
