
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-portfolio-teal font-mono mb-5">Hi, my name is</h2>
      </div>
      <div className="fade-in" style={{ animationDelay: '0.4s' }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-navy mb-4">
          Your Name.
        </h1>
      </div>
      <div className="fade-in" style={{ animationDelay: '0.6s' }}>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate mb-8">
          I build things for the web.
        </h1>
      </div>
      <div className="fade-in max-w-xl" style={{ animationDelay: '0.8s' }}>
        <p className="text-portfolio-slate text-lg mb-12">
          I'm a web developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on creating accessible, human-centered products.
        </p>
      </div>
      <div className="fade-in" style={{ animationDelay: '1s' }}>
        <Button 
          onClick={() => {
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-transparent hover:bg-portfolio-teal/10 border border-portfolio-teal text-portfolio-teal px-7 py-5 rounded font-mono text-base"
        >
          Check out my work
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
