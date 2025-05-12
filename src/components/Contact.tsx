
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-portfolio-teal mb-4">03. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-navy mb-6">Get In Touch</h2>
        <p className="text-portfolio-slate mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <Button 
          onClick={() => {
            window.location.href = 'mailto:your.email@example.com';
          }}
          className="bg-transparent hover:bg-portfolio-teal/10 border border-portfolio-teal text-portfolio-teal px-8 py-6 rounded font-mono text-lg"
        >
          <Mail className="mr-2 h-5 w-5" />
          Say Hello
        </Button>
      </div>
    </section>
  );
};

export default Contact;
