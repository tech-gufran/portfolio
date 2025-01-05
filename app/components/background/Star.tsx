"use client";

import { motion } from 'framer-motion';

interface StarProps {
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

export default function Star({ size, top, left, duration, delay }: StarProps) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        top: `${top}%`,
        left: `${left}%`,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3
      }}
    />
  );
}