import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { Navigation } from "@/components/Navigation";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-marley-light">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;