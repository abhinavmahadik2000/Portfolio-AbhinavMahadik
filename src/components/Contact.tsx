
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
      link: "mailto:abhinavdrmahadik@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abhinavmahadik",
      link: "https://www.linkedin.com/in/abhinavmahadik"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Portfolio",
      link: "https://github.com/abhinavmahadik2000"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
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
            Get In <span className="text-slate-700">Touch</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p 
            className="text-lg text-slate-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I'm always interested in new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
                  className="block bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 text-center"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{contact.label}</h3>
                  <p className="text-slate-700 text-sm break-all">{contact.value}</p>
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="mailto:abhinavdrmahadik@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-full hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 mr-2" />
            Let's Work Together
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/30 text-center text-slate-600"
        >
          <p>&copy; 2024 Abhinav Dilip Mahadik. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
