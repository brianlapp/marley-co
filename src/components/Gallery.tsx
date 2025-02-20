import { useEffect, useState } from "react";
import { ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface Image {
  id: number;
  src: string;
}

export const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => setSelectedImage(null)}
            />
          )}
        </DialogContent>
      </Dialog>

      <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[#545454] py-8 sm:py-12 md:py-16">
        <div className="max-w-[2000px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative aspect-square overflow-hidden rounded-lg group opacity-0 animate-fadeIn cursor-pointer md:last:hidden lg:last:block`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};