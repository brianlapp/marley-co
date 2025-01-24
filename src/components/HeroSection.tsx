import { EmailCapture } from "./EmailCapture";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-marley-light to-white/50 -z-10" />
      <div className="w-32 h-32 mb-8 animate-fadeIn">
        {/* Replace with actual logo */}
        <div className="w-full h-full bg-marley-primary/10 rounded-full flex items-center justify-center">
          <span className="text-2xl font-serif text-marley-primary">Marley Co.</span>
        </div>
      </div>
      <div className="text-center space-y-6 max-w-2xl animate-slideUp" style={{ animationDelay: "0.2s" }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-marley-primary leading-tight">
          ONLINE STORE COMING SOON!
        </h1>
        <p className="text-xl md:text-2xl text-marley-primary/80">
          Get In Early! Register Today for a 25% Coupon
        </p>
        <div className="flex justify-center pt-4">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
};