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

const encode = (data: Record<string, string | boolean>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(String(data[key])))
    .join("&");
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify forms
      const netlifyResponse = await fetch('/', {
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

      if (!netlifyResponse.ok) {
        throw new Error('Form submission failed');
      }

      // If newsletter checkbox is checked, submit to Campaign Monitor
      if (formData.newsletter) {
        const campaignMonitorResponse = await fetch('/.netlify/functions/subscribe-campaign-monitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
          }),
        });

        if (!campaignMonitorResponse.ok) {
          const error = await campaignMonitorResponse.json();
          throw new Error(error.message || 'Newsletter subscription failed');
        }
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData(initialFormData);
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again.",
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