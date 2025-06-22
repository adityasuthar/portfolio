'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Youtube Transcript Summarizer',
    description: 'This project is a YouTube transcript summarizer built with a modern tech stack. The frontend, powered by React, offers an intuitive user interface for submitting YouTube video links. On the backend, Django manages the application logic and interacts with SQLite for efficient data storage. The core summarization functionality is driven by Google GenAI, leveraging its advanced capabilities to condense lengthy video transcripts into concise summaries.',
    technologies: ['django', 'React', 'SQLite', 'python', 'Google GenAi'],
    github: 'https://github.com/adityasuthar/youtube-transcript-summarizer',
    live: 'https://adityasuthar.github.io',
    image: '/projects/YTsummarizer-logo.png',
  },
  {
    title: 'Contacts App',
    description: 'his is a straightforward Contacts Management Application built using the Django web framework. It provides essential features for efficiently adding, editing, and managing your contacts. The user interface is crafted with standard web technologies, HTML and CSS, ensuring a clear and functional experience.',
    technologies: ['Django', 'Python', 'HTML', 'CSS', 'SQLite'],
    github: 'https://github.com/adityasuthar/contacts-app',
    image: '/projects/contacts-app-logo.png',
    live: "https://adityasuthar02.pythonanywhere.com/"
  },
  {
    title: 'Polls API',
    description: 'This is a RESTful Polls API application, meticulously engineered using Django REST Framework. It provides robust functionalities for comprehensive question management and a seamless voting system. All features are exposed through well-defined API endpoints, enabling flexible integration and interaction for various client applications.',
    technologies: ['Django', 'Django REST', 'Python', 'SQLite'],
    github: 'https://github.com/adityasuthar/polls-api',
    image: '/projects/polls-api-logo.jpg',
    live: 'https://adityasuthar.pythonanywhere.com/polls/',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 bg-gray-800 flex items-center justify-center p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute inset-0 bg-accent/10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 