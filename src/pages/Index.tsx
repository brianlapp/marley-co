import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-marley-light">
      <HeroSection />
      <AboutSection />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;