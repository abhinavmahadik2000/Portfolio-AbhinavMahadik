
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
      gradient: "from-slate-600 to-slate-800",
      accent: "from-blue-400 to-purple-500"
    },
    {
      title: "Canvas Student Learning Web App",
      description: "Established a scalable PHP backend handling 1,000+ concurrent users. Ensured data integrity with sophisticated authentication & RBAC. Integrated ReactJS with RESTful APIs, improving response times. Added real-time progress tracking & interactive assessments.",
      technologies: ["PHP", "ReactJS", "MySQL", "REST API"],
      gradient: "from-slate-700 to-slate-600",
      accent: "from-green-400 to-blue-500"
    },
    {
      title: "Attendance System Using Facial Recognition",
      description: "Engineered an AI-powered facial recognition system using HOG and deep learning, achieving 100% automation in attendance tracking. Optimized face detection with landmark estimation and affine transformations, reaching 98%+ accuracy. Developed real-time face matching using 128-dimensional feature embeddings and CNN.",
      technologies: ["Python", "OpenCV", "Deep Learning", "CNN", "HOG", "Face Recognition"],
      gradient: "from-slate-600 to-slate-700",
      accent: "from-red-400 to-pink-500"
    },
    {
      title: "ReziBot: AI-Driven Resume & Cover Letter Generator",
      description: "Developed an LLM-powered tool that tailors resumes and cover letters to job descriptions, improving personalization and ATS optimization. Engineered the system using Flask (backend) and React (frontend), integrating OpenAI's GPT models for context-aware content generation.",
      technologies: ["React", "Flask", "OpenAI GPT", "LangChain", "Python", "NLP"],
      gradient: "from-slate-800 to-slate-600",
      accent: "from-yellow-400 to-orange-500"
    },
    {
      title: "Spotify Data Pipeline",
      description: "Automated a daily Airflow DAG using Python and Selenium to ingest 30,000+ Spotify listening events into PostgreSQL. Implemented an interactive analytics dashboard using Metabase to visualize listening trends.",
      technologies: ["Python", "Airflow", "PostgreSQL", "Docker"],
      gradient: "from-slate-600 to-slate-800",
      accent: "from-emerald-400 to-teal-500"
    },
    {
      title: "Customer Churn Prediction",
      description: "Developed an end-to-end machine learning pipeline using TensorFlow, preprocessing 7,000+ customer records and achieving churn prediction accuracy of 85%, improving customer retention strategies significantly.",
      technologies: ["TensorFlow", "Python", "Pandas", "SQLite", "Power BI"],
      gradient: "from-slate-700 to-slate-800",
      accent: "from-indigo-400 to-cyan-500"
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
                  scale: 1.05,
                  y: -12,
                  rotateY: 3,
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
                  },
                  hover: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                {/* Animated background waves */}
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='m0 0l60 60h-60v-60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "30px 30px"
                  }}
                />
                
                {/* Creative project icon with morphing shapes */}
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg mb-4 flex items-center justify-center shadow-lg relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.2,
                    borderRadius: "50%",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                  }}
                >
                  {/* Morphing inner shape */}
                  <motion.div 
                    className={`w-6 h-6 bg-gradient-to-r ${project.accent} rounded-sm`}
                    animate={{
                      borderRadius: ["0%", "50%", "0%"],
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                  
                  {/* Orbiting particles */}
                  <motion.div
                    className="absolute w-2 h-2 bg-white/60 rounded-full"
                    animate={{
                      rotate: 360,
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{
                      transformOrigin: "0 0",
                      x: "20px",
                      y: "20px"
                    }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-slate-800 mb-3"
                  whileHover={{
                    x: 5,
                    color: "#475569"
                  }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-slate-700 text-sm leading-relaxed mb-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ 
                    opacity: 1,
                    y: -2
                  }}
                >
                  {project.description}
                </motion.p>
                
                {/* Animated technology tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-white/30 rounded-full text-slate-700 border border-white/40 hover:border-white/60 transition-all duration-200"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(255,255,255,0.5)",
                        y: -3,
                        x: Math.random() * 4 - 2,
                      }}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        rotate: [0, Math.random() * 10 - 5, 0] 
                      } : { opacity: 0, scale: 0.8, y: 20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + techIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                        rotate: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Demo button with creative animations */}
                <div className="flex space-x-4">
                  <motion.button
                    className="flex items-center text-slate-700 hover:text-slate-600 transition-colors duration-200 font-medium relative group"
                    whileHover={{ 
                      scale: 1.05,
                      x: 8,
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      rotate: -2
                    }}
                  >
                    <motion.div
                      className="mr-2"
                      whileHover={{
                        rotate: [0, -15, 15, 0],
                        scale: 1.2
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                    <span className="text-sm">Demo</span>
                    
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating sparkles on hover */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-1 h-1 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        y: [0, -8, 0],
                        x: [0, 4, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  </motion.button>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-white/40 to-transparent rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0.8, 0.3],
                    rotate: 360,
                  }}
                  transition={{
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" }
                  }}
                />
                
                <motion.div
                  className="absolute bottom-6 left-4 w-3 h-1 bg-white/20 rounded-full"
                  animate={{
                    scaleX: [1, 2, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
