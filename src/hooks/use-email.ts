
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from '@/hooks/use-toast';

// EmailJS service configuration
const SERVICE_ID = "service_id"; // Replace with your EmailJS service ID
const TEMPLATE_ID = "template_id"; // Replace with your EmailJS template ID
const USER_ID = "user_id"; // Replace with your EmailJS user ID

interface EmailFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export const useEmail = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (data: EmailFormData) => {
    setLoading(true);

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || `New Contact Message from ${data.name}`,
        message: data.message,
        to_email: 'aidithaikal52@gmail.com'
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );

      toast({
        title: "Message Sent!",
        description: "Your message has been sent successfully.",
      });

      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact directly via email.",
        variant: "destructive",
      });
      
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading };
};
