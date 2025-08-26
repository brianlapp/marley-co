import { GiveawayForm } from "./GiveawayForm";
import { Check } from "lucide-react";
import diaperBagHero from "@/assets/diaper-bag-hero.jpg";
import heroBackground from "@/assets/new-hero-background.jpg";

export const GiveawayHero = () => {
  return (
    <section 
      className="pt-16 pb-12 relative overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-marley-light/85 via-marley-light/75 to-marley-muted/90 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        {/* Content and form grid */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-4">
            {/* Hero headline with excitement */}
            <div className="space-y-3">
              <div className="inline-block bg-accent-red text-accent-red-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                FREE GIVEAWAY
              </div>
              <h1 className="font-headline text-marley-dark text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-3">
                Win a Stylish <span className="whitespace-nowrap">Marley Co</span>
                <span className="block text-accent-red font-black">Diaper Bag!</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl text-marley-primary font-medium leading-relaxed">
                The perfect mix of fashion and function — designed for parents who want it all.
              </p>
            </div>
            
            {/* Desktop value proposition - moved to left side */}
            <div className="hidden lg:block bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-accent-red/30">
              <p className="text-base text-marley-dark leading-relaxed mb-4">
                Enter now for your chance to win a premium Marley Co diaper bag — the ultimate parenting essential 
                that keeps you organized without sacrificing style. With spacious compartments, durable design, and 
                a sleek modern look, this bag is built to handle everything parenthood throws your way.
              </p>
              
              <p className="font-headline text-lg text-marley-dark font-semibold mb-4">
                Don't miss out — it takes less than 30 seconds to enter!
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-accent-red/30 hover:bg-marley-light/20 transition-all duration-300">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark font-medium">Spacious & practical design</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-accent-red/30 hover:bg-marley-light/20 transition-all duration-300">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark font-medium">Modern, fashion-forward style</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-accent-red/30 hover:bg-marley-light/20 transition-all duration-300">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark font-medium">Premium quality you'll love carrying <span className="whitespace-nowrap">every day</span></span>
                </div>
              </div>
            </div>
            
            {/* Mobile form */}
            <div className="lg:hidden mt-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-accent-red/30 hover:shadow-2xl transition-all duration-300">
                <GiveawayForm />
              </div>
            </div>
            
            {/* Mobile only content */}
            <div className="lg:hidden space-y-4 mt-6">
              <p className="text-sm text-marley-dark leading-relaxed">
                Enter now for your chance to win a premium Marley Co diaper bag — the ultimate parenting essential 
                that keeps you organized without sacrificing style. With spacious compartments, durable design, and 
                a sleek modern look, this bag is built to handle everything parenthood throws your way.
              </p>
              
              <p className="font-headline text-sm text-marley-dark font-semibold mb-3">
                Don't miss out — it takes less than 30 seconds to enter!
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark text-sm font-medium">Spacious & practical design</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark text-sm font-medium">Modern, fashion-forward style</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark text-sm font-medium">Premium quality you'll love carrying <span className="whitespace-nowrap">every day</span></span>
                </div>
              </div>
            </div>

            {/* Urgency element - Mobile only */}
            <div className="bg-gradient-to-r from-accent-red to-accent-red/80 text-accent-red-foreground rounded-xl p-4 text-center lg:hidden">
              <p className="font-bold text-lg">Limited Time Only</p>
              <p className="text-sm opacity-90">Giveaway ends soon - Enter now!</p>
            </div>
          </div>
          
          {/* Right Column - Desktop Form Only */}
          <div className="hidden lg:flex lg:flex-col">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-accent-red/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <GiveawayForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};