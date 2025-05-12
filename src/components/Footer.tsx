
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="py-6 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-portfolio-slate hover:text-portfolio-teal transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="text-sm text-portfolio-slate font-mono">
          <p>Designed & Built by Your Name</p>
          <p className="mt-1">© {currentYear} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
