
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
      skills: ["Python", "JavaScript", "SQL", "C", "C++", "Java", "Scala", "R"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI/ML & Data",
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", "OpenAI APIs", "RAG", "NumPy", "Pandas"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Technologies",
      skills: ["React", "Django", "Flask", "Node.js", "HTML/CSS", "Tableau", "Power BI"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "Git", "GitHub Actions", "Linux", "Bash", "Docker"],
      color: "from-orange-500 to-red-500"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                <div className="w-6 h-6 bg-white/20 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="text-gray-300 text-sm py-1 px-3 bg-white/5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-200"
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
