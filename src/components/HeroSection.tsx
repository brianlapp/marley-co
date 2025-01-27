import { useEffect, useState } from "react";
import { EmailCapture } from "./EmailCapture";

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const images = [
    'DSC_9898-positive.jpg',
    'DSC_9900-positive.jpg',
    'DSC_9901-positive.jpg',
    'DSC_9910-positive.jpg',
    'DSC_9911-positive.jpg'
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    const numImages = isMobile ? 2 : 3; // Show 2 images on mobile, 3 on desktop
    
    for (let i = 0; i < numImages; i++) {
      const index = (currentImageIndex + i) % images.length;
      nextImages.push(images[index]);
    }
    return nextImages;
  };

  return (
    <section className="pt-8 md:pt-16">
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-3'} h-full gap-1`}>
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
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-marley-primary leading-[0.85]">
            ONLINE STORE
          </h1>
          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-marley-primary mt-[-0.3em]">
            COMING SOON
          </p>
        </div>
        
        <div className="space-y-4 md:space-y-6 mt-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-[#FF5757] uppercase">
            $15 Sign Up Bonus
          </h2>
          <EmailCapture />
        </div>
      </div>
    </section>
  );
};