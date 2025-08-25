import { Check } from "lucide-react";

export const GiveawayDetails = () => {
  return (
    <section className="py-16 bg-marley-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-marley-dark mb-8">
              About the Giveaway
            </h2>
            <p className="text-lg text-marley-primary mb-8 leading-relaxed">
              Enter for a chance to win a Marley Co diaper bag in our most popular colour. 
              No purchase required. One simple form. It takes less than a minute.
            </p>
            
            <h3 className="text-marley-dark mb-6">
              What You Could Win
            </h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-marley-primary">1 x Marley Co Premium Diaper Bag</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-marley-primary">Matching changing pad</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-marley-dark mb-6">
              What Makes Marley Co Different
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-marley-primary">
                  Designed for real life with spill-resistant, easy-wipe interior and exterior
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-marley-primary">
                  Smart organization including insulated bottle pockets and quick-grab front zip
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-marley-primary">
                  Padded laptop sleeve so your work and parent life stay in one stylish place
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-marley-primary">
                  Convertible carry options backpack or top handle for hands-free comfort
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-marley-primary">
                  Premium hardware and stitching for durability that lasts beyond the baby stage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};