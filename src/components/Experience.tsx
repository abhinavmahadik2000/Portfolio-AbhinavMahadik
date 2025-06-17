
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
      achievements: [
        "Engineered a research management web application using HTML/CSS, React featuring professor profiles, real-time research dashboards, and responsive submission tracking, serving 20+ concurrent users.",
        "Designed SQL database, created schemas, and queries for efficient retrieval of 40+ research papers and coursework.",
        "Structured MySQL performance backend with Flask APIs, leveraging connection pooling, normalization, and caching layers, reducing query response latency by 40%.",
        "Optimized frontend JavaScript code using Promises and async/await, measured by Lighthouse, resulting in a 35% faster page load time."
      ]
    },
    {
      title: "Data Science Intern",
      company: "Exposys Data Labs",
      location: "India",
      period: "June 2021 - September 2021",
      achievements: [
        "Built predictive machine learning models (K-means, Decision Trees) using scikit-learn.",
        "Automated data workflows with intelligent ML models, increasing classification accuracy by 24% compared to baseline models.",
        "Accelerated data analysis scripts in Python (pandas, NumPy) by implementing vectorized operations and memory-efficient joins, reducing data retrieval and visualization time.",
        "Developed interactive data visualization tools using matplotlib and Plotly, powered by regression analysis and clustering overlays, improving strategic decision-making efficiency by 40%.",
        "Integrated MongoDB for efficient indexed storage, achieving 50% reduced query response times, directly improving dashboard load speeds, and API responsiveness."
      ]
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-purple-400 text-sm mt-1 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-300 text-sm leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
