
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  const mainImage = images[activeImage];

  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col gap-4 md:sticky top-24 self-start">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border shadow-lg">
        <Image
            src={mainImage}
            alt={`${productName} - main image`}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            key={mainImage}
            priority
        />
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/60 transition-colors"
              aria-label="الصورة السابقة"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/60 transition-colors"
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
            />
          </button>
        ))}
      </div>
    </div>
  );
}
