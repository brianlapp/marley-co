import { EmailCapture } from "./EmailCapture";
import { useEffect } from "react";

export const HeroSection = () => {
  useEffect(() => {
    // Create an image object to test loading
    const img = new Image();
    img.src = '/lovable-uploads/768adfd4-910f-4d6e-a1b8-3bdfb9878afe.png';
    
    img.onload = () => {
      console.log('Background image loaded successfully');
      console.log('Image dimensions:', img.width, 'x', img.height);
    };
    
    img.onerror = (error) => {
      console.error('Error loading background image:', error);
      console.log('Attempted image path:', img.src);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-marley-light">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/768adfd4-910f-4d6e-a1b8-3bdfb9878afe.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Lighter overlay for softer look */}
      </div>

      {/* Logo */}
      <div className="w-48 md:w-64 mb-12 animate-fadeIn relative z-10">
        <img 
          src="/lovable-uploads/cab34784-9e56-4008-8fd0-49fbefe2dedd.png" 
          alt="Marley Co. Logo" 
          className="w-full h-auto"
          onError={(e) => console.error('Logo image failed to load:', e)}
        />
      </div>

      <div className="text-center space-y-6 max-w-2xl animate-slideUp relative z-10" style={{ animationDelay: "0.2s" }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-marley-dark leading-tight tracking-wide">
          ONLINE STORE COMING SOON!
        </h1>
        <p className="text-xl md:text-2xl text-marley-primary font-light tracking-wider">
          Get In Early! Register Today for a 25% Coupon
        </p>
        <div className="flex justify-center pt-4">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
};