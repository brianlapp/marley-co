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
        // This will be replaced with actual images from the public/gallery folder
        const tempImages = Array.from({ length: 16 }, (_, i) => ({
          id: i + 1,
          src: `/gallery/image${i + 1}.jpg`,
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