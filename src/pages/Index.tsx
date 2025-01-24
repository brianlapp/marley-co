import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { Gallery } from "@/components/Gallery";

const Index = () => {
  return (
    <main className="min-h-screen bg-marley-light">
      <HeroSection />
      <AboutSection />
      <Gallery />
    </main>
  );
};

export default Index;