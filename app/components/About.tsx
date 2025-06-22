'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
            I'm a Computer Science undergrad and a passionate full-stack developer with a strong focus on building scalable web applications using Django, Django REST Framework, React, and PostgreSQL. With hands-on experience in real-world projects like disease prediction systems, Chrome extensions, and contact management apps, I combine backend logic with intuitive frontend design. I have also contributed to open-source projects and enjoy solving problems that blend software engineering with real-life impact.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
            Currently, I am actively seeking opportunities where I can contribute to impactful products, grow as a developer, and work with forward-thinking teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-primary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-text-secondary">
                B.Tech in Computer Science
              </p>
            </div>
            <div className="bg-primary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-text-secondary">
                Fresher
              </p>
            </div>
            <div className="bg-primary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-text-secondary">
                India
              </p>
            </div>
            <div className="bg-primary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Availability</h3>
              <p className="text-text-secondary">
                Open to Opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 