import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-marley-light">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;