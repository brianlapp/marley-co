import { Button } from "@/components/ui/button";

export const AdvertSection = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#FF5757] rounded-lg p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to advertise with us?
          </h2>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Reach our growing community of conscious consumers
          </p>
          <Button 
            variant="outline" 
            className="bg-white text-[#FF5757] hover:bg-white/90 hover:text-[#FF5757] font-semibold px-8"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};