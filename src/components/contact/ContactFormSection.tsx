import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";

export const ContactFormSection = () => {
  const { formData, setFormData, isSubmitting, handleSubmit } = useContactForm();

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-marley-cool">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-sans text-marley-primary mb-3 md:mb-4">Stay in Touch</h3>
              <p className="font-sans text-marley-primary/80">
                Have questions, feedback, or just want to say hi? We'd love to hear from you! Please feel free to reach out using the contact form.
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-sans text-marley-primary">Shipping Across Canada</h3>
              <p className="font-sans text-marley-primary/80">
                We're thrilled to announce that once our online store is live, we're hoping to offer shipping across Canada! Whether you're in bustling Toronto, the serene prairies of Saskatchewan, or the scenic coasts of British Columbia, Marley Co. will be there for you.
              </p>
            </div>
          </div>

          <form 
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-sm"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" />
            </div>
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
              className="min-h-[120px] md:min-h-[150px] bg-white border-marley-primary/20"
            />
            <Button 
              type="submit" 
              className="w-full h-12 bg-[#FF5757] hover:bg-[#FF5757]/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};