import { Check } from "lucide-react";

export const GiveawayDetails = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-marley-muted via-white to-marley-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-marley-dark mb-6">
            What Makes This <span className="text-[#FF5757]">Worth Winning?</span>
          </h2>
          <p className="text-xl text-marley-primary max-w-3xl mx-auto leading-relaxed">
            This isn't just another diaper bag. It's the premium parenting essential that busy parents rave about.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Prize details with modern cards */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-marley-light/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF5757] to-[#FF5757]/80 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🎁</span>
                </div>
                <h3 className="text-2xl font-bold text-marley-dark">
                  What You Could Win
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-marley-dark">Marley Co Premium Diaper Bag</p>
                    <p className="text-sm text-marley-primary">Retail value: $180</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-marley-dark">Matching Premium Changing Pad</p>
                    <p className="text-sm text-marley-primary">Retail value: $45</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-[#FF5757]/10 to-[#FF5757]/5 rounded-xl border border-[#FF5757]/20">
                <p className="text-center font-bold text-marley-dark">
                  🏆 Total Prize Value: <span className="text-[#FF5757] text-xl">$225</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Features with modern styling */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-marley-light/50">
              <h3 className="text-2xl font-bold text-marley-dark mb-6 flex items-center gap-3">
                <span className="text-[#FF5757]">✨</span>
                Why Parents Love This Bag
              </h3>
              
              <div className="space-y-6">
                <div className="group hover:bg-marley-light/30 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-marley-dark mb-1">Real-Life Durability</h4>
                      <p className="text-marley-primary text-sm">Spill-resistant, easy-wipe materials handle every mess</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-marley-light/30 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-marley-dark mb-1">Smart Organization</h4>
                      <p className="text-marley-primary text-sm">Insulated bottle pockets & quick-grab front compartments</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-marley-light/30 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-marley-dark mb-1">Work + Life Balance</h4>
                      <p className="text-marley-primary text-sm">Padded laptop sleeve keeps work and parenting in one place</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-marley-light/30 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-marley-dark mb-1">Versatile Carry</h4>
                      <p className="text-marley-primary text-sm">Convertible backpack or handle styles for hands-free comfort</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};