import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  newsletter: boolean;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  newsletter: false
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    
    try {
      // Let the form submit naturally to Netlify
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData(initialFormData);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    handleSubmit
  };
};