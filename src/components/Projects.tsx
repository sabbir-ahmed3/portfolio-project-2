mport React from 'react';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  image?: string;
}

const Projects = () => {
  // Sample projects data
  const featuredProjects: Project[] = [
    {
      title: "Project One",
      description: "A featured project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus enim. Donec vitae nisi augue.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com",
      live: "https://project.com",
      featured: true,
      image: "https://placehold.co/600x400?text=Project+One"
    },
    {
      title: "Project Two",
      description: "Another featured project with a detailed description. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://project.com",
      featured: true,
      image: "https://placehold.co/600x400?text=Project+Two"
    },
  ];

  const otherProjects: Project[] = [
    {
      title: "Simple Project A",
      description: "A small web application built with React and styled with Tailwind CSS.",
      technologies: ["React", "Tailwind"],
      github: "https://github.com"
    },
    {
      title: "Utility Tool B",
      description: "A command-line utility tool for automating repetitive development tasks.",
      technologies: ["Node.js", "TypeScript"],
      github: "https://github.com"
    },
    {
      title: "Website C",
      description: "A responsive business website built for a local client.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Mobile App D",
      description: "A cross-platform mobile application built with React Native.",
      technologies: ["React Native", "Expo"],
      github: "https://github.com"
    },
    {
      title: "API Service E",
      description: "A RESTful API service for managing user data and authentication.",
      technologies: ["Express", "MongoDB"],
      github: "https://github.com"
    },
    {
      title: "Plugin F",
      description: "A browser extension for enhancing productivity and workflow.",
      technologies: ["JavaScript", "Browser API"],
      github: "https://github.com",
      live: "https://chrome.store.example"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        <span className="text-portfolio-teal font-mono text-xl mr-2">02.</span>
        My Projects
      </h2>
      
      <div className="space-y-32 mb-20">
        {featuredProjects.map((project, index) => (
          <div key={index} className={`relative grid md:grid-cols-12 items-center gap-6 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
            {/* Project image (alternating left/right) */}
            <div className={`md:col-span-7 relative ${
              index % 2 === 0 ? 'md:order-2' : 'md:order-1'
            }`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-portfolio-teal/20 rounded-md z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-md w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>
            
            {/* Project info (alternating left/right) */}
            <div className={`md:col-span-5 ${
              index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'
            }`}>
              <div className="space-y-3">
                <p className="font-mono text-portfolio-teal">Featured Project</p>
                <h3 className="text-2xl font-bold text-portfolio-lightestSlate">{project.title}</h3>
                <div className="bg-portfolio-lightNavy p-6 rounded-md shadow-lg">
                  <p className="text-portfolio-slate">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 text-sm font-mono text-portfolio-slate mt-4 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className={`flex gap-4 mt-4 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <Github className="h-5 w-5 text-portfolio-lightestSlate hover:text-portfolio-teal transition-colors" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink className="h-5 w-5 text-portfolio-lightestSlate hover:text-portfolio-teal transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-bold text-center mb-12">Other Noteworthy Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project, index) => (
          <Card key={index} className="bg-portfolio-lightNavy hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col p-6">
            <div className="flex justify-between items-center mb-6">
              <Folder className="h-10 w-10 text-portfolio-teal" />
              <div className="flex space-x-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Github className="h-5 w-5 text-portfolio-lightestSlate hover:text-portfolio-teal transition-colors" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink className="h-5 w-5 text-portfolio-lightestSlate hover:text-portfolio-teal transition-colors" />
                  </a>
                )}
              </div>
            </div>
            
            <h3 className="text-portfolio-lightestSlate text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-portfolio-slate flex-grow mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-portfolio-slate mt-auto">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
