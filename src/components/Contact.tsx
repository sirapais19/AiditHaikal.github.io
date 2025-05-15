
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Feel free to contact me for any project or collaboration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-6 text-primary">Send Me A Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" className="bg-muted/30" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" className="bg-muted/30" />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" className="bg-muted/30" />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="min-h-[150px] bg-muted/30" 
                />
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
            <div className="grid gap-4">
              <Card className="card-hover">
                <CardContent className="flex items-center p-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">Pasir Gudang, Johor, Malaysia</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="flex items-center p-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+6013-3694584</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="flex items-center p-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">aidithaikal52@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8 text-primary">Connect With Me</h3>
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#333] text-white hover:opacity-90 transition-opacity"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            
            <Card className="mt-8 bg-primary text-primary-foreground card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Looking for Java OOP Development?</CardTitle>
                <p className="text-sm text-primary-foreground/80 mt-2">
                  I specialize in creating custom Java-based systems for various business needs.
                  Let's discuss how I can help with your next project.
                </p>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" asChild>
                  <a href="mailto:aidithaikal52@gmail.com">Email Me</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
