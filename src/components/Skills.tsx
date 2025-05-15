
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const programmingSkills = [
    { name: "Java (OOP)", level: 90 },
    { name: "Python", level: 85 },
    { name: "C++", level: 75 },
    { name: "HTML/CSS", level: 80 },
    { name: "PHP", level: 70 },
  ];
  
  const mlSkills = [
    { name: "TensorFlow", level: 85 },
    { name: "PyTorch", level: 75 },
    { name: "OpenCV", level: 80 },
  ];
  
  const otherSkills = [
    { name: "MySQL", icon: "database" },
    { name: "Firebase", icon: "server" },
    { name: "Git", icon: "git-branch" },
    { name: "Unity", icon: "gamepad-2" },
    { name: "Unreal Engine", icon: "dices" },
    { name: "SAP S/4HANA", icon: "activity" },
  ];
  
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of technical skills through academic studies, 
            freelance projects, and continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-6 text-primary">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="text-xl font-semibold mb-6 text-primary">Machine Learning & AI</h3>
            <div className="space-y-6">
              {mlSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-6 mt-10 text-primary">Other Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {otherSkills.map((skill, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="flex items-center p-4">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 bg-secondary/10 rounded-md">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-secondary"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
