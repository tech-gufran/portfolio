"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'DSA', level: 70 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 70 },
  { name: 'MySql', level: 70 }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Skills
        </motion.h2>
        <div ref={ref} className="max-w-2xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-white">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <motion.div 
                className="h-2 bg-gray-700 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <motion.div 
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}