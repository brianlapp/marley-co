import { EmailCapture } from "./EmailCapture";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/768adfd4-910f-4d6e-a1b8-3bdfb9878afe.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
      </div>

      {/* Logo */}
      <div className="w-64 md:w-80 mb-12 animate-fadeIn">
        <img 
          src="/lovable-uploads/cab34784-9e56-4008-8fd0-49fbefe2dedd.png" 
          alt="Marley Co. Logo" 
          className="w-full h-auto"
        />
      </div>

      <div className="text-center space-y-6 max-w-2xl animate-slideUp" style={{ animationDelay: "0.2s" }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
          ONLINE STORE COMING SOON!
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          Get In Early! Register Today for a 25% Coupon
        </p>
        <div className="flex justify-center pt-4">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
};