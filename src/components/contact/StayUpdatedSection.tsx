import { Button } from "@/components/ui/button";

export const StayUpdatedSection = () => {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-marley-light">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-6 md:space-y-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <div>
            <h3 className="text-xl md:text-2xl font-sans text-marley-primary mb-3 md:mb-4">Stay Updated</h3>
            <p className="font-sans text-marley-primary/80 mb-4 md:mb-6">
              If you haven't already, don't forget to sign up for our mailing list to be the first to know about our launch, exclusive promotions, and parenting tips. Plus, get your $15 off coupon when you join the Marley Co. family!
            </p>
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#FF5757] hover:bg-[#FF5757]/90 text-white h-10 md:h-12 px-6 md:px-8"
            >
              Sign Up for Updates
            </Button>
          </div>

          <div className="pt-6 md:pt-8 border-t border-marley-primary/10">
            <p className="text-base md:text-lg font-sans text-marley-primary/80">
              Thank you for your patience as we work hard to bring you diaper bags that redefine style and functionality. We're beyond excited to grow this journey together with you.
            </p>
            <p className="mt-3 md:mt-4 font-sans text-marley-primary">
              With love,<br />
              The Marley Co. Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};