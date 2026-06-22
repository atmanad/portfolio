import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiCsharp,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiAzuredevops,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      { name: 'C#', icon: SiCsharp, color: '#239120' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'Azure', icon: SiAzuredevops, color: '#0078D4' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">What I Know</p>
          <h2 className="heading-secondary">Skills & Technologies</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-4">
            I've worked with a variety of technologies in the web development world.
            Here are the tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="card p-4 flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-1"
                  >
                    <skill.icon
                      size={40}
                      className="transition-colors duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
