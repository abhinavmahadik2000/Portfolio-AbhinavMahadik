
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorFollowerProps {
  isDarkMode: boolean;
}

const CursorFollower = ({ isDarkMode }: CursorFollowerProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor follower */}
      <motion.div
        className={`fixed w-6 h-6 rounded-full pointer-events-none z-40 mix-blend-difference`}
        style={{
          backgroundColor: isDarkMode ? '#ffffff' : '#000000',
          opacity: 0.3,
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
          mass: 0.5,
        }}
      />
      
      {/* Trailing effect */}
      <motion.div
        className={`fixed w-12 h-12 rounded-full pointer-events-none z-30`}
        style={{
          backgroundColor: isDarkMode ? '#ffffff' : '#000000',
          opacity: 0.1,
          filter: 'blur(8px)',
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
          mass: 1,
        }}
      />
    </>
  );
};

export default CursorFollower;
