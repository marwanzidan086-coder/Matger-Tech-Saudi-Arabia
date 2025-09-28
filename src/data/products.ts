
import { type Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { categories } from '@/lib/categories';

const getImages = (productId: string): string[] => {
  const imageSet = PlaceHolderImages.find(img => img.id === productId);
  if (imageSet && imageSet.images.length > 0) {
    return imageSet.images;
  }
  return Array.from({length: 1}, (_, i) => `https://picsum.photos/seed/${productId}-${i + 1}/600/600`);
};

const allProducts: Product[] = [
];

// Helper function to create product lists for different categories
const createProductList = (products: Product[], category: string): Product[] => {
    return products.filter(p => p.category === category);
};

// Create lists for each category
export const electronicsProducts: Product[] = createProductList(allProducts, categories.electronics.slug);
export const homeProducts: Product[] = createProductList(allProducts, categories.home.slug);
export const healthProducts: Product[] = createProductList(allProducts, categories.health.slug);
export const miscProducts: Product[] = createProductList(allProducts, categories.misc.slug);


// Combine all product arrays here
export const products: Product[] = [
    ...allProducts
];
