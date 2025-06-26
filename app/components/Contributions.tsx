'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const contributions = [
  {
    title: 'Wikimedia Projects',
    description: "Lingua Libre, an initiative by Wikimedia France, is a collaborative platform for building a free, multilingual audio library that helps preserve languages, particularly those that are underrepresented. In doing so, I delved into a very young codebase and an active project with partial documentation, contributing a few features while positively connecting with the developers and the lead coordinator. I utilized Wikimedia's Phabricator and GitLab, and I further familiarized myself with open-source culture.",
    technologies: ['Python', 'Django', 'MediaWiki'],
    github: 'https://gitlab.wikimedia.org/repos/wikimedia-france/lingua-libre/lingua-libre/-/merge_requests/?sort=created_date&state=all&author_username=adityasuthar20&first_page_size=20',
    pr: 'https://phabricator.wikimedia.org/T354550',
    image: '/projects/Lingualibre-logo.png',
  },
  {
    title: 'GCompris (KDE)',
    description: "The Target activity is designed to help children practice precision and coordination skills by aiming and hitting a target. It was enhanced by adding a validation button for input values. Previously, the activity considered typed values as final results. I have implemented a feature that requires the user to click an `OK` button after entering the input. This prevents multiple submissions and ensures accurate evaluation.",
    technologies: ['C++', 'Qt', 'KDE'],
    github: 'https://invent.kde.org/education/gcompris/-/merge_requests/121',
    pr: 'https://phabricator.kde.org/T15418',
    image: '/projects/gcompris-logo.png',
  },
  {
    title: 'PVNet (OpenClimateFix)',
    description: "Open Climate Fix is a nonprofit research organization focused on using machine learning to accelerate the transition to a zero-carbon energy grid. PVNet is one of its key projects, aimed at improving photovoltaic (solar energy) forecasting using AI. In my contribution, I addressed Issue #210 by implementing improvements to enhance the system's functionality and accuracy. This contribution helps refine PVNet’s solar energy forecasting capabilities, supporting better integration of renewable energy into the power grid.",
    technologies: ['Python', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/openclimatefix/PVNet/pull/306',
    pr: 'https://github.com/openclimatefix/PVNet/issues/210',
    image: '/projects/openClimateFix-logo.jpg',
  },
];

export default function Contributions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contributions" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Source Contributions</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 bg-gray-800 flex items-center justify-center p-4">
                <img
                  src={contribution.image}
                  alt={contribution.title}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute inset-0 bg-accent/10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{contribution.title}</h3>
                <p className="text-text-secondary mb-4">{contribution.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {contribution.technologies.map((tech) => (
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
                    href={contribution.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                    title="Repository"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={contribution.pr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                    title="Pull Request"
                  >
                    <FaExternalLinkAlt className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 