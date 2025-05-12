
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="font-mono text-lg font-bold text-portfolio-navy">
              <span className="text-portfolio-teal">{'<'}</span>
              Portfolio
              <span className="text-portfolio-teal">{' />'}</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-portfolio-slate hover:text-portfolio-teal transition-colors font-medium"
              >
                <span className="text-portfolio-teal mr-1">0{index + 1}.</span> {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-portfolio-teal text-portfolio-teal rounded hover:bg-portfolio-teal/10 transition-colors"
            >
              Resume
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-portfolio-navy" />
              ) : (
                <Menu className="h-6 w-6 text-portfolio-navy" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        'fixed inset-0 bg-white/95 z-50 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        <nav className="flex flex-col space-y-8 items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-portfolio-navy hover:text-portfolio-teal transition-colors text-xl font-medium"
            >
              <span className="text-portfolio-teal mr-1">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-portfolio-teal text-portfolio-teal rounded hover:bg-portfolio-teal/10 transition-colors text-xl"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
