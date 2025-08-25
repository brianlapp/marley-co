import { GiveawayForm } from "./GiveawayForm";
import { Check } from "lucide-react";
import diaperBagHero from "@/assets/diaper-bag-hero.jpg";

export const GiveawayHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-marley-light to-marley-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content and form grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-center lg:text-left">
            <h1 className="text-marley-dark mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Win a Stylish Marley Co Diaper Bag!
            </h1>
            <p className="text-lg sm:text-xl text-marley-primary leading-relaxed mb-8">
              The perfect mix of fashion and function — designed for parents who want it all.
            </p>
            
            {/* Form appears here on mobile only */}
            <div className="lg:hidden mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-[#FF5757]">
                <GiveawayForm />
              </div>
            </div>
            
            <p className="text-lg text-marley-primary mb-8 leading-relaxed">
              Enter now for your chance to win a premium Marley Co diaper bag — the ultimate parenting essential that keeps you organized without sacrificing style. With spacious compartments, durable design, and a sleek modern look, this bag is built to handle everything parenthood throws your way.
            </p>
            <p className="text-lg font-medium text-marley-dark mb-8">
              Don't miss out — it takes less than 30 seconds to enter!
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-marley-primary">Spacious & practical design</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-marley-primary">Modern, fashion-forward style</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-marley-primary">Premium quality you'll love carrying every day</span>
              </div>
            </div>
          </div>
          
          {/* Form appears here on desktop only */}
          <div className="hidden lg:block bg-white rounded-lg shadow-lg p-8 border-2 border-[#FF5757]">
            <GiveawayForm />
          </div>
        </div>
      </div>
    </section>
  );
};