
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  altText: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA",
    date: "2022",
    image: "/lovable-uploads/nvidia_cert1.jpg", // Replace with actual image path
    altText: "NVIDIA Certificate - Getting Started with AI on Jetson Nano",
  },
  {
    id: 2,
    title: "Building Video AI Applications at the Edge on Jetson Nano",
    issuer: "NVIDIA",
    date: "2022",
    image: "/lovable-uploads/nvidia_cert2.jpg", // Replace with actual image path
    altText: "NVIDIA Certificate - Building Video AI Applications at the Edge on Jetson Nano",
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsDialogOpen(true);
  };

  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-2">My Certificates</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements in the field of AI and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <Card 
              key={cert.id} 
              className="overflow-hidden card-hover animate-fade-in-up cursor-pointer"
              onClick={() => openCertificate(cert)}
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.altText} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm">{cert.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedCertificate && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedCertificate.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <img 
                src={selectedCertificate.image} 
                alt={selectedCertificate.altText} 
                className="w-full object-contain"
              />
              <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                <p>Issued by: {selectedCertificate.issuer}</p>
                <p>Issued: {selectedCertificate.date}</p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Certificates;
