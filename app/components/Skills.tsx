'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaBootstrap,
  FaGithub,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiDjango, SiExpress, SiFlask, SiHtml5, SiCss3 } from 'react-icons/si';

const skills = [
  { name: 'Django', icon: SiDjango, level: 90 },
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'Node.js', icon: FaNodeJs, level: 85 },
  { name: 'Express.js', icon: SiExpress, level: 85 },
  { name: 'JavaScript', icon: SiJavascript, level: 90 },
  { name: 'Python', icon: FaPython, level: 90 },
  { name: 'SQL', icon: FaDatabase, level: 85 },
  { name: 'Git', icon: FaGitAlt, level: 90 },
  { name: 'GitHub', icon: FaGithub, level: 90 },
  { name: 'Docker', icon: FaDocker, level: 70 },
  { name: 'Bootstrap', icon: FaBootstrap, level: 85 },
  { name: 'Django REST', icon: SiDjango, level: 90 },
  { name: 'Flask', icon: SiFlask, level: 85 },
  { name: 'HTML', icon: SiHtml5, level: 90 },
  { name: 'CSS', icon: SiCss3, level: 90 },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-primary rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-accent h-2.5 rounded-full"
                ></motion.div>
              </div>
              <p className="text-text-secondary mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 