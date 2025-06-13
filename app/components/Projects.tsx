"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Chatbot Application Using React',
    description:
      'Built an interactive chatbot application using React.js, integrating APIs to enable response and real-time information.',
    image: '/Chatbot.png',
    link: 'https://github.com/tech-gufran/ChatBot--Application' // Replace with actual link
  },
  {
    title: 'Expense Tracker Application',
    description:
      'Built a responsive expense tracker using React.js with Context API for global state management.',
    image: '/project2.jpg',
    link: 'https://github.com/tech-gufran/Expense-Tracker-App-With-React.JS'
  },
  {
    title: 'AI Chat Assistant App (ChatGPT Clone)',
    description:
      'Full-stack AI chat assistant using Next.js App Router, TypeScript, API routing, and custom UI components.',
    image: '/project3.jpg',
    link: 'https://github.com/tech-gufran/Chatgpt'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 block"
            >
              <div className="h-48 bg-gray-700">
                {/* Optional: <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
