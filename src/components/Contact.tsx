
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhinavdrmahadik@gmail.com",
      link: "mailto:abhinavdrmahadik@gmail.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abhinavmahadik",
      link: "https://www.linkedin.com/in/abhinavmahadik",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Portfolio",
      link: "https://github.com/abhinavmahadik2000",
      color: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8" ref={ref}>
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
              color: ["#1e293b", "#475569", "#1e293b"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Get In <span className="text-slate-700">Touch</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p 
            className="text-base text-slate-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ color: "#334155" }}
          >
            I'm always interested in new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.a
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30 hover:border-white/50 transition-all duration-300 text-center"
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    rotateY: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 12,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                    }}
                    animate={{
                      rotate: [0, 3, -3, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-base font-semibold text-slate-800 mb-2"
                    animate={{
                      color: ["#1e293b", "#475569", "#1e293b"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {contact.label}
                  </motion.h3>
                  <motion.p 
                    className="text-slate-700 text-sm break-all"
                    whileHover={{ color: "#334155" }}
                  >
                    {contact.value}
                  </motion.p>
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <motion.a
            href="mailto:abhinavdrmahadik@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-full hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              y: -3,
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["0 5px 15px rgba(0,0,0,0.1)", "0 10px 25px rgba(0,0,0,0.15)", "0 5px 15px rgba(0,0,0,0.1)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Mail className="w-4 h-4 mr-2" />
            Let's Work Together
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 pt-6 border-t border-white/30 text-center text-slate-600"
        >
          <motion.p
            animate={{
              color: ["#64748b", "#475569", "#64748b"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            &copy; 2024 Abhinav Dilip Mahadik. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
