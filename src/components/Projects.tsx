
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Text-to-SQL Agent",
      description: "Enhanced RAG pipeline indexing 100 documents with OpenAI Embeddings, leveraging concurrent query execution. Implemented an AI-powered SQL system handling dynamic optimization based on contextual SQL queries.",
      technologies: ["Python", "FastAPI", "Socket.IO", "OpenAI", "SQL"],
      gradient: "from-slate-600 to-slate-800"
    },
    {
      title: "Movie Recommender & Critique Agent",
      description: "Leveraged a vector search & semantic analysis pipeline over MongoDB with 10k+ movie and user reviews. Engineered an end-to-end Python ETL pipeline, improved sentiment classification accuracy by 18%.",
      technologies: ["Python", "LangChain", "MongoDB", "OpenAI"],
      gradient: "from-slate-700 to-slate-600"
    },
    {
      title: "Spotify Data Pipeline",
      description: "Automated a daily Airflow DAG using Python and Selenium to ingest 30,000+ Spotify listening events into PostgreSQL. Implemented an interactive analytics dashboard using Metabase to visualize listening trends.",
      technologies: ["Python", "Airflow", "PostgreSQL", "Docker"],
      gradient: "from-slate-600 to-slate-700"
    },
    {
      title: "Customer Churn Prediction",
      description: "Developed an end-to-end machine learning pipeline using TensorFlow, preprocessing 7,000+ customer records and achieving churn prediction accuracy of 85%, improving customer retention strategies significantly.",
      technologies: ["TensorFlow", "Python", "Pandas", "SQLite", "Power BI"],
      gradient: "from-slate-800 to-slate-600"
    }
  ];

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8" ref={ref}>
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
              textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 15px rgba(0,0,0,0.1)", "0 0 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Featured <span className="text-slate-700">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div 
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30 hover:border-white/50 transition-all duration-300 h-full"
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  rotateX: 2
                }}
                animate={{
                  borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.3)"]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                <motion.div 
                  className={`w-10 h-10 bg-gradient-to-r ${project.gradient} rounded-lg mb-3 flex items-center justify-center shadow-lg`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 12,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                  }}
                  animate={{
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-5 h-5 bg-white/30 rounded"></div>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-bold text-slate-800 mb-2"
                  whileHover={{ color: "#334155" }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-slate-700 text-sm leading-relaxed mb-4"
                  whileHover={{ color: "#475569" }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-white/30 rounded-full text-slate-700 border border-white/40 hover:border-white/60 transition-all duration-200"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.4)",
                        y: -2
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {[
                    { icon: Github, label: "Code" },
                    { icon: ExternalLink, label: "Demo" }
                  ].map((btn, btnIndex) => {
                    const IconComponent = btn.icon;
                    return (
                      <motion.button
                        key={btnIndex}
                        className="flex items-center text-slate-700 hover:text-slate-600 transition-colors duration-200 font-medium"
                        whileHover={{ 
                          scale: 1.05, 
                          x: 3,
                          color: "#334155"
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          y: [0, -1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: btnIndex * 0.5 
                        }}
                      >
                        <IconComponent className="w-4 h-4 mr-1" />
                        <span className="text-sm">{btn.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
