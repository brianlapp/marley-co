import { useEffect, useState } from "react";

interface Image {
  id: number;
  src: string;
}

export const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Using the uploaded images from lovable-uploads folder
        const imageNames = [
          '768adfd4-910f-4d6e-a1b8-3bdfb9878afe.png', // Adding the hero image
          'DSC_9898-positive.jpg',
          'DSC_9900-positive.jpg',
          'DSC_9901-positive.jpg',
          'DSC_9910-positive.jpg',
          'DSC_9911-positive.jpg',
          'DSC_9913-positive.jpg',
          'DSC_9915-positive.jpg',
          'DSC_9918-positive.jpg',
          'DSC_9921-positive.jpg',
          'DSC_9924-positive.jpg',
          'DSC_9928-positive.jpg',
          'DSC_9930-positive.jpg',
          'DSC_9934-positive.jpg',
          'DSC_9938-positive.jpg',
          'DSC_9949-positive.jpg'
        ];

        const tempImages = imageNames.map((name, index) => ({
          id: index + 1,
          src: `/lovable-uploads/${name}`
        }));
        
        setImages(tempImages);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 sm:h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 sm:h-12 w-8 sm:w-12 border-b-2 border-marley-accent"></div>
      </div>
    );
  }

  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[#545454] py-8 sm:py-12 md:py-16">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg group"
              style={{
                opacity: 0,
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <img
                src={image.src}
                alt={`Gallery image ${image.id}`}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};