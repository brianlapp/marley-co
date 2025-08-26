import { Check } from "lucide-react";
import diaperBagHero from "@/assets/diaper-bag-hero.jpg";

export const GiveawayDetails = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-marley-muted via-white to-marley-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-marley-dark mb-6">
            About the Giveaway
          </h2>
          <p className="text-lg lg:text-xl text-marley-primary max-w-3xl mx-auto leading-relaxed">
            Enter for a chance to win a Marley Co diaper bag in our most popular colour. No purchase required. One simple form. It takes less than a minute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Prize details with modern cards */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-accent-red/30">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-marley-dark">
                  What You Could Win
                </h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-4 p-3 bg-white backdrop-blur-sm rounded-xl border border-accent-red/30 hover:bg-white/90 transition-all duration-300">
                  <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-marley-dark font-medium">1 x Marley Co Premium Diaper Bag</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white backdrop-blur-sm rounded-xl border border-accent-red/30 hover:bg-white/90 transition-all duration-300">
                  <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-marley-dark font-medium">Matching changing pad</span>
                </div>
              </div>

              {/* Image directly under the pills */}
              <div className="relative group">
                <img 
                  src={diaperBagHero} 
                  alt="Stylish Marley Co diaper bag - what you could win"
                  className="w-full h-auto rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Features with modern styling */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-accent-red/30">
              <h3 className="text-2xl font-bold text-marley-dark mb-6">
                What Makes Marley Co Different
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white backdrop-blur-sm rounded-xl border border-accent-red/30 hover:bg-white/90 transition-all duration-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark">Designed for real life with spill-resistant, easy-wipe interior and exterior</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white backdrop-blur-sm rounded-xl border border-accent-red/30 hover:bg-white/90 transition-all duration-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark">Smart organization including insulated bottle pockets and quick-grab front zip</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white backdrop-blur-sm rounded-xl border border-accent-red/30 hover:bg-white/90 transition-all duration-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark">Padded laptop sleeve so your work and parent life stay in one stylish place</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white backdrop-blur-sm rounded-xl border border-accent-red/30 hover:bg-white/90 transition-all duration-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark">Convertible carry options backpack or top handle for hands-free comfort</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white backdrop-blur-sm rounded-xl border border-accent-red/30 hover:bg-white/90 transition-all duration-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-marley-dark">Premium hardware and stitching for durability that lasts beyond the baby stage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};