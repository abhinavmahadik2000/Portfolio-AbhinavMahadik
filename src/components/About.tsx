
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Software Engineer and Data Scientist with expertise in AI/ML, full-stack development, 
              and advanced analytics. Currently pursuing my Master's in Computer Science at the University of Texas at Arlington.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With experience ranging from building predictive machine learning models to developing scalable web applications, 
              I enjoy solving complex problems and creating innovative solutions that make a real impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across Python, JavaScript, SQL, and various AI/ML frameworks including PyTorch, TensorFlow, 
              and Scikit-Learn. I'm also proficient in modern web technologies like React, Node.js, and cloud platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Location</span>
                <span className="text-white">Arlington, TX</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Education</span>
                <span className="text-white">UT Arlington (MS CS)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Experience</span>
                <span className="text-white">3+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Specialization</span>
                <span className="text-white">AI/ML & Full-Stack</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
