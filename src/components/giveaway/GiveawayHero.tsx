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
                FREE GIVEAWAY
              </div>
              <h1 className="text-marley-dark text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight">
                Win a Stylish Marley Co 
                <span className="block text-[#FF5757] font-black">Diaper Bag!</span>
              </h1>
              <p className="text-xl sm:text-2xl text-marley-primary font-medium leading-relaxed">
                The perfect mix of fashion and function — designed for parents who want it all.
              </p>
            </div>
            
            {/* Mobile form */}
            <div className="lg:hidden">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20 hover:shadow-3xl transition-all duration-300">
                <GiveawayForm />
              </div>
            </div>
            
            {/* Mobile only content */}
            <div className="lg:hidden space-y-6">
              <p className="text-lg text-marley-dark leading-relaxed">
                Enter now for your chance to win a premium Marley Co diaper bag — the ultimate parenting essential 
                that keeps you organized without sacrificing style. With spacious compartments, durable design, and 
                a sleek modern look, this bag is built to handle everything parenthood throws your way.
              </p>
              
              <p className="text-lg text-marley-dark font-medium">
                Don't miss out — it takes less than 30 seconds to enter!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-marley-dark">Spacious & practical design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-marley-dark">Modern, fashion-forward style</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-marley-dark">Premium quality you'll love carrying every day</span>
                </div>
              </div>
            </div>

            {/* Urgency element */}
            <div className="bg-gradient-to-r from-[#FF5757] to-[#FF5757]/80 text-white rounded-xl p-4 text-center lg:hidden">
              <p className="font-bold text-lg">Limited Time Only</p>
              <p className="text-sm opacity-90">Giveaway ends soon - Enter now!</p>
            </div>
          </div>
          
          {/* Desktop form and benefits */}
          <div className="hidden lg:block space-y-8">
            {/* Value proposition aligned with form center */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-lg text-marley-dark leading-relaxed mb-4">
                Enter now for your chance to win a premium Marley Co diaper bag — the ultimate parenting essential 
                that keeps you organized without sacrificing style. With spacious compartments, durable design, and 
                a sleek modern look, this bag is built to handle everything parenthood throws your way.
              </p>
              
              <p className="text-lg text-marley-dark font-medium mb-4">
                Don't miss out — it takes less than 30 seconds to enter!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-marley-dark">Spacious & practical design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-marley-dark">Modern, fashion-forward style</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-marley-dark">Premium quality you'll love carrying every day</span>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <GiveawayForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};