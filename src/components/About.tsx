
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 
    'TypeScript', 
    'React', 
    'Node.js',
    'HTML & CSS',
    'Tailwind CSS',
    'Next.js',
    'GraphQL'
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="text-portfolio-teal font-mono text-xl mr-2">01.</span>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-portfolio-slate">
              Hello! My name is Your Name and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2010 when I decided to try editing custom 
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            
            <p className="text-portfolio-slate">
              Fast-forward to today, and I've had the privilege of working at 
              an advertising agency, a start-up, a huge corporation, and a student-led design studio. 
              My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            
            <p className="text-portfolio-slate">
              I also recently launched a course that covers everything you need to build a web app with the React ecosystem.
            </p>
            
            <p className="text-portfolio-slate">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 gap-2 mt-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-portfolio-teal mr-2 flex-shrink-0" />
                  <span className="text-sm text-portfolio-slate font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden w-full max-w-xs mx-auto">
              <div className="absolute inset-0 bg-portfolio-teal/20 rounded-md z-10 group-hover:bg-transparent transition-colors duration-300"></div>
              <img 
                src="https://placehold.co/300x300?text=Your+Photo" 
                alt="Profile" 
                className="rounded-md w-full grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-portfolio-teal rounded-md transform translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
