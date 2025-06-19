
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Software Engineer Volunteer",
      company: "University of Texas at Arlington",
      location: "Arlington, TX",
      period: "July 2024 - Present",
      summary: "Led the development of a comprehensive research management web application using React and HTML/CSS, featuring professor profiles and real-time research dashboards that serve 20+ concurrent users. Designed and optimized SQL database schemas with MySQL backend using Flask APIs, implementing connection pooling and caching layers that reduced query response latency by 40%. Enhanced frontend performance through JavaScript optimization using Promises and async/await, achieving 35% faster page load times as measured by Lighthouse audits."
    },
    {
      title: "Data Science Intern",
      company: "Exposys Data Labs",
      location: "India",
      period: "June 2021 - September 2021", 
      summary: "Developed predictive machine learning models using K-means clustering and Decision Trees with scikit-learn, achieving 24% improvement in classification accuracy over baseline models. Accelerated data analysis workflows through Python optimization using pandas and NumPy with vectorized operations and memory-efficient joins. Created interactive data visualization tools using matplotlib and Plotly with regression analysis and clustering overlays, improving strategic decision-making efficiency by 40%. Integrated MongoDB with efficient indexing to reduce query response times by 50%, directly enhancing dashboard performance and API responsiveness."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
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
              duration: 6,
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
            Work <span className="text-slate-700">Experience</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="relative group"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-slate-400 to-transparent z-10"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                />
              )}

              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  rotateY: 2,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                animate={{
                  boxShadow: [
                    "0 8px 25px rgba(0,0,0,0.1)",
                    "0 15px 35px rgba(0,0,0,0.15)",
                    "0 8px 25px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 4,
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
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "30px 30px"
                  }}
                />

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 relative z-10">
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-slate-800 mb-2"
                      animate={{
                        color: ["#1e293b", "#475569", "#1e293b"]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.div 
                      className="flex items-center text-slate-700 mb-2"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                      </motion.div>
                      <span className="font-semibold">{exp.company}</span>
                      <motion.span 
                        className="mx-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        •
                      </motion.span>
                      <span>{exp.location}</span>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="flex items-center text-slate-600 mt-2 lg:mt-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                    </motion.div>
                    <span className="font-medium">{exp.period}</span>
                  </motion.div>
                </div>
                
                <motion.p 
                  className="text-slate-700 leading-relaxed text-lg relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  whileHover={{ 
                    scale: 1.01,
                    color: "#475569"
                  }}
                >
                  {exp.summary}
                </motion.p>

                {/* Floating accent elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-slate-400/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-3 h-3 bg-slate-300/20 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.2, 0.6, 0.2],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
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

export default Experience;
