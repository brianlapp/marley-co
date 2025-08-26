import { Check } from "lucide-react";

export const ParentPeaceOfMind = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-marley-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-headline text-marley-dark mb-6">
          Real Parent Peace-of-Mind
        </h2>
        <p className="text-lg lg:text-xl text-marley-primary max-w-3xl mx-auto mb-12 leading-relaxed">
          Designed with real parents in mind, every detail serves a purpose to make your daily routine smoother.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-red/30">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-accent-red to-accent-red/80 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <h4 className="font-headline text-marley-dark mb-4 text-lg lg:text-xl">Easy to Clean</h4>
            <p className="text-marley-primary leading-relaxed">
              Everyday messes wipe right off
            </p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-red/30">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-accent-red to-accent-red/80 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <h4 className="font-headline text-marley-dark mb-4 text-lg lg:text-xl">Built to Last</h4>
            <p className="text-marley-primary leading-relaxed">
              Reinforced seams and premium zippers
            </p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-red/30">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-accent-red to-accent-red/80 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <h4 className="font-headline text-marley-dark mb-4 text-lg lg:text-xl">Comfortable to Carry</h4>
            <p className="text-marley-primary leading-relaxed">
              Padded straps distribute weight evenly
            </p>
          </div>
        </div>
        
        {/* Technical Drawing Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-accent-red/30 max-w-4xl mx-auto">
          <h3 className="font-headline text-2xl font-bold text-marley-dark mb-6">
            Thoughtfully Engineered Design
          </h3>
          <div className="relative group">
            <img 
              src="/lovable-uploads/a1e192ee-c555-465d-8bb1-49ad6b3cca10.png"
              alt="Technical drawing of Marley Co diaper bag showing dimensions and multiple views"
              className="w-full h-auto max-w-3xl mx-auto transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>
          <p className="text-marley-primary mt-6 leading-relaxed">
            Every measurement, pocket placement, and strap position has been carefully calculated for maximum functionality and comfort.
          </p>
        </div>
      </div>
    </section>
  );
};