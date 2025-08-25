import { Check } from "lucide-react";

export const HowToEnter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-marley-dark mb-8 text-center">
          How To Enter
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-marley-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-marley-primary">1</span>
            </div>
            <h4 className="text-marley-dark mb-3">Fill the Form</h4>
            <p className="text-marley-primary">
              Fill in the short entry form with your name and email
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-marley-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-marley-primary">2</span>
            </div>
            <h4 className="text-marley-dark mb-3">Confirm Entry</h4>
            <p className="text-marley-primary">
              Confirm your entry in your inbox so we can contact the winner
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-marley-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-marley-primary">3</span>
            </div>
            <h4 className="text-marley-dark mb-3">Get Updates</h4>
            <p className="text-marley-primary">
              Watch your email for bonus entry options and early access to promos
            </p>
          </div>
        </div>
        
        <div className="bg-marley-light rounded-lg p-6 text-center">
          <h4 className="text-marley-dark mb-3">Pro Tip</h4>
          <p className="text-marley-primary">
            After you submit, look for bonus actions like following Marley Co on Instagram or sharing with a friend to increase your odds.
          </p>
        </div>
      </div>
    </section>
  );
};