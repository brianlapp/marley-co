export const WhyParentsLove = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-marley-muted/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-[#FF5757]/10 to-marley-primary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-marley-dark mb-8">
            Why Parents Love Marley Co
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-marley-primary leading-relaxed mb-8">
              Marley Co creates premium diaper bags that balance everyday practicality with modern style. Thoughtful pocket placement keeps bottles upright. Wipe-clean materials handle real life messes. Soft straps and a structured silhouette make it a bag you will actually love to carry. Whether you are running errands or hopping on a weekend trip, Marley Co is built for parents who want function without compromising their look.
            </p>
            
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#FF5757] mb-2">4.9★</div>
                <div className="text-sm text-marley-primary font-medium">Average Rating</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#FF5757] mb-2">10K+</div>
                <div className="text-sm text-marley-primary font-medium">Happy Parents</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#FF5757] mb-2">98%</div>
                <div className="text-sm text-marley-primary font-medium">Would Recommend</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#FF5757] mb-2">24M+</div>
                <div className="text-sm text-marley-primary font-medium">Days of Use</div>
              </div>
            </div>
            
            {/* Main content in beautiful card */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-marley-light/50 text-left">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#FF5757] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-marley-primary">
                      <span className="font-semibold">Thoughtful design</span> keeps bottles upright and essentials organized
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#FF5757] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-marley-primary">
                      <span className="font-semibold">Wipe-clean materials</span> handle real-life messes with ease
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#FF5757] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-marley-primary">
                      <span className="font-semibold">Soft, padded straps</span> and structured silhouette you'll love carrying
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#FF5757] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-marley-primary">
                      <span className="font-semibold">Perfect for errands</span> or weekend trips — versatile and reliable
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#FF5757] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-marley-primary">
                      <span className="font-semibold">Modern style</span> that doesn't scream "diaper bag"
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#FF5757] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-marley-primary">
                      <span className="font-semibold">Function without compromise</span> — the perfect parent essential
                    </p>
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