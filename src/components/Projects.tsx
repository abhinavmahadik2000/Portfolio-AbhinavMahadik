
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
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
            Featured <span className="text-slate-700">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div 
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 h-full"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg mb-4 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-6 h-6 bg-white/30 rounded"></div>
                </motion.div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-white/30 rounded-full text-slate-700 border border-white/40 hover:border-white/60 transition-all duration-200"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.4)"
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    className="flex items-center text-slate-700 hover:text-slate-600 transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-sm">Code</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center text-slate-700 hover:text-slate-600 transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="text-sm">Demo</span>
                  </motion.button>
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
