import { GiveawayForm } from "./GiveawayForm";
import { Check } from "lucide-react";
import diaperBagHero from "@/assets/diaper-bag-hero.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const GiveawayHero = () => {
  return (
    <section 
      className="pt-20 pb-20 relative overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-marley-light/85 via-marley-light/75 to-marley-muted/90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Content and form grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Hero headline with excitement */}
            <div className="space-y-4">
              <div className="inline-block bg-[#FF5757] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse">
                🎁 FREE GIVEAWAY
              </div>
              <h1 className="text-marley-dark text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight">
                Win the Ultimate
                <span className="block text-[#FF5757] font-black">Diaper Bag</span>
              </h1>
              <p className="text-xl sm:text-2xl text-marley-primary font-medium leading-relaxed">
                Fashion meets function — designed for parents who refuse to compromise.
              </p>
            </div>
            
            {/* Mobile form */}
            <div className="lg:hidden">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20 hover:shadow-3xl transition-all duration-300">
                <GiveawayForm />
              </div>
            </div>
            
            {/* Value proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-lg text-marley-dark font-medium mb-4">
                🚀 Enter in under 30 seconds and win:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-marley-dark font-medium">Premium Marley Co diaper bag ($180 value)</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-marley-dark font-medium">Matching premium changing pad</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-marley-dark font-medium">Early access to future drops</span>
                </div>
              </div>
            </div>

            {/* Urgency element */}
            <div className="bg-gradient-to-r from-[#FF5757] to-[#FF5757]/80 text-white rounded-xl p-4 text-center">
              <p className="font-bold text-lg">⏰ Limited Time Only</p>
              <p className="text-sm opacity-90">Giveaway ends soon - Enter now!</p>
            </div>
          </div>
          
          {/* Desktop form - enhanced */}
          <div className="hidden lg:block">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <GiveawayForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};