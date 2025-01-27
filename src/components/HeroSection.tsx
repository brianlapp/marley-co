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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getNextImages = () => {
    const nextImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentImageIndex + i) % images.length;
      nextImages.push(images[index]);
    }
    return nextImages;
  };

  return (
    <section className="pt-16">
      {/* Hero Slider */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="grid grid-cols-3 h-full gap-1">
          {getNextImages().map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative h-full overflow-hidden transition-opacity duration-700"
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
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="flex flex-col items-center space-y-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-marley-primary leading-[0.95]">
            ONLINE STORE
          </h1>
          <p className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-marley-primary/90 mt-[-0.2em]">
            Coming Soon
          </p>
        </div>
        
        <div className="space-y-6 mt-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-[#FF5757] uppercase">
            $15 Sign Up Bonus
          </h2>
          <p className="text-lg text-marley-primary/80 mb-8 font-sans">
            Sign up today and get $15 towards your next purchase with us
          </p>
          <EmailCapture />
        </div>
      </div>
    </section>
  );
};