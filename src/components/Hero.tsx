
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-grid">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-6">
          <div className="md:w-1/2 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4">
              Muhamad Aidit Haikal
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-normal text-muted-foreground">
                Bin Zainuddin
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary font-medium mt-2 mb-4">
              Aspiring Machine Learning Developer
            </p>
            
            <p className="text-muted-foreground max-w-lg mb-8">
              Detail-oriented Computer Science student with a passion for AI-driven solutions and creative problem-solving.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="flex items-center gap-2" asChild>
                <a href="/resume.pdf" download="Aidit_RESUME.pdf">
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-up animation-delay-200">
            <div className="relative">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-secondary/20 shadow-xl">
                <img
                  src="/lovable-uploads/f4cd730d-47f2-4731-a4c4-5d0275d2751a.png"
                  alt="Muhamad Aidit Haikal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Machine Learning & AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
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
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
