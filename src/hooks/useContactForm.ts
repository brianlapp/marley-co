import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: encode({ 
          "form-name": "contact",
          ...formData
        })
      });

      console.log('Response:', response);

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData(initialFormData);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
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