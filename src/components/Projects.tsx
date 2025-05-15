
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "VegeScale with AI",
      description: "Final Year Project: AI-driven vegetable scale with automated labeling and price calculations.",
      image: "https://images.unsplash.com/photo-1617957689233-207e3cd3c610?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Academic",
      tags: ["TensorFlow", "Computer Vision", "Python"],
      github: "https://github.com/0xSofea/vegeScale.git"
    },
    {
      title: "Delivery System for Pet",
      description: "Java OOP-based application for pet delivery services with tracking capabilities.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Freelance",
      tags: ["Java", "OOP", "NetBeans"],
      github: "https://github.com/sirapais19/Delivery-system-for-pet.git"
    },
    {
      title: "Car Rental System",
      description: "Complete management system for vehicle rentals, including booking and billing.",
      image: "https://images.unsplash.com/photo-1551043077-28868719d3c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Freelance",
      tags: ["Java", "OOP", "MySQL"],
      github: "https://github.com/sirapais19/Car-Rental.git"
    },
    {
      title: "Library Management System",
      description: "Comprehensive solution for library inventory, borrowing and user management.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Freelance",
      tags: ["Java", "OOP", "Database"],
      github: "https://github.com/sirapais19/LibraryManagementSystem.git"
    },
    {
      title: "The Party: Anytime, Anywhere",
      description: "Mobile event app enabling users to discover, create and manage events.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Academic",
      tags: ["Mobile Dev", "UI/UX", "Firebase"]
    },
    {
      title: "3D Animation: Exam Day in Kindergarten",
      description: "Animated short film created using Autodesk Maya showcasing storytelling abilities.",
      image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Academic",
      tags: ["3D", "Animation", "Autodesk Maya"]
    },
  ];
  
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my academic and freelance projects that highlight my skills and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden card-hover animate-fade-in-up flex flex-col" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                    {project.category}
                  </Badge>
                </div>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                {project.github && (
                  <div className="mt-auto">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full"
                    >
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full bg-primary/5 hover:bg-primary/10 text-primary border-primary/20 hover:border-primary/30 hover:shadow-sm transition-all group"
                      >
                        <Github size={16} className="mr-1 group-hover:translate-x-0.5 transition-transform" />
                        View on GitHub
                      </Button>
                    </a>
                  </div>
                )}
              </CardHeader>
              <CardFooter className="flex gap-2 flex-wrap">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-none">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
