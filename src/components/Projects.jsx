import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Tweet App',
    description:
      'Social media application with user-centric functionalities like posting, viewing, liking, and replying to tweets.',
    image: require('../img/tweetapp1.png'),
    tags: ['React', 'Redux', 'SQL', 'Docker', 'Azure'],
    liveUrl: 'https://tweetapp-atman.netlify.app/',
    repoUrl: 'https://github.com/atmanad',
  },
  {
    title: 'Spend Insight',
    description:
      'A spend tracker app for budget control with data visualization and expense categorization.',
    image: require('../img/spendInsight1.png'),
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    liveUrl: 'https://spend-insight.netlify.app/',
    repoUrl: 'https://github.com/atmanad',
  },
  {
    title: 'DSC CVRGU',
    description:
      'Official website for Google Developer Student Club at C V Raman Global University.',
    image: require('../img/dsccvrgu1.png'),
    tags: ['React', 'Bootstrap', 'Firebase'],
    liveUrl: 'https://dsc-cvrgu.netlify.app/',
    repoUrl: 'https://github.com/atmanad',
  },
  {
    title: 'My Doc',
    description:
      'COVID-19 information platform with appointment scheduling, chatbot, and e-commerce features.',
    image: require('../img/mydoc1.png'),
    tags: ['MERN Stack', 'SendGrid', 'Heroku'],
    liveUrl: 'https://ad-mydoc.netlify.app/',
    repoUrl: 'https://github.com/atmanad',
  },
  {
    title: 'Mysuru Tourism',
    description:
      'Tourism website with weather integration, chatbot assistance, and travel recommendations.',
    image: require('../img/mysuru1.png'),
    tags: ['MERN', 'Flask', 'DialogFlow', 'APIs'],
    liveUrl: 'https://tourism-mysuru.netlify.app/',
    repoUrl: 'https://github.com/atmanad',
  },
  {
    title: 'Virtual Police Station',
    description:
      'Online platform for complaint registration, NOC applications, and virtual assistance.',
    image: require('../img/vps1.png'),
    tags: ['React', 'Node.js', 'SendGrid', 'Firebase'],
    liveUrl: 'https://client-vps.netlify.app/',
    repoUrl: 'https://github.com/atmanad',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">My Recent Work</p>
          <h2 className="heading-secondary">Featured Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-4">
            Here are some of the projects I've worked on. Each project represents
            a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent rounded-full text-white hover:bg-accent-dark transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <HiExternalLink size={20} />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-700 rounded-full text-white hover:bg-dark-600 transition-colors"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/atmanad"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
