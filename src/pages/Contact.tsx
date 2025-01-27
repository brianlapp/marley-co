import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Contact = () => {
  return (
    <main className="min-h-screen bg-marley-light">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Contact;