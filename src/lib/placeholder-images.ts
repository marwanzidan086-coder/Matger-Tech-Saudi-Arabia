import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  images: string[];
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

// A new helper function to get images for a specific product ID.
export const getImagesForProduct = (productId: string): string[] => {
  const imageSet = PlaceHolderImages.find(img => img.id === productId);
  if (imageSet && imageSet.images.length > 0) {
    return imageSet.images;
  }
  // Fallback in case images are not found for a specific product.
  // This provides a consistent placeholder image.
  return [`https://picsum.photos/seed/${productId}/600/600`];
};
