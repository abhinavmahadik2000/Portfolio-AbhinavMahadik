
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const titleColor = isDarkMode ? 'text-gray-100' : 'text-slate-800';
  const subtitleColor = isDarkMode ? 'text-gray-200' : 'text-slate-700';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-slate-700';
  const cardBg = isDarkMode ? 'bg-gray-800/20' : 'bg-white/20';
  const cardBorder = isDarkMode ? 'border-gray-600/30 hover:border-gray-500/50' : 'border-white/30 hover:border-white/50';
  const gradientBg = isDarkMode ? 'bg-gradient-to-r from-gray-600 to-gray-800' : 'bg-gradient-to-r from-slate-600 to-slate-800';

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold ${titleColor} mb-6`}
            whileHover={{ scale: 1.02 }}
          >
            About <span className={subtitleColor}>Me</span>
          </motion.h2>
          <motion.div 
            className={`w-24 h-1 ${gradientBg} mx-auto`}
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.p 
              className={`text-lg ${textColor} leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm a passionate Software Engineer and Data Scientist with expertise in AI/ML, full-stack development, 
              and advanced analytics. Currently pursuing my Master's in Computer Science at the University of Texas at Arlington.
            </motion.p>
            <motion.p 
              className={`text-lg ${textColor} leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              With experience ranging from building predictive machine learning models to developing scalable web applications, 
              I enjoy solving complex problems and creating innovative solutions that make a real impact.
            </motion.p>
            <motion.p 
              className={`text-lg ${textColor} leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              My expertise spans across Python, JavaScript, SQL, and various AI/ML frameworks including PyTorch, TensorFlow, 
              and Scikit-Learn. I'm also proficient in modern web technologies like React, Node.js, and cloud platforms.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${cardBg} backdrop-blur-sm rounded-2xl p-8 border ${cardBorder} transition-all duration-300`}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
          >
            <h3 className={`text-2xl font-bold ${titleColor} mb-6`}>Quick Facts</h3>
            <div className="space-y-4">
              {[
                { label: 'Location', value: 'Arlington, TX' },
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
                  whileHover={{ x: 5 }}
                >
                  <span className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>{fact.label}</span>
                  <span className={`${titleColor} font-medium`}>{fact.value}</span>
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
