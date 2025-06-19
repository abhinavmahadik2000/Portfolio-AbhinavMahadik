
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL", "C", "C++", "Java", "Scala", "R"]
    },
    {
      title: "AI/ML & Data",
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", "OpenAI APIs", "RAG", "NumPy", "Pandas"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Django", "Flask", "Node.js", "HTML/CSS", "Tableau", "Power BI"]
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "Git", "GitHub Actions", "Linux", "Bash", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
            whileHover={{ scale: 1.02 }}
            animate={{
              backgroundImage: [
                "linear-gradient(45deg, #1e293b, #475569)",
                "linear-gradient(45deg, #475569, #64748b)",
                "linear-gradient(45deg, #1e293b, #475569)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Technical <span className="text-slate-700">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30 hover:border-white/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.03,
                y: -8,
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                rotateY: 5
              }}
            >
              <motion.h3 
                className="text-lg font-bold text-slate-800 mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
                whileHover={{
                  color: "#334155",
                  scale: 1.05
                }}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="text-slate-700 text-sm py-2 px-3 bg-white/30 rounded-full border border-white/40 hover:border-white/60 transition-all duration-200"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.5)",
                      x: 3,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      animate={{
                        color: ["#475569", "#1e293b", "#475569"]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: skillIndex * 0.2 
                      }}
                    >
                      {skill}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
