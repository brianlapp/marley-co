import { useEffect, useState } from "react";
import { EmailCapture } from "./EmailCapture";

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'DSC_9898-positive.jpg',
    'DSC_9900-positive.jpg',
    'DSC_9901-positive.jpg',
    'DSC_9910-positive.jpg',
    'DSC_9911-positive.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-16">
      {/* Hero Slider */}
      <div className="relative h-[70vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={`/lovable-uploads/${image}`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-marley-primary mb-8">
          Online Store Coming Soon!
        </h1>
        
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FF5757]">
            $15 Sign Up Bonus
          </h2>
          <p className="text-lg text-marley-primary/80 mb-8">
            Sign up today and get $15 towards your next purchase with us
          </p>
          <EmailCapture />
        </div>
      </div>
    </section>
  );
};