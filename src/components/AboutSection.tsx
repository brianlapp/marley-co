import { EmailCapture } from "./EmailCapture";
import { Gallery } from "./Gallery";

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto space-y-16 md:space-y-24 lg:space-y-32">
        <div id="about" className="space-y-6 md:space-y-8 lg:space-y-10 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans text-[#FF5757] text-center font-bold tracking-wide">
            Welcome to Marley Co.
          </h2>
          <p className="text-lg sm:text-xl text-marley-primary/80 leading-relaxed max-w-3xl mx-auto px-4 md:px-6">
            At Marley Co., we believe that parenting shouldn't mean compromising on style or functionality. That's why we're proud to introduce our premium line of diaper bag backpacks, thoughtfully designed for modern parents who value elegance and practicality.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8 lg:space-y-10 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl sm:text-3xl font-sans text-[#545454] text-center font-bold tracking-wide">
            A Vision of Style and Functionality
          </h3>
          <p className="text-lg sm:text-xl text-marley-primary/80 leading-relaxed max-w-3xl mx-auto px-4 md:px-6">
            Inspired by the ever-changing demands of parenthood and today's upscale fashion trends, Marley Co. was born to offer a solution that looks as good as it performs. Our mission is simple: to create diaper bags that seamlessly blend rugged durability with chic design, empowering parents to feel confident, organized, and prepared wherever their journey takes them.
          </p>
        </div>

        <Gallery />

        <div id="features" className="space-y-6 md:space-y-8 lg:space-y-10 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans text-[#FF5757] text-center font-bold tracking-wide">
            Premium Features
          </h3>
          <div className="space-y-6 md:space-y-8 text-lg sm:text-xl text-marley-primary/80 max-w-3xl mx-auto px-4 md:px-6">
            <p className="leading-relaxed">
              Our diaper bags are built to meet the challenges of parenting in Canada's diverse climates while keeping your essentials secure and accessible:
            </p>
            <ul className="space-y-4 md:space-y-6 list-none pl-4 md:pl-6">
              <li className="flex items-start space-x-3">
                <span className="text-[#FF5757] text-2xl">•</span>
                <span>Heavy-Duty Materials: Engineered to withstand the wear and tear of everyday use</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FF5757] text-2xl">•</span>
                <span>Strong & Large Zippers: Smooth, durable zippers designed for easy access</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FF5757] text-2xl">•</span>
                <span>Ample Storage: Thoughtfully designed pockets for all your parenting essentials</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FF5757] text-2xl">•</span>
                <span>Water-Resistant Exterior: Keep your belongings safe and dry</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#FF5757] text-2xl">•</span>
                <span>Stylish Design: Our sleek, modern aesthetic ensures that your diaper bag feels like a fashion statement</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8 lg:space-y-10 text-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans text-[#FF5757] font-bold tracking-wide">
            Be the First to Know
          </h3>
          <p className="text-lg sm:text-xl text-marley-primary/80 leading-relaxed max-w-2xl mx-auto px-4 md:px-6">
            We're thrilled to announce that our online store will be launching soon! Don't miss your chance to own one of these game-changing diaper bags.
          </p>
          <div className="flex justify-center pt-4 md:pt-8">
            <EmailCapture />
          </div>
        </div>
      </div>
    </section>
  );
};
