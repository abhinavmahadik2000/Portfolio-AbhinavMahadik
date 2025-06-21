
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationProps {
  isDarkMode: boolean;
}

const Education = ({ isDarkMode }: EducationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Texas at Arlington",
      location: "Arlington, TX",
      period: "2023 - Present",
      details: [
        "Specialization in Machine Learning and Data Science",
        "Relevant Coursework: Advanced Algorithms, Machine Learning, Database Systems",
        "Research focus on AI/ML applications in data analytics"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "University of Mumbai",
      location: "Mumbai, India",
      period: "2018 - 2022",
      details: [
        "Graduated with First Class Honors",
        "Relevant Coursework: Data Structures, Software Engineering, Database Management",
        "Final Year Project on Machine Learning based Prediction Systems"
      ]
    }
  ];

  const titleColor = isDarkMode ? 'text-gray-100' : 'text-slate-800';
  const subtitleColor = isDarkMode ? 'text-gray-200' : 'text-slate-700';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-slate-700';
  const cardBg = isDarkMode ? 'bg-gray-800/20' : 'bg-white/20';
  const cardBorder = isDarkMode ? 'border-gray-600/30 hover:border-gray-500/50' : 'border-white/30 hover:border-white/50';
  const gradientBg = isDarkMode ? 'bg-gradient-to-r from-gray-600 to-gray-800' : 'bg-gradient-to-r from-slate-600 to-slate-800';

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold ${titleColor} mb-6`}
            whileHover={{ scale: 1.02 }}
          >
            <span className={subtitleColor}>Education</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${cardBg} backdrop-blur-sm rounded-2xl p-6 border ${cardBorder} transition-all duration-300`}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className={`w-12 h-12 ${gradientBg} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <GraduationCap className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className={`text-xl font-bold ${titleColor}`}>{edu.degree}</h3>
                    <div className={`flex items-center ${subtitleColor} mt-1`}>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-semibold">{edu.school}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-slate-600'} text-sm mt-2 md:mt-0`}>
                  <Calendar className="w-4 h-4 mr-1" />
                  {edu.period}
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {edu.details.map((detail, detailIndex) => (
                  <motion.li 
                    key={detailIndex} 
                    className={`${textColor} text-sm leading-relaxed flex items-start`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + detailIndex * 0.1 + 0.8 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-gray-400' : 'bg-slate-600'} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
