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
            How To Enter
          </h2>
          <p className="text-xl text-marley-primary max-w-2xl mx-auto">
            Entering is quick and easy! Follow these simple steps to secure your chance to win this amazing diaper bag.
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
              <h4 className="text-xl font-bold text-marley-dark mb-3">Fill in the short entry form with your name and email</h4>
              <p className="text-marley-primary">
                Complete the quick entry form with your basic details. Takes less than 30 seconds!
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
              <h4 className="text-xl font-bold text-marley-dark mb-3">Confirm your entry in your inbox so we can contact the winner</h4>
              <p className="text-marley-primary">
                Check your email and confirm your entry. This ensures we can contact you if you win!
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
              <h4 className="text-xl font-bold text-marley-dark mb-3">Watch your email for bonus entry options and early access to promos</h4>
              <p className="text-marley-primary">
                Look for bonus actions like following Marley Co on Instagram or sharing with a friend to increase your odds.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-marley-light to-marley-muted rounded-2xl p-8 text-center shadow-lg border border-marley-light/50">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h4 className="text-2xl font-bold text-marley-dark">Pro Tip</h4>
          </div>
          <p className="text-lg text-marley-primary max-w-3xl mx-auto leading-relaxed">
            After you submit, look for bonus actions like following Marley Co on Instagram or sharing with a friend to increase your odds.
          </p>
        </div>
      </div>
    </section>
  );
};