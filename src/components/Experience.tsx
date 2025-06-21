
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
          >
            Work <span className="text-slate-700">Experience</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                    <div className="flex items-center text-slate-700 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-600 mt-2 lg:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
                
                <motion.p 
                  className="text-slate-700 leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {exp.summary}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
