import { Check } from "lucide-react";
import heroBackground from "@/assets/new-hero-background.jpg";

export const WhoShouldEnter = () => {
  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-marley-light/85 via-marley-light/75 to-marley-muted/90 z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <h2 className="font-headline text-marley-dark mb-6">
          Who Should Enter
        </h2>
        <p className="text-lg lg:text-xl text-marley-primary max-w-3xl mx-auto mb-12 leading-relaxed">
          This giveaway is perfect for anyone who values quality, style, and functionality in their everyday essentials.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-red/30">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-accent-red to-accent-red/80 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <h4 className="font-headline text-marley-dark mb-4 text-lg lg:text-xl">New and expecting parents who value quality and design</h4>
            <p className="text-marley-primary leading-relaxed">
              Parents who value quality and design in their everyday essentials
            </p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-red/30">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-accent-red to-accent-red/80 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <h4 className="font-headline text-marley-dark mb-4 text-lg lg:text-xl">Caregivers and grandparents looking for a great gift</h4>
            <p className="text-marley-primary leading-relaxed">
              Looking for a great gift that combines style with functionality
            </p>
          </div>
          
          <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-red/30">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-accent-red to-accent-red/80 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <h4 className="font-headline text-marley-dark mb-4 text-lg lg:text-xl">Any parent who wants an organized, stylish bag that outlives the diaper years</h4>
            <p className="text-marley-primary leading-relaxed">
              Any parent who wants an organized, stylish bag that outlives the diaper years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};