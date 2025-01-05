"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Astronaut() {
  return (
    <motion.div
      className="absolute w-32 h-32"
      style={{ top: '30%', right: '15%' }}
      animate={{
        y: [0, 30, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image
        src="/astronaut.png"
        alt="Floating Astronaut"
        width={128}
        height={128}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}