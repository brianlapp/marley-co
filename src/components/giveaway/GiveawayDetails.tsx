import { Check } from "lucide-react";

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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-marley-light/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF5757] to-[#FF5757]/80 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-marley-dark">
                  What You Could Win
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-marley-dark">1 x Marley Co Premium Diaper Bag</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-marley-dark">Matching changing pad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features with modern styling */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-marley-light/50">
              <h3 className="text-2xl font-bold text-marley-dark mb-6">
                What Makes Marley Co Different
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-marley-dark">Designed for real life with spill-resistant, easy-wipe interior and exterior</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-marley-dark">Smart organization including insulated bottle pockets and quick-grab front zip</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-marley-dark">Padded laptop sleeve so your work and parent life stay in one stylish place</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-marley-dark">Convertible carry options backpack or top handle for hands-free comfort</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
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