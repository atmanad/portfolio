import React from 'react';
import { FaGithub, FaLinkedin, FaBloggerB, FaHeart } from 'react-icons/fa';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/atmanad', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/atmanad/', label: 'LinkedIn' },
  { icon: FaBloggerB, href: 'https://anewbieprogrammer.blogspot.com/', label: 'Blog' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800/50 border-t border-dark-700">
      <div className="container-custom py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-text-primary hover:text-accent transition-colors"
          >
            ATMAN<span className="text-accent">.</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-accent transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-700 hover:bg-accent rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-text-muted text-sm">
            <p>
              © {currentYear} Atman Das. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <FaHeart className="text-accent" size={14} /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
