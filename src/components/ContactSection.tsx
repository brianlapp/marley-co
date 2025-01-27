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
    // Let Netlify handle the form submission
    const form = e.target as HTMLFormElement;
    form.submit();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Section 1: Get in Touch */}
      <section className="py-16 md:py-24 bg-marley-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-marley-primary mb-6 leading-[0.95]">
              GET IN TOUCH
            </h2>
            <p className="text-lg font-sans text-marley-primary/80 mb-8 max-w-2xl mx-auto">
              Thank you for visiting Marley Co.! We're so excited to have you here as we prepare to launch our premium diaper bag collection. The overwhelming support and enthusiasm from our fans have been truly incredible—your excitement fuels our passion to deliver the very best for modern parents.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="py-16 md:py-24 bg-marley-cool">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-sans text-marley-primary mb-4">Stay in Touch</h3>
                <p className="font-sans text-marley-primary/80">
                  Have questions, feedback, or just want to say hi? We'd love to hear from you! Please feel free to reach out using the contact form.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-sans text-marley-primary">Shipping Across Canada</h3>
                <p className="font-sans text-marley-primary/80">
                  We're thrilled to announce that once our online store is live, we're hoping to offer shipping across Canada! Whether you're in bustling Toronto, the serene prairies of Saskatchewan, or the scenic coasts of British Columbia, Marley Co. will be there for you.
                </p>
              </div>
            </div>

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6 bg-white p-8 rounded-lg shadow-sm"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12 bg-white border-marley-primary/20"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12 bg-white border-marley-primary/20"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 bg-white border-marley-primary/20"
              />
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px] bg-white border-marley-primary/20"
              />
              <Button type="submit" className="w-full h-12 bg-[#FF5757] hover:bg-[#FF5757]/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 3: Stay Updated */}
      <section className="py-16 md:py-24 bg-marley-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <div>
              <h3 className="text-2xl font-sans text-marley-primary mb-4">Stay Updated</h3>
              <p className="font-sans text-marley-primary/80 mb-6">
                If you haven't already, don't forget to sign up for our mailing list to be the first to know about our launch, exclusive promotions, and parenting tips. Plus, get your $15 off coupon when you join the Marley Co. family!
              </p>
              <Button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-[#FF5757] hover:bg-[#FF5757]/90 text-white h-12 px-8"
              >
                Sign Up for Updates
              </Button>
            </div>

            <div className="pt-8 border-t border-marley-primary/10">
              <p className="text-lg font-sans text-marley-primary/80">
                Thank you for your patience as we work hard to bring you diaper bags that redefine style and functionality. We're beyond excited to grow this journey together with you.
              </p>
              <p className="mt-4 font-sans text-marley-primary">
                With love,<br />
                The Marley Co. Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};