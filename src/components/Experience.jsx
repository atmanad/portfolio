import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';

const experiences = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Cognizant Technology Solutions',
    location: 'Pune, India',
    period: '2021 - Present',
    description: [
      'Developing and maintaining enterprise web applications using React.js and .NET',
      'Collaborating with cross-functional teams to deliver high-quality software solutions',
      'Implementing CI/CD pipelines and cloud deployments on Azure',
      'Mentoring junior developers and conducting code reviews',
    ],
  },
  {
    type: 'education',
    title: 'B.Tech in Information Technology',
    organization: 'C. V. Raman Global University',
    location: 'Odisha, India',
    period: '2017 - 2021',
    description: [
      'Graduated with distinction in Information Technology',
      'Core Lead at Google Developer Student Club',
      'Participated in multiple hackathons and coding competitions',
      'Developed several academic and personal projects',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">My Journey</p>
          <h2 className="heading-secondary">Experience & Education</h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-dark-700" />

            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-dark-900 z-10" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="card p-6 hover:-translate-y-1">
                    {/* Icon & Period */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        {item.type === 'work' ? (
                          <HiBriefcase className="text-accent" size={20} />
                        ) : (
                          <HiAcademicCap className="text-accent" size={20} />
                        )}
                      </div>
                      <span className="text-accent text-sm font-medium">
                        {item.period}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary font-medium mb-1">
                      {item.organization}
                    </p>
                    <p className="text-text-muted text-sm mb-4">
                      {item.location}
                    </p>

                    {/* Description */}
                    <ul className="space-y-2">
                      {item.description.map((point, i) => (
                        <li
                          key={i}
                          className="text-text-secondary text-sm flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
