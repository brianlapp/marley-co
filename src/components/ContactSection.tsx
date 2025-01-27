import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "./ui/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-marley-primary mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-marley-primary/80 mb-8">
            Thank you for visiting Marley Co.! We're so excited to have you here as we prepare to launch our premium diaper bag collection. The overwhelming support and enthusiasm from our fans have been truly incredible—your excitement fuels our passion to deliver the very best for modern parents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Stay in Touch</h3>
            <p className="mb-6">
              Have questions, feedback, or just want to say hi? We'd love to hear from you! Please feel free to reach out using the contact form.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Shipping Across Canada</h3>
              <p>
                We're thrilled to announce that once our online store is live, we're hoping to offer shipping across Canada! Whether you're in bustling Toronto, the serene prairies of Saskatchewan, or the scenic coasts of British Columbia, Marley Co. will be there for you.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[150px]"
            />
            <Button type="submit" className="w-full bg-[#FF5757] hover:bg-[#FF5757]/90">
              Send Message
            </Button>
          </form>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
          <p className="mb-6">
            If you haven't already, don't forget to sign up for our mailing list to be the first to know about our launch, exclusive promotions, and parenting tips. Plus, get your $15 off coupon when you join the Marley Co. family!
          </p>
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#FF5757] hover:bg-[#FF5757]/90"
          >
            Sign Up for Updates
          </Button>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg">
            Thank you for your patience as we work hard to bring you diaper bags that redefine style and functionality. We're beyond excited to grow this journey together with you.
          </p>
          <p className="mt-4 font-semibold">
            With love,<br />
            The Marley Co. Team
          </p>
        </div>
      </div>
    </section>
  );
};