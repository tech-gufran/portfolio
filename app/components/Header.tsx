"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-white"
          >
            Portfolio
          </motion.div>
          <div className="space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}