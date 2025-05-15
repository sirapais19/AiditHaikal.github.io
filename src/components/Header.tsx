
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-primary shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className={cn(
          "font-bold text-xl transition-colors",
          scrolled ? "text-white" : "text-primary"
        )}>
          Aidit<span className="text-secondary">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                scrolled ? "text-white/90 hover:text-white" : "text-primary hover:text-secondary"
              )}
            >
              {item.label}
            </a>
          ))}
          <Button 
            asChild
            variant={scrolled ? "outline" : "default"} 
            size="sm"
          >
            <a href="#contact">
              Contact Me
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant={scrolled ? "outline" : "ghost"} 
              className="md:hidden" 
              size="icon"
            >
              <Menu className={scrolled ? "text-white" : "text-primary"} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium py-2 hover:text-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-4">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
