
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
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    },
    {
      title: "Canvas Student Learning Web App",
      description: "Established a scalable PHP backend handling 1,000+ concurrent users. Ensured data integrity with sophisticated authentication & RBAC. Integrated ReactJS with RESTful APIs, improving response times. Added real-time progress tracking & interactive assessments.",
      technologies: ["PHP", "ReactJS", "MySQL", "REST API"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop"
    },
    {
      title: "Attendance System Using Facial Recognition",
      description: "Engineered an AI-powered facial recognition system using HOG and deep learning, achieving 100% automation in attendance tracking. Optimized face detection with landmark estimation and affine transformations, reaching 98%+ accuracy. Developed real-time face matching using 128-dimensional feature embeddings and CNN.",
      technologies: ["Python", "OpenCV", "Deep Learning", "CNN", "HOG"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop"
    },
    {
      title: "ReziBot: AI-Driven Resume & Cover Letter Generator",
      description: "Developed an LLM-powered tool that tailors resumes and cover letters to job descriptions, improving personalization and ATS optimization. Engineered the system using Flask (backend) and React (frontend), integrating OpenAI's GPT models for context-aware content generation.",
      technologies: ["React", "Flask", "OpenAI GPT", "LangChain", "Python", "NLP"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop"
    },
    {
      title: "Spotify Data Pipeline",
      description: "Automated a daily Airflow DAG using Python and Selenium to ingest 30,000+ Spotify listening events into PostgreSQL. Implemented an interactive analytics dashboard using Metabase to visualize listening trends.",
      technologies: ["Python", "Airflow", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
    },
    {
      title: "Customer Churn Prediction",
      description: "Developed an end-to-end machine learning pipeline using TensorFlow, preprocessing 7,000+ customer records and achieving churn prediction accuracy of 85%, improving customer retention strategies significantly.",
      technologies: ["TensorFlow", "Python", "Pandas", "SQLite", "Power BI"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
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
                  className="w-full h-32 mb-4 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
