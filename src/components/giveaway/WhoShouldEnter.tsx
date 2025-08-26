import { Check } from "lucide-react";

export const WhoShouldEnter = () => {
  return (
    <section className="py-16 bg-marley-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-marley-dark mb-8">
          Who Should Enter
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-marley-dark mb-3">New and expecting parents who value quality and design</h4>
            <p className="text-marley-primary">
              Parents who value quality and design in their everyday essentials
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-marley-dark mb-3">Caregivers and grandparents looking for a great gift</h4>
            <p className="text-marley-primary">
              Looking for a great gift that combines style with functionality
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-marley-dark mb-3">Any parent who wants an organized, stylish bag that outlives the diaper years</h4>
            <p className="text-marley-primary">
              Any parent who wants an organized, stylish bag that outlives the diaper years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};