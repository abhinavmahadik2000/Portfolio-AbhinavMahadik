
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

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
      title: "Canvas Student Learning Web App",
      description: "Established a scalable PHP backend handling 1,000+ concurrent users. Ensured data integrity with sophisticated authentication & RBAC. Integrated ReactJS with RESTful APIs, improving response times. Added real-time progress tracking & interactive assessments.",
      technologies: ["PHP", "ReactJS", "MySQL", "REST API"],
      gradient: "from-slate-700 to-slate-600"
    },
    {
      title: "Attendance System Using Facial Recognition",
      description: "Engineered an AI-powered facial recognition system using HOG and deep learning, achieving 100% automation in attendance tracking. Optimized face detection with landmark estimation and affine transformations, reaching 98%+ accuracy. Developed real-time face matching using 128-dimensional feature embeddings and CNN.",
      technologies: ["Python", "OpenCV", "Deep Learning", "CNN", "HOG", "Face Recognition"],
      gradient: "from-slate-600 to-slate-700"
    },
    {
      title: "ReziBot: AI-Driven Resume & Cover Letter Generator",
      description: "Developed an LLM-powered tool that tailors resumes and cover letters to job descriptions, improving personalization and ATS optimization. Engineered the system using Flask (backend) and React (frontend), integrating OpenAI's GPT models for context-aware content generation.",
      technologies: ["React", "Flask", "OpenAI GPT", "LangChain", "Python", "NLP"],
      gradient: "from-slate-800 to-slate-600"
    },
    {
      title: "Spotify Data Pipeline",
      description: "Automated a daily Airflow DAG using Python and Selenium to ingest 30,000+ Spotify listening events into PostgreSQL. Implemented an interactive analytics dashboard using Metabase to visualize listening trends.",
      technologies: ["Python", "Airflow", "PostgreSQL", "Docker"],
      gradient: "from-slate-600 to-slate-800"
    },
    {
      title: "Customer Churn Prediction",
      description: "Developed an end-to-end machine learning pipeline using TensorFlow, preprocessing 7,000+ customer records and achieving churn prediction accuracy of 85%, improving customer retention strategies significantly.",
      technologies: ["TensorFlow", "Python", "Pandas", "SQLite", "Power BI"],
      gradient: "from-slate-700 to-slate-800"
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
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: "linear-gradient(-45deg, #1e293b, #475569, #64748b, #1e293b)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Featured <span className="text-slate-700">Projects</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group relative perspective-1000"
            >
              <motion.div 
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 h-full relative overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(0,0,0,0.1)",
                    "0 8px 25px rgba(0,0,0,0.15)",
                    "0 4px 15px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "20px 20px"
                  }}
                />
                
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg mb-4 flex items-center justify-center shadow-lg relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 15,
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    rotate: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-white/30 rounded"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-slate-800 mb-3"
                  animate={{
                    color: ["#1e293b", "#475569", "#1e293b"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-slate-700 text-sm leading-relaxed mb-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-white/30 rounded-full text-slate-700 border border-white/40 hover:border-white/60 transition-all duration-200"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(255,255,255,0.5)",
                        y: -2
                      }}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + techIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    className="flex items-center text-slate-700 hover:text-slate-600 transition-colors duration-200 font-medium relative group"
                    whileHover={{ 
                      scale: 1.1, 
                      x: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      x: [0, 2, 0],
                    }}
                    transition={{
                      x: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                    </motion.div>
                    <span className="text-sm">Demo</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-600 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
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
