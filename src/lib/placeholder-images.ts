import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  images: string[];
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
