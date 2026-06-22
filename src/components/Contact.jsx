import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaBloggerB } from 'react-icons/fa';

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'atmanad0001@gmail.com',
    href: 'mailto:atmanad0001@gmail.com',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+91 7008635343',
    href: 'tel:7008635343',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Pune, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/atmanad',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/atmanad/',
  },
  {
    icon: FaBloggerB,
    label: 'Blog',
    href: 'https://anewbieprogrammer.blogspot.com/',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:atmanad0001@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">Get In Touch</p>
          <h2 className="heading-secondary">Contact Me</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mt-4">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Let's talk about everything!
            </h3>
            <p className="text-text-secondary mb-8">
              Don't like forms? Send me an email directly or connect with me on
              social media. I'll get back to you as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-text-primary hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-primary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-text-muted text-sm mb-4">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-700 hover:bg-accent rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="card p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-secondary text-sm mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-text-secondary text-sm mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-text-secondary text-sm mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-text-secondary text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <HiPaperAirplane className="rotate-90" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
