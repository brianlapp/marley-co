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
      <div className="w-full h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-marley-accent"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative aspect-square overflow-hidden rounded-lg group animate-fadeIn"
          style={{ animationDelay: `${image.id * 0.1}s` }}
        >
          <img
            src={image.src}
            alt={`Gallery image ${image.id}`}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-marley-primary/0 group-hover:bg-marley-primary/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
};