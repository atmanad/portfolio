import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiUsers } from 'react-icons/hi';

const highlights = [
  {
    icon: HiCode,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code.',
  },
  {
    icon: HiLightningBolt,
    title: 'Fast Delivery',
    description: 'Efficient development process with agile methodologies.',
  },
  {
    icon: HiUsers,
    title: 'Collaboration',
    description: 'Strong communication and teamwork skills.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">Get To Know</p>
            <h2 className="heading-secondary">About Me</h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 p-1">
                <div className="w-full h-full rounded-2xl bg-dark-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={require('../img/atman.jpg')}
                    alt="Atman Das"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-xl -z-10" />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with expertise in building 
                modern web applications. With a strong foundation in both frontend 
                and backend technologies, I create seamless digital experiences 
                that solve real-world problems.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Currently working at Cognizant, I specialize in React.js, .NET, 
                and cloud technologies. I'm always eager to learn new technologies 
                and take on challenging projects that push my boundaries.
              </p>
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6 mt-16"
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card p-6 text-center hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-text-primary font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
