
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  const mainImage = images[activeImage];

  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const handleThumbnailClick = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
  };


  return (
    <div className="flex flex-col gap-4 md:sticky top-24 self-start">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border shadow-lg group">
        <Image
            src={mainImage}
            alt={`${productName} - main image`}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            key={mainImage}
            priority
            data-ai-hint="product image"
        />
        <div 
          className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
            <ZoomIn className="h-16 w-16 text-white" />
        </div>
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="الصورة السابقة"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="الصورة التالية"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={cn(
              "relative aspect-square w-full rounded-md overflow-hidden border-2 transition-all",
              activeImage === index ? 'border-primary shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
            )}
          >
            <Image
              src={image}
              alt={`${productName} - thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="10vw"
              data-ai-hint="product image"
            />
          </button>
        ))}
      </div>

      <Dialog open={isLightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl w-full h-auto max-h-[90vh] p-4 flex flex-col items-center justify-center">
            <DialogTitle className="sr-only">{productName}</DialogTitle>
            <div className="relative aspect-square w-full max-w-[80vh] max-h-[80vh]">
                <Image
                    src={mainImage}
                    alt={`${productName} - main image`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    key={`lightbox-${mainImage}`}
                />
                 {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handlePrevImage}
                      className="absolute top-1/2 left-2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 text-white hover:bg-black/70 transition-colors"
                      aria-label="الصورة السابقة"
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleNextImage}
                      className="absolute top-1/2 right-2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 text-white hover:bg-black/70 transition-colors"
                      aria-label="الصورة التالية"
                    >
                      <ChevronRight className="h-8 w-8" />
                    </Button>
                  </>
                )}
            </div>
            {images.length > 1 && (
                <div className="grid grid-cols-8 gap-2 mt-4">
                {images.map((image, index) => (
                    <button
                        key={`thumb-${index}`}
                        onClick={() => setActiveImage(index)}
                        className={cn(
                        "relative aspect-square w-full rounded-md overflow-hidden border-2 transition-all",
                        activeImage === index ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'
                        )}
                    >
                        <Image
                            src={image}
                            alt={`${productName} - thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="10vw"
                        />
                    </button>
                ))}
            </div>
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
