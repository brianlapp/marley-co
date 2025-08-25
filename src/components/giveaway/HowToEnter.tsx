import { Check } from "lucide-react";

export const HowToEnter = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF5757] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-marley-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-marley-dark mb-6">
            Enter in <span className="text-[#FF5757]">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-marley-primary max-w-2xl mx-auto">
            It's quick, easy, and completely free. Your dream diaper bag is just minutes away!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group text-center hover:scale-105 transition-all duration-300">
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-[#FF5757] to-[#FF5757]/80 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#FF5757]/50 to-transparent transform -translate-y-1/2"></div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-marley-light/30">
              <h4 className="text-xl font-bold text-marley-dark mb-3">📝 Fill the Form</h4>
              <p className="text-marley-primary">
                Quick entry form with just your name and email — takes under 30 seconds
              </p>
            </div>
          </div>
          
          <div className="group text-center hover:scale-105 transition-all duration-300">
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-[#FF5757] to-[#FF5757]/80 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#FF5757]/50 to-transparent transform -translate-y-1/2"></div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-marley-light/30">
              <h4 className="text-xl font-bold text-marley-dark mb-3">✉️ Confirm Entry</h4>
              <p className="text-marley-primary">
                Check your inbox and confirm — this ensures we can reach you if you win!
              </p>
            </div>
          </div>
          
          <div className="group text-center hover:scale-105 transition-all duration-300">
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-[#FF5757] to-[#FF5757]/80 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-marley-light/30">
              <h4 className="text-xl font-bold text-marley-dark mb-3">🎁 Get Updates</h4>
              <p className="text-marley-primary">
                Watch for bonus entry opportunities and early access to exclusive deals
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-marley-light to-marley-muted rounded-2xl p-8 text-center shadow-lg border border-marley-light/50">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">💡</span>
            <h4 className="text-2xl font-bold text-marley-dark">Pro Tip</h4>
          </div>
          <p className="text-lg text-marley-primary max-w-3xl mx-auto leading-relaxed">
            After submitting, look for <span className="font-semibold text-[#FF5757]">bonus entry opportunities</span> like following Marley Co on social media or sharing with friends to multiply your chances of winning!
          </p>
        </div>
      </div>
    </section>
  );
};