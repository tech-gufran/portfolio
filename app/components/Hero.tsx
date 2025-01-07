"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 pt-20 md:pt-32">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-white mb-4"
        >
        Gufran Ahmad Siddiqui
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[32px] text-blue-400 mb-8"
        >
          Full Stack Developer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Get in touch
          </a>
        </motion.div> 
         
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white text-lg mt-8 max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        >
          I am a passionate Full Stack Developer with expertise in creating scalable, 
          user-friendly web applications. I specialize in modern front-end and back-end 
          technologies, delivering impactful digital solutions with a focus on quality and performance.
        </motion.p>
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 mt-8"
        >
          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/gufran-ahmad-siddiqui-232756278/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            LinkedIn
          </a>
          {/* GitHub Button */}
          <a 
            href="https://github.com/tech-gufran"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
           {/* Gmail Button */}
           <a 
            href="mailto:gufransiddiqi111@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Gmail
          </a>
        </motion.div>
      </div>
    </section>
  );
}
