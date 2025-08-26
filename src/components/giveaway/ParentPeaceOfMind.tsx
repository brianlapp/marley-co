import { Check } from "lucide-react";

export const ParentPeaceOfMind = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-marley-dark mb-8">
          Real Parent Peace-of-Mind
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-marley-light rounded-lg p-6 mb-4">
              <Check className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-headline text-marley-dark mb-2">Easy to Clean</h4>
            </div>
            <p className="text-marley-primary">
              Everyday messes wipe right off
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-marley-light rounded-lg p-6 mb-4">
              <Check className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-headline text-marley-dark mb-2">Built to Last</h4>
            </div>
            <p className="text-marley-primary">
              Reinforced seams and premium zippers
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-marley-light rounded-lg p-6 mb-4">
              <Check className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-headline text-marley-dark mb-2">Comfortable to Carry</h4>
            </div>
            <p className="text-marley-primary">
              Padded straps distribute weight evenly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};