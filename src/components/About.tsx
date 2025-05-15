
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="md:w-2/5 animate-fade-in-up">
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/f4cd730d-47f2-4731-a4c4-5d0275d2751a.png"
                  alt="Muhamad Aidit Haikal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-3/5 animate-fade-in-up animation-delay-200">
            <h2 className="text-3xl font-bold text-primary mb-2">About Me</h2>
            <div className="h-1 w-20 bg-secondary mb-6"></div>
            
            <p className="text-muted-foreground mb-6">
              I'm a passionate Computer Science student specializing in Multimedia Software at Universiti Malaysia Pahang AL-Sultan Abdullah. With a keen interest in AI and machine learning, I focus on creating intelligent solutions that blend visual communication with technical excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-medium text-primary mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">Bachelor's in Computer Science (Multimedia Software), UMPSA</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm">Freelance Java OOP systems development</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Languages</h3>
                <p className="text-muted-foreground text-sm">Malay (Native), English (Fluent)</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">Pasir Gudang, Johor, Malaysia</p>
              </div>
            </div>
            
            <Card className="bg-primary/5 border-none animate-fade-in-up animation-delay-400">
              <CardContent className="p-4 flex items-center">
                <div className="mr-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Fun Fact</h4>
                  <p className="text-muted-foreground text-sm">I love blending art & technology to create impactful solutions that solve real-world problems.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
