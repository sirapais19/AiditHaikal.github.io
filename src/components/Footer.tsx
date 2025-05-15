
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Muhamad Aidit Haikal</h3>
            <p className="text-primary-foreground/70 text-sm mt-1">
              Aspiring Machine Learning Developer
            </p>
          </div>
          
          <div>
            <p className="text-primary-foreground/70 text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
            <p className="text-primary-foreground/50 text-xs mt-1">
              Made with ❤️ by Aidit Haikal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
