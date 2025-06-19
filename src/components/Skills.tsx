
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Technical <span className="text-slate-700">Skills</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <motion.h3 
                className="text-xl font-bold text-slate-800 mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
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
                    className="text-slate-700 text-sm py-2 px-3 bg-white/30 rounded-full border border-white/40 hover:border-white/60 transition-all duration-200 hover:bg-white/40"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.5)"
                    }}
                  >
                    {skill}
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
